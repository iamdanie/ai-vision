'use client'

import { Mail, Instagram, Twitter, Youtube, Facebook } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex w-full max-w-screen-xl flex-col bg-[#2B2B28]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-[#E3B04B]">
                Company
              </h2>
              <ul className="font-medium text-[#F1D6AB]">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-[#E3B04B]">
                Help center
              </h2>
              <ul className="font-medium text-[#F1D6AB]">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-[#E3B04B]">
                Legal
              </h2>
              <ul className="font-medium text-[#F1D6AB]">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-[#E3B04B]">
                About
              </h2>
              <ul className="font-medium text-[#F1D6AB]">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    News
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Purpose
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:font-semi-bold hover:text-[#ffffff]"
                  >
                    Sustainability
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#2B2B28] pt-8 md:flex md:items-center md:justify-between ">
            <span className="text-xs text-[#F1D6AB] sm:text-center">
              © 2023{' '}
              <a
                href="https://off2fashion.com/"
                className="hover:text-[#ffffff]"
              >
                OFF2FASHION™
              </a>
              . Inc. All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-5 sm:justify-center md:mt-0">
              <a
                href="#"
                className="hover:font-semi-bold text-[#F1D6AB] hover:text-[#ffffff]"
              >
                <Facebook size={16} strokeWidth={1.7} />
              </a>
              <a
                href="#"
                className="hover:font-semi-bold text-[#F1D6AB] hover:text-[#ffffff]"
              >
                <Youtube size={16} strokeWidth={1.7} />
              </a>
              <a
                href="#"
                className="hover:font-semi-bold text-[#F1D6AB] hover:text-[#ffffff]"
              >
                <Twitter size={16} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="hover:font-semi-bold text-[#F1D6AB] hover:text-[#ffffff]"
              >
                <Instagram size={16} strokeWidth={2} />
              </a>
              <a
                href="#"
                className="hover:font-semi-bold text-[#F1D6AB] hover:text-[#ffffff]"
              >
                <Mail size={16} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
