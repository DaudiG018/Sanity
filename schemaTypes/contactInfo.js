export default {
  name: 'contactInfo',
  title: 'Contact & Social Media',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      initialValue: '0758 929 927'
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Link',
      type: 'url',
      description: 'e.g. https://wa.me/254758929927'
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url'
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url'
    },
    {
      name: 'email',
      title: 'Email Address',
      type: 'string'
    }
  ]
}
