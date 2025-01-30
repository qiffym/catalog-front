import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import Container from '../components/container'

export default function Details() {
  const location = useLocation()
  const navigate = useNavigate()
  const { data: product } = useLoaderData()
  console.log('🚀 ~ Details ~ product:', product)

  return (
    <Container className="max-w-7xl">
      <div className="tooltip mb-3" data-tip="Kembali">
        <button onClick={() => navigate('..')} className="btn btn-square btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            className="justd-icons size-5"
            data-slot="icon"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 5.75 3.75 12 10 18.25M4.5 12h15.75"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex justify-center space-x-6">
        <div id="carousel" className="w-[40%]">
          <div className="carousel w-full rounded-2xl">
            {product.imagesUrl.map((image, index) => (
              <div key={image.id} id={`img${index + 1}`} className="carousel-item w-full">
                <img src={image.imageUrl} className="h-[28rem] w-full object-contain object-top" />
              </div>
            ))}
          </div>
          <div className="flex w-full justify-center gap-2 py-2">
            {Array.from({ length: product.imagesUrl.length }).map((_, index) => (
              <a
                key={index}
                href={`#img${index + 1}`}
                className={`btn btn-sm ${location.hash === `#img${index + 1}` ? 'border-2 border-primary' : ''}`}
              >
                {index + 1}
              </a>
            ))}
          </div>
        </div>
        <div id="info" className="w-[50%]">
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <div className="item-center mb-2 flex gap-2 text-sm font-medium">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 24 24"
                className="justd-icons mr-1 inline-block size-4 align-middle"
                data-slot="icon"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M2.75 11.579V3.75a1 1 0 0 1 1-1h7.829a1 1 0 0 1 .707.293l8.757 8.757a1 1 0 0 1 0 1.414l-7.83 7.829a1 1 0 0 1-1.413 0l-8.757-8.757a1 1 0 0 1-.293-.707Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8.25 7.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <span>Terjual</span>
              <span className="ml-1 opacity-75">
                {product.purchasedCount >= 1000
                  ? `${Math.floor(product.purchasedCount / 1000)}rb+`
                  : product.purchasedCount}
              </span>
            </p>
            <div className="flex items-center">
              <div className="mx-1 h-1 w-1 rounded-full bg-gray-700"></div>
            </div>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                className="justd-icons mr-1 inline-block size-4 align-middle"
                data-slot="icon"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M2.231 11.552 1.57 11.2zm19.538 0 .662-.353zm-19.538.896-.661.353zm19.538 0 .662.353zm-18.876-.543C5.213 7.558 8.663 5.5 12 5.5c3.338 0 6.787 2.058 9.107 6.405l1.323-.706C19.91 6.477 16.01 4 12 4S4.09 6.477 1.57 11.2zm-1.323.896C4.09 17.523 7.99 20 12 20s7.91-2.477 10.43-7.2l-1.323-.706C18.787 16.442 15.337 18.5 12 18.5c-3.338 0-6.787-2.058-9.107-6.406zm0-1.602a1.71 1.71 0 0 0 0 1.602l1.323-.707a.21.21 0 0 1 0-.189zm19.537.707c.03.056.03.132 0 .188l1.323.707a1.71 1.71 0 0 0 0-1.602zM14.5 12a2.5 2.5 0 0 1-2.5 2.5V16a4 4 0 0 0 4-4zM12 14.5A2.5 2.5 0 0 1 9.5 12H8a4 4 0 0 0 4 4zM9.5 12A2.5 2.5 0 0 1 12 9.5V8a4 4 0 0 0-4 4zM12 9.5a2.5 2.5 0 0 1 2.5 2.5H16a4 4 0 0 0-4-4zM9.5 12A2.5 2.5 0 0 1 12 9.5V8a4 4 0 0 0-4 4zM12 9.5a2.5 2.5 0 0 1 2.5 2.5H16a4 4 0 0 0-4-4z"
                ></path>
              </svg>
              <span>Dilihat</span>
              <span className="ml-1 opacity-75">
                {product.viewCount >= 1000 ? `${Math.floor(product.viewCount / 1000)}rb+` : product.viewCount}
              </span>
            </p>
            <div className="flex items-center">
              <div className="mx-1 h-1 w-1 rounded-full bg-gray-700"></div>
            </div>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                className="justd-icons mr-1 inline-block size-4 align-middle"
                data-slot="icon"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m2.462 9.956 1.302 7.386a1 1 0 0 0 1.159.812l5.193-.916M2.462 9.956 1.94 7.002a1 1 0 0 1 .811-1.159l11.325-1.997a1 1 0 0 1 1.159.812l.52 2.954L2.463 9.956ZM16 11.75V14l2 2m4.25-2a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0"
                ></path>
              </svg>
              <span>Diperbarui</span>
              <span className="ml-1 opacity-75">
                {new Date(product.updatedAt).toLocaleDateString('id-ID', { dateStyle: 'medium' })}
              </span>
            </p>
          </div>
          <div className="divider w-3/4" />
          <p>
            <span className="mr-1 font-medium opacity-80">Kategori:</span>
            <span className="capitalize">{product.category}</span>
          </p>
          <p>
            <span className="mr-1 font-medium opacity-80">Link :</span>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="link link-primary">
              {product.link}
            </a>
          </p>
          <p className="pt-3 text-justify leading-relaxed tracking-wide">
            {product.description}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae similique illum mollitia
            exercitationem repellendus, error voluptatum quasi quo perspiciatis deleniti explicabo aspernatur, enim
            voluptates iure itaque, ipsa quam iste dolore. Debitis dicta explicabo tempora fugit qui minus dolorum
            labore possimus eligendi cupiditate facilis illo aperiam sequi perspiciatis quibusdam amet veritatis
            molestiae voluptatem maxime aspernatur quod nostrum, ad repudiandae placeat. Temporibus, velit omnis harum
            eligendi voluptas odio at fugit quam soluta repudiandae quos aut recusandae ea, fugiat perferendis ipsum, a
            distinctio labore earum accusamus! Voluptatem architecto amet possimus ipsum nulla distinctio tempora nihil
            ex, temporibus recusandae veritatis dolor, aliquid voluptate.
          </p>
        </div>
      </div>
    </Container>
  )
}
