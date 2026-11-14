import {
  ArrowRight, BookOpen, NotebookPen, LibraryBig, ClipboardList,
  Layers, FolderOpen, FileText, GraduationCap,
} from 'lucide-react'
import SelectionLayout from '../components/SelectionLayout'

const semesterIcons = [
  BookOpen, NotebookPen, LibraryBig, ClipboardList,
  Layers, FolderOpen, FileText, GraduationCap,
]

export default function SemesterSelection() {
  return (
    <SelectionLayout
      title="Pilih Semester"
      subtitle="Pilih semester untuk mulai latihan soal sesuai mata kuliahmu."
      backHref="/"
      backLabel="Kembali ke Beranda"
    >
      <ul className="selection-grid" aria-label="Daftar semester">
        {semesterIcons.map((Icon, index) => {
          const semester = index + 1

          return (
            <li key={semester}>
              <a className="semester-card" href={`/latihan-soal/semester/${semester}`}>
                <span className="semester-icon" aria-hidden="true"><Icon /></span>
                <h2>Semester {semester}</h2>
                <p>Pilih mata kuliah dan mulai latihan.</p>
                <ArrowRight className="semester-arrow" aria-hidden="true" />
              </a>
            </li>
          )
        })}
      </ul>
    </SelectionLayout>
  )
}
