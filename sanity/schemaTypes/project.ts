import { Rule, validation } from 'sanity'

export const project = {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},

		{
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},

		{
			name: 'link',
			title: 'Link',
			type: 'url',
			validation: (Rule: Rule) => Rule.required().error('Required'),
		},
		{
			name: 'github',
			title: 'Github Link',
			type: 'url',
		},

		{
			name: 'video',
			title: 'Video',
			type: 'url',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'text',
			validation: (Rule: Rule) => Rule.required().error('Required').max(200).error('Max 200 characters'),
		},

		{
			name: 'stack',
			title: 'Stack',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'stack' } }],
		},
	],
}
