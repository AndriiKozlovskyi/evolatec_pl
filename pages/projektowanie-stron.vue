<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Projektowanie stron internetowych — webdesign | EvolaTec',
  description: 'Projektowanie stron internetowych od podstaw, bez szablonów: wireframy, projekt graficzny desktop i mobile, design system. Wycena indywidualna.',
  ogTitle: 'Projektowanie stron internetowych — webdesign | EvolaTec',
  ogDescription: 'Projektowanie stron internetowych od podstaw, bez szablonów: wireframy, projekt desktop i mobile, design system. Wycena indywidualna.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/projektowanie-stron',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje projektowanie strony internetowej?',
    answer: 'Projektowanie strony wyceniamy indywidualnie, bo zakres bardzo się różni — od projektu jednej strony głównej po kompletny design system rozbudowanego serwisu. Wycena jest bezpłatna i zależy od liczby unikalnych ekranów, zakresu design systemu i tego, czy projekt obejmuje też wireframy i architekturę informacji. Jeśli zamawiasz u nas również wykonanie strony, projekt jest częścią realizacji i nie jest fakturowany osobno.',
  },
  {
    question: 'Czym różni się indywidualny projekt graficzny od gotowego szablonu?',
    answer: 'Gotowy szablon to motyw używany przez tysiące firm, dostosowywany tylko w ramach jego opcji. Indywidualny projekt powstaje od podstaw pod Twoją markę — kolory, typografia i układ są dobierane pod Twój cel i branżę. Szablon jest tańszy i szybszy, ale wygląda jak konkurencja; projekt indywidualny wyróżnia firmę i buduje wyższą postrzeganą wartość.',
  },
  {
    question: 'Czy mogę zamówić sam projekt strony bez jej wykonania?',
    answer: 'Tak. Projekt można zamówić jako oddzielną usługę z przekazaniem plików developerom — wtedy my projektujemy, a stronę wdraża Twój zespół. Dostajesz pełny design desktop i mobile, design system oraz specyfikację potrzebną do wdrożenia. To częsty wybór firm, które mają własnych programistów i potrzebują wyłącznie warstwy graficznej.',
  },
  {
    question: 'Co zawiera projekt graficzny strony internetowej?',
    answer: 'Projekt obejmuje wireframy i architekturę informacji, pełny projekt graficzny w wersji desktop i mobile oraz design system — spójny zestaw kolorów, typografii i komponentów. Jeśli stronę wdraża zewnętrzny zespół, dołączamy pliki i specyfikację do developmentu. Całość projektowana jest od podstaw, bez korzystania z gotowych szablonów.',
  },
  {
    question: 'Czym różni się projektowanie stron od UI/UX design?',
    answer: 'Projektowanie stron skupia się na warstwie wizualnej witryny — układzie, grafice i design systemie strony internetowej. UI/UX design to szerszy proces obejmujący badanie ścieżek użytkownika, prototypy i testy użyteczności, stosowany głównie przy aplikacjach i serwisach, gdzie sposób korzystania bezpośrednio wpływa na konwersję. Dla typowej strony firmowej wystarcza projekt graficzny; przy aplikacji warto sięgnąć po pełny proces UI/UX.',
  },
  {
    question: 'Jak wygląda proces projektowania strony internetowej?',
    answer: 'Zaczynamy od briefu i researchu — poznajemy markę, cel i konkurencję. Następnie projektujemy wireframy, czyli układ i hierarchię treści zanim wejdziemy w grafikę. Na zaakceptowanym układzie budujemy pełny projekt graficzny desktop i mobile. Na końcu wprowadzamy poprawki i przekazujemy gotowe pliki do wdrożenia lub wdrażamy stronę sami.',
  },
  {
    question: 'Dlaczego responsywne projektowanie stron jest ważne?',
    answer: 'Większość użytkowników korzysta dziś ze smartfonów. Responsywny projekt gwarantuje, że układ, obrazy i treści wyglądają optymalnie na wszystkich urządzeniach — smartfonie, tablecie i desktopie. Google również preferuje witryny zoptymalizowane mobilnie w wynikach wyszukiwania.',
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
      '@type': 'WebSite',
      '@id': 'https://evolatec.pl/#website',
      url: 'https://evolatec.pl',
      name: 'EvolaTec',
      publisher: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://evolatec.pl/projektowanie-stron#webpage',
      url: 'https://evolatec.pl/projektowanie-stron',
      name: 'Projektowanie stron internetowych — webdesign | EvolaTec',
      description: 'Projektowanie stron internetowych od podstaw, bez szablonów: wireframy, projekt graficzny desktop i mobile, design system. Wycena indywidualna.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/projektowanie-stron#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/projektowanie-stron#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Projektowanie stron internetowych', item: 'https://evolatec.pl/projektowanie-stron' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/projektowanie-stron#service',
      name: 'Projektowanie stron internetowych',
      serviceType: 'Projektowanie graficzne i UI stron internetowych',
      description: 'Projektowanie stron internetowych od podstaw, bez szablonów: wireframy, architektura informacji, projekt graficzny desktop i mobile oraz design system. Wycena indywidualna.',
      url: 'https://evolatec.pl/projektowanie-stron',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/projektowanie-stron#faq',
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
  name: 'Jak projektujemy stronę — od wireframe do gotowego designu',
  description: 'Proces projektowania strony internetowej w EvolaTec: od briefu do przekazania gotowego designu.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief i research', text: 'Poznajemy markę, cel strony i konkurencję, ustalamy kierunek wizualny.' },
    { '@type': 'HowToStep', position: 2, name: 'Wireframy', text: 'Projektujemy układ i hierarchię treści w czerni i bieli, zanim wejdziemy w grafikę. Tu zapadają decyzje o strukturze.' },
    { '@type': 'HowToStep', position: 3, name: 'Projekt graficzny', text: 'Na zaakceptowanym układzie budujemy pełny design desktop i mobile wraz z design systemem.' },
    { '@type': 'HowToStep', position: 4, name: 'Poprawki i przekazanie', text: 'Wprowadzamy ustaloną liczbę rund poprawek, po czym przekazujemy gotowe pliki do wdrożenia lub wdrażamy stronę sami.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/projektowanie-stron' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'Od zera',    label: 'Projekt bez szablonów',  icon: 'draw'          },
  { value: '2 wersje',   label: 'Desktop i mobile',        icon: 'devices'       },
  { value: 'System',     label: 'Spójny design system',    icon: 'style'         },
  { value: 'Bezpłatna',  label: 'Wycena indywidualna',     icon: 'request_quote' },
]

