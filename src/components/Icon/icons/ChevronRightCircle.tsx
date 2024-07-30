import type {IconProperties} from '../types'

const ChevronRightCircleIcon = ({
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
			d='M21.563 14.938a1.494 1.494 0 0 1 0 2.118l-6.5 6.506a1.5 1.5 0 0 1-2.119-2.119l5.437-5.437-5.437-5.437a1.5 1.5 0 0 1 2.119-2.119l6.5 6.488Z'
			fill={fill ?? '#fff'}
		/>
		<path
			d='M0 16a16 16 0 1 0 32 0 16 16 0 0 0-32 0Zm15.063 7.563a1.5 1.5 0 0 1-2.119-2.119l5.437-5.438-5.437-5.437a1.5 1.5 0 0 1 2.119-2.119l6.5 6.488a1.494 1.494 0 0 1 0 2.118l-6.5 6.506Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default ChevronRightCircleIcon
