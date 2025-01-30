const Paging = ({ page, totalPage, handleNextPage, handlePrevPage }) => {
  return (
    <div className="join">
      <button className="btn join-item" onClick={handlePrevPage} disabled={page === 1}>
        «
      </button>
      <button className="btn join-item">Page {page}</button>
      <button className="btn join-item" onClick={handleNextPage} disabled={page >= totalPage}>
        »
      </button>
    </div>
  )
}

export default Paging
