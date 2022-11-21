import '../styles/globals.css'
import Layout from '../components/Layout'
import { StateContext } from '../context/StateContext'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
	return (
		<StateContext>
			<Layout>
				<Toaster position='top-left' />
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	)
}

export default MyApp
