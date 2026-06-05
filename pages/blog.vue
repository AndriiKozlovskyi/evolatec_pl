<template>
  <div>
    <section class="py-section-padding bg-surface-container-low">
      <div class="max-w-container-max mx-auto px-gutter text-center">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-5">
          <span class="material-symbols-outlined text-sm leading-none">article</span>
          Blog
        </span>
        <h1 class="font-display text-4xl sm:text-5xl font-black text-on-surface tracking-tight leading-tight mb-4">
          Blog i poradniki
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Wskazówki, strategie i wiedza o tworzeniu stron, SEO, marketingu online i wzroście w sieci.
        </p>
      </div>
    </section>

    <section class="py-section-padding bg-surface">
      <div class="max-w-container-max mx-auto px-gutter">
        <div v-if="!articles.length" class="text-center py-16 text-on-surface-variant">
          <span class="material-symbols-outlined text-5xl mb-4 block">article</span>
          <p class="font-body-lg">Brak opublikowanych artykułów.</p>
        </div>
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            v-for="article in articles"
            :key="article.uuid"
            :article="article.content"
            :slug="article.full_slug"
            :date="article.first_published_at"
          />
        </div>
      </div>
    </section>

    <CTASection
      title="Zacznij projekt"
      description="Gotowy na profesjonalną stronę lub lepszą widoczność w Google?"
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Zobacz ceny"
    />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog i poradniki — Strony WWW, SEO i Marketing | EvolaTec',
  description: 'Wskazówki i strategie dotyczące tworzenia stron internetowych, pozycjonowania SEO i marketingu online dla polskich firm.',
  ogTitle: 'Blog EvolaTec — Strony WWW, SEO i Marketing',
  ogDescription: 'Wskazówki i strategie dotyczące tworzenia stron internetowych, SEO i marketingu online.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/blog',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/blog' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      name: 'Blog EvolaTec',
      url: 'https://evolatec.pl/blog',
      description: 'Wskazówki i strategie dotyczące tworzenia stron internetowych, SEO i marketingu online.',
      publisher: {
        '@type': 'Organization',
        name: 'EvolaTec',
        url: 'https://evolatec.pl',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://evolatec.pl/blog' },
        ],
      },
    }),
  }],
})

const articles = ref<any[]>([])
const storyblokApi = useStoryblokApi()

try {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: useRoute().query._storyblok ? 'draft' : 'published',
    starts_with: 'blog',
    is_startpage: false,
  })
  articles.value = data?.stories ?? []
} catch {
  articles.value = []
}
</script>
