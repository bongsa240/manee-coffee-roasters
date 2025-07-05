import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import LaosSection from '@/components/LaosSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <LaosSection />
      <Footer />
    </main>
  )
}