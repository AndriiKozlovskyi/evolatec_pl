<template>
  <div class="group relative flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
    <div class="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-on-primary-container/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div class="relative z-10">
      <span class="material-symbols-outlined text-[6rem] text-on-primary-container mb-3 block font-light">{{ icon }}</span>
      <span class="block font-bold text-white text-[1.75rem] leading-tight">{{ value }}</span>
      <span class="text-label-sm uppercase font-bold text-white/50 tracking-wide mt-2 block">{{ label }}</span>
    </div>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-on-primary-container/40 to-transparent group-hover:w-full transition-all duration-300"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: string; label: string; icon: string }>()
</script>
