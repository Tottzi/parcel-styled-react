export const opacity = (color: string, opacity: number) => {
	if (color.startsWith('#')) {
		let patchedColor = color

		if (color.length === 4) {
			patchedColor = `#${color
				.slice(1)
				.split('')
				.map((value) => value.repeat(2))
				.join('')}`
		}

		return `${patchedColor.slice(0, 7)}${Math.round(opacity * 255).toString(
			16
		)}`
	}

	if (color.startsWith('rgb(')) {
		return `rgba(${color.slice(4, -1)},${opacity})`
	}

	throw new Error(`Unsupported color ${color}`)
}

export const delay = async (milliseconds?: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, milliseconds)
	})
}
