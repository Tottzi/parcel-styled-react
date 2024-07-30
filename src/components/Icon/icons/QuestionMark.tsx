import {type IconProperties} from '../types'

const QuestionMarkIcon = ({
	color,
	children,
	fill,
	...properties
}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		{...properties}
	>
		<path
			d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16Z'
			fill={color}
		/>
		<path
			d='M12.813 12.625a2.252 2.252 0 0 1 2.25-2.25h1.124a2.252 2.252 0 0 1 2.25 2.25v.127c0 .766-.39 1.48-1.033 1.891l-1.484.953a3.093 3.093 0 0 0-1.42 2.601v.053a1.124 1.124 0 1 0 2.25 0v-.05a.85.85 0 0 1 .387-.71l1.483-.952a4.505 4.505 0 0 0 2.067-3.786v-.127a4.5 4.5 0 0 0-4.5-4.5h-1.125a4.5 4.5 0 0 0-4.5 4.5 1.124 1.124 0 1 0 2.25 0Zm2.812 11.25a1.407 1.407 0 1 0 0-2.813 1.407 1.407 0 0 0 0 2.813Z'
			fill={fill ?? '#fff'}
		/>
		{children}
	</svg>
)
export default QuestionMarkIcon
