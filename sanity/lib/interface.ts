export interface Post {
	_id: string
	title: string
	slug: string
    thumbnail: any
	publishedAt: string
	excerpt: string
	body: any
	categories: Array<Category>
}

export interface Stack{
	_id: string,
	title: string
	slug: string
    image: any
}

export interface Category{
	_id: string,
	title: string
	slug: string
}
