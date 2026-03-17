import { defineType } from "sanity"

export default defineType({
  name: "ctaBanner",
  title: "CTA Banner",
  type: "object",

  fields: [
    { name: "title", type: "string" },
    { name: "text", type: "text" },
    { name: "buttonText", type: "string" },
    { name: "buttonLink", type: "string" }
  ]
})