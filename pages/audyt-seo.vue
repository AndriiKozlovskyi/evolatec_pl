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
      '@id': 'https://evolatec.pl/audyt-seo#webpage',
      url: 'https://evolatec.pl/audyt-seo',
      name: 'Audyt SEO Strony Internetowej — 840 zł | EvolaTec',
      description: 'Profesjonalny audyt SEO: Core Web Vitals, błędy crawlowania, on-page SEO, Schema.org, profil linków. Raport PDF z priorytetami — 840 zł netto, jednorazowo, bez abonamentu.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
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
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '840',
          priceCurrency: 'PLN',
          valueAddedTaxIncluded: false,
        },
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

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: '840 zł',    label: 'Netto, jednorazowo',  icon: 'sell'        },
  { value: '5–7 dni',   label: 'Czas realizacji',     icon: 'schedule'    },
  { value: 'PDF',       label: 'Raport z priorytetami', icon: 'description' },
  { value: 'Bez umowy', label: 'Brak abonamentu',     icon: 'verified'    },
]

const auditAreas = [
  { icon: 'speed',           label: 'Core Web Vitals — LCP, CLS, INP'           },
  { icon: 'bug_report',      label: 'Błędy crawlowania i indeksowania'           },
  { icon: 'tag',             label: 'Meta tagi i struktura nagłówków H1–H4'      },
  { icon: 'schema',          label: 'Dane strukturalne Schema.org JSON-LD'       },
  { icon: 'link_off',        label: 'Profil linków zewnętrznych'                 },
  { icon: 'phone_iphone',    label: 'Mobile-friendliness i UX mobilny'           },
  { icon: 'search_insights', label: 'Raporty Google Search Console'             },
  { icon: 'list_alt',        label: 'Lista priorytetów z oceną trudności'        },
]

const comparisonRows = [
  { label: 'Koszt',               auto: '0–300 zł/mies. (abonament narzędzia)',  manual: '840 zł netto, jednorazowo'             },
  { label: 'Priorytetyzacja',     auto: 'Brak — lista błędów bez oceny wpływu',  manual: 'Każdy problem oceniany wg wpływu i trudności' },
  { label: 'Interpretacja',       auto: 'Algorytmiczna, bez kontekstu biznesowego', manual: 'Ręczna, z uwzględnieniem typu strony i branży' },
  { label: 'Analiza GSC',         auto: 'Podstawowa lub niedostępna',            manual: 'Pełna — błędy, ostrzeżenia, wyłączenia' },
  { label: 'Zalecenia',           auto: 'Generyczne',                            manual: 'Konkretne poprawki z opisem technicznym' },
  { label: 'Czas dostarczenia',   auto: 'Natychmiast, automatycznie',            manual: 'PDF w 5–7 dni roboczych'                },
]

