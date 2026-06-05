<template>
  <NuxtLink
    :to="'/' + slug"
    v-editable="article"
    class="group flex flex-col w-full h-full overflow-hidden text-left no-underline bg-white rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
  >
    <!-- Image -->
    <div class="relative overflow-hidden rounded-t-2xl aspect-[16/9]">
      <img
        :src="`${article.image.filename}/m/640x360/`"
        :alt="article.image?.alt || article.title"
        width="640"
        height="360"
        loading="lazy"
        class="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-105"
      />
      <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-5">

      <!-- Author row -->
      <div class="flex items-center gap-1.5 mb-3">
        <span class="material-symbols-outlined text-[18px] text-primary leading-none">person</span>
        <span class="text-xs font-semibold uppercase tracking-widest text-primary">{{ article.author }}</span>
      </div>

      <!-- Title -->
      <h2 class="text-base font-black leading-snug mb-2 text-on-surface tracking-tight group-hover:text-primary transition-colors duration-200">
        {{ article.title }}
      </h2>

      <!-- Excerpt -->
      <p class="text-sm leading-relaxed line-clamp-3 flex-1 text-on-surface-variant">
        {{ article.description }}
      </p>

      <!-- Read more -->
      <div class="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
        <span class="text-xs font-semibold text-primary flex items-center gap-1">
          Czytaj więcej
          <span class="material-symbols-outlined text-[16px] leading-none transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
        </span>
        <span v-if="formattedDate" class="flex items-center gap-1 text-xs text-on-surface-variant/60">
          <span class="material-symbols-outlined text-[13px] leading-none">calendar_today</span>
          {{ formattedDate }}
        </span>
      </div>

    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({ article: Object, slug: String, date: String })

const formattedDate = computed(() => {
  if (!props.date) return ''
  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(props.date))
})
</script>
