import {MdListItem} from '@material/web/all.js'
import {withController} from '@snar/lit'
import {css, html} from 'lit'
import {withStyles} from 'lit-with-styles'
import {customElement, query} from 'lit/decorators.js'
import {Date, dates} from '../dates.js'
import {store} from '../store.js'
import {PageElement} from './PageElement.js'
import {createHighlightedHtml} from '../utils.js'

declare global {
	interface HTMLElementTagNameMap {
		'page-main': PageMain
	}
}

@customElement('page-main')
@withController(store)
@withStyles(css`
	:host {
	}

	md-list-item[selected] {
		background-color: var(--md-sys-color-surface-container-highest);
	}

	md-list-item[zero] {
		background-color: var(--md-sys-color-primary-container);
		--md-sys-color-primary: var(--md-sys-color-on-primary-container);
		--md-sys-color-on-surface: var(--md-sys-color-on-primary-container);
		--md-sys-color-on-surface-variant: var(
			--md-sys-color-on-secondary-container
		);
	}

	.highlight {
		background-color: var(--md-sys-color-primary-container);
		color: var(--md-sys-color-on-primary-container);
	}
`)
export class PageMain extends PageElement {
	@query('md-list-item[selected]') selectedListItem?: MdListItem

	render() {
		const search = store.search.toLowerCase()
		const filteredDates: Date[] = dates.filter((date) => {
			if (store.quizDateIndex >= 0 || !search) return date
			return (
				date.title.toLowerCase().includes(search) ||
				date.content.toLowerCase().includes(search)
			)
		})

		// console.log(dates)
		return html`<!---->
			<md-list class="mb-24">
				${filteredDates.map((date, i) => {
					const isMinus = date.date.replace(/^~/, '').startsWith('-')
					return html`<!-- -->
						<md-list-item
							?selected=${store.quizDateIndex >= 0
								? i === store.quizDateIndex
								: i === store.dateIndex}
							?zero=${date.date === '0'}
							@click=${() => {
								if (store.quizDateIndex !== -1) {
									store.quizDateIndex = -1
									return
								} else {
									store.dateIndex = i
								}
							}}
						>
							<div
								slot="start"
								class="${isMinus
									? 'text-(--md-sys-color-error)'
									: 'text-(--md-sys-color-primary)'}"
							>
								${date.date}
							</div>
							<div slot="headline">
								${store.quizDateIndex >= 0 && i === store.quizDateIndex
									? '????????????'
									: createHighlightedHtml(date.title, search)}
							</div>
							${date.content && store.quizDateIndex !== i
								? html`<!-- -->
										<span slot="supporting-text" class="whitespace-pre-line"
											>${createHighlightedHtml(date.content, search)}</span
										>
										<!-- -->`
								: null}
						</md-list-item>
						${i !== dates.length - 1
							? html`<!-- -->
									<md-divider></md-divider>
									<!-- -->`
							: null}
						<!-- -->`
				})}
			</md-list>
			<!----> `
	}

	focusSelectedItem(behavior: ScrollBehavior = 'smooth') {
		this.selectedListItem?.scrollIntoView({
			block: 'center',
			inline: 'center',
			behavior,
		})
	}
}

// export const pageMain = new PageMain();
