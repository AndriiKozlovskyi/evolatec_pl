<template>
  <section data-nav-icon="verified" class="relative py-section-padding bg-surface-container-low overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.04] blur-[120px] pointer-events-none"></div>

    <div class="relative max-w-container-max mx-auto px-gutter">
      <div v-if="eyebrow || title" class="text-center max-w-2xl mx-auto mb-stack-lg">
        <span v-if="eyebrow" class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-5">
          <span v-if="eyebrowIcon" class="material-symbols-outlined text-[18px]">{{ eyebrowIcon }}</span>
          {{ eyebrow }}
        </span>
        <h2 v-if="title" class="font-headline-lg text-primary leading-tight">{{ title }}</h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <div
          v-for="block in blocks"
          :key="block.title"
          class="group relative bg-surface rounded-3xl p-10 border border-outline-variant/30 ambient-shadow hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden"
        >
          <div class="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-primary to-primary-container rounded-b-full"></div>
          <div class="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/5 blur-[60px] pointer-events-none"></div>

          <div class="relative">
            <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
              <span class="material-symbols-outlined text-primary text-2xl">{{ block.icon }}</span>
            </div>

            <h3 class="font-headline-lg text-primary mb-5 leading-tight">{{ block.title }}</h3>

            <div class="space-y-4 mb-7">
              <p v-for="(para, i) in block.paragraphs" :key="i" class="font-body-lg text-on-surface-variant">{{ para }}</p>
            </div>

            <div v-if="block.tags?.length" class="flex flex-wrap gap-2 pt-6 border-t border-outline-variant/20">
              <span
                v-for="tag in block.tags"
                :key="tag"
                class="px-3 py-1.5 rounded-full bg-primary/8 text-primary text-xs font-semibold"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow?: string
  eyebrowIcon?: string
  title?: string
  blocks: Array<{
    icon: string
    title: string
    paragraphs: string[]
    tags?: string[]
  }>
}>()
</script>
