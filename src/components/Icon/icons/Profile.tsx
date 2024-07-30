import type {IconProperties} from '../types'

const ProfileIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m16 16c4.4188 0 8-3.5813 8-8 0-4.41875-3.5812-8-8-8-4.4187 0-8 3.58125-8 8 0 4.4187 3.5813 8 8 8zm-2.8562 3c-6.1563 0-11.1438 4.9875-11.1438 11.1437 0 1.025.83125 1.8563 1.85625 1.8563h24.28745c1.025 0 1.8563-.8313 1.8563-1.8563 0-6.1562-4.9875-11.1437-11.1437-11.1437z'
			fill={color}
		/>
		{children}
	</svg>
)

export default ProfileIcon
