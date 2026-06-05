<template>
  <section data-nav-label="CTA" data-nav-icon="send" class="py-section-padding bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-on-primary relative overflow-hidden">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-on-primary-container/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-on-primary-container/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative z-10 max-w-container-max mx-auto px-gutter text-center">
      <div class="space-y-4 md:space-y-stack-md">
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">{{ title }}</h2>
        <p class="text-base sm:text-lg md:text-headline-md opacity-90 max-w-2xl mx-auto leading-relaxed">{{ description }}</p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 md:pt-8">
          <a :href="primaryHref" class="w-full sm:w-auto">
            <BaseButton variant="secondary" size="lg" class="w-full sm:w-auto">{{ primaryCta }}</BaseButton>
          </a>
          <a :href="secondaryHref" class="w-full sm:w-auto">
            <BaseButton variant="outline" size="lg" class="w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10">{{ secondaryCta }}</BaseButton>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  primaryHref?: string
  secondaryHref?: string
}>(), {
  primaryHref: '/contact',
  secondaryHref: '/pricing',
})
</script>
