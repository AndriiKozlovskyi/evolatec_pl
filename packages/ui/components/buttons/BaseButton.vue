<template>
  <button
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-lg font-bold uppercase tracking-wide transition-all duration-200 motion-safe:hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary',
      variantClasses,
      sizeClasses,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
  }>(),
  { variant: 'primary', size: 'md' }
)

const variantClasses = computed(() => ({
  primary:   'bg-primary text-on-primary hover:bg-primary/90 shadow-sm hover:shadow-md',
  secondary: 'bg-white text-primary shadow-md hover:shadow-lg hover:bg-white/95',
  outline:   'border-2 border-current text-primary bg-transparent hover:bg-primary/5',
})[props.variant])

const sizeClasses = computed(() => ({
  sm: 'min-h-[40px] px-5 py-2 text-sm',
  md: 'min-h-[48px] px-7 py-3 text-base',
  lg: 'min-h-[56px] px-9 py-4 text-base sm:text-lg',
})[props.size])
</script>
