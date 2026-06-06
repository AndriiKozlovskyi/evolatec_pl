<template>
  <section data-nav-icon="apps" class="py-section-padding" :class="background">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="text-center max-w-2xl mx-auto mb-stack-lg">
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-4 leading-tight">{{ title }}</h2>
        <p v-if="subtitle" class="text-base sm:text-lg text-on-surface-variant">{{ subtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5" :class="variant === 'centered' ? 'max-w-5xl mx-auto' : ''">
        <component
          v-for="service in services"
          :key="service.title"
          :is="service.href ? 'a' : 'div'"
          :href="service.href"
          class="group bg-white/[0.04] border border-white/[0.07] rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.14] hover:scale-[1.02]"
          :class="variant === 'centered' ? 'text-center flex flex-col items-center' : 'flex flex-col'"
        >
          <div class="w-11 h-11 rounded-xl bg-primary/80 flex items-center justify-center mb-5 flex-shrink-0 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
            <span class="material-symbols-outlined text-xl text-white">{{ service.icon }}</span>
          </div>
          <h3 class="font-semibold text-black text-base mb-2 leading-snug">{{ service.title }}</h3>
          <p class="text-on-surface-variant text-sm leading-relaxed" :class="service.href ? 'mb-4' : ''">{{ service.description }}</p>
          <div
            v-if="service.href"
            class="flex items-center gap-1 mt-auto pt-1 text-primary group-hover:text-primary/80 transition-colors duration-200"
            :class="variant === 'centered' ? 'justify-center' : ''"
          >
            <span class="text-xs font-semibold">{{ learnMoreLabel }}</span>
            <span class="material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform duration-200">arrow_forward</span>
          </div>
        </component>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  title: string
  description: string
  icon: string
  iconBg: string
  iconColor: string
  borderColor?: string
  href?: string
}

withDefaults(defineProps<{
  title: string
  subtitle?: string
  variant?: 'default' | 'centered'
  services: Service[]
  learnMoreLabel?: string
  background?: string
}>(), {
  variant: 'default',
  learnMoreLabel: 'Learn more',
  background: '',
})
</script>
