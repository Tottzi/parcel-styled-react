import type {IconProperties} from '../types'

const TimeCircleIcon = ({
	color,
	children,
	fill,
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
			fill={color}
		/>
		<path
			d='M26 16c0 5.523-4.477 10-10 10S6 21.523 6 16a9.96 9.96 0 0 1 1.725-5.617.939.939 0 0 1 1.55 1.055c-.884 1.3-1.435 2.87-1.435 4.562 0 4.488 3.672 8.125 8.125 8.125 4.523 0 8.16-3.637 8.16-8.125a8.124 8.124 0 0 0-7.188-8.071v2.133c0 .52-.418.938-.972.938a.959.959 0 0 1-.938-.938V6.938c0-.518.454-.938.938-.938C21.523 6 26 10.477 26 16Zm-9.371-.664c.398.367.398.96 0 1.293-.332.398-.926.398-1.293 0l-3.125-3.125c-.363-.332-.363-.926 0-1.293.367-.363.96-.363 1.293 0l3.125 3.125Z'
			fill={fill ?? '#fff'}
		/>
		{children}
	</svg>
)

export default TimeCircleIcon
