import CourseSelection from './pages/CourseSelection'
import Home from './pages/Home'
import SemesterSelection from './pages/SemesterSelection'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  const semesterRoute = path.match(/^\/latihan-soal\/semester(?:\/([^/]+))?$/)

  if (semesterRoute) {
    const semesterId = semesterRoute[1] ?? ''
    const semester = /^[1-8]$/.test(semesterId) ? Number(semesterId) : null
    return <CourseSelection semester={semester} />
  }

  if (path === '/latihan-soal') return <SemesterSelection />
  return <Home />
}
