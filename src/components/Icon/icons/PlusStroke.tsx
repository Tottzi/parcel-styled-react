import {type IconProperties} from '../types'

const PlusStrokeIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M14.662 20.337a3 3 0 0 0-3-3H9.537a1.538 1.538 0 0 1 0-3.075h2.125a3 3 0 0 0 3-3V9.137a1.538 1.538 0 0 1 3.075 0v2.125a3 3 0 0 0 3 3h2.126a1.538 1.538 0 0 1 0 3.075h-2.125a3 3 0 0 0-3 3v2.125a1.538 1.538 0 0 1-3.075 0v-2.125Z'
			fill={color}
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Zm-1 0c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15C1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15Z'
			fill={color}
		/>
		{children}
	</svg>
)
export default PlusStrokeIcon