const introParagraphs = [
  'Jako agencja webdesign EvolaTec tworzy nowoczesne, szybkie i konwersyjne strony internetowe dla firm, startupów i lokalnych usługodawców.',
  'Profesjonalne projektowanie stron poprawia postrzeganie marki, buduje zaufanie i sprawia, że odwiedzający stają się klientami.',
  'Łączymy nowoczesny design, zoptymalizowaną strukturę SEO i wydajną realizację techniczną — dla trwałej widoczności w sieci.',
]

const features = [
  {
    icon: 'palette',
    title: 'Silna identyfikacja wizualna i siła marki',
    description: 'Profesjonalny projekt buduje natychmiastowe zaufanie — spójne kolory, typografia i niepowtarzalny charakter wizualny Twojej marki.',
  },
  {
    icon: 'devices',
    title: 'Responsywność na wszystkich urządzeniach',
    description: 'Każdy layout działa perfekcyjnie na smartfonach, tabletach i desktopach — Mobile First, pikselowo dopracowany, bez kompromisów.',
  },
  {
    icon: 'ads_click',
    title: 'Design zorientowany na konwersję',
    description: 'Intuicyjna nawigacja, wyraźne wezwania do działania i struktura ukierunkowana na użytkownika — prowadząca odwiedzających do zakupu lub kontaktu.',
  },
  {
    icon: 'speed',
    title: 'Wydajność i techniczna perfekcja',
    description: 'Lekkie zasoby, zoptymalizowane obrazy i czysty kod dla szybkich czasów ładowania i wysokich wyników Lighthouse.',
  },
  {
    icon: 'search_insights',
    title: 'SEO-ready od samego początku',
    description: 'Semantyczny HTML, czysta struktura i zoptymalizowane treści — żeby Twoja strona była znajdowana w Google od pierwszego dnia.',
  },
]

