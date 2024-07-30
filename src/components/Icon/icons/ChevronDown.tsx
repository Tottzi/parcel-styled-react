import type {IconProperties} from '../types'

const ChevronDownIcon = ({color, children, ...properties}: IconProperties) => (
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
			d='M2.193 6.929a1.5 1.5 0 0 1 2.104 0l10.651 10.515a1.5 1.5 0 0 0 2.104 0l10.65-10.515a1.5 1.5 0 0 1 2.104 0l1.758 1.735a1.455 1.455 0 0 1 0 2.077L17.052 25.068a1.5 1.5 0 0 1-2.104 0L.436 10.741a1.455 1.455 0 0 1 0-2.077z'
			fill={color}
		/>
		{children}
	</svg>
)

export default ChevronDownIcon
