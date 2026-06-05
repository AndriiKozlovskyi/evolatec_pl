<template>
  <section data-nav-icon="verified" class="py-8 md:py-stack-lg bg-surface-container-low border-b border-outline-variant/20">
    <div class="max-w-container-max mx-auto px-gutter flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-stack-md">
      <span v-for="company in companies" :key="company" class="font-bold text-base md:text-lg text-on-surface-variant grayscale">
        {{ company }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ companies: string[] }>()
</script>
