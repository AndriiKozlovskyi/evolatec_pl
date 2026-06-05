<template>
  <div class="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-50 flex flex-col items-end gap-3">

    <!-- Expandable channels -->
    <transition-group
      tag="div"
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-90"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-90"
      class="flex flex-col items-end gap-3"
    >
      <template v-if="open">
        <a
          v-for="(channel, i) in channels"
          :key="channel.label"
          :href="channel.href"
          :target="channel.external ? '_blank' : undefined"
          :rel="channel.external ? 'noopener' : undefined"
          :aria-label="channel.label"
          :style="{ transitionDelay: `${i * 40}ms` }"
          class="group relative w-12 h-12 rounded-full bg-white shadow-lg border border-outline-variant/30 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-200"
        >
          <component v-if="channel.svg" :is="channel.svg" />
          <span v-else class="material-symbols-outlined text-[22px]" :style="{ color: channel.color }">{{ channel.icon }}</span>

          <!-- Hover label -->
          <span class="absolute right-full mr-3 whitespace-nowrap bg-primary text-on-primary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            {{ channel.label }}
          </span>
        </a>
      </template>
    </transition-group>

    <!-- Toggle button with pulse rings -->
    <button
      @click="open = !open"
      :aria-label="open ? 'Zamknij kontakt' : 'Otwórz kontakt'"
      :aria-expanded="open"
      class="relative w-14 h-14 rounded-full bg-primary text-on-primary shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ring-4 ring-white/40 hover:ring-white/60"
    >
      <!-- Pulse rings when closed -->
      <template v-if="!open">
        <span class="absolute inset-0 rounded-full bg-primary opacity-60 animate-ping pointer-events-none"></span>
        <span class="absolute inset-0 rounded-full bg-primary/30 animate-ping pointer-events-none" style="animation-delay: 0.6s"></span>
      </template>

      <span
        class="material-symbols-outlined text-[26px] relative z-10 transition-transform duration-300"
        :class="open ? 'rotate-90' : ''"
      >
        {{ open ? 'close' : 'forum' }}
      </span>
    </button>

  </div>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { CONTACT } from '~/composables/useContact'

const open = ref(false)

const WhatsAppIcon = () => h('svg', { viewBox: '0 0 24 24', fill: '#25D366', class: 'w-[22px] h-[22px]' }, [
  h('path', { d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' }),
])

const channels = [
  { label: CONTACT.email,   icon: 'mail',  href: `mailto:${CONTACT.email}`,  color: '#EA4335' },
  { label: 'WhatsApp',      svg: WhatsAppIcon, href: CONTACT.whatsapp,        external: true },
  { label: CONTACT.phone,   icon: 'phone', href: CONTACT.phoneTel,            color: '#6d46b1' },
] as Array<{ label: string; icon?: string; svg?: any; href: string; external?: boolean; color?: string }>
</script>
