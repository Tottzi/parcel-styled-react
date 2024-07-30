import {type IconProperties} from '../types'

const FemaleIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		{...properties}
	>
		<path
			d='M8 11a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9.5 10.9c5.363-.731 9.5-5.331 9.5-10.9 0-6.075-4.925-11-11-11S5 4.925 5 11c0 5.569 4.137 10.169 9.5 10.9V25h-3c-.831 0-1.5.669-1.5 1.5s.669 1.5 1.5 1.5h3v2.5c0 .831.669 1.5 1.5 1.5s1.5-.669 1.5-1.5V28h3c.831 0 1.5-.669 1.5-1.5s-.669-1.5-1.5-1.5h-3v-3.1Z'
			fill={color}
		/>
		{children}
	</svg>
)
export default FemaleIcon
