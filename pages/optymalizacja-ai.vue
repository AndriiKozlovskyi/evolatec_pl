<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'AI SEO – Optymalizacja pod Sztuczną Inteligencję | EvolaTec',
  description: 'AI SEO i GEO: pojawiaj się w odpowiedziach ChatGPT, Gemini i Perplexity. Schema.org i JSON-LD czytelne dla LLM — w cenie każdego projektu.',
  ogTitle: 'AI SEO – Optymalizacja pod Sztuczną Inteligencję | EvolaTec',
  ogDescription: 'AI SEO i GEO: pojawiaj się w odpowiedziach ChatGPT, Gemini i Perplexity. Schema.org i JSON-LD czytelne dla LLM — w cenie każdego projektu.',
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
      name: 'AI SEO – Optymalizacja pod Sztuczną Inteligencję | EvolaTec',
      description: 'AI SEO i GEO: pojawiaj się w odpowiedziach ChatGPT, Gemini i Perplexity. Schema.org i JSON-LD czytelne dla LLM — w cenie każdego projektu.',
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

// ── SEO vs GEO (tabela — jak w wersji DE) ────────────────────────────────────
const seoVsGeoRows = [
  { criterion: 'Cel', seo: 'Wyniki wyszukiwania Google (SERP)', geo: 'Odpowiedzi AI i bezpośrednie cytaty' },
  { criterion: 'Główna metoda', seo: 'Frazy kluczowe i linki', geo: 'Semantyka, struktura i Schema.org' },
  { criterion: 'Efekt', seo: 'Pozycja na liście wyników', geo: 'Bezpośrednia rekomendacja AI i cytat' },
  { criterion: 'Format danych', seo: 'Meta tagi, sitemap', geo: 'FAQ, HowTo, Service Schema' },
  { criterion: 'Platformy docelowe', seo: 'Google, Bing', geo: 'ChatGPT, Gemini, Perplexity, Claude' },
  { criterion: 'Pomiar efektów', seo: 'Pozycje, CTR, ruch', geo: 'Widoczność w AI, cytaty, wzmianki marki' },
  { criterion: 'Horyzont czasowy', seo: '3–6 miesięcy', geo: '1–3 miesiące' },
  { criterion: 'Status 2026', seo: 'Ugruntowane, wciąż ważne', geo: 'Rosnące, przewaga konkurencyjna' },
]

// ── Co GEO daje Twojej firmie (FeaturesSection — primary + zdjęcie) ──────────
const features = [
  { icon: 'smart_toy', title: 'Widoczność w odpowiedziach AI', description: 'Twoja strona jest rozpoznawana przez ChatGPT, Gemini i Perplexity jako wiarygodne źródło i cytowana w odpowiedziach.' },
  { icon: 'trending_up', title: 'Strategia na przyszłość', description: 'GEO zabezpiecza widoczność, gdy klasyczne pozycje Google są wypierane przez odpowiedzi AI.' },
  { icon: 'verified_user', title: 'Silniejszy autorytet marki', description: 'Regularne wzmianki w odpowiedziach AI budują markę jako zaufane źródło w branży.' },
  { icon: 'analytics', title: 'Lepsza jakość treści', description: 'Treści zoptymalizowane pod GEO są czytelniejsze, lepiej ustrukturyzowane i łatwiej indeksowalne.' },
]

// ── Kluczowe elementy GEO (ServicesSection — centered) ───────────────────────
const geoElements = [
  { title: 'Wydajność techniczna', description: 'Szybkie ładowanie, Core Web Vitals i czysta architektura pozwalają AI sprawnie crawlować stronę.', icon: 'speed', iconBg: 'bg-primary/10', iconColor: 'text-primary', href: '/kontakt' },
  { title: 'Semantyczne treści', description: 'Jasne pytania i odpowiedzi, tabele porównawcze i ustrukturyzowane teksty pomagają AI rozpoznać ekspertyzę.', icon: 'article', iconBg: 'bg-primary/10', iconColor: 'text-primary', href: '/kontakt' },
  { title: 'Dane strukturalne', description: 'Schema.org dla FAQ, HowTo, Service i Organization — czytelne maszynowo dla LLM i AI wyszukiwarek.', icon: 'schema', iconBg: 'bg-primary/10', iconColor: 'text-primary', href: '/kontakt' },
  { title: 'Autorytet i zaufanie', description: 'Wartościowe treści i silna obecność marki zwiększają szansę, że AI użyje Twojej strony jako źródła.', icon: 'verified', iconBg: 'bg-primary/10', iconColor: 'text-primary', href: '/kontakt' },
]

