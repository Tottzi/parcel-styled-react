import type {IconProperties} from '../types'

const CrossCircleIcon = ({
	color,
	fill,
	children,
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
			d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
			fill={fill ?? '#FFF'}
		/>
		<path
			d='M11.904 13.679a3 3 0 0 1 0 4.242l-1.502 1.503a1.538 1.538 0 0 0 2.174 2.174l1.503-1.502a3 3 0 0 1 4.242 0l1.503 1.502a1.538 1.538 0 0 0 2.174-2.174l-1.502-1.503a3 3 0 0 1 0-4.242l1.502-1.503a1.538 1.538 0 0 0-2.174-2.174l-1.503 1.502a3 3 0 0 1-4.242 0l-1.503-1.502a1.538 1.538 0 0 0-2.174 2.174l1.502 1.503Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default CrossCircleIcon
