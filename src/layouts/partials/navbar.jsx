import { useEffect, useState } from 'react'
import { FilterButton } from '../../components/filter-button'
import { SearchInput } from '../../components/search-input'
import { Tabs } from '../../components/tabs'
import { useProduct } from '../../context/product-context'

export function Navbar() {
  const [activeTab, setActiveTab] = useState(0)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [filter, setFilter] = useState('')
  const { fetchProduct } = useProduct()

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    fetchProduct({ size: 9, search, category, filter })
  }, [search, category, filter])

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Tabs activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>
      <div className="flex-none gap-2">
        <SearchInput setSearch={setSearch} />
        <FilterButton setFilter={setFilter} />
      </div>
    </div>
  )
}
