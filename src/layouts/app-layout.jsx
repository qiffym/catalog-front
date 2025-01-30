import { Outlet } from 'react-router-dom'
import { Footer } from './partials/footer'
import AppWrapper from '../components/app-wrapper'

export default function AppLayout() {
  return (
    <>
      <AppWrapper>
        <Outlet />
      </AppWrapper>
      <Footer />
    </>
  )
}
