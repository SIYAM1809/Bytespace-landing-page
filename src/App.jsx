import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Logos from './components/Logos/Logos'
import Courses from './components/Courses/Courses'
import Categories from './components/Categories/Categories'
import GrowthSection from './components/GrowthSection/GrowthSection'
import CreatorSection from './components/CreatorSection/CreatorSection'
import CreatorCTA from './components/CreatorCTA/CreatorCTA'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import SearchPage from './pages/SearchPage/SearchPage'
import CourseDetails from './pages/CourseDetails/CourseDetails'
import CreatorProfile from './pages/CreatorProfile/CreatorProfile'
import NotFound from './pages/NotFound/NotFound'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Courses />
        <Categories />
        <GrowthSection />
        <CreatorSection />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/creator/:id" element={<CreatorProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
