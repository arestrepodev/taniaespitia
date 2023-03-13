import { SITE_DESCRIPTION, SITE_TITLE } from "../config";

import { getCollection } from "astro:content";
import rss from '@astrojs/rss';

export async function get(context) {
  const work = await getCollection('work');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: work.map((item) => ({
      ...item.data,
      link: `/work/${item.slug}`
    }))
  })
}