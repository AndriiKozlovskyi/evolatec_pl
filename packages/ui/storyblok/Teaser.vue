<template>
  <div v-editable="blok" class="bg-primary/5 border border-primary/20 rounded-2xl px-gutter py-12 text-center">
    <h2 v-if="blok.headline" class="font-display text-3xl font-black text-on-surface mb-4 tracking-tight">
      {{ blok.headline }}
    </h2>
    <p v-if="blok.description" class="text-on-surface-variant text-lg max-w-xl mx-auto">
      {{ blok.description }}
    </p>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
