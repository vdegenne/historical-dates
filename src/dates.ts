import _dates from '/dates.txt?raw'

export interface Date {
	date: string
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
		const [date, ...title] = lines[0]!.split(' ')

		return {
			date,
			title: title.join(' '),
			content: lines.slice(1).join('\n'),
		} as Date
	})

	return dates.sort((a, b) => parseDate(a.date!) - parseDate(b.date!))
}

export const dates = treatRaw(_dates)
