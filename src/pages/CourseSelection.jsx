import SelectionLayout from '../components/SelectionLayout'

const mascotPath = import.meta.env.BASE_URL + 'mascots/side-eye.webp'

export default function CourseSelection({ semester }) {
  const subtitle = semester
    ? `Semester ${semester} — Pilih mata kuliah yang ingin kamu latih.`
    : 'Pilih semester 1 sampai 8 dari daftar semester.'

  return (
    <SelectionLayout
      title="Pilih Mata Kuliah"
      subtitle={subtitle}
      backHref="/latihan-soal"
      backLabel="Kembali ke Pilih Semester"
    >
      <section className="course-empty" aria-labelledby="course-empty-title">
        <div className="course-mascot">
          <img src={mascotPath} width="120" height="120" alt="" />
        </div>
        <h2 id="course-empty-title">
          {semester ? 'Mata Kuliah Segera Hadir!' : 'Semester tidak ditemukan'}
        </h2>
        {semester && <p>Daftar mata kuliah untuk semester ini sedang disiapkan.</p>}
      </section>
    </SelectionLayout>
  )
}
