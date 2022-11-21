import imageUrlBuilder from '@sanity/image-url'

const sanityClient = require('@sanity/client')

export const client = sanityClient({
	projectId: 'sf9ndo8k',
	dataset: 'production',
	apiVersion: '2021-10-21',
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
