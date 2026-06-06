<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Lokalne SEO – Pozycjonowanie Lokalne dla Firmy | EvolaTec',
  description: 'Lokalne SEO i optymalizacja wizytówki Google Maps. Bądź widoczny w wynikach lokalnych dla klientów z Twojego miasta. Od 1 260 zł netto/mies.',
  ogTitle: 'Lokalne SEO – Pozycjonowanie Lokalne dla Firmy | EvolaTec',
  ogDescription: 'Lokalne SEO i optymalizacja wizytówki Google Maps. Bądź widoczny w wynikach lokalnych dla klientów z Twojego miasta. Od 1 260 zł netto/mies.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/lokalne-seo',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co to jest Local SEO i kiedy go stosować?',
    answer: 'Local SEO to optymalizacja widoczności firmy w lokalnych wynikach Google i Mapach Google. Stosuje się je wtedy, gdy klientów pozyskujesz z określonego obszaru geograficznego — miasta, dzielnicy lub regionu. Jeśli ktoś wpisuje w Google „fryzjer Kraków" lub „hydraulik Wola", i Twoja firma nie pojawia się w pierwszych trzech wynikach Map Pack, tracisz ruch, który trafia do konkurencji.',
  },
  {
    question: 'Ile kosztuje pozycjonowanie SEO miesięcznie?',
    answer: 'Pozycjonowanie SEO kosztuje od 1 260 zł netto miesięcznie za Local SEO dla jednej lokalizacji. W tej kwocie zawarte są optymalizacja wizytówki Google Business Profile, optymalizacja on-page, lokalne cytowania i raport miesięczny. Cena jest stała i ustalana przed podpisaniem umowy.',
  },
  {
    question: 'Jak sprawić żeby firma pojawiała się w ChatGPT i Gemini?',
    answer: 'GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu. Konkretnie oznacza to: dane strukturalne JSON-LD LocalBusiness, kompletne odpowiedzi na pytania lokalne w treści strony i cytowalne zdania zawierające nazwę firmy, miasto i usługę. LLM-y indeksują te dane niezależnie od wyników Map Pack.',
  },
  {
    question: 'Co to jest GEO optymalizacja?',
    answer: 'GEO optymalizacja (Generative Engine Optimization) to dostosowanie treści i struktury strony do wymagań AI wyszukiwarek — ChatGPT Search, Google Gemini, Perplexity i Microsoft Copilot. Zamiast rankingów w niebieskich linkach chodzi o cytowanie Twojej firmy w odpowiedziach generowanych przez modele językowe. Kluczowe są: Schema.org markup, pełne zdania z weryfikowalnymi faktami i wysoki autorytet domeny. W każdej realizacji EvolaTec te elementy są wdrożone standardowo.',
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
      areaServed: [
        { '@type': 'City', name: 'Wrocław' },
        { '@type': 'City', name: 'Kraków' },
        { '@type': 'City', name: 'Wrocław' },
        { '@type': 'City', name: 'Gdańsk' },
        { '@type': 'Country', name: 'Poland' },
      ],
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
      '@id': 'https://evolatec.pl/lokalne-seo#webpage',
      url: 'https://evolatec.pl/lokalne-seo',
      name: 'Lokalne SEO – Pozycjonowanie Lokalne dla Firmy | EvolaTec',
      description: 'Lokalne SEO i optymalizacja wizytówki Google Maps. Bądź widoczny w wynikach lokalnych dla klientów z Twojego miasta. Od 1 260 zł netto/mies.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/lokalne-seo#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/lokalne-seo#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Pozycjonowanie SEO', item: 'https://evolatec.pl/seo' },
        { '@type': 'ListItem', position: 3, name: 'Lokalne SEO', item: 'https://evolatec.pl/lokalne-seo' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/lokalne-seo#service',
      name: 'Lokalne SEO i pozycjonowanie lokalne',
      description: 'Optymalizacja widoczności firmy w lokalnych wynikach Google, Mapach Google i AI wyszukiwarkach. Obejmuje Google Business Profile, lokalne cytowania, Schema.org LocalBusiness i optymalizację on-page.',
      url: 'https://evolatec.pl/lokalne-seo',
      serviceType: 'Local SEO',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1260',
          priceCurrency: 'PLN',
          valueAddedTaxIncluded: false,
          billingIncrement: 'P1M',
        },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/lokalne-seo#faq',
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
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/lokalne-seo' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) }],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'od 1 260 zł', label: 'netto miesięcznie',      icon: 'sell'          },
  { value: '2–4 mies.',   label: 'do pierwszych efektów',  icon: 'schedule'      },
  { value: 'Map Pack',    label: 'Top 3 Google Maps',       icon: 'location_on'   },
  { value: 'GEO',         label: 'Widoczność w AI — gratis', icon: 'smart_toy'   },
]

