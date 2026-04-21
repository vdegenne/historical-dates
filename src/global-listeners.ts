import {cquerySelector} from 'html-vision'
import {DEV} from './constants.js'
import {getThemeStore, openSettingsDialog} from './imports.js'
import toast from 'toastit'
import {app} from './app-shell/app-shell.js'

const inputNames = ['INPUT', 'TEXTAREA', 'MD-FILLED-TEXT-FIELD']
export function eventIsFromInput(event: Event) {
	return (event.composedPath() as HTMLElement[]).some((el) => {
		return (
			inputNames.includes(el.tagName) || el.hasAttribute?.('contenteditable')
		)
	})
}

window.addEventListener('keydown', async (event: KeyboardEvent) => {
	if (event.altKey || event.ctrlKey) {
		return
	}

	if (eventIsFromInput(event)) {
		return
	}

	const button = cquerySelector(`[key="${event.key}"]`)
	if (button) {
		button?.click()
		return
	}

	switch (event.key) {
		case 'd':
			// ;(await getThemeStore()).toggleMode()
			break
		case 's':
			// openSettingsDialog()
			break
	}
})

document.addEventListener('keydown', (event: KeyboardEvent) => {
	const key = event.key

	const isLetter = key.length === 1 && /[a-zA-Z]/.test(key)

	const editingKeys = [
		'Backspace',
		'Delete',
		'ArrowLeft',
		'ArrowRight',
		'ArrowUp',
		'ArrowDown',
		'Enter',
		'Tab',
	]

	const isEditingKey = editingKeys.indexOf(key) !== -1

	if (isLetter || isEditingKey) {
		app.textfield?.focus()
	}
})

window.addEventListener('voice-recorder-submit', async (event: Event) => {
	const {input, mode} = (event as CustomEvent).detail
	if (input && mode === 0) {
		const {store} = await import('./store.js')
		store.search = input
	}
})

export {}
