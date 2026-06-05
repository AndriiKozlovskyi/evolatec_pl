<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Tworzenie sklepów internetowych dla firm | EvolaTec',
  description: 'Tworzenie sklepów internetowych od 12 600 zł netto, realizacja od 14 dni. Shopify lub sklep własny w Nuxt, płatności online, SEO i GEO w cenie. Stała wycena.',
  ogTitle: 'Tworzenie sklepów internetowych dla firm | EvolaTec',
  ogDescription: 'Sklep internetowy od 12 600 zł netto, realizacja od 14 dni. Shopify lub sklep własny w Nuxt, płatności online, SEO i GEO w cenie.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/sklep-internetowy',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje sklep internetowy?',
    answer: 'Sklep internetowy kosztuje od 12 600 zł netto, realizacja od 14 dni roboczych — to wariant na Shopify. Sklep budowany od podstaw w Nuxt.js, z niestandardowymi integracjami, to premium e-commerce od 25 200 zł netto, realizacja od 30 dni roboczych. Obie ceny są stałe i ustalane przed startem.',
  },
  {
    question: 'Czym różni się sklep na Shopify od własnego sklepu internetowego?',
    answer: 'Shopify to gotowa platforma — rusza szybciej (od 14 dni) i taniej (od 12 600 zł), ale wiąże się z miesięcznym abonamentem i ograniczeniami platformy. Sklep własny w Nuxt.js (od 25 200 zł, od 30 dni) daje pełną kontrolę, dowolne integracje i tylko koszt hostingu, ale wymaga większego budżetu na start. Shopify wystarcza większości firm; sklep własny opłaca się przy nietypowych procesach i dużej skali.',
  },
  {
    question: 'Czy można prowadzić sklep internetowy bez rejestracji działalności?',
    answer: 'Tak, w Polsce można prowadzić sprzedaż w ramach działalności nierejestrowanej, jeśli miesięczny przychód nie przekracza ustawowego limitu — sklep może wtedy działać na osobę fizyczną. Technicznie sklep budujemy identycznie; różnica dotyczy formy rozliczeń i danych na fakturach, które ustalasz ze swoją księgowością. Po przekroczeniu limitu sprzedaż wymaga rejestracji działalności.',
  },
  {
    question: 'Jak wygląda proces tworzenia strony internetowej?',
    answer: 'Sklep powstaje w 4 etapach: konsultacja i wybór platformy, projekt sklepu, wdrożenie z integracjami, testy i launch. Sklep na Shopify jest gotowy od 14 dni roboczych, licząc od dostarczenia listy produktów, zdjęć, logo i danych do płatności. Po wdrożeniu zaczyna się 30 dni wsparcia technicznego.',
  },
  {
    question: 'Jak szybkość ładowania strony wpływa na pozycję w Google?',
    answer: 'Szybkość to czynnik rankingowy Google przez Core Web Vitals i bezpośredni czynnik konwersji w e-commerce — wolny sklep traci zarówno pozycje, jak i kupujących na etapie ładowania karty produktu. Nasze sklepy ładują się poniżej 1 sekundy i osiągają wynik Lighthouse 95–100/100, co przekłada się na lepszą widoczność i niższy odsetek porzuceń koszyka.',
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
      '@type': 'WebPage',
      '@id': 'https://evolatec.pl/sklep-internetowy#webpage',
      url: 'https://evolatec.pl/sklep-internetowy',
      name: 'Tworzenie sklepów internetowych dla firm | EvolaTec',
      description: 'Tworzenie sklepów internetowych od 12 600 zł netto, realizacja od 14 dni. Shopify lub sklep własny w Nuxt, płatności online, SEO i GEO w cenie. Stała wycena.',
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
      '@id': 'https://evolatec.pl/sklep-internetowy#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Strona internetowa dla firmy', item: 'https://evolatec.pl/strona-internetowa' },
        { '@type': 'ListItem', position: 3, name: 'Sklep internetowy', item: 'https://evolatec.pl/sklep-internetowy' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/sklep-internetowy#service',
      name: 'Tworzenie sklepów internetowych',
      serviceType: 'Tworzenie sklepów internetowych e-commerce',
      description: 'Sklep internetowy na Shopify lub budowany od podstaw w Nuxt.js — z katalogiem, płatnościami i panelem zamówień. Od 12 600 zł netto, realizacja od 14 dni roboczych.',
      url: 'https://evolatec.pl/sklep-internetowy',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Sklep internetowy (Shopify)',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '12600', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
        },
        {
          '@type': 'Offer',
          name: 'Premium e-commerce (Nuxt)',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '25200', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/sklep-internetowy#faq',
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
  name: 'Jak powstaje sklep internetowy — proces realizacji',
  description: 'Proces tworzenia sklepu internetowego w EvolaTec: od wyboru platformy do uruchomienia.',
  totalTime: 'P14D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Konsultacja i wybór platformy', text: 'Ustalamy asortyment, skalę i wybieramy Shopify lub rozwiązanie własne. Wynik: stała wycena i termin na piśmie.' },
    { '@type': 'HowToStep', position: 2, name: 'Projekt sklepu', text: 'Projektujemy układ katalogu, karty produktu i ścieżkę zakupu pod konwersję na mobile.' },
    { '@type': 'HowToStep', position: 3, name: 'Wdrożenie i integracje', text: 'Budujemy sklep, wdrażamy katalog, podpinamy płatności i potrzebne integracje, konfigurujemy panel.' },
    { '@type': 'HowToStep', position: 4, name: 'Testy i launch', text: 'Sprawdzamy proces zakupu od produktu do płatności, weryfikujemy szybkość i wygląd na urządzeniach, wdrażamy. Zaczyna się 30 dni wsparcia.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/sklep-internetowy' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

// ─── Scroll reveal ─────────────────────────────────────────────────────────

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target) } }) },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'od 12 600 zł', label: 'Sklep netto',        icon: 'shopping_cart' },
  { value: 'od 14 dni',    label: 'Czas realizacji',    icon: 'flash_on'      },
  { value: '95–100',       label: 'Lighthouse score',   icon: 'speed'         },
  { value: 'Shopify / Nuxt', label: 'Dwa warianty',     icon: 'tune'          },
]

