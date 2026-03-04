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
 *   label:          "Competition"       # Tag shown on the card
 *   image:          ./my-photo.png      # Relative path — Astro auto-generates WebP
 *   excerpt:        "One-sentence teaser shown on the news listing page."
 *   draft:          false               # Set to true to hide from the site
 *   hasFullArticle: true                # Set to false to hide the "Read More" button
 *   ---
 *
 *   Full article body goes here in Markdown...
 *
 * IMAGE NOTE
 * ──────────
 * Drop the image next to the .md file in src/content/news/ and reference it
 * with a relative path (./my-photo.png). Astro optimises it to WebP at build time.
 */
import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  // The `image` helper is provided as a parameter by Astro — do not import it separately.
  schema: ({ image }) =>
    z.object({
      title:          z.string(),
      date:           z.coerce.date(),
      label:          z.string().default('News'),
      image:          image().optional(),
      excerpt:        z.string(),
      draft:          z.boolean().default(false),
      hasFullArticle: z.boolean().default(true),
    }),
});

export const collections = { news };
