import { create } from 'zustand'

export interface UI_Store {
	item: string
	setItem: (item: string) => void
}

export const useStore = create<UI_Store>((set) => ({
	item: '___',

	setItem: (item: string) => {
		set({ item })
	},
}))
