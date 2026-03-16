export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      initialValue: 'OutdoorQuestKE'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    }
  ]
}
