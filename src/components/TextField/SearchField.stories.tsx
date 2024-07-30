import {useArgs} from '@storybook/preview-api'
import type {Meta, StoryFn, StoryObj} from '@storybook/react'
import {IconType} from '../Icon'
import {SearchField} from './SearchField'

const meta: Meta<typeof SearchField> = {
	component: SearchField,
	args: {
		iconLeft: IconType.search,
		placeholder: 'Search',
		value: '',
	},
}

export default meta

type Story = StoryObj<typeof SearchField>

const Template: StoryFn<typeof SearchField> = (properties) => {
	const [{value}, setArguments] = useArgs<{value: string}>()

	const onChange = (value: string) => {
		setArguments({value})
	}

	return <SearchField {...properties} value={value} onChange={onChange} />
}

export const Default = {
	render: Template,
}

export const WithClearButton: Story = {
	render: Template,
	args: {hasClearButton: true},
}

export const WithSuggestions: Story = {
	render: Template,

	args: {
		hasClearButton: true,
		placeholder: 'Favorite front-end framework',
		suggestions: ['React', 'Svelte', 'Vue', 'Solid'],
	},
}
