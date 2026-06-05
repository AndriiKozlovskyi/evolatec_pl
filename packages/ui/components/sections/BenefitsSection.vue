<template>
  <section data-nav-icon="stars" class="py-section-padding bg-white text-on-surface">
    <div class="max-w-container-max mx-auto px-gutter">
      <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-stack-lg text-center leading-tight">{{ title }}</h2>
      <div class="grid grid-cols-1 gap-stack-md" :class="gridCols">
        <template v-if="hasImages">
          <div v-for="benefit in benefits" :key="benefit.title" class="group relative rounded-3xl overflow-hidden h-72 cursor-pointer">
            <NuxtPicture
              :src="benefit.image"
              :alt="benefit.title"
              format="avif,webp"
              sizes="xs:100vw sm:100vw md:50vw lg:25vw xl:25vw xxl:25vw"
              :width="600" :height="450"
              :img-attrs="{ loading: 'lazy', decoding: 'async', class: 'absolute inset-0 w-full h-full object-cover transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform' }"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10"></div>
            <div class="relative h-full flex flex-col justify-between p-6">
              <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-white text-2xl">{{ benefit.icon }}</span>
              </div>
              <div class="[text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
                <h3 class="font-headline-md font-bold text-white mb-1">{{ benefit.title }}</h3>
                <p class="text-white/90 text-sm font-body-md leading-relaxed">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div v-for="benefit in benefits" :key="benefit.title" class="flex flex-col border border-black/20 items-center text-center p-8 rounded-xl glass-card backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
            <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{{ benefit.icon }}</span>
            <h3 class="text-headline-md font-bold mb-3">{{ benefit.title }}</h3>
            <p class="text-body-md">{{ benefit.description }}</p>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  benefits: Array<{ icon: string; title: string; description: string; image?: string }>
}>()

const hasImages = computed(() => props.benefits.some(b => b.image))
const gridCols = computed(() => props.benefits.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3')
</script>
