const Paging = ({ page, totalPage, handleNextPage, handlePrevPage }) => {
  return (
    <div className="join">
      <button className="btn join-item" onClick={handlePrevPage} disabled={page === 1}>
        «
      </button>
      {page > 1 && <button className="btn join-item">...</button>}
      <button className="btn join-item">Page {page}</button>
      {page < totalPage && <button className="btn join-item">...</button>}
      <button className="btn join-item" onClick={handleNextPage} disabled={page >= totalPage}>
        »
      </button>
    </div>
  )
}

export default Paging
