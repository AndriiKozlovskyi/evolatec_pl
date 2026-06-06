<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'AI SEO – Optymalizacja Strony pod Sztuczną Inteligencję | EvolaTec',
  description: 'AI SEO i GEO optymalizacja: pojawiaj się w odpowiedziach ChatGPT, Gemini i Perplexity. Schema.org, JSON-LD i strukturowane dane czytelne dla LLM — w cenie każdego projektu.',
  ogTitle: 'AI SEO – Optymalizacja Strony pod Sztuczną Inteligencję | EvolaTec',
  ogDescription: 'AI SEO i GEO optymalizacja: pojawiaj się w odpowiedziach ChatGPT, Gemini i Perplexity. Schema.org, JSON-LD i strukturowane dane czytelne dla LLM — w cenie każdego projektu.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/optymalizacja-ai',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co to jest GEO optymalizacja?',
    answer: 'GEO optymalizacja (Generative Engine Optimization) to dostosowanie strony do wymagań AI wyszukiwarek — ChatGPT Search, Google Gemini, Perplexity i Microsoft Copilot. Cel jest inny niż w tradycyjnym SEO: nie ranking w niebieskich linkach, ale cytowanie w odpowiedziach generowanych przez modele językowe. Kluczowe narzędzia to Schema.org JSON-LD, FAQPage markup i treści z weryfikowalnymi faktami w formacie nadającym się do bezpośredniego przytoczenia.',
  },
  {
    question: 'Jak sprawić żeby firma pojawiała się w ChatGPT i Gemini?',
    answer: 'Trzy działania mają największy wpływ: implementacja danych strukturalnych JSON-LD — Service, LocalBusiness, FAQPage — które LLM-y parsują bezpośrednio; treść zawierająca kompletne zdania-odpowiedzi z weryfikowalnymi faktami: cenami, terminami, nazwami technologii; wysoki autorytet domeny potwierdzony przez mocny profil linków zewnętrznych. GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu realizowanego przez EvolaTec.',
  },
  {
    question: 'Co to jest Schema.org i do czego służy?',
    answer: 'Schema.org to słownik danych strukturalnych pozwalający opisać zawartość strony w formacie czytelnym maszynowo. Dane są wdrażane jako blok JSON-LD w kodzie strony. Google używa Schema.org do tworzenia rich snippets — FAQ, gwiazdek ocen, kart produktów. AI wyszukiwarki — ChatGPT, Gemini, Perplexity — używają go do identyfikowania wiarygodnych źródeł i cytowania konkretnych faktów w generowanych odpowiedziach. Schema.org markup dla FAQ, HowTo, Service i LocalBusiness jest standardem w każdej realizacji EvolaTec.',
  },
  {
    question: 'Jak optymalizować stronę pod AI wyszukiwarki?',
    answer: 'Sześć konkretnych działań: zaimplementuj JSON-LD dla typów Service, LocalBusiness i FAQPage; napisz sekcje FAQ z odpowiedziami kompletnymi w 1–3 zdaniach; dodaj zdania-cytaty z liczbami i faktami do każdej sekcji; oznacz kluczowe fragmenty znacznikiem speakable; buduj autorytet domeny przez white hat link building; aktualizuj daty modyfikacji treści w metadanych. Każde z tych działań jest mierzalne i weryfikowalne przed wdrożeniem i po nim.',
  },
  {
    question: 'Czy sztuczna inteligencja zmienia SEO?',
    answer: 'Tak — i zmiana jest strukturalna, nie kosmetyczna. Google SGE, ChatGPT Search i Perplexity odpowiadają na zapytania bezpośrednio, bez odsyłania użytkownika do listy wyników. Dla stron zoptymalizowanych wyłącznie pod tradycyjne SEO oznacza to mniejszy ruch organiczny przy tej samej pozycji rankingowej — bo użytkownik dostaje odpowiedź, zanim kliknie. Firmy, które wcześniej wdrożą GEO optymalizację, będą cytowane w tych odpowiedziach.',
  },
]

