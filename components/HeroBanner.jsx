import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner: { smallText, midText, largeText1, image, product, buttonText, desc } }) => {
	return (
		<div className='mb-5 p-2 text-white rounded-3xl bg-indigo-700'>
			<img src={urlFor(image)} alt='' className='mb-5 rounded-3xl bg-slate-50' />
			<p className='text-sm'>{smallText}</p>
			<h1 className='text-2xl'>{largeText1}</h1>
			<h3 className='text-right text-xl'>{midText}</h3>
			<p className='text-right'>{desc}</p>
			<div>
				<Link href={`/product/${product}`}>
					<button type='button' className='p-1 rounded-3xl bg-slate-50 text-indigo-700'>
						{buttonText}
					</button>
				</Link>
			</div>
		</div>
	)
}

export default HeroBanner
