'use client'

import { Provider } from 'jotai'
import { NextUIProvider } from '@nextui-org/react'
import DataLayer from './dataLayer'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider>
        <DataLayer>{children}</DataLayer>
      </Provider>
    </NextUIProvider>
  )
}
