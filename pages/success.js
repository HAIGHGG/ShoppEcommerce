import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsBag, BsBagCheckFill } from 'react-icons/bs'
import { useStateContext } from '../context/StateContext'
import { runConfetti } from '../lib/utils'

const Success = () => {
	const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()
	const [order, setOrder] = useState(null)

	useEffect(() => {
		localStorage.clear()
		setCartItems([])
		setTotalPrice(0)
		setTotalQuantities(0)
		runConfetti()
	}, [])

	return (
		<div className='flex flex-col justify-center items-center text-center gap-5'>
			<p className='text-9xl'>
				<BsBagCheckFill />
			</p>
			<div>
				<h2>Your payment went succesfull!</h2>
				<p className=''>Check your email inbox for the receipt.</p>
				<Link href='/'>
					<button type='button' className='my-5 py-1 px-4 rounded-3xl text-slate-50 bg-indigo-700' width='300px'>
						Continue Shopping
					</button>
				</Link>
			</div>
		</div>
	)
}

export default Success
