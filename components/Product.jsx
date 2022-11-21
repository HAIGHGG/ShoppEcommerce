import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const Product = ({ product: { image, name, slug, price } }) => {
	return (
		<div>
			<Link href={`/product/${slug.current}`}>
				<div className='flex flex-col items-center mb-6'>
					<img src={urlFor(image && image[0])} width={250} height={250} className='rounded-3xl' />
					<p className='font-bold'>{name}</p>
					<p className='product-price'>{price}PLN</p>
				</div>
			</Link>
		</div>
	)
}

export default Product
