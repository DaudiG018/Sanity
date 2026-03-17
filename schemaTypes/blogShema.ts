import { defineType, defineField } from "sanity"

export default defineType({
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3
    }),

    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string" }
      ]
    }),

    defineField({
      name: "publishedAt",
      type: "datetime"
    }),

    defineField({
  name: "body",
  type: "array",
  of: [
    { type: "block" },
    { type: "imageBlock" },
    { type: "gallery" },
    { type: "ctaBanner" },
    { type: "productReference" } // 👈 ADD THIS
  ]
})
  ]
})