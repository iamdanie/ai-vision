'use client'

import * as React from 'react'
import { cn } from '~/utils'

import './style.css'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement
  iconPosition?: 'start' | 'end'
  inputClassName?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      icon,
      iconPosition = 'start',
      onChange,
      placeholder,
      inputClassName,
    },
    ref,
  ) => {
    return (
      <div
        id="editable-input"
        className={cn(
          'flex h-full min-h-[28px] w-[224px] flex-row items-center justify-between gap-[10px] border border-[#DFE4E8] pl-[10px] focus:outline-none focus:before:content-none',
          className,
        )}
      >
        <div className="flex flex-row items-center gap-2">
          {icon && iconPosition === 'start' && <div>{icon}</div>}
          <div
            ref={ref}
            id="editor"
            className={cn(
              'max-w-[180px] focus:outline-none focus:before:content-none',
              inputClassName,
            )}
            contentEditable
            onInput={onChange}
            placeholder={placeholder}
          ></div>
        </div>
        {icon && iconPosition === 'end' && <div className="pr-3">{icon}</div>}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
