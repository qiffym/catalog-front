import { useMemo, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { Header } from '../../../layouts/partials/header'
import { useDropzone } from 'react-dropzone'
import { createProduct, updateProduct } from '../../../api/product-loaders'
import { toast } from 'react-toastify'
import deleteImage from '../../../api/image-api'

export default function ProductForm() {
  const { product, categories } = useLoaderData() || {}

  const [formData, setFormData] = useState({
    title: product?.title || '',
    category: product?.category || '',
    description: product?.description || '',
    purchasedCount: product?.purchasedCount || '',
    link: product?.link || '',
    price: product?.price || '',
    images: product?.imagesUrl ? product.imagesUrl.map((data) => ({ id: data.id, preview: data.imageUrl })) : [],
  })
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const successToast = (message) => toast.success(message)
  const errorToast = (message) => toast.error(message)

  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { title, description, category, price, link, purchasedCount, images } = formData

    if (!title || !description || !category || !price || !link || !purchasedCount || !images.length) {
      errorToast('Please fill in all required fields.')
      setLoading(false)
      return
    }

    const datas = new FormData()
    datas.append('title', title)
    datas.append('description', description)
    datas.append('category', category)
    datas.append('price', price)
    datas.append('link', link)
    datas.append('purchasedCount', purchasedCount)
    images.forEach((file) => datas.append('images', file))

    try {
      const response = await (product
        ? updateProduct({ request: datas, id: product.id })
        : createProduct({ request: datas }))
      successToast(response.message)
      navigate('/admin/products', { replace: true })
    } catch (error) {
      errorToast(
        `Error adding product${error?.data?.error && error?.data?.message != 'Internal Server Error' ? ': ' + error?.data?.error : ''}`
      )
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto w-full space-y-6 px-4">
      <Header
        title={product ? 'Edit Product' : 'Add Product'}
        description="This is a product form for adding or editing a product."
      />
      <div className="flex h-fit w-full flex-col space-y-3 rounded-2xl border bg-base-100 py-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4 px-4 py-2">
            <div className="space-y-3">
              {/* Title */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Judul</span>
                </div>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder="Masukkan judul"
                />
              </label>

              {/* Category */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Kategori</span>
                </div>
                <select
                  className="select select-bordered"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option disabled value="">
                    - Pilih Kategori -
                  </option>
                  {categories.map((category) => (
                    <option key={category.id}>{category.category}</option>
                  ))}
                </select>
              </label>

              {/* Description */}
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Deskripsi</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-28"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Masukkan deskripsi"
                ></textarea>
              </label>

              {/* Price */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Harga</span>
                </div>
                <input
                  type="number"
                  min={0}
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Masukkan harga"
                  className="input input-bordered w-full"
                />
              </label>

              {/* Link */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Link</span>
                </div>
                <input
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="Masukkan link"
                  className="input input-bordered w-full"
                />
              </label>

              {/* PurchasedCount */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Jumlah Terjual</span>
                </div>
                <input
                  type="number"
                  min={0}
                  name="purchasedCount"
                  value={formData.purchasedCount}
                  onChange={handleChange}
                  placeholder="Masukkan jumlah terjual"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div>
              <ImageDropzone images={formData.images} setImages={(images) => setFormData({ ...formData, images })} />
            </div>
          </div>
          <div className="flex items-center px-4 py-2">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <span className="loading loading-spinner"></span> : product ? 'Update Product' : 'Add Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function ImageDropzone({ images, setImages }) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({
    accept: { 'image/*': ['.png', '.jpg', '.jpeg', '.webp'] },
    multiple: true,
    onDrop: (acceptedFiles) => {
      const previewFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
      setImages([...images, ...previewFiles])
    },
  })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  )

  const handleRemoveImage = async (index) => {
    try {
      console.log('images', images)
      if (images[index].id) await deleteImage(images[index].id)
      const updatedImages = images.filter((_, i) => i !== index)
      setImages(updatedImages)
    } catch (error) {
      toast.error(`Failed to delete image${error.data.message ? ': ' + error.data.message : ''}`)
    }
  }

  return (
    <section>
      <div className="label">
        <span className="label-text">Tambahkan Gambar</span>
      </div>
      <div {...getRootProps({ style })} className="mb-4 border-base-300 bg-base-100 hover:bg-base-300">
        <input {...getInputProps()} />
        <p>Drag n drop some images here, or click to select images</p>
      </div>
      <aside className="columns-1 gap-4 md:columns-1 lg:columns-2">
        {images.map((image, index) => (
          <div key={index} className="break-inside mb-4">
            <div className="indicator h-auto w-full">
              <button
                type="button"
                className="btn btn-circle btn-error indicator-item no-animation btn-sm right-3 top-2"
                onClick={() => handleRemoveImage(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={image.preview} alt={'image'} className="h-auto w-full rounded-lg" />
            </div>
          </div>
        ))}
      </aside>
    </section>
  )
}

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderStyle: 'dashed',
  outline: 'none',
  transition: 'border .24s ease-in-out',
}

const focusedStyle = {
  borderColor: '#2196f3',
}

const acceptStyle = {
  borderColor: '#00e676',
}

const rejectStyle = {
  borderColor: '#ff1744',
}
