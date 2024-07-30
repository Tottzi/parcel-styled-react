import {type IconProperties} from '../types'

const MaleIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M22.286 0a1.71 1.71 0 0 0-1.715 1.714c0 .95.765 1.715 1.715 1.715h3.864l-5.979 5.978a12.559 12.559 0 0 0-7.6-2.55C5.63 6.857 0 12.486 0 19.43 0 26.37 5.629 32 12.571 32c6.943 0 12.572-5.629 12.572-12.571 0-2.85-.95-5.486-2.55-7.593L28.57 5.85v3.864c0 .95.765 1.715 1.715 1.715A1.71 1.71 0 0 0 32 9.714v-8A1.71 1.71 0 0 0 30.286 0h-8ZM3.429 19.429a9.143 9.143 0 1 1 18.285 0 9.143 9.143 0 0 1-18.285 0Z'
			fill={color}
		/>
		{children}
	</svg>
)
export default MaleIcon
