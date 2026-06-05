<template>
  <section class="py-section-padding bg-surface">
    <div class="max-w-container-max mx-auto px-gutter">
      <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-4">{{ title }}</h2>
      <p v-if="description" class="text-center font-body-lg text-on-surface-variant mb-stack-lg">{{ description }}</p>

      <div class="max-w-2xl mx-auto overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b-2 border-primary">
              <th class="text-left py-4 px-6 font-headline-md text-primary">{{ serviceLabel }}</th>
              <th class="text-right py-4 px-6 font-headline-md text-primary">{{ priceLabel }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in items"
              :key="item.name"
              class="border-b border-outline-variant/20 hover:bg-surface-container-low transition-colors"
            >
              <td class="py-4 px-6 font-body-md text-on-surface">{{ item.name }}</td>
              <td class="py-4 px-6 font-body-md text-primary font-bold text-right">{{ item.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="ctaLabel && ctaHref" class="text-center mt-10">
        <a :href="ctaHref">
          <BaseButton variant="outline" size="md">{{ ctaLabel }}</BaseButton>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description?: string
  serviceLabel?: string
  priceLabel?: string
  ctaLabel?: string
  ctaHref?: string
  items: Array<{ name: string; price: string }>
}>(), {
  serviceLabel: 'Service',
  priceLabel: 'Price',
})
</script>