const processSteps = [
  { icon: 'search_check', title: 'Analiza GEO', description: 'Analiza obecnej widoczności strony w AI i identyfikacja konkretnego potencjału.' },
  { icon: 'account_tree', title: 'Architektura treści', description: 'Semantyczna struktura, hierarchia informacji i format pytanie–odpowiedź dla LLM.' },
  { icon: 'schema', title: 'Schema markup', description: 'Wdrożenie FAQ, HowTo, Service i Organization Schema dla danych czytelnych maszynowo.' },
  { icon: 'edit_document', title: 'Treści pod AI', description: 'Autorytatywne, jasno ustrukturyzowane treści, które AI rozpoznaje i cytuje jako źródło.' },
  { icon: 'monitoring', title: 'Monitoring GEO', description: 'Bieżąca kontrola widoczności w AI i ciągłe doskonalenie wyników GEO.' },
]

// ── Korzyści GEO (BenefitsSection — karty ze zdjęciem) ───────────────────────
const benefits = [
  {
    icon: 'smart_toy',
    title: 'Widoczność w ChatGPT i Gemini',
    description: 'Twoja marka jest rekomendowana i cytowana bezpośrednio przez najczęściej używane asystenty AI.',
    bg: 'bg-gradient-to-br from-purple-600 to-indigo-800',
    image: '/assets/ai-robot.webp',
  },
  {
    icon: 'trending_up',
    title: 'Trwała przewaga konkurencyjna',
    description: 'Wczesne wdrożenie GEO zapewnia mocną pozycję w widoczności AI, zanim dogoni Cię konkurencja.',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/assets/seo-analytics.webp',
  },
  {
    icon: 'person_add',
    title: 'Lepiej dopasowane zapytania',
    description: 'Użytkownicy, którzy trafiają na Ciebie przez odpowiedzi AI, są już poinformowani i gotowi do kontaktu.',
    bg: 'bg-gradient-to-br from-emerald-600 to-teal-800',
    image: '/assets/web-analytics.webp',
  },
]

// ── GEO w cenie każdej strony (SEOSection — lista) ───────────────────────────
const geoChecklist = [
  'Schema FAQ — czytelne maszynowo dla wszystkich systemów AI',
  'Dane strukturalne HowTo i Service (Schema.org)',
  'Semantyczna architektura treści dla crawlerów LLM',
  'Tabele porównawcze pod zapytania zakupowe',
  'Autorytatywne odpowiedzi na częste pytania użytkowników',
  'Wydajność techniczna (Core Web Vitals, ładowanie < 1s)',
  'Schema Organization i Website dla autorytetu marki',
  'Czytelna hierarchia informacji w strukturze H1–H3',
]

