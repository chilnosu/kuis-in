import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div id="beranda">
      <a className="skip-link" href="#konten">Lewati ke konten</a>
      <Navbar />
      <main id="konten" className="shell" tabIndex={-1}>
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  )
}
