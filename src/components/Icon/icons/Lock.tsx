import type {IconProperties} from '../types'

const LockIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		{...properties}
	>
		<path
			d='M11 9v3h10V9c0-2.762-2.238-5-5-5s-5 2.238-5 5m-4 3V9c0-4.969 4.031-9 9-9s9 4.031 9 9v3h1c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4H6c-2.206 0-4-1.794-4-4V16c0-2.206 1.794-4 4-4z'
			fill={color}
		/>
		{children}
	</svg>
)

export default LockIcon
