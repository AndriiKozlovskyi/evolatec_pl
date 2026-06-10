<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-primary via-primary to-primary-container text-on-primary overflow-hidden">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative max-w-container-max mx-auto px-gutter pt-10 pb-12 md:pt-20 md:pb-20 text-center">
        <span class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-white/70 mb-4">
          <span class="material-symbols-outlined text-base">calculate</span>
          Kalkulator cen
        </span>
        <h1 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
          Kalkulator kosztów strony: ceny stron WWW, SEO i marketingu
        </h1>
        <p class="text-sm sm:text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          Oblicz koszt strony internetowej, SEO, marketingu online i projektu graficznego. Przejrzyste ceny stałe, indywidualne pakiety i wszystkie ceny jednostkowe w jednym miejscu.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="bg-surface py-8 md:py-section-padding">
      <div class="max-w-6xl mx-auto px-gutter">

        <!-- Tabs -->
        <div class="flex bg-surface-container-low rounded-full p-1 mb-8 max-w-xl mx-auto shadow-inner">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="switchTab(tab.id)"
            :class="[
              'flex-1 min-w-0 py-2.5 px-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 whitespace-nowrap min-h-[44px] transition-all duration-200',
              activeTab === tab.id
                ? 'bg-primary text-on-primary shadow-md'
                : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">{{ tab.icon }}</span>
            <span class="hidden sm:inline">{{ tab.label }}</span>
            <span class="sm:hidden">{{ tab.shortLabel }}</span>
          </button>
        </div>

        <div class="relative">

        <!-- ═══ PAKIETY ═══ -->
        <div v-show="activeTab === 'pakiety'" class="animate-fade-in-up">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div
              v-for="pkg in packages"
              :key="pkg.name"
              :class="[
                'relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg flex flex-col',
                pkg.popular ? 'border-primary shadow-md md:scale-[1.02]' : 'border-outline-variant/30',
              ]"
            >
              <div v-if="pkg.popular" class="bg-primary text-on-primary text-xs font-bold text-center py-2 tracking-widest uppercase">
                Popularne
              </div>
              <div class="p-6 md:p-7 flex flex-col flex-1">
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">{{ pkg.name }}</p>
                <p class="font-display text-3xl md:text-4xl font-black text-primary leading-none mb-1 whitespace-nowrap">{{ pkg.price }}</p>
                <p class="text-xs text-on-surface-variant mb-6">jednorazowo, netto</p>
                <ul class="space-y-2.5 mb-6 flex-1">
                  <li v-for="feat in pkg.features" :key="feat" class="flex items-start gap-2 text-sm text-on-surface">
                    <span class="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">check_circle</span>
                    {{ feat }}
                  </li>
                </ul>
                <a href="/kontakt" class="block">
                  <BaseButton :variant="pkg.popular ? 'primary' : 'outline'" size="md" class="w-full">
                    Zapytaj o ofertę
                  </BaseButton>
                </a>
              </div>
            </div>
          </div>
          <p class="text-center text-xs text-on-surface-variant mt-6">
            Indywidualne rozwiązania na zapytanie · Budżet reklamowy rozliczany oddzielnie
          </p>
        </div>

        <!-- ═══ KALKULATOR ═══ -->
        <div v-show="activeTab === 'kalkulator'" class="animate-fade-in-up">
          <div class="bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden">

            <!-- Step 1: Category -->
            <div class="p-5 md:p-7">
              <div class="flex items-center gap-3 mb-5">
                <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-black flex-shrink-0">1</div>
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest text-primary">Krok 1</p>
                  <p class="text-base font-bold text-on-surface leading-none mt-0.5">Wybierz kategorię</p>
                </div>
              </div>
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <button
                  v-for="(cat, i) in calcCategories"
                  :key="cat.id"
                  @click="selectCat(cat)"
                  :class="[
                    'group relative flex flex-col items-center text-center p-4 rounded-xl border-2 transition-all duration-200 min-h-[120px] min-w-0 w-full overflow-hidden',
                    calc.cat?.id === cat.id
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low',
                  ]"
                >
                  <span
                    v-if="calc.cat?.id === cat.id"
                    class="absolute top-2 right-2 material-symbols-outlined text-primary text-lg"
                  >check_circle</span>
                  <div
                    :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-colors',
                      calc.cat?.id === cat.id ? 'bg-primary text-on-primary' : accent(i).bg + ' ' + accent(i).text,
                    ]"
                  >
                    <span class="material-symbols-outlined text-xl">{{ cat.icon }}</span>
                  </div>
                  <p class="font-bold text-sm text-on-surface leading-tight break-words hyphens-auto w-full">{{ cat.name }}</p>
                  <p class="text-xs text-on-surface-variant mt-1 leading-snug break-words hyphens-auto w-full">{{ cat.desc }}</p>
                </button>
              </div>
            </div>

            <!-- Step 2: Type -->
            <template v-if="calc.cat">
              <div class="h-px bg-outline-variant/20 mx-5 md:mx-7"></div>
              <div class="p-5 md:p-7">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-black flex-shrink-0">2</div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-primary">Krok 2</p>
                    <p class="text-base font-bold text-on-surface leading-none mt-0.5">Wybierz typ</p>
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    v-for="type in calc.cat.types"
                    :key="type.id"
                    @click="selectType(type)"
                    :class="[
                      'group relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left min-h-[72px] min-w-0 w-full overflow-hidden',
                      calc.type?.id === type.id
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-low',
                    ]"
                  >
                    <div
                      :class="[
                        'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors',
                        calc.type?.id === type.id ? 'bg-primary text-on-primary' : 'bg-primary/10 text-primary',
                      ]"
                    >
                      <span class="material-symbols-outlined text-lg">{{ type.icon }}</span>
                    </div>
                    <div class="flex-1 min-w-0">
                      <p class="font-bold text-sm text-on-surface leading-tight break-words hyphens-auto">{{ type.name }}</p>
                      <p class="text-xs text-on-surface-variant mt-0.5 break-words hyphens-auto">{{ type.desc }}</p>
                    </div>
                    <div class="text-right flex-shrink-0">
                      <p class="text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">od</p>
                      <p class="font-display text-base font-black text-primary leading-none">{{ fmt(type.price) }} zł</p>
                    </div>
                  </button>
                </div>
              </div>
            </template>

            <!-- Step 3: Extras -->
            <template v-if="calc.type">
              <div class="h-px bg-outline-variant/20 mx-5 md:mx-7"></div>
              <div class="p-5 md:p-7">
                <div class="flex items-center gap-3 mb-5">
                  <div class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-sm font-black flex-shrink-0">3</div>
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-primary">Krok 3</p>
                    <p class="text-base font-bold text-on-surface leading-none mt-0.5">Usługi dodatkowe <span class="font-normal text-on-surface-variant">(opcjonalnie)</span></p>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="extra in calc.cat!.extras"
                    :key="extra.id"
                    @click="toggleExtra(extra)"
                    :class="[
                      'inline-flex items-center gap-2 px-3 py-2 rounded-full border-2 text-sm font-semibold transition-all duration-200',
                      isExtraSel(extra)
                        ? 'border-primary bg-primary text-on-primary shadow-sm'
                        : 'border-outline-variant/40 bg-white text-on-surface hover:border-primary/40 hover:bg-primary/5',
                    ]"
                  >
                    <span class="material-symbols-outlined text-base">{{ isExtraSel(extra) ? 'check' : extra.icon }}</span>
                    {{ extra.name }}
                    <span :class="isExtraSel(extra) ? 'text-white/85' : 'text-on-surface-variant'" class="text-xs font-bold">+{{ fmt(extra.price) }} zł</span>
                  </button>
                </div>
              </div>
            </template>

            <!-- Price summary -->
            <div v-if="calc.type" class="p-5 md:p-7 pt-0">
              <div class="relative bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl p-5 md:p-7 shadow-lg overflow-hidden">
                <!-- decorative blob -->
                <div class="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

                <div class="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p class="text-xs font-bold uppercase tracking-widest text-white/70 mb-1.5">Szacowany koszt</p>
                    <p class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-none whitespace-nowrap">
                      od {{ fmt(totalPrice) }} zł
                    </p>
                    <p class="text-xs text-white/70 mt-2">{{ priceNote }}</p>
                  </div>
                  <a href="/kontakt" class="w-full sm:w-auto">
                    <BaseButton variant="secondary" size="md" class="w-full sm:w-auto">
                      Zapytaj o ofertę
                      <span class="material-symbols-outlined text-base">arrow_forward</span>
                    </BaseButton>
                  </a>
                </div>
              </div>
            </div>
            <div v-else class="px-5 md:px-7 pb-6 text-xs text-on-surface-variant text-center">
              Wybierz kategorię i typ, aby obliczyć cenę.
            </div>

          </div>
        </div>

        <!-- ═══ CENNIK ═══ -->
        <div v-show="activeTab === 'cennik'" class="animate-fade-in-up">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div
              v-for="(section, sIdx) in singlePrices"
              :key="section.title"
              class="bg-white rounded-2xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col"
            >
              <!-- Colored accent strip -->
              <div class="h-1" :class="accent(sIdx).accent"></div>

              <div class="p-5 md:p-6 flex flex-col flex-1">
                <!-- Header -->
                <div class="flex items-center gap-3 mb-5">
                  <div
                    class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    :class="accent(sIdx).bg + ' ' + accent(sIdx).text"
                  >
                    <span class="material-symbols-outlined text-xl">{{ section.icon }}</span>
                  </div>
                  <h3 class="font-display text-xl sm:text-2xl font-black text-on-surface leading-tight">{{ section.title }}</h3>
                </div>

                <!-- Price rows -->
                <ul class="space-y-1 flex-1">
                  <li
                    v-for="row in section.rows"
                    :key="row.name"
                    class="flex items-center justify-between gap-3 py-2.5 px-3 -mx-3 rounded-lg hover:bg-surface-container-low transition-colors"
                  >
                    <span class="text-sm text-on-surface">{{ row.name }}</span>
                    <span class="text-sm sm:text-base font-black text-primary whitespace-nowrap">{{ row.price }}</span>
                  </li>
                </ul>

                <p v-if="section.note" class="text-xs text-on-surface-variant mt-4 italic">* {{ section.note }}</p>
              </div>
            </div>
          </div>
          <p class="text-center text-xs text-on-surface-variant mt-6">
            Wszystkie ceny netto · Indywidualne projekty na zapytanie
          </p>
        </div>
        </div>

      </div>
    </section>

    <!-- CTA strip -->
    <section class="bg-surface-container-low py-10 md:py-14 border-t border-outline-variant/30">
      <div class="max-w-3xl mx-auto px-gutter text-center">
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface mb-3 leading-tight">
          Twój projekt w stałej cenie — od agencji webowej
        </h2>
        <p class="text-sm sm:text-base text-on-surface-variant mb-6 max-w-xl mx-auto">
          Bezpłatna konsultacja wstępna — pomożemy Ci dobrać odpowiedni pakiet dla strony, SEO, marketingu lub designu.
        </p>
        <a href="/kontakt" class="inline-block">
          <BaseButton variant="primary" size="lg">
            <span class="material-symbols-outlined text-lg">event</span>
            Umów termin
          </BaseButton>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ile kosztuje strona internetowa? Oblicz cenę | EvolaTec',
  meta: [
    {
      name: 'description',
      content: 'Kalkulator kosztów projektów cyfrowych: oblicz przejrzyste ceny stałe za stworzenie strony, sklepu internetowego, optymalizację SEO, Google Ads i projekt graficzny — bez rejestracji, bez ukrytych kosztów.',
    },
    {
      name: 'keywords',
      content: 'kalkulator kosztów strony, ile kosztuje strona internetowa, cennik agencji, koszt strony www, koszt sklepu internetowego, ceny seo, koszt marketingu online, ceny google ads, koszt projektu graficznego, ceny agencji webowej, strona internetowa cena, sklep internetowy cena',
    },
    { property: 'og:title', content: 'Kalkulator cen: ile kosztuje strona, SEO, marketing i design? | EvolaTec' },
    {
      property: 'og:description',
      content: 'Oblicz przejrzyste ceny stałe za stronę WWW, SEO, marketing online i projekt graficzny — z kalkulatorem kosztów EvolaTec.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://evolatec.pl/kalkulator-kosztow' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/kalkulator-kosztow' }],
});

