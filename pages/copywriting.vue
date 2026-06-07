<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Teksty na stronę www — copywriting SEO | EvolaTec',
  description: 'Teksty na stronę www, które sprzedają i pozycjonują: podstrony usług, strona główna, opisy produktów, landing page. Pisane pod frazy i AI. Wycena indywidualna.',
  ogTitle: 'Teksty na stronę www — copywriting SEO | EvolaTec',
  ogDescription: 'Teksty na stronę www, które sprzedają i pozycjonują — pisane pod konkretne frazy i pod wyszukiwarki AI. Wycena indywidualna.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/copywriting',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztują teksty na stronę internetową?',
    answer: 'Teksty wyceniamy per podstrona lub per projekt — wycena zależy od liczby i rodzaju podstron. Strona z pięcioma podstronami to inny nakład niż sklep z dwustoma opisami produktów, dlatego nie ma jednej ceny. Żeby otrzymać szybką wycenę, wystarczy podać liczbę podstron i ich typ; jeśli zamawiasz też projekt lub wykonanie strony, teksty wyceniamy łącznie.',
  },
  {
    question: 'Czy teksty pisane przez AI wystarczą na stronę firmową?',
    answer: 'Tekst z generatora AI wystarcza na szybką notatkę lub punkt wyjścia, ale na stronie firmowej zwykle brakuje mu trzech rzeczy: konkretnych faktów o Twojej firmie, spójnego tonu marki i strategii fraz pod pozycjonowanie. Generatory uśredniają przekaz, przez co tekst brzmi podobnie do konkurencji. Sami korzystamy z AI jako wsparcia, ale finalny tekst powstaje pod konkretny cel, frazy i markę.',
  },
  {
    question: 'Co to jest copywriting SEO?',
    answer: 'Copywriting SEO to pisanie tekstów, które jednocześnie przekonują czytelnika i są zbudowane pod wyszukiwarkę. Oznacza to dobór fraz kluczowych, na które szukają klienci, naturalne wplecenie ich w treść oraz strukturę nagłówków czytelną dla Google. Dobry copywriting SEO nie poświęca czytelności dla fraz — tekst ma brzmieć naturalnie i sprzedawać, a pozycjonowanie jest wbudowane, nie doklejone.',
  },
  {
    question: 'Czy piszecie teksty pod pozycjonowanie?',
    answer: 'Tak — każdy tekst jest pisany pod konkretne frazy kluczowe oraz pod cytowalność w wyszukiwarkach AI. Przed pisaniem dobieramy frazy dla każdej podstrony, a treść budujemy tak, by odpowiadała na realne pytania klientów w sposób, który Google i asystenci AI mogą zacytować. Pozycjonowanie treści najlepiej działa w parze z technicznym SEO całej strony.',
  },
  {
    question: 'Czy mogę zamówić same teksty bez tworzenia strony?',
    answer: 'Tak. Teksty można zamówić jako oddzielną usługę, gdy stronę masz już gotową i brakuje jej tylko treści. Dostarczamy gotowe teksty w formacie do wdrożenia, z nagłówkami i strukturą pod SEO. Wystarczy podać liczbę i rodzaj podstron, żeby otrzymać wycenę.',
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
      '@id': 'https://evolatec.pl/copywriting#webpage',
      url: 'https://evolatec.pl/copywriting',
      name: 'Teksty na stronę www — copywriting SEO | EvolaTec',
      description: 'Teksty na stronę www, które sprzedają i pozycjonują: podstrony usług, strona główna, opisy produktów, landing page. Pisane pod frazy i AI. Wycena indywidualna.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-intro'] },
      breadcrumb: { '@id': 'https://evolatec.pl/copywriting#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/copywriting#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Projektowanie stron internetowych', item: 'https://evolatec.pl/projektowanie-stron' },
        { '@type': 'ListItem', position: 3, name: 'Teksty na stronę www', item: 'https://evolatec.pl/copywriting' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/copywriting#service',
      name: 'Teksty na stronę www — copywriting SEO',
      serviceType: 'Copywriting SEO i content marketing',
      description: 'Teksty na stronę www pisane pod konkretne frazy kluczowe i pod wyszukiwarki AI: podstrony usług, strona główna, opisy produktów, artykuły blogowe i landing page. Wycena indywidualna.',
      url: 'https://evolatec.pl/copywriting',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/copywriting#faq',
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
  name: 'Jak powstają teksty — od briefu do gotowej treści',
  description: 'Proces tworzenia tekstów na stronę w EvolaTec: od briefu i researchu fraz do gotowej treści.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief i research fraz', text: 'Zbieramy fakty o firmie i ofercie oraz dobieramy frazy kluczowe pod każdą podstronę.' },
    { '@type': 'HowToStep', position: 2, name: 'Pierwsza wersja', text: 'Piszemy tekst pod ustalony cel, frazy i ton marki.' },
    { '@type': 'HowToStep', position: 3, name: 'Poprawki', text: 'Wprowadzamy ustaloną liczbę rund uwag, dopasowując ton i akcenty.' },
    { '@type': 'HowToStep', position: 4, name: 'Przekazanie', text: 'Dostarczamy gotowe teksty w formacie do wdrożenia, z nagłówkami i strukturą pod SEO.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/copywriting' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'Pod frazy',   label: 'Pisane pod SEO i AI',      icon: 'search'        },
  { value: 'Po polsku',   label: 'Native, nie tłumaczenie',  icon: 'translate'     },
  { value: 'Cała strona', label: 'Od głównej po blog',       icon: 'article'       },
  { value: 'Bezpłatna',   label: 'Wycena indywidualna',      icon: 'request_quote' },
]

