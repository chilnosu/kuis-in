import { ArrowRight } from 'lucide-react'
import SelectionLayout from '../components/SelectionLayout'

const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

export default function SemesterSelection() {
  return (
    <SelectionLayout
      title="Pilih Semester"
      subtitle="Pilih semester untuk mulai latihan soal sesuai mata kuliahmu."
      backHref="/"
      backLabel="Kembali ke Beranda"
    >
      <ul className="selection-grid" aria-label="Daftar semester">
        {semesters.map(semester => (
          <li key={semester}>
            <a className="semester-card" href={`/latihan-soal/semester/${semester}`}>
              <span className="semester-icon" aria-hidden="true">{semester}</span>
              <h2>Semester {semester}</h2>
              <p>Pilih mata kuliah dan mulai latihan.</p>
              <ArrowRight className="semester-arrow" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </SelectionLayout>
  )
}
