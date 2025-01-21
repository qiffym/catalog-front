import { FilterButton } from '../../components/filter-button'
import { SearchInput } from '../../components/search-input'
import { Tabs } from '../../components/tabs'

export function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Tabs />
      </div>
      <div className="flex-none gap-2">
        <SearchInput />
        <FilterButton />
      </div>
    </div>
  )
}
