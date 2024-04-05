// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().max(65, { message: "Title cannot be longer than 65 characters." }),
      description: z.string().max(165, { message: "Description cannot be longer than 165 characters. " }),
      image: image().refine((img) => img.width >= 1000, {
        message: "Image must be at least 1000px wide.",
      }),
      pubDate: z.date(),
      isDraft: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
const features = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().refine((val) => val.startsWith("icon"))
  })
});

export const collections = {
  posts,
  features,
  postsCollection
};