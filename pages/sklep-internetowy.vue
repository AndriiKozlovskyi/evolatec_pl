<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Tworzenie sklepów internetowych dla firm | EvolaTec',
  description: 'Tworzenie sklepów internetowych od 12 600 zł netto, realizacja od 14 dni. sklep własny w Nuxt.js, płatności online, SEO i GEO w cenie.',
  ogTitle: 'Tworzenie sklepów internetowych dla firm | EvolaTec',
  ogDescription: 'Sklep internetowy od 12 600 zł netto, realizacja od 14 dni. sklep własny w Nuxt.js, płatności online, SEO i GEO w cenie.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/sklep-internetowy',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje sklep internetowy?',
    answer: 'Sklep internetowy kosztuje od 12 600 zł netto, realizacja od 14 dni roboczych — to standardowy sklep w Nuxt.js z katalogiem, płatnościami i panelem zamówień. Sklep z niestandardowymi integracjami i większą skalą to premium e-commerce od 25 200 zł netto, realizacja od 30 dni roboczych. Obie ceny są stałe i ustalane przed startem.',
  },
  {
    question: 'Czym różni się sklep własny w Nuxt.js od gotowej platformy Shopify?',
    answer: 'Shopify to gotowa platforma SaaS z miesięcznym abonamentem i ograniczeniami narzucanymi przez platformę. My budujemy sklepy od podstaw w Nuxt.js — masz pełną kontrolę, dowolne integracje i tylko koszt hostingu, bez abonamentu platformy. Standardowy sklep w Nuxt.js startuje od 12 600 zł netto (od 14 dni), a wariant premium z niestandardowymi integracjami od 25 200 zł netto (od 30 dni). Szczegółowe porównanie obu podejść znajdziesz w tabeli poniżej.',
  },
  {
    question: 'Czy można prowadzić sklep internetowy bez rejestracji działalności?',
    answer: 'Tak, w Polsce można prowadzić sprzedaż w ramach działalności nierejestrowanej, jeśli miesięczny przychód nie przekracza ustawowego limitu — sklep może wtedy działać na osobę fizyczną. Technicznie sklep budujemy identycznie; różnica dotyczy formy rozliczeń i danych na fakturach, które ustalasz ze swoją księgowością. Po przekroczeniu limitu sprzedaż wymaga rejestracji działalności.',
  },
  {
    question: 'Jak wygląda proces tworzenia strony internetowej?',
    answer: 'Sklep powstaje w 4 etapach: konsultacja i wycena, projekt sklepu, wdrożenie z integracjami, testy i launch. Standardowy sklep jest gotowy od 14 dni roboczych, licząc od dostarczenia listy produktów, zdjęć, logo i danych do płatności. Po wdrożeniu zaczyna się 30 dni wsparcia technicznego.',
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
        addressLocality: 'Wrocław',
        addressCountry: 'PL',
      },
      email: 'team@evolatec.pl',
      areaServed: [
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'City', name: 'Wrocław' },
        { '@type': 'City', name: 'Kraków' },
        { '@type': 'City', name: 'Warszawa' },
        { '@type': 'City', name: 'Gdańsk' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'team@evolatec.pl',
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
      description: 'Tworzenie sklepów internetowych od 12 600 zł netto, realizacja od 14 dni. sklep własny w Nuxt.js, płatności online, SEO i GEO w cenie.',
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
      description: 'Sklep internetowy budowany od podstaw w Nuxt.js — z katalogiem, płatnościami i panelem zamówień. Od 12 600 zł netto, realizacja od 14 dni roboczych.',
      url: 'https://evolatec.pl/sklep-internetowy',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Sklep internetowy',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '12600', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
        },
        {
          '@type': 'Offer',
          name: 'Premium e-commerce',
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
    { '@type': 'HowToStep', position: 1, name: 'Konsultacja i wycena', text: 'Ustalamy asortyment, skalę i zakres integracji. Wynik: stała wycena i termin na piśmie.' },
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
  { value: 'Standard / Premium', label: 'Dwa warianty',  icon: 'tune'          },
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


const compareRows = [
  { label: 'Opłaty transakcyjne',  shopify: '0,5–2% od każdej sprzedaży',       custom: 'Brak opłat transakcyjnych'     },
  { label: 'Koszt miesięczny',     shopify: 'Abonament + płatne aplikacje',      custom: 'Tylko hosting (~50 zł/mies)'   },
  { label: 'Własność kodu',        shopify: 'Platforma SaaS — brak własności',   custom: 'Pełna własność kodu i danych'  },
  { label: 'Customizacja',         shopify: 'Szablony Liquid — ograniczona',     custom: 'Pełna, bez ograniczeń'         },
  { label: 'Integracje (BLIK itp.)', shopify: 'Tylko płatne aplikacje',          custom: 'Dowolne, na zamówienie'        },
  { label: 'Wydajność i SEO',      shopify: 'Wolny przez aplikacje, słabe URL',  custom: '95–100 Lighthouse, pełny SEO'  },
  { label: 'Checkout',             shopify: 'Ograniczony na niższych planach',   custom: 'Dowolna konfiguracja'          },
  { label: 'Skala',                shopify: 'Wyższy plan = wyższy koszt',        custom: 'Nieograniczona, stały koszt'   },
]

const relatedServices = [
  { icon: 'web', title: 'Strona firmowa', description: 'Wielostronicowy serwis z SEO i blogiem dla firmy usługowej.', price: 'od 6 300 zł netto', href: '/stworz-strone-firmowa' },
  { icon: 'trending_up', title: 'Pozycjonowanie SEO', description: 'Widoczność organiczna sklepu w Google — frazy produktowe i kategorie.', price: 'od 1 260 zł netto/mies.', href: '/seo' },
  { icon: 'ads_click', title: 'Google Ads', description: 'Kampanie produktowe i remarketingowe pod ruch e-commerce.', price: 'od 1 680 zł netto/mies.', href: '/google-ads' },
]

const processSteps = [
  {
    icon: 'storefront',
    title: 'Konsultacja i wycena',
    description: 'Ustalamy asortyment, skalę i zakres integracji. Wynik: stała wycena i termin na piśmie.',
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
      description="Sklep internetowy w Nuxt.js od 12 600 zł netto, wariant premium od 25 200 zł — z katalogiem, płatnościami i panelem zamówień. Ładowanie poniżej 1 sekundy, SEO i GEO w cenie."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz ceny"
      primary-href="/kontakt"
      secondary-href="/kalkulator-kosztow"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb -->

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
                <NuxtImg src="/assets/ecommerce.webp" alt="Osoba kupująca produkty w sklepie internetowym na telefonie — szybki checkout i wygodna nawigacja mobilna" width="640" height="420" class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover" loading="lazy" />
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
                  <p>Wersja standardowa powstaje w Nuxt.js. Sklep o niestandardowych wymaganiach i większej skali budujemy jako premium e-commerce od 25 200 zł netto.</p>
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

            <!-- Header -->
            <div class="text-center max-w-2xl mx-auto mb-12" data-reveal="fade">
              <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Cennik</span>
              <h2
                id="section-prices"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight"
              >
                Tworzenie sklepów internetowych — cena i czas realizacji
              </h2>
            </div>

            <!-- Price banner -->
            <div class="relative mb-12 rounded-2xl overflow-hidden" data-reveal="fade">
              <NuxtImg
                src="/assets/website.webp"
                alt=""
                aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gray-950/70"></div>
              <div class="relative px-8 sm:px-12 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                <div>
                  <p class="text-white/50 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Sklep internetowy</p>
                  <p class="font-display text-5xl sm:text-6xl font-black text-white leading-none">od 12 600 zł <span class="text-2xl font-semibold text-white/50">netto</span></p>
                </div>
                <div class="flex flex-col xs:flex-row gap-8 sm:gap-12">
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-cyan-300 text-[28px]" aria-hidden="true">flash_on</span>
                    </div>
                    <div>
                      <p class="font-black text-white text-xl leading-tight">od 14 dni</p>
                      <p class="text-sm text-cyan-300/80 font-medium">realizacja</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-cyan-300 text-[28px]" aria-hidden="true">gavel</span>
                    </div>
                    <div>
                      <p class="font-black text-white text-xl leading-tight">Cena i termin</p>
                      <p class="text-sm text-cyan-300/80 font-medium">zapisane w umowie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Three info cards -->
            <div class="grid md:grid-cols-3 gap-5 mb-10">

              <div class="bg-white rounded-2xl border border-outline-variant/25 p-6" data-reveal="left">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">gavel</span>
                </div>
                <h3 class="font-bold text-on-surface text-sm mb-3">Stała wycena, bez niespodzianek</h3>
                <p class="text-sm text-on-surface-variant leading-relaxed">
                  Dwa warianty, dwie ceny stałe ustalane przed startem. Budżet reklamowy i prowizje bramki płatniczej są rozliczane oddzielnie, bezpośrednio z dostawcami.
                </p>
              </div>

              <div class="bg-white rounded-2xl border border-outline-variant/25 p-6" data-reveal="fade">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">tune</span>
                </div>
                <h3 class="font-bold text-on-surface text-sm mb-3">Co wpływa na wycenę</h3>
                <p class="text-sm text-on-surface-variant leading-relaxed">
                  <strong class="text-on-surface">Sklep internetowy kosztuje od 12 600 zł netto, realizacja od 14 dni roboczych</strong> — to standardowy sklep w Nuxt.js. Premium e-commerce kosztuje od 25 200 zł netto, realizacja od 30 dni roboczych. Strony osiągają wynik Lighthouse 95–100/100 mierzony w Google PageSpeed Insights.
                </p>
              </div>

              <div class="bg-white rounded-2xl border border-outline-variant/25 p-6" data-reveal="right">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">search_insights</span>
                </div>
                <h3 class="font-bold text-on-surface text-sm mb-3">Sklep bez ruchu zostaje pusty</h3>
                <p class="text-sm text-on-surface-variant leading-relaxed">
                  Na wycenę wpływają liczba produktów na starcie, potrzebne integracje (magazyn, fakturowanie, kurierzy) oraz to, czy treści i zdjęcia dostarczasz, czy mamy je przygotować. Sklep bez ruchu zostaje pusty — dlatego warto od początku zaplanować
                  <NuxtLink to="/seo" class="text-primary font-semibold hover:underline">pozycjonowanie sklepu</NuxtLink>.
                </p>
              </div>

            </div>

            <!-- Variant cards -->
            <div class="grid md:grid-cols-2 gap-5 mb-10">
              <div class="bg-white rounded-2xl border border-outline-variant/25 p-6" data-reveal="left">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">shopping_bag</span>
                </div>
                <h3 class="font-bold text-on-surface text-sm mb-1">Sklep internetowy</h3>
                <p class="font-display text-3xl font-black text-primary mb-1">od 12 600 zł <span class="text-base font-semibold text-on-surface-variant">netto</span></p>
                <p class="text-xs text-on-surface-variant flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm" aria-hidden="true">schedule</span>
                  od 14 dni roboczych
                </p>
              </div>
              <div class="bg-white rounded-2xl border border-outline-variant/25 p-6" data-reveal="right">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">storefront</span>
                </div>
                <h3 class="font-bold text-on-surface text-sm mb-1">Premium e-commerce</h3>
                <p class="font-display text-3xl font-black text-primary mb-1">od 25 200 zł <span class="text-base font-semibold text-on-surface-variant">netto</span></p>
                <p class="text-xs text-on-surface-variant flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm" aria-hidden="true">schedule</span>
                  od 30 dni roboczych
                </p>
              </div>
            </div>

            <!-- CTA -->
            <div class="text-center">
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

            <div class="mb-stack-lg">
              <h2
                id="section-compare"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Shopify czy sklep własny — co wybrać dla firmy
              </h2>
              <p class="text-on-surface-variant">
                Shopify to popularna platforma SaaS, ale my budujemy sklepy od podstaw w Nuxt.js — bez miesięcznego abonamentu platformy, z pełną kontrolą i dowolnymi integracjami. Poniższe porównanie pokazuje, czym sklep własny w Nuxt różni się od gotowej platformy Shopify i dlaczego przy nietypowych procesach oraz większej skali wypada korzystniej.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block rounded-2xl bg-white shadow-md overflow-hidden border-2 border-outline-variant/50 mb-8">
              <table class="w-full border-collapse">
                <caption class="sr-only">Porównanie sklepu na Shopify ze sklepem własnym w Nuxt</caption>
                <thead>
                  <tr class="bg-surface-container-low">
                    <th class="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Kryterium</th>
                    <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Shopify</th>
                    <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-primary border-b-2 border-outline-variant/40" scope="col">Sklep własny (Nuxt)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in compareRows"
                    :key="row.label"
                    class="border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-low/60 transition-colors duration-150"
                  >
                    <td class="px-6 py-4 text-sm font-medium text-on-surface border-r border-outline-variant/30">{{ row.label }}</td>
                    <td class="px-5 py-4 text-center text-sm text-on-surface-variant border-r border-outline-variant/30">{{ row.shopify }}</td>
                    <td class="px-5 py-4 text-center text-sm font-bold text-primary bg-primary-fixed">{{ row.custom }}</td>
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
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Shopify</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.shopify }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Sklep własny (Nuxt)</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.custom }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak powstaje"
          title="Jak powstaje sklep internetowy — proces realizacji"
          :steps="processSteps"
          background="bg-surface"
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
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zbuduj sklep, który sprzedaje"
      description="Opisz asortyment i skalę — zaprojektujemy sklep w Nuxt.js i wrócimy ze stałą ceną oraz terminem przed startem."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
