import type {IconProperties} from '../types'

const LibraryFilledIcon = ({
	color,
	children,
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
			d='M5.5 2C4.669 2 4 2.667 4 3.489V28.3a1.49 1.49 0 0 0 1.5 1.49c.831 0 1.5-.665 1.5-1.49V3.49C7 2.667 6.33 2 5.5 2Zm6.875 2.615A1.488 1.488 0 0 0 11.2 6.367L16 28.805c.163.806.95 1.327 1.763 1.166a1.485 1.485 0 0 0 1.175-1.75l-4.8-22.438a1.497 1.497 0 0 0-1.763-1.168Zm8.906 6.413a1.485 1.485 0 0 0-.906 1.905l4.713 15.87a1.503 1.503 0 0 0 1.92.9 1.487 1.487 0 0 0 .903-1.904L23.2 11.924a1.504 1.504 0 0 0-1.92-.896Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default LibraryFilledIcon
