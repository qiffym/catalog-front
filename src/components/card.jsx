export function Card() {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
          className="h-48 w-full object-cover object-center"
        />
      </figure>
      <div className="flex items-start justify-between p-3">
        <div className="flex-1">
          <h2 className="card-title text-base font-bold">The Best & Freshest Bread in Indonesia</h2>
          <p className="text-sm text-gray-500">👍 18 orang memberi like </p>
        </div>
        <div className="flex items-center justify-end gap-1">
          <button className="btn btn-square btn-outline btn-warning btn-sm">
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 6 9 17l-5-5"
              ></path>
            </svg>
          </button>
          <button className="btn btn-square btn-outline btn-info btn-sm">
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
                fill="currentColor"
                d="M2.231 11.552 1.57 11.2zm19.538 0 .662-.353zm-19.538.896-.661.353zm19.538 0 .662.353zm-18.876-.543C5.213 7.558 8.663 5.5 12 5.5c3.338 0 6.787 2.058 9.107 6.405l1.323-.706C19.91 6.477 16.01 4 12 4S4.09 6.477 1.57 11.2zm-1.323.896C4.09 17.523 7.99 20 12 20s7.91-2.477 10.43-7.2l-1.323-.706C18.787 16.442 15.337 18.5 12 18.5c-3.338 0-6.787-2.058-9.107-6.406zm0-1.602a1.71 1.71 0 0 0 0 1.602l1.323-.707a.21.21 0 0 1 0-.189zm19.537.707c.03.056.03.132 0 .188l1.323.707a1.71 1.71 0 0 0 0-1.602zM14.5 12a2.5 2.5 0 0 1-2.5 2.5V16a4 4 0 0 0 4-4zM12 14.5A2.5 2.5 0 0 1 9.5 12H8a4 4 0 0 0 4 4zM9.5 12A2.5 2.5 0 0 1 12 9.5V8a4 4 0 0 0-4 4zM12 9.5a2.5 2.5 0 0 1 2.5 2.5H16a4 4 0 0 0-4-4z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
