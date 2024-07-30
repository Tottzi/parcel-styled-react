import {useTheme} from 'styled-components'
import type {IconProperties} from '../types'

const GoDeactivatedIcon = ({
	color,
	stroke,
	fill,
	children,
	...properties
}: IconProperties) => {
	const theme = useTheme()

	return (
		<svg
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...properties}
		>
			<path
				d='M17.778 4.444H3.556c-.49 0-.89.4-.89.89v21.333c0 .488.4.888.89.888H15.8a9.768 9.768 0 0 0 2.517 2.628 4.247 4.247 0 0 1-.54.04H3.557A3.559 3.559 0 0 1 0 26.666V5.333a3.559 3.559 0 0 1 3.556-3.555h14.222a3.559 3.559 0 0 1 3.555 3.555v7.484a9.665 9.665 0 0 0-2.666 1.21V5.334c0-.489-.4-.889-.89-.889Z'
				fill={color}
			/>
			<path
				d='M6.37 23.704a.889.889 0 0 0 0 1.777h8a.889.889 0 0 0 0-1.777h-8Z'
				fill={color}
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M29.657 16.565A8 8 0 1 1 18.343 27.88a8 8 0 0 1 11.314-11.314Z'
				fill={fill ?? theme.errorRed}
			/>
			<path
				d='M20.818 25.404a.94.94 0 0 1 0-1.333l1.849-1.849-1.849-1.848a.943.943 0 0 1 1.333-1.333L24 20.888l1.849-1.849a.944.944 0 0 1 1.333 1.333l-1.849 1.85 1.849 1.848a.944.944 0 0 1-1.333 1.333l-1.85-1.848-1.848 1.848a.94.94 0 0 1-1.333 0Z'
				fill={stroke ?? 'white'}
			/>
			{children}
		</svg>
	)
}

export default GoDeactivatedIcon
