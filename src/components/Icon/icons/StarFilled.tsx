import type {IconProperties} from '../types'

const StarFilledIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M17.74 1.125A1.93 1.93 0 0 0 15.997 0c-.746 0-1.418.437-1.746 1.125l-3.896 8.268-8.702 1.325a1.953 1.953 0 0 0-1.558 1.356 2.055 2.055 0 0 0 .48 2.043l6.314 6.443-1.491 9.105c-.121.75.182 1.513.782 1.957.6.443 1.393.5 2.048.143l7.775-4.28 7.775 4.28a1.891 1.891 0 0 0 2.048-.143c.6-.45.903-1.207.782-1.957L25.11 20.56l6.314-6.443a2.041 2.041 0 0 0 .479-2.043 1.96 1.96 0 0 0-1.557-1.356l-8.709-1.325-3.896-8.268Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default StarFilledIcon
