import type {IconProperties} from '../types'

const PhoneCircleIcon = ({
	color,
	children,
	fill,
	...properties
}: IconProperties) => (
	<svg
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M32 16.002c0 8.837-7.163 16-16 16s-16-7.164-16-16 7.163-16 16-16 16 7.163 16 16'
			fill={color}
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M20.503 8.69h-9.006a.557.557 0 0 0-.557.557v13.506c0 .308.25.557.557.557h9.006c.308 0 .557-.25.557-.557V9.247a.557.557 0 0 0-.557-.557M11.497 7A2.247 2.247 0 0 0 9.25 9.247v13.506A2.247 2.247 0 0 0 11.497 25h9.006a2.247 2.247 0 0 0 2.247-2.247V9.247A2.247 2.247 0 0 0 20.503 7z'
			fill={fill ?? '#fff'}
		/>
		<path
			d='M12.896 21.443c0-.311.252-.564.563-.564h5.082a.563.563 0 0 1 0 1.127H13.46a.563.563 0 0 1-.563-.563'
			fill={fill ?? '#fff'}
		/>
		{children}
	</svg>
)

export default PhoneCircleIcon
