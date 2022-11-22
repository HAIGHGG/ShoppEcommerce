import Link from 'next/link'

const Canceled = () => {
	return (
		<div className='flex flex-col h-full text-center'>
			<h2 className='font-bold text-xl my-5'>Something went wrong with Your Payment</h2>
			<p className=''>We are unable to process the charges on your payment.</p>
			<p>We will take you back to home page.</p>
			<Link href='/'>
				<div>
					<button type='button' className='my-5 py-1 px-4 rounded-3xl text-slate-50 bg-indigo-700'>
						Home Page
					</button>
				</div>
			</Link>
		</div>
	)
}

export default Canceled
