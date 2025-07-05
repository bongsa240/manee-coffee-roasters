
const products = [
  {
    id: 1,
    name: "Bolaven Plateau Dark Roast",
    description: "A rich, full-bodied dark roast with notes of dark chocolate and smoky undertones. Grown at 1,200m elevation in the fertile volcanic soil of the Bolaven Plateau.",
    price: "$24.99",
    features: ["Dark Roast", "Organic", "Fair Trade", "Single Origin"]
  },
  {
    id: 2,
    name: "Highland Medium Roast",
    description: "A balanced medium roast with bright acidity and floral notes. Perfectly captures the unique terroir of Laos' northern mountains with hints of citrus and honey.",
    price: "$22.99",
    features: ["Medium Roast", "Organic", "Floral Notes", "Single Origin"]
  },
  {
    id: 3,
    name: "Mekong Light Roast",
    description: "A light roast that highlights the delicate flavors of high-altitude Laotian coffee. Bright and complex with notes of tropical fruit and jasmine.",
    price: "$21.99",
    features: ["Light Roast", "Organic", "Fruity Notes", "Single Origin"]
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-dark mb-4">
            Our Coffee Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each blend tells a story of the highlands of Laos, carefully roasted to bring out the unique 
            characteristics of our sustainably sourced beans.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <div className={`w-full h-full rounded-t-lg flex items-center justify-center ${
                  index === 0 ? 'bg-gradient-to-br from-coffee-dark to-coffee-brown' :
                  index === 1 ? 'bg-gradient-to-br from-coffee-brown to-coffee-light' :
                  'bg-gradient-to-br from-coffee-light to-earth-green'
                }`}>
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">☕</div>
                    <p className="text-sm font-medium">
                      {index === 0 ? 'Dark Roast' : index === 1 ? 'Medium Roast' : 'Light Roast'}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-coffee-dark mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-coffee-light text-coffee-dark text-xs rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-coffee-dark">
                    {product.price}
                  </span>
                  <button className="bg-coffee-brown hover:bg-coffee-dark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-coffee-light rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-coffee-dark mb-2">
              E-commerce Coming Soon
            </h3>
            <p className="text-coffee-dark mb-4">
              We&apos;re preparing to launch our online store to bring these exceptional coffees directly to your door. 
              Stay tuned for updates!
            </p>
            <button className="bg-coffee-brown hover:bg-coffee-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Join Our Mailing List
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}