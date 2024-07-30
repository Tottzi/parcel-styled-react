import React from 'react'
import type {IconProperties} from '../types'

const ActivityCircleIcon = ({
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
			d='M32 16.002c0 8.837-7.163 16-16 16s-16-7.164-16-16 7.163-16 16-16 16 7.163 16 16'
			fill={color}
		/>
		<path
			d='M20.78 24.993q.177 0 .354-.064c.547-.198.83-.805.634-1.356l-2.162-6.038a.004.004 0 0 0-.006-.002q-.003 0-.005-.003l-1.42-3.792c-.122-.323.078-.677.397-.81a3.38 3.38 0 0 0 2.063-3.12v-1.88a.925.925 0 0 0-.92-.928.925.925 0 0 0-.92.927v1.878a1.526 1.526 0 0 1-1.248 1.507 1 1 0 0 0-.25.085L12.38 13.27l-.298.113a.56.56 0 0 0-.255.194l-2.301 3.147c-.226.31-.216.76.068 1.017q.043.036.09.068L12.4 19.6c.155.1.328.151.5.151a.929.929 0 0 0 .52-1.694q-.014-.008-.025-.018c-.122-.09-1.186-.88-1.623-1.209-.12-.09-.127-.2-.02-.306l.353-.349a.562.562 0 0 1 .922.204l1.055 2.818a.56.56 0 0 1 .013.355l-1.17 4.008c-.21.546.06 1.16.602 1.37a1.05 1.05 0 0 0 1.36-.607l1.66-3.742a.563.563 0 0 1 .998-.06l2.216 3.723a1 1 0 0 1 .047.097c.168.403.557.652.971.652'
			fill={fill}
		/>
		<path
			d='M13.83 12.354a2.32 2.32 0 1 0 .001-4.64 2.32 2.32 0 0 0 0 4.64'
			fill={fill}
		/>

		{children}
	</svg>
)

export default ActivityCircleIcon
