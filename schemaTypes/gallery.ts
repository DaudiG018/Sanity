import { defineType } from "sanity"

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",

  fields: [
    {
      name: "images",
      type: "array",
      of: [{ type: "image" }]
    }
  ]
})