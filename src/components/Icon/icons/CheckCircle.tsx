import type {IconProperties} from '../types'

const CheckCircleIcon = ({
	color,
	fill,
	children,
	...properties
}: IconProperties) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M15.506.875c8.56 0 15.5 6.94 15.5 15.5 0 8.56-6.94 15.5-15.5 15.5-8.56 0-15.5-6.94-15.5-15.5 0-8.56 6.94-15.5 15.5-15.5Z'
			fill={color}
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M23.81 12.432a1.393 1.393 0 0 0-1.956-1.984l-7.765 7.651a2.363 2.363 0 0 1-3.316 0l-1.615-1.588a1.394 1.394 0 0 0-1.957 1.984l3.57 3.526c.92.91 2.4.91 3.32.001l9.719-9.59Z'
			fill={fill ?? '#fff'}
		/>
		{children}
	</svg>
)

export default CheckCircleIcon
