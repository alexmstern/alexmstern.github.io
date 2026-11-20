import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import SocialLinks from './components/SocialLinks'
import './App.css'

function Nav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isProjects = pathname === '/projects'

  return (
    <nav className="nav">
      <div className="toggle">
        <div className={`toggle-thumb${isProjects ? ' right' : ''}`} />
        <button
          className={`toggle-label${!isProjects ? ' active' : ''}`}
          onClick={() => navigate('/')}
        >
          About
        </button>
        <button
          className={`toggle-label${isProjects ? ' active' : ''}`}
          onClick={() => navigate('/projects')}
        >
          Projects
        </button>
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <div className="layout">
      <Nav />
      <main className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
      <SocialLinks />
    </div>
  )
}
