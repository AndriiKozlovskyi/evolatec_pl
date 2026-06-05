<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Audyt SEO Strony Internetowej — 840 zł | EvolaTec',
  description: 'Profesjonalny audyt SEO: Core Web Vitals, błędy crawlowania, on-page SEO, Schema.org, profil linków. Raport PDF z priorytetami — 840 zł netto, jednorazowo, bez abonamentu.',
  ogTitle: 'Audyt SEO Strony Internetowej — 840 zł | EvolaTec',
  ogDescription: 'Profesjonalny audyt SEO: Core Web Vitals, błędy crawlowania, on-page SEO, Schema.org, profil linków. Raport PDF z priorytetami — 840 zł netto, jednorazowo, bez abonamentu.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/audyt-seo',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co to jest SEO i czy warto w nie inwestować?',
    answer: 'SEO to zestaw działań technicznych i treściowych, które sprawiają, że strona pojawia się wyżej w organicznych wynikach Google — bez płacenia za każde kliknięcie. Inwestycja ma sens, jeśli Twoi klienci szukają w Google tego, co oferujesz. Po 6–12 miesiącach dobrze wdrożone SEO zwraca się lepiej niż Google Ads, bo ruch organiczny nie znika po zatrzymaniu budżetu.',
  },
  {
    question: 'Ile kosztuje pozycjonowanie SEO miesięcznie?',
    answer: 'Pozycjonowanie SEO kosztuje od 1 260 zł netto miesięcznie za Local SEO dla jednej lokalizacji, a od 2 100 zł netto miesięcznie za pełną obsługę z linkbuildingiem. Audyt SEO to osobna, jednorazowa usługa za 840 zł netto — nie wymaga podpisania umowy miesięcznej.',
  },
  {
    question: 'Jak sprawić żeby firma pojawiała się w ChatGPT i Gemini?',
    answer: 'Widoczność w ChatGPT, Gemini i Perplexity zależy od obecności w indeksie Google oraz od struktury treści strony — kompletne odpowiedzi na konkretne pytania, dane strukturalne Schema.org JSON-LD i cytowalne zdania z liczbami i faktami. W audycie SEO sprawdzamy, czy Twoja strona spełnia te warunki, i wskazujemy konkretne braki.',
  },
  {
    question: 'Co to jest Schema.org i do czego służy?',
    answer: 'Schema.org to format danych strukturalnych wbudowanych w kod strony w postaci JSON-LD. Google używa ich do tworzenia rozszerzonych wyników wyszukiwania (rich snippets), takich jak FAQ, gwiazdki ocen czy karty produktów. AI wyszukiwarki — ChatGPT, Gemini i Perplexity — używają Schema.org do identyfikowania wiarygodnych źródeł, z których cytują odpowiedzi.',
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
      address: { '@type': 'PostalAddress', addressLocality: 'Warszawa', addressCountry: 'PL' },
      email: 'kontakt@evolatec.pl',
      areaServed: { '@type': 'Country', name: 'Poland' },
      sameAs: ['https://g.page/evolatec-pl', 'https://www.linkedin.com/company/evolatec'],
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
      '@id': 'https://evolatec.pl/audyt-seo#webpage',
      url: 'https://evolatec.pl/audyt-seo',
      name: 'Audyt SEO Strony Internetowej — 840 zł | EvolaTec',
      description: 'Profesjonalny audyt SEO: Core Web Vitals, błędy crawlowania, on-page SEO, Schema.org, profil linków. Raport PDF z priorytetami — 840 zł netto, jednorazowo, bez abonamentu.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-intro'] },
      breadcrumb: { '@id': 'https://evolatec.pl/audyt-seo#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/audyt-seo#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Pozycjonowanie SEO', item: 'https://evolatec.pl/seo' },
        { '@type': 'ListItem', position: 3, name: 'Audyt SEO', item: 'https://evolatec.pl/audyt-seo' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/audyt-seo#service',
      name: 'Audyt SEO strony internetowej',
      description: 'Jednorazowy audyt techniczny i treściowy strony internetowej z priorytetyzowaną listą poprawek. Raport PDF w 5–7 dni roboczych.',
      url: 'https://evolatec.pl/audyt-seo',
      serviceType: 'SEO Audit',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        priceSpecification: { '@type': 'PriceSpecification', price: '840', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/audyt-seo#faq',
      mainEntity: faqData.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/audyt-seo' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) }],
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
  { value: '840 zł',    label: 'Netto, jednorazowo',     icon: 'sell'        },
  { value: '5–7 dni',   label: 'Czas realizacji',        icon: 'schedule'    },
  { value: 'PDF',       label: 'Raport z priorytetami',  icon: 'description' },
  { value: 'Bez umowy', label: 'Brak abonamentu',        icon: 'verified'    },
]

const auditBenefits = [
  {
    icon: 'speed',
    title: 'Core Web Vitals — LCP, CLS, INP',
    description: 'Każda wartość spoza zakresu „Bardzo dobre" jest opisana z przyczyną i konkretną poprawką mierzalną w Google PageSpeed Insights.',
  },
  {
    icon: 'bug_report',
    title: 'Błędy crawlowania i indeksowania',
    description: 'Pełne crawlowanie domeny z analizą kodów HTTP, przekierowań, stron wyłączonych z indeksu i błędów 404 raportowanych przez Search Console.',
  },
  {
    icon: 'tag',
    title: 'Meta tagi i struktura nagłówków H1–H4',
    description: 'Unikalność, długość, nasycenie frazami kluczowymi i hierarchia nagłówków na każdej podstronie — wykryte duplikaty i braki.',
  },
  {
    icon: 'schema',
    title: 'Dane strukturalne Schema.org JSON-LD',
    description: 'Sprawdzenie obecności, poprawności i kompletności JSON-LD dla FAQ, Service, LocalBusiness, BreadcrumbList i HowTo.',
  },
  {
    icon: 'link_off',
    title: 'Profil linków zewnętrznych',
    description: 'Analiza domen odsyłających: liczba, tematyczność, proporcja dofollow/nofollow i ewentualne toksyczne źródła przez Ahrefs i GSC.',
  },
  {
    icon: 'phone_iphone',
    title: 'Mobile-friendliness i UX mobilny',
    description: 'Test responsywności, rozmiary tapowania, czcionki i wyświetlanie na urządzeniach mobilnych zgodnie z wytycznymi Google.',
  },
]

const comparisonRows = [
  { label: 'Koszt',              auto: '0–300 zł/mies. (abonament narzędzia)',   manual: '840 zł netto, jednorazowo'              },
  { label: 'Priorytetyzacja',    auto: 'Brak — lista błędów bez oceny wpływu',   manual: 'Każdy problem oceniany wg wpływu i trudności' },
  { label: 'Interpretacja',      auto: 'Algorytmiczna, bez kontekstu biznesowego', manual: 'Ręczna, z uwzględnieniem typu strony i branży' },
  { label: 'Analiza GSC',        auto: 'Podstawowa lub niedostępna',             manual: 'Pełna — błędy, ostrzeżenia, wyłączenia' },
  { label: 'Zalecenia',          auto: 'Generyczne',                             manual: 'Konkretne poprawki z opisem technicznym' },
  { label: 'Czas dostarczenia',  auto: 'Natychmiast, automatycznie',             manual: 'PDF w 5–7 dni roboczych'                },
]

const processSteps = [
  {
    icon: 'login',
    title: 'Dostęp do Google Search Console i GA4',
    description: 'Potrzebujemy dostępu na poziomie widoku tylko do odczytu. Bez danych z Search Console audyt byłby niekompletny — narzędzia zewnętrzne nie mają dostępu do błędów crawlowania ani rzeczywistej widoczności fraz.',
  },
  {
    icon: 'manage_search',
    title: 'Analiza techniczna i on-page',
    description: 'Pełne crawlowanie domeny, analiza Core Web Vitals, przegląd meta tagów i nagłówków, weryfikacja Schema.org oraz ręczna analiza raportów GSC. Profil linków sprawdzamy przez Ahrefs — nie wyłącznie przez automatyczne flagi.',
  },
  {
    icon: 'description',
    title: 'Raport PDF z listą priorytetów',
    description: 'Raport z podziałem na trzy grupy: krytyczne, ważne i opcjonalne. Każda pozycja zawiera opis problemu, wpływ na widoczność i rekomendację techniczną. Raport kończy bezpłatne omówienie wyników.',
  },
]

const priceIncludes = [
  'Core Web Vitals i szybkość ładowania',
  'Błędy crawlowania i indeksowania',
  'Audyt meta tagów i nagłówków',
  'Dane strukturalne Schema.org',
  'Profil linków zewnętrznych',
  'Priorytetyzowany raport PDF',
  'Omówienie wyników bez dopłat',
]

const relatedServices = [
  {
    icon: 'tune',
    title: 'Optymalizacja SEO',
    description: 'Wdrożenie poprawek z audytu — on-page i techniczne SEO bez stałej umowy.',
    price: 'od 1 260 zł netto',
    href: '/optymalizacja-seo',
  },
  {
    icon: 'location_on',
    title: 'Lokalne SEO',
    description: 'Miesięczna obsługa SEO dla firm lokalnych — Google Business Profile i frazy lokalne.',
    price: 'od 1 260 zł netto',
    href: '/lokalne-seo',
  },
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Pełna obsługa pozycjonowania z audytem technicznym co miesiąc i raportowaniem.',
    price: 'od 1 260 zł netto',
    href: '/seo',
  },
]
</script>