const howToSteps = [
  {
    '@type': 'HowToStep',
    position: 1,
    name: 'Zaimplementuj dane strukturalne JSON-LD',
    text: 'Dodaj Schema.org markup dla typów Service, LocalBusiness, FAQPage i HowTo w sekcji <head> strony. Weryfikuj przez Google Rich Results Test przed wdrożeniem.',
  },
  {
    '@type': 'HowToStep',
    position: 2,
    name: 'Napisz kompletne zdania-cytaty',
    text: 'Każda sekcja strony powinna zawierać co najmniej jedno zdanie stanowiące pełną odpowiedź bez potrzeby czytania kontekstu — z liczbami, nazwami własnymi i weryfikowalnymi faktami.',
  },
  {
    '@type': 'HowToStep',
    position: 3,
    name: 'Dodaj FAQ z pełnymi odpowiedziami',
    text: 'Sekcja FAQPage z odpowiedziami kompletnymi w 1–3 zdaniach jest bezpośrednio parsowana przez AI wyszukiwarki. Każda odpowiedź musi być samodzielna — bez odsyłania do innych sekcji.',
  },
  {
    '@type': 'HowToStep',
    position: 4,
    name: 'Oznacz fragmenty znacznikiem speakable',
    text: 'Speakable wskazuje AI asystentom, które fragmenty strony nadają się do bezpośredniego przytoczenia jako odpowiedź. Stosuj na H1 i pierwszym akapicie każdej sekcji.',
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
      '@id': 'https://evolatec.pl/optymalizacja-ai#webpage',
      url: 'https://evolatec.pl/optymalizacja-ai',
      name: 'AI SEO – Optymalizacja Strony pod Sztuczną Inteligencję | EvolaTec',
      description: 'AI SEO i GEO optymalizacja: pojawiaj się w odpowiedziach ChatGPT, Gemini i Perplexity. Schema.org, JSON-LD i strukturowane dane czytelne dla LLM — w cenie każdego projektu.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/optymalizacja-ai#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/optymalizacja-ai#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Pozycjonowanie SEO', item: 'https://evolatec.pl/seo' },
        { '@type': 'ListItem', position: 3, name: 'AI SEO i GEO optymalizacja', item: 'https://evolatec.pl/optymalizacja-ai' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/optymalizacja-ai#service',
      name: 'AI SEO i GEO optymalizacja',
      description: 'Optymalizacja strony pod AI wyszukiwarki — ChatGPT, Gemini, Perplexity. Schema.org JSON-LD, FAQPage, HowTo i speakable markup wdrożone standardowo w każdym projekcie EvolaTec.',
      url: 'https://evolatec.pl/optymalizacja-ai',
      serviceType: 'GEO Optimization',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        description: 'GEO optymalizacja jest wliczona w cenę każdego projektu strony internetowej — bez dopłat.',
      },
    },
    {
      '@type': 'HowTo',
      '@id': 'https://evolatec.pl/optymalizacja-ai#howto',
      name: 'Jak optymalizować stronę pod AI wyszukiwarki',
      description: 'Cztery konkretne kroki do widoczności w ChatGPT, Gemini i Perplexity.',
      step: howToSteps,
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/optymalizacja-ai#faq',
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
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/optymalizacja-ai' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) }],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'ChatGPT',     label: 'Cytuje Twoją firmę',     icon: 'smart_toy'     },
  { value: 'Gemini',      label: 'Widoczność w Google AI',  icon: 'auto_awesome'  },
  { value: 'Perplexity',  label: 'Odpowiedzi z Twoim URL', icon: 'search'        },
  { value: 'Gratis',      label: 'GEO w cenie projektu',   icon: 'verified'      },
]

