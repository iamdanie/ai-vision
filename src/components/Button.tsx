'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '~/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[#E3B04B] text-sm font-normal text-white hover:opacity-70 max-h-8 rounded',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent rounded font-normal',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        icon: 'bg-white rounded-full data-[state=open]:bg-[#E3B04B] data-[state=open]:h-16 data-[state=open]:w-16',
        action: 'bg-[#086BD5] text-white rounded-full disabled:bg-[#606E78]',
      },
      size: {
        default: 'h-8 px-4 py-2',
        sm: 'h-8 rounded px-3 w-fit',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-14 w-14 bg-[#F1D6AB]',
        action: 'h-7 w-7 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
