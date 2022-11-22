import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const FooterBanner = ({
	footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc },
}) => {
	return (
		<div className='relative mb-5 lg:mb-24 lg:mt-32 bg-indigo-700 text-white rounded-3xl p-2 lg:p-10'>
			<div className='flex flex-col lg:flex-row lg:justify-between'>
				<div>
					<p className='text-right'>{saleTime}</p>
					<img src={urlFor(image)} className='lg:absolute lg:w-1/2 lg:-top-24 lg:right-1/2 lg:translate-x-1/2 my-2 bg-slate-50 rounded-3xl' alt='' />
					<p className='text-2xl'>{discount}</p>
					<h3 className='text-2xl'>{largeText1}</h3>
					<h3 className='text-2xl mb-4'>{largeText2}</h3>
				</div>

				<div>
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<button type='button' className='mt-5 p-1 rounded-3xl bg-slate-50 text-indigo-700 font-bold'>{buttonText}</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default FooterBanner
