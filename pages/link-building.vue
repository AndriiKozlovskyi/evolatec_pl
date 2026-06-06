<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Link Building SEO – Pozyskiwanie Linków | EvolaTec',
  description: 'White hat link building dla firm: wartościowe linki zewnętrzne, które trwale podnoszą pozycję w Google. Od 2 100 zł netto/mies., raport co miesiąc.',
  ogTitle: 'Link Building SEO – Pozyskiwanie Linków | EvolaTec',
  ogDescription: 'White hat link building dla firm: wartościowe linki zewnętrzne, które trwale podnoszą pozycję w Google. Od 2 100 zł netto/mies., raport co miesiąc.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/link-building',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co to jest SEO i czy warto w nie inwestować?',
    answer: 'SEO to działania techniczne i treściowe, które poprawiają widoczność strony w organicznych wynikach Google — bez płacenia za każde kliknięcie. Warto inwestować, jeśli Twoi klienci szukają w Google produktów lub usług, które oferujesz. Dobrze wdrożone SEO z link buildingiem zwraca się po 6–12 miesiącach i utrzymuje efekty nawet po zakończeniu kampanii — czego Google Ads nie robi.',
  },
  {
    question: 'Ile kosztuje pozycjonowanie SEO miesięcznie?',
    answer: 'Pozycjonowanie SEO kosztuje od 1 260 zł netto miesięcznie za Local SEO. SEO z link buildingiem kosztuje od 2 100 zł netto miesięcznie — w tej kwocie zawarte są pozyskiwanie linków zewnętrznych, optymalizacja on-page i raportowanie. Cena jest stała i ustalana przed startem, bez zmian w trakcie kampanii.',
  },
  {
    question: 'Jak sprawić żeby firma pojawiała się w ChatGPT i Gemini?',
    answer: 'Widoczność w ChatGPT, Gemini i Perplexity zależy od autorytetu domeny, struktury treści i danych strukturalnych Schema.org JSON-LD. Mocny profil linków zewnętrznych zwiększa wiarygodność domeny w oczach LLM-ów — bo te silniki korzystają z sygnałów podobnych do tych, których używa Google. Każda strona, którą budujemy, zawiera strukturalne dane JSON-LD czytelne dla crawlerów LLM.',
  },
  {
    question: 'Czy agencja webowa może zagwarantować wyniki SEO?',
    answer: 'Żadna agencja nie może zagwarantować konkretnych pozycji w Google, bo algorytm Google zmienia się niezależnie od działań SEO. Możemy zagwarantować metodologię — white hat link building z weryfikowalnym raportem miesięcznym — i zobowiązać się do przejrzystości: wiesz, które linki zostały pozyskane, skąd i z jakim autorytetem. Wyniki mierzone są w Google Search Console i pokazywane bez retuszu.',
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
      '@id': 'https://evolatec.pl/link-building#webpage',
      url: 'https://evolatec.pl/link-building',
      name: 'Link Building SEO – Pozyskiwanie Linków | EvolaTec',
      description: 'White hat link building dla firm: wartościowe linki zewnętrzne, które trwale podnoszą pozycję w Google. Od 2 100 zł netto/mies., raport co miesiąc.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/link-building#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/link-building#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Pozycjonowanie SEO', item: 'https://evolatec.pl/seo' },
        { '@type': 'ListItem', position: 3, name: 'Link Building', item: 'https://evolatec.pl/link-building' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/link-building#service',
      name: 'Link Building SEO',
      description: 'White hat pozyskiwanie wartościowych linków zewnętrznych dla firm — digital PR, guest posting, resource link building i broken link reclamation. Miesięczne raportowanie.',
      url: 'https://evolatec.pl/link-building',
      serviceType: 'Link Building',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '2100',
          priceCurrency: 'PLN',
          valueAddedTaxIncluded: false,
          billingIncrement: 'P1M',
        },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/link-building#faq',
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
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/link-building' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) }],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'od 2 100 zł', label: 'netto miesięcznie',    icon: 'sell'          },
  { value: '3–8',         label: 'linków miesięcznie',   icon: 'link'          },
  { value: 'DR 30+',      label: 'minimalne kryterium',  icon: 'verified'      },
  { value: 'White hat',   label: 'bez ryzyka kary',      icon: 'security'      },
]

