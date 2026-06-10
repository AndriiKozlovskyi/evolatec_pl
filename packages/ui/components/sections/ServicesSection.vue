<template>
  <section data-nav-icon="apps" class="py-section-padding" :class="background">
    <div class="max-w-container-max mx-auto px-gutter">
      <div class="text-center max-w-2xl mx-auto mb-stack-lg">
        <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-4 leading-tight">{{ title }}</h2>
        <p v-if="subtitle" class="text-base sm:text-lg text-on-surface-variant">{{ subtitle }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" :class="variant === 'centered' ? 'max-w-5xl mx-auto' : ''">
        <component
          v-for="service in services"
          :key="service.title"
          :is="service.href ? 'a' : 'div'"
          :href="service.href"
          class="group bg-white rounded-2xl p-7 shadow-sm border border-black/[0.06] transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col"
          :class="variant === 'centered' ? 'items-center text-center' : ''"
        >
          <div
            class="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
            :class="service.iconBg ?? 'bg-primary/10'"
          >
            <span
              class="material-symbols-outlined text-xl"
              :class="service.iconColor ?? 'text-primary'"
            >{{ service.icon }}</span>
          </div>
          <h3 class="font-bold text-on-surface text-base mb-2 leading-snug">{{ service.title }}</h3>
          <p class="text-on-surface-variant text-sm leading-relaxed flex-1" :class="service.href ? 'mb-4' : ''">{{ service.description }}</p>
          <div
            v-if="service.href"
            class="flex items-center gap-1 mt-auto pt-2 text-primary group-hover:gap-2 transition-all duration-200"
            :class="variant === 'centered' ? 'justify-center' : ''"
          >
            <span class="text-xs font-semibold">{{ learnMoreLabel }}</span>
            <span class="material-symbols-outlined text-xs">arrow_forward</span>
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
  iconBg?: string
  iconColor?: string
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
