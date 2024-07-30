import type {IconProperties} from '../types'

const FaceFrownIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M29 16a13 13 0 1 0-26 0 13 13 0 0 0 26 0M0 16a16 16 0 1 1 32 0 16 16 0 0 1-32 0m20.9 8.119A6.6 6.6 0 0 0 16 22a6.6 6.6 0 0 0-4.9 2.119 1.5 1.5 0 0 1-2.119.087 1.5 1.5 0 0 1-.087-2.119 9.57 9.57 0 0 1 7.1-3.087 9.54 9.54 0 0 1 7.1 3.087 1.495 1.495 0 0 1-.088 2.12 1.495 1.495 0 0 1-2.119-.088zM9.025 13a2 2 0 1 1 4 0 2 2 0 0 1-4 0m12-2a2 2 0 1 1 0 4 2 2 0 0 1 0-4'
			fill={color}
		/>
		{children}
	</svg>
)

export default FaceFrownIcon
