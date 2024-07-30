import type {IconProperties} from '../types'

const SearchIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m31.506 29.438-8.375-8.375c1.813-2.22 2.813-5.013 2.813-8.063 0-7.181-5.82-13-13-13S0 5.82 0 13s5.82 13 12.944 13a12.92 12.92 0 0 0 8.062-2.815l8.375 8.375c.35.296.738.44 1.119.44a1.5 1.5 0 0 0 1.06-.44 1.46 1.46 0 0 0-.054-2.122zM3 13C3 7.486 7.486 3 13 3s10 4.486 10 10-4.486 10-10 10S3 18.513 3 13z'
			fill={color}
		/>
		{children}
	</svg>
)

export default SearchIcon
