import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Research from './pages/Research'
import Team from './pages/Team'
import Publications from './pages/Publications'
import JoinUs from './pages/JoinUs'
import NotFound from './pages/NotFound'
import './styles.css'

const pages = {
  '/': { component: Home, title: 'Intelligent Controls Lab | NC State University' },
  '/home': { component: Home, title: 'Intelligent Controls Lab | NC State University' },
  '/research': { component: Research, title: 'Research | Intelligent Controls Lab' },
  '/team': { component: Team, title: 'Our Team | Intelligent Controls Lab' },
  '/publications': { component: Publications, title: 'Publications | Intelligent Controls Lab' },
  '/join-us': { component: JoinUs, title: 'Join Us | Intelligent Controls Lab' },
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const page = pages[pathname] || {
    component: NotFound,
    title: 'Page not found | Intelligent Controls Lab',
  }
  const Page = page.component
  useEffect(() => {
    document.title = page.title
  }, [page.title])
  return (
    <Layout pathname={pathname === '/home' ? '/' : pathname}>
      <Page />
    </Layout>
  )
}