// ── Dlaczego link building (BenefitsSection — karty ze zdjęciem) ─────────────
const benefits = [
  {
    icon: 'verified',
    title: 'Większy autorytet domeny',
    description: 'Wartościowe linki z tematycznie powiązanych, wiarygodnych serwisów trwale wzmacniają autorytet Twojej domeny.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/assets/link-network.webp',
  },
  {
    icon: 'trending_up',
    title: 'Lepsze pozycje w Google',
    description: 'Linki zewnętrzne to jeden z najsilniejszych czynników rankingowych. Większy autorytet to wyższe pozycje.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/assets/seo-analytics.webp',
  },
  {
    icon: 'schedule',
    title: 'Długofalowy efekt',
    description: 'Dobre linki działają długo i stale dostarczają więcej ruchu organicznego — bez płacenia za kliknięcia.',
    bg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image: '/assets/web-analytics.webp',
  },
]

const processSteps = [
  { icon: 'assessment', title: 'Analiza backlinków', description: 'Analiza obecnego profilu linków, konkurencji i potencjału akwizycji.' },
  { icon: 'map', title: 'Strategia', description: 'Indywidualna strategia link buildingu dopasowana do Twojej branży i celów.' },
  { icon: 'people', title: 'Outreach', description: 'Nawiązanie kontaktu z wartościowymi serwisami, mediami i partnerami.' },
  { icon: 'link', title: 'Budowa linków', description: 'Pozyskiwanie wysokiej jakości, tematycznie spójnych backlinków.' },
  { icon: 'monitoring', title: 'Monitoring', description: 'Bieżąca kontrola profilu linków i dalsza optymalizacja.' },
]

// ── Nasze usługi link buildingu (FeaturesSection — primary + zdjęcie) ────────
const features = [
  { icon: 'map', title: 'Strategia link buildingu', description: 'Trwała strategia off-page SEO dopasowana do Twojej branży i celów.' },
  { icon: 'people', title: 'Outreach i współprace', description: 'Kontakt z pasującymi serwisami, blogami i mediami w Twojej niszy.' },
  { icon: 'edit_document', title: 'Guest posty i linki contentowe', description: 'Content-owy link building przez wartościowe artykuły gościnne.' },
  { icon: 'visibility', title: 'Monitoring linków', description: 'Bieżąca kontrola i optymalizacja profilu linków i ich jakości.' },
]

// ── Jakie linki budujemy (SEOSection — lista) ────────────────────────────────
const backlinksTypes = [
  'Redakcyjne linki z mediów branżowych',
  'Katalogi i portale branżowe',
  'Guest posty i linki contentowe',
  'Linki w wartościowych treściach',
  'Lokalne linki dla Local SEO',
  'Tematycznie spójne linki niszowe',
  'Linki z zagranicznych serwisów',
  'Linki autorytetu z mocnych domen',
]

const pricingPlans = [
  {
    name: 'Analiza backlinków',
    price: 'od 840 zł netto',
    delivery: 'jednorazowo',
    highlight: false,
    features: [
      'Audyt profilu linków',
      'Analiza konkurencji',
      'Identyfikacja toksycznych linków',
      'Rekomendacje strategii',
    ],
    cta: 'Zamów analizę',
    ctaLink: '/kontakt',
  },
  {
    name: 'Link Building',
    price: 'od 2 100 zł netto',
    delivery: 'miesięcznie',
    highlight: true,
    features: [
      'Pozyskiwanie 3–8 linków miesięcznie',
      'Domeny z Domain Rating 30+',
      'Digital PR i guest posting',
      'Miesięczny raport: URL, DR, anchor text',
    ],
    cta: 'Rozpocznij kampanię',
    ctaLink: '/kontakt',
  },
  {
    name: 'SEO + Link Building',
    price: 'od 3 360 zł netto',
    delivery: 'miesięcznie',
    highlight: false,
    features: [
      'Wszystko z pakietu Link Building',
      'Pełna optymalizacja on-page i techniczna',
      'Monitoring pozycji fraz',
      'Strategia treści SEO',
    ],
    cta: 'Sprawdź pełne SEO',
    ctaLink: '/seo',
  },
]

