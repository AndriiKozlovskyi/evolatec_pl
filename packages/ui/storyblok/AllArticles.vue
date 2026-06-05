<template>
  <section v-editable="blok" class="py-section-padding bg-surface-container-low relative overflow-hidden">

    <!-- Soft bg decorations -->
    <div class="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" aria-hidden="true" />
    <div class="absolute -bottom-40 -left-40 w-[480px] h-[480px] rounded-full bg-primary/[0.06] blur-3xl pointer-events-none" aria-hidden="true" />

    <div class="max-w-container-max mx-auto px-gutter relative z-10">

      <!-- Section header -->
      <div class="text-center mb-14">
        <!-- Badge with live dot -->
        <div class="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 text-primary px-4 py-2 rounded-full mb-7 text-xs font-bold uppercase tracking-widest">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Blog
        </div>

        <!-- Gradient headline -->
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight bg-gradient-to-br from-on-surface to-primary bg-clip-text text-transparent">
          {{ blok.headline }}
        </h2>

        <!-- Decorative divider -->
        <div class="flex items-center justify-center gap-3 mt-6 mb-5">
          <div class="h-px w-16 bg-gradient-to-r from-transparent to-primary/30"></div>
          <span class="material-symbols-outlined text-primary/40 text-[18px] leading-none">auto_awesome</span>
          <div class="h-px w-16 bg-gradient-to-l from-transparent to-primary/30"></div>
        </div>

        <!-- Subtitle -->
        <p class="text-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed">
          {{ isEnglish
            ? 'Insights, strategies and practical tips for your digital success.'
            : 'Tipps, Strategien und Einblicke rund um Webdesign, SEO und digitales Wachstum.'
          }}
        </p>
      </div>

      <!-- Empty state -->
      <div v-if="!articles.length" class="text-center py-16 text-on-surface-variant">
        <span class="material-symbols-outlined text-5xl mb-4 block">article</span>
        <p>{{ isEnglish ? 'No articles yet.' : 'Noch keine Artikel.' }}</p>
      </div>

      <template v-else>

        <!-- Featured article -->
        <NuxtLink
          v-if="featured && featured.content.image?.filename"
          :to="'/' + featured.full_slug"
          class="group block mb-10 rounded-3xl overflow-hidden bg-white border border-outline-variant/30 shadow-md hover:shadow-2xl transition-all duration-500 md:grid md:grid-cols-[3fr_2fr]"
        >
          <!-- Image -->
          <div class="relative overflow-hidden aspect-[16/9] md:aspect-auto md:min-h-[320px]">
            <img
              :src="`${featured.content.image.filename}/m/1200x675/`"
              :alt="featured.content.image.alt || featured.content.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          <!-- Content -->
          <div class="flex flex-col justify-center gap-5 p-8 xl:p-12">
            <span class="inline-flex items-center gap-1.5 w-fit text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              <span class="material-symbols-outlined text-sm leading-none">star</span>
              {{ isEnglish ? 'Featured' : 'Empfohlen' }}
            </span>

            <h3 class="font-display text-2xl sm:text-3xl font-black text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors duration-300">
              {{ featured.content.title }}
            </h3>

            <p v-if="featured.content.description" class="text-base text-on-surface-variant leading-relaxed line-clamp-3">
              {{ featured.content.description }}
            </p>

            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-on-surface-variant">
              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] leading-none text-primary">person</span>
                <strong class="font-semibold text-on-surface">{{ featured.content.author }}</strong>
              </span>
              <span v-if="featured.first_published_at" class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px] leading-none">calendar_today</span>
                {{ formatDate(featured.first_published_at) }}
              </span>
            </div>

            <span class="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              {{ isEnglish ? 'Read article' : 'Artikel lesen' }}
              <span class="material-symbols-outlined text-[18px] leading-none transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
            </span>
          </div>
        </NuxtLink>

        <!-- Grid of remaining articles -->
        <div v-if="remaining.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard
            v-for="article in remaining"
            :key="article.uuid"
            :article="article.content"
            :slug="article.full_slug"
            :date="article.first_published_at"
          />
        </div>

      </template>

      <!-- View all -->
      <div class="text-center mt-14">
        <NuxtLink
          :to="isEnglish ? '/en/blog' : '/blog'"
          class="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-on-primary transition-all duration-200"
        >
          {{ isEnglish ? 'View all articles' : 'Alle Artikel ansehen' }}
          <span class="material-symbols-outlined text-[18px] leading-none">arrow_forward</span>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })

const { isEnglish } = useLanguageSwitcher()
const articles = ref([])
const storyblokApi = useStoryblokApi()

try {
  const { data } = await storyblokApi.get('cdn/stories', {
    version: useRoute().query._storyblok ? 'draft' : 'published',
    starts_with: 'blog',
    is_startpage: false,
  })
  articles.value = data?.stories ?? []
} catch (error) {
  console.error('Failed to fetch Storyblok articles:', error)
  articles.value = []
}

const hasFeatured = computed(() => !!articles.value[0]?.content?.image?.filename)
const featured = computed(() => articles.value[0] ?? null)
const remaining = computed(() => hasFeatured.value ? articles.value.slice(1) : articles.value)

function formatDate(iso) {
  if (!iso) return ''
  return new Intl.DateTimeFormat(isEnglish.value ? 'en-GB' : 'de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}
</script>
