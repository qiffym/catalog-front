import { useNavigation, Outlet } from 'react-router-dom'

export const AppWrapper = () => {
  const { state } = useNavigation()

  if (state === 'loading') {
    return (
      <div className="flex h-full min-h-[50vh] w-full items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return <Outlet />
}

export default AppWrapper