const introParagraphs = [
  'Firma inwestuje w ładny projekt strony, a potem wkleja w niego teksty napisane w pół godziny wieczorem — i dziwi się, że strona nie sprzedaje. Wygląd przyciąga wzrok na sekundę, ale to tekst decyduje, czy odwiedzający zostaje, rozumie ofertę i wysyła zapytanie.',
  'Trzy błędy powtarzają się najczęściej. Tekst mówi o firmie zamiast o problemie klienta. Jest ogólny, więc nie różni się od konkurencji. I nie jest pisany pod wyszukiwarkę, więc nawet najlepsza treść nie zostaje znaleziona.',
  'Każdy tekst jest pisany pod konkretne frazy kluczowe oraz pod cytowalność w wyszukiwarkach AI, dzięki czemu może być znaleziony zarówno w Google, jak i w odpowiedziach ChatGPT czy Perplexity.',
]

const textTypeServices = [
  {
    icon: 'sell',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    title: 'Teksty na podstrony usług',
    description: 'Konwertujące opisy usług pisane z perspektywy problemu klienta — nie firmowej prezentacji. Każdy tekst zawiera frazy kluczowe i cytowalne zdania dla AI.',
  },
  {
    icon: 'home',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    title: 'Teksty na stronę główną',
    description: 'Tekst główny, sekcje usług i wyróżniki firmy — napisane tak, żeby odwiedzający w 10 sekund wiedział, co oferujesz i dlaczego warto wybrać właśnie Ciebie.',
  },
  {
    icon: 'inventory_2',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'Opisy produktów pod sklep',
    description: 'Opisy sprzedające i zoptymalizowane pod frazy — nie „opisy producenta" wklejone z hurt. Każdy opis jest unikalny i napisany pod konkretne słowo kluczowe.',
  },
  {
    icon: 'feed',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Artykuły blogowe SEO',
    description: 'Artykuły z researchu fraz pisane pod długi ogon — z sekcją FAQ pod rich snippets i strukturą odpowiadającą na zapytania głosowe.',
  },
  {
    icon: 'ads_click',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    title: 'Teksty landing page',
    description: 'Copywriting pod konkretną konwersję — lead, zakup lub zapis. Hierarchia treści zgodna z zasadą AIDA, CTA powtórzone w kluczowych punktach strony.',
  },
]

const checklistColumns = [
  {
    heading: 'Tekst z generatora AI',
    paragraphs: ['Natychmiastowe i bezpłatne — ale uśrednione, bez strategii fraz i bez konkretów o Twojej firmie.'],
    icon: 'info',
    items: [
      'Gotowe w sekundy, bez kosztów',
      'Często ogólne lub zmyślone fakty',
      'Uśredniony, rozpoznawalny ton',
      'Bez strategii fraz kluczowych',
      'Podobny do tekstów konkurencji',
    ],
  },
  {
    heading: 'Copywriting SEO',
    paragraphs: ['Pisany pod konkretny cel, frazy i markę — na podstawie danych o Twojej firmie, nie z generatora.'],
    icon: 'check_circle',
    items: [
      'Kilka dni roboczych, wycena per projekt',
      'Oparte na danych Twojej firmy',
      'Dopasowany ton i głos marki',
      'Każda podstrona pod konkretne frazy',
      'Unikalny przekaz firmy',
    ],
  },
]

const processSteps = [
  {
    icon: 'fact_check',
    title: 'Brief i research fraz',
    description: 'Zbieramy fakty o firmie i ofercie, dobieramy frazy kluczowe pod każdą podstronę na podstawie danych z Google Search Console lub narzędzi SEO.',
  },
  {
    icon: 'edit',
    title: 'Pierwsza wersja',
    description: 'Piszemy tekst pod ustalony cel, frazy i ton marki. Tekst otwiera się od problemu klienta — nie od autoprezentacji firmy.',
  },
  {
    icon: 'rate_review',
    title: 'Poprawki',
    description: 'Wprowadzamy ustaloną liczbę rund uwag, dopasowując ton i akcenty. Każda zmiana jest uzasadniona — nie poprawiamy dla poprawiania.',
  },
  {
    icon: 'task_alt',
    title: 'Przekazanie',
    description: 'Dostarczamy gotowe teksty w formacie do wdrożenia, z nagłówkami H1–H4 i strukturą pod SEO. Wystarczy wkleić do CMS.',
  },
]

