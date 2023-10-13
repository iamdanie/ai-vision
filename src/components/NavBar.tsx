'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import React from 'react'
import { sections } from './constants'
import { Heart, ShoppingCart, User } from 'lucide-react'

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">OFF2FASHION</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {sections.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link color="foreground" href="#">
            Sign Up
          </Link>
        </NavbarItem>
        <NavbarItem className="flex flex-row gap-2">
          <ShoppingCart size={24} strokeWidth={1} />
          <Heart size={24} strokeWidth={1} stroke="#FFFFFF" fill="#C9184A" />
          <User size={24} strokeWidth={1} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {sections.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === sections.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