const relatedServices = [
  {
    icon: 'manage_search',
    title: 'Pozycjonowanie SEO',
    description: 'Pełna obsługa SEO z audytem technicznym, optymalizacją on-page i link buildingiem w jednym pakiecie.',
    price: 'od 1 260 zł netto',
    href: '/seo',
  },
  {
    icon: 'search_check',
    title: 'Audyt SEO',
    description: 'Jednorazowy audyt techniczny i treściowy z priorytetyzowaną listą poprawek, bez abonamentu.',
    price: '840 zł netto',
    href: '/audyt-seo',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja SEO',
    description: 'Wdrożenie poprawek on-page i technicznych SEO bez stałej umowy — konkretne działania, konkretna cena.',
    price: 'od 1 260 zł netto',
    href: '/optymalizacja-seo',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <HeroSection
      background-image="/assets/link-building-bg.webp"
      badge="Link Building — white hat"
      title="Link building – budujemy wartościowe linki, które podnoszą pozycję w Google"
      description="Pozyskiwanie linków zewnętrznych z tematycznie powiązanych, wysokoautorytatywnych domen — bez PBN-ów, bez ryzyka kary Google. Od 2 100 zł netto miesięcznie, miesięczny raport z każdym pozyskanym linkiem."
      primaryCTA="Rozpocznij kampanię"
      secondaryCTA="Zobacz cennik"
      primary-href="/kontakt"
      secondary-href="#cennik"
      :stats="heroStats"
    />

    <main id="main-content">

      <article>

        <!-- ── Dlaczego link building (BenefitsSection — white) ────────────── -->
        <BenefitsSection
          title="Dlaczego profesjonalny link building jest ważny"
          :benefits="benefits"
        />

        <!-- ── Nasze usługi link buildingu (FeaturesSection — primary) ────── -->
        <FeaturesSection
          title="Nasze usługi link buildingu"
          :features="features"
          image-url="/assets/link-network.webp"
          image-alt="Sieć połączeń między domenami symbolizująca profil linków zewnętrznych SEO"
        />

        <!-- ── Jak działa nasz link building (ProcessSection — container-low) ── -->
        <ProcessSection
          title="Jak działa nasz link building"
          :steps="processSteps"
        />

        <!-- ── Jakie linki budujemy (SEOSection — primary) ────────────────── -->
        <SEOSection
          title="Jakie linki budujemy"
          subtitle="Stawiamy na wysokiej jakości, tematycznie spójne backlinki — bez PBN-ów i masowych linków, które szkodzą domenie."
          :features="backlinksTypes"
          cta-text="Dowiedz się więcej o link buildingu"
          image="/assets/link-building-bg.webp"
          image-alt="Wartościowe linki zewnętrzne budujące autorytet domeny w Google"
        />

        <!-- ── Cennik (PricingSection — gradient) ─────────────────────────── -->
        <PricingSection
          id="cennik"
          title="Cennik link buildingu"
          subtitle="Stała cena miesięczna, ustalana przed startem. Budżet link buildingowy nie jest rozliczany oddzielnie."
          :pricing-plans="pricingPlans"
        />

        <!-- ── FAQ (container-low) ────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o link building"
          :faqs="faqData"
        />

        <!-- ── Powiązane usługi (surface) ─────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Uzupełnij link building o optymalizację techniczną"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Buduj autorytet domeny — linki, które Google nagradza"
      description="Od 2 100 zł netto miesięcznie. White hat metodologia, miesięczny raport z każdym pozyskanym linkiem i stała cena bez niespodzianek."
      primary-cta="Rozpocznij kampanię"
      secondary-cta="Sprawdź pozycjonowanie"
      primary-href="/kontakt"
      secondary-href="/seo"
    />

  </div>
</template>
