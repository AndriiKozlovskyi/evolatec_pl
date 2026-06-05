<template>
  <section data-nav-icon="hub" class="relative py-section-padding overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-primary-container"></div>

    <div class="relative max-w-container-max mx-auto px-gutter">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span v-if="eyebrow" class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm font-medium backdrop-blur-md mb-6">
          <span v-if="eyebrowIcon" class="material-symbols-outlined text-[18px]">{{ eyebrowIcon }}</span>
          {{ eyebrow }}
        </span>
        <h2 class="font-headline-xl text-white mb-6">{{ title }}</h2>
        <p v-if="description" class="font-body-lg text-white/70">{{ description }}</p>
      </div>

      <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <NuxtLink
          v-for="card in cards"
          :key="card.to"
          :to="card.to"
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 ambient-shadow"
        >
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div class="relative w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
            <span class="material-symbols-outlined text-white text-[28px]">{{ card.icon }}</span>
          </div>
          <div class="relative">
            <h3 class="font-headline-md text-white mb-3">{{ card.title }}</h3>
            <p class="font-body-md text-white/70 mb-5 leading-relaxed">{{ card.description }}</p>
            <div class="flex items-center gap-2 text-white font-medium">
              {{ learnMoreLabel }}
              <span class="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  eyebrow?: string
  eyebrowIcon?: string
  description?: string
  learnMoreLabel?: string
  cards: Array<{ to: string; icon: string; title: string; description: string }>
}>(), {
  learnMoreLabel: 'Learn more',
})
</script>
