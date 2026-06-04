<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Tworzenie Stron Internetowych dla Firm | EvolaTec',
  description: 'Profesjonalne strony internetowe dla firm: landing page od 2 100 zł, strona firmowa od 6 300 zł. Lighthouse 95–100, realizacja od 3 dni. Stała cena, wycena bezpłatna.',
  ogTitle: 'Tworzenie Stron Internetowych dla Firm | EvolaTec',
  ogDescription: 'Strony internetowe dla firm w Polsce: landing page od 2 100 zł, strona firmowa od 6 300 zł. Lighthouse 95–100, realizacja od 3 dni. Stała cena.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje strona internetowa dla firmy w Polsce?',
    answer: 'Strona firmowa kosztuje od 6 300 zł netto i jest gotowa w 7 dni roboczych. Landing page kosztuje od 2 100 zł netto, realizacja od 3 dni roboczych. Sklep internetowy kosztuje od 12 600 zł netto, realizacja od 14 dni. Wszystkie ceny są stałe — wycena ustalana jest przed startem projektu i nie zmienia się w trakcie.',
  },
  {
    question: 'Jaka jest różnica między landing page a stroną firmową?',
    answer: 'Landing page to jedna strona z jednym celem — najczęściej zbieranie leadów lub sprzedaż przez kampanię reklamową. Strona firmowa to wielostronicowy serwis z osobnymi podstronami dla usług, bloga i kontaktu, który buduje widoczność organiczną w Google. Landing page kosztuje od 2 100 zł i jest gotowy w 3 dni — strona firmowa kosztuje od 6 300 zł i jest gotowa w 7 dni.',
  },
  {
    question: 'WordPress czy własne rozwiązanie — co wybrać dla firmy?',
    answer: 'WordPress ma wynik Lighthouse na poziomie 40–70/100 i czas ładowania 3–8 sekund przy typowej konfiguracji z wtyczkami. Nasze strony budowane w Nuxt.js osiągają 95–100/100 i ładują się poniżej 1 sekundy. WordPress wymaga stałej obsługi wtyczek, aktualizacji i jest częstym celem ataków przez podatności w rozszerzeniach — strona bez WordPressa nie ma tej powierzchni ataku.',
  },
  {
    question: 'Jak wygląda proces tworzenia strony internetowej?',
    answer: 'Projekt przebiega w 4 etapach: bezpłatna konsultacja i wycena, projekt i design, development z SEO i GEO, testy i launch. Strona firmowa jest gotowa w 7 dni roboczych od dostarczenia treści i materiałów przez klienta. Po wdrożeniu następują 30 dni wsparcia technicznego wliczone w cenę projektu.',
  },
  {
    question: 'Jak wybrać agencję webową w Polsce?',
    answer: 'Sprawdź trzy rzeczy: czy agencja podaje stałe ceny przed podpisaniem umowy, czy pokazuje mierzalne wyniki swoich realizacji (wynik Lighthouse, czas ładowania, ruch organiczny), i czy strony działają po roku — nie tylko w dniu oddania. Agencje pracujące na szablonach i WordPressie rzadko pokazują wyniki Core Web Vitals, bo zazwyczaj nie są powodem do dumy.',
  },
]

const mainSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
      '@id': 'https://evolatec.pl/#organization',
      name: 'EvolaTec',
      url: 'https://evolatec.pl',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://evolatec.pl/#logo',
        url: 'https://evolatec.pl/logo.webp',
        contentUrl: 'https://evolatec.pl/logo.webp',
      },
      image: { '@id': 'https://evolatec.pl/#logo' },
      description: 'Agencja webowa tworząca strony internetowe, sklepy online i rozwiązania SEO dla polskich firm. Realizacja od 3 dni roboczych, Lighthouse 95–100, stała cena.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Warszawa',
        addressCountry: 'PL',
      },
      email: 'kontakt@evolatec.pl',
      areaServed: [
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'City', name: 'Warszawa' },
        { '@type': 'City', name: 'Kraków' },
        { '@type': 'City', name: 'Wrocław' },
        { '@type': 'City', name: 'Gdańsk' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'kontakt@evolatec.pl',
      },
      sameAs: [
        'https://g.page/evolatec-pl',
        'https://www.linkedin.com/company/evolatec',
      ],
      priceRange: '2100 zł – 25200 zł',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://evolatec.pl/#website',
      name: 'EvolaTec',
      url: 'https://evolatec.pl',
      description: 'Tworzenie stron internetowych dla firm w Polsce — landing page, strony firmowe, sklepy online.',
      publisher: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://evolatec.pl/#webpage',
      url: 'https://evolatec.pl',
      name: 'Tworzenie Stron Internetowych dla Firm | EvolaTec',
      description: 'Profesjonalne strony internetowe dla firm: landing page od 2 100 zł, strona firmowa od 6 300 zł. Lighthouse 95–100, realizacja od 3 dni. Stała cena, wycena bezpłatna.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
      ],
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1,
          item: {
            '@type': 'Service',
            name: 'Landing page',
            description: 'Konwersyjna strona jednoelementowa do kampanii reklamowych i generowania leadów.',
            url: 'https://evolatec.pl/landing-page',
            offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '2100', priceCurrency: 'PLN' } },
          },
        },
        {
          '@type': 'ListItem', position: 2,
          item: {
            '@type': 'Service',
            name: 'Strona firmowa',
            description: 'Wielostronicowa witryna firmowa z SEO, blogiem i CMS dla firm usługowych i startupów.',
            url: 'https://evolatec.pl/stworz-strone-firmowa',
            offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '6300', priceCurrency: 'PLN' } },
          },
        },
        {
          '@type': 'ListItem', position: 3,
          item: {
            '@type': 'Service',
            name: 'Sklep internetowy',
            description: 'E-commerce z katalogiem produktów, koszykiem i bezpieczną obsługą płatności.',
            url: 'https://evolatec.pl/sklep-internetowy',
            offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '12600', priceCurrency: 'PLN' } },
          },
        },
        {
          '@type': 'ListItem', position: 4,
          item: {
            '@type': 'Service',
            name: 'SEO optymalizacja',
            description: 'Pozycjonowanie organiczne w Google z audytem, optymalizacją on-page i linkbuildingiem.',
            url: 'https://evolatec.pl/seo',
            offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '1260', priceCurrency: 'PLN' } },
          },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqData.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak zamówić stronę internetową dla firmy — 4 etapy',
  description: 'Proces tworzenia strony internetowej w EvolaTec: od bezpłatnej konsultacji do wdrożenia.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Bezpłatna konsultacja i wycena', text: 'Omawiamy cel, zakres i budżet. Wynik: stała wycena na piśmie przed startem. Czas: 1–2 dni robocze.' },
    { '@type': 'HowToStep', position: 2, name: 'Projekt i design', text: 'Planowanie struktury stron, projekt UI. Czas: 2–3 dni robocze dla landing page, 3–5 dla strony firmowej.' },
    { '@type': 'HowToStep', position: 3, name: 'Development, SEO i GEO', text: 'Kodowanie w Vue.js i Nuxt.js, pełne on-page SEO, Schema.org JSON-LD, konfiguracja hostingu.' },
    { '@type': 'HowToStep', position: 4, name: 'Testy i launch', text: 'Sprawdzenie na wszystkich urządzeniach, weryfikacja Core Web Vitals, wdrożenie. Zaczyna się 30 dni wsparcia.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'od 3 dni', label: 'Czas realizacji',     icon: 'flash_on'  },
  { value: '95–100',   label: 'Lighthouse score',    icon: 'speed'     },
  { value: '< 1 s',    label: 'Czas ładowania',      icon: 'bolt'      },
  { value: 'Stała',    label: 'Cena przed startem',  icon: 'verified'  },
]

const includedItems = [
  { icon: 'speed',           label: 'Lighthouse 95–100/100'             },
  { icon: 'phone_iphone',    label: 'Responsive mobile-first'           },
  { icon: 'search_insights', label: 'SEO on-page wbudowane w kod'       },
  { icon: 'smart_toy',       label: 'GEO — ChatGPT, Gemini, Perplexity' },
  { icon: 'lock',            label: 'Certyfikat SSL'                    },
  { icon: 'support_agent',   label: '30 dni wsparcia po wdrożeniu'      },
]

