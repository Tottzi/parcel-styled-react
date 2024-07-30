import type {IconProperties} from '../types'

const ChevronLeftCircleIcon = ({
	color,
	fill,
	children,
	...properties
}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M10.438 14.938a1.494 1.494 0 0 0 0 2.118l6.5 6.506a1.494 1.494 0 0 0 2.118 0 1.5 1.5 0 0 0 0-2.118l-5.437-5.438 5.437-5.437a1.494 1.494 0 0 0 0-2.119 1.5 1.5 0 0 0-2.119 0l-6.5 6.488Z'
			fill={fill ?? '#fff'}
		/>
		<path
			d='M32 16a16 16 0 1 1-32 0 16 16 0 0 1 32 0Zm-15.063 7.563a1.494 1.494 0 0 0 2.12 0 1.5 1.5 0 0 0 0-2.12l-5.438-5.437 5.437-5.437a1.494 1.494 0 0 0 0-2.119 1.5 1.5 0 0 0-2.119 0l-6.5 6.488a1.494 1.494 0 0 0 0 2.118l6.5 6.506Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default ChevronLeftCircleIcon
