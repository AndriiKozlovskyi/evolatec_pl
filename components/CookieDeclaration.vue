<template>
  <div class="space-y-8">

    <!-- Current consent status -->
    <div v-if="stored" class="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
      <div class="flex items-start gap-3">
        <span class="material-symbols-outlined text-emerald-600 text-xl flex-shrink-0 mt-0.5">verified</span>
        <div class="flex-1 min-w-0 space-y-1">
          <p class="text-sm font-semibold text-emerald-800">Zgoda udzielona</p>
          <p class="text-xs text-emerald-700">
            Data: <span class="font-mono">{{ consentDate }}</span>
          </p>
          <div class="flex flex-wrap gap-2 pt-1">
            <span class="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Niezbędne
            </span>
            <span
              :class="stored.analytics
                ? 'bg-primary/10 text-primary border-primary/20'
                : 'bg-slate-100 text-slate-500 border-slate-200 line-through'"
              class="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border"
            >
              Analityczne
            </span>
            <span
              :class="stored.marketing
                ? 'bg-primary/10 text-primary border-primary/20'
                : 'bg-slate-100 text-slate-500 border-slate-200 line-through'"
              class="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border"
            >
              Marketingowe
            </span>
          </div>
        </div>
        <button
          @click="openPreferences"
          class="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Zmień
        </button>
      </div>
    </div>

    <div v-else class="p-4 rounded-xl bg-amber-50 border border-amber-200">
      <div class="flex items-start gap-3">
        <span class="material-symbols-outlined text-amber-600 text-xl flex-shrink-0">info</span>
        <div class="flex-1">
          <p class="text-sm font-semibold text-amber-800">Brak zapisanej zgody</p>
          <p class="text-xs text-amber-700 mt-0.5">Twoje preferencje dotyczące plików cookie nie zostały jeszcze ustawione.</p>
        </div>
        <button
          @click="openPreferences"
          class="flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Ustaw preferencje
        </button>
      </div>
    </div>

    <!-- Cookie table -->
    <div>
      <h3 class="text-base font-bold text-on-surface mb-1">
        Pliki cookie używane na tej stronie
      </h3>
      <p class="text-sm text-on-surface-variant mb-4">
        Ta strona używa wyłącznie niezbędnych technicznie plików cookie przechowywanych w localStorage Twojej przeglądarki. Żadne dane nie są przekazywane stronom trzecim.
      </p>

      <div class="rounded-xl border border-outline-variant/20 overflow-hidden">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-surface-container-low text-left">
              <th class="px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Cookie</th>
              <th class="px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wide hidden sm:table-cell">Dostawca</th>
              <th class="px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wide">Cel</th>
              <th class="px-4 py-3 text-xs font-semibold text-on-surface-variant uppercase tracking-wide hidden md:table-cell">Czas trwania</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/10">
            <tr v-for="cookie in cookies" :key="cookie.name" class="hover:bg-surface-container-low/50 transition-colors">
              <td class="px-4 py-3 font-mono text-xs text-primary font-medium align-top">{{ cookie.name }}</td>
              <td class="px-4 py-3 text-xs text-on-surface-variant hidden sm:table-cell align-top">{{ cookie.provider }}</td>
              <td class="px-4 py-3 text-xs text-on-surface align-top">{{ cookie.purpose }}</td>
              <td class="px-4 py-3 text-xs text-on-surface-variant hidden md:table-cell align-top whitespace-nowrap">{{ cookie.duration }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { stored, openPreferences } = useCookieConsent();

const consentDate = computed(() => {
  if (!stored.value?.ts) return '—';
  return new Date(stored.value.ts).toLocaleString('pl-PL', { dateStyle: 'medium', timeStyle: 'short' });
});

const cookies = [
  {
    name: 'evolatec-cookie-consent',
    provider: 'evolatec.pl',
    purpose: 'Przechowuje zgodę na pliki cookie wraz ze znacznikiem czasu i wybranymi kategoriami.',
    duration: '1 rok (HTTP cookie)',
  },
];
</script>
