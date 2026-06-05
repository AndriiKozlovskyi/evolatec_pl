<template>
  <section
    data-nav-label="Start"
    data-nav-icon="home"
    class="relative min-h-[calc(100svh-5rem)] md:min-h-[min(85vh,820px)] lg:min-h-[calc(100vh-5rem)] flex items-center overflow-hidden"
  >
    <!-- ─── Background ──────────────────────────────────────────────── -->
    <div class="absolute inset-0 overflow-hidden bg-[#1A103D]">
      <img
        src="/assets/hero-bg.png"
        alt=""
        aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
      />
      <!-- Bottom fade -->
      <div class="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style="background: linear-gradient(to top, rgba(26,16,61,0.7), transparent);"></div>
    </div>
    <!-- ─── End Background ──────────────────────────────────────────── -->

    <div class="relative z-10 w-full max-w-container-max mx-auto px-gutter pt-10 pb-12 md:pt-14 md:pb-14">
      <div class="max-w-2xl">
        <span class="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5 font-black text-inverse-primary">
          {{ badge }}
        </span>

        <h1 class="font-display text-4xl sm:text-5xl md:text-[3.75rem] font-extrabold text-white leading-[1.1] mb-6">
          {{ title }}
        </h1>

        <p class="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
          {{ description }}
        </p>

        <div class="flex flex-col sm:flex-row gap-3 mb-14">
          <a :href="primaryHref" class="w-full sm:w-auto">
            <BaseButton variant="secondary" size="md" class="w-full sm:w-auto">{{ primaryCTA }}</BaseButton>
          </a>
          <a :href="secondaryHref" class="w-full sm:w-auto">
            <BaseButton variant="outline" size="md" class="w-full sm:w-auto !border-white/30 !text-white hover:!bg-white/10">
              {{ secondaryCTA }}
            </BaseButton>
          </a>
        </div>

        <div class="relative pt-8">
          <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-violet-400/35 via-white/10 to-transparent"></div>
          <div class="grid grid-cols-2 sm:grid-cols-4 items-center text-center">
            <div
              v-for="(stat, i) in stats"
              :key="stat.label"
              :class="['flex flex-col gap-1.5 py-2 px-3 sm:px-6 sm:first:pl-0', i < stats.length - 1 ? 'sm:border-r sm:border-white/[0.12]' : '']"
            >
              <span class="material-symbols-outlined text-[1.1rem] leading-none text-white">{{ stat.icon }}</span>
              <div class="font-black text-[1rem] leading-none text-white">{{ stat.value }}</div>
              <div class="text-white/40 text-[0.65rem] uppercase tracking-widest">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    badge: string
    title: string
    description: string
    primaryCTA: string
    secondaryCTA: string
    primaryHref?: string
    secondaryHref?: string
    stats: Array<{ value: string; label: string; icon: string }>
  }>(),
  {
    primaryHref: '/contact',
    secondaryHref: '/pricing',
  }
)
</script>
