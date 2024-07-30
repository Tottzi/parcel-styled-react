import type {IconProperties} from '../types'

const PlusCircleIcon = ({
	color,
	children,
	fill,
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
			d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
			fill={color}
		/>
		<path
			d='M11.662 17.337a3 3 0 0 1 3 3v2.125a1.538 1.538 0 0 0 3.075 0v-2.125a3 3 0 0 1 3-3h2.126a1.538 1.538 0 0 0 0-3.075h-2.125a3 3 0 0 1-3-3V9.137a1.538 1.538 0 0 0-3.075 0v2.125a3 3 0 0 1-3 3H9.537a1.538 1.538 0 0 0 0 3.075h2.125Z'
			fill={fill ?? '#fff'}
		/>
		{children}
	</svg>
)

export default PlusCircleIcon
