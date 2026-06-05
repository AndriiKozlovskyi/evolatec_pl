<template>
  <section data-nav-icon="dashboard" class="py-section-padding bg-gradient-to-br from-primary/90 via-primary to-primary/90 text-on-primary">
    <div class="max-w-container-max mx-auto px-gutter">
      <h2 class="font-headline-lg text-headline-lg text-white text-center mb-stack-lg">{{ title }}</h2>
      <div :class="gridClass">
        <component
          :is="card.href ? 'a' : 'div'"
          v-for="card in cards"
          :key="card.title"
          :href="card.href || undefined"
          class="group bg-white/[0.04] rounded-2xl p-8 border border-white/[0.08] hover:bg-blue-500/10 hover:border-blue-400/25 transition-all duration-300 hover:scale-[1.03] block"
        >
          <div class="w-14 h-14 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6 group-hover:bg-blue-500/25 group-hover:scale-110 transition-all duration-300">
            <span class="material-symbols-outlined text-white text-2xl">{{ card.icon }}</span>
          </div>
          <h3 class="font-headline-md text-white mb-3">{{ card.title }}</h3>
          <p class="font-body-md text-white/55 leading-relaxed">{{ card.description }}</p>
        </component>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Card { title: string; description: string; icon: string; href?: string }

const props = withDefaults(defineProps<{ title: string; cards: Card[]; columns?: 2 | 3 | 4 }>(), { columns: 4 })

const gridClass = computed(() => ({ 2: 'grid md:grid-cols-2 gap-gutter', 3: 'grid md:grid-cols-3 gap-gutter', 4: 'grid md:grid-cols-2 lg:grid-cols-4 gap-gutter' })[props.columns])
</script>
