import Navbar from './components/Navbar'
import CourseSelection from './pages/CourseSelection'
import Home from './pages/Home'
import SemesterSelection from './pages/SemesterSelection'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  const semesterRoute = path.match(/^\/latihan-soal\/semester(?:\/([^/]+))?$/)
  let page = <Home />
  let practiceCurrent

  if (semesterRoute) {
    const semesterId = semesterRoute[1] ?? ''
    const semester = /^[1-8]$/.test(semesterId) ? Number(semesterId) : null
    page = <CourseSelection semester={semester} />
    practiceCurrent = 'location'
  } else if (path === '/latihan-soal') {
    page = <SemesterSelection />
    practiceCurrent = 'page'
  }

  return (
    <>
      <a className="skip-link" href="#konten">Lewati ke konten</a>
      <Navbar practiceCurrent={practiceCurrent} />
      {page}
    </>
  )
}
