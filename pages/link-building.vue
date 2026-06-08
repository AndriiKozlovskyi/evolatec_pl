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
  { value: 'od 2 100 zł', label: 'netto miesięcznie',    icon: 'sell'          },
  { value: '3–8',         label: 'linków miesięcznie',   icon: 'link'          },
  { value: 'DR 30+',      label: 'minimalne kryterium',  icon: 'verified'      },
  { value: 'White hat',   label: 'bez ryzyka kary',      icon: 'security'      },
]

// ── Korzyści link buildingu (sekcja "Czym jest") ─────────────────────────────
const lbBenefits = [
  { icon: 'verified', title: 'Sygnał zaufania dla Google', desc: 'Linki z wiarygodnych, tematycznie powiązanych stron to potwierdzenie autorytetu Twojej domeny.' },
  { icon: 'trending_up', title: 'Jeden z trzech najważniejszych czynników', desc: 'Obok treści i technicznego SEO — profil linków zewnętrznych bezpośrednio decyduje o pozycjach w Google.' },
  { icon: 'security', title: 'White hat — bez ryzyka kary', desc: 'Pracujemy tylko z metodami zgodnymi z wytycznymi Google. Żadnych PBN-ów, farm linków ani kupionych linków niezgodnych z zasadami.' },
]

// ── Metody pozyskiwania linków ────────────────────────────────────────────────
const lbMethods = [
  { title: 'Digital PR i content outreach', desc: 'Tworzymy materiały (dane, zestawienia, ekspertyzy) z wartością redakcyjną dla mediów branżowych. Linki zdobyte tą metodą mają najwyższy autorytet.' },
  { title: 'Guest posting na niszowych serwisach', desc: 'Publikujemy artykuły eksperckie na serwisach tematycznie powiązanych z Twoją działalnością. Każdy artykuł jest oryginalny.' },
  { title: 'Resource link building', desc: 'Identyfikujemy strony zbierające zasoby w Twojej branży i proponujemy Twoją stronę jako uzupełnienie ich listy.' },
  { title: 'Broken link reclamation', desc: 'Szukamy linków do nieistniejących już stron pokrywających się tematycznie z Twoją ofertą i proponujemy zamianę uszkodzonego linku.' },
]

