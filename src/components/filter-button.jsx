export function FilterButton() {
  return (
    <div className="dropdown dropdown-end">
      <div className="tooltip" data-tip="Filter">
        <div className="indicator">
          <span className="badge indicator-item badge-primary right-2 top-1">2</span>
          <div tabIndex={0} role="button" className="btn btn-outline input input-bordered m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="justd-icons size-5"
              data-slot="icon"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.25 3.75H4.75a1 1 0 0 0-1 1v2.836a1 1 0 0 0 .293.707l5.414 5.414a1 1 0 0 1 .293.707v6.836l4.5-1.25v-5.586a1 1 0 0 1 .293-.707l5.414-5.414a1 1 0 0 0 .293-.707V4.75a1 1 0 0 0-1-1Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        <li>
          <a>Terbaru</a>
        </li>
        <li>
          <a>Terlaris</a>
        </li>
        <li>
          <a>A - Z</a>
        </li>
        <li>
          <a>Z -A</a>
        </li>
      </ul>
    </div>
  )
}