// ── Types ────────────────────────────────────────────────────────────────────
interface Extra     { id: string; icon: string; name: string; price: number }
interface CalcType  { id: string; icon: string; name: string; desc: string; price: number; note: string }
interface CalcCat   { id: string; icon: string; name: string; desc: string; types: CalcType[]; extras: Extra[] }

// ── Accent rotation (matches ProcessSection palette feel) ─────────────────────
const accentColors = [
  { bg: 'bg-sky-50',     text: 'text-sky-600',     accent: 'bg-sky-400'     },
  { bg: 'bg-emerald-50', text: 'text-emerald-600', accent: 'bg-emerald-400' },
  { bg: 'bg-violet-50',  text: 'text-violet-600',  accent: 'bg-violet-400'  },
  { bg: 'bg-amber-50',   text: 'text-amber-600',   accent: 'bg-amber-400'   },
] as const;
function accent(i: number) {
  return accentColors[i % accentColors.length]!;
}

// ── Tabs ─────────────────────────────────────────────────────────────────────
const activeTab = ref<'pakiety' | 'kalkulator' | 'cennik'>('pakiety');

function switchTab(id: 'pakiety' | 'kalkulator' | 'cennik') {
  activeTab.value = id;
}

const tabs = [
  { id: 'pakiety',    icon: 'package_2',  label: 'Pakiety',     shortLabel: 'Pakiety'   },
  { id: 'kalkulator', icon: 'calculate',  label: 'Kalkulator',  shortLabel: 'Kalkulator' },
  { id: 'cennik',     icon: 'list',       label: 'Cennik',      shortLabel: 'Cennik'    },
] as const;

