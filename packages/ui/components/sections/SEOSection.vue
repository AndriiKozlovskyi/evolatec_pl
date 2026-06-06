<template>
  <section data-nav-icon="search_check" class="py-section-padding bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-on-primary">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <!-- Content -->
        <div class="space-y-stack-md">
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">{{ title }}</h2>
          <p v-if="subtitle" class="text-body-lg opacity-90 leading-relaxed mb-8">{{ subtitle }}</p>

          <div class="space-y-4">
            <div v-for="feature in features" :key="feature" class="flex items-start gap-4 group">
              <span class="material-symbols-outlined text-[1.5rem] flex-shrink-0 text-on-primary-container group-hover:scale-125 transition-transform duration-300">check_circle</span>
              <span class="text-body-md pt-1">{{ feature }}</span>
            </div>
          </div>

          <NuxtLink :to="ctaLink" class="inline-block mt-8">
            <BaseButton variant="secondary" size="md">{{ ctaText }}</BaseButton>
          </NuxtLink>
        </div>

        <!-- Image illustration -->
        <div class="hidden md:flex justify-center items-center">
          <NuxtImg
            :src="image"
            :alt="imageAlt"
            class="w-full rounded-2xl object-cover"
            width="640"
            height="427"
            sizes="md:50vw lg:640px xl:640px"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  features: string[]
  subtitle?: string
  ctaText?: string
  ctaLink?: string
  image?: string
  imageAlt?: string
}>(), {
  subtitle: '',
  ctaText: 'Dowiedz się więcej',
  ctaLink: '/kontakt',
  image: '/assets/seo-optimization.webp',
  imageAlt: '',
})
</script>
