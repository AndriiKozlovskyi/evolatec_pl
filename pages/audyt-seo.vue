<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Audyt SEO Strony Internetowej — 840 zł | EvolaTec',
  description: 'Audyt SEO: Core Web Vitals, błędy crawlowania, on-page SEO i Schema.org. Raport PDF z priorytetami — 840 zł netto, jednorazowo, bez abonamentu.',
  ogTitle: 'Audyt SEO Strony Internetowej — 840 zł | EvolaTec',
  ogDescription: 'Audyt SEO: Core Web Vitals, błędy crawlowania, on-page SEO i Schema.org. Raport PDF z priorytetami — 840 zł netto, jednorazowo, bez abonamentu.',
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
      address: { '@type': 'PostalAddress', addressLocality: 'Wrocław', addressCountry: 'PL' },
      email: 'team@evolatec.pl',
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
      description: 'Audyt SEO: Core Web Vitals, błędy crawlowania, on-page SEO i Schema.org. Raport PDF z priorytetami — 840 zł netto, jednorazowo, bez abonamentu.',
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

// ── Dlaczego audyt SEO (BenefitsSection — karty ze zdjęciem) ─────────────────
const benefits = [
  {
    icon: 'engineering',
    title: 'Pełny audyt techniczny',
    description: 'Czas ładowania, Core Web Vitals, indeksacja, crawling i błędy techniczne — analizowane systematycznie.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/assets/seo-analytics.webp',
  },
  {
    icon: 'edit_document',
    title: 'Analiza on-page i treści',
    description: 'Nagłówki, meta tagi, frazy, linkowanie wewnętrzne i struktura treści — sprawdzone i ocenione.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/assets/seo-optimization.webp',
  },
  {
    icon: 'insights',
    title: 'Analiza konkurencji w cenie',
    description: 'Porównujemy Twoją stronę z konkurencją i wskazujemy konkretny potencjał wzrostu.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/assets/web-analytics.webp',
  },
]

// ── Co zawiera audyt SEO (FeaturesSection — primary + zdjęcie) ───────────────
const features = [
  { icon: 'speed', title: 'Szybkość i wydajność', description: 'Analiza wszystkich czynników wydajności, które Google bierze pod uwagę w rankingu.' },
  { icon: 'smartphone', title: 'Mobile SEO', description: 'Weryfikacja optymalizacji mobilnej i wygody użytkowania na wszystkich urządzeniach.' },
  { icon: 'description', title: 'Treść i frazy kluczowe', description: 'Identyfikacja potencjału fraz i luk treściowych względem konkurencji.' },
  { icon: 'link', title: 'Profil linków', description: 'Analiza profilu linków zewnętrznych i identyfikacja toksycznych backlinków.' },
]

// ── Częste problemy SEO, które wykrywamy (sekcja grid — jak w wersji DE) ──────
const commonProblems = [
  'Wolne ładowanie strony',
  'Brakujące meta tagi',
  'Słaba optymalizacja mobilna',
  'Duplicate content',
  'Zła struktura nagłówków',
  'Brak linkowania wewnętrznego',
  'Problemy z indeksacją',
  'Słaba struktura fraz kluczowych',
]

const problemColors = ['text-red-500', 'text-orange-500', 'text-amber-500', 'text-rose-500']

