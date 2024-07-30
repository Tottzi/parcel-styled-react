import {Fragment, useCallback} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonSize} from '../Button'
import {IconType} from '../Icon'
import {delay} from '../utilities'
import {useCreateNotification} from './Notification'
import type {NotificationType} from './types'
import {NotificationVariant} from './types'

const Notification = (properties: NotificationType) => {
	const createNotification = useCreateNotification()

	const handleOneNotification = useCallback(() => {
		createNotification(properties)
	}, [createNotification, properties])

	const handleTwoNotifications = useCallback(async () => {
		createNotification({
			...properties,
			message: '',
			title: 'First notifiaction',
		})
		await delay(1000)
		createNotification({
			...properties,
			message: '',
			title: 'Second notifiaction',
		})
	}, [createNotification, properties])

	return (
		<Fragment>
			<Button
				label='Create notification'
				size={ButtonSize.medium}
				onClick={handleOneNotification}
			/>
			<Button
				label='Create two notifications'
				size={ButtonSize.medium}
				onClick={handleTwoNotifications}
			/>
		</Fragment>
	)
}

const meta: Meta<typeof Notification> = {
	component: Notification,
	argTypes: {
		variant: {
			type: 'string',
			control: 'radio',
			options: Object.keys(NotificationVariant),
		},
	},
	args: {
		title: 'Why is it always crab?',
		message:
			'This email is not in your contact list. Would you like to add it to your contacts?',
	},
}

export default meta

type Story = StoryObj<typeof Notification>

export const Default = {}

export const Success: Story = {
	args: {
		variant: NotificationVariant.success,
		isCloseButton: true,
	},
}

export const Error: Story = {
	args: {
		variant: NotificationVariant.error,
		isCloseButton: true,
	},
}

export const Info: Story = {
	args: {
		variant: NotificationVariant.info,
		isCloseButton: true,
	},
}

export const Warning: Story = {
	args: {
		variant: NotificationVariant.warning,
		isCloseButton: true,
	},
}

export const Slider: Story = {
	args: {variant: NotificationVariant.slider},
}

export const SliderWithIcons: Story = {
	args: {
		variant: NotificationVariant.slider,
		iconLeft: IconType.roundedPlus,
		textRight: '🦀',
	},
}
