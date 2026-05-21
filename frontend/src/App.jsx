import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PublicApi from './pages/PublicApi'
import SelectMovie from './pages/MovieDisplay'
import ReviewUpdate from './pages/ReviewUpdate'

export default function App() {
  return (
    <BrowserRouter>
      <div className="background min-h-screen">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movieapi" element={<PublicApi />} />
            <Route path="/movie/:movieId" element={<SelectMovie />} />
            <Route path="/review/:reviewId" element={<ReviewUpdate />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
