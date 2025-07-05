
export default function LaosSection() {
  return (
    <section id="laos" className="py-20 bg-gradient-to-br from-earth-green to-coffee-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">
            Discover Beautiful Laos
          </h2>
          <p className="text-lg text-coffee-dark max-w-3xl mx-auto">
            Nestled in the heart of Southeast Asia, Laos is a landlocked country blessed with pristine mountains, 
            rich cultural heritage, and ideal conditions for growing exceptional coffee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-coffee-dark mb-6">
              The Perfect Growing Conditions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-coffee-brown rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-dark">High Altitude</h4>
                  <p className="text-coffee-dark">Coffee grown at 1,000-1,350m elevation in the Bolaven Plateau</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-coffee-brown rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-dark">Volcanic Soil</h4>
                  <p className="text-coffee-dark">Rich, fertile volcanic soil provides essential nutrients</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-coffee-brown rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-dark">Ideal Climate</h4>
                  <p className="text-coffee-dark">Perfect balance of rainfall and sunshine throughout the year</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-coffee-brown rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-coffee-dark">Traditional Methods</h4>
                  <p className="text-coffee-dark">Time-honored cultivation techniques passed down through generations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-earth-green via-coffee-light to-coffee-brown rounded-lg shadow-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🏔️</div>
                <h3 className="text-2xl font-bold mb-2">Beautiful Laos</h3>
                <p className="text-lg">Mountain highlands perfect for coffee</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="relative h-48 mb-4">
              <div className="w-full h-full bg-gradient-to-br from-coffee-light to-coffee-brown rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏛️</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-2">Rich Cultural Heritage</h3>
            <p className="text-gray-600 text-sm">
              Laos is home to ancient temples, vibrant festivals, and a rich Buddhist culture that has remained 
              largely unchanged for centuries.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="relative h-48 mb-4">
              <div className="w-full h-full bg-gradient-to-br from-earth-green to-coffee-light rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏔️</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-2">Pristine Nature</h3>
            <p className="text-gray-600 text-sm">
              From the magnificent Kuang Si Falls to the mysterious Plain of Jars, Laos offers some of 
              Southeast Asia&apos;s most stunning natural landscapes.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="relative h-48 mb-4">
              <div className="w-full h-full bg-gradient-to-br from-coffee-brown to-earth-green rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">🏘️</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-coffee-dark mb-2">Mountain Communities</h3>
            <p className="text-gray-600 text-sm">
              Small farming communities in the mountains maintain traditional ways of life, carefully 
              tending to their coffee plants with generations of knowledge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}