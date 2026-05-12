import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Team from './pages/Team'
import Blog from './pages/Blog'
import AllBlogs from './pages/AllBlogs'
import BlogDetail from './pages/BlogDetail'
import Services from './pages/Services'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import './styles/App.css'

function MainContent() {
  return (
    <>
      <Home />
      <AboutUs />
      <Team />
      <Blog />
      <Services />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <div className="page">
      <div className="gb gb-top" />
      <div className="gb gb-bottom" />
      <div className="gb gb-left" />
      <div className="gb gb-right" />

      <div className="fixed-sidebar">
        <Sidebar />
      </div>

      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/all-blogs" element={<AllBlogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