const introParagraphs = [
  'Do niedawna wystarczyło pojawić się na pierwszej stronie Google. Dziś coraz więcej zapytań kończy się przed kliknięciem w jakikolwiek wynik — bo ChatGPT, Google Gemini, Perplexity i Microsoft Copilot odpowiadają bezpośrednio, cytując wybrane strony zamiast odsyłać do listy linków.',
  'Firma, której strona nie jest zoptymalizowana pod AI wyszukiwarki, nie istnieje w tych odpowiedziach. Nawet jeśli stoi na pierwszym miejscu w klasycznym Google — w generowanych przez LLM odpowiedziach może nie pojawić się ani razu. Mechanizm selekcji jest inny: modele językowe szukają stron, które zawierają kompletne, cytowalne odpowiedzi na konkretne pytania, wzbogacone o strukturalne dane czytelne maszynowo.',
  'AI SEO — zwane też GEO (Generative Engine Optimization) — to zestaw działań, które sprawiają, że strona spełnia te wymagania równolegle do klasycznej optymalizacji pod Google. Nie zastępuje tradycyjnego SEO. Uzupełnia je o sygnały, których algorytmy klasycznego wyszukiwania nie wymagały — ale AI wyszukiwarki wymagają już dziś.',
]

const geoSignals = [
  {
    icon: 'schema',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    title: 'Dane strukturalne JSON-LD',
    description: 'Schema.org markup w formacie JSON-LD pozwala LLM-om identyfikować typ treści, podmiot, który ją tworzy, i fakty zawarte w odpowiedzi. Service, LocalBusiness, FAQPage i HowTo to typy o najwyższej wartości dla GEO.',
  },
  {
    icon: 'format_quote',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    title: 'Kompletne zdania-cytaty z faktami',
    description: 'Każda sekcja powinna zawierać przynajmniej jedno zdanie, które stanowi pełną odpowiedź bez potrzeby czytania kontekstu. Zdania z liczbami, nazwami własnymi i weryfikowalnymi faktami są cytowane częściej.',
  },
  {
    icon: 'quiz',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'FAQ z pełnymi odpowiedziami',
    description: 'Pytania i odpowiedzi w formacie FAQPage są bezpośrednio parsowane przez silniki AI. Odpowiedź musi być kompletna w 1–3 zdaniach — LLM nie skraca długich akapitów, pomija je.',
  },
  {
    icon: 'verified',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Autorytet domeny',
    description: 'Wysoki Domain Rating i mocny profil linków zewnętrznych to sygnał wiarygodności czytelny zarówno dla Google, jak i dla LLM-ów korzystających z jego indeksu.',
  },
  {
    icon: 'update',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    title: 'Aktualność treści',
    description: 'Modele preferują strony z treściami datowanymi i aktualizowanymi. Data ostatniej modyfikacji w metadanych zwiększa szansę na cytowanie przy pytaniach o stan aktualny.',
  },
  {
    icon: 'record_voice_over',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    title: 'Speakable markup',
    description: 'Znacznik speakable wskazuje LLM-om, które fragmenty strony nadają się do bezpośredniego przytoczenia jako odpowiedź głosowa lub tekstowa. Stosujemy go na H1 i pierwszych akapitach kluczowych sekcji.',
  },
]

