import { SITE_DESCRIPTION, SITE_TITLE } from "../config"

import rss from '@astrojs/rss';

export const get = () =>
  rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: import.meta.glob('./work/**/*.{md,mdx}'),
  })