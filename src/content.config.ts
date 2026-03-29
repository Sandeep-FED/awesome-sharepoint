import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const resourceItemSchema = z.object({
  title: z.string(),
  description: z.string(),
  url: z.string().url(),
  tag: z.string(),
  tagColor: z.enum(["brand", "warning", "success", "important"]),
})

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    items: z.array(resourceItemSchema),
  }),
})

export const collections = { resources }
