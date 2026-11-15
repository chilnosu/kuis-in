import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'

export default function Home() {
  return (
    <div id="beranda">
      <main id="konten" className="shell" tabIndex={-1}>
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
