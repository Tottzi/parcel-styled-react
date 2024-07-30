import type {IconProperties} from '../types'

const TrendUpIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m23.596 7.64 2.354 2.354-7.978 7.978-5.379-5.379a1.63 1.63 0 0 0-2.305 0L.478 22.42a1.63 1.63 0 0 0 0 2.306 1.63 1.63 0 0 0 2.305 0l8.65-8.666 5.378 5.38a1.63 1.63 0 0 0 2.305 0l9.14-9.123 2.354 2.354c.507.507 1.39.147 1.39-.572v-7.03a.786.786 0 0 0-.802-.818h-7.014c-.735 0-1.095.883-.588 1.39'
			fill={color}
		/>
		{children}
	</svg>
)

export default TrendUpIcon
