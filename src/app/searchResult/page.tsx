'use client'
import React from 'react'
import ProductCard from './components/ProductCard'
import { useAtom } from 'jotai'
import { searchResults } from '../app.context'

const SearchResult = () => {
  const [results] = useAtom(searchResults)
  return (
    <div className="flex h-full w-full flex-col bg-slate-50 p-10">
      <h1 className="text-4xl">Search Results</h1>
      <h1 className="text-xl text-slate-600">
        We found these items specially curated for you based on your search
      </h1>
      {results.map(
        ({
          brand,
          description,
          price,
          currency,
          productVariations,
          assets,
        }) => (
          <ProductCard
            key={`${description}-${brand}`}
            brand={brand}
            description={description}
            price={price}
            currency={currency}
            productVariations={productVariations}
            assets={assets}
          />
        ),
      )}
    </div>
  )
}

export default SearchResult
