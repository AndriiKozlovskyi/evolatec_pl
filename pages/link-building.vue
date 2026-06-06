<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Link Building SEO – Pozyskiwanie Linków Zewnętrznych | EvolaTec',
  description: 'White hat link building dla firm: pozyskiwanie wartościowych linków zewnętrznych, które trwale podnoszą pozycję w Google. Transparentny proces, raporty co miesiąc.',
  ogTitle: 'Link Building SEO – Pozyskiwanie Linków Zewnętrznych | EvolaTec',
  ogDescription: 'White hat link building dla firm: pozyskiwanie wartościowych linków zewnętrznych, które trwale podnoszą pozycję w Google. Transparentny proces, raporty co miesiąc.',
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
      name: 'Link Building SEO – Pozyskiwanie Linków Zewnętrznych | EvolaTec',
      description: 'White hat link building dla firm: pozyskiwanie wartościowych linków zewnętrznych, które trwale podnoszą pozycję w Google. Transparentny proces, raporty co miesiąc.',
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

const introParagraphs = [
  'Google od ponad dwudziestu lat używa linków zewnętrznych jako sygnału zaufania. Jeśli wiarygodna strona o tematyce zbliżonej do Twojej zamieszcza link do Twojej witryny, traktuje to jako rekomendację. Im więcej takich rekomendacji pochodzi z domen o wysokim autorytecie i tematycznej spójności, tym wyżej strona plasuje się w wynikach organicznych.',
  'Po aktualizacji Penguin Google przestało nagradzać masowe pozyskiwanie linków z katalogów, farm linków i PBN-ów. Linki ze stron o niskiej jakości mogą dziś obniżyć widoczność domeny, a w skrajnych przypadkach skutkować manualną karą. Przez to część firm zrezygnowała z link buildingu całkowicie — to błąd. Wartościowe linki z tematycznie powiązanych, wysokoautorytatywnych serwisów nadal są jednym z trzech najważniejszych czynników rankingowych w Google.',
  'Link building ma sens wyłącznie wtedy, gdy zdobywasz linki, na które Twoja strona realnie zasługuje — bo ma treści, dane lub narzędzia, do których inni chcą naturalnie linkować.',
  'SEO techniczne jest wbudowane w kod strony — nie zależy od wtyczek ani zewnętrznych narzędzi. Dlatego efekty link buildingu nie są blokowane przez wolne ładowanie ani błędy crawlowania, które niszczą kampanie oparte na WordPressie.',
]

const acquisitionMethods = [
  {
    icon: 'campaign',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    title: 'Digital PR i content outreach',
    description: 'Tworzymy materiały — dane, zestawienia, ekspertyzy — które mają wartość redakcyjną dla mediów branżowych i portali informacyjnych. Linki zdobyte tą metodą mają najwyższy autorytet i są najtrudniejsze do skopiowania przez konkurencję.',
  },
  {
    icon: 'edit_note',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    title: 'Guest posting na niszowych serwisach',
    description: 'Publikujemy artykuły eksperckie na serwisach tematycznie powiązanych z Twoją działalnością. Każdy artykuł jest oryginalny — nie powielamy treści między różnymi domenami.',
  },
  {
    icon: 'hub',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'Resource link building',
    description: 'Identyfikujemy strony zbierające zasoby w Twojej branży — poradniki, katalogi narzędzi, zestawienia dostawców — i proponujemy Twoją stronę jako uzupełnienie ich listy.',
  },
  {
    icon: 'link_off',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Broken link reclamation',
    description: 'Szukamy linków prowadzących do nieistniejących już stron, których tematyka pokrywa się z Twoją ofertą, i proponujemy właścicielom zamianę uszkodzonego linku na link do Twojej strony.',
  },
]

