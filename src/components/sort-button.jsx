export function SortButton() {
  return (
    <div className="dropdown dropdown-end">
      <div className="tooltip" data-tip="Filter">
        <div tabIndex={0} role="button" className="btn btn-outline input input-bordered m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="justd-icons size-5"
            data-slot="icon"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M3.75 5.75h14.5M3.75 12h7.5m-7.5 6.25h5.5m8.75-7.5v7.75m-3.25-2.75L18 19l3.25-3.25"
            ></path>
          </svg>
        </div>
      </div>
      <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        <li onClick={() => {}}>
          <a>Terbaru</a>
        </li>
        <li onClick={() => {}}>
          <a>Terlaris</a>
        </li>
        <li onClick={() => {}}>
          <a>A - Z</a>
        </li>
        <li onClick={() => {}}>
          <a>Z -A</a>
        </li>
      </ul>
    </div>
  )
}