const includedItems = [
  { icon: 'phone_iphone',    label: 'Responsywny projekt mobile-first'   },
  { icon: 'inventory_2',     label: 'Katalog produktów i warianty'       },
  { icon: 'credit_card',     label: 'Bezpieczne płatności online'        },
  { icon: 'dashboard',       label: 'Panel produktów i zamówień'         },
  { icon: 'search_insights', label: 'SEO pod kategorie i produkty'       },
  { icon: 'smart_toy',       label: 'GEO — ChatGPT, Gemini, Perplexity'  },
  { icon: 'lock',            label: 'Certyfikat SSL + hosting'           },
  { icon: 'local_shipping',  label: 'Integracje płatności i wysyłki'     },
]

const pricingRows = [
  { service: 'Sklep internetowy (Shopify)',  price: 'od 12 600 zł netto', delivery: 'od 14 dni roboczych' },
  { service: 'Premium e-commerce (Nuxt)',    price: 'od 25 200 zł netto', delivery: 'od 30 dni roboczych' },
]

const compareRows = [
  { label: 'Cena od',         shopify: '12 600 zł netto',        custom: '25 200 zł netto'             },
  { label: 'Czas realizacji', shopify: 'od 14 dni roboczych',    custom: 'od 30 dni roboczych'         },
  { label: 'Koszt miesięczny', shopify: 'Abonament Shopify',     custom: 'Tylko hosting'               },
  { label: 'Customizacja',    shopify: 'W ramach platformy',     custom: 'Pełna, bez ograniczeń'       },
  { label: 'Integracje',      shopify: 'Aplikacje z marketplace', custom: 'Dowolne, na zamówienie'     },
  { label: 'Skala',           shopify: 'Bardzo dobra',           custom: 'Nieograniczona'              },
  { label: 'Najlepsze dla',   shopify: 'Szybki start',           custom: 'Nietypowe procesy, wolumen'  },
]

const relatedServices = [
  { icon: 'web', title: 'Strona firmowa', description: 'Wielostronicowy serwis z SEO i blogiem dla firmy usługowej.', price: 'od 6 300 zł netto', href: '/stworz-strone-firmowa' },
  { icon: 'trending_up', title: 'Pozycjonowanie SEO', description: 'Widoczność organiczna sklepu w Google — frazy produktowe i kategorie.', price: 'od 1 260 zł netto/mies.', href: '/seo' },
  { icon: 'ads_click', title: 'Google Ads', description: 'Kampanie produktowe i remarketingowe pod ruch e-commerce.', price: 'od 1 680 zł netto/mies.', href: '/google-ads' },
]