const whyGeoNow = [
  {
    icon: 'trending_up',
    title: 'Ruch z AI rośnie — nie czekaj na konkurencję',
    description: 'ChatGPT Search przekroczył 1 miliard zapytań tygodniowo. Perplexity i Gemini rosną podobnie. Firmy, które wdrożą GEO optymalizację wcześniej, zbudują autorytet w indeksach LLM zanim zrobi to konkurencja.',
  },
  {
    icon: 'attach_money',
    title: 'GEO w cenie — bez dodatkowych kosztów',
    description: 'GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu realizowanego przez EvolaTec. Nie ma osobnej pozycji za Schema.org ani za JSON-LD.',
  },
  {
    icon: 'bolt',
    title: 'Efekty szybciej niż w link buildingu',
    description: 'Wdrożenie poprawnego markup Schema.org i FAQPage może skrócić czas do pierwszego cytowania w AI wyszukiwarkach do 4–8 tygodni — wielokrotnie szybciej niż budowanie autorytetu domenowego przez linki.',
  },
  {
    icon: 'layers',
    title: 'Komplementarne z tradycyjnym SEO',
    description: 'GEO nie zastępuje SEO. Tradycyjne SEO buduje fundament — indeksowanie, autorytet, pozycje. GEO nakłada się na ten fundament i otwiera dodatkowy kanał widoczności, z którego tradycyjne SEO nie korzysta.',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Audyt obecności w AI wyszukiwarkach',
    description: 'Sprawdzamy, czy i jak Twoja firma pojawia się w odpowiedziach ChatGPT, Gemini i Perplexity przy zapytaniach z Twojej branży. Identyfikujemy, które frazy kluczowe generują cytowania — i które nie.',
  },
  {
    step: 2,
    title: 'Implementacja danych strukturalnych',
    description: 'Wdrażamy JSON-LD dla typów Service, LocalBusiness, FAQPage, HowTo i speakable. Każdy blok jest weryfikowany przez Google Rich Results Test i testowany na poprawność składniową przed wdrożeniem na produkcję.',
  },
  {
    step: 3,
    title: 'Optymalizacja treści pod cytowania',
    description: 'Przepisujemy lub uzupełniamy kluczowe sekcje strony o zdania-cytaty z weryfikowalnymi faktami, cenami i terminami. Tworzymy lub rozszerzamy sekcje FAQ z odpowiedziami kompletnymi w 1–3 zdaniach.',
  },
  {
    step: 4,
    title: 'Monitoring i iteracja',
    description: 'Monitorujemy wzmianki w AI wyszukiwarkach i zmiany w cytowaniach. Co miesiąc raportujemy, które frazy generują cytowania, i optymalizujemy treści, które wypadły z odpowiedzi AI.',
  },
]

const schemaTypes = [
  {
    title: 'Service',
    description: 'Opisuje usługę, jej cenę i dostawcę. Google i LLM-y używają go do odpowiedzi na zapytania o konkretne usługi z cenami — np. „ile kosztuje pozycjonowanie SEO".',
    icon: 'build',
  },
  {
    title: 'LocalBusiness',
    description: 'Identyfikuje firmę jako podmiot działający w konkretnej lokalizacji. Używany przy zapytaniach lokalnych — „firma SEO Wrocław" — zarówno przez Google Maps, jak i przez AI asystentów.',
    icon: 'store',
  },
  {
    title: 'FAQPage',
    description: 'Parsowany bezpośrednio przez silniki AI. Pytania i odpowiedzi są cytowane dosłownie w generowanych odpowiedziach — o ile każda odpowiedź jest kompletna w 1–3 zdaniach.',
    icon: 'quiz',
  },
  {
    title: 'HowTo',
    description: 'Strukturyzuje procesy krok po kroku. Użyteczny przy zapytaniach instruktażowych — „jak zoptymalizować stronę pod AI" — gdzie LLM cytuje kolejne kroki bezpośrednio.',
    icon: 'checklist',
  },
  {
    title: 'speakable',
    description: 'Wskazuje, które fragmenty strony nadają się jako bezpośrednia odpowiedź głosowa lub tekstowa. Stosujemy go na H1 i pierwszym akapicie każdej kluczowej sekcji.',
    icon: 'record_voice_over',
  },
]

const comparisonRows = [
  { label: 'Cel',                    trad: 'Pozycja w rankingu organicznym Google',         ai: 'Cytowanie w odpowiedziach AI'                },
  { label: 'Punkt styku',            trad: 'Kliknięcie w wynik wyszukiwania',                ai: 'Bezpośrednia odpowiedź bez kliknięcia'        },
  { label: 'Kluczowe sygnały',       trad: 'Linki zewnętrzne, Core Web Vitals, treść',       ai: 'JSON-LD, FAQPage, kompletne zdania-cytaty'    },
  { label: 'Mierzalność',            trad: 'GSC — pozycje, kliknięcia, impressions',         ai: 'Monitoring wzmianek w AI engines'             },
  { label: 'Czas do efektów',        trad: '3–12 miesięcy',                                  ai: '4–8 tygodni od wdrożenia markup'             },
  { label: 'Komplementarność',       trad: 'Fundament — bez tego GEO nie działa',            ai: 'Nakładka — wzmacnia efekty SEO'              },
]

