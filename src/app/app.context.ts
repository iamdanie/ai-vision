import { atom } from 'jotai'

//ToDo: define type for product
export type Product = any

export const products = atom<Product[]>([])
export const searchResults = atom<Product[]>([])
