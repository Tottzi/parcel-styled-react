import type {IconProperties} from '../types'

const RelatedIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			fillRule='evenodd'
			d='M5.458 10.542a5.458 5.458 0 1 0 5.249 6.958h10.61a5.458 5.458 0 1 0 0-3h-10.61a5.46 5.46 0 0 0-5.25-3.958ZM3 16a2.458 2.458 0 1 1 4.916 0A2.458 2.458 0 0 1 3 16Zm23.567-2.458a2.458 2.458 0 1 0 0 4.916 2.458 2.458 0 0 0 0-4.916Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default RelatedIcon