// ── Statystyki: dlaczego lokalne SEO (sekcja kart — jak w wersji DE) ─────────
const localStatsCards = [
  { icon: 'phone', value: '80%', text: 'lokalnych wyszukiwań kończy się kontaktem z firmą.' },
  { icon: 'location_on', value: 'Map Pack', text: 'decyduje o widoczności lokalnej i pozyskiwaniu nowych klientów.' },
  { icon: 'verified_user', value: 'Więcej zaufania', text: 'dzięki lokalnym pozycjom i pozytywnym opiniom klientów.' },
]

// ── Korzyści lokalnego SEO (BenefitsSection — karty ze zdjęciem) ─────────────
const benefits = [
  {
    icon: 'location_on',
    title: 'Obecność w Google Maps',
    description: 'Optymalizacja Google Business Profile pod lepsze pozycje w Mapach Google i wynikach lokalnych.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/assets/local-seo.webp',
  },
  {
    icon: 'people',
    title: 'Więcej klientów z regionu',
    description: 'Widoczność przy lokalnych zapytaniach przyciąga klientów gotowych do kontaktu — prosto z Twojej okolicy.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/assets/city-map.webp',
  },
  {
    icon: 'star',
    title: 'Opinie i zaufanie',
    description: 'Strategiczne zarządzanie recenzjami wzmacnia profil lokalny i zaufanie potencjalnych klientów.',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/assets/web-analytics.webp',
  },
]

const processSteps = [
  { icon: 'search', title: 'Analiza lokalna', description: 'Analiza widoczności lokalnej, konkurencji i potencjału fraz w regionie.' },
  { icon: 'storefront', title: 'Konfiguracja Google Business', description: 'Pełna optymalizacja Google Business Profile pod maksymalną widoczność.' },
  { icon: 'edit_document', title: 'Optymalizacja fraz', description: 'Optymalizacja pod lokalne frazy i intencje wyszukiwania Twoich klientów.' },
  { icon: 'article', title: 'Treść i struktura', description: 'Treści lokalne, podstrony lokalizacji i dane strukturalne LocalBusiness.' },
  { icon: 'trending_up', title: 'Wzrost pozycji', description: 'Bieżący monitoring, raporty i optymalizacja dla większej widoczności lokalnej.' },
]

// ── Nasze usługi lokalnego SEO (FeaturesSection — primary + zdjęcie) ─────────
const features = [
  { icon: 'location_on', title: 'Optymalizacja Google Maps', description: 'Profesjonalna optymalizacja Google Business Profile pod lepsze pozycje lokalne.' },
  { icon: 'engineering', title: 'Techniczne lokalne SEO', description: 'Dane strukturalne LocalBusiness, podstrony lokalne i optymalizacja techniczna.' },
  { icon: 'star', title: 'Zarządzanie recenzjami', description: 'Strategie na lepsze opinie Google i większe zaufanie klientów.' },
  { icon: 'analytics', title: 'Raportowanie lokalnego SEO', description: 'Monitoring pozycji lokalnych, widoczności i zapytań od klientów.' },
]

// ── Lokalne SEO dla każdej branży (SEOSection — lista) ───────────────────────
const industries = [
  'Restauracje i kawiarnie',
  'Lekarze i kliniki',
  'Rzemieślnicy i firmy budowlane',
  'Biura nieruchomości',
  'Usługi lokalne',
  'Siłownie i trenerzy',
  'Kancelarie i doradcy',
  'Sklepy stacjonarne',
]


const pricingPlans = [
  {
    name: 'Wizytówka Google Business',
    price: 'od 840 zł netto',
    delivery: 'jednorazowo',
    highlight: false,
    features: [
      'Optymalizacja Google Business Profile',
      'Zdjęcia, opis i kategorie',
      'Spójność danych NAP',
      'Pierwsze pozycje lokalne',
    ],
    cta: 'Optymalizuj wizytówkę',
    ctaLink: '/kontakt',
  },
  {
    name: 'Local SEO',
    price: 'od 1 260 zł netto',
    delivery: 'miesięcznie',
    highlight: true,
    features: [
      'Wszystko z optymalizacji wizytówki',
      'Lokalne cytowania i katalogi branżowe',
      'Dane strukturalne LocalBusiness Schema.org',
      'GEO — widoczność w ChatGPT, Gemini, Perplexity',
      'Miesięczny raport z pozycjami',
    ],
    cta: 'Wybieram Local SEO',
    ctaLink: '/kontakt',
  },
  {
    name: 'Local SEO + Link Building',
    price: 'od 2 100 zł netto',
    delivery: 'miesięcznie',
    highlight: false,
    features: [
      'Wszystko z pakietu Local SEO',
      'Pozyskiwanie linków zewnętrznych z DR 30+',
      'Digital PR i guest posting',
      'Raport linków: URL, DR, anchor text',
    ],
    cta: 'Sprawdź link building',
    ctaLink: '/link-building',
  },
]

