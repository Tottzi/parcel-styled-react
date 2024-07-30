import type {IconProperties} from '../types'

const ProgressIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			fillRule='evenodd'
			d='m12.934 21.371 8.437-8.437a5.864 5.864 0 1 0-2.121-2.121l-8.438 8.437a5.864 5.864 0 1 0 2.121 2.121Zm9.36-15.532a2.864 2.864 0 1 0 4.05 4.05 2.864 2.864 0 0 0-4.05-4.05ZM5.84 26.345a2.864 2.864 0 1 1 4.05-4.05 2.864 2.864 0 0 1-4.05 4.05Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default ProgressIcon
