import {type IconProperties} from '../types'

const NonBinaryIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='32'
		height='32'
		viewBox='0 0 32 32'
		fill='none'
		{...properties}
	>
		<g clipPath='url(#a)'>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M14.5 1.482a1.5 1.5 0 1 1 3 0v1.07l1.116-.832a1.25 1.25 0 0 1 1.495 2.004l-1.587 1.184 1.587 1.184a1.25 1.25 0 0 1-1.495 2.004L17.5 7.263v2.856c5.366.732 9.5 5.332 9.5 10.899 0 6.075-4.925 11-11 11s-11-4.925-11-11c0-5.567 4.134-10.167 9.5-10.899V7.263l-1.116.833a1.25 1.25 0 1 1-1.495-2.004l1.587-1.184-1.587-1.184a1.25 1.25 0 0 1 1.495-2.004l1.116.833v-1.07ZM24 21.018a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z'
				fill={color}
			/>
		</g>
		{children}
	</svg>
)
export default NonBinaryIcon
