import type {Dispatch, ProviderProps, SetStateAction} from 'react'
import {createContext, useContext, useMemo, useState} from 'react'

export type StateContextProperties<Type> = [
	state: Type,
	setState: Dispatch<SetStateAction<Type>>,
	initialState: Type,
]

export const createStateContext = <Type,>(initialState: Type) => {
	const StateContext = createContext<StateContextProperties<Type>>([
		initialState,
		() => undefined,
		initialState,
	])

	const {Provider, Consumer: StateConsumer} = StateContext

	const StateProvider = (
		properties: Partial<ProviderProps<StateContextProperties<Type>>> & {
			state?: Type
		}
	) => {
		const {children, state: inputState, ...rest} = properties

		const combinedInitialState = useMemo(
			() => ({...initialState, ...inputState}),
			[inputState]
		)

		const [state, setState] = useState<Type>(() => combinedInitialState)

		return (
			<Provider {...rest} value={[state, setState, combinedInitialState]}>
				{children}
			</Provider>
		)
	}

	return {
		StateProvider,
		StateContext,
		StateConsumer,
		useStateContext: () => useContext(StateContext),
	}
}
