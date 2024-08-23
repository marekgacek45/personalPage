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
      validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Pole wymagane'),
    },
    {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
    },
    {
        name: 'video',
        title: 'Video',
        type: 'string',
    },]}