export function Tabs({ activeTab, setActiveTab, setCategory }) {
  return (
    <div role="tablist" className="tabs-boxed tabs">
      <a role="tab" className={`tab ${activeTab === 0 ? 'tab-active' : ''}`} onClick={() => setActiveTab(0)}>
        Semua
      </a>
      <a role="tab" className={`tab ${activeTab === 1 ? 'tab-active' : ''}`} onClick={() => setActiveTab(1)}>
        Produk Ekspor
      </a>
      <a role="tab" className={`tab ${activeTab === 2 ? 'tab-active' : ''}`} onClick={() => setActiveTab(2)}>
        Agrikultur
      </a>
      <a role="tab" className={`tab ${activeTab === 3 ? 'tab-active' : ''}`} onClick={() => setActiveTab(3)}>
        Craft
      </a>
      <a role="tab" className={`tab ${activeTab === 4 ? 'tab-active' : ''}`} onClick={() => setActiveTab(4)}>
        Company
      </a>
      <a role="tab" className={`tab ${activeTab === 5 ? 'tab-active' : ''}`} onClick={() => setActiveTab(5)}>
        Otomotif
      </a>
    </div>
  )
}
