import { Rule, validation } from 'sanity'

export const post = {
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
			},
			validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
		},

		{
			name: 'publishedAt',
			title: 'Published At',
			type: 'datetime',
			initialValue: () => new Date().toISOString(),
		},

		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
		},
		{
			name: 'excerpt',
			title: 'Excerpt',
			type: 'text',
			validation: (Rule: Rule) => Rule.max(200).error('Max 200 characters'),
		},

		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{ type: 'block' },
				{
					type: 'image',
					fields: [
						{
							type: 'text',
							name: 'alt',
							title: 'Alt',
						},
					],
				},
				{ type: 'code',  name: 'codeBlock', title: 'Code' , language: 'typescript',
					languageAlternatives: [
						{title: 'Typescript', value: 'typescript'},
					  {title: 'Javascript', value: 'javascript'},
					  {title: 'HTML', value: 'html'},
					  {title: 'CSS', value: 'css'},
					  {title: 'PHP', value: 'php'},
					],
					
				  },
			],
		},
		{ name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: { type: 'category' } }] },
	],
}
