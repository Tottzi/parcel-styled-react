import type {IconProperties} from '../types'

const FlipIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M11.967 28.267h-5.2c-.845 0-1.561-.294-2.15-.883a2.929 2.929 0 0 1-.884-2.15V6.766c0-.845.295-1.562.884-2.15.589-.59 1.305-.884 2.15-.884h5.2v3.034h-5.2v18.466h5.2v3.034ZM14.5 30.9V1.1h3.033v29.8H14.5ZM25.233 6.767V3.733c.845 0 1.562.295 2.151.883.588.59.883 1.306.883 2.15h-3.034Zm0 10.6v-2.734h3.034v2.734h-3.034Zm0 10.9v-3.034h3.034c0 .845-.294 1.562-.883 2.151a2.932 2.932 0 0 1-2.15.883Zm0-16.2V9.3h3.034v2.767h-3.034Zm0 10.633v-2.767h3.034V22.7h-3.034ZM20.1 28.267v-3.034h2.6v3.034h-2.6Zm0-21.5V3.733h2.6v3.034h-2.6Z'
			fill={color}
		/>

		{children}
	</svg>
)

export default FlipIcon
