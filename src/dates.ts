import _dates from '/dates.txt?raw'

export interface Date {
	date: string
	start?: boolean
	end?: boolean
	title: string
	content: string
}

function parseDate(date: string): number {
	if (date.startsWith('~-')) return -Number(date.slice(2))
	if (date.startsWith('~')) return Number(date.slice(1))
	return Number(date)
}

function treatRaw(raw: string): Date[] {
	const blocks = raw.split('\n\n')

	const dates = blocks.map((block) => {
		const lines = block.split('\n')
		const firstLine = lines[0]!.split(' ')

		const date = firstLine[0]!
		let end = false
		let title = firstLine.slice(1).join(' ')

		if (title.startsWith('fin ')) {
			title = title.replace(/^fin /, '')
			end = true
		}

		const dateObj: Date = {
			date,
			title,
			end,
			content: lines.slice(1).join('\n'),
		}

		return dateObj
	})

	return dates.sort((a, b) => parseDate(a.date!) - parseDate(b.date!))
}

export const dates = treatRaw(_dates)
