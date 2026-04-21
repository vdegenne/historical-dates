import {MdListItem} from '@material/web/all.js'
import {withController} from '@snar/lit'
import {css, html} from 'lit'
import {withStyles} from 'lit-with-styles'
import {customElement, query} from 'lit/decorators.js'
import {dates} from '../dates.js'
import {store} from '../store.js'
import {PageElement} from './PageElement.js'

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
`)
export class PageMain extends PageElement {
	@query('md-list-item[selected]') selectedListItem?: MdListItem

	render() {
		console.log(dates)
		return html`<!---->
			<md-list>
				${dates.map((date, i) => {
					const isMinus = date.date.replace(/^~/, '').startsWith('-')
					return html`<!-- -->
						<md-list-item ?selected=${i === store.dateIndex}>
							<div
								slot="start"
								class="${isMinus
									? 'text-(--md-sys-color-error)'
									: 'text-(--md-sys-color-primary)'}"
							>
								${date.date}
							</div>
							<div slot="headline">${date.title}</div>
							${date.content
								? html`<!-- -->
										<span slot="supporting-text" class="whitespace-pre-line"
											>${date.content}</span
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

	focusSelectedItem() {
		this.selectedListItem?.scrollIntoView({
			block: 'center',
			inline: 'center',
			behavior: 'smooth',
		})
	}
}

// export const pageMain = new PageMain();
