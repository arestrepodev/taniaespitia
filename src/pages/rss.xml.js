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
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.pubDate,
      link: `/work/${item.slug}`
    }))
  })
}