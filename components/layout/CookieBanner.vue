<template>
  <!-- Non-blocking floating banner — page is fully scrollable and navigable -->
  <Transition name="cookie-slide">
    <div
      v-if="showBanner"
      data-cookie-banner
      role="dialog"
      aria-modal="false"
      :aria-labelledby="showCustomize ? 'cookie-prefs-title' : 'cookie-banner-title'"
      class="fixed bottom-0 left-0 right-0 z-[400] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div class="max-w-2xl mx-auto pointer-events-auto">
        <div
          :class="[
            'bg-surface rounded-2xl border border-outline-variant/20 overflow-hidden transition-all duration-300',
            bannerHighlighted
              ? 'shadow-[0_0_0_3px_theme(colors.primary),0_8px_40px_rgba(0,44,80,0.25)]'
              : 'shadow-[0_8px_40px_rgba(0,44,80,0.18)]',
          ]"
        >
          <div class="h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/40" />

          <!-- ─── View 1: Summary ──────────────────────────────── -->
          <div v-if="!showCustomize" class="px-5 py-5 sm:px-6 space-y-4">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center">
                <span class="material-symbols-outlined text-primary text-[1.2rem]">cookie</span>
              </div>
              <div>
                <p id="cookie-banner-title" class="text-sm font-bold text-on-surface">
                  Używamy plików cookie
                </p>
                <p class="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                  Używamy plików cookie, aby poprawić Twoje doświadczenia na stronie. Szczegóły w naszej
                  <a href="/polityka-prywatnosci" class="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">Polityce Prywatności</a>.
                </p>
              </div>
            </div>

            <!-- All three buttons equally styled — required by RODO (no dark patterns) -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                @click="acceptNecessary"
                class="text-xs font-semibold px-4 py-2.5 rounded-xl border border-outline-variant/50 text-on-surface hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-200"
              >
                Tylko niezbędne
              </button>
              <button
                @click="showCustomize = true"
                class="text-xs font-semibold px-4 py-2.5 rounded-xl border border-primary/40 text-primary hover:bg-primary/5 transition-all duration-200"
              >
                Ustawienia
              </button>
              <button
                @click="acceptAll"
                class="text-xs font-bold px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm"
              >
                Akceptuj wszystkie
              </button>
            </div>
          </div>

          <!-- ─── View 2: Granular preferences ───────────────────── -->
          <div v-else class="px-5 py-5 sm:px-6 space-y-4">
            <div class="flex items-center gap-2">
              <button
                @click="showCustomize = false"
                class="text-on-surface-variant hover:text-primary transition-colors p-1 -ml-1"
              >
                <span class="material-symbols-outlined text-xl">arrow_back</span>
              </button>
              <p id="cookie-prefs-title" class="text-sm font-bold text-on-surface">
                Ustawienia plików cookie
              </p>
            </div>

            <div class="space-y-2">
              <CategoryRow label="Niezbędne" description="Ustawienia językowe, status zgody. Zawsze aktywne." :locked="true" :modelValue="true" />
              <CategoryRow label="Analityczne" description="Anonimowe statystyki użytkowania do ulepszania strony." v-model="draft.analytics" />
              <CategoryRow label="Marketingowe" description="Spersonalizowane reklamy i śledzenie konwersji." v-model="draft.marketing" />
            </div>

            <div class="grid grid-cols-2 gap-2 pt-1">
              <button
                @click="acceptNecessary"
                class="text-xs font-semibold px-4 py-2.5 rounded-xl border border-outline-variant/50 text-on-surface hover:border-primary hover:text-primary transition-all duration-200"
              >
                Odrzuć wszystkie
              </button>
              <button
                @click="saveCustom(draft)"
                class="text-xs font-bold px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 active:scale-95 transition-all duration-200"
              >
                Zapisz wybór
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue';

const { stored, showBanner, bannerHighlighted, acceptAll, acceptNecessary, saveCustom } = useCookieConsent();

const showCustomize = ref(false);
const draft = reactive({ analytics: false, marketing: false });

watch(showBanner, (visible) => {
  if (visible) {
    showCustomize.value = false;
    draft.analytics = stored.value?.analytics ?? false;
    draft.marketing = stored.value?.marketing ?? false;
  }
});
</script>

<script lang="ts">
import { defineComponent, h } from 'vue';

export const CategoryRow = defineComponent({
  props: {
    label:       { type: String,  required: true },
    description: { type: String,  required: true },
    modelValue:  { type: Boolean, default: false },
    locked:      { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () => h('div', { class: 'flex items-start gap-3 p-3 rounded-xl bg-surface-container-low/60 border border-outline-variant/15' }, [
      h('div', { class: 'flex-1 min-w-0' }, [
        h('p', { class: 'text-xs font-semibold text-on-surface' }, props.label),
        h('p', { class: 'text-[11px] text-on-surface-variant leading-relaxed mt-0.5' }, props.description),
      ]),
      h('button', {
        role: 'switch',
        'aria-checked': String(props.locked || props.modelValue),
        disabled: props.locked,
        class: [
          'relative flex-shrink-0 mt-0.5 inline-flex h-5 w-9 rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
          props.locked ? 'bg-emerald-500 cursor-not-allowed'
            : props.modelValue ? 'bg-primary cursor-pointer'
            : 'bg-slate-200 hover:bg-slate-300 cursor-pointer',
        ].join(' '),
        onClick: () => !props.locked && emit('update:modelValue', !props.modelValue),
      }, [
        h('span', {
          class: ['absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200',
            (props.locked || props.modelValue) ? 'translate-x-4' : 'translate-x-0.5'].join(' '),
        }),
      ]),
    ]);
  },
});
</script>

<style scoped>
.cookie-slide-enter-active { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease; }
.cookie-slide-leave-active { transition: transform 0.3s ease, opacity 0.25s ease; }
.cookie-slide-enter-from,
.cookie-slide-leave-to     { transform: translateY(110%); opacity: 0; }
</style>
