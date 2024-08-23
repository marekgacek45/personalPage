import { Rule, validation } from 'sanity'

export const stack = {
  name: 'stack',
  title: 'Stack',
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
        name: 'image',
        title: 'Image',
        type: 'image',
        validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
    },
  ],
}