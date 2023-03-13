// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
// 2. Define your collection(s)
const workCollection = defineCollection({});

export const collections = {
  'work': workCollection,
};