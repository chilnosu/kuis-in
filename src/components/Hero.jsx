import { ArrowDown, ArrowRight, Check, CircleHelp, Sparkles } from 'lucide-react'

const mascotPath = import.meta.env.BASE_URL + 'mascots/'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-stage" aria-hidden="true">
        <div className="hero-grid" />
        <div className="scene scene-left">
          <div className="scene-orbit" />
          <img className="mascot mascot-dizzy" src={mascotPath + 'dizzy.webp'} width="500" height="500" alt="" />
          <span className="scene-tile question-tile"><CircleHelp /></span>
          <span className="scene-sparkle left-sparkle"><Sparkles /></span>
        </div>
        <div className="scene scene-right">
          <div className="scene-orbit" />
          <img className="mascot mascot-side-eye" src={mascotPath + 'side-eye.webp'} width="500" height="500" alt="" fetchPriority="high" />
          <span className="scene-tile check-tile"><Check /></span>
          <span className="scene-sparkle right-sparkle"><Sparkles /></span>
        </div>
      </div>

      <div className="hero-content text-center">
        <h1 id="hero-title">
          Latihan Soal <span>Sebelum Kuis</span>
        </h1>
        <p>Dengan mengerjakan soal tahun lalu, apakah kamu bisa mengerjakan kuis nanti</p>
        <div className="hero-actions flex flex-wrap items-center justify-center gap-3">
          <a className="primary-button" href="/latihan-soal">
            Mulai Kuis <ArrowRight size={19} aria-hidden="true" />
          </a>
          <a className="secondary-button" href="#cara-kerja">
            Lihat Cara Kerja <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