const designServices = [
  {
    title: 'Copywriting na stronę',
    description: 'Profesjonalne treści, ustrukturyzowane teksty i skuteczna strategia contentowa dla Twojej strony.',
    icon: 'edit_square',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    href: '/copywriting',
  },
  {
    title: 'UI/UX Design',
    description: 'Intuicyjne interfejsy i nowoczesne doświadczenia użytkownika dla produktów cyfrowych.',
    icon: 'design_services',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    href: '/ui-ux-design',
  },
  {
    title: 'Branding i identyfikacja wizualna',
    description: 'Profesjonalne identyfikacje wizualne i systemy Corporate Design dla firm.',
    icon: 'brand_awareness',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    href: '/branding',
  },
  {
    title: 'Strona internetowa dla firmy',
    description: 'Nowoczesne strony z silnym wizerunkiem marki i wysoką konwersją — realizacja od 7 dni.',
    icon: 'language',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    href: '/strona-internetowa',
  },
  {
    title: 'Sklep internetowy',
    description: 'Projekty e-commerce, które budują zaufanie i zamieniają odwiedzających w kupujących.',
    icon: 'shopping_bag',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    href: '/sklep-internetowy',
  },
  {
    title: 'Optymalizacja SEO',
    description: 'Technicznie zoptymalizowane strony z szybkim czasem ładowania i widocznością w Google.',
    icon: 'search',
    iconBg: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
    href: '/optymalizacja-seo',
  },
]

const benefits = [
  {
    icon: 'verified',
    title: 'Większe zaufanie',
    description: 'Profesjonalny projekt strony wzmacnia markę i buduje wiarygodność w oczach klientów.',
    image: '/assets/web-design.webp',
  },
  {
    icon: 'trending_up',
    title: 'Wyższa konwersja',
    description: 'Nowoczesne strony z przemyślanym designem generują więcej zapytań i sprzedaży.',
    image: '/assets/business-website.webp',
  },
  {
    icon: 'devices',
    title: 'Pełna responsywność',
    description: 'Perfekcyjne wyświetlanie na wszystkich urządzeniach — smartfon, tablet, desktop.',
    image: '/assets/ui-ux-design.webp',
  },
  {
    icon: 'auto_awesome',
    title: 'Silna siła marki',
    description: 'Indywidualny projekt zostaje w pamięci i wyróżnia firmę na tle konkurencji.',
    image: '/assets/branding-design.webp',
  },
]

const processSteps = [
  {
    icon: 'lightbulb',
    title: 'Brief i research',
    description: 'Poznajemy markę, cel strony i konkurencję, ustalamy kierunek wizualny.',
  },
  {
    icon: 'account_tree',
    title: 'Wireframy',
    description: 'Projektujemy układ i hierarchię treści w czerni i bieli, zanim wejdziemy w grafikę. Tu zapadają decyzje o strukturze.',
  },
  {
    icon: 'palette',
    title: 'Projekt graficzny',
    description: 'Na zaakceptowanym układzie budujemy pełny design desktop i mobile wraz z design systemem.',
  },
  {
    icon: 'handshake',
    title: 'Poprawki i przekazanie',
    description: 'Wprowadzamy ustaloną liczbę rund poprawek, po czym przekazujemy gotowe pliki do wdrożenia lub wdrażamy stronę sami.',
  },
]

const pricingPlans = [
  {
    name: 'Projekt landing page',
    price: 'od 2 100 zł netto',
    delivery: 'od 5 dni roboczych',
    highlight: false,
    features: [
      'Projekt jednej strony (landing)',
      'Responsywny — desktop i mobile',
      'Mobile First',
      '2 rundy poprawek',
      'Przekazanie plików do wdrożenia',
    ],
    cta: 'Zapytaj o wycenę',
    ctaLink: '/kontakt',
  },
  {
    name: 'Projekt strony firmowej',
    price: 'od 4 200 zł netto',
    delivery: 'od 10 dni roboczych',
    badge: 'Najczęściej wybierany',
    highlight: true,
    features: [
      'Wszystko z projektu landing page',
      'Strona firmowa do 10 podstron',
      'Wireframy i architektura informacji',
      'Design system — kolory, typografia',
      '3 rundy poprawek',
    ],
    cta: 'Zapytaj o wycenę',
    ctaLink: '/kontakt',
  },
  {
    name: 'Projekt serwisu',
    price: 'Wycena indywidualna',
    delivery: 'termin ustalany',
    highlight: false,
    features: [
      'Wszystko z projektu firmowego',
      'Rozbudowany serwis lub e-commerce',
      'Pełny design system z komponentami',
      'Spójność z identyfikacją wizualną',
      'Bez limitu rund poprawek',
    ],
    cta: 'Omów projekt',
    ctaLink: '/kontakt',
  },
]

