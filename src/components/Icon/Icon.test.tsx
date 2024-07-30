import type {ReactElement} from 'react'
import {ThemeProvider} from 'styled-components'
import {render} from '@testing-library/react'
import {defaultTheme} from '../theme'
import {Icon, iconComponents} from './Icon'
import * as stories from './Icon.stories'
import {IconType} from './types'

/* eslint-disable @typescript-eslint/no-loop-func */

const Container = ({children}: {children: ReactElement}) => (
	<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)

for (const type of Object.keys(IconType)) {
	const typedType = type as keyof typeof IconType

	test(`all icons should be 32x32 viewbox (${type})`, async () => {
		const {container} = render(
			<Container>
				<Icon icon={IconType[typedType]} />
			</Container>
		)

		const svg = container.querySelector('svg')

		if (svg) {
			expect(svg.getAttribute('viewBox')).toEqual('0 0 32 32')
		} else {
			throw new Error(`Missing SVG for icon type ${type}`)
		}
	})

	test(`all icons should be 32 width (${type})`, async () => {
		const {container} = render(
			<Container>
				<Icon icon={IconType[typedType]} />
			</Container>
		)

		const svg = container.querySelector('svg')

		if (svg) {
			expect(svg.getAttribute('width')).toEqual('32')
		} else {
			throw new Error(`Missing SVG for icon type ${type}`)
		}
	})

	test(`all icons should be 32 height (${type})`, async () => {
		const {container} = render(
			<Container>
				<Icon icon={IconType[typedType]} />
			</Container>
		)

		const svg = container.querySelector('svg')

		if (svg) {
			expect(svg.getAttribute('height')).toEqual('32')
		} else {
			throw new Error(`Missing SVG for icon type ${type}`)
		}
	})

	test(`all icons should include xmlns (${type})`, async () => {
		const {container} = render(
			<Container>
				<Icon icon={IconType[typedType]} />
			</Container>
		)

		const svg = container.querySelector('svg')

		if (svg) {
			expect(svg.getAttribute('xmlns')).toEqual('http://www.w3.org/2000/svg')
		} else {
			throw new Error(`Missing SVG for icon type ${type}`)
		}
	})

	test(`all icons should establish none fill on root (${type})`, async () => {
		const {container} = render(
			<Container>
				<Icon icon={IconType[typedType]} />
			</Container>
		)

		const svg = container.querySelector('svg')

		if (svg) {
			expect(svg.getAttribute('fill')).toEqual('none')
		} else {
			throw new Error(`Missing SVG for icon type ${type}`)
		}
	})

	test(`all icons should accept properties (${type})`, async () => {
		const {container} = render(
			<Container>
				<Icon icon={IconType[typedType]} aria-label='testing' />
			</Container>
		)

		const svg = container.querySelector('svg')

		if (svg) {
			expect(svg.getAttribute('aria-label')).toEqual('testing')
		} else {
			throw new Error(`Missing SVG for icon type ${type}`)
		}
	})

	test(`all icons should accept children (${type})`, async () => {
		const {container} = render(
			<Container>
				<Icon icon={IconType[typedType]}>
					<g id='testing'>hello</g>
				</Icon>
			</Container>
		)

		const svg = container.querySelector('svg')

		if (svg) {
			const child = svg.querySelector('#testing')

			if (child) {
				expect(child).toHaveTextContent('hello')
			} else {
				throw new Error(`Does not accept children in type ${type}`)
			}
		} else {
			throw new Error(`Missing SVG for icon type ${type}`)
		}
	})

	test(`all icon components should have Icon as a suffix (${type})`, () => {
		expect(iconComponents[typedType].name.endsWith('Icon')).toBe(true)
	})

	test(`icon type names should be the component name without the icon suffix (${type})`, () => {
		const iconComponentName = iconComponents[typedType].name

		expect(type.toLowerCase()).toBe(
			`${iconComponentName[0].toLowerCase()}${iconComponentName
				.slice(1, -4)
				.toLowerCase()}`
		)
	})

	test(`all icons should have stories (${type})`, async () => {
		expect(
			Object.keys(stories).includes(iconComponents[typedType].name.slice(0, -4))
		).toBe(true)
	})
}

/* eslint-enable @typescript-eslint/no-loop-func */
