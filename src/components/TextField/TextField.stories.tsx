import {useCallback} from 'react'
import {useArgs} from '@storybook/preview-api'
import type {Meta, StoryFn, StoryObj} from '@storybook/react'
import {TextField} from './TextField'

const meta: Meta<typeof TextField> = {
	component: TextField,
	args: {
		label: 'Some input text',
		value: '',
	},
}

export default meta

type Story = StoryObj<typeof TextField>

const Template: StoryFn<typeof TextField> = (properties) => {
	const [{value}, setArguments] = useArgs<{value: string}>()

	const onChange = useCallback(
		(value: string) => {
			setArguments({value})
		},
		[setArguments]
	)

	return <TextField {...properties} value={value} onChange={onChange} />
}

export const Default = {
	render: Template,
}

export const WithError: Story = {
	render: Template,
	args: {error: new Error('This is my error message.')},
}

export const Disabled: Story = {
	render: Template,
	args: {disabled: true},
}

const warning = new Error('This is my warning message.')
warning.name = 'warning'

export const WithWarning: Story = {
	render: Template,
	args: {error: warning},
}

export const WithMaximumLength: Story = {
	render: Template,
	args: {maxLength: 30},
}

export const FloatingLabel: Story = {
	render: Template,
	args: {floatingLabel: true},
}

export const MultiLine: Story = {
	render: Template,
	args: {minRows: 3},
}

export const ExpandingMultiLine: Story = {
	render: Template,
	args: {maxRows: 8, shrinksOnBlur: true},
}

export const MultiLineFloatingLabel: Story = {
	render: Template,
	args: {floatingLabel: true, maxRows: 8},
}
