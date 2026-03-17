import { defineType } from "sanity"

export default defineType({
  name: "imageBlock",
  title: "Image",
  type: "image",

  options: {
    hotspot: true
  },

  fields: [
    { name: "alt", type: "string" },
    { name: "caption", type: "string" }
  ]
})