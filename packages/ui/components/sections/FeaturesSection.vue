<template>
  <section data-nav-icon="auto_awesome" class="py-section-padding bg-primary text-on-primary">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
        <div>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-stack-md leading-tight">{{ title }}</h2>
          <div class="space-y-stack-md">
            <FeatureItem v-for="feature in features" :key="feature.title" :icon="feature.icon" :title="feature.title" :description="feature.description" />
          </div>
        </div>
        <div class="relative min-h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <NuxtPicture
            :src="imageUrl" :alt="imageAlt"
            format="avif,webp"
            sizes="xs:360px sm:640px md:640px lg:640px xl:640px xxl:640px"
            :width="640" :height="450"
            :img-attrs="{ loading: 'lazy', decoding: 'async', class: 'absolute inset-0 w-full h-full object-cover' }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  features: Array<{ icon: string; title: string; description: string }>
  imageUrl: string
  imageAlt?: string
}>(), { imageAlt: '' })
</script>
