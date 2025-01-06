import { client } from '@/sanity/lib/client'

import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: 'https://marekgacekdev.pl',
			lastModified: new Date(),
      priority: 1,
		},

		{
			url: 'https://marekgacekdev.pl/portfolio',
			lastModified: new Date(),
      priority: 0.9,
		},
	]
}
