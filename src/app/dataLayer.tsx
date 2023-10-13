'use client'

import { useAtom } from 'jotai'
import { useEffect } from 'react'
import useSWR from 'swr'
import { products } from './app.context'

const fetcher = (url: string) =>
  fetch(url, { method: 'GET' }).then((res) => res.json())

const DataLayer = ({ children }: { children: React.ReactNode }) => {
  const [_, setProducts] = useAtom(products)

  const { data } = useSWR('/api/products', fetcher)

  useEffect(() => {
    if (data) {
      setProducts(Array.from(data))
    }
  }, [data])

  return <div>{children}</div>
}

export default DataLayer
