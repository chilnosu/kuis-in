import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import './selection.css'

export default function SelectionLayout({ title, subtitle, backHref, backLabel, children }) {
  useEffect(() => {
    document.title = `${title} — Kuis-in!`
  }, [title])

  return (
    <main className="selection-page" aria-labelledby="selection-title">
      <header className="selection-header">
        <a className="selection-back" href={backHref} aria-label={backLabel}>
          <ArrowLeft size={24} aria-hidden="true" />
        </a>
        <div>
          <h1 id="selection-title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </header>
      {children}
    </main>
  )
}
