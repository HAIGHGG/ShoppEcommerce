import Link from 'next/link'
import React from 'react'
import { urlFor } from '../lib/client'

const FooterBanner = ({
	footerBanner: { discount, largeText1, largeText2, saleTime, smallText, midText, product, buttonText, image, desc },
}) => {
	return (
		<div className='mb-5 bg-indigo-700 text-white rounded-3xl p-2'>
			<div>
				<div>
					<p className='text-right'>{saleTime}</p>
					<img src={urlFor(image)} className=' my-2 bg-slate-50 rounded-3xl' alt='' />
					<p className='text-2xl'>{discount}</p>
					<h3 className='text-2xl'>{largeText1}</h3>
					<h3 className='text-2xl mb-4'>{largeText2}</h3>
				</div>

				<div>
					<p>{smallText}</p>
					<h3>{midText}</h3>
					<p>{desc}</p>
					<Link href={`/product/${product}`}>
						<button type='button' className='mt-5 p-1 rounded-3xl bg-slate-50 text-indigo-700'>{buttonText}</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default FooterBanner
