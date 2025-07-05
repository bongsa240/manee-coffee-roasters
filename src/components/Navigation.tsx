'use client'

import { useState } from 'react'
import Image from 'next/image'
import {useTranslations} from 'next-intl'
import {useRouter, usePathname} from '@/i18n/routing'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations('Navigation')
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (locale: string) => {
    router.push(pathname, {locale})
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.jpg"
                alt="Manee Coffee Roasters"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-3 text-xl font-bold text-coffee-dark">
                {t('brand')}
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                {t('home')}
              </a>
              <a href="#about" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                {t('about')}
              </a>
              <a href="#products" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                {t('products')}
              </a>
              <a href="#laos" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                {t('laos')}
              </a>
              <a href="#contact" className="text-coffee-dark hover:text-coffee-brown px-3 py-2 text-sm font-medium transition-colors">
                {t('contact')}
              </a>
              
              {/* Language Switcher */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className="px-2 py-1 text-xs font-medium text-coffee-dark hover:text-coffee-brown transition-colors border border-coffee-light rounded"
                >
                  EN
                </button>
                {/* <button
                  onClick={() => handleLanguageChange('lo')}
                  className="px-2 py-1 text-xs font-medium text-coffee-dark hover:text-coffee-brown transition-colors border border-coffee-light rounded"
                >
                  ລາວ
                </button> */}
              </div>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-coffee-dark hover:text-coffee-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coffee-brown"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              {t('home')}
            </a>
            <a href="#about" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              {t('about')}
            </a>
            <a href="#products" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              {t('products')}
            </a>
            <a href="#laos" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              {t('laos')}
            </a>
            <a href="#contact" className="block px-3 py-2 text-coffee-dark hover:text-coffee-brown text-base font-medium">
              {t('contact')}
            </a>
            
            {/* Mobile Language Switcher */}
            <div className="flex space-x-2 px-3 py-2">
              <button
                onClick={() => handleLanguageChange('en')}
                className="px-3 py-1 text-sm font-medium text-coffee-dark hover:text-coffee-brown transition-colors border border-coffee-light rounded"
              >
                EN
              </button>
              {/* <button
                onClick={() => handleLanguageChange('lo')}
                className="px-3 py-1 text-sm font-medium text-coffee-dark hover:text-coffee-brown transition-colors border border-coffee-light rounded"
              >
                ລາວ
              </button> */}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}