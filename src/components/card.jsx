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
          <button className="btn btn-square btn-outline btn-success btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 25"
              className="justd-icons size-5"
              data-slot="icon"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M9.127 8.206c.172.006.362.015.543.417.123.274.33.785.496 1.193.123.302.223.548.248.6.06.12.1.262.02.423l-.034.07c-.06.123-.104.213-.207.332l-.125.15c-.083.101-.165.202-.237.273-.121.12-.247.252-.106.493.14.242.625 1.032 1.343 1.672.773.69 1.444.98 1.784 1.128q.1.042.159.071c.241.12.382.1.523-.06.14-.162.603-.706.764-.947.162-.242.322-.202.544-.121.221.08 1.408.665 1.65.785l.133.066c.168.08.282.135.33.216.06.101.06.585-.14 1.149-.202.564-1.188 1.108-1.63 1.148l-.13.014c-.409.048-.925.109-2.769-.619-2.27-.895-3.767-3.115-4.075-3.57q-.037-.057-.05-.075l-.003-.004c-.131-.175-.984-1.315-.984-2.494 0-1.111.547-1.694.798-1.963l.048-.051a.89.89 0 0 1 .644-.302z"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m2.339 22.5 1.371-5.007a9.65 9.65 0 0 1-1.29-4.83C2.422 7.333 6.758 3 12.086 3a9.6 9.6 0 0 1 6.837 2.834 9.6 9.6 0 0 1 2.829 6.836c-.003 5.327-4.339 9.663-9.666 9.663h-.004a9.66 9.66 0 0 1-4.62-1.177zm9.75-17.868c-4.432 0-8.036 3.603-8.037 8.03a8 8 0 0 0 1.228 4.275l.191.304-.811 2.963 3.04-.797.294.174a8 8 0 0 0 4.089 1.12h.003c4.428 0 8.032-3.603 8.033-8.032a7.98 7.98 0 0 0-2.35-5.682 7.98 7.98 0 0 0-5.68-2.355"
                clipRule="evenodd"
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
