import type {IconProperties} from '../types'

const DragIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='m9.4996 32c-.96656 0-1.79146-.3417-2.47472-1.025-.68325-.6833-1.02488-1.5083-1.02488-2.475s.34163-1.7917 1.02488-2.475c.68326-.6833 1.50816-1.025 2.47472-1.025.9666 0 1.7915.3417 2.4747 1.025.6833.6833 1.0249 1.5083 1.0249 2.475s-.3416 1.7917-1.0249 2.475c-.6832.6833-1.5081 1.025-2.4747 1.025zm0-12.5c-.96656 0-1.79146-.3417-2.47472-1.025-.68325-.6833-1.02488-1.5083-1.02488-2.475s.34163-1.7917 1.02488-2.475c.68326-.6833 1.50816-1.025 2.47472-1.025.9666 0 1.7915.3417 2.4747 1.025.6833.6833 1.0249 1.5083 1.0249 2.475s-.3416 1.7917-1.0249 2.475c-.6832.6833-1.5081 1.025-2.4747 1.025zm0-12.5c-.96656 0-1.79146-.34167-2.47472-1.025-.68325-.68333-1.02488-1.50833-1.02488-2.475s.34163-1.79167 1.02488-2.475c.68326-.683334 1.50816-1.025 2.47472-1.025.9666 0 1.7915.341666 2.4747 1.025.6833.68333 1.0249 1.50833 1.0249 2.475s-.3416 1.79167-1.0249 2.475c-.6832.68333-1.5081 1.025-2.4747 1.025zm12.9985 0c-.9666 0-1.7915-.34167-2.4747-1.025-.6833-.68333-1.0249-1.50833-1.0249-2.475s.3416-1.79167 1.0249-2.475c.6832-.683334 1.5081-1.025 2.4747-1.025.9665 0 1.7915.341666 2.4747 1.025.6833.68333 1.0249 1.50833 1.0249 2.475s-.3416 1.79167-1.0249 2.475c-.6832.68333-1.5082 1.025-2.4747 1.025zm0 12.5c-.9666 0-1.7915-.3417-2.4747-1.025-.6833-.6833-1.0249-1.5083-1.0249-2.475s.3416-1.7917 1.0249-2.475c.6832-.6833 1.5081-1.025 2.4747-1.025.9665 0 1.7915.3417 2.4747 1.025.6833.6833 1.0249 1.5083 1.0249 2.475s-.3416 1.7917-1.0249 2.475c-.6832.6833-1.5082 1.025-2.4747 1.025zm0 12.5c-.9666 0-1.7915-.3417-2.4747-1.025-.6833-.6833-1.0249-1.5083-1.0249-2.475s.3416-1.7917 1.0249-2.475c.6832-.6833 1.5081-1.025 2.4747-1.025.9665 0 1.7915.3417 2.4747 1.025.6833.6833 1.0249 1.5083 1.0249 2.475s-.3416 1.7917-1.0249 2.475c-.6832.6833-1.5082 1.025-2.4747 1.025z'
			fill={color}
		/>

		{children}
	</svg>
)

export default DragIcon
