import { defineType } from "sanity"

export default defineType({
  name: "productReference",
  title: "Product",
  type: "object",

  fields: [
    {
      name: "product",
      type: "reference",
      to: [{ type: "product" }]
    }
  ],

  preview: {
    select: {
      title: "product.name",
      media: "product.image"
    }
  }
})