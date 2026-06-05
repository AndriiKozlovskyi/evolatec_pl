<template>
  <article v-editable="blok" class="pt-20 pb-section-padding bg-surface min-h-screen">

    <!-- Back link -->
    <div class="max-w-3xl mx-auto px-gutter pt-6">
      <a
        :href="isEnglish ? '/en/blog' : '/blog'"
        class="inline-flex items-center gap-1.5 text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors duration-200"
      >
        <span class="material-symbols-outlined text-[18px] leading-none">arrow_back</span>
        {{ isEnglish ? 'All articles' : 'Alle Artikel' }}
      </a>
    </div>

    <!-- Hero image -->
    <div v-if="blok.image?.filename" class="max-w-3xl mx-auto px-gutter pt-8">
      <div class="relative overflow-hidden rounded-2xl aspect-[16/9]">
        <img
          :src="`${blok.image.filename}/m/1280x720/`"
          :alt="blok.image.alt || blok.title"
          class="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </div>

    <!-- Article body -->
    <div class="max-w-3xl mx-auto px-gutter" :class="blok.image?.filename ? 'pt-8' : 'pt-16'">

      <!-- Badge -->
      <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
        <span class="material-symbols-outlined text-sm leading-none">article</span>
        Blog
      </span>

      <!-- Title -->
      <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface leading-tight tracking-tight mb-5">
        {{ blok.title }}
      </h1>

      <!-- Description / excerpt -->
      <p v-if="blok.description" class="text-lg text-on-surface-variant leading-relaxed mb-6">
        {{ blok.description }}
      </p>

      <!-- Author + meta -->
      <div class="flex flex-col justify-center gap-x-5 space-y-3 pb-8 mb-8 border-b border-outline-variant/30">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
            <span class="material-symbols-outlined text-sm text-primary">person</span>
          </div>
          <span class="text-sm text-on-surface-variant">
            By <strong class="text-on-surface font-semibold">{{ blok.author }}</strong>
          </span>
        </div>
        <div v-if="publishedDate" class="flex items-center gap-1.5 text-sm text-on-surface-variant">
          <span class="material-symbols-outlined text-[16px] leading-none">calendar_today</span>
          {{ publishedDate }}
        </div>
        <div class="flex items-center gap-1.5 text-sm text-on-surface-variant">
          <span class="material-symbols-outlined text-[16px] leading-none">schedule</span>
          {{ readTime }} {{ isEnglish ? 'min read' : 'Min. Lesezeit' }}
        </div>
      </div>

      <!-- Article content -->
      <div v-html="blok.content" class="article-body"></div>

    </div>

    <!-- More articles -->
    <section v-if="moreArticles.length" class="mt-16 pt-12 border-t border-outline-variant/20 bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter py-section-padding">
        <h2 class="font-display text-2xl sm:text-3xl font-black text-on-surface tracking-tight mb-8">
          {{ isEnglish ? 'More articles' : 'Weitere Artikel' }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            v-for="article in moreArticles"
            :key="article.uuid"
            :article="article.content"
            :slug="article.full_slug"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection
      :title="isEnglish ? 'Ready to grow your business?' : 'Bereit für Ihr nächstes Projekt?'"
      :description="isEnglish ? 'Let\'s build a website that works for your business — fast, SEO-ready and conversion-focused.' : 'Wir entwickeln moderne Websites, die Kunden gewinnen und Ihr Unternehmen wachsen lassen.'"
      :primary-cta="isEnglish ? 'Get a free quote' : 'Kostenloses Angebot'"
      :secondary-cta="isEnglish ? 'View pricing' : 'Preise ansehen'"
    />

  </article>
</template>

<script setup>
const { isEnglish, hreflangLinks } = useLanguageSwitcher()
const props = defineProps({ blok: Object })
const route = useRoute()

const canonicalUrl = computed(() => `https://evolatec.de${route.path}`)
const ogImage = computed(() => {
  const f = props.blok?.image?.filename
  return f ? `${f}/m/1200x630/` : 'https://evolatec.de/og-default.jpg'
})

useHead(() => ({
  title: props.blok?.title ? `${props.blok.title} | EvolaTec` : 'Blog | EvolaTec',
  meta: [
    { name: 'description', content: props.blok?.description ?? '' },
    { property: 'og:type', content: 'article' },
    { property: 'og:title', content: props.blok?.title ?? 'EvolaTec Blog' },
    { property: 'og:description', content: props.blok?.description ?? '' },
    { property: 'og:image', content: ogImage.value },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:site_name', content: 'EvolaTec' },
    { property: 'article:published_time', content: props.blok?._publishedAt ?? '' },
    { property: 'article:author', content: props.blok?.author ?? 'EvolaTec' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.blok?.title ?? 'EvolaTec Blog' },
    { name: 'twitter:description', content: props.blok?.description ?? '' },
    { name: 'twitter:image', content: ogImage.value },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    ...hreflangLinks.value,
  ],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.blok?.title ?? '',
      description: props.blok?.description ?? '',
      image: ogImage.value,
      author: { '@type': 'Person', name: props.blok?.author ?? 'EvolaTec' },
      publisher: {
        '@type': 'Organization',
        name: 'EvolaTec',
        logo: { '@type': 'ImageObject', url: 'https://evolatec.de/logo.webp' },
      },
      datePublished: props.blok?._publishedAt ?? '',
      url: canonicalUrl.value,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl.value },
    }),
  }],
}))

