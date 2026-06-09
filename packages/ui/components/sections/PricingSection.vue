<template>
  <section data-nav-label="Cennik" data-nav-icon="sell" class="py-section-padding relative overflow-hidden" :class="background">
    <!-- Background decoration -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10">
      <div class="max-w-container-max mx-auto px-gutter text-center mb-stack-lg">
        <span v-if="eyebrow" class="text-label-md uppercase font-bold text-primary tracking-widest mb-2 block">{{ eyebrow }}</span>
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-6 leading-tight">{{ title }}</h2>
        <p v-if="subtitle" class="text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">{{ subtitle }}</p>
      </div>

      <div
        class="max-w-container-max mx-auto px-gutter grid grid-cols-1 gap-8 lg:gap-6 items-stretch"
        :class="pricingPlans.length === 1 ? 'max-w-md' : pricingPlans.length === 2 ? 'md:grid-cols-2 max-w-3xl' : 'md:grid-cols-3'"
      >
        <PricingCard
          v-for="plan in pricingPlans"
          :key="plan.name"
          :name="plan.name"
          :price="plan.price"
          :delivery="plan.delivery"
          :badge="plan.badge"
          :features="plan.features"
          :cta="plan.cta"
          :cta-link="plan.ctaLink"
          :note="plan.note"
          :highlight="plan.highlight"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    eyebrow?: string
    background?: string
    pricingPlans: Array<{
      name: string
      price: string
      delivery?: string
      badge?: string
      features: string[]
      cta?: string
      ctaLink?: string
      note?: string
      highlight?: boolean
    }>
  }>(),
  {
    eyebrow: 'Cennik',
    background: 'bg-gradient-to-b from-surface to-surface-container-low',
  }
)
</script>
