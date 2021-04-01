import { localStore } from './localStore'

export const theme = localStore('theme', 'dark')
export const color = localStore('color', 'indigo')