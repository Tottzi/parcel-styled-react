import type {IconProperties} from '../types'

const MinusCircleIcon = ({
	color,
	children,
	fill,
	...properties
}: IconProperties) => (
	<svg
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
			fill={color}
		/>
		<path
			d='M8 15.8c0-.849.688-1.537 1.537-1.537h13.325a1.538 1.538 0 0 1 0 3.075H9.539A1.538 1.538 0 0 1 8 15.8Z'
			fill={fill ?? '#fff'}
		/>
		{children}
	</svg>
)

export default MinusCircleIcon
