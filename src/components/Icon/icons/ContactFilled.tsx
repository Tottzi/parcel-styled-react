import type {IconProperties} from '../types'

const ContactFilledIcon = ({
	color,
	children,
	...properties
}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M16 16c4.103 0 7.429-3.357 7.429-7.5S20.103 1 16 1 8.571 4.357 8.571 8.5 11.897 16 16 16Zm-2.652 2.813C7.63 18.813 3 23.488 3 29.26c0 .96.772 1.74 1.724 1.74h22.552c.952 0 1.724-.78 1.724-1.74 0-5.772-4.631-10.448-10.348-10.448h-5.304Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default ContactFilledIcon
