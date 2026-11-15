import { ClipboardCheck, LayoutGrid, ListChecks } from 'lucide-react'

const steps = [
  {
    title: 'Pilih Mata Kuliah',
    description: 'Pilih Mata Kuliah dan Materi yang ingin kamu kerjakan.',
    Icon: LayoutGrid,
    color: 'lime',
  },
  {
    title: 'Kerjakan Soal',
    description: 'Jawab pertanyaan sebisa mungkin.',
    Icon: ListChecks,
    color: 'cyan',
  },
  {
    title: 'Lihat Hasil',
    description: 'Nilai akan langsung tertera, disertai pembahasan.',
    Icon: ClipboardCheck,
    color: 'mint',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-section" aria-label="Langkah latihan soal">
      <ol className="step-grid grid gap-3.5 md:grid-cols-3">
        {steps.map(({ title, description, Icon, color }) => (
          <li className="step-card flex gap-4" key={title}>
            <span className={`step-icon step-icon-${color}`} aria-hidden="true">
              <Icon size={23} strokeWidth={2.1} />
            </span>
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
