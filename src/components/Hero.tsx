import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-coffee-dark via-coffee-brown to-earth-green"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Sustainably Sourced
          <br />
          <span className="text-laos-gold">Coffee from Laos</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Discover the rich, unique flavors of premium coffee beans grown in the pristine highlands of Laos, 
          roasted with care and sourced with purpose.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-coffee-brown hover:bg-coffee-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
            Explore Our Coffee
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-coffee-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            Learn About Laos
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}