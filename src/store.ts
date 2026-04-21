import {speakEnglish, speakFrench} from '@vdegenne/speech'
import {PropertyValues, ReactiveController, state} from '@snar/lit'
import {FormBuilder} from '@vdegenne/forms/FormBuilder.js'
import {saveToLocalStorage} from 'snar-save-to-local-storage'
import {availablePages} from './constants.js'
import {dates} from './dates.js'
import {getMainPage, Page} from './pages/index.js'
import {sleep} from './utils.js'

@saveToLocalStorage('historical-dates:store')
export class AppStore extends ReactiveController {
	@state() page: Page = 'main'

	@state() dateIndex = 0
	@state() quizDateIndex = -1

	@state() search = ''

	F = new FormBuilder(this)

	#firstUpdate = true

	update(changed: PropertyValues<this>) {
		if (this.#firstUpdate) {
			this.quizDateIndex = -1
		}
		super.update(changed)
	}

	protected async updated(changed: PropertyValues<this>) {
		// const {hash, router} = await import('./router.js')
		if (changed.has('page')) {
			// import('./router.js').then(({router}) => {
			// 	router.hash.$('page', this.page)
			// })
			const page = availablePages.includes(this.page) ? this.page : '404'
			import(`./pages/page-${page}.ts`)
				.then(() => {
					console.log(`Page ${page} loaded.`)
				})
				.catch(() => {})
		}

		if (changed.has('dateIndex') || changed.has('quizDateIndex')) {
			if (this.#firstUpdate || this.quizDateIndex !== -1) {
				await sleep(200)
				const mainPage = getMainPage()
				mainPage.updateComplete.then(() => {
					mainPage.focusSelectedItem('instant')
				})
				this.#firstUpdate = false

				if (this.quizDateIndex !== -1) {
					const date = dates[this.quizDateIndex]!
					speakFrench(date.date)
				}
			}
		}
	}

	previousDateIndex() {
		if (!dates.length) return
		this.dateIndex = (this.dateIndex - 1 + dates.length) % dates.length
	}

	nextDateIndex() {
		if (!dates.length) return
		this.dateIndex = (this.dateIndex + 1) % dates.length
	}

	newQuizDateIndex() {
		this.search = ''
		this.quizDateIndex = Math.floor(Math.random() * dates.length)
	}
}

export const store = new AppStore()
