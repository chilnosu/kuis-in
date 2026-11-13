import Brand from './Brand'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner flex flex-wrap items-center justify-between gap-5">
        <div className="footer-brand">
          <Brand />
          <p>Tempat latihan soal pilihan ganda.</p>
        </div>
        <div className="footer-credit">
          <p>Made with <span className="footer-heart" aria-label="love">♡</span> by <strong>Chilnosu</strong></p>
          <p>© {new Date().getFullYear()} Kuis-in!</p>
        </div>
      </div>
    </footer>
  )
}