const pricingPlans = [
  {
    name: 'Teksty na stronę',
    price: 'od 630 zł netto',
    delivery: 'pojedyncze podstrony',
    highlight: false,
    features: [
      'Jedna podstrona (ok. 500 słów)',
      'Zoptymalizowane pod SEO',
      'Pisane przez specjalistę',
      'Budowane pod Google',
    ],
    cta: 'Zamów teksty',
    ctaLink: '/kontakt',
  },
  {
    name: 'Copywriting landing page',
    price: 'od 1 050 zł netto',
    delivery: 'wysoka konwersja',
    highlight: true,
    badge: 'Najczęściej wybierany',
    features: [
      'Teksty nastawione na konwersję',
      'Optymalizacja CTA i nagłówków',
      'Ukierunkowane na sprzedaż',
      'Gotowe pod testy A/B',
    ],
    cta: 'Zamów copywriting',
    ctaLink: '/kontakt',
  },
  {
    name: 'Kompletna treść strony',
    price: 'od 2 940 zł netto',
    delivery: 'do 5 podstron',
    highlight: false,
    features: [
      'Wszystkie podstrony (do 5)',
      'Strategia treści',
      'Struktura SEO i frazy kluczowe',
      'Profesjonalna realizacja',
    ],
    cta: 'Rozpocznij projekt',
    ctaLink: '/kontakt',
  },
]

const relatedServices = [
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Teksty działają najlepiej w parze z technicznym SEO — audyt, on-page i link building w jednym pakiecie.',
    price: 'od 1 260 zł netto/mies.',
    href: '/seo',
  },
  {
    icon: 'web',
    title: 'Strona internetowa dla firmy',
    description: 'Teksty i strona zamówione razem — wyceniane łącznie i spójne wizualnie od pierwszego ekranu.',
    price: 'od 6 300 zł netto',
    href: '/strona-internetowa',
  },
  {
    icon: 'palette',
    title: 'Branding',
    description: 'Spójny ton marki zaczyna się od identyfikacji wizualnej — logo, paleta, typografia, księga znaku.',
    price: 'Wycena indywidualna',
    href: '/branding',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Teksty na stronę www"
      title="Teksty na stronę www, które sprzedają i pozycjonują"
      description="Piszemy teksty pod konkretne frazy i pod wyszukiwarki AI — od strony głównej po opisy produktów i bloga. Po polsku jako native, nie jako tłumaczenie. Wycena indywidualna."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Sprawdź SEO"
      primary-href="/kontakt"
      secondary-href="/seo"
      :stats="heroStats"
    />

    <main id="main-content">
      <article>

        <!-- ── Intro ─────────────────────────────────────────────────── -->
        <IntroSection
          heading="Dlaczego teksty na stronie decydują, czy klient zostaje"
          :paragraphs="introParagraphs"
          image="/assets/copywriting.webp"
          image-alt="Osoba pisząca profesjonalne teksty na stronę internetową na laptopie przy biurku"
        />

        <!-- ── Services ──────────────────────────────────────────────── -->
        <ServicesSection
          title="Jakie teksty piszemy"
          subtitle="Piszemy treści dla całej strony, nie tylko pojedynczej podstrony — od pierwszego ekranu po opisy produktów i bloga. Wszystkie po polsku jako native."
          :services="textTypeServices"
          background="bg-surface-container-low"
        />

        <!-- ── Checklist ──────────────────────────────────────────────── -->
        <ChecklistSection
          title="Teksty z AI czy od copywritera SEO — co konwertuje i pozycjonuje"
          :columns="checklistColumns"
          bg="surface"
        />

        <!-- ── Process ───────────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak powstają teksty"
          title="Jak powstają teksty — od briefu do gotowej treści"
          :steps="processSteps"
        />

        <!-- ── Pricing ───────────────────────────────────────────────── -->
        <PricingSection
          eyebrow="Wycena"
          title="Ile kosztują teksty na stronę"
          subtitle="Wyceniamy per podstrona lub per projekt. Jeśli zamawiasz u nas również stronę, teksty są wliczone w całość."
          :pricing-plans="pricingPlans"
        />

        <!-- ── FAQ ───────────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o teksty na stronę www"
          :faqs="faqData"
          background="bg-surface"
        />

        <!-- ── Related services ──────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Teksty działają najlepiej w parze z SEO i dobrym projektem"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ──────────────────────────────────────────────────────────── -->
    <CTASection
      title="Teksty, które sprzedają i pozycjonują"
      description="Podaj liczbę podstron — wrócimy z wyceną i przykładem tonu, zanim zaczniemy pisać."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Sprawdź SEO"
    />

  </div>
</template>