const qualityBenefits = [
  {
    icon: 'verified',
    title: 'Weryfikacja każdej domeny przed akwizycją',
    description: 'Sprawdzamy Domain Rating, historię domeny w Wayback Machine, indeksowalność w Google i tematyczną spójność z Twoją branżą. Nie korzystamy z PBN-ów, giełd linków ani linków generowanych automatycznie.',
  },
  {
    icon: 'analytics',
    title: 'Miesięczny raport z metrykami',
    description: 'Co miesiąc dostarczamy raport z nowo pozyskanymi linkami: URL strony linkującej, Domain Rating, anchor text i data publikacji. Wiesz dokładnie, za co płacisz.',
  },
  {
    icon: 'shield',
    title: 'Zero ryzyka kary Google',
    description: 'Wyłącznie white hat metodologia — żadnych PBN-ów, żadnych linków kupionych masowo, żadnych technik niezgodnych z wytycznymi Google Webmaster Guidelines.',
  },
  {
    icon: 'trending_up',
    title: 'Efekty mierzalne w Search Console',
    description: 'Wzrost autorytetu domeny i widoczność fraz monitorujemy w Google Search Console i Ahrefs. Pierwsze zmiany widać po 6–8 tygodniach od pierwszych pozyskanych linków.',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Analiza domeny i fraz docelowych',
    description: 'Audytujemy aktualny profil linków — Domain Rating, stosunek dofollow/nofollow, tematyczność domen odsyłających i ewentualne toksyczne źródła. Na tej podstawie określamy priorytety akwizycji.',
  },
  {
    step: 2,
    title: 'Prospecting i outreach',
    description: 'Budujemy listę docelowych domen według kryteriów jakości: DR 30+, tematyczna spójność, brak historii spamowej. Kontaktujemy redakcje i właścicieli serwisów w Twoim imieniu lub z Twojego konta.',
  },
  {
    step: 3,
    title: 'Publikacja i weryfikacja linków',
    description: 'Każdy link weryfikujemy po publikacji: sprawdzamy atrybut dofollow/nofollow, anchor text i indeksowalność strony linkującej w Google. Linki, które nie spełniają kryteriów, są odrzucane lub renegocjowane.',
  },
  {
    step: 4,
    title: 'Raport i planowanie kolejnego miesiąca',
    description: 'Na koniec każdego miesiąca dostarczamy raport z pozyskanymi linkami, zmianami w Domain Rating i pozycjach fraz docelowych w Google Search Console. Planujemy kolejny miesiąc na podstawie wyników.',
  },
]

const featuresItems = [
  {
    icon: 'link',
    title: 'Linki dofollow z domen DR 30+',
    description: 'Koncentrujemy się na domenach z Domain Rating powyżej 30 i tematyczną spójnością z Twoją działalnością. Dziesięć słabych linków wyrządza więcej szkody niż trzy mocne.',
  },
  {
    icon: 'language',
    title: 'Polskie i zagraniczne serwisy branżowe',
    description: 'W zależności od strategii pozyskujemy linki z polskich portali branżowych lub z zagranicznych serwisów niszowych, które budują autorytet domenowy na rynkach docelowych.',
  },
  {
    icon: 'article',
    title: 'Oryginalne artykuły eksperckie',
    description: 'Każdy tekst piszemy od podstaw — unikalny, z danymi i przykładami. Nie używamy przeredagowanego contentu ani treści AI bez weryfikacji merytorycznej.',
  },
]

const comparisonRows = [
  { label: 'Czas własny',           diy: '15–30 h miesięcznie',                       agency: '0 — pełna obsługa'                  },
  { label: 'Baza kontaktów',        diy: 'Budowana od zera',                           agency: 'Gotowe relacje z redakcjami'         },
  { label: 'Weryfikacja domen',     diy: 'Manualna, bez benchmarku',                   agency: 'Systematyczna — DR, historia, tematyka' },
  { label: 'Ryzyko kary Google',    diy: 'Wysokie przy błędnych wyborach',             agency: 'Niskie — white hat metodologia'      },
  { label: 'Raportowanie',          diy: 'Brak standardu',                             agency: 'Miesięczny raport z metrykami'       },
  { label: 'Koszt wejścia',         diy: 'Niski (czas własny)',                        agency: 'Od 2 100 zł netto/mies.'             },
]

const pricingPlans = [
  {
    name: 'SEO + Link Building',
    price: 'od 2 100 zł netto',
    delivery: 'miesięcznie',
    highlight: true,
    badge: 'Rekomendowany',
    features: [
      'Pozyskiwanie 3–8 linków zewnętrznych miesięcznie',
      'Domeny z Domain Rating 30+ i tematyczną spójnością',
      'Digital PR, guest posting, resource link building',
      'Optymalizacja on-page — meta tagi, nagłówki, treść',
      'Miesięczny raport: URL, DR, anchor text, data publikacji',
      'Monitoring pozycji fraz w Google Search Console',
      'Stała cena — bez zmian w trakcie kampanii',
    ],
    cta: 'Rozpocznij kampanię',
    ctaLink: '/kontakt',
    note: 'Stała cena — wycena przed startem projektu',
  },
  {
    name: 'Local SEO',
    price: 'od 1 260 zł netto',
    delivery: 'miesięcznie',
    highlight: false,
    features: [
      'Optymalizacja Google Business Profile',
      'Lokalne cytowania i NAP consistency',
      'Lokalne dane strukturalne Schema.org',
      'Optymalizacja on-page pod frazy lokalne',
      'Miesięczny raport z pozycjami i statystykami wizytówki',
    ],
    cta: 'Dowiedz się więcej',
    ctaLink: '/lokalne-seo',
    note: 'Stała cena — wycena przed startem projektu',
  },
]

