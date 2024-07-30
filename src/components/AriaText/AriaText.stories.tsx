import type {Meta} from '@storybook/react'
import {AriaText} from './AriaText'

const meta: Meta<typeof AriaText> = {
	component: AriaText,
	args: {
		children: 'This text is hidden from the screen, but seen by screen readers',
	},
}

export default meta

export const Default = {}
