import { useRef } from 'react'
import { ArrowDown, ArrowRight, Check, CircleHelp, Clock3, Sparkles } from 'lucide-react'

const mascotPath = import.meta.env.BASE_URL + 'mascots/'

export default function Hero() {
  const quizNotice = useRef(null)

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
          Latihan Soal Jadi <span>Lebih Seru!</span>
        </h1>
        <p>Uji kemampuanmu dengan berbagai latihan soal, cek hasilnya, dan lihat sejauh mana kamu berkembang.</p>
        <div className="hero-actions flex flex-wrap items-center justify-center gap-3">
          <button className="primary-button" type="button" onClick={() => quizNotice.current.showModal()}>
            Mulai Kuis <ArrowRight size={19} aria-hidden="true" />
          </button>
          <a className="secondary-button" href="#cara-kerja">
            Lihat Cara Kerja <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </div>

      <dialog ref={quizNotice} className="quiz-dialog" aria-labelledby="quiz-notice-title" aria-describedby="quiz-notice-description">
        <div className="dialog-icon"><Clock3 size={24} aria-hidden="true" /></div>
        <h2 id="quiz-notice-title">Kuis segera hadir!</h2>
        <p id="quiz-notice-description">Latihan soal sedang disiapkan. Nantinya, kamu bisa pilih kuis dan langsung mulai latihan.</p>
        <form method="dialog">
          <button className="primary-button" type="submit">Kembali ke Beranda</button>
        </form>
      </dialog>
    </section>
  )
}
