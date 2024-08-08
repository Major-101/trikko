import React from 'react'
import { bag_brickred, bag_brown, bag_cream, bag_featuredCollection, bag_glasses, bag_glasses2, bag_mainbg, bag_model2, bag_moel, bag_shoes, bag_shoulder, bag_springCollection } from '../assets/images'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HeroSlider from '../components/HeroSlider'
import { FaPlus } from 'react-icons/fa6'
import { productData } from '../data/productData'
import { reviewData } from '../data/reviewData'
import { IoStar, IoStarOutline, IoThumbsUp } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/reducers/cartSlice'

export default function Home() {
  const dispatch = useDispatch()
  const handleClick = (product) => {
    dispatch(addToCart(product))
  }
  
  return (
    <main>
      <section className='bg-white pb-10 px-4 relative'>
        <img src={bag_mainbg} alt="" className='absolute top-0 left-0 w-full h-full object-cover object-top' />
        <div className="container mx-auto relative grid grid-cols-2 lg:grid-cols-3">
          <h2 className="col-span-2 py-20 max-w-md flex flex-col justify-center text-secondary text-5xl mg:text-4xl lg:text-7xl font-bold leading-tight"><span className="text-primary">Trikko</span> Collection Series {new Date().getFullYear()} </h2>
          <aside className="lg:row-span-2 flex flex-col justify-center gap-4 bg-white py-20">
            <div className="relative h-40 lg:h-60"><img src={bag_brown} alt="" className='absolute top-0 left-0 w-full h-full object-cover object-bottom' /></div>
            <div className="flex flex-col gap-2 text-secondary p-4">
              <h4><div className="text-lg lg:text-2xl font-bold">Large Adriamo</div></h4>
              <p className="text-sm lg:text-base opacity-60"> A large bag with a unique design that can be used as a shoulder bag or a handbag.  Its key features are magnetic closure, 100% lamb skin with braided strap</p>
              <Link to={"/product"} className='border-b border-primary pb-1 pt-4 text-primary text-base md:text-lg font-semibold flex gap-2 items-center w-max group'>Show all collection <FaArrowRight className='-rotate-45 group-hover:rotate-0' /> </Link>
            </div>
          </aside>
          <aside className="relative lg:h-[300px] bg-white">
            <HeroSlider />
          </aside>
        </div>
      </section>
      <section className="relative pr-8 pl-8 py-10 px-4">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-6xl lg:text4xl text-secondary lg:max-w-xl relative pb-10 after:h-1 font-semibold after:bg-primary  after:bottom-0 after:left-0 after:absolute after:w-[58%]">Our <span className="text-primary">New Collections</span> By Category</h4>
            <p className="text-2md text-justify text-secondary relative pb-4 pt-6 lg:max-w-xl">Introduced in Mathieu Blazy's Summer 23 collection. Andiamo is a new expression of the signature intrecciato technique realised by the expert craftsmanship of artisans in Italian ateliers. Its name, Andiamo, "Lets's go" in Italian, embodies the spirit of the bag, a tribute to going places and the craft in motion.</p>
          </div>
        </div>
        <aside className=" py-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify justify-between ">
          <div className="text-4xl pt-4 font-bold text-gray-300 gap-10">
            <p className='pb-3'>Shoes</p>
            <p className='pb-3'>Bag</p>
            <p className='pb-3'>Jewellry</p>
            <p className='pb-3'>Accessories</p>
            <p className='pb-3'>Sunglasses</p>
          </div>
          <div className='pl-40 flex flex-col lg:flex-row gap-16 '>
            <div className='lg:max-w-xl'>
              <div className="relative h-14  lg:h-60"><img src={bag_springCollection} alt="" className='absolute top-0 left-0 w-full h-full  object-cover' /></div>
              <Link to={"/product"} className='border-b border-primary pb-0.5 pt-4 text-primary text-base md:text-lg font-semibold flex gap-2 items-center group'>Spring Collections {new Date().getFullYear()} <FaArrowRight className='-rotate-45 group-hover:rotate-0' /> </Link>
            </div>
            <div>
              <Link to={"/product"} className='border-b border-primary pb-0.5 pt-2 text-primary text-base md:text-lg font-semibold flex gap-2 items-center group'>Feautured Collection {new Date().getFullYear()} <FaArrowRight className='-rotate-45 group-hover:rotate-0' /> </Link>
              <div className="relative py-28 h-14 w-80 lg:h-80"><img src={bag_featuredCollection} alt="" className='absolute pt-4 top-0 left-0 w-full h-full object-cover object-center' /></div>
            </div>
          </div>
        </aside>
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-6xl lg:text4xl text-secondary lg:max-w-xl relative pb-10 after:h-1 font-semibold after:bg-primary  after:bottom-0 after:left-0 after:absolute after:w-[58%]">Our <span className="text-primary">Best Seller </span>Collections</h4>
            <p className="text-2md text-justify text-secondary relative pb-4 pt-6 lg:max-w-xl">Introduced in Mathieu Blazy's Summer 23 collection. Andiamo is a new expression of the signature intrecciato technique realised by the expert craftsmanship of artisans in Italian ateliers. Its name, Andiamo, "Lets's go" in Italian, embodies the spirit of the bag, a tribute to going places and the craft in motion.</p>
          </div>
        </div>
        <div>
          <div className="py-10 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {
              productData.slice(0,6).map((product) => (
              <aside key={product.id} className="flex flex-col gap-4 bg-white group">
                <Link to={`/product/${product.id}`} className="relative overflow-hidden h-36 lg:h-80">
                  <img src={product.image} alt={product.productname} className="abssolute left-0 top-0 object-cover w-full h-full group-hover:scale-110" />
                </Link>
                <div className="flex gap-2 pb-4 pt-0 items-center">
                  <div className="flex flex-col gap-1 flex-1">
                    <h4 className="text-lg lg:text-2xl text-dark font-bold">{product.productname}</h4>
                    <p className="text-base lg:text-lg text-primary font-bold">&#8358;{product.price.toLocaleString()}</p>
                  </div>
                  <button onClick={() => handleClick(product)} className="cursor-pointer h-8 w-8 rounded-full  bg-primary text-white grid place-items-center text-base lg:text-lg font-bold"><FaPlus/></button>
                </div>
              </aside>                
              ))
            }
          </div>
        </div>
      </section>
      <section className='py-4 px-4'>
      <div className=" flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-6xl lg:text4xl text-secondary lg:max-w-xl relative pb-10 after:h-1 font-semibold after:bg-primary  after:bottom-0 after:left-0 after:absolute after:w-[58%]">Our <span className="text-primary">Feautured </span>Collection</h4>
            <p className="text-2md text-justify text-secondary relative pb-4 pt-6 lg:max-w-xl">Introduced in Mathieu Blazy's Summer 23 collection. Andiamo is a new expression of the signature intrecciato technique realised by the expert craftsmanship of artisans in Italian ateliers. Its name, Andiamo, "Lets's go" in Italian, embodies the spirit of the bag, a tribute to going places and the craft in motion.</p>
        </div>
      </section>

      <section className='relative py-4 px-4'>
      <div className='container py-8  gap-4 grid grid-rows-1 lg:grid-cols-2 group'>
            <div className=' relative pb-4 h-80 lg:max-h-80'>
              <img src={bag_model2} className='w-full h-full object-cover object-right-bottom' />
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <div className="flex gap-28 justify-between px-6 items-center absolute bottom-12 left-3">
                  <h4 className=" text-lg lg:text-5xl font-semibold lg:max-w-sm text-white  ">Mule Sandal Series</h4>
                  <button className="cursor-pointer h-12 w-12 rounded-full  bg-primary text-white grid place-items-center text-base lg:text-lg font-bold"><FaArrowRight className='-rotate-45 group-hover:rotate-0' /> </button>
              </div>
              </div>
            <div className='relative pb-4 h-80 lg:max-h-80'>
              <img src={bag_glasses2} className=' object-cover h-full w-full object-center'/>
              <div className='absolute inset-0 bg-black opacity-40 w-full h-full'></div>
              <div className="flex gap-28 justify-between px-6 items-center absolute bottom-12 left-3">
                  <h4 className=" text-lg lg:text-5xl font-semibold lg:max-w-sm text-white">Angel Sunglasses Series</h4>
                  <button className="cursor-pointer h-12 w-12 rounded-full  bg-primary text-white grid place-items-center text-base lg:text-lg font-bold"><FaArrowRight className='-rotate-45 group-hover:rotate-0' /> </button>
              </div>
            </div>
            <div className='relative lg:col-span-2 lg:max-h-96'>
              <img src={bag_moel} className='w-full h-full object-cover' />
              <div className='absolute inset-0 bg-black opacity-40 w-full h-full'></div>
              <div className="flex pt-4 gap-15 justify-between px-6 items-center absolute top-2 right-3">
                  <h4 className=" text-lg lg:text-5xl font-semibold lg:max-w-xl text-white">Bottega Venete Women Exclusive Series</h4>
                  <button className="cursor-pointer h-12 w-12 rounded-full  bg-primary text-white grid place-items-center text-base lg:text-lg font-bold"><FaArrowRight className='-rotate-45 group-hover:rotate-0' /> </button>
              </div>
              </div>
        </div>

      </section>
    
      <section className="relative py-10 px-4">
        {/* <div className="container mx-auto flex flex-col gap-8"> */}
        <div className="pb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <h4 className="text-6xl lg:text4xl text-secondary lg:max-w-xl relative pb-10 after:h-1 font-semibold after:bg-primary  after:bottom-0 after:left-0 after:absolute after:w-[58%]">Our <span className="text-primary">Customer </span>Reviews</h4>
            <p className="text-2md text-justify text-secondary relative pb-4 pt-6 lg:max-w-xl">Introduced in Mathieu Blazy's Summer 23 collection. Andiamo is a new expression of the signature intrecciato technique realised by the expert craftsmanship of artisans in Italian ateliers. Its name, Andiamo, "Lets's go" in Italian, embodies the spirit of the bag, a tribute to going places and the craft in motion.</p>
        </div>
        {/* </div> */}
        <div className="grid md:grid-cols-3 lg:grid cols 3 gap-4 auto-rows-[auto] grid-flow-dense">
          {
            reviewData.map(review => (
              <aside key={review.id} className={`p-4 flex flex-col gap-4 bg-slate-200/30 ${review?.productImage ? 'row-span-2' : 'row-span-1'}`}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center w-max">
              <img src={review.image} alt={review.name} className="h-6 w-6 md:h-10 md:w-10 rounded-full flex-shrink-0 object-cover" />
              <div className="">
                <h5 className="text-base lg:text-lg font-semibold text-dark">{review.name}</h5>
                <div className="flex gap-1 text-primary text-xs lg:text-sm">
                  {Array(review.rating).map((el,i)=> <IoStar key={i}/>)}
                  <IoStarOutline/>
                </div>
              </div>
            </div>
            <IoThumbsUp className='text-slate-300'/>
          </div>

           {review?.productImage && <img src={review.productImage} alt="" className="object-cover w-full h-32 lg:h-48" />}
            <p className="text-base lg:text-lg text-dark font-medium text-justify leading-loose">{review.text}</p>
          </aside>
            ))
          }
          
        </div>
    </section>     
     
    </main>
    
  )
}
