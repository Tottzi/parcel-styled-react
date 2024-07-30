import type {IconProperties} from '../types'

const HomeIcon = ({color, children, ...properties}: IconProperties) => (
	<svg
		fill='none'
		height='32'
		viewBox='0 0 32 32'
		width='32'
		xmlns='http://www.w3.org/2000/svg'
		{...properties}
	>
		<path
			d='M24.32 30.228h-5.654c.001-.053.004-.107.004-.16l-.002-2.8v-7.711c-.203-.03-5.224-.02-5.328.01v.168l-.004 10.346c0 .05-.003.098-.004.147H7.678l-.403-.074c-1.387-.25-2.435-.988-3.143-2.203-.41-.704-.577-1.473-.576-2.286.003-3.35.001-6.702.001-10.054v-.196c-.06.048-.094.074-.126.102l-1.209 1.027c-.35.297-.75.396-1.195.294A1.316 1.316 0 0 1 0 15.541a1.278 1.278 0 0 1 .476-1.018l1.23-1.044 7.471-6.341c1.98-1.68 3.962-3.355 5.935-5.041a1.388 1.388 0 0 1 1.783-.003c1.583 1.355 3.176 2.7 4.765 4.049l8.417 7.143c.478.406.955.812 1.434 1.216.213.18.365.398.441.668.02.067.032.136.048.204v.346c-.015.064-.027.128-.045.19a1.3 1.3 0 0 1-.537.739c-.49.333-1.14.301-1.598-.082-.417-.347-.827-.7-1.24-1.05-.035-.03-.073-.057-.127-.099v10.277a4.443 4.443 0 0 1-3.717 4.46c-.139.022-.278.048-.417.073Zm-13.65-2.693v-8.41a2.214 2.214 0 0 1 2.22-2.252c2.075-.006 4.15-.003 6.226 0 .338 0 .665.066.965.222.808.42 1.25 1.085 1.253 2 .009 2.755.003 5.51.003 8.266v.174c.052.003.087.007.122.007.853 0 1.706.003 2.56-.002a1.7 1.7 0 0 0 .408-.049c.818-.201 1.356-.904 1.356-1.77.001-4.151 0-8.302.003-12.453a.238.238 0 0 0-.094-.203c-3.105-2.632-6.208-5.267-9.311-7.9l-.373-.315c-.042.033-.08.062-.117.093-3.181 2.7-6.362 5.4-9.546 8.098a.302.302 0 0 0-.118.26c.003 2.129.002 4.257.002 6.386v5.987c0 .21.016.416.078.618.23.739.896 1.242 1.678 1.249.862.007 1.724.002 2.587.001.026 0 .052-.003.097-.007Z'
			fill={color}
		/>
		{children}
	</svg>
)

export default HomeIcon