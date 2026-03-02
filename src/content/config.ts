/**
 * content/config.ts
 * ─────────────────
 * Defines the schema for Astro Content Collections.
 *
 * NEWS ARTICLES
 * ─────────────
 * To add a news article, create a Markdown file in src/content/news/
 * with this frontmatter:
 *
 *   ---
 *   title:          "Article Title"
 *   date:           2024-11-15
 *   label:          "Competition"       # Tag shown on the card (e.g. Competition, Update, Sponsors)
 *   image:          "/uploads/news/my-photo.png"
 *   excerpt:        "One-sentence teaser shown on the news listing page."
 *   draft:          false               # Set to true to hide from the site
 *   hasFullArticle: true                # Set to false to hide the "Read More" / "Read Full Story" button
 *   ---
 *
 *   Full article body goes here in Markdown...
 *   (If hasFullArticle is false, this body is ignored on the listing page.)
 */
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  schema: z.object({
    title:          z.string(),
    date:           z.coerce.date(),
    label:          z.string().default('News'),
    image:          z.string().optional(),
    excerpt:        z.string(),
    draft:          z.boolean().default(false),
    hasFullArticle: z.boolean().default(true), // hide "Read More" button when false
  }),
});

export const collections = { news };