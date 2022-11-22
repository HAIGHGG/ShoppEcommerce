import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({ heroBanner: { smallText, midText, largeText1, image, product, buttonText, desc } }) => {
	return (
		<div className='flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-10 mb-5 p-2 lg:p-10 text-white rounded-3xl bg-indigo-700'>
			<img src={urlFor(image)} alt='' className='lg:w-1/2 mb-5 lg:mb-0 rounded-3xl bg-slate-50' />
			<div className='lg:w-1/2 '>
				<p className='text-sm lg:text-xl font-bold'>{smallText}</p>
				<h1 className='text-2xl lg:text-6xl font-bold'>{largeText1}</h1>
				<h3 className='text-right text-xl lg:text-2xl'>{midText}</h3>
				<p className='text-right lg:text-lg'>{desc}</p>
				<div>
					<Link href={`/product/${product}`}>
						<button type='button' className='p-1 lg:p-2 rounded-3xl bg-slate-50 text-indigo-700 font-bold lg:text-xl'>
							{buttonText}
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HeroBanner
