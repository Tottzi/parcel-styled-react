import type {IconProperties} from '../types'

const TodayIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M11.5 1.5C11.5.669 10.831 0 10 0S8.5.669 8.5 1.5V4H6C3.794 4 2 5.794 2 8v20c0 2.206 1.794 4 4 4h20c2.206 0 4-1.794 4-4V8c0-2.206-1.794-4-4-4h-2.5V1.5C23.5.669 22.831 0 22 0s-1.5.669-1.5 1.5V4h-9zM5 12h22v16c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1z'
			fill={color}
		/>
		<path d='M14.598 18.602a3 3 0 1 1-6 0 3 3 0 0 1 6 0' fill={color} />
		{children}
	</svg>
)

export default TodayIcon