const processSteps = [
  { icon: 'travel_explore', title: 'Crawl strony', description: 'Pełne crawlowanie witryny w poszukiwaniu błędów technicznych i problemów ze strukturą.' },
  { icon: 'engineering', title: 'Analiza techniczna', description: 'Sprawdzamy czas ładowania, Core Web Vitals, indeksację i bezpieczeństwo.' },
  { icon: 'edit_document', title: 'Check on-page', description: 'Analiza fraz, nagłówków, meta tagów i treści na podstronach.' },
  { icon: 'insights', title: 'Analiza konkurencji', description: 'Porównanie z najważniejszymi konkurentami w Twojej branży.' },
  { icon: 'description', title: 'Raport SEO', description: 'Czytelny raport PDF z priorytetyzowaną listą konkretnych rekomendacji.' },
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

// ── Cennik audytu (PricingSection — 3 pakiety, środkowy wyróżniony) ──────────
const pricingPlans = [
  {
    name: 'Podstawowy audyt SEO',
    price: 'od 840 zł netto',
    delivery: 'jednorazowo',
    highlight: false,
    features: [
      'Analiza techniczna',
      'Check on-page',
      'Optymalizacja mobilna',
      'Szczegółowy raport PDF',
    ],
    cta: 'Zamów audyt',
    ctaLink: '/kontakt',
  },
  {
    name: 'Techniczny audyt SEO',
    price: 'od 1 260 zł netto',
    delivery: 'jednorazowo',
    highlight: true,
    features: [
      'Wszystko z audytu podstawowego',
      'Pełny audyt techniczny',
      'Core Web Vitals',
      'Plan wdrożenia poprawek',
    ],
    cta: 'Zamów audyt techniczny',
    ctaLink: '/kontakt',
  },
  {
    name: 'Kompleksowy audyt SEO',
    price: 'od 1 680 zł netto',
    delivery: 'jednorazowo',
    highlight: false,
    features: [
      'Wszystko z audytu technicznego',
      'Analiza konkurencji',
      'Strategia fraz kluczowych',
      'Potencjał treści i luki contentowe',
    ],
    cta: 'Zamów pełny audyt',
    ctaLink: '/kontakt',
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
      secondaryCTA="Zobacz cennik"
      primary-href="/kontakt"
      secondary-href="#cennik"
      :stats="heroStats"
    />

    <main id="main-content">

      <article>

        <!-- ══ Dlaczego audyt SEO (BenefitsSection — white) ══════════════════ -->
        <BenefitsSection
          title="Dlaczego profesjonalny audyt SEO jest ważny"
          :benefits="benefits"
        />

        <!-- ══ Jak działa nasza analiza SEO (ProcessSection — container-low) ══ -->
        <ProcessSection
          title="Jak działa nasza analiza SEO"
          :steps="processSteps"
        />

        <!-- ══ Co zawiera nasz audyt SEO (FeaturesSection — primary) ═════════ -->
        <FeaturesSection
          title="Co zawiera nasz audyt SEO"
          :features="features"
          image-url="/assets/seo-analytics.webp"
          image-alt="Panel Google Search Console z analizą błędów crawlowania i widoczności strony w wynikach Google"
        />

        <!-- ══ Częste problemy SEO, które wykrywamy (grid — container-low) ════ -->
        <section data-nav-icon="bug_report" class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Częste problemy SEO, które wykrywamy</h2>
            </div>
            <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
              <div
                v-for="(problem, index) in commonProblems"
                :key="problem"
                class="flex gap-4 items-center glass-card p-4 rounded-xl border border-black/10"
              >
                <span class="material-symbols-outlined text-xl flex-shrink-0" :class="problemColors[index % 4]">error</span>
                <p class="font-body-md text-on-surface">{{ problem }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ Cennik (PricingSection — gradient) ════════════════════════════ -->
        <PricingSection
          id="cennik"
          eyebrow="Cennik"
          title="Cennik audytu SEO"
          subtitle="Przejrzyste ceny za profesjonalną analizę SEO. Jeśli po audycie zdecydujesz się na miesięczną obsługę SEO, jego koszt zaliczamy na poczet pierwszego miesiąca."
          :pricing-plans="pricingPlans"
        />

        <!-- ══ FAQ (container-low) ═══════════════════════════════════════════ -->
        <FAQSection
          title="Najczęściej zadawane pytania o audyt SEO"
          :faqs="faqData"
        />

        <!-- ══ Powiązane usługi (surface) ════════════════════════════════════ -->
        <RelatedServicesSection
          eyebrow="Kolejny krok"
          title="Po audycie — co dalej"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ══ CTA ═══════════════════════════════════════════════════════════════ -->
    <CTASection
      title="Zamów audyt SEO swojej strony"
      description="840 zł netto, jednorazowo. Raport PDF w 5–7 dni roboczych z priorytetyzowaną listą poprawek technicznych i on-page."
      primary-cta="Zamów audyt SEO"
      secondary-cta="Sprawdź pozycjonowanie"
      primary-href="/kontakt"
      secondary-href="/seo"
    />

  </div>
</template>
