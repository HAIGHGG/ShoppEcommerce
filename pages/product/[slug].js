import { useState } from 'react'
import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../../components'
import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ product, products }) => {
	const { image, name, details, price } = product
	const [index, setIndex] = useState(0)
	const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext()

	const handleBuyNow = () => {
		onAdd(product, qty)

		setShowCart(true)
	}

	return (
		<div>
			<div className='flex flex-col xl:flex-row xl:gap-32'>
				<div className='xl:w-6/12'>
					<div>
						<img src={urlFor(image && image[index])} />
					</div>
					<div className='flex flex-row gap-2 my-5 '>
						{image?.map((item, i) => (
							<img
								key={i}
								src={urlFor(item)}
								className={
									i === index
										? 'shadow-md shadow-indigo-500 rounded-3xl w-20 lg:w-32 h-20 lg:h-32'
										: 'rounded-3xl w-20 lg:w-32 h-20 lg:h-32'
								}
								onClick={() => setIndex(i)}
							/>
						))}
					</div>
				</div>
				<div>
					<h1 className='xl:text-3xl 2xl:text-6xl'>{name}</h1>
					<div className='flex flex-row items-center mb-5 xl:mt-5 xl:text-lg text-indigo-700'>
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiFillStar />
						<AiOutlineStar />
						<p>(20)</p>
					</div>
					<div className='xl:text-xl'>
						<h4>Details: </h4>
						<p>{details}</p>
						<p className='my-5 font-bold text-indigo-500 text-3xl xl:text-4xl'>{price}PLN</p>
						<div className='flex flex-row gap-3 my-5'>
							<h3>Quantity:</h3>
							<p className='flex flex-row items-center justify-between w-24 gap-4 rounded bg-slate-100'>
								<span className='minus bg-white rounded p-0.5' onClick={decQty}>
									<AiOutlineMinus />
								</span>
								<span className='num'>{qty}</span>
								<span className='plus bg-white rounded p-0.5' onClick={incQty}>
									<AiOutlinePlus />
								</span>
							</p>
						</div>
						<div className='flex flex-row my-5 xl:my-10 gap-5'>
							<button
								type='button'
								className='py-1 px-4 rounded-3xl bg-slate-50 text-indigo-700 border-indigo-700 border-solid border-2'
								onClick={() => onAdd(product, qty)}>
								Add to Cart
							</button>
							<button
								type='button'
								className='py-1 px-4 rounded-3xl text-slate-50 bg-indigo-700'
								onClick={handleBuyNow}>
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 className='pb-2 flex flex-col items-center my-9 border-b-4 border-indigo-300 lg:text-3xl'>Others Also Bought</h2>
				<div>
					<div className='grid md:grid-cols-2 xl:grid-cols-4 md:gap-20'>
						{products.slice(products.length - 4, products.length).map(item => (
							<Product key={item._id} product={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export const getStaticPaths = async () => {
	const query = `*[_type == "product"] {
        slug {
            current
        }
    }`

	const products = await client.fetch(query)

	const paths = products.map(product => ({
		params: {
			slug: product.slug.current,
		},
	}))
	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps = async ({ params: { slug } }) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]`
	const productsQuery = '*[_type == "product"]'
	const product = await client.fetch(query)
	const products = await client.fetch(productsQuery)

	return {
		props: { products, product },
	}
}

export default ProductDetails
