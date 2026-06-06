<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Pozycjonowanie Stron Internetowych w Google | EvolaTec',
  description: 'Pozycjonowanie stron w Google od 1 260 zł netto/mies. SEO Audit jednorazowo 840 zł. Obejmuje audyt techniczny, on-page SEO i linkbuilding.',
  ogTitle: 'Pozycjonowanie Stron Internetowych w Google | EvolaTec',
  ogDescription: 'Pozycjonowanie stron w Google od 1 260 zł netto/mies. SEO Audit jednorazowo 840 zł. Obejmuje audyt techniczny, on-page SEO i linkbuilding.',
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
      description: 'Pozycjonowanie stron w Google od 1 260 zł netto/mies. SEO Audit jednorazowo 840 zł. Obejmuje audyt techniczny, on-page SEO i linkbuilding.',
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

// ── Pozycjonowanie vs Google Ads (ChecklistSection — dwie kolumny) ───────────
const comparisonColumns = [
  {
    heading: 'Kiedy wybrać SEO',
    paragraphs: ['Pozycjonowanie buduje trwałą widoczność organiczną — po zakończeniu współpracy pozycje nie znikają z dnia na dzień. Sprawdza się tam, gdzie celem jest długoterminowy wzrost ruchu.'],
    items: ['Efekty po 3–6 miesiącach', 'Brak kosztu za kliknięcie', 'Pozycje zostają na stałe', 'Ruch rośnie w czasie', 'Długoterminowa widoczność'],
    icon: 'check_circle',
  },
  {
    heading: 'Kiedy wybrać Google Ads',
    paragraphs: ['Google Ads daje ruch od pierwszego dnia, ale płacisz za każde kliknięcie, a ruch znika po zatrzymaniu budżetu. Sprawdza się w kampaniach czasowych i przy promocji nowych produktów.'],
    items: ['Efekty w 1–3 dni', 'Koszt 2–50 zł / klik', 'Ruch znika bez budżetu', 'Wynik zależny od budżetu', 'Najlepsze do kampanii czasowych'],
    icon: 'bolt',
  },
]

