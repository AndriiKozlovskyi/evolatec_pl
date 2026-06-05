<template>
  <div v-editable="blok" class="flex flex-col items-center text-center p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30">
    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
      <span class="material-symbols-outlined text-2xl text-primary">star</span>
    </div>
    <h3 class="font-display text-lg font-bold text-on-surface">{{ blok.name }}</h3>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
