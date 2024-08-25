export interface Post {
	title: string
	slug: string
    thumbnail: any
	publishedAt: string
	excerpt: string
	body: any
	// tags: Array<Tag>
	_id: string
}

export interface Stack{
	_id: string,
	title: string
	slug: string
    image: any
}
