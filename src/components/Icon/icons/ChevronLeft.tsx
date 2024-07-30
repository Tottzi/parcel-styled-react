import type {IconProperties} from '../types'

const ChevronLeftIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M24.18 3.264a1 1 0 0 0 0-1.379L23.111.761a1 1 0 0 0-1.449 0L7.819 15.311a1 1 0 0 0 0 1.378l13.843 14.55a1 1 0 0 0 1.449 0l1.07-1.124a1 1 0 0 0 0-1.379L12.717 16.69a1 1 0 0 1 0-1.378L24.18 3.264Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default ChevronLeftIcon
