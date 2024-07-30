import type {IconProperties} from '../types'

const ChevronUpIcon = ({color, children, ...properties}: IconProperties) => (
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
			clipRule='evenodd'
			d='M14.948 6.93a1.5 1.5 0 0 1 2.104 0l14.512 14.328a1.454 1.454 0 0 1 0 2.076l-1.758 1.736a1.5 1.5 0 0 1-2.103 0L17.052 14.555a1.5 1.5 0 0 0-2.104 0L4.298 25.07a1.5 1.5 0 0 1-2.105 0L.436 23.334a1.455 1.455 0 0 1 0-2.076z'
			fill={color}
		/>
		{children}
	</svg>
)

export default ChevronUpIcon
