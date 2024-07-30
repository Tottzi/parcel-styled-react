import {useCallback} from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import {Button, ButtonSize} from '../Button'
import {useCreateModal} from './Modal'
import {type ModalType, ModalVariant} from './types'

const Modal = (properties: Omit<ModalType, 'onCancel' | 'onConfirm'>) => {
	const createModal = useCreateModal()

	const handleClick = useCallback(() => {
		void createModal({
			...properties,
			onOpen() {
				console.log('open')
			},
			onCancel() {
				console.log('cancelled')
			},
			onConfirm(value?: string) {
				if (value) {
					console.log(value)
				}

				console.log('confirmed')
			},
			onClose() {
				console.log('closed')
			},
		})
	}, [createModal, properties])

	return (
		<Button
			label='Create modal'
			size={ButtonSize.medium}
			onClick={handleClick}
		/>
	)
}

const meta: Meta<typeof Modal> = {
	component: Modal,
	args: {
		message: 'Some important information will appear here',
		confirmLabel: 'Button',
	},
}

export default meta

type Story = StoryObj<typeof Modal>

export const Success: Story = {
	args: {
		variant: ModalVariant.success,
		title: 'Success Snackbar',
	},
}

export const Error: Story = {
	args: {
		variant: ModalVariant.error,
		title: 'Something went wrong!',
		message: 'We were unable to save your program due to privacy settings.',
		confirmLabel: 'Change Privacy Settings',
	},
}

export const Warning: Story = {
	args: {
		variant: ModalVariant.warning,
		title: 'Caution Snackbar',
	},
}

export const Info: Story = {
	args: {
		variant: ModalVariant.info,
		title: 'Info Snackbar',
	},
}
