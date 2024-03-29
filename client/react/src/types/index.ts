import { Media } from './media'

export * from './media'
export * from './user'

export type BasicAttrObject = { [key: string]: string }
export type CSSObject = BasicAttrObject
export type MediaItemHandler = (item: Media) => void
export type CategoryName = 'all-media' | 'movies' | 'series' | 'favorites'
