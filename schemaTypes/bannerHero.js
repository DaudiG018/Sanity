export default {
  name: 'banner',
  title: 'Homepage Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Banner Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'ctaText',
      title: 'Button Text',
      type: 'string'
    },
    {
      name: 'ctaLink',
      title: 'Button Link',
      type: 'url'
    }
  ]
}
