<template>
  <section data-nav-icon="checklist" :class="['py-section-padding', bg === 'container-low' ? 'bg-surface-container-low' : 'bg-surface']">
    <div class="max-w-container-max mx-auto px-gutter">

      <!-- Optional centered section title -->
      <h2
        v-if="title"
        class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-primary text-center mb-stack-lg leading-tight"
      >{{ title }}</h2>

      <!-- Two-column heading blocks (each with optional per-column item list) -->
      <div
        v-if="columns?.length"
        :class="['grid md:grid-cols-2 gap-6 md:gap-8', items?.length ? 'mb-12' : '']"
      >
        <div
          v-for="col in columns"
          :key="col.heading"
          class="bg-white rounded-2xl p-6 md:p-8 border border-black/[0.05] shadow-sm flex flex-col"
        >
          <component
            :is="title ? 'h3' : 'h2'"
            class="font-display text-2xl sm:text-3xl font-black text-primary mb-4 leading-tight"
          >{{ col.heading }}</component>

          <p
            v-for="(para, i) in col.paragraphs"
            :key="i"
            :class="[
              'text-on-surface-variant leading-relaxed',
              i < (col.paragraphs?.length ?? 0) - 1 ? 'mb-3' : col.items?.length ? 'mb-6' : '',
            ]"
          >{{ para }}</p>

          <div v-if="col.items?.length" class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-auto">
            <div
              v-for="item in col.items"
              :key="item"
              class="flex items-center gap-2.5 rounded-xl bg-surface-container-low px-3.5 py-2.5 hover:bg-primary/5 transition-colors duration-200"
            >
              <span class="material-symbols-outlined text-primary text-base leading-none flex-shrink-0">
                {{ col.icon || icon }}
              </span>
              <span class="text-sm font-medium text-on-surface">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Flat item grid — centered (no columns) or full-width (below columns) -->
      <div
        v-if="items?.length"
        :class="['grid md:grid-cols-2 gap-3', !columns?.length ? 'max-w-3xl mx-auto' : '']"
      >
        <div
          v-for="item in items"
          :key="item"
          class="flex items-center gap-3.5 rounded-xl bg-white px-5 py-3.5 border border-black/[0.05] shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
        >
          <span class="material-symbols-outlined text-primary text-lg leading-none flex-shrink-0">
            {{ icon }}
          </span>
          <span class="text-sm font-semibold text-on-surface">{{ item }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
interface Column {
  heading: string
  paragraphs?: string[]
  items?: string[]
  icon?: string
}

withDefaults(
  defineProps<{
    title?: string
    columns?: Column[]
    items?: string[]
    icon?: string
    bg?: 'surface' | 'container-low'
  }>(),
  {
    bg: 'surface',
    icon: 'check_circle',
  }
)
</script>
