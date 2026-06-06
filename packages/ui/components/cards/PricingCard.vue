<template>
  <div
    :class="[
      'group relative p-6 sm:p-8 md:p-10 rounded-2xl flex flex-col overflow-hidden transition-all duration-500 ease-out h-full w-full',
      highlight
        ? 'bg-gradient-to-br from-primary to-primary/85 text-on-primary shadow-2xl z-10 md:scale-105 border border-on-primary-container/20'
        : 'bg-white border border-outline-variant/40 shadow-md hover:border-primary/50 hover:shadow-xl hover:-translate-y-1',
    ]"
  >
    <!-- Hover gradient for non-highlighted cards -->
    <div v-if="!highlight" class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    <!-- Glow for highlighted card -->
    <div v-if="highlight" class="absolute -inset-0.5 bg-gradient-to-br from-on-primary-container/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <div class="relative z-10 flex flex-col flex-1">
      <!-- Badge -->
      <span
        v-if="badge"
        :class="[
          'inline-flex self-start items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4',
          highlight ? 'bg-white/20 text-white' : 'bg-primary/8 text-primary',
        ]"
      >
        <span class="material-symbols-outlined text-[14px]">workspace_premium</span>
        {{ badge }}
      </span>

      <!-- Tier name -->
      <span :class="['text-label-md uppercase font-bold mb-3 block', highlight ? 'text-on-primary-container' : 'text-on-surface-variant group-hover:text-primary transition-colors duration-300']">
        {{ name }}
      </span>

      <!-- Price -->
      <span :class="['font-display text-4xl md:text-5xl mb-1 block font-black leading-none', highlight ? 'text-white' : 'text-primary']">
        {{ price }}
      </span>
      <span v-if="delivery" :class="['text-sm mb-6 block', highlight ? 'text-on-primary-container/80' : 'text-on-surface-variant']">
        {{ delivery }}
      </span>
      <span v-else class="mb-6 block"></span>

      <!-- Features -->
      <ul class="space-y-3 mb-8 flex-grow">
        <li
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start gap-3 text-sm"
        >
          <span :class="['material-symbols-outlined text-base flex-shrink-0 mt-0.5', highlight ? 'text-white' : 'text-primary']">check_circle</span>
          <span :class="highlight ? 'text-white/95' : 'text-on-surface'">{{ feature }}</span>
        </li>
      </ul>

      <!-- Note -->
      <p v-if="note" :class="['text-xs mb-4', highlight ? 'text-on-primary-container/70' : 'text-on-surface-variant']">
        {{ note }}
      </p>

      <NuxtLink :to="ctaLink || '/kontakt'" class="block w-full mt-auto">
        <BaseButton :variant="highlight ? 'secondary' : 'outline'" size="md" class="w-full">
          {{ cta || 'Uzyskaj bezpłatną wycenę' }}
        </BaseButton>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string
    price: string
    delivery?: string
    badge?: string
    features: string[]
    cta?: string
    ctaLink?: string
    note?: string
    highlight?: boolean
  }>(),
  {
    highlight: false,
  }
)
</script>
