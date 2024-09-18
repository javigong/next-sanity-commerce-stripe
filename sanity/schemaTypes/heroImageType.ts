import {defineField, defineType} from 'sanity'

export const heroImageType = defineType({
  name: 'heroImages',
  type: 'document',
  title: 'Hero Images',
  fields: [
    defineField({
      name: 'image1',
      type: 'image',
      title: 'First Image',
    }),
    defineField({
      name: 'image2',
      type: 'image',
      title: 'Second Image',
    }),
  ],
})
