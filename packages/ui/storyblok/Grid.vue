<template>
  <div v-editable="blok" class="max-w-container-max mx-auto px-gutter py-section-padding">
    <div class="grid md:grid-cols-3 gap-8">
      <StoryblokComponent
        v-for="item in blok.columns"
        :key="item._uid"
        :blok="item"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
