import {defineField, defineType} from 'sanity'

export const productType = defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Product Name',
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [{type: 'image'}],
      title: 'Product Images',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Product Description',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Product Price',
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [
        {
          type: 'category'
        }
      ],
      title: 'Category',
    }),
  ],
})
