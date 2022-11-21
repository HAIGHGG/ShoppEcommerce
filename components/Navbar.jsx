import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext()
	return (
		<div className='flex flex-row justify-between mb-5'>
			<p className='font-bold text-2xl'>
				<Link href='/'>Shopp</Link>
			</p>

			<button type='button' className='relative rounded-2xl text-indigo-700 bg-white p-2' onClick={() => setShowCart(true)}>
				<AiOutlineShopping />
				<span className='absolute -right-3 -top-3 px-2 rounded-2xl bg-indigo-700 text-white'>{totalQuantities}</span>
			</button>
			{showCart && <Cart />}
		</div>
	)
}

export default Navbar
