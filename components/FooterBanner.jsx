import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const FooterBanner = ({
	footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc },
}) => {
	return (
		<div className='relative mb-5 bg-indigo-700 text-white rounded-3xl p-2'>
			<div>
				<div className='text-3xl'>
					<p className='mb-4'>{discount}</p>
					<h3>{largeText1}</h3>
					<h3 className='mb-4'>{largeText2}</h3>
					<p>{saleTime}</p>
				</div>

				<div>
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<button type='button' className='mt-5 p-1 rounded-3xl bg-slate-50 text-indigo-700'>{buttonText}</button>
					</Link>
					<img src={urlFor(image)} className='absolute w-3/4 top-10 -right-9 bg-slate-50 rounded-3xl' alt='' />
				</div>
			</div>
		</div>
	)
}

export default FooterBanner