// ── Packages ──────────────────────────────────────────────────────────────────
const packages = [
  {
    name: 'Landing Start',
    price: '4 200 zł',
    popular: false,
    features: [
      'Landing Page',
      'Indywidualny projekt',
      'Optymalizacja SEO',
      'Teksty SEO',
    ],
  },
  {
    name: 'Strona firmowa PRO',
    price: '12 600 zł',
    popular: true,
    features: [
      'Strona firmowa (5–20 podstron)',
      'Indywidualny projekt',
      'UI/UX Design',
      'Optymalizacja SEO',
      'Teksty SEO',
    ],
  },
  {
    name: 'Sklep Premium',
    price: '25 200 zł',
    popular: false,
    features: [
      'Sklep internetowy',
      'Indywidualny projekt',
      'UI/UX Design',
      'Optymalizacja SEO',
      'Teksty SEO',
      'Google Ads (budżet oddzielnie)',
    ],
  },
];

// ── Calculator data ───────────────────────────────────────────────────────────
const calcCategories: CalcCat[] = [
  {
    id: 'web', icon: 'language', name: 'Strona WWW', desc: 'Tworzenie i projektowanie',
    types: [
      { id: 'lp',  icon: 'draft',          name: 'Landing Page',      desc: 'Jedna strona, jeden cel', price: 2100,  note: 'jednorazowo, netto' },
      { id: 'fw',  icon: 'web',            name: 'Strona firmowa',    desc: '5–20 podstron',           price: 6300,  note: 'jednorazowo, netto' },
      { id: 'sh',  icon: 'shopping_cart',  name: 'Sklep internetowy', desc: 'Rozwiązanie e-commerce',  price: 12600, note: 'jednorazowo, netto' },
    ],
    extras: [
      { id: 'seo',      icon: 'search',    name: 'Optymalizacja SEO',        price: 1260 },
      { id: 'seotxt',   icon: 'article',   name: 'Teksty SEO (500 słów)',    price: 630  },
      { id: 'uiux',     icon: 'devices',   name: 'UI/UX Design',             price: 2100 },
      { id: 'logo',     icon: 'title',     name: 'Projekt logo',             price: 840  },
    ],
  },
  {
    id: 'seo', icon: 'trending_up', name: 'SEO', desc: 'Optymalizacja dla wyszukiwarek',
    types: [
      { id: 'audit', icon: 'zoom_in',      name: 'Audyt SEO',        desc: 'Jednorazowa analiza',    price: 420,  note: 'jednorazowo, netto' },
      { id: 'opt',   icon: 'tune',         name: 'Optymalizacja SEO', desc: 'On-page i techniczne',  price: 1260, note: 'miesięcznie, netto' },
      { id: 'local', icon: 'location_on',  name: 'Lokalne SEO',      desc: 'Google Maps i lokalnie', price: 1680, note: 'miesięcznie, netto' },
      { id: 'link',  icon: 'link',         name: 'Link building',    desc: 'Budowanie linków',       price: 420,  note: 'miesięcznie, netto' },
    ],
    extras: [
      { id: 'report',  icon: 'bar_chart',  name: 'Raport miesięczny',          price: 420 },
      { id: 'content', icon: 'article',    name: 'Teksty SEO (500 słów)',      price: 630 },
    ],
  },
  {
    id: 'marketing', icon: 'campaign', name: 'Marketing', desc: 'Google Ads i Meta Ads',
    types: [
      { id: 'gads', icon: 'ads_click', name: 'Google Ads', desc: 'Reklamy w wyszukiwarce i display', price: 1680, note: 'miesięcznie, + budżet reklamowy' },
      { id: 'meta', icon: 'groups',    name: 'Meta Ads',   desc: 'Facebook i Instagram',             price: 1260, note: 'miesięcznie, + budżet reklamowy' },
    ],
    extras: [
      { id: 'creative', icon: 'photo_camera', name: 'Kreacje i grafiki',     price: 630 },
      { id: 'report',   icon: 'pie_chart',    name: 'Raport miesięczny',     price: 420 },
    ],
  },
  {
    id: 'design', icon: 'palette', name: 'Design', desc: 'Logo, branding i UI/UX',
    types: [
      { id: 'logo',    icon: 'title',          name: 'Projekt logo',          desc: 'Profesjonalne logo',     price: 840,  note: 'jednorazowo, netto' },
      { id: 'cd',      icon: 'palette',        name: 'Identyfikacja wizualna', desc: 'CI, CD i brandbook',    price: 4200, note: 'jednorazowo, netto' },
      { id: 'uiux',    icon: 'devices',        name: 'UI/UX Design',          desc: 'Interfejs i prototypy',  price: 2100, note: 'jednorazowo, netto' },
    ],
    extras: [
      { id: 'texte',   icon: 'article',          name: 'Teksty (500 słów)',        price: 315 },
      { id: 'seotxt',  icon: 'article',          name: 'Teksty SEO (500 słów)',    price: 630 },
      { id: 'sm',      icon: 'photo_camera',     name: 'Szablony social media',    price: 630 },
    ],
  },
];

