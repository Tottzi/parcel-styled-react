import type {IconProperties} from '../types'

const EyeIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		width={32}
		height={32}
		viewBox='0 0 32 32'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<g clipPath='url(#a)'>
			<path
				d='M15.997 6.223c-3.622 0-6.6 1.644-8.882 3.76-2.139 1.99-3.617 4.35-4.372 6.017.755 1.666 2.233 4.027 4.366 6.016 2.289 2.117 5.266 3.76 8.888 3.76s6.6-1.643 8.883-3.76c2.139-1.989 3.616-4.35 4.372-6.016-.756-1.666-2.233-4.027-4.367-6.016-2.288-2.117-5.266-3.76-8.888-3.76ZM5.298 8.034c2.617-2.433 6.21-4.477 10.7-4.477 4.488 0 8.082 2.044 10.698 4.477 2.6 2.416 4.339 5.3 5.166 7.283a1.76 1.76 0 0 1 0 1.366c-.827 1.983-2.566 4.872-5.166 7.283-2.616 2.433-6.21 4.477-10.699 4.477-4.488 0-8.082-2.044-10.699-4.477-2.6-2.41-4.338-5.3-5.16-7.283a1.767 1.767 0 0 1 0-1.366c.822-1.983 2.56-4.872 5.16-7.283Zm10.7 12.41A4.443 4.443 0 0 0 20.44 16a4.443 4.443 0 0 0-4.444-4.444h-.11a3.559 3.559 0 0 1-4.333 4.333V16a4.443 4.443 0 0 0 4.443 4.444Zm0-11.554a7.11 7.11 0 1 1 0 14.22 7.11 7.11 0 0 1 0-14.22Z'
				fill={color}
			/>
		</g>
		<defs>
			<clipPath id='a'>
				<path fill={color} d='M0 0h32v32H0z' />
			</clipPath>
		</defs>
		{children}
	</svg>
)

export default EyeIcon