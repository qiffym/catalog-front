import { useEffect, useState } from 'react'
import { createCategory, updateCategory } from '../../api/category-loaders'
import { toast } from 'react-toastify'

export function FormCategoryModal({ category, categories, setCategory, setCategories }) {
  const [formData, setFormData] = useState({ id: '', name: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setFormData({
      id: category?.id || '',
      name: category?.category || '',
    })
  }, [category])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = {
      name: formData.name,
    }

    try {
      const response = category ? await updateCategory({ data, id: category.id }) : await createCategory(data)
      toast.success(response.message)

      if (category) {
        setCategories(categories.map((cat) => (cat.id === category.id ? response.data : cat)))
      } else {
        setCategories([response.data, ...categories])
      }

      setCategory(response.data)
      document.getElementById('form_category_modal').close()
    } catch (error) {
      toast.error(
        `Error${error?.data?.message && error?.data?.message != 'Internal Server Error' ? ': ' + error?.data?.message : '!'}`
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <dialog id="form_category_modal" className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">{category ? 'Edit Kategori' : 'Tambah Kategori'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <label className="label" htmlFor="name">
              Nama Kategori:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="modal-action">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : category ? 'Update' : 'Tambah'}
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => document.getElementById('form_category_modal').close()}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}
