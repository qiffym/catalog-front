import { Outlet, useNavigate } from 'react-router-dom'
import { SidebarMenu } from './partials/sidebar-menu'
import { useAuth } from '../context/auth-context'
import { useEffect } from 'react'

export default function AdminLayout() {
  const { logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true })
    }
  }, [isAuthenticated, navigate])

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-gradient-to-b from-base-100 from-80% to-base-200 lg:items-start lg:justify-normal">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
        <nav className="mt-6 flex w-full items-center justify-end gap-2 px-4">
          <p className="text-lg italic">Hi, Admin</p>
        </nav>
        <div className="divider" />
        <Outlet />
      </div>
      <div className="drawer-side border-r-2">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <SidebarMenu onLogout={logout} />
      </div>
    </div>
  )
}