const checklistColumns = [
  {
    heading: 'Co LLM pobiera ze strony przy cytowaniu',
    items: [
      'JSON-LD Service z nazwą, ceną i opisem usługi',
      'JSON-LD FAQPage z pytaniami i pełnymi odpowiedziami',
      'JSON-LD LocalBusiness z adresem i obszarem obsługi',
      'Zdania speakable z H1 i pierwszych akapitów',
      'Tekst z faktami: liczby, terminy, nazwy technologii',
      'Data ostatniej modyfikacji strony (freshness signal)',
    ],
  },
  {
    heading: 'Czego AI wyszukiwarki nie indeksują jako cytowania',
    items: [
      'Treści bez weryfikowalnych faktów — ogólne opisy bez liczb',
      'Odpowiedzi FAQ dłuższe niż 3 zdania — LLM je pomija',
      'Strony bez Schema.org markup — brak kontekstu maszynowego',
      'Treści zablokowane przez JavaScript bez SSR renderowania',
      'Strony o niskim autorytecie domeny (DR poniżej 20)',
      'Zduplikowane treści — identyczne teksty z innych domen',
    ],
  },
]

const pricingPlans = [
  {
    name: 'Strona firmowa z GEO',
    price: 'od 6 300 zł netto',
    delivery: 'od 7 dni roboczych',
    highlight: true,
    badge: 'GEO w cenie',
    features: [
      'GEO optymalizacja — widoczność w ChatGPT, Gemini, Perplexity',
      'Schema.org JSON-LD: Service, LocalBusiness, FAQPage',
      'speakable markup na H1 i kluczowych sekcjach',
      'Lighthouse score 95–100/100',
      'Czas ładowania poniżej 1 sekundy',
      'Responsywny design (mobile-first)',
      '30 dni wsparcia technicznego po wdrożeniu',
    ],
    cta: 'Uzyskaj bezpłatną wycenę',
    ctaLink: '/kontakt',
    note: 'Stała cena — wycena przed startem projektu',
  },
  {
    name: 'Pozycjonowanie SEO z GEO',
    price: 'od 1 260 zł netto',
    delivery: 'miesięcznie',
    highlight: false,
    features: [
      'Audyt i wdrożenie GEO optymalizacji',
      'Schema.org dla wszystkich podstron usługowych',
      'Optymalizacja FAQ pod cytowania AI',
      'Monitoring wzmianek w AI wyszukiwarkach',
      'Bieżąca optymalizacja on-page',
      'Miesięczny raport z pozycjami i cytowaniami',
    ],
    cta: 'Sprawdź pozycjonowanie',
    ctaLink: '/seo',
    note: 'Stała cena — wycena przed startem projektu',
  },
]

