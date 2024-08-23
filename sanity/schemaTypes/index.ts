import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { category } from './category'
import { project } from './project'
import { stack } from './stack'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,post,project,stack],
}