const pricingItems = [
  {
    name: 'Audyt SEO',
    price: '840 zł netto',
    billing: 'jednorazowo',
    description: 'Pełny raport techniczny z priorytetyzowaną listą poprawek — Core Web Vitals, błędy crawlowania, on-page i dane strukturalne.',
    href: '/audyt-seo',
    icon: 'search_check',
  },
  {
    name: 'Optymalizacja SEO',
    price: 'od 1 260 zł netto',
    billing: 'miesięcznie',
    description: 'On-page i techniczne SEO wdrażane bezpośrednio w kodzie — bez wtyczek i bez stałej umowy na start.',
    href: '/optymalizacja-seo',
    icon: 'tune',
  },
  {
    name: 'Lokalne SEO',
    price: 'od 1 260 zł netto',
    billing: 'miesięcznie',
    description: 'Google Business Profile, lokalne frazy i autorytet lokalny — dla firm działających w jednym mieście lub regionie.',
    href: '/lokalne-seo',
    icon: 'location_on',
  },
  {
    name: 'Link Building',
    price: 'od 2 100 zł netto',
    billing: 'miesięcznie',
    description: 'Pełna obsługa on-page i content SEO z regularnym pozyskiwaniem linków z tematycznych domen zewnętrznych.',
    href: '/link-building',
    icon: 'hub',
  },
  {
    name: 'Optymalizacja AI (GEO)',
    price: 'W cenie',
    billing: 'każdego projektu',
    description: 'GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity, dane strukturalne i treści cytowalne przez asystentów AI.',
    href: '/optymalizacja-ai',
    icon: 'smart_toy',
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

// ── Intro (component) ────────────────────────────────────────────────────────
const introParagraphs = [
  'Większość firm płaci agencji SEO od 3 do 12 miesięcy, zanim zorientuje się, że nie dostaje nic poza comiesięcznym raportem z wykresem. Praca, która faktycznie podnosi pozycję, to kilka konkretnych czynności — i warto wiedzieć, czego wymagać.',
  'W każdym projekcie zaczynamy od audytu technicznego: Core Web Vitals, dane strukturalne Schema.org, canonicale i błędy crawlowania. <strong class="text-on-surface">SEO techniczne jest wbudowane w kod strony — nie zależy od wtyczek ani zewnętrznych narzędzi.</strong>',
  'Linkbuilding — pozyskiwanie linków z zewnętrznych domen — jest dostępny w pakiecie SEO + Linkbuilding od <strong class="text-on-surface">2 100 zł netto miesięcznie</strong>. Każdy miesiąc kończy się raportem z rankingami konkretnych fraz i listą wykonanych działań.',
]

const introUsps = [
  { title: 'SEO w kodzie', description: 'Techniczne SEO wbudowane w kod strony — bez wtyczek i ryzyka dezaktualizacji po aktualizacji CMS.', icon: 'code', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', borderColor: 'border-blue-500' },
  { title: 'Audyt techniczny', description: 'Core Web Vitals, dane strukturalne Schema.org, canonicale i błędy crawlowania w każdym projekcie.', icon: 'rule', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600', borderColor: 'border-emerald-500' },
  { title: 'Raport z rankingami', description: 'Każdy miesiąc kończy się raportem z pozycjami konkretnych fraz i listą wykonanych działań.', icon: 'summarize', iconBg: 'bg-violet-100', iconColor: 'text-violet-600', borderColor: 'border-violet-500' },
]

// ── Pakiety SEO jako karty usług (ServicesSection) ───────────────────────────
const seoServices = pricingItems.map((item) => ({
  title: item.name,
  description: `${item.price} ${item.billing} — ${item.description}`,
  icon: item.icon,
  iconBg: 'bg-primary/10',
  iconColor: 'text-primary',
  href: item.href,
}))

// ── Co daje dobre SEO (FeaturesSection — primary) ────────────────────────────
const seoFeatures = [
  { icon: 'visibility', title: 'Wysokie pozycje w Google', description: 'Strona pojawia się na pierwszej stronie wyników dla fraz istotnych w Twojej branży.' },
  { icon: 'trending_up', title: 'Więcej ruchu organicznego', description: 'Rosnący ruch bez płacenia za każde kliknięcie — po opłacie miesięcznej ruch organiczny nie generuje kosztu za wejście.' },
  { icon: 'code', title: 'SEO wbudowane w kod', description: 'Techniczne SEO działa bez wtyczek i nie dezaktualizuje się po kolejnej aktualizacji CMS.' },
  { icon: 'smart_toy', title: 'Widoczność w AI (GEO)', description: 'Obecność w ChatGPT, Gemini i Perplexity jest w cenie każdego projektu — bez dopłat.' },
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

        <!-- ── Intro (surface) ────────────────────────────────────────────── -->
        <IntroSection
          heading="Co obejmuje pozycjonowanie stron internetowych"
          :paragraphs="introParagraphs"
          image="/assets/link-building-bg.webp"
          image-alt="Profesjonalista analizujący pozycje strony w Google Search Console i Google Analytics 4"
          :usps="introUsps"
        />

        <!-- ── Pozycjonowanie vs Google Ads (ChecklistSection — container-low) -->
        <ChecklistSection
          title="Pozycjonowanie organiczne vs Google Ads — kiedy które wybrać"
          :columns="comparisonColumns"
          bg="container-low"
        />

        <!-- ── Pakiety i ceny SEO (surface) ───────────────────────────────── -->
        <ServicesSection
          id="cennik"
          title="Pakiety i ceny SEO"
          subtitle="Stałe stawki ustalane przed startem — bez „wyceny indywidualnej”. Minimalny okres współpracy to 3 miesiące, bo Google potrzebuje czasu na ponowne zaindeksowanie zmian."
          variant="centered"
          :services="seoServices"
          learn-more-label="Dowiedz się więcej"
          background="bg-surface"
        />

        <!-- ── Co daje dobre SEO (primary) ────────────────────────────────── -->
        <FeaturesSection
          title="Co daje dobre SEO Twojej firmie"
          :features="seoFeatures"
          image-url="/assets/seo-optimization.webp"
          image-alt="Specjalista SEO analizujący wzrost ruchu organicznego i pozycji fraz w Google"
        />

        <!-- ── Etapy (ProcessSection — container-low) ─────────────────────── -->
        <ProcessSection
          eyebrow="Jak pracujemy"
          title="Jak przebiega pozycjonowanie strony w Google — etapy"
          :steps="processSteps"
        />

        <!-- ── Section 5: FAQ ─────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o pozycjonowanie stron"
          :faqs="faqData"
          background="bg-surface"
        />

        <!-- ── Related services (internal links) ─────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Może Cię zainteresować"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface-container-low"
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
