import { useEffect, useState } from 'react'
import { FilterButton } from '../../components/filter-button'
import { SearchInput } from '../../components/search-input'
import { Tabs } from '../../components/tabs'
import { useProduct } from '../../context/product-context'

export function Navbar() {
  const [activeTab, setActiveTab] = useState(0)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [filter, setFilter] = useState('latest')
  const { fetchProduct, setSearch: setSearchContext, setSort, setPage } = useProduct()

  const handleTabChange = (tab) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    setPage(1)
    fetchProduct({ size: 9, search, category, sort: filter })
    setSearchContext(search)
    setSort(filter)
  }, [search, category, filter])

  return (
    <div className="navbar mb-4 bg-base-100 p-0">
      <div className="flex-1">
        <Tabs activeTab={activeTab} setActiveTab={handleTabChange} setCategory={setCategory} />
      </div>
      <div className="flex-none gap-2">
        <SearchInput setSearch={setSearch} />
        <FilterButton setSort={setFilter} sort={filter} />
      </div>
    </div>
  )
}
