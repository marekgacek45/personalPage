import { sanityFetch } from './client'

export const GET_STACKS = async () => {
	const query = `
        *[_type == "stack"]{
        title,
        image,
      }
        `
	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}
