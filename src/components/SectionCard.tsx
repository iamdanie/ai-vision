'use client'

import { Card, CardHeader, Image } from '@nextui-org/react'
import React from 'react'
import { cn } from '~/utils'

type SectionCardProps = {
  subtitle: string
  title: string
  imageUrl: string
  titleClassName?: string
  cardClassName?: string
  subtitleClassName?: string
}

const SectionCard = ({
  subtitle,
  title,
  imageUrl,
  titleClassName,
  cardClassName,
  subtitleClassName,
}: SectionCardProps) => (
  <Card className={cn('cursor-pointer shadow-none', cardClassName)}>
    <CardHeader className="absolute top-1/2 z-10 flex-col items-center">
      <p
        className={cn(
          'text-large font-bold uppercase text-white/60',
          subtitleClassName,
        )}
      >
        {subtitle}
      </p>
      <h4 className={cn('text-4xl font-semibold text-white', titleClassName)}>
        {title}
      </h4>
    </CardHeader>
    <div className="h-fit w-fit hover:opacity-60">
      <Image
        removeWrapper
        alt="Card background"
        className="xs:h-[100px] z-0 w-full object-cover sm:h-[350px] lg:h-[700px]"
        src={imageUrl}
      />
    </div>
  </Card>
)

export default SectionCard