// ── Agencja vs samodzielny link building ─────────────────────────────────────
const lbCompareRows = [
  { criterion: 'Czas własny', self: '15–30 h miesięcznie', agency: '0 — pełna obsługa' },
  { criterion: 'Baza kontaktów', self: 'Budowana od zera', agency: 'Gotowe relacje z redakcjami' },
  { criterion: 'Weryfikacja jakości domen', self: 'Manualna, bez benchmarku', agency: 'Systematyczna — DR, historia, tematyka' },
  { criterion: 'Ryzyko kary Google', self: 'Wysokie przy błędnych wyborach', agency: 'Niskie — white hat metodologia' },
  { criterion: 'Raportowanie', self: 'Brak standardu', agency: 'Miesięczny raport z metrykami' },
  { criterion: 'Koszt wejścia', self: 'Niski (czas własny)', agency: 'Od 2 100 zł netto/mies.' },
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

        <!-- ── Czym jest link building i dlaczego Google wciąż go ceni ──────── -->
        <section aria-labelledby="section-czym-jest-lb" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-16 items-start">
              <div data-reveal="left">
                <h2 id="section-czym-jest-lb" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Czym jest link building i dlaczego Google wciąż go ceni
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>Google od ponad dwudziestu lat używa linków zewnętrznych jako sygnału zaufania. Logika jest prosta: jeśli wiarygodna strona o tematyce zbliżonej do Twojej zamieszcza link do Twojej witryny, traktuje to jako rekomendację. Im więcej takich rekomendacji pochodzi z domen o wysokim autorytecie i tematycznej spójności, tym wyżej strona plasuje się w wynikach organicznych.</p>
                  <p>Po aktualizacji Penguin (2012) i kolejnych zmianach algorytmu Google przestało nagradzać masowe pozyskiwanie linków z katalogów, farm linków i PBN-ów. Linki ze stron o niskiej jakości — lub kupionych niezgodnie z wytycznymi — mogą dziś obniżyć widoczność domeny, a w skrajnych przypadkach skutkować manualną karą. Wartościowe linki z tematycznie powiązanych, wysokoautorytatywnych serwisów nadal są jednym z trzech najważniejszych czynników rankingowych w Google.</p>
                  <p>Link building jako element SEO ma sens wyłącznie wtedy, gdy zdobywasz linki, na które Twoja strona realnie zasługuje — bo ma treści, dane lub narzędzia, do których inni chcą naturalnie linkować.</p>
                </div>
              </div>
              <div class="flex flex-col gap-3" data-reveal="right">
                <div v-for="benefit in lbBenefits" :key="benefit.title" class="bg-white rounded-xl p-5 border border-outline-variant/20 flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-primary text-lg" aria-hidden="true">{{ benefit.icon }}</span>
                  </div>
                  <div>
                    <p class="font-semibold text-on-surface text-sm">{{ benefit.title }}</p>
                    <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">{{ benefit.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Jak pozyskujemy wartościowe linki zewnętrzne ───────────────── -->
        <section aria-labelledby="section-jak-pozyskujemy" class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-16 items-start">
              <div data-reveal="left">
                <h2 id="section-jak-pozyskujemy" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Jak pozyskujemy wartościowe linki zewnętrzne — white hat metodologia
                </h2>
                <p class="text-on-surface-variant leading-relaxed mb-6">Każda pozyskana przez nas domena przechodzi weryfikację przed akwizycją: sprawdzamy profil linków przychodzących, historię domeny w Wayback Machine, indeksowalność w Google i tematyczną spójność z Twoją branżą. Nie korzystamy z PBN-ów, giełd linków ani linków generowanych automatycznie.</p>
                <p class="text-on-surface-variant leading-relaxed">Co miesiąc dostarczamy raport z nowo pozyskanymi linkami: adres URL strony linkującej, Domain Rating, anchor text i data publikacji.</p>
              </div>
              <div class="space-y-4" data-reveal="right">
                <div v-for="method in lbMethods" :key="method.title" class="bg-white rounded-xl p-5 border border-outline-variant/20 flex items-start gap-4">
                  <span class="material-symbols-outlined text-primary text-lg flex-shrink-0 mt-0.5" aria-hidden="true">arrow_forward</span>
                  <div>
                    <p class="font-semibold text-on-surface text-sm">{{ method.title }}</p>
                    <p class="text-xs text-on-surface-variant mt-1 leading-relaxed">{{ method.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Dlaczego link building (BenefitsSection — white) ────────────── -->
        <BenefitsSection
          title="Dlaczego profesjonalny link building jest ważny"
          :benefits="benefits"
        />

        <!-- ── Agencja link building vs samodzielne pozyskiwanie linków ──────── -->
        <section aria-labelledby="section-agencja-vs-sam" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <h2 id="section-agencja-vs-sam" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
              Agencja link building vs samodzielne pozyskiwanie linków — co się opłaca
            </h2>
            <p class="text-on-surface-variant mb-10 leading-relaxed">Samodzielne pozyskiwanie linków nie jest niemożliwe — ale ma realny koszt: outreach do redakcji, negocjacje, weryfikacja jakości i pisanie artykułów to kilkanaście godzin miesięcznie pracy.</p>
            <div class="rounded-2xl bg-white shadow-md overflow-hidden border-2 border-outline-variant/50 mb-6">
              <table class="w-full border-collapse">
                <caption class="sr-only">Porównanie agencji link building z samodzielnym pozyskiwaniem linków</caption>
                <thead>
                  <tr class="bg-surface-container-low">
                    <th class="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Kryterium</th>
                    <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Samodzielny link building</th>
                    <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-primary border-b-2 border-outline-variant/40" scope="col">Agencja link building</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in lbCompareRows" :key="i" class="border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-low/60 transition-colors duration-150">
                    <td class="px-6 py-4 text-sm font-medium text-on-surface border-r border-outline-variant/30">{{ row.criterion }}</td>
                    <td class="px-5 py-4 text-center text-sm text-on-surface-variant border-r border-outline-variant/30">{{ row.self }}</td>
                    <td class="px-5 py-4 text-center text-sm font-bold text-primary bg-primary-fixed">{{ row.agency }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-sm text-on-surface-variant text-center">Agencja wychodzi taniej wtedy, gdy alternatywą jest własny czas właściciela firmy — bo godzina właściciela na outreach to godzina niezainwestowana w sprzedaż lub obsługę klienta.</p>
          </div>
        </section>

        <!-- ── Ile kosztuje link building (prose) ─────────────────────────── -->
        <section aria-labelledby="section-cena-lb" class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="max-w-3xl mx-auto">
              <h2 id="section-cena-lb" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                Ile kosztuje link building — cennik i co zawiera abonament
              </h2>
              <div class="space-y-4 text-on-surface-variant leading-relaxed">
                <p>SEO z link buildingiem kosztuje od 2 100 zł netto miesięcznie. W tej kwocie zawarte jest pozyskiwanie linków zewnętrznych, bieżąca optymalizacja on-page i miesięczny raport z wynikami. Budżet link buildingowy nie jest rozliczany oddzielnie — cena jest stała i ustalana przed startem kampanii.</p>
                <p>W każdym miesiącu pozyskujemy od 3 do 8 linków zewnętrznych, w zależności od branży i konkurencyjności fraz docelowych. Koncentrujemy się na domenach z Domain Rating powyżej 30 i tematyczną spójnością z Twoją działalnością — nie na wolumenie. Dziesięć słabych linków wyrządza więcej szkody niż trzy mocne.</p>
                <p>Kampania link buildingowa wymaga minimum 3 miesięcy, żeby efekty były mierzalne w Google Search Console. Pierwsze zmiany w widoczności fraz zazwyczaj pojawiają się po 6–8 tygodniach od pierwszych pozyskanych linków.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Jak działa nasz link building (ProcessSection — container-low) ── -->
        <ProcessSection
          title="Jak działa nasz link building"
          :steps="processSteps"
        />

        <!-- ── Nasze usługi link buildingu (FeaturesSection — primary) ────── -->
        <FeaturesSection
          title="Nasze usługi link buildingu"
          :features="features"
          image-url="/assets/link-network.webp"
          image-alt="Sieć połączeń między domenami symbolizująca profil linków zewnętrznych SEO"
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
