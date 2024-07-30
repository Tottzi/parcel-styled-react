import type {IconProperties} from '../types'

const TrendIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m31.76 15.01-4.752-4.752c-.545-.545-1.464-.17-1.464.596v3.048H1.703C.766 13.902 0 14.67 0 15.605c0 .937.766 1.703 1.703 1.703h23.84v3.048c0 .767.92 1.141 1.448.596l4.751-4.75a.84.84 0 0 0 .017-1.193'
			fill={color}
		/>
		{children}
	</svg>
)

export default TrendIcon
