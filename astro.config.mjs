import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import robotsTxt from "astro-robots-txt";
import critters from "astro-critters";
import compressor from "astro-compressor";
import embeds from 'astro-embed/integration';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.dragonjay.top',
  integrations: [tailwind(), markdoc(), embeds(), mdx(), partytown(), prefetch(), sitemap(), robotsTxt(), astroI18next(), critters(), compressor({
    gzip: true,
    brotli: true
  }), vue()]
});