import type {
	DependencyList,
	Dispatch,
	MutableRefObject,
	SetStateAction,
} from 'react'
import {useCallback, useEffect, useState} from 'react'
import {delay} from './utilities'

export const useTrueClick = (
	targetReference: MutableRefObject<unknown>,
	callback: (event: PointerEvent) => void
) => {
	useEffect(() => {
		let pointerDownTarget: EventTarget

		const listener = (event: PointerEvent) => {
			if (event.target) {
				if (event.type === 'pointerdown') {
					pointerDownTarget = event.target
				} else if (
					event.type === 'pointerup' &&
					event.target === pointerDownTarget &&
					event.target === targetReference.current
				) {
					event.preventDefault()
					event.stopPropagation()
					event.stopImmediatePropagation()
					callback(event)
				}
			}
		}

		window.addEventListener('pointerdown', listener)
		window.addEventListener('pointerup', listener)

		return () => {
			window.removeEventListener('pointerdown', listener)
			window.removeEventListener('pointerup', listener)
		}
	}, [targetReference, callback])
}

export type RevealerParameters = {
	animationDuration?: number
	lifetime?: number
	canConceal?: boolean
}

export const useRevealer = (parameters: RevealerParameters = {}) => {
	const {animationDuration = 370, lifetime, canConceal = true} = parameters
	const [isRevealing, setIsRevealing] = useState(false)
	const [isRevealed, setIsRevealed] = useState(false)
	const [isConcealing, setIsConcealing] = useState(false)
	const [isConcealed, setIsConcealed] = useState(false)

	useTimeoutEffect(
		() => {
			setIsRevealing(true)
			setIsRevealed(false)
			setIsConcealing(false)
			setIsConcealed(false)
		},
		50,
		[]
	)

	useTimeoutEffect(
		() => {
			if (isRevealing) {
				setIsRevealing(false)
				setIsRevealed(true)
			}
		},
		animationDuration,
		[isRevealing]
	)

	useTimeoutEffect(
		() => {
			if (
				typeof lifetime === 'number' &&
				!isConcealing &&
				!isRevealing &&
				canConceal
			) {
				setIsConcealing(true)
				setIsRevealed(false)
			}
		},
		lifetime ? lifetime - animationDuration * 2 : 100,
		[lifetime, isConcealing, isRevealing, canConceal]
	)

	useTimeoutEffect(
		() => {
			if (isConcealing) {
				setIsConcealed(true)
				setIsConcealing(false)
			}
		},
		animationDuration,
		[isConcealing]
	)

	const handleConceal = useCallback(async () => {
		setIsRevealed(false)
		setIsRevealing(false)
		setIsConcealing(true)
		await delay(animationDuration)
		setIsConcealing(false)
		setIsConcealed(true)
	}, [animationDuration])

	return {
		isRevealing,
		isRevealed,
		isConcealing,
		isConcealed,
		onConceal: handleConceal,
	}
}

export const useIsMounted = () => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	return isMounted
}

export const useTrueKeyPress = (
	keys: Array<KeyboardEvent['key']>,
	callback: (event: KeyboardEvent) => void
) => {
	useEffect(() => {
		let keyDownKey: KeyboardEvent['key']

		const onKeyDown = (event: KeyboardEvent) => {
			if (!event.key) return
			keyDownKey = event.key.toLowerCase()
		}

		const onKeyUp = (event: KeyboardEvent) => {
			if (!event.key) return
			const key = event.key.toLowerCase()

			if (keys.includes(keyDownKey) && keys.includes(key)) {
				callback(event)
			}
		}

		window.addEventListener('keydown', onKeyDown)
		window.addEventListener('keyup', onKeyUp)

		return () => {
			keyDownKey = ''
			window.removeEventListener('keydown', onKeyDown)
			window.removeEventListener('keyup', onKeyUp)
		}
	}, [keys, callback])
}

export const useTimeoutEffect = (
	callback: () => void,
	milliseconds: number,
	dependencies: DependencyList
) => {
	useEffect(() => {
		const timeout = setTimeout(callback, milliseconds)

		return () => {
			clearTimeout(timeout)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies)
}

const getValue = <Type>(id?: string) => {
	if (id && typeof window !== 'undefined') {
		const savedValue = window.localStorage.getItem(id)

		if (savedValue) {
			return JSON.parse(savedValue) as Type
		}
	}
}

export const useLocalStorage = <Type>(
	/** The ID of local storage key */
	id?: string,
	/** The initial value to set */
	initialValue?: Type | undefined
): [Type | undefined, Dispatch<SetStateAction<Type | undefined>>] => {
	const eventId = `use-local-storage:${id ?? ''}`

	const [internalValue, setInternalValue] = useState<Type | undefined>(() => {
		try {
			return getValue(id) ?? initialValue
		} catch (error: unknown) {
			console.error(error)
		}

		return undefined
	})

	const setValue = useCallback(
		(value: SetStateAction<Type | undefined>) => {
			setInternalValue((previousState) => {
				const updatedValue =
					typeof value === 'function'
						? (value as (previousState: Type | undefined) => Type)(
								previousState
							)
						: value

				if (id) {
					const stringifiedValue = JSON.stringify(updatedValue ?? null)
					window.localStorage.setItem(id, stringifiedValue)
					window.dispatchEvent(new Event(eventId))
				}

				return updatedValue
			})
		},
		[id, eventId]
	)

	const updateInternalValue = useCallback(() => {
		try {
			setInternalValue(getValue(id))
		} catch (error: unknown) {
			console.error(error)
		}
	}, [id])

	useEffect(() => {
		updateInternalValue()
	}, [updateInternalValue])

	useEffect(() => {
		const listener = () => {
			updateInternalValue()
		}

		window.addEventListener(eventId, listener)

		return () => {
			window.removeEventListener(eventId, listener)
		}
	}, [updateInternalValue, eventId])

	return [internalValue, setValue]
}
