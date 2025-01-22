import { useState } from 'react'
import { FilterButton } from '../../components/filter-button'
import { SearchInput } from '../../components/search-input'
import { Tabs } from '../../components/tabs'

export function Navbar() {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>
      <div className="flex-none gap-2">
        <SearchInput />
        <FilterButton />
      </div>
    </div>
  )
}
