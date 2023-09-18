import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserDataTypes {
	street: string
	number: string
	neighborhood: string
	city: string
	state: string
	name: string
	paymentMethod: string
}

export interface UserDataProps extends UserDataTypes {
	setUserData: (data: UserDataTypes) => void
}

export const useUserData = create<UserDataProps>()(
	persist(
		(set) => {
			return {
				street: '',
				number: '',
				neighborhood: '',
				city: '',
				state: '',
				name: '',
				paymentMethod: '',
				setUserData: (data: UserDataTypes) =>
					set({
						street: data.street,
						number: data.number,
						neighborhood: data.neighborhood,
						city: data.city,
						state: data.state,
						name: data.name,
						paymentMethod: data.paymentMethod,
					}),
			}
		},
		{
			name: 'user-data-storage',
			skipHydration: true,
		},
	),
)
