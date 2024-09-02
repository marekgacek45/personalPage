export interface Post {
	_id: string
	title: string
	slug: string
    thumbnail: any
	publishedAt: string
	excerpt: string
	body: any
	content:any
	categories: Array<Category>
}

export interface Project {
	_id: string
	title: string
    thumbnail: any
	link: string
	github: string
	video:string
	description: string
	stack: Array<Stack>
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
