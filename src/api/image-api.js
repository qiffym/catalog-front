import axiosInstance from './axios'

const deleteImage = async (id) => {
  await axiosInstance.delete(`/images/${id}`)
}

export default deleteImage