<template>
  <div>

    <!-- ══ Hero ══════════════════════════════════════════════════════════════ -->
    <HeroSection
      badge="Audyt SEO — jednorazowy"
      title="Profesjonalny audyt SEO – sprawdź, dlaczego Twoja strona nie jest widoczna w Google"
      description="Kompletny raport techniczny: Core Web Vitals, błędy crawlowania, on-page SEO, dane strukturalne Schema.org i priorytetyzowana lista poprawek. Gotowy w 5–7 dni roboczych — 840 zł netto, bez abonamentu."
      primaryCTA="Zamów audyt SEO"
      secondaryCTA="Co zawiera audyt"
      :stats="heroStats"
    />

    <main id="main-content">

      <nav aria-label="breadcrumb" class="max-w-container-max mx-auto px-gutter py-4">
        <ol class="flex items-center gap-2 text-sm text-on-surface-variant">
          <li><NuxtLink to="/" class="hover:text-primary transition-colors">Strona główna</NuxtLink></li>
          <li aria-hidden="true"><span class="material-symbols-outlined text-sm">chevron_right</span></li>
          <li><NuxtLink to="/seo" class="hover:text-primary transition-colors">Pozycjonowanie SEO</NuxtLink></li>
          <li aria-hidden="true"><span class="material-symbols-outlined text-sm">chevron_right</span></li>
          <li aria-current="page" class="text-on-surface font-medium">Audyt SEO</li>
        </ol>
      </nav>

      <article>

        <!-- ══ 1. Co zawiera — white ═════════════════════════════════════════ -->
        <section id="zakres" aria-labelledby="section-scope" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">search_check</span>
                  Jednorazowy raport techniczny
                </span>
                <h2 id="section-scope" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Co zawiera audyt SEO strony internetowej
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Większość stron, które nie pojawiają się w Google, nie ma problemu z brakiem treści ani budżetem linków — mają problem z błędami technicznymi, których właściciel po prostu nie widzi. Core Web Vitals poniżej normy, zablokowane zasoby, brakujące canonical tagi, zduplikowane meta opisy — to rzeczy, które Google ocenia zanim w ogóle przeczyta treść strony.
                  </p>
                  <p>
                    Audyt SEO w EvolaTec obejmuje osiem obszarów analizowanych łącznie. <strong class="text-on-surface">Każdy problem jest oceniany pod kątem trudności wdrożenia i realnego wpływu na pozycje</strong> — nie dostajesz listy błędów do samodzielnego przebrnięcia, tylko priorytetyzowany plan naprawy.
                  </p>
                  <p>
                    Raport dostarczany jako PDF gotowy do przekazania agencji, freelancerowi lub własnemu developerowi. Audyt kosztuje <strong class="text-on-surface">840 zł netto</strong> i jest gotowy w 5–7 dni roboczych.
                  </p>
                </div>
              </div>

              <div data-reveal="right" class="flex flex-col gap-5">
                <NuxtImg
                  src="/assets/seo-analytics.webp"
                  alt="Panel Google Search Console z analizą błędów crawlowania i widoczności strony w wynikach Google"
                  width="640"
                  height="340"
                  class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                  loading="lazy"
                />
                <div class="grid grid-cols-2 gap-2.5">
                  <div
                    v-for="(item, i) in auditBenefits.slice(0, 4)"
                    :key="item.title"
                    :data-reveal="'scale'"
                    :data-delay="String(i + 1)"
                    class="group flex items-center gap-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div class="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <span class="material-symbols-outlined text-primary text-[16px]" aria-hidden="true">{{ item.icon }}</span>
                    </div>
                    <span class="text-xs font-semibold text-on-surface leading-snug">{{ (item.title.split('—')[0] ?? item.title).trim() }}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 2. Co obejmuje BenefitsSection — gray ═════════════════════════ -->
        <BenefitsSection
          title="Osiem obszarów analizowanych w każdym audycie"
          :benefits="auditBenefits"
        />

        <!-- ══ 3. Cena — primary (purple) ════════════════════════════════════ -->
        <section aria-labelledby="section-price" class="relative overflow-hidden py-section-padding bg-primary">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="animate-float         absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            <div class="animate-float-reverse absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div class="relative max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <!-- Copy -->
              <div data-reveal="left">
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-on-primary/60 mb-3 block">Cena</span>
                <h2 id="section-price" class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-6">
                  Audyt SEO — 840 zł netto, jednorazowo, bez abonamentu
                </h2>
                <div class="space-y-4 text-on-primary/80 leading-relaxed">
                  <p>Audyt SEO kosztuje 840 zł netto — jednorazowa, stała cena, bez abonamentu i bez zobowiązania do kontynuacji współpracy. Brak ukrytych pozycji za dostęp do narzędzi ani opłat za konsultacje.</p>
                  <p>Audyt jest gotowy w 5–7 dni roboczych od dostarczenia dostępu do Google Search Console i GA4 (wystarczy rola „Widok" — tylko do odczytu).</p>
                  <p>Audyt można zamówić bez podpisywania umowy na pozycjonowanie. Jeśli po raporcie zdecydujesz się na miesięczną obsługę SEO, koszt audytu jest zaliczany na poczet pierwszego miesiąca.</p>
                </div>
              </div>

              <!-- Price card -->
              <div data-reveal="right">
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                  <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <span class="material-symbols-outlined text-primary text-[26px]" aria-hidden="true">search_check</span>
                  </div>
                  <h3 class="font-bold text-on-surface text-xl mb-1">SEO Audit</h3>
                  <div class="flex items-baseline gap-2 mb-1">
                    <span class="font-black text-primary text-3xl">840 zł netto</span>
                  </div>
                  <p class="text-sm text-on-surface-variant mb-6">jednorazowo — bez abonamentu</p>
                  <ul class="space-y-2 mb-8" role="list">
                    <li v-for="item in priceIncludes" :key="item" class="flex items-center gap-2 text-sm text-on-surface-variant">
                      <span class="material-symbols-outlined text-primary text-base flex-shrink-0" aria-hidden="true">check_circle</span>
                      {{ item }}
                    </li>
                  </ul>
                  <NuxtLink to="/kontakt">
                    <BaseButton variant="primary" size="lg" class="w-full">Zamów audyt SEO</BaseButton>
                  </NuxtLink>
                  <p class="text-xs text-on-surface-variant text-center mt-4">Stała cena — wycena przed startem projektu</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 4. Porównanie — white ══════════════════════════════════════════ -->
        <section aria-labelledby="section-compare" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg" data-reveal>
              <h2 id="section-compare" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4">
                Profesjonalny audyt SEO vs automatyczne narzędzia online
              </h2>
              <p class="text-on-surface-variant">
                Narzędzia takie jak Semrush czy Ahrefs generują listy błędów — często kilkuset pozycji w jednym raporcie. Problem: te listy nie są priorytetyzowane pod kątem konkretnej domeny i branży.
              </p>
            </div>

            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8 shadow-sm" data-reveal>
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie profesjonalnego audytu SEO z automatycznymi narzędziami online</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Automatyczny audyt online</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Profesjonalny audyt SEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in comparisonRows" :key="row.label" class="border-b border-outline-variant/20" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-on-surface-variant text-xs">{{ row.auto }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5 text-xs">{{ row.manual }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="md:hidden space-y-3 mb-8">
              <div v-for="row in comparisonRows" :key="row.label" class="bg-white rounded-xl border border-outline-variant/30 p-4">
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Narzędzie online</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.auto }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Audyt ekspercki</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.manual }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-stack-lg items-center mt-stack-lg">
              <p class="text-on-surface-variant" data-reveal="left">
                Automatyczne narzędzia są użyteczne jako monitoring — sprawdzasz je regularnie, żeby wychwycić regresje. Audyt ekspercki odpowiada na pytanie, które błędy faktycznie blokują widoczność Twojej strony — i w jakiej kolejności je naprawić.
              </p>
              <NuxtImg
                src="/assets/web-analytics.webp"
                alt="Laptop z raportem SEO pokazującym błędy techniczne strony i priorytety do naprawy"
                width="560"
                height="280"
                class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                data-reveal="right"
                loading="lazy"
              />
            </div>

          </div>
        </section>

        <!-- ══ 5. Jak przebiega — gray (ProcessSection) ══════════════════════ -->
        <ProcessSection
          eyebrow="Jak przebiega"
          title="Jak przebiega audyt SEO — 3 kroki"
          :steps="processSteps"
        />

        <!-- ══ 6. FAQ — white ════════════════════════════════════════════════ -->
        <FAQSection
          title="Najczęściej zadawane pytania o audyt SEO"
          :faqs="faqData"
        />

        <!-- ══ Related ════════════════════════════════════════════════════════ -->
        <RelatedServicesSection
          eyebrow="Kolejny krok"
          title="Po audycie — co dalej"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ══ CTA ═══════════════════════════════════════════════════════════════ -->
    <CTASection
      title="Zamów audyt SEO swojej strony"
      description="840 zł netto, jednorazowo. Raport PDF w 5–7 dni roboczych z priorytetyzowaną listą poprawek technicznych i on-page."
      primary-cta="Zamów audyt SEO"
      secondary-cta="Sprawdź pozycjonowanie"
    />

  </div>
</template>
