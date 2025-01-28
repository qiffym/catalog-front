import { Outlet } from 'react-router-dom'
import { Navbar } from './partials/navbar'
import { Footer } from './partials/footer'
import { HeroSection } from '../components/hero-section'
import AppWrapper from '../components/app-wrapper'

export default function AppLayout() {
  return (
    <>
      <HeroSection />
      <div className="mx-auto max-w-7xl pt-6">
        <Navbar />
        <AppWrapper>
          <Outlet />
        </AppWrapper>
      </div>
      <Footer />
    </>
  )
}
