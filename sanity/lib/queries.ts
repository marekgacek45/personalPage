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

export const GET_STACKS_WITH_PROJECTS = async () => {
	const query = `
   *[_type == "stack" && _id in *[_type == "project"].stack[]._ref] {
  title,
  "slug": slug.current,
  image,
  "projectCount": count(*[_type == "project" && references(^._id)])
} | order(projectCount desc)`
	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}

export const GET_ALL_PROJECTS = async () => {
	const query = `
	*[_type == "project"] | order(_createdAt desc) {
		title,
		thumbnail,
		description,
		github,
		video,
		link,
		stack[]->{title, image,slug},
	  }`
	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}

export const GET_PROJECTS_BY_STACK = async (stack: string) => {
	const query = `*[_type == "project" && references(*[_type == "stack" && slug.current == "${stack}"]._id)] | order(_createdAt desc) {
   title,
		thumbnail,
		description,
		github,
		video,
		link,
		stack[]->{title, image,slug},
  
}`

	const data = await sanityFetch({
		query: query,
		revalidate: 60,
	})
	return data
}
