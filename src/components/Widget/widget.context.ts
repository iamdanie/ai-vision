'use client'

import { atom } from 'jotai'

export type Resource = {
  title: string
  link?: string
  route?: string
}

export type ChatMessage = {
  id: string
  role: string
  Content: React.FunctionComponent<any>
  clickable?: boolean
  resources?: Resource | Resource[]
  isLast?: boolean
  inGroup?: boolean
  hasRating?: boolean
}

const frames = {
  chat: 'chat',
} as const

type Frames = (typeof frames)[keyof typeof frames]

export const activeFrame = atom<Frames | null>(null)
export const messages = atom<ChatMessage[]>([])
