import './globals.css'
import localFont from 'next/font/local'

const ProximaNova = localFont({
  src: [
    {
      path: './fonts/ProximaNovaRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/ProximaNovaBold.otf',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/ProximaNovaSemibold.otf',
      weight: '600',
      style: 'semibold',
    },
  ],
})

export const metadata = {
  title: 'Off2Fashion',
  description: '',
}

import { Providers } from './providers'
import { cn } from '~/utils'
import NavBar from '~/components/NavBar'
import Widget from '~/components/Widget'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cn([
        ProximaNova.className,
        'max-h-full max-w-full bg-background text-foreground light',
      ])}
    >
      <body>
        <Providers>
          <NavBar />
          {children}
          <Widget />
        </Providers>
      </body>
    </html>
  )
}
