import { Card } from '../components/card'
import Container from '../components/container'
import { HeroSection } from '../components/hero-section'
import Paging from '../components/paging'
import { useProduct } from '../context/product-context'
import { Navbar } from '../layouts/partials/navbar'

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
    <>
      <HeroSection />
      <Container className="min-h-screen max-w-7xl">
        <section id="products">
          <Navbar />
          <div className="grid grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Card key={i} product={product} />
            ))}
          </div>
        </section>
        {products.length === 0 && <p className="text-center text-base font-extralight">No products found</p>}
        {paging.totalPage > 1 && (
          <div className="mt-8 flex justify-center">
            <Paging
              page={page}
              totalPage={paging.totalPage}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
            />
          </div>
        )}
      </Container>
    </>
  )
}
