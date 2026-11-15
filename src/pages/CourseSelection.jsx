import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import SelectionLayout from '../components/SelectionLayout'
import { semesterOneCourses } from '../data/courses'

const mascotPath = import.meta.env.BASE_URL + 'mascots/'

function CourseCards({ courses }) {
  const notice = useRef(null)
  const [selectedCourse, setSelectedCourse] = useState(null)

  useEffect(() => {
    if (!selectedCourse) return

    const dialog = notice.current
    dialog.autofocus = true
    dialog.showModal()
  }, [selectedCourse])

  return (
    <>
      <ul className="selection-grid" aria-label="Daftar mata kuliah">
        {courses.map(course => (
          <li key={course.name}>
            <button
              className="course-card"
              type="button"
              aria-haspopup="dialog"
              onClick={event => {
                event.currentTarget.focus({ preventScroll: true })
                setSelectedCourse(course.name)
              }}
            >
              <span className="course-card-art" aria-hidden="true">
                <img src={mascotPath + course.mascot} width="500" height="500" alt="" />
              </span>
              <span className="course-card-title">{course.name}</span>
              <span className="course-card-label">Latihan soal</span>
              <ArrowRight className="semester-arrow" aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        className="course-notice"
        ref={notice}
        aria-labelledby="course-notice-title"
        aria-describedby="course-notice-description"
        onClose={() => setSelectedCourse(null)}
      >
        <h2 id="course-notice-title">Latihan Soal Segera Hadir!</h2>
        <p id="course-notice-description">
          {selectedCourse && `Latihan soal untuk ${selectedCourse} sedang disiapkan.`}
        </p>
        <form method="dialog">
          <button className="primary-button" type="submit">Tutup</button>
        </form>
      </dialog>
    </>
  )
}

export default function CourseSelection({ semester }) {
  const isSemesterOne = semester === 1
  let subtitle = 'Pilih semester 1 sampai 8 dari daftar semester.'
  if (semester) subtitle = `Semester ${semester} — Pilih mata kuliah yang ingin kamu latih.`
  if (isSemesterOne) subtitle = 'Semester 1 — Pilih mata kuliah untuk mulai latihan soal.'

  return (
    <SelectionLayout
      title="Pilih Mata Kuliah"
      subtitle={subtitle}
      backHref="/latihan-soal"
      backLabel="Kembali ke Pilih Semester"
    >
      {isSemesterOne ? (
        <CourseCards courses={semesterOneCourses} />
      ) : (
        <section className="course-empty" aria-labelledby="course-empty-title">
          <div className="course-mascot">
            <img src={mascotPath + 'side-eye.webp'} width="120" height="120" alt="" />
          </div>
          <h2 id="course-empty-title">
            {semester ? 'Mata Kuliah Segera Hadir!' : 'Semester tidak ditemukan'}
          </h2>
          {semester && <p>Daftar mata kuliah untuk semester ini sedang disiapkan.</p>}
        </section>
      )}
    </SelectionLayout>
  )
}