const relatedServices = [
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Pełna obsługa SEO z GEO optymalizacją — fundament dla widoczności zarówno w Google, jak i w AI wyszukiwarkach.',
    price: 'od 1 260 zł netto',
    href: '/seo',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja SEO',
    description: 'Techniczne i on-page SEO — implementacja Schema.org, poprawa Core Web Vitals i struktury treści pod GEO.',
    price: 'od 1 260 zł netto',
    href: '/optymalizacja-seo',
  },
  {
    icon: 'search_check',
    title: 'Audyt SEO',
    description: 'Sprawdź, czy Twoja strona spełnia wymagania GEO — jednorazowy raport PDF z priorytetami.',
    price: '840 zł netto',
    href: '/audyt-seo',
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
      secondaryCTA="Sprawdź pozycjonowanie SEO"
      primary-href="/kontakt"
      secondary-href="/seo"
      :stats="heroStats"
    />

    <main id="main-content">

      <article>

        <!-- ── Czym jest GEO (sekcja split + badge — jak w wersji DE) ──────── -->
        <section class="py-8 md:py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-8 md:gap-stack-lg items-center">
              <div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
                  Czym jest GEO?
                </span>
                <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black text-on-surface leading-tight mb-6">Czym jest Generative Engine Optimization?</h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p v-for="(p, i) in introParagraphs" :key="i" v-html="p"></p>
                </div>
              </div>
              <div class="relative">
                <NuxtImg
                  src="/assets/ai-bg.webp"
                  alt="GEO optymalizacja pod wyszukiwarki AI — ChatGPT, Gemini i Perplexity"
                  width="640"
                  height="427"
                  sizes="100vw md:50vw lg:640px"
                  loading="lazy"
                  class="w-full rounded-2xl object-cover"
                />
                <div class="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-outline-variant/20">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary text-2xl">verified</span>
                    <div>
                      <p class="font-bold text-on-surface text-sm">GEO w cenie</p>
                      <p class="text-xs text-on-surface-variant">W każdym projekcie EvolaTec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── SEO vs GEO — tabela (jak w wersji DE) ───────────────────────── -->
        <section class="py-8 md:py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="text-center mb-8 md:mb-stack-lg">
              <h2 class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight">SEO vs GEO — czym się różnią?</h2>
              <p class="text-on-surface-variant mt-3 max-w-2xl mx-auto">Obie strategie się uzupełniają — ale GEO to niezbędne rozszerzenie pod wyszukiwanie sterowane przez AI.</p>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3">
              <div v-for="(row, i) in seoVsGeoRows" :key="i" class="bg-white rounded-xl border border-outline-variant/30 p-4">
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.criterion }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1.5">Klasyczne SEO</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.seo }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1.5">GEO</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.geo }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-surface-container-low">
                    <th class="text-left p-4 font-bold text-on-surface border-b border-outline-variant/30 w-1/4">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant border-b border-outline-variant/30">Klasyczne SEO</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5 border-b border-outline-variant/30">GEO (przyszłość)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in seoVsGeoRows" :key="i" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                    <td class="p-4 font-semibold text-on-surface">{{ row.criterion }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.seo }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.geo }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ── Co GEO daje Twojej firmie (FeaturesSection — primary) ───────── -->
        <FeaturesSection
          title="Co GEO daje Twojej firmie"
          :features="features"
          image-url="/assets/code-editor.webp"
          image-alt="Dane strukturalne Schema.org i JSON-LD w edytorze kodu — fundament widoczności w AI"
        />

        <!-- ── Kluczowe elementy GEO (ServicesSection — centered) ──────────── -->
        <ServicesSection
          title="Kluczowe elementy GEO optymalizacji"
          subtitle="Te cztery filary tworzą podstawę maksymalnej widoczności w AI."
          variant="centered"
          :services="geoElements"
          learn-more-label="Dowiedz się więcej"
          background="bg-surface"
        />

        <!-- ── Jak optymalizujemy pod AI (ProcessSection — container-low) ──── -->
        <ProcessSection
          title="Jak optymalizujemy Twoją stronę pod wyszukiwanie AI"
          :steps="processSteps"
        />

        <!-- ── Korzyści GEO (BenefitsSection — white) ──────────────────────── -->
        <BenefitsSection
          title="Korzyści GEO dla Twojej firmy"
          :benefits="benefits"
        />

        <!-- ── GEO w cenie każdej strony (SEOSection — primary) ────────────── -->
        <SEOSection
          title="GEO w cenie każdej strony"
          subtitle="Podstawowa optymalizacja GEO jest standardem w każdej stronie, którą tworzymy — bez dopłat."
          :features="geoChecklist"
          cta-text="Dowiedz się więcej o GEO"
          image="/assets/seo-optimization.webp"
          image-alt="Lista elementów GEO wdrażanych standardowo w każdej stronie EvolaTec"
        />

        <!-- ── FAQ (container-low) ────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o AI SEO i GEO optymalizację"
          :faqs="faqData"
        />

        <!-- ── Powiązane usługi (surface) ─────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Zbuduj pełną widoczność — w Google i w AI"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Pojaw się tam, gdzie Google już nie wystarczy"
      description="GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu EvolaTec. Schema.org, JSON-LD i speakable markup wdrożone standardowo, bez dopłat."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Sprawdź pozycjonowanie SEO"
      primary-href="/kontakt"
      secondary-href="/seo"
    />

  </div>
</template>