const serviceTypes = [
  {
    name: 'Landing page',
    price: 'od 2 100 zł netto',
    delivery: 'od 3 dni',
    subpages: '1',
    cms: false,
    blog: false,
    payments: false,
    bestFor: 'Kampanie Google Ads, generowanie leadów, launche produktów',
    href: '/landing-page',
    highlight: false,
  },
  {
    name: 'Strona firmowa',
    price: 'od 6 300 zł netto',
    delivery: 'od 7 dni',
    subpages: '5–20',
    cms: true,
    blog: true,
    payments: false,
    bestFor: 'Firmy usługowe, kancelarie, kliniki, startupy',
    href: '/stworz-strone-firmowa',
    highlight: true,
  },
  {
    name: 'Sklep internetowy',
    price: 'od 12 600 zł netto',
    delivery: 'od 14 dni',
    subpages: 'bez limitu',
    cms: true,
    blog: true,
    payments: true,
    bestFor: 'Sprzedaż produktów lub usług online',
    href: '/sklep-internetowy',
    highlight: false,
  },
]

const pricingRows = [
  { service: 'Landing page',      price: 'od 2 100 zł netto',  delivery: 'od 3 dni roboczych'  },
  { service: 'Strona firmowa',    price: 'od 6 300 zł netto',  delivery: 'od 7 dni roboczych'  },
  { service: 'Sklep internetowy', price: 'od 12 600 zł netto', delivery: 'od 14 dni roboczych' },
  { service: 'Premium e-commerce',price: 'od 25 200 zł netto', delivery: 'od 30 dni roboczych' },
]

const wpRows = [
  { label: 'Czas ładowania',        wp: '3–8 sekund',                      nuxt: '< 1 sekunda'              },
  { label: 'Wynik Lighthouse',      wp: '40–70 / 100',                     nuxt: '95–100 / 100'             },
  { label: 'Core Web Vitals',       wp: 'Często niezaliczone',             nuxt: 'Bardzo dobre'             },
  { label: 'Bezpieczeństwo',        wp: 'Podatności przez wtyczki',        nuxt: 'Brak CMS, brak ataku'     },
  { label: 'Baza SEO',              wp: 'Zależna od wtyczek',              nuxt: 'Zoptymalizowana w kodzie' },
  { label: 'Nakład na utrzymanie',  wp: 'Wysoki — wtyczki, aktualizacje',  nuxt: 'Minimalny'                },
  { label: 'Skalowalność',          wp: 'Ograniczona',                     nuxt: 'Nieograniczona'           },
]

