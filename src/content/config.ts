import { defineCollection, z } from 'astro:content';

const work = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		titleLink: z.string().optional(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
		category: z.string(),
		thumbImage: z.string(),
		thumbLogo: z.string().optional(),
		thumbDescription: z.string(),
		thumbBadge: z.string(),
	}),
});

export const collections = { work };