const checklistColumns = [
  {
    heading: 'Co jest weryfikowane przed akwizycją',
    items: [
      'Domain Rating (minimalne DR 30)',
      'Historia domeny w Wayback Machine',
      'Indeksowalność strony linkującej w Google',
      'Tematyczna spójność z branżą klienta',
      'Brak historii spamowej i manualnych kar',
      'Proporcja linków dofollow/nofollow',
    ],
  },
  {
    heading: 'Co dostajesz w raporcie miesięcznym',
    items: [
      'URL każdej strony linkującej',
      'Domain Rating domeny odsyłającej',
      'Anchor text użyty w linku',
      'Data publikacji i weryfikacji',
      'Zmiana Domain Rating Twojej domeny',
      'Pozycje fraz docelowych z Google Search Console',
    ],
  },
]

const relatedServices = [
  {
    icon: 'manage_search',
    title: 'Pozycjonowanie SEO',
    description: 'Pełna obsługa SEO z audytem technicznym, optymalizacją on-page i link buildingiem w jednym pakiecie.',
    link: '/seo',
  },
  {
    icon: 'search_check',
    title: 'Audyt SEO',
    description: 'Jednorazowy audyt techniczny i treściowy z priorytetyzowaną listą poprawek — 840 zł netto, bez abonamentu.',
    link: '/audyt-seo',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja SEO',
    description: 'Wdrożenie poprawek on-page i technicznych SEO bez stałej umowy — konkretne działania, konkretna cena.',
    link: '/optymalizacja-seo',
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
      secondaryCTA="Jak to działa"
      :stats="heroStats"
    />

    <main id="main-content">


      <article>

        <!-- ── Section 1: Co to jest link building ───────────────────────── -->
        <IntroSection
          heading="Czym jest link building i dlaczego Google wciąż go ceni"
          :paragraphs="introParagraphs"
          image="/assets/link-network.webp"
          image-alt="Sieć połączeń między domenami internetowymi symbolizująca profil linków zewnętrznych SEO"
        />

        <!-- ── Section 2: Metody akwizycji ───────────────────────────────── -->
        <ServicesSection
          title="Jak pozyskujemy wartościowe linki zewnętrzne — white hat metodologia"
          variant="left"
          :services="acquisitionMethods"
          background="bg-surface-container-low"
        />

        <!-- ── Section 3: Dlaczego jakość, nie wolumen ───────────────────── -->
        <BenefitsSection
          title="Dlaczego jakość linków ważniejsza jest niż ich liczba"
          :benefits="qualityBenefits"
        />

        <!-- ── Section 4: Jak przebiega kampania ─────────────────────────── -->
        <ProcessSection
          title="Jak przebiega kampania link buildingowa — 4 etapy"
          :steps="processSteps"
        />

        <!-- ── Section 5: Co weryfikujemy / co raportujemy ───────────────── -->
        <ChecklistSection
          bg="container-low"
          :columns="checklistColumns"
        />

        <!-- ── Section 6: Możliwości akwizycji ───────────────────────────── -->
        <FeaturesSection
          title="Trzy typy linków z najwyższą wartością dla pozycji"
          :features="featuresItems"
          image-url="/assets/web-analytics.webp"
        />

        <!-- ── Section 7: Agencja vs samodzielnie — tabela porównawcza ───── -->
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
                Agencja link building vs samodzielne pozyskiwanie linków — co się opłaca
              </h2>
              <p class="text-on-surface-variant">
                Samodzielne pozyskiwanie linków nie jest niemożliwe — ale ma realny koszt, który rzadko pojawia się w kalkulacjach. Outreach do redakcji, negocjacje z właścicielami serwisów i weryfikacja jakości domen to kilkanaście godzin miesięcznie pracy osoby, która zna specyfikę branży.
              </p>
            </div>

            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie agencji link building z samodzielnym pozyskiwaniem linków</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Samodzielny link building</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Agencja link building</th>
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
                    <td class="p-4 text-center text-on-surface-variant">{{ row.diy }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.agency }}</td>
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
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Samodzielnie</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.diy }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Agencja</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.agency }}</p>
                  </div>
                </div>
              </div>
            </div>

            <p class="max-w-3xl mx-auto text-on-surface-variant">
              Agencja wychodzi taniej wtedy, gdy alternatywą jest własny czas właściciela firmy — bo godzina właściciela poświęcona na outreach to godzina niezainwestowana w sprzedaż, produkt lub obsługę klienta.
            </p>

          </div>
        </section>

        <!-- ── Section 8: Cennik ──────────────────────────────────────────── -->
        <PricingSection
          title="Ile kosztuje link building — cennik i co zawiera abonament"
          subtitle="Stała cena miesięczna, ustalana przed startem. Budżet link buildingowy nie jest rozliczany oddzielnie."
          :pricing-plans="pricingPlans"
        />

        <!-- ── Section 9: FAQ ─────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o link building"
          :faqs="faqData"
        />

        <!-- ── Related services ───────────────────────────────────────────── -->
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
    />

  </div>
</template>
