import { useLoaderData } from 'react-router-dom'

export default function Categories() {
  const { data: categories } = useLoaderData()
  console.log('🚀 ~ Categories ~ categories:', categories)
  return <div>Categories</div>
}
