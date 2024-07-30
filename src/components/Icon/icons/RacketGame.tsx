import type {IconProperties} from '../types'

const RacketGameIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M17.407 5.464A2.615 2.615 0 0 0 15.116.766a2.616 2.616 0 0 0-1.2 3.496 2.61 2.61 0 0 0 3.49 1.202m-3.246.48c.06.15.112.305.129.47.034.357.077.778.052 1.133-.037.507-.104 1.031-.28 1.511 1.822.693 3.783 1.6 5.412 3.35-2.506-.625-4.34-2.067-5.903-3.42.413-1.52.444-2.974-.589-3.616-1.466-.835-7.962 5.655-8.494 9.386-.26 1.826.126 5.572-.913 8.967C2.49 27.27-.596 29.23.1 30.625c.513.637 1.124.778 1.75.471.616-.307 3.247-3.654 4.38-7.034 1.216-3.637.942-7.312 1.877-7.296.415.007 4.018 3.898 4.285 5.777.127 3.649.172 7.238.212 7.41.229.96.656 1.474 1.452 1.541.796.07 1.245-.516 1.232-1.59-.024-1.865-.027-4.924-.203-7.92-.255-2.055-4.288-6.814-3.638-8.227 0-.007.515-.854 1.067-2.017 4.292 2.891 8.754 2.99 8.982 3.042.266.06.53.013.748-.11a1.052 1.052 0 0 0 .285-1.627c-.153-.174-2.17-4.42-8.37-7.1zm6.104 12.84a1.156 1.156 0 0 0 0 2.31c.638 0 1.153-.517 1.153-1.155s-.515-1.155-1.153-1.155M31.217 4.558c-.597-.597-1.436-.867-2.366-.758-.88.102-1.74.535-2.424 1.22a3 3 0 0 0-.125.134c-1.754 1.918-1.053 4.762-1.053 4.762l-2.562 2.825.36.36 2.82-2.567s2.842.703 4.758-1.053q.069-.06.133-.126c.684-.685 1.118-1.546 1.218-2.426.11-.93-.16-1.772-.756-2.37zm-.87 4.387c-1.147 1.148-2.782 1.401-3.78.63l-.36-.36c-.77-1-.518-2.636.63-3.785 1.222-1.225 3-1.432 3.97-.461.968.97.763 2.75-.46 3.977z'
			fill={color}
		/>
		{children}
	</svg>
)

export default RacketGameIcon
