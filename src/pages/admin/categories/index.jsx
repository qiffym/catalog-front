import { useLoaderData } from 'react-router-dom'
import { Header } from '../../../layouts/partials/header'
import { SearchInput } from '../../../components/search-input'
import { SortButton } from '../../../components/sort-button'
import { FormCategoryModal } from '../../../components/modals/form-category-modal'
import { useEffect, useState } from 'react'
import { deleteCategory, getCategories } from '../../../api/category-loaders'
import { toast } from 'react-toastify'

export default function Categories() {
  const { data: initialCategories } = useLoaderData()
  const [categories, setCategories] = useState(initialCategories)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories()
      setCategories(response.data)
    }

    fetchCategories()
  }, [selectedCategory])

  const handleAddClick = () => {
    setSelectedCategory(null)
    document.getElementById('form_category_modal').showModal()
  }

  const handleEditClick = (category) => {
    setSelectedCategory(category)
    document.getElementById('form_category_modal').showModal()
  }

  const handleDeleteClick = async (id) => {
    const isConfirm = window.confirm('Are you sure you want to delete this category?')
    if (!isConfirm) return

    try {
      await deleteCategory(id)
      setCategories(categories.filter((category) => category.id !== id))
      toast.success('Category deleted successfully')
    } catch (error) {
      toast.error('Failed to delete category')
      console.error(error)
    }
  }

  return (
    <div className="mx-auto w-full space-y-6 px-4">
      <div className="flex items-center justify-between">
        <Header
          title={'Categories'}
          description={'This is a page for managing your categories. You can add, edit, or delete categories here.'}
        />
        <button className="btn btn-primary rounded-2xl" onClick={handleAddClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="none"
            viewBox="0 0 24 24"
            className="justd-icons size-4"
            data-slot="icon"
            aria-hidden={true}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14m-7-7h14"
            />
          </svg>
          Tambah
        </button>
      </div>

      <div className="flex h-fit w-full flex-col space-y-3 rounded-2xl border bg-base-100 py-2">
        <div className="flex w-full items-center gap-2 px-4 py-2">
          <SearchInput />
          <SortButton />
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Dibuat pada</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id} className="hover">
                  <th>{index + 1}</th>
                  <td>{category.category}</td>
                  <td>
                    {new Date(category.createdAt).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' })}
                  </td>
                  <td className="flex items-center gap-2">
                    <div className="tooltip" data-tip="Edit">
                      <button
                        className="btn btn-square btn-warning btn-sm"
                        onClick={() => {
                          handleEditClick(category)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="justd-icons size-4"
                          data-slot="icon"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="m12.75 8.25-.53-.53a.75.75 0 0 0-.22.53zm0 3H12c0 .414.336.75.75.75zm3 0V12a.75.75 0 0 0 .53-.22zm2.293-8.293.53.53zm1.414 0-.53.53zm1.586 1.586-.53.53zm0 1.414.53.53zM11.25 4.5a.75.75 0 0 0 0-1.5zM21 12.75a.75.75 0 0 0-1.5 0zM4.296 20.14l.34-.667zm-.437-.436-.668.34zm15.845.437-.34-.668zm.437-.437-.668-.34zM3.859 4.296l-.668-.34zm.437-.437-.34-.668zM12 8.249v3h1.5v-3zm.75 3.75h3v-1.5h-3zm.53-3.219 5.293-5.293-1.06-1.06L12.22 7.72zm5.647-5.293 1.586 1.586 1.06-1.06-1.586-1.586zm1.586 1.94L15.22 10.72l1.06 1.06 5.293-5.293zm0-.354a.25.25 0 0 1 0 .354l1.06 1.06a1.75 1.75 0 0 0 0-2.475zm-1.94-1.586a.25.25 0 0 1 .354 0l1.06-1.06a1.75 1.75 0 0 0-2.474 0zM18.65 19.5H5.35V21h13.3zM4.5 18.65V5.35H3v13.3zM5.35 4.5h5.9V3h-5.9zm14.15 8.25v5.9H21v-5.9zM5.35 19.5c-.292 0-.467 0-.596-.011-.12-.01-.134-.025-.117-.016l-.681 1.336c.23.117.463.157.676.175.205.016.45.016.718.016zM3 18.65c0 .268 0 .513.016.718.018.213.057.446.175.676l1.336-.68c.009.016-.006.002-.016-.118a8 8 0 0 1-.011-.596zm1.636.823a.25.25 0 0 1-.109-.11l-1.336.681c.168.33.435.597.765.765zM18.65 21c.268 0 .514 0 .718-.016.213-.018.446-.058.677-.175l-.682-1.336c.017-.009.003.006-.117.016-.13.01-.304.01-.596.01zm.85-2.35c0 .292 0 .466-.011.596-.01.12-.025.134-.016.117l1.336.681a1.8 1.8 0 0 0 .175-.676c.017-.205.016-.45.016-.718zm.544 2.16a1.75 1.75 0 0 0 .765-.766l-1.336-.68a.25.25 0 0 1-.11.109l.681 1.336ZM4.5 5.35c0-.293 0-.467.011-.596.01-.12.025-.134.016-.118l-1.336-.68a1.8 1.8 0 0 0-.175.676C3 4.836 3 5.082 3 5.35zM5.35 3c-.268 0-.513 0-.718.016a1.8 1.8 0 0 0-.676.175l.68 1.336c-.016.008-.002-.006.118-.016.13-.01.304-.011.596-.011zm-.823 1.636a.25.25 0 0 1 .11-.109l-.681-1.336a1.75 1.75 0 0 0-.765.764z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div className="tooltip" data-tip="Delete">
                      <button
                        className="btn btn-square btn-error btn-sm"
                        onClick={() => handleDeleteClick(category.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="justd-icons size-4"
                          data-slot="icon"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="m5.69 20.314-.749.049zm12.62 0 .749.049zM2.75 5a.75.75 0 0 0 0 1.5zm18.5 1.5a.75.75 0 0 0 0-1.5zM10.5 10.75a.75.75 0 0 0-1.5 0zM9 16.25a.75.75 0 0 0 1.5 0zm6-5.5a.75.75 0 0 0-1.5 0zm-1.5 5.5a.75.75 0 0 0 1.5 0zm1.648-10.313a.75.75 0 1 0 1.452-.374zM4.002 5.798l.94 14.565 1.496-.097-.94-14.564zM6.688 22h10.624v-1.5H6.688zm12.37-1.637.94-14.565-1.496-.096-.94 14.564 1.497.097ZM19.25 5H4.75v1.5h14.5zM2.75 6.5h2V5h-2zm16.5 0h2V5h-2zM17.312 22a1.75 1.75 0 0 0 1.747-1.637l-1.497-.097a.25.25 0 0 1-.25.234zm-12.37-1.637A1.75 1.75 0 0 0 6.687 22v-1.5a.25.25 0 0 1-.25-.234l-1.497.097ZM9 10.75v5.5h1.5v-5.5zm4.5 0v5.5H15v-5.5zM12 3.5a3.25 3.25 0 0 1 3.148 2.437l1.452-.374A4.75 4.75 0 0 0 12 2zM8.852 5.937A3.25 3.25 0 0 1 12 3.5V2a4.75 4.75 0 0 0-4.6 3.563z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <FormCategoryModal category={selectedCategory} setCategory={setSelectedCategory} />
    </div>
  )
}