const processSteps = [
  {
    icon: 'mail',
    title: 'Bezpłatna konsultacja i wycena',
    description: 'Omawiamy cel, zakres i budżet. Wynik: stała wycena na piśmie przed startem. Czas: 1–2 dni robocze.',
  },
  {
    icon: 'design_services',
    title: 'Projekt i design',
    description: 'Planowanie struktury stron, projekt UI w oparciu o Twoje materiały i branżę. 2–3 dni robocze dla landing page, 3–5 dla strony firmowej.',
  },
  {
    icon: 'code',
    title: 'Development, SEO i GEO',
    description: 'Kodowanie w Vue.js i Nuxt.js, pełne on-page SEO, Schema.org JSON-LD dla asystentów AI, konfiguracja hostingu.',
  },
  {
    icon: 'rocket_launch',
    title: 'Testy i launch',
    description: 'Sprawdzenie na wszystkich urządzeniach, weryfikacja Core Web Vitals, wdrożenie na serwer produkcyjny. Zaczyna się 30 dni wsparcia.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Agencja webowa — Polska"
      title="Tworzymy strony internetowe, które pracują na Twój biznes"
      description="Strony firmowe, landing page i sklepy online budowane w Nuxt.js — szybkie, zoptymalizowane pod SEO i GEO, ze stałą ceną ustaloną przed startem."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz ceny"
      primary-href="/kontakt"
      secondary-href="/kalkulator-kosztow"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb — visually hidden, semantic only on homepage -->
      <nav aria-label="breadcrumb" class="sr-only">
        <ol>
          <li aria-current="page">Strona główna</li>
        </ol>
      </nav>

      <article>

        <!-- ── Section 1: Co dostajesz ──────────────────────────────────── -->
        <section
          aria-labelledby="section-included"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

              <!-- Copy -->
              <div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">check_circle</span>
                  Bez ukrytych pozycji
                </span>

                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co dostajesz w każdym projekcie — bez dopłat
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Większość firm zamawiających stronę po raz pierwszy odkrywa po fakcie, że "cena bazowa" nie zawierała SSL, pozycjonowania ani wersji mobilnej. To nie jest złośliwość — to model biznesowy, który działa, bo kupujący nie wiedzą o co pytać.
                  </p>
                  <p>
                    W każdym projekcie wychodzi strona z wynikiem <strong class="text-on-surface">Lighthouse 95–100/100</strong> — mierzonym w Google PageSpeed Insights, sprawdzalnym samodzielnie w 30 sekund po wdrożeniu. Do tego: responsywny projekt w podejściu mobile-first, certyfikat SSL, formularz kontaktowy i SEO wbudowane w kod — meta tagi, semantyczna struktura nagłówków, dane strukturalne Schema.org.
                  </p>
                  <p>
                    <strong class="text-on-surface">GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu.</strong> Struktury JSON-LD dla FAQ, usług i firmy lokalnej sprawiają, że asystent AI może zacytować Twoją firmę jako odpowiedź na zapytanie zakupowe. Jeszcze rok temu to była osobna usługa za kilkaset złotych miesięcznie.
                  </p>
                  <p>
                    Po wdrożeniu każdy projekt obejmuje <strong class="text-on-surface">30 dni wsparcia technicznego</strong> — termin zapisany w umowie, nie obietnica.
                  </p>
                </div>
              </div>

              <!-- Included items grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="item in includedItems"
                  :key="item.label"
                  class="flex items-center gap-3 bg-white rounded-xl border border-outline-variant/30 px-5 py-4 ambient-shadow"
                >
                  <div class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">{{ item.icon }}</span>
                  </div>
                  <span class="text-sm font-semibold text-on-surface leading-snug">{{ item.label }}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: Jaki typ strony ──────────────────────────────── -->
        <section
          aria-labelledby="section-types"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2
                id="section-types"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Jaki typ strony potrzebujesz?
              </h2>
              <p class="text-on-surface-variant">
                Trzy typy stron, trzy różne cele. Wybór złego modelu kosztuje albo w nadpłacie, albo w tym, że strona nie robi tego, czego potrzebujesz.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/4" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface" scope="col">Landing page</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Strona firmowa</th>
                    <th class="text-center p-4 font-bold text-on-surface" scope="col">Sklep internetowy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-outline-variant/20 bg-white">
                    <td class="p-4 font-semibold text-on-surface">Cena od</td>
                    <td class="p-4 text-center text-on-surface">2 100 zł netto</td>
                    <td class="p-4 text-center text-primary font-bold bg-primary/5">6 300 zł netto</td>
                    <td class="p-4 text-center text-on-surface">12 600 zł netto</td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-surface-container-low/40">
                    <td class="p-4 font-semibold text-on-surface">Czas realizacji</td>
                    <td class="p-4 text-center text-on-surface-variant">od 3 dni</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">od 7 dni</td>
                    <td class="p-4 text-center text-on-surface-variant">od 14 dni</td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-white">
                    <td class="p-4 font-semibold text-on-surface">Liczba podstron</td>
                    <td class="p-4 text-center text-on-surface-variant">1</td>
                    <td class="p-4 text-center text-on-surface bg-primary/5">5–20</td>
                    <td class="p-4 text-center text-on-surface-variant">bez limitu</td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-surface-container-low/40">
                    <td class="p-4 font-semibold text-on-surface">CMS — edycja treści</td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-outline text-lg" aria-label="nie">remove</span></td>
                    <td class="p-4 text-center bg-primary/5"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-white">
                    <td class="p-4 font-semibold text-on-surface">Blog / aktualności</td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-outline text-lg" aria-label="nie">remove</span></td>
                    <td class="p-4 text-center bg-primary/5"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-surface-container-low/40">
                    <td class="p-4 font-semibold text-on-surface">Koszyk i płatności</td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-outline text-lg" aria-label="nie">remove</span></td>
                    <td class="p-4 text-center bg-primary/5"><span class="material-symbols-outlined text-outline text-lg" aria-label="nie">remove</span></td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                  </tr>
                  <tr class="bg-white">
                    <td class="p-4 font-semibold text-on-surface">Najlepiej dla</td>
                    <td class="p-4 text-center text-on-surface-variant text-xs leading-relaxed">Kampanie Google Ads, generowanie leadów</td>
                    <td class="p-4 text-center text-primary text-xs font-medium leading-relaxed bg-primary/5">Firmy usługowe, kancelarie, startupy</td>
                    <td class="p-4 text-center text-on-surface-variant text-xs leading-relaxed">Sprzedaż produktów lub usług online</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-4 mb-8">
              <NuxtLink
                v-for="type in serviceTypes"
                :key="type.name"
                :to="type.href"
                class="block rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                :class="type.highlight
                  ? 'bg-primary border-primary shadow-lg text-on-primary'
                  : 'bg-white border-outline-variant/30 ambient-shadow'"
              >
                <div class="flex items-start justify-between gap-4 mb-4">
                  <h3 class="font-bold text-lg leading-tight" :class="type.highlight ? 'text-white' : 'text-on-surface'">
                    {{ type.name }}
                  </h3>
                  <span
                    v-if="type.highlight"
                    class="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-white/20 text-white whitespace-nowrap"
                  >Najpopularniejszy</span>
                </div>
                <p class="font-black text-xl mb-1" :class="type.highlight ? 'text-white' : 'text-primary'">{{ type.price }}</p>
                <p class="text-sm mb-4" :class="type.highlight ? 'text-white/70' : 'text-on-surface-variant'">{{ type.delivery }} roboczych</p>
                <p class="text-xs leading-relaxed" :class="type.highlight ? 'text-white/80' : 'text-on-surface-variant'">{{ type.bestFor }}</p>
              </NuxtLink>
            </div>

            <p class="text-sm text-on-surface-variant text-center">
              Nie jesteś pewien, który wariant pasuje do Twojego celu?
              <NuxtLink to="/kalkulator-kosztow" class="text-primary font-semibold hover:underline">Sprawdź kalkulator kosztów</NuxtLink>
              — bez podawania danych kontaktowych.
            </p>

          </div>
        </section>

        <!-- ── Section 3: Ceny i terminy ────────────────────────────────── -->
        <section
          aria-labelledby="section-prices"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Cennik</span>
              <h2
                id="section-prices"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Tworzenie stron internetowych — ceny i terminy realizacji
              </h2>
              <p class="text-on-surface-variant">
                Brak widocznych cen na stronie agencji to sygnał ostrzegawczy. Jeśli agencja ukrywa liczby, zazwyczaj dlatego, że zależy jej na rozmowie przed ofertą. Nasze ceny są stałe i publiczne.
              </p>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in pricingRows"
                :key="row.service"
                class="bg-white rounded-xl border border-outline-variant/30 p-4 flex items-center justify-between gap-3"
              >
                <div>
                  <p class="font-bold text-on-surface">{{ row.service }}</p>
                  <p class="text-xs text-on-surface-variant mt-0.5 flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm" aria-hidden="true">schedule</span>
                    {{ row.delivery }}
                  </p>
                </div>
                <p class="text-primary font-black text-lg whitespace-nowrap">{{ row.price }}</p>
              </div>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block mb-stack-lg rounded-xl overflow-hidden border border-outline-variant/30">
              <table class="w-full text-base">
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-primary/20">
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Usługa</th>
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Cena od</th>
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Czas realizacji</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in pricingRows"
                    :key="row.service"
                    class="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/30'"
                  >
                    <td class="p-4 font-medium text-on-surface">{{ row.service }}</td>
                    <td class="p-4 font-bold text-primary text-lg">{{ row.price }}</td>
                    <td class="p-4 text-on-surface-variant">{{ row.delivery }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="max-w-2xl mx-auto space-y-4 text-on-surface-variant">
              <p>
                <strong class="text-on-surface">Strona firmowa kosztuje od 6 300 zł netto i jest gotowa w 7 dni roboczych</strong> od dostarczenia treści i materiałów. To cena stała — wycena jest ustalana przed podpisaniem umowy i nie zmienia się w trakcie projektu. Nie ma osobnych pozycji za SSL, GEO, responsywność ani podstawowe SEO — to wszystko jest wliczone.
              </p>
              <p>
                Dla projektów wykraczających poza powyższe ramy — integracje z ERP, niestandardowy checkout, rozbudowana architektura backendowa — wycenę przygotowujemy bezpłatnie po krótkiej rozmowie technicznej.
              </p>
            </div>

            <div class="text-center mt-10">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt swojej strony</BaseButton>
              </NuxtLink>
            </div>

          </div>
        </section>

        <!-- ── Section 4: Dlaczego Nuxt.js ──────────────────────────────── -->
        <section
          aria-labelledby="section-nuxt"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2
                id="section-nuxt"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Dlaczego Nuxt.js — nie WordPress
              </h2>
            </div>

            <div class="max-w-3xl mx-auto space-y-5 text-on-surface-variant mb-stack-lg">
              <p>
                Gdy zapytasz dziesięć polskich agencji o ofertę na stronę firmową, osiem wróci z wyceną na WordPress. To wybór, który ma swoje uzasadnienie — WordPress jest wszędzie, każdy go zna, łatwo znaleźć kogoś do utrzymania. Problem w tym, że te trzy zalety są jednocześnie jego największymi wadami.
              </p>
              <p>
                WordPress oparty jest o dynamiczne generowanie stron z bazy danych i system wtyczek, który rozszerza każdą funkcjonalność. Przy ponad 60 000 dostępnych wtyczek, każda z osobna to potencjalna luka bezpieczeństwa i kolejna rzecz wymagająca aktualizacji. Wynik Lighthouse typowej witryny WordPress wynosi <strong class="text-on-surface">40–70/100</strong>. Nasze strony budowane w Nuxt.js osiągają <strong class="text-on-surface">95–100/100</strong> — nie dlatego, że "się staramy", ale dlatego, że architektura SSR i brak wtyczek sprawia, że tak po prostu wychodzi.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">WordPress</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">EvolaTec (Nuxt.js)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in wpRows"
                    :key="row.label"
                    class="border-b border-outline-variant/20"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'"
                  >
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.wp }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.nuxt }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in wpRows"
                :key="row.label"
                class="bg-white rounded-xl border border-outline-variant/30 p-4"
              >
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">WordPress</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.wp }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">EvolaTec</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.nuxt }}</p>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-xs text-center text-on-surface-variant mb-stack-lg">
              Dane oparte na pomiarach Google PageSpeed Insights i Lighthouse dla typowych witryn w obu technologiach.
            </p>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Jeśli potrzebujesz możliwości samodzielnej edycji treści bez programisty — integrujemy <strong class="text-on-surface">Storyblok CMS</strong>, który daje ten sam wygodny panel administracyjny bez bagażu WordPress. Klient edytuje teksty i zdjęcia przez przeglądarkę, kod pozostaje czysty.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak pracujemy"
          title="Jak wygląda tworzenie strony internetowej — 4 etapy"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ─────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o tworzenie stron www dla firm"
          :faqs="faqData"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Uzyskaj bezpłatną wycenę w 24 godziny"
      description="Opisz projekt w kilku zdaniach — wracamy ze stałą ceną i terminem realizacji przed podpisaniem jakiejkolwiek umowy."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
