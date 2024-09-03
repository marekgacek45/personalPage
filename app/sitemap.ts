import { client } from '@/sanity/lib/client'
import { Post } from '@/sanity/lib/interface'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    async function getPosts() {
        const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      thumbnail,
      excerpt
    }`
    
        const posts = await client.fetch(query)
        return posts
    }

    const posts: Post[] = await getPosts()

    const postUrls = posts.map((post) => ({
        url: `https://marekgacekdev.pl/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
      }))

	return [
		{
			url: 'https://marekgacekdev.pl',
			lastModified: new Date(),
		},
		{
			url: 'https://marekgacekdev.pl/blog',
			lastModified: new Date(),
		},
		{
			url: 'https://marekgacekdev.pl/portfolio',
			lastModified: new Date(),
		},
        ...postUrls,
	]
}