const relatedServices = [
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Pełna obsługa SEO z GEO optymalizacją — fundament dla widoczności zarówno w Google, jak i w AI wyszukiwarkach.',
    link: '/seo',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja SEO',
    description: 'Techniczne i on-page SEO — implementacja Schema.org, poprawa Core Web Vitals i struktury treści pod GEO.',
    link: '/optymalizacja-seo',
  },
  {
    icon: 'search_check',
    title: 'Audyt SEO',
    description: 'Sprawdź, czy Twoja strona spełnia wymagania GEO — jednorazowy raport PDF z priorytetami. 840 zł netto.',
    link: '/audyt-seo',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <HeroSection
      background-image="/assets/ai-bg.webp"
      badge="AI SEO — GEO optymalizacja"
      title="AI SEO – wykorzystaj sztuczną inteligencję, żeby wyprzedzić konkurencję w Google"
      description="Pojawiaj się w odpowiedziach ChatGPT, Gemini i Perplexity — nie tylko w rankingach Google. Schema.org, JSON-LD i strukturowane dane czytelne dla LLM wdrożone standardowo w każdym projekcie EvolaTec."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Jak działa GEO"
      :stats="heroStats"
    />

    <main id="main-content">


      <article>

        <!-- ── Section 1: Czym jest AI SEO ───────────────────────────────── -->
        <IntroSection
          heading="Czym jest AI SEO i jak zmienia widoczność firmy w internecie"
          :paragraphs="introParagraphs"
          image="/assets/ai-robot.webp"
          image-alt="Interfejs asystenta AI odpowiadającego na pytanie użytkownika z cytatem ze strony firmowej"
        />

        <!-- ── Section 2: 6 sygnałów GEO ─────────────────────────────────── -->
        <ServicesSection
          title="GEO optymalizacja – 6 sygnałów, które decydują o cytowaniu w AI"
          variant="left"
          :services="geoSignals"
        />

        <!-- ── Section 3: Dlaczego teraz ─────────────────────────────────── -->
        <BenefitsSection
          title="Firmy bez GEO optymalizacji znikają z odpowiedzi AI — zanim konkurencja to zrobi"
          :benefits="whyGeoNow"
        />

        <!-- ── Section 4: Jak wdrażamy GEO ───────────────────────────────── -->
        <ProcessSection
          title="Jak wdrażamy GEO optymalizację — 4 etapy"
          :steps="processSteps"
        />

        <!-- ── Section 5: Typy Schema.org ────────────────────────────────── -->
        <FeaturesSection
          title="5 typów Schema.org o najwyższej wartości dla AI wyszukiwarek"
          :features="schemaTypes"
          image-url="/assets/code-editor.webp"
        />

        <!-- ── Section 6: Co LLM pobiera / czego nie ─────────────────────── -->
        <ChecklistSection
          bg="container-low"
          :columns="checklistColumns"
        />

        <!-- ── Section 7: Tradycyjne SEO vs AI SEO — tabela ──────────────── -->
        <section
          aria-labelledby="section-compare"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2
                id="section-compare"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Tradycyjne SEO vs AI SEO — czym się różnią i co wybrać
              </h2>
              <p class="text-on-surface-variant">
                Tradycyjne SEO i AI SEO nie wykluczają się — ale mają różne mechanizmy działania i różne punkty styku z użytkownikiem. Wybór nie istnieje: potrzebujesz obu. Bez tradycyjnego SEO domena nie ma autorytetu. Bez GEO optymalizacji strona znika z odpowiedzi AI.
              </p>
            </div>

            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie tradycyjnego SEO z AI SEO i GEO optymalizacją</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Tradycyjne SEO</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">AI SEO / GEO</th>
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
                    <td class="p-4 text-center text-on-surface-variant">{{ row.trad }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.ai }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in comparisonRows"
                :key="row.label"
                class="bg-white rounded-xl border border-outline-variant/30 p-4"
              >
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Tradycyjne SEO</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.trad }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">AI SEO / GEO</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.ai }}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <!-- ── Section 8: Cennik ──────────────────────────────────────────── -->
        <PricingSection
          title="Schema.org i JSON-LD — fundament widoczności w AI wyszukiwarkach"
          subtitle="GEO optymalizacja jest w cenie każdego projektu EvolaTec — bez osobnych opłat za markup Schema.org ani JSON-LD."
          :pricing-plans="pricingPlans"
        />

        <!-- ── Section 9: FAQ ─────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o AI SEO i GEO optymalizację"
          :faqs="faqData"
        />

        <!-- ── Related services ───────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Zbuduj pełną widoczność — w Google i w AI"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Pojaw się tam, gdzie Google już nie wystarczy"
      description="GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu EvolaTec. Schema.org, JSON-LD i speakable markup wdrożone standardowo, bez dopłat."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Sprawdź pozycjonowanie SEO"
    />

  </div>
</template>
