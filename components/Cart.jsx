import { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast, { Toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

const Cart = () => {
	const cartRef = useRef()
	const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity, onRemove } = useStateContext()

	const handleCheckout = async () => {
		const stripe = await getStripe()

		const response = await fetch('/api/stripe', {
			method: 'POST',
			header: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cartItems),
		})
		if (response.statusCode === 500) return
		const data = await response.json()
		toast.loading('Redirecting...')

		stripe.redirectToCheckout({ sessionId: data.id })
	}
	return (
		<div className='fixed top-0 right-0 w-full h-full z-10 bg-black-rgba' ref={cartRef}>
			<div className='flex flex-col p-10 w-full lg:w-1/3 lg:ml-auto h-full bg-slate-200'>
				<button type='button' onClick={() => setShowCart(false)}>
					<AiOutlineLeft />
				</button>
				<div className='flex flex-col gap-5 my-5 text-left'>
					<p className='font-bold text-2xl'>My Shopping Cart</p>
					<p className='cart-num-items text-xl'>Total {totalQuantities} items</p>
				</div>
				{cartItems.length < 1 && (
					<div className='flex flex-col items-center '>
						<AiOutlineShopping size={150} />
						<h3>Your shopping bag is empty</h3>
						<Link href='/'>
							<button type='button' onClick={() => setShowCart(false)} className='my-5 py-1 px-4 rounded-3xl text-slate-50 bg-indigo-700'>
								Continue shopping
							</button>
						</Link>
					</div>
				)}
				<div className='flex flex-col gap-4'>
					{cartItems.length >= 1 &&
						cartItems.map(item => (
							<div className='relative flex flex-row gap-10' key={item._id}>
								<img src={urlFor(item?.image[0])} className='rounded-xl' width={100} alt='' />
								<div className='flex flex-col justify-between'>
									<div className='flex flex-col gap-1'>
										<button type='button' className='absolute top-1 left-1' onClick={() => onRemove(item)}>
											<TiDeleteOutline />
										</button>
										<h5>{item.name}</h5>
										<h4>{item.price}PLN</h4>
									</div>
									<div>
										<div className='flex flex-row items-center justify-between w-24 gap-4 rounded bg-slate-100'>
											<span
												className='minus bg-white rounded p-0.5'
												onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
												<AiOutlineMinus />
											</span>
											<span className='num' onClick=''>
												{item.quantity}
											</span>
											<span
												className='plus bg-white rounded p-0.5'
												onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
												<AiOutlinePlus />
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
				{cartItems.length >= 1 && (
					<div className='mt-auto'>
						<div className='flex flex-row justify-between p-5 font-bold'>
							<h3>Total</h3> <span>{totalPrice} PLN</span>
						</div>
						<div className='flex items-center justify-center'>
							<button
								type='button'
								className='bg-indigo-700 text-white px-20 py-5 rounded-3xl'
								onClick={handleCheckout}>
								Pay with Stripe
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
