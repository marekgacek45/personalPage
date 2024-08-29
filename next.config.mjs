/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/blog/kategoria/:slug',
				destination: '/blog/category/:slug',
			},
		]
	},
}

export default nextConfig
