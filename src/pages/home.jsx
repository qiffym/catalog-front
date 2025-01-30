import { Card } from '../components/card'
import Container from '../components/container'
import { useProduct } from '../context/product-context'

export default function Home() {
  const { products } = useProduct()

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
