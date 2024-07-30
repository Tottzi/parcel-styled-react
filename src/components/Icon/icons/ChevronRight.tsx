import type {IconProperties} from '../types'

const ChevronRightIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M7.82 3.264a1 1 0 0 1 0-1.379L8.888.761a1 1 0 0 1 1.449 0l13.842 14.55a1 1 0 0 1 0 1.378L10.338 31.24a1 1 0 0 1-1.45 0L7.82 30.114a1 1 0 0 1 0-1.379L19.281 16.69a1 1 0 0 0 0-1.378L7.82 3.264Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default ChevronRightIcon
