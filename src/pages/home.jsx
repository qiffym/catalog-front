import { Card } from '../components/card'
import Container from '../components/container'
import Paging from '../components/paging'
import { useProduct } from '../context/product-context'

export default function Home() {
  const { products, paging, fetchProduct, search, filter, page, setPage } = useProduct()
  const handleNextPage = () => {
    setPage(page + 1)
    fetchProduct({ page: page + 1, size: 9, search, sort: filter })
  }

  const handlePrevPage = () => {
    setPage(page - 1)
    fetchProduct({ page: page - 1, size: 9, search, sort: filter })
  }
  return (
    <Container className="min-h-screen">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
      {products.length === 0 && <p className="text-center text-base font-extralight">No products found</p>}
      {paging.totalPage > 1 && (
        <section className="mt-8 flex justify-center">
          <Paging
            page={page}
            totalPage={paging.totalPage}
            handleNextPage={handleNextPage}
            handlePrevPage={handlePrevPage}
          />
        </section>
      )}
    </Container>
  )
}