const publishedDate = computed(() => {
  if (!props.blok?._publishedAt) return null
  return new Intl.DateTimeFormat(isEnglish.value ? 'en-GB' : 'de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(props.blok._publishedAt))
})

const readTime = computed(() => {
  const html = props.blok?.content ?? ''
  const text = html.replace(/<[^>]*>/g, ' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
})

const currentSlug = computed(() => route.path.replace(/^\//, '').replace(/\/$/, ''))

const { data: allArticles } = await useAsyncData(`more-${currentSlug.value}`, async () => {
  try {
    const { data } = await useStoryblokApi().get('cdn/stories', {
      version: route.query._storyblok ? 'draft' : 'published',
      starts_with: 'blog',
      is_startpage: false,
      per_page: 4,
    })
    return data?.stories ?? []
  } catch {
    return []
  }
})

const moreArticles = computed(() =>
  (allArticles.value ?? [])
    .filter(s => s.full_slug !== currentSlug.value)
    .slice(0, 3)
)
</script>

<style scoped>
.article-body :deep(h2) {
  font-size: 1.75rem;
  font-weight: 800;
  color: #1c1b25;
  letter-spacing: -0.025em;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.25;
}
.article-body :deep(h3) {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1c1b25;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.article-body :deep(p) {
  color: #48444f;
  line-height: 1.8;
  margin-bottom: 1.25rem;
  font-size: 1.0625rem;
}
.article-body :deep(a) {
  color: #6d46b1;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.article-body :deep(a:hover) {
  color: #5b21b6;
}
.article-body :deep(strong) {
  color: #1c1b25;
  font-weight: 700;
}
.article-body :deep(ul),
.article-body :deep(ol) {
  color: #48444f;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.8;
}
.article-body :deep(li) {
  margin-bottom: 0.4rem;
}
.article-body :deep(blockquote) {
  border-left: 3px solid #6d46b1;
  padding-left: 1.25rem;
  margin: 1.75rem 0;
  color: #48444f;
  font-style: italic;
}
.article-body :deep(code) {
  background: #ede9f7;
  color: #6d46b1;
  border-radius: 0.25rem;
  padding: 0.15em 0.4em;
  font-size: 0.9em;
}
.article-body :deep(pre) {
  background: #1c1b25;
  color: #f3f0fa;
  border-radius: 0.5rem;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}
.article-body :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}
.article-body :deep(hr) {
  border-color: #cac4d6;
  margin: 2.5rem 0;
}
.article-body :deep(img) {
  border-radius: 0.75rem;
  max-width: 100%;
  height: auto;
  margin: 1.5rem 0;
}
.article-body :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1.75rem 0;
  font-size: 0.9375rem;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #e2dff0;
}
.article-body :deep(thead) {
  background: #f3f0fa;
}
.article-body :deep(th) {
  text-align: left;
  padding: 0.75rem 1rem;
  font-weight: 700;
  color: #1c1b25;
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 2px solid #e2dff0;
}
.article-body :deep(td) {
  padding: 0.75rem 1rem;
  color: #48444f;
  border-bottom: 1px solid #ede9f7;
  vertical-align: top;
  line-height: 1.5;
}
.article-body :deep(tr:last-child td) {
  border-bottom: none;
}
.article-body :deep(tr:nth-child(even)) {
  background: #f9f7fd;
}
.article-body :deep(td code),
.article-body :deep(th code) {
  font-size: 0.8125rem;
}
.article-body :deep(ul) {
  list-style-type: disc;
}
.article-body :deep(ol) {
  list-style-type: decimal;
}
</style>
