'use client'

import SectionCard from '~/components/SectionCard'
import Footer from '~/components/Footer'

export default function Home() {
  return (
    <main className="flex h-full w-screen flex-col">
      <div className="flex h-fit w-full flex-col bg-[#2B2B28] py-8">
        <div className="text-7xl font-semibold text-[#F1D6AB]">{`We've just arrived`}</div>
        <div className="text-7xl font-semibold text-[#E3B04B]">{`We're OFF2FASHION`}</div>
        <div className="text-7xl font-semibold text-[#E3B04B]">{`Pick your outfit`}</div>
        <div className="text-7xl font-semibold text-[#E3B04B]">{`To Show OFF!`}</div>
      </div>
      <div className="flex w-full flex-row justify-center gap-4 bg-gray-50 px-unit-2xl py-unit-2xl">
        <SectionCard
          subtitleClassName="text-black"
          titleClassName="text-black text-7xl"
          imageUrl="/woman.png"
          subtitle="DISCOVER"
          title="WOMAN"
        />
        <SectionCard
          subtitleClassName="text-black"
          titleClassName="text-black text-7xl"
          imageUrl="/man.png"
          subtitle="DISCOVER"
          title="MAN"
        />
      </div>
      <div className="flex h-full w-screen flex-col bg-[#2B2B28] px-unit-2xl pb-3 pt-unit-xl">
        <Footer />
      </div>
    </main>
  )
}
