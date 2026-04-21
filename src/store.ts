import {PropertyValues, ReactiveController, state} from '@snar/lit'
import {FormBuilder} from '@vdegenne/forms/FormBuilder.js'
import {saveToLocalStorage} from 'snar-save-to-local-storage'
import {availablePages} from './constants.js'
import {getMainPage, Page} from './pages/index.js'
import {dates} from './dates.js'

@saveToLocalStorage('historical-dates:store')
export class AppStore extends ReactiveController {
	@state() page: Page = 'main'

	F = new FormBuilder(this)

	protected updated(changed: PropertyValues<this>) {
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

		if (changed.has('dateIndex')) {
			const mainPage = getMainPage()
			mainPage.updateComplete.then(() => {
				mainPage.focusSelectedItem()
			})
		}
	}

	@state() dateIndex = 0

	previousDateIndex() {
		if (!dates.length) return
		this.dateIndex = (this.dateIndex - 1 + dates.length) % dates.length
	}

	nextDateIndex() {
		if (!dates.length) return
		this.dateIndex = (this.dateIndex + 1) % dates.length
	}
}

export const store = new AppStore()
