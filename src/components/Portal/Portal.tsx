import {type ReactNode, useCallback} from 'react'
import {createPortal} from 'react-dom'
import {useIsMounted} from '../../hooks'

export const Portal = ({
	id,
	zIndex,
	children,
}: {
	id: string
	zIndex?: number
	children: ReactNode
}) => {
	const isMounted = useIsMounted()

	const getElement = useCallback(() => {
		if (isMounted) {
			const existingElement = document.querySelector(`#${id}`)

			if (existingElement) {
				if (zIndex) {
					const element = existingElement as HTMLDivElement
					element.style.zIndex = String(zIndex)
				}

				return existingElement
			}

			const element = window.document.createElement('div')
			element.id = id

			if (zIndex) {
				element.style.zIndex = String(zIndex)
			}

			window.document.body.append(element)
			return element
		}
	}, [id, zIndex, isMounted])

	const portal = getElement()

	if (portal) {
		return createPortal(children, portal)
	}

	return null
}
