<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Pozycjonowanie Stron Internetowych w Google | EvolaTec',
  description: 'Pozycjonowanie stron w Google od 1 260 zł netto miesięcznie. Obejmuje audyt techniczny, on-page SEO, linkbuilding i miesięczny raport z pozycjami fraz. Stała cena, pierwsze efekty po 3–6 miesiącach.',
  ogTitle: 'Pozycjonowanie Stron Internetowych w Google | EvolaTec',
  ogDescription: 'Pozycjonowanie stron w Google od 1 260 zł netto miesięcznie. Audyt techniczny, on-page SEO, linkbuilding i raportowanie. Stała cena, pierwsze efekty po 3–6 miesiącach.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/seo',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co to jest SEO i czy warto w nie inwestować?',
    answer: 'SEO (Search Engine Optimization) to zestaw działań technicznych i contentowych, które sprawiają, że strona pojawia się wyżej w organicznych wynikach Google. Inwestycja ma sens, jeśli Twoi klienci szukają w Google tego, co oferujesz — co dotyczy zdecydowanej większości firm usługowych, lokalnych i e-commerce w Polsce. Po 6–12 miesiącach dobrze prowadzone SEO zwraca się lepiej niż Google Ads, ponieważ ruch organiczny nie wymaga płacenia za każde kliknięcie.',
  },
  {
    question: 'Ile czasu zajmuje pozycjonowanie strony w Google?',
    answer: 'Pierwsze zmiany pozycji pojawiają się po 6–12 tygodniach od wdrożenia poprawek technicznych. Widoczny wzrost ruchu organicznego — zazwyczaj po 3–6 miesiącach, zależnie od konkurencji na docelowych frazach i aktualnego stanu technicznego strony. Frazy lokalne pozycjonują się szybciej niż frazy ogólnopolskie z wysokim monthly search volume.',
  },
  {
    question: 'Ile kosztuje pozycjonowanie SEO miesięcznie?',
    answer: 'Pozycjonowanie SEO kosztuje od 1 260 zł netto miesięcznie za pakiet Local SEO dla jednej lokalizacji. Pełna obsługa SEO z linkbuildingiem kosztuje od 2 100 zł netto miesięcznie. Jednorazowy audyt SEO kosztuje 840 zł netto i jest dostępny bez podpisywania umowy miesięcznej.',
  },
  {
    question: 'Czym różni się SEO od Google Ads?',
    answer: 'SEO buduje pozycje w organicznych wynikach Google — bez kosztu za kliknięcie, z efektami, które pozostają po zakończeniu współpracy. Google Ads daje ruch od pierwszego dnia, ale każde kliknięcie kosztuje od kilku do kilkudziesięciu złotych zależnie od branży, a ruch znika w ciągu 24 godzin po zatrzymaniu budżetu. SEO potrzebuje 3–6 miesięcy, żeby dać efekty — Google Ads działa natychmiast, ale nie buduje trwałej widoczności.',
  },
  {
    question: 'Co to jest GEO optymalizacja?',
    answer: 'GEO (Generative Engine Optimization) to optymalizacja strony pod asystentów AI — ChatGPT, Google Gemini, Perplexity i Copilot. Gdy użytkownik pyta "dobra agencja SEO w Warszawie" bezpośrednio w ChatGPT, GEO sprawia, że Twoja firma może być zacytowana jako odpowiedź. GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu, bez dopłat.',
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
      description: 'Agencja webowa tworząca strony internetowe, sklepy online i rozwiązania SEO dla polskich firm.',
      address: { '@type': 'PostalAddress', addressLocality: 'Wrocław', addressCountry: 'PL' },
      email: 'team@evolatec.pl',
      areaServed: { '@type': 'Country', name: 'Poland' },
      sameAs: [
        'https://g.page/evolatec-pl',
        'https://www.linkedin.com/company/evolatec',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://evolatec.pl/#website',
      name: 'EvolaTec',
      url: 'https://evolatec.pl',
      publisher: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://evolatec.pl/seo#webpage',
      url: 'https://evolatec.pl/seo',
      name: 'Pozycjonowanie Stron Internetowych w Google | EvolaTec',
      description: 'Pozycjonowanie stron w Google od 1 260 zł netto miesięcznie. Obejmuje audyt techniczny, on-page SEO, linkbuilding i miesięczny raport z pozycjami fraz. Stała cena, pierwsze efekty po 3–6 miesiącach.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/seo#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/seo#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Pozycjonowanie SEO', item: 'https://evolatec.pl/seo' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/seo#service',
      name: 'Pozycjonowanie stron internetowych',
      description: 'Pozycjonowanie stron w Google: audyt techniczny, optymalizacja on-page, linkbuilding i miesięczne raportowanie. Widoczność organiczna — od 1 260 zł netto miesięcznie.',
      url: 'https://evolatec.pl/seo',
      serviceType: 'Search Engine Optimization',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '1260',
          priceCurrency: 'PLN',
          unitText: 'miesięcznie',
        },
      },
    },
    {
      '@type': 'ItemList',
      name: 'Pakiety SEO — cennik',
      itemListElement: [
        {
          '@type': 'ListItem', position: 1,
          item: {
            '@type': 'Service',
            name: 'SEO Audit',
            description: 'Jednorazowy audyt techniczny SEO z priorytetyzowaną listą poprawek.',
            url: 'https://evolatec.pl/audyt-seo',
            offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', price: '840', priceCurrency: 'PLN' } },
          },
        },
        {
          '@type': 'ListItem', position: 2,
          item: {
            '@type': 'Service',
            name: 'Local SEO',
            description: 'Miesięczna obsługa SEO dla firm działających lokalnie — Google Business Profile, lokalne frazy, autorytet lokalny.',
            url: 'https://evolatec.pl/lokalne-seo',
            offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '1260', priceCurrency: 'PLN', unitText: 'miesięcznie' } },
          },
        },
        {
          '@type': 'ListItem', position: 3,
          item: {
            '@type': 'Service',
            name: 'SEO + Linkbuilding',
            description: 'Pełna obsługa SEO on-page i content z regularnym pozyskiwaniem linków zewnętrznych.',
            url: 'https://evolatec.pl/link-building',
            offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', minPrice: '2100', priceCurrency: 'PLN', unitText: 'miesięcznie' } },
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
  name: 'Jak przebiega pozycjonowanie strony w Google — 3 etapy',
  description: 'Harmonogram działań SEO w EvolaTec: od audytu technicznego do regularnego linkbuildingu i monitoringu.',
  step: [
    {
      '@type': 'HowToStep', position: 1,
      name: 'Miesiąc 1 — Audyt i fundamenty techniczne',
      text: 'Pełny audyt SEO strony, optymalizacja on-page priorytetowych podstron, naprawa błędów crawlowania, wdrożenie Schema.org JSON-LD, konfiguracja Google Search Console i Google Analytics 4.',
    },
    {
      '@type': 'HowToStep', position: 2,
      name: 'Miesiąc 2–3 — Treść i linkowanie',
      text: 'Rozbudowa lub optymalizacja treści pod wybrane frazy kluczowe, poprawa linkowania wewnętrznego, Core Web Vitals jeśli wymagają korekty, start linkbuildingu w pakiecie SEO + Linkbuilding.',
    },
    {
      '@type': 'HowToStep', position: 3,
      name: 'Miesiąc 4+ — Skalowanie i monitoring',
      text: 'Regularne pozyskiwanie linków z tematycznych domen, śledzenie rankingów wybranych fraz, miesięczny raport z wykonanymi działaniami i zmianami pozycji w Google.',
    },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/seo' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

// ─── Scroll reveal ─────────────────────────────────────────────────────────

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'od 3 mies.',  label: 'Pierwsze efekty',   icon: 'trending_up'   },
  { value: '840 zł',      label: 'Audyt jednorazowo',  icon: 'search_check'  },
  { value: 'od 1 260 zł', label: 'Miesięcznie netto',  icon: 'sell'          },
  { value: 'GEO gratis',  label: 'ChatGPT, Gemini',    icon: 'smart_toy'     },
]

const seoIncludes = [
  { icon: 'rule',           label: 'Audyt techniczny co miesiąc'             },
  { icon: 'code',           label: 'SEO wbudowane w kod — bez wtyczek'        },
  { icon: 'schema',         label: 'Schema.org JSON-LD'                       },
  { icon: 'analytics',      label: 'Google Search Console + GA4'              },
  { icon: 'link',           label: 'Linkbuilding (pakiet SEO + Linkbuilding)'  },
  { icon: 'summarize',      label: 'Raport miesięczny z rankingami fraz'       },
]

const comparisonRows = [
  { label: 'Czas do pierwszych efektów', ads: '1–3 dni',                          seo: '3–6 miesięcy'                     },
  { label: 'Koszt za kliknięcie',        ads: '2–50 zł (zależnie od branży)',      seo: '0 zł po opłacie miesięcznej'      },
  { label: 'Co po zatrzymaniu budżetu',  ads: 'Ruch znika w 24 godziny',           seo: 'Pozycje pozostają'                },
  { label: 'Efekty po 12 miesiącach',    ads: 'Proporcjonalne do budżetu',         seo: 'Rosnący ruch organiczny'          },
  { label: 'Najlepiej dla',              ads: 'Kampanie czasowe, nowe produkty',   seo: 'Długoterminowa widoczność'        },
]

const pricingItems = [
  {
    name: 'SEO Audit',
    price: '840 zł netto',
    billing: 'jednorazowo',
    description: 'Pełny raport techniczny: Core Web Vitals, błędy crawlowania, on-page, linkowanie wewnętrzne, dane strukturalne. Z priorytetyzowaną listą poprawek.',
    href: '/audyt-seo',
    icon: 'search_check',
  },
  {
    name: 'Local SEO',
    price: 'od 1 260 zł netto',
    billing: 'miesięcznie',
    description: 'Optymalizacja Google Business Profile, lokalne frazy, budowanie autorytetu lokalnego. Dla firm działających w jednym mieście lub regionie.',
    href: '/lokalne-seo',
    icon: 'location_on',
  },
  {
    name: 'SEO + Linkbuilding',
    price: 'od 2 100 zł netto',
    billing: 'miesięcznie',
    description: 'Pełna obsługa on-page, content SEO i regularne pozyskiwanie linków z tematycznych domen zewnętrznych.',
    href: '/link-building',
    icon: 'hub',
  },
]

const processSteps = [
  {
    icon: 'rule',
    title: 'Miesiąc 1 — Audyt i fundamenty',
    description: 'Pełny audyt SEO, optymalizacja on-page priorytetowych podstron, naprawa błędów crawlowania, wdrożenie Schema.org, konfiguracja Google Search Console i GA4.',
  },
  {
    icon: 'edit_document',
    title: 'Miesiąc 2–3 — Treść i linkowanie',
    description: 'Rozbudowa treści pod frazy kluczowe, poprawa linkowania wewnętrznego, Core Web Vitals, start linkbuildingu w pakiecie SEO + Linkbuilding.',
  },
  {
    icon: 'trending_up',
    title: 'Miesiąc 4+ — Skalowanie i monitoring',
    description: 'Regularne pozyskiwanie linków zewnętrznych, śledzenie rankingów, miesięczny raport z wykonanymi działaniami i zmianami pozycji.',
  },
]

const relatedServices = [
  {
    icon: 'search_check',
    title: 'Audyt SEO',
    description: 'Jednorazowy raport techniczny z priorytetyzowaną listą poprawek.',
    price: '840 zł netto',
    href: '/audyt-seo',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja SEO',
    description: 'On-page SEO i techniczne poprawki bez stałej umowy miesięcznej.',
    price: 'od 1 260 zł netto',
    href: '/optymalizacja-seo',
  },
  {
    icon: 'language',
    title: 'Strona internetowa',
    description: 'Strona zoptymalizowana pod SEO od pierwszego dnia — Lighthouse 95–100.',
    price: 'od 6 300 zł netto',
    href: '/strona-internetowa',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Pozycjonowanie SEO — Polska"
      title="Skuteczne pozycjonowanie stron internetowych – więcej klientów z Google"
      description="Audyt techniczny, on-page SEO, linkbuilding i GEO optymalizacja pod AI — wszystko w jednym pakiecie. Pierwsze efekty po 3–6 miesiącach."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz cennik"
      primary-href="/kontakt"
      secondary-href="#cennik"
      :stats="heroStats"
    />

    <main id="main-content">


      <article>

        <!-- ── Section 1: Co obejmuje — white ──────────────────────────── -->
        <section aria-labelledby="section-scope" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">search_insights</span>
                  Pozycjonowanie organiczne
                </span>
                <h2 id="section-scope" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Co obejmuje pozycjonowanie stron internetowych
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Większość firm płaci agencji SEO od 3 do 12 miesięcy, zanim zorientuje się, że nie dostaje nic poza comiesięcznym raportem z wykresem. Praca, która faktycznie podnosi pozycję, to kilka konkretnych czynności — i warto wiedzieć, czego wymagać.
                  </p>
                  <p>
                    W każdym projekcie zaczynamy od audytu technicznego: Core Web Vitals, dane strukturalne Schema.org, canonicale i błędy crawlowania. <strong class="text-on-surface">SEO techniczne jest wbudowane w kod strony — nie zależy od wtyczek ani zewnętrznych narzędzi</strong>, co oznacza brak ryzyka dezaktualizacji po kolejnej aktualizacji CMS.
                  </p>
                  <p>
                    Linkbuilding — pozyskiwanie linków z zewnętrznych domen — jest dostępny w pakiecie SEO + Linkbuilding od <strong class="text-on-surface">2 100 zł netto miesięcznie</strong>. Każdy miesiąc kończy się raportem z rankingami konkretnych fraz, zmianami ruchu organicznego i listą wykonanych działań.
                  </p>
                </div>
              </div>

              <div class="flex flex-col gap-4" data-reveal="right">
                <NuxtImg
                  src="/assets/link-building-bg.webp"
                  alt="Profesjonalista analizujący pozycje strony w Google Search Console i Google Analytics 4"
                  width="640"
                  height="340"
                  class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                  loading="lazy"
                />
                <div class="grid grid-cols-2 gap-2.5">
                  <div
                    v-for="(item, i) in seoIncludes"
                    :key="item.label"
                    :data-reveal="'scale'"
                    :data-delay="String(i + 1)"
                    class="group flex items-center gap-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div class="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <span class="material-symbols-outlined text-primary text-[16px]" aria-hidden="true">{{ item.icon }}</span>
                    </div>
                    <span class="text-xs font-semibold text-on-surface leading-snug">{{ item.label }}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: SEO vs Google Ads ─────────────────────────────── -->
        <section
          aria-labelledby="section-comparison"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg" data-reveal>
              <h2
                id="section-comparison"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Pozycjonowanie organiczne vs Google Ads — kiedy które wybrać
              </h2>
              <p class="text-on-surface-variant">
                Firmy prowadzące kampanie Google Ads zadają to pytanie regularnie: czy SEO w ogóle ma sens, skoro reklama działa od razu? Odpowiedź zależy głównie od jednej zmiennej: co dzieje się z ruchem, gdy przestajesz płacić.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Google Ads</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">SEO organiczne</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in comparisonRows"
                    :key="row.label"
                    class="border-b border-outline-variant/20"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'"
                  >
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.ads }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.seo }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in comparisonRows"
                :key="row.label"
                class="bg-white rounded-xl border border-outline-variant/30 p-4"
              >
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Google Ads</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.ads }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">SEO</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.seo }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto space-y-4 text-on-surface-variant">
              <p>
                <strong class="text-on-surface">Pozycjonowanie SEO kosztuje od 1 260 zł netto miesięcznie</strong> i daje trwałe efekty — po zakończeniu współpracy pozycje nie znikają z dnia na dzień. Google Ads jest uzasadniony, gdy potrzebujesz ruchu natychmiast lub promujesz ofertę ograniczoną czasowo.
              </p>
              <p>
                Dla większości firm usługowych w Polsce sensowna jest kombinacja: Ads generuje leady od pierwszego dnia, SEO buduje pozycję organiczną przez najbliższe 12–18 miesięcy. Dla firm z ograniczonym miesięcznym budżetem — SEO zwraca się lepiej po upływie 6 miesięcy.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 3: Ceny i pakiety — primary (purple) ────────────── -->
        <section id="cennik" aria-labelledby="section-pricing" class="relative overflow-hidden py-section-padding bg-primary">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="animate-float          absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            <div class="animate-float-reverse  absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div class="relative max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-14" data-reveal>
              <span class="inline-block text-xs font-bold uppercase tracking-[0.3em] text-on-primary/60 mb-3">Cennik</span>
              <h2 id="section-pricing" class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-4">
                Pozycjonowanie stron — ceny i pakiety
              </h2>
              <p class="text-on-primary/75 leading-relaxed">
                Agencje SEO ukrywają ceny, bo chcą "wycenić indywidualnie" — co w praktyce często oznacza dopasowanie kwoty do budżetu klienta. Poniżej są nasze stałe stawki.
              </p>
            </div>

            <ul class="grid md:grid-cols-3 gap-5 mb-14" role="list">
              <li
                v-for="(item, i) in pricingItems"
                :key="item.name"
                :data-reveal="'scale'"
                :data-delay="String(i + 1)"
                class="group bg-white rounded-2xl p-7 flex flex-col shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 flex-shrink-0">
                  <span class="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">{{ item.icon }}</span>
                </div>
                <h3 class="font-bold text-on-surface text-lg mb-1 leading-snug">{{ item.name }}</h3>
                <div class="flex items-baseline gap-2 mb-4">
                  <span class="font-black text-primary text-xl">{{ item.price }}</span>
                  <span class="text-xs text-on-surface-variant">{{ item.billing }}</span>
                </div>
                <p class="text-sm text-on-surface-variant leading-relaxed flex-1 mb-6">{{ item.description }}</p>
                <NuxtLink :to="item.href" class="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200 mt-auto">
                  Dowiedz się więcej
                  <span class="material-symbols-outlined text-base" aria-hidden="true">arrow_forward</span>
                </NuxtLink>
              </li>
            </ul>

            <div class="max-w-2xl mx-auto text-center" data-reveal>
              <p class="text-on-primary/75 mb-8">
                Każda wycena jest stała i ustalana przed startem. Minimalny okres współpracy wynosi 3 miesiące — Google potrzebuje czasu na ponowne zaindeksowanie zmian. <strong class="text-on-primary">Agencja, która obiecuje widoczne efekty w ciągu 30 dni, myli optymalizację z reklamą.</strong>
              </p>
              <NuxtLink to="/kontakt">
                <BaseButton variant="outline" size="lg">Uzyskaj bezpłatną wycenę SEO</BaseButton>
              </NuxtLink>
            </div>

          </div>
        </section>

        <!-- ── Section 4: Etapy (ProcessSection) ─────────────────────────── -->
        <ProcessSection
          eyebrow="Jak pracujemy"
          title="Jak przebiega pozycjonowanie strony w Google — etapy"
          :steps="processSteps"
          background="bg-surface"
        />

        <!-- Process closing note — rendered after the component -->
        <div class="bg-surface-container-low border-t border-outline-variant/20 py-8">
          <div class="max-w-container-max mx-auto px-gutter">
            <p class="text-sm text-on-surface-variant text-center max-w-2xl mx-auto">
              Pierwsze zmiany pozycji pojawiają się zazwyczaj po <strong class="text-on-surface">6–12 tygodniach</strong> od wdrożenia poprawek technicznych. Pełne efekty — widoczny wzrost ruchu organicznego — po 3–6 miesiącach. Każdy raport zawiera listę wykonanych działań i zmianę pozycji na konkretnych frazach.
            </p>
          </div>
        </div>

        <!-- ── Section 5: FAQ ─────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o pozycjonowanie stron"
          :faqs="faqData"
        />

        <!-- ── Related services (internal links) ─────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Może Cię zainteresować"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zacznij pozycjonować swoją stronę"
      description="Opisz projekt — wrócimy ze stałą wyceną i harmonogramem działań na pierwsze 3 miesiące."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Sprawdź SEO Audit"
      primary-href="/kontakt"
      secondary-href="/audyt-seo"
    />

  </div>
</template>
