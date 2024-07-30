import type {IconProperties} from '../types'

const ContactListIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M4.8 9.6a6.4 6.4 0 1 1 12.8 0 6.4 6.4 0 0 1-12.8 0ZM0 27.315A8.913 8.913 0 0 1 8.915 18.4h4.57a8.913 8.913 0 0 1 8.915 8.915c0 .82-.665 1.485-1.485 1.485H1.485C.665 28.8 0 28.135 0 27.315ZM30.465 28.8H23.57c.27-.47.43-1.015.43-1.6v-.4a9.977 9.977 0 0 0-3.49-7.59c.12-.005.235-.01.355-.01h3.07A8.064 8.064 0 0 1 32 27.265c0 .85-.69 1.535-1.535 1.535ZM21.6 16c-1.55 0-2.95-.63-3.965-1.645A7.96 7.96 0 0 0 19.2 9.6c0-1.34-.33-2.605-.915-3.715A5.598 5.598 0 0 1 21.6 4.8c3.095 0 5.6 2.505 5.6 5.6 0 3.095-2.505 5.6-5.6 5.6Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default ContactListIcon
