'use client'
import {
  Card,
  CardBody,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react'

type ProductCardProps = {
  brand: string
  description: string
  price: number
  currency: string
  productVariations: Record<string, any>[]
  assets: string[]
}

const ProductCard = ({
  brand,
  description,
  price,
  currency,
  productVariations,
  assets,
}: ProductCardProps) => {
  return (
    <div className="pt-4">
      <Card
        isBlurred
        className=" max-h-full max-w-full border-none bg-background/60 dark:bg-default-100/50"
        shadow="sm"
      >
        <CardBody>
          <div className="flex items-center gap-4">
            <div className="relative col-span-6 md:col-span-4">
              <Image
                alt="clothes"
                className="object-cover"
                height={100}
                src={assets[0]}
                width={100}
              />
            </div>
            <div className="col-span-6 flex flex-col md:col-span-8">
              <div className="flex items-start justify-start">
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground/90">{brand}</h3>
                  <p className="text-left text-small text-foreground/80">
                    {description}
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-8">
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered">Sizes</Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  {productVariations.map(({ size, variationId }) => (
                    <DropdownItem
                      key={`${brand}-${description}-${variationId}`}
                    >
                      {size}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            <strong className="mx-8">{`$${price} ${currency}`}</strong>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default ProductCard