const expertiseBlocks = [
  {
    icon: 'business',
    title: 'Projektowanie stron dla nowoczesnych firm',
    paragraphs: [
      'EvolaTec to Twoja agencja webdesign — tworzymy profesjonalne strony firmowe i projekty graficzne dla marek z różnych branż.',
      'Jako agencja projektująca strony responsywne rozwijamy witryny działające perfekcyjnie na smartfonach, tabletach i desktopach.',
      'Nasze podejście łączy design, wydajność, przyjazność dla użytkownika i SEO, co przekłada się na trwałe wyniki.',
    ],
    tags: ['Webdesign', 'Responsive', 'SEO Ready', 'Mobile First'],
  },
  {
    icon: 'workspace_premium',
    title: 'Indywidualny projekt graficzny i nowoczesna agencja',
    paragraphs: [
      'Niezależnie od tego, czy potrzebujesz strony firmowej, landing page czy rozbudowanego serwisu — projektujemy nowoczesne rozwiązania dla różnych branż.',
      'Profesjonalny projekt strony zwiększa zaufanie, rozpoznawalność marki i współczynnik konwersji.',
      'Jako nowoczesna agencja webowa EvolaTec wspiera firmy w cyfrowym wzroście.',
    ],
    tags: ['Landing Page', 'Branding', 'Konwersja', 'Agencja webowa'],
  },
]

const relatedServices = [
  { icon: 'palette', title: 'UI/UX Design', description: 'Projekt interfejsu oparty na badaniach użytkownika — wireframe i gotowy design.', price: 'Wycena indywidualna', href: '/ui-ux-design' },
  { icon: 'web', title: 'Strona internetowa dla firmy', description: 'Wdrożenie projektu w Nuxt.js — od projektu do gotowej strony z Lighthouse 95–100.', price: 'od 6 300 zł netto', href: '/strona-internetowa' },
  { icon: 'brush', title: 'Branding', description: 'Logo i identyfikacja wizualna — system spójny z projektem strony.', price: 'Wycena indywidualna', href: '/branding' },
]
</script>

<template>
  <div>

    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Projektowanie stron internetowych"
      title="Projektowanie stron internetowych, które robią pierwsze wrażenie"
      description="Projektujemy strony od podstaw, bez szablonów — wireframy, projekt graficzny desktop i mobile oraz spójny design system. Wycena indywidualna, bezpłatna konsultacja."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz UI/UX Design"
      primary-href="/kontakt"
      secondary-href="/ui-ux-design"
      :stats="heroStats"
    />

    <main id="main-content">
      <article>

        <!-- ── Intro ─────────────────────────────────────────────────────── -->
        <IntroSection
          heading="Nowoczesne strony dla firm, marek i produktów cyfrowych"
          :paragraphs="introParagraphs"
          image="/assets/web-design.webp"
          image-alt="Projektant UX szkicujący interfejs strony internetowej na tablecie — prototyp i projekt graficzny"
        />

        <!-- ── Features ──────────────────────────────────────────────────── -->
        <FeaturesSection
          title="Co wyróżnia profesjonalne projektowanie stron."
          :features="features"
          image-url="/assets/web-design.webp"
          image-alt="Profesjonalne projektowanie strony internetowej — projekt graficzny desktop i mobile"
        />

        <!-- ── Services ──────────────────────────────────────────────────── -->
        <ServicesSection
          title="Nasze usługi projektowania"
          variant="centered"
          :services="designServices"
          learn-more-label="Dowiedz się więcej"
          background="bg-surface-container-low"
        />

        <!-- ── Benefits ──────────────────────────────────────────────────── -->
        <BenefitsSection
          title="Dlaczego profesjonalny projekt strony się opłaca"
          :benefits="benefits"
        />

        <!-- ── Process ───────────────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak projektujemy"
          title="Jak projektujemy stronę — od wireframe do gotowego designu"
          :steps="processSteps"
          background="bg-surface"
        />

        <!-- ── Pricing ───────────────────────────────────────────────────── -->
        <PricingSection
          eyebrow="Cennik"
          title="Cennik projektowania stron"
          subtitle="Przejrzyste ceny za profesjonalny projekt graficzny. Jeśli zamawiasz u nas również wykonanie strony, projekt jest częścią realizacji."
          :pricing-plans="pricingPlans"
        />

        <!-- ── Expertise blocks ──────────────────────────────────────────── -->
        <ExpertiseCardsSection
          eyebrow="Projektowanie z EvolaTec"
          eyebrow-icon="verified"
          title="Kompleksowe projekty graficzne dla Twojej marki"
          :blocks="expertiseBlocks"
        />

        <!-- ── FAQ ───────────────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o projektowanie stron internetowych"
          :faqs="faqData"
        />

        <!-- ── Related services ──────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Od projektu do gotowej strony"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zaprojektujemy stronę, która wyróżnia"
      description="Opisz markę i cel strony — wrócimy z kierunkiem wizualnym i wyceną przed startem projektu."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