const relatedServices = [
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Pełna obsługa SEO z audytem technicznym, optymalizacją on-page i link buildingiem — gdy Twoi klienci są w całej Polsce.',
    price: 'od 1 260 zł netto',
    href: '/seo',
  },
  {
    icon: 'search_check',
    title: 'Audyt SEO',
    description: 'Sprawdź, dlaczego strona nie pojawia się w lokalnych wynikach. Jednorazowy raport PDF, bez abonamentu.',
    price: '840 zł netto',
    href: '/audyt-seo',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja SEO',
    description: 'Techniczne i on-page SEO — wdrożenie konkretnych poprawek bez stałej umowy miesięcznej.',
    price: 'od 1 260 zł netto',
    href: '/optymalizacja-seo',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <HeroSection
      background-image="/assets/city-map.webp"
      badge="Lokalne SEO — pozycjonowanie regionalne"
      title="Lokalne SEO – bądź widoczny tam, gdzie szukają Twoi klienci"
      description="Widoczność w Google Maps, Map Pack i AI wyszukiwarkach dla firm działających lokalnie. Optymalizacja Google Business Profile, lokalne cytowania i Schema.org LocalBusiness — od 1 260 zł netto miesięcznie."
      primaryCTA="Rozpocznij pozycjonowanie lokalne"
      secondaryCTA="Zobacz cennik"
      primary-href="/kontakt"
      secondary-href="#cennik"
      :stats="heroStats"
    />

    <main id="main-content">

      <article>

        <!-- ── Dlaczego lokalne SEO jest ważne (sekcja kart statystyk — surface) -->
        <section data-nav-icon="location_on" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black leading-tight">Dlaczego lokalne SEO jest ważne</h2>
              <p class="text-body-lg text-on-surface-variant mt-4">Klienci szukają lokalnie — bądź tym, kogo znajdą.</p>
            </div>
            <div class="max-w-4xl mx-auto grid md:grid-cols-3 gap-gutter">
              <div
                v-for="card in localStatsCards"
                :key="card.value"
                class="glass-card border border-black/10 p-10 text-center rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <span class="material-symbols-outlined text-[3.5rem] mb-4 text-primary group-hover:scale-110 transition-transform duration-300">{{ card.icon }}</span>
                <div class="font-display text-[2rem] font-black text-primary mb-3">{{ card.value }}</div>
                <p class="font-body-md text-on-surface-variant">{{ card.text }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Korzyści lokalnego SEO (BenefitsSection — white) ────────────── -->
        <BenefitsSection
          title="Korzyści lokalnego SEO dla Twojej firmy"
          :benefits="benefits"
        />

        <!-- ── Jak działa nasze lokalne SEO (ProcessSection — container-low) ── -->
        <ProcessSection
          title="Jak działa nasze lokalne SEO"
          :steps="processSteps"
        />

        <!-- ── Nasze usługi lokalnego SEO (FeaturesSection — primary) ──────── -->
        <FeaturesSection
          title="Nasze usługi lokalnego SEO"
          :features="features"
          image-url="/assets/local-seo.webp"
          image-alt="Wizytówka Google Business Profile firmy lokalnej widoczna w Mapach Google i Map Pack"
        />

        <!-- ── Cennik (PricingSection — gradient) ─────────────────────────── -->
        <PricingSection
          id="cennik"
          title="Ile kosztuje pozycjonowanie lokalne"
          subtitle="Stała cena miesięczna, ustalana przed startem. Bez ukrytych opłat za narzędzia, raportowanie ani konsultacje."
          :pricing-plans="pricingPlans"
        />

        <!-- ── Lokalne SEO dla każdej branży (SEOSection — primary) ────────── -->
        <SEOSection
          title="Lokalne SEO dla każdej branży"
          subtitle="Optymalizujemy widoczność lokalną niezależnie od branży — od gastronomii po usługi profesjonalne."
          :features="industries"
          cta-text="Dowiedz się więcej o lokalnym SEO"
          image="/assets/city-map.webp"
          image-alt="Mapa miasta z oznaczonymi lokalnymi firmami widocznymi w Mapach Google"
        />

        <!-- ── FAQ (container-low) ────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o lokalne SEO"
          :faqs="faqData"
        />

        <!-- ── Powiązane usługi (surface) ─────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Uzupełnij lokalne SEO o inne działania marketingowe"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zacznij pojawiać się tam, gdzie szukają Twoi klienci"
      description="Od 1 260 zł netto miesięcznie. Optymalizacja Google Business Profile, Map Pack i GEO widoczność w ChatGPT, Gemini i Perplexity — stała cena, bez niespodzianek."
      primary-cta="Rozpocznij pozycjonowanie lokalne"
      secondary-cta="Sprawdź pozycjonowanie ogólne"
      primary-href="/kontakt"
      secondary-href="/seo"
    />

  </div>
</template>