const processSteps = [
  {
    icon: 'login',
    title: 'Dostęp do Google Search Console i GA4',
    description: 'Potrzebujemy dostępu do Google Search Console i Google Analytics 4 na poziomie widoku tylko do odczytu — nie edytora, nie administratora. Bez danych z Search Console audyt byłby niekompletny — narzędzia zewnętrzne nie mają dostępu do błędów crawlowania ani do rzeczywistej widoczności fraz.',
  },
  {
    icon: 'manage_search',
    title: 'Analiza techniczna i on-page',
    description: 'Przeprowadzamy pełne crawlowanie domeny, analizę Core Web Vitals, przegląd struktury meta tagów i nagłówków, weryfikację danych strukturalnych Schema.org oraz ręczną analizę raportów Google Search Console. Profil linków zewnętrznych sprawdzamy przez Ahrefs i GSC — nie bazujemy wyłącznie na automatycznych flagach.',
  },
  {
    icon: 'description',
    title: 'Raport PDF z listą priorytetów',
    description: 'Raport jest dostarczany jako PDF z podziałem na trzy grupy: poprawki krytyczne, ważne i opcjonalne. Każda pozycja zawiera opis problemu, wpływ na widoczność i rekomendację techniczną. Raport kończy krótkie omówienie wyników bez dodatkowych opłat.',
  },
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

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Audyt SEO — jednorazowy"
      title="Profesjonalny audyt SEO – sprawdź, dlaczego Twoja strona nie jest widoczna w Google"
      description="Kompletny raport techniczny: Core Web Vitals, błędy crawlowania, on-page SEO, dane strukturalne Schema.org i priorytetyzowana lista poprawek. Gotowy w 5–7 dni roboczych — 840 zł netto, bez abonamentu."
      primaryCTA="Zamów audyt SEO"
      secondaryCTA="Co zawiera audyt"
      primary-href="/kontakt"
      secondary-href="#zakres"
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

        <!-- ── Section 1: Co zawiera audyt SEO ──────────────────────────── -->
        <section
          id="zakres"
          aria-labelledby="section-scope"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

              <div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">search_check</span>
                  Jednorazowy raport techniczny
                </span>

                <h2
                  id="section-scope"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co zawiera audyt SEO strony internetowej
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Większość stron, które nie pojawiają się w Google, nie ma problemu z brakiem treści ani budżetem linków — mają problem z błędami technicznymi, których właściciel po prostu nie widzi. Core Web Vitals poniżej normy, zablokowane zasoby w robots.txt, brakujące canonical tagi, zduplikowane meta opisy — to rzeczy, które Google ocenia przed tym, zanim w ogóle przeczyta treść strony.
                  </p>
                  <p>
                    Audyt SEO w EvolaTec obejmuje osiem obszarów analizowanych łącznie, nie jako osobne punkty do odhaczenia. <strong class="text-on-surface">Każdy znaleziony problem jest oceniany pod kątem trudności wdrożenia i realnego wpływu na pozycje</strong> — nie dostajesz listy błędów do samodzielnego przebrnięcia, tylko priorytetyzowany plan naprawy.
                  </p>
                  <p>
                    Raport jest dostarczany jako plik PDF gotowy do przekazania do agencji, freelancera lub własnego developera. Audyt kosztuje <strong class="text-on-surface">840 zł netto</strong> i jest gotowy w 5–7 dni roboczych od dostarczenia dostępów do Google Search Console i GA4.
                  </p>
                </div>
              </div>

              <!-- Audit areas grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="item in auditAreas"
                  :key="item.label"
                  class="flex items-center gap-3 bg-white rounded-xl border border-outline-variant/30 px-5 py-4 ambient-shadow"
                >
                  <div class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">{{ item.icon }}</span>
                  </div>
                  <span class="text-sm font-semibold text-on-surface leading-snug">{{ item.label }}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: Cena ────────────────────────────────────────────── -->
        <section
          aria-labelledby="section-price"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <!-- Copy -->
              <div>
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Cena</span>
                <h2
                  id="section-price"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Audyt SEO — 840 zł netto, jednorazowo, bez abonamentu
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    Audyt SEO kosztuje 840 zł netto — jest to jednorazowa, stała cena, bez abonamentu i bez zobowiązania do kontynuacji współpracy. Nie ma ukrytych pozycji za dostęp do narzędzi ani opłat za dodatkowe konsultacje.
                  </p>
                  <p>
                    Po dostarczeniu dostępu do Google Search Console i Google Analytics 4 (wystarczy rola „Widok" — tylko do odczytu) raport jest gotowy w 5–7 dni roboczych. Po oddaniu raportu organizujemy krótkie omówienie wyników, w którym wyjaśniamy priorytety i odpowiadamy na pytania.
                  </p>
                  <p>
                    Audyt można zamówić bez podpisywania umowy na pozycjonowanie. Część klientów decyduje się na wdrożenie poprawek samodzielnie lub z własnym developerem — i to jest w pełni uzasadnione podejście. Jeśli po raporcie zdecydujesz się na miesięczną obsługę SEO, koszt audytu jest zaliczany na poczet pierwszego miesiąca.
                  </p>
                </div>
              </div>

              <!-- Price card -->
              <div class="bg-white rounded-2xl border border-outline-variant/30 p-8 ambient-shadow">
                <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <span class="material-symbols-outlined text-primary text-[26px]" aria-hidden="true">search_check</span>
                </div>
                <h3 class="font-bold text-on-surface text-xl mb-2">SEO Audit</h3>
                <div class="flex items-baseline gap-2 mb-1">
                  <span class="font-black text-primary text-3xl">840 zł netto</span>
                </div>
                <p class="text-sm text-on-surface-variant mb-6">jednorazowo — bez abonamentu</p>
                <ul class="space-y-2 mb-8" role="list">
                  <li v-for="item in ['Core Web Vitals i szybkość ładowania', 'Błędy crawlowania i indeksowania', 'Audyt meta tagów i nagłówków', 'Dane strukturalne Schema.org', 'Profil linków zewnętrznych', 'Priorytetyzowany raport PDF', 'Omówienie wyników bez dopłat']" :key="item" class="flex items-center gap-2 text-sm text-on-surface-variant">
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
        </section>

        <!-- ── Section 3: Porównanie ──────────────────────────────────────── -->
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
                Profesjonalny audyt SEO vs automatyczne narzędzia online
              </h2>
              <p class="text-on-surface-variant">
                Narzędzia takie jak Semrush, Ahrefs czy darmowe skanery online generują listy błędów — często kilkadziesiąt do kilkuset pozycji w jednym raporcie. Problem polega na tym, że te listy nie są priorytetyzowane pod kątem konkretnej domeny.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
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
                  <tr
                    v-for="(row, i) in comparisonRows"
                    :key="row.label"
                    class="border-b border-outline-variant/20"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'"
                  >
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.auto }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.manual }}</td>
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

            <div class="max-w-3xl mx-auto text-on-surface-variant">
              <p>
                Automatyczne narzędzia są użyteczne jako monitoring — sprawdzasz je regularnie, żeby wychwycić regresje. Audyt ekspercki ma inną funkcję: odpowiada na pytanie, które z tych błędów faktycznie blokują widoczność Twojej strony — i w jakiej kolejności je naprawić.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 4: Jak przebiega audyt ────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak przebiega"
          title="Jak przebiega audyt SEO — 3 kroki"
          :steps="processSteps"
        />

        <!-- ── Section 5: FAQ ─────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o audyt SEO"
          :faqs="faqData"
        />

        <!-- ── Related services ───────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Kolejny krok"
          title="Po audycie — co dalej"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
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
