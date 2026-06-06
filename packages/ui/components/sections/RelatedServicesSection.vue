<template>
  <section class="py-section-padding border-t border-outline-variant/30" :class="background">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="text-center mb-stack-lg">
        <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">{{ eyebrow }}</span>
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface leading-tight">{{ title }}</h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <a
          v-for="service in services"
          :key="service.href"
          :href="service.href"
          class="group bg-white rounded-2xl p-6 border border-outline-variant/20 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <div class="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors duration-300">
            <span class="material-symbols-outlined text-primary text-[24px]">{{ service.icon }}</span>
          </div>
          <h3 class="font-display font-bold text-on-surface mb-2 leading-tight group-hover:text-primary transition-colors duration-200">{{ service.title }}</h3>
          <p class="text-sm text-on-surface-variant leading-relaxed flex-1 mb-4">{{ service.description }}</p>
          <div class="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
            <span class="text-sm font-bold text-primary">{{ service.price }}</span>
            <span class="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all duration-200">
              {{ cta }}
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title?: string
  cta?: string
  background?: string
  services: Array<{ icon: string; title: string; description: string; price: string; href: string }>
}>(), {
  eyebrow: 'Related services',
  title: 'You might also be interested in',
  cta: 'Learn more',
  background: 'bg-surface-container-low',
})
</script>
