import { useEffect } from 'react'
import { Card } from '../components/card'
import Container from '../components/container'
import { useProduct } from '../context/product-context'

export default function Home() {
  const { products, fetchProduct } = useProduct()

  useEffect(() => {
    fetchProduct({ size: 9 })
  }, [])
  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <Container className="min-h-screen">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </Container>
  )
}
