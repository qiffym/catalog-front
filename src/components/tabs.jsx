import { useEffect } from 'react'
import { useCategory } from '../context/category-context'

export function Tabs({ activeTab, setActiveTab, setCategory }) {
  const { categories, fetchCategory } = useCategory()

  useEffect(() => {
    fetchCategory()
  }, [])
  return (
    <div role="tablist" className="tabs-boxed tabs">
      <a
        role="tab"
        className={`tab ${activeTab === 0 ? 'tab-active' : ''}`}
        onClick={() => {
          setActiveTab(0)
          setCategory(undefined)
        }}
      >
        Semua
      </a>
      {categories.map((category, i) => (
        <a
          role="tab"
          className={`tab ${activeTab === i + 1 ? 'tab-active' : ''}`}
          onClick={() => {
            setActiveTab(i + 1)
            setCategory(category.category)
          }}
          key={i}
        >
          {category.category}
        </a>
      ))}
    </div>
  )
}
