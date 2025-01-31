const DeleteConfirm = ({ handleDeleteClick, id, title }) => {
  const handleConfirm = () => {
    handleDeleteClick(id)
    document.getElementById('delete_confirm').close()
  }

  const handelCancel = () => {
    document.getElementById('delete_confirm').close()
  }
  return (
    <dialog id="delete_confirm" className="modal modal-bottom sm:modal-middle">
      <div className="relative flex w-[250px] flex-col items-center justify-center rounded-2xl border bg-white p-4 shadow-lg">
        <div className="">
          <div className="flex-auto justify-center p-3 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto flex h-12 w-12 items-center text-gray-600"
              viewBox="0 0 20 20"
              fill="#E4003A"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="py-4 text-xl font-bold text-gray-800">Are you sure?</h2>
            <p className="px-2 text-sm text-gray-500">
              Do you really want to delete this {title}? This process cannot be undone
            </p>
          </div>
          <div className="mt-2 space-x-1 p-2 text-center md:block">
            <button
              className="mb-2 rounded-full border-2 border-zinc-100 bg-zinc-200 px-5 py-2 text-sm font-medium tracking-wider text-zinc-900 shadow-sm transition duration-300 ease-in hover:border-zinc-300 hover:bg-zinc-300 hover:shadow-lg md:mb-0"
              onClick={handelCancel}
            >
              Cancel
            </button>
            <button
              className="hover:border-3 border-primaryDanger bg-primaryDanger ml-4 rounded-full border-2 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm transition duration-300 ease-in hover:shadow-2xl"
              onClick={handleConfirm}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default DeleteConfirm
