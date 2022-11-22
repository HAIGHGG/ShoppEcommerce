import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components'

import { client } from '../lib/client'

const index = ({ products, bannerData }) => {

	return (
		<div>
			<HeroBanner heroBanner={bannerData.length && bannerData[0]} />

			<div className='pb-2 flex flex-col items-center my-10 border-b-4 border-indigo-300'>
				<h2 className='font-bold text-indigo-700 text-2xl'>Best Selling Products</h2>
				<p className='text-indigo-400'>Shoes of many variations</p>
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
				{products?.map(product => (
					<Product key={product._id} product={product} />
				))}
			</div>

			<FooterBanner footerBanner={bannerData && bannerData[0]} />
		</div>
	)
}

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]'
	const products = await client.fetch(query)

	const bannerQuery = '*[_type == "banner"]'
	const bannerData = await client.fetch(bannerQuery)

	return {
		props: { products, bannerData },
	}
}

export default index
