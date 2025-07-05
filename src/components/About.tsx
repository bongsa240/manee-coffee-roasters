import Image from 'next/image'
import {useTranslations} from 'next-intl'

export default function About() {
  const t = useTranslations('About')
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-coffee-dark mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('description1')}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {t('description2')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-earth-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-coffee-dark mb-2">{t('ethicalSourcing')}</h3>
                <p className="text-sm text-gray-600">{t('ethicalDescription')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-earth-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-coffee-dark mb-2">{t('environmentalCare')}</h3>
                <p className="text-sm text-gray-600">{t('environmentalDescription')}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-earth-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-coffee-dark mb-2">{t('qualityRoasting')}</h3>
                <p className="text-sm text-gray-600">{t('qualityDescription')}</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-coffee-brown via-earth-green to-coffee-light rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">☕</div>
                  <h3 className="text-2xl font-bold mb-2">Sustainable Coffee</h3>
                  <p className="text-lg">From farm to cup with care</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-coffee-brown text-white p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">{t('ethicallySourced')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}