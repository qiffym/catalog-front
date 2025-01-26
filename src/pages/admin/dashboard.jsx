import { Header } from '../../layouts/partials/header'

export default function Dashboard() {
  return (
    <div className="mx-auto w-full space-y-6 px-4">
      <Header title={'Dashboard'} description={'This is a dashboard page for managing your products and other data.'} />
    </div>
  )
}