const processSteps = [
  {
    icon: 'storefront',
    title: 'Konsultacja i wybór platformy',
    description: 'Ustalamy asortyment, skalę i wybieramy Shopify lub rozwiązanie własne. Wynik: stała wycena i termin na piśmie.',
  },
  {
    icon: 'design_services',
    title: 'Projekt sklepu',
    description: 'Projektujemy układ katalogu, karty produktu i ścieżkę zakupu pod konwersję na mobile.',
  },
  {
    icon: 'integration_instructions',
    title: 'Wdrożenie i integracje',
    description: 'Budujemy sklep, wdrażamy katalog, podpinamy płatności i potrzebne integracje, konfigurujemy panel zarządzania.',
  },
  {
    icon: 'rocket_launch',
    title: 'Testy i launch',
    description: 'Sprawdzamy proces zakupu od produktu do płatności, weryfikujemy szybkość i wygląd na urządzeniach, wdrażamy. Zaczyna się 30 dni wsparcia.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Tworzenie sklepów internetowych"
      title="Tworzenie sklepów internetowych, które sprzedają"
      description="Sklep na Shopify od 12 600 zł netto lub budowany od podstaw w Nuxt.js od 25 200 zł — z katalogiem, płatnościami i panelem zamówień. Ładowanie poniżej 1 sekundy, SEO i GEO w cenie."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz ceny"
      primary-href="/kontakt"
      secondary-href="/kalkulator-kosztow"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="border-b border-outline-variant/30 bg-surface">
        <div class="max-w-container-max mx-auto px-gutter py-3">
          <ol class="flex items-center flex-wrap gap-2 text-sm text-on-surface-variant">
            <li><NuxtLink to="/" class="hover:text-primary">Strona główna</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li><NuxtLink to="/strona-internetowa" class="hover:text-primary">Strona internetowa dla firmy</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li aria-current="page" class="text-on-surface font-medium">Sklep internetowy</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ── Section 1: Co decyduje — white, 2-col ───────────────────── -->
        <section aria-labelledby="section-why" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">
              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">shopping_cart</span>
                  Sprzedaż, nie tylko ruch
                </span>
                <h2 id="section-why" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Co decyduje o tym, czy sklep internetowy zarabia
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>Większość sklepów, które nie sprzedają, ma wystarczający ruch — gubi go dopiero między wejściem a płatnością. Klient otwiera kartę produktu, która ładuje się cztery sekundy, przechodzi przez koszyk z trzema krokami i na ekranie płatności rezygnuje. Problem leży w tym, jak szybko i gładko sklep prowadzi od produktu do „kupuję".</p>
                  <p>Sklepy budujemy tak, żeby ładowały się poniżej 1 sekundy i osiągały <strong class="text-on-surface">wynik Lighthouse 95–100/100</strong> — bo każda sekunda opóźnienia na mobile to mierzalny spadek konwersji.</p>
                  <p>Każdy sklep dostaje SEO pod kategorie i produkty oraz Schema.org, dzięki któremu oferta może pojawiać się w <strong class="text-on-surface">ChatGPT, Gemini i Perplexity</strong>.</p>
                </div>
              </div>
              <div data-reveal="right">
                <NuxtImg src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=640&h=420&fit=crop&auto=format&q=80" alt="Osoba kupująca produkty w sklepie internetowym na telefonie — szybki checkout i wygodna nawigacja mobilna" width="640" height="420" class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <!-- ── Section 2: Co zawiera — primary (purple) ──────────────────── -->
        <section aria-labelledby="section-included" class="relative overflow-hidden py-section-padding bg-primary">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="animate-float absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            <div class="animate-float-reverse absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div class="relative max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">
              <div data-reveal="left">
                <span class="inline-block text-xs font-bold uppercase tracking-[0.3em] text-on-primary/60 mb-3">Co dostajesz</span>
                <h2 id="section-included" class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-6">Co zawiera sklep internetowy od 12 600 zł</h2>
                <div class="space-y-4 text-on-primary/80 leading-relaxed">
                  <p>Sklep internetowy kosztuje od 12 600 zł netto i jest kompletnym, działającym sklepem — z katalogiem, płatnościami i panelem do zarządzania zamówieniami.</p>
                  <p>Wersja podstawowa powstaje na Shopify. Sklep o niestandardowych wymaganiach budujemy od podstaw w Nuxt.js od 25 200 zł netto.</p>
                </div>
                <NuxtLink to="/kontakt" class="inline-block mt-8"><BaseButton variant="outline" size="lg">Uzyskaj bezpłatną wycenę</BaseButton></NuxtLink>
              </div>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3" data-reveal="right">
                <li v-for="(item, i) in includedItems" :key="item.label" :data-reveal="'scale'" :data-delay="String(i + 1)" class="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-4 hover:bg-white/18 hover:-translate-y-0.5 transition-all duration-200">
                  <div class="w-9 h-9 rounded-lg bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors"><span class="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">{{ item.icon }}</span></div>
                  <span class="text-sm font-semibold text-on-primary leading-snug">{{ item.label }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- ── Section 3: Cena ───────────────────────────────────────────── -->
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
                Tworzenie sklepów internetowych — cena i czas realizacji
              </h2>
              <p class="text-on-surface-variant">
                Dwa warianty, dwie ceny stałe ustalane przed startem. Budżet reklamowy i prowizje bramki płatniczej są rozliczane oddzielnie, bezpośrednio z dostawcami.
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
                  <p class="font-bold text-on-surface text-sm">{{ row.service }}</p>
                  <p class="text-xs text-on-surface-variant mt-0.5 flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm" aria-hidden="true">schedule</span>
                    {{ row.delivery }}
                  </p>
                </div>
                <p class="text-primary font-black text-base whitespace-nowrap">{{ row.price }}</p>
              </div>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block mb-stack-lg rounded-xl overflow-hidden border border-outline-variant/30">
              <table class="w-full text-base">
                <caption class="sr-only">Ceny i czas realizacji sklepów internetowych</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-primary/20">
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Wariant</th>
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
                <strong class="text-on-surface">Sklep internetowy kosztuje od 12 600 zł netto, realizacja od 14 dni roboczych</strong> — to wariant na Shopify. Sklep budowany od podstaw w Nuxt.js, z niestandardowymi integracjami, to premium e-commerce od 25 200 zł netto, realizacja od 30 dni roboczych.
              </p>
              <p>
                Na wycenę wpływają liczba produktów na starcie, potrzebne integracje (magazyn, fakturowanie, kurierzy) oraz to, czy treści i zdjęcia dostarczasz, czy mamy je przygotować. Sklep bez ruchu zostaje pusty — dlatego warto od początku zaplanować
                <NuxtLink to="/seo" class="text-primary font-semibold hover:underline">pozycjonowanie sklepu</NuxtLink>.
              </p>
            </div>

            <div class="text-center mt-10">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt swojego sklepu</BaseButton>
              </NuxtLink>
            </div>

          </div>
        </section>

        <!-- ── Section 4: Shopify vs własny ──────────────────────────────── -->
        <section
          aria-labelledby="section-compare"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2
                id="section-compare"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Shopify czy sklep własny — co wybrać dla firmy
              </h2>
              <p class="text-on-surface-variant">
                Shopify i sklep własny to nie „lepsze kontra gorsze", tylko „szybciej i taniej na start" kontra „pełna kontrola i skala". Dla większości firm wchodzących w e-commerce Shopify jest właściwą odpowiedzią.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie sklepu na Shopify ze sklepem własnym w Nuxt</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/4" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Shopify</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Sklep własny (Nuxt)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in compareRows"
                    :key="row.label"
                    class="border-b border-outline-variant/20"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'"
                  >
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.shopify }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.custom }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in compareRows"
                :key="row.label"
                class="bg-white rounded-xl border border-outline-variant/30 p-4"
              >
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Shopify</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.shopify }}</p>
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Sklep własny</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.custom }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Najczęstszy scenariusz: firma startuje na Shopify, sprawdza rynek, a do własnego rozwiązania przechodzi dopiero, gdy abonamenty i ograniczenia platformy zaczynają przeszkadzać. Doradzamy tańszy wariant, jeśli wystarcza — przepłacanie za sklep własny „na zapas" nie ma sensu.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak powstaje"
          title="Jak powstaje sklep internetowy — proces realizacji"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o tworzenie sklepów internetowych"
          :faqs="faqData"
        />

        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Co jeszcze pomoże Twojemu sklepowi sprzedawać"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zbuduj sklep, który sprzedaje"
      description="Opisz asortyment i skalę — doradzimy Shopify albo sklep własny i wrócimy ze stałą ceną oraz terminem przed startem."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