// ── Calculator state ──────────────────────────────────────────────────────────
const calc = reactive<{ cat: CalcCat | null; type: CalcType | null; extras: Extra[] }>({
  cat: null, type: null, extras: [],
});

function selectCat(cat: CalcCat) {
  calc.cat = cat; calc.type = null; calc.extras = [];
}
function selectType(type: CalcType) {
  calc.type = type; calc.extras = [];
}
function toggleExtra(extra: Extra) {
  const i = calc.extras.findIndex(e => e.id === extra.id);
  if (i > -1) calc.extras.splice(i, 1);
  else calc.extras.push(extra);
}
function isExtraSel(extra: Extra) {
  return calc.extras.some(e => e.id === extra.id);
}

const totalPrice = computed(() => {
  if (!calc.type) return 0;
  return calc.type.price + calc.extras.reduce((s, e) => s + e.price, 0);
});

const priceNote = computed(() => calc.type?.note ?? '');

function fmt(n: number) {
  return n.toLocaleString('pl-PL');
}

// ── Individual prices ─────────────────────────────────────────────────────────
const singlePrices = [
  {
    title: 'Strona WWW',
    icon: 'language',
    note: null,
    rows: [
      { name: 'Landing Page',        price: 'od 2 100 zł'  },
      { name: 'Strona firmowa',      price: 'od 6 300 zł'  },
      { name: 'Sklep internetowy',   price: 'od 12 600 zł' },
      { name: 'Aplikacja mobilna',   price: 'od 21 000 zł' },
      { name: 'Premium e-commerce',  price: 'od 25 200 zł' },
    ],
  },
  {
    title: 'SEO',
    icon: 'trending_up',
    note: null,
    rows: [
      { name: 'Audyt SEO',                price: 'od 420 zł'        },
      { name: 'Optymalizacja SEO',        price: 'od 1 260 zł / mies' },
      { name: 'Lokalne SEO',              price: 'od 1 680 zł / mies' },
      { name: 'Link building',            price: 'od 420 zł / mies' },
      { name: 'Opieka SEO',               price: 'od 1 260 zł / mies' },
      { name: 'Pakiet z linkbuildingiem', price: 'od 2 100 zł / mies' },
    ],
  },
  {
    title: 'Marketing',
    icon: 'campaign',
    note: 'Budżet reklamowy rozliczany oddzielnie',
    rows: [
      { name: 'Konsultacja marketingowa', price: 'od 380 zł / godz' },
      { name: 'Google Ads',               price: 'od 1 680 zł / mies' },
      { name: 'Meta Ads',                 price: 'od 1 260 zł / mies' },
      { name: 'Kreacje i grafiki',        price: 'od 630 zł'         },
      { name: 'Produkcja contentu',       price: 'od 1 260 zł'       },
      { name: 'Raport miesięczny',        price: 'od 420 zł / mies'  },
    ],
  },
  {
    title: 'Design & Treści',
    icon: 'palette',
    note: null,
    rows: [
      { name: 'Projekt logo',             price: 'od 840 zł'        },
      { name: 'Identyfikacja wizualna',   price: 'od 4 200 zł'      },
      { name: 'Rebranding i relaunch',    price: 'od 8 400 zł'      },
      { name: 'UI/UX Design',             price: 'od 2 100 zł'      },
      { name: 'Szablony social media',    price: 'od 630 zł'        },
      { name: 'Teksty',                   price: '0,63 zł / słowo'  },
      { name: 'Teksty SEO',               price: '1,26 zł / słowo'  },
      { name: 'Copywriting landing page', price: 'od 1 050 zł'      },
      { name: 'Kompletne treści strony',  price: 'od 2 940 zł'      },
    ],
  },
];
</script>
