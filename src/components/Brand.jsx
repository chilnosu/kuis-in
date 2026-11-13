import { Check } from 'lucide-react'

export default function Brand() {
  return (
    <a className="brand inline-flex items-center gap-2.5" href="#beranda" aria-label="Kuis-in! — Beranda">
      <span className="brand-icon" aria-hidden="true">
        <Check size={21} strokeWidth={3.1} />
      </span>
      <span>Kuis-in<span className="brand-exclamation">!</span></span>
    </a>
  )
}
