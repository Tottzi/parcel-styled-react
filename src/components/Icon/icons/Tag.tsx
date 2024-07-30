import {type IconProperties} from '../types'

const TagIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		{...properties}
	>
		<path
			d='M14.768.465a4.54 4.54 0 0 1 3.208 1.32l12.464 12.43a4.51 4.51 0 0 1 0 6.392l-9.454 9.428a4.54 4.54 0 0 1-6.41 0L2.112 17.605a4.476 4.476 0 0 1-1.331-3.192V3.855A3.396 3.396 0 0 1 4.18.465h10.588ZM4.18 14.413c0 .297.12.586.333.798l12.464 12.43a1.14 1.14 0 0 0 1.6 0l9.455-9.428c.44-.438.44-1.159 0-1.597L15.568 4.187a1.139 1.139 0 0 0-.8-.332H4.18v10.558Zm4.533-8.298a2.27 2.27 0 0 1 1.602.662 2.257 2.257 0 0 1 0 3.196 2.27 2.27 0 0 1-3.205 0 2.257 2.257 0 0 1 0-3.196 2.27 2.27 0 0 1 1.603-.662Z'
			fill={color}
		/>
		{children}
	</svg>
)
export default TagIcon
