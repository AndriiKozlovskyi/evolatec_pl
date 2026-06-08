<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Tworzenie stron firmowych — strona dla firmy | EvolaTec',
  description: 'Tworzenie stron firmowych od 6 300 zł netto, realizacja od 7 dni roboczych. Stała cena zapisana w umowie, indywidualny projekt, Lighthouse 95–100.',
  ogTitle: 'Tworzenie stron firmowych — strona dla firmy | EvolaTec',
  ogDescription: 'Strona firmowa od 6 300 zł netto, realizacja od 7 dni. Stała cena w umowie, indywidualny projekt, Lighthouse 95–100. Bezpłatna wycena.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/stworz-strone-firmowa',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje strona internetowa dla firmy w Polsce?',
    answer: 'Strona firmowa kosztuje od 6 300 zł netto i jest gotowa w 7 dni roboczych. Cena jest stała i ustalana przed podpisaniem umowy — standardowa strona do kilkunastu podstron mieści się w cenie bazowej, a nietypowe funkcje są wyceniane osobno i z góry, zanim zaczniemy kodować.',
  },
  {
    question: 'Jak długo trwa wykonanie strony firmowej?',
    answer: 'Strona firmowa jest gotowa w 7 dni roboczych od dostarczenia treści i materiałów przez klienta. Termin jest zapisany w umowie i liczy się od kompletu materiałów, a nie od daty jej podpisania. Bardziej rozbudowane serwisy mają proporcjonalnie dłuższy, również z góry podany termin.',
  },
  {
    question: 'Co jest potrzebne żeby zamówić stronę internetową?',
    answer: 'Do startu wystarczą treści lub briefing do ich napisania, logo, preferencje kolorystyczne i dostęp do domeny. Jeśli nie masz gotowych tekstów ani logo, możemy je przygotować — wtedy zaczynamy od briefingu i krótkiej rozmowy o firmie.',
  },
  {
    question: 'Czy agencja webowa podaje stałe ceny?',
    answer: 'U nas tak — wycena jest bezpłatna i stała, klient wie ile zapłaci przed podpisaniem umowy. Cena nie zmienia się w trakcie projektu, o ile zakres pozostaje ten ustalony. Każda zmiana zakresu wyceniana jest osobno, zanim zostanie wdrożona, więc nie ma niespodzianek na fakturze.',
  },
  {
    question: 'Co powinna zawierać umowa z agencją webową?',
    answer: 'Umowa powinna zawierać stałą cenę, konkretny termin realizacji, zakres prac (liczba podstron i funkcji), warunki wsparcia po wdrożeniu oraz zapis o przekazaniu praw i dostępów. W naszej umowie cena i termin są zapisane wprost, a po wdrożeniu otrzymujesz pełne dostępy do strony i 30 dni wsparcia technicznego.',
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
        { '@type': 'City', name: 'Warszawa' },
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
      '@type': 'WebPage',
      '@id': 'https://evolatec.pl/stworz-strone-firmowa#webpage',
      url: 'https://evolatec.pl/stworz-strone-firmowa',
      name: 'Tworzenie stron firmowych — strona dla firmy | EvolaTec',
      description: 'Tworzenie stron firmowych od 6 300 zł netto, realizacja od 7 dni roboczych. Stała cena zapisana w umowie, indywidualny projekt, Lighthouse 95–100.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/stworz-strone-firmowa#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Strona internetowa dla firmy', item: 'https://evolatec.pl/strona-internetowa' },
        { '@type': 'ListItem', position: 3, name: 'Tworzenie stron firmowych', item: 'https://evolatec.pl/stworz-strone-firmowa' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/stworz-strone-firmowa#service',
      name: 'Tworzenie stron firmowych',
      serviceType: 'Tworzenie stron internetowych dla firm',
      description: 'Strona firmowa tworzona jako indywidualny projekt pod cele biznesowe. Stała cena od 6 300 zł netto zapisana w umowie, realizacja od 7 dni roboczych.',
      url: 'https://evolatec.pl/stworz-strone-firmowa',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        name: 'Strona firmowa',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: '6300', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/stworz-strone-firmowa#faq',
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
  name: 'Jak zamówić stronę firmową — krok po kroku',
  description: 'Proces zamówienia strony firmowej w EvolaTec: od bezpłatnej konsultacji do wdrożenia.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Bezpłatna konsultacja i wycena', text: 'Opisujesz firmę i cel strony, my wracamy ze stałą wyceną i terminem na piśmie. Czas: 1–2 dni robocze, bez zobowiązań.' },
    { '@type': 'HowToStep', position: 2, name: 'Umowa i projekt', text: 'Akceptujesz wycenę, podpisujemy umowę z zapisanym terminem, projektujemy układ i design pod Twoją markę.' },
    { '@type': 'HowToStep', position: 3, name: 'Development, SEO i GEO', text: 'Kodujemy stronę w Vue.js i Nuxt.js, wdrażamy SEO on-page, Schema.org i konfigurujemy hosting.' },
    { '@type': 'HowToStep', position: 4, name: 'Testy i launch', text: 'Sprawdzamy stronę na wszystkich urządzeniach, weryfikujemy Core Web Vitals i wdrażamy. Zaczyna się 30 dni wsparcia.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/stworz-strone-firmowa' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

// ─── Scroll reveal ─────────────────────────────────────────────────────────

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target) } }) },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'od 6 300 zł', label: 'Strona firmowa netto', icon: 'payments'  },
  { value: 'od 7 dni',    label: 'Czas realizacji',      icon: 'flash_on'  },
  { value: 'W umowie',    label: 'Cena i termin',        icon: 'gavel'     },
  { value: '95–100',      label: 'Lighthouse score',     icon: 'speed'     },
]

const includedItems = [
  { icon: 'palette',         label: 'Indywidualny projekt graficzny'    },
  { icon: 'web',             label: 'Wiele podstron + blog'             },
  { icon: 'edit_note',       label: 'Storyblok CMS — edycja bez kodu'   },
  { icon: 'search_insights', label: 'SEO podstawowe w cenie'            },
  { icon: 'smart_toy',       label: 'GEO — ChatGPT, Gemini, Perplexity' },
  { icon: 'lock',            label: 'Certyfikat SSL'                    },
  { icon: 'mail',            label: 'Formularz kontaktowy'              },
  { icon: 'support_agent',   label: '30 dni wsparcia po wdrożeniu'      },
]

const compareRows = [
  { label: 'Punkt startowy',          tpl: 'Kod i wtyczki poprzednika',   custom: 'Czysta architektura Nuxt.js'  },
  { label: 'Czas ładowania po zmianach', tpl: 'Zwykle nadal 3–8 sekund',  custom: '< 1 sekunda'                  },
  { label: 'Wynik Lighthouse',        tpl: 'Ograniczony przez wtyczki',   custom: '95–100 / 100'                 },
  { label: 'Utrzymanie',              tpl: 'Comiesięczne aktualizacje',   custom: 'Minimalne — brak wtyczek'     },
  { label: 'Ryzyko',                  tpl: 'Ukryte błędy i zależności',   custom: 'Pełna kontrola nad kodem'     },
  { label: 'Przeniesienie treści',    tpl: 'Ręczne tak czy inaczej',      custom: 'Ręczne tak czy inaczej'       },
]

const relatedServices = [
  { icon: 'ads_click', title: 'Landing page', description: 'Jednostronicowa strona konwersyjna pod kampanię Ads — od 2 100 zł, realizacja 3 dni.', price: 'od 2 100 zł netto', href: '/landing-page' },
  { icon: 'trending_up', title: 'Pozycjonowanie SEO', description: 'Organiczna widoczność strony w Google — audyt, on-page i link building.', price: 'od 1 260 zł netto/mies.', href: '/seo' },
  { icon: 'palette', title: 'Branding', description: 'Logo i identyfikacja wizualna spójna z projektem strony — 3 koncepcje.', price: 'Wycena indywidualna', href: '/branding' },
]

const processSteps = [
  {
    icon: 'mail',
    title: 'Bezpłatna konsultacja i wycena',
    description: 'Opisujesz firmę i cel strony, my wracamy ze stałą wyceną i terminem na piśmie. Czas: 1–2 dni robocze, bez zobowiązań.',
  },
  {
    icon: 'gavel',
    title: 'Umowa i projekt',
    description: 'Akceptujesz wycenę, podpisujemy umowę z zapisanym terminem, projektujemy układ i design pod Twoją markę. Płatność rozłożona na etapy.',
  },
  {
    icon: 'code',
    title: 'Development, SEO i GEO',
    description: 'Kodujemy stronę w Vue.js i Nuxt.js, wdrażamy SEO on-page, Schema.org JSON-LD i konfigurujemy hosting.',
  },
  {
    icon: 'rocket_launch',
    title: 'Testy i launch',
    description: 'Sprawdzamy stronę na wszystkich urządzeniach, weryfikujemy Core Web Vitals i wdrażamy. Przekazujemy dostępy, zaczyna się 30 dni wsparcia.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Tworzenie stron firmowych"
      title="Tworzenie stron firmowych ze stałą ceną i terminem w umowie"
      description="Indywidualny projekt strony firmowej budowany w Nuxt.js — od 6 300 zł netto, realizacja od 7 dni roboczych. Cena i termin zapisane w umowie, nie obiecane przez telefon."
      primaryCTA="Zamów bezpłatną wycenę"
      secondaryCTA="Zobacz ceny"
      primary-href="/kontakt"
      secondary-href="/kalkulator-kosztow"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb -->

      <article>

        <!-- ── Section 1: Kiedy warto ────────────────────────────────────── -->
        <section
          aria-labelledby="section-when"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <h2
                  id="section-when"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Kiedy warto zamówić stronę firmową — i co to realnie zmienia
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Są dwa momenty, w których firma zamawia stronę: gdy nie ma jej wcale i traci zapytania do konkurencji, która ją ma, albo gdy stara strona na WordPressie psuje się co kilka miesięcy i nikt już nie pamięta hasła do panelu. W obu przypadkach koszt zwlekania jest ten sam — klient, który szukał Twojej usługi, znalazł kogoś innego.
                  </p>
                  <p>
                    Strona firmowa zmienia to w jeden konkretny sposób: daje wielostronicowy, indeksowany przez Google obraz firmy, do którego prowadzi reklama, wizytówka i polecenie. To różnica między „mamy stronę" a „strona przynosi nam zapytania". Tworzymy ją jako indywidualny projekt pod Twoją branżę — nie kupiony szablon, w którym podmieniono logo.
                  </p>
                  <p>
                    Cała rzecz ma sens tylko wtedy, gdy wiesz, ile zapłacisz i kiedy strona będzie gotowa. Dlatego <strong class="text-on-surface">wycena jest bezpłatna i stała — klient wie ile zapłaci przed podpisaniem umowy</strong>, a termin realizacji jest jej częścią, nie obietnicą złożoną przez telefon.
                  </p>
                </div>
              </div>

              <div data-reveal="right" class="rounded-2xl overflow-hidden">
                <NuxtImg
                  src="/assets/business-website.webp"
                  alt="Nowoczesna strona firmowa wyświetlona na laptopie i smartfonie — responsywny design i szybkie ładowanie"
                  width="640"
                  height="420"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: Co dostajesz ───────────────────────────────────── -->
        <section
          aria-labelledby="section-included"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

              <div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">check_circle</span>
                  Jedna cena, jeden termin
                </span>

                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co dostajesz, zamawiając stronę firmową
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    Strona firmowa kosztuje od 6 300 zł netto i powstaje jako indywidualny projekt graficzny, nie wariant gotowego motywu. W tej cenie zawiera się komplet, który sprawia, że strona działa od pierwszego dnia.
                  </p>
                  <p>
                    Nie ma osobnych pozycji za responsywność, SSL czy podstawowe SEO — to są elementy strony firmowej, nie dodatki, za które dopłaca się po fakcie. Pełny cennik sprawdzisz w
                    <NuxtLink to="/kalkulator-kosztow" class="text-primary font-semibold hover:underline">kalkulatorze kosztów</NuxtLink>.
                  </p>
                </div>
              </div>

              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li
                  v-for="item in includedItems"
                  :key="item.label"
                  class="flex items-center gap-3 bg-white rounded-xl border border-outline-variant/30 px-5 py-4 ambient-shadow"
                >
                  <div class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">{{ item.icon }}</span>
                  </div>
                  <span class="text-sm font-semibold text-on-surface leading-snug">{{ item.label }}</span>
                </li>
              </ul>

            </div>
          </div>
        </section>

        <!-- ── Section 3: Cena ───────────────────────────────────────────── -->
        <section
          aria-labelledby="section-price"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <!-- Header -->
            <div class="text-center max-w-2xl mx-auto mb-12" data-reveal="fade">
              <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Cennik</span>
              <h2
                id="section-price"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight"
              >
                Tworzenie stron firmowych — cena i co wpływa na wycenę
              </h2>
            </div>

            <!-- Price banner -->
            <div class="relative mb-12 rounded-2xl overflow-hidden" data-reveal="fade">
              <NuxtImg
                src="/assets/web-design.webp"
                alt=""
                aria-hidden="true"
                class="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gray-950/70"></div>
              <div class="relative px-8 sm:px-12 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                <div>
                  <p class="text-white/50 text-xs font-semibold uppercase tracking-[0.2em] mb-3">Strona firmowa</p>
                  <p class="font-display text-5xl sm:text-6xl font-black text-white leading-none">od 6 300 zł <span class="text-2xl font-semibold text-white/50">netto</span></p>
                </div>
                <div class="flex flex-col xs:flex-row gap-8 sm:gap-12">
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-cyan-300 text-[28px]" aria-hidden="true">flash_on</span>
                    </div>
                    <div>
                      <p class="font-black text-white text-xl leading-tight">od 7 dni</p>
                      <p class="text-sm text-cyan-300/80 font-medium">realizacja</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                      <span class="material-symbols-outlined text-cyan-300 text-[28px]" aria-hidden="true">gavel</span>
                    </div>
                    <div>
                      <p class="font-black text-white text-xl leading-tight">Cena i termin</p>
                      <p class="text-sm text-cyan-300/80 font-medium">zapisane w umowie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Three info cards -->
            <div class="grid md:grid-cols-3 gap-5 mb-10">

              <div class="bg-white rounded-2xl border border-outline-variant/25 p-6" data-reveal="left">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">gavel</span>
                </div>
                <h3 class="font-bold text-on-surface text-sm mb-3">Stała wycena, bez niespodzianek</h3>
                <p class="text-sm text-on-surface-variant leading-relaxed">
                  To cena stała, a nie „od" otwierające drogę do dopłat — wycena jest ustalana przed podpisaniem umowy i nie zmienia się w trakcie projektu. Na ostateczną wycenę wpływają trzy rzeczy: liczba podstron, potrzeba nietypowych funkcji oraz to, czy dostarczasz gotowe treści i zdjęcia, czy mamy je przygotować.
                </p>
              </div>

              <div class="bg-white rounded-2xl border border-outline-variant/25 p-6" data-reveal="fade">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">tune</span>
                </div>
                <h3 class="font-bold text-on-surface text-sm mb-3">Standard i funkcje dodatkowe</h3>
                <p class="text-sm text-on-surface-variant leading-relaxed">
                  Standardowa strona firmowa do kilkunastu podstron mieści się w cenie bazowej. Integracja z systemem rezerwacji, kalkulatorem czy zewnętrznym CRM to osobna, z góry podana kwota — wyceniana, zanim cokolwiek zaczniemy kodować.
                </p>
              </div>

              <div class="bg-white rounded-2xl border border-outline-variant/25 p-6" data-reveal="right">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">ads_click</span>
                </div>
                <h3 class="font-bold text-on-surface text-sm mb-3">Szukasz prostszego rozwiązania?</h3>
                <p class="text-sm text-on-surface-variant leading-relaxed">
                  Jeśli zależy Ci na prostszym, jednostronicowym rozwiązaniu pod kampanię reklamową, tańszą drogą jest
                  <NuxtLink to="/landing-page" class="text-primary font-semibold hover:underline">landing page od 2 100 zł netto</NuxtLink>.
                </p>
              </div>

            </div>

            <!-- CTA -->
            <div class="text-center">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt swojej strony</BaseButton>
              </NuxtLink>
            </div>

          </div>
        </section>

        <!-- ── Section 4: Nowa vs migracja ───────────────────────────────── -->
        <section
          aria-labelledby="section-compare"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="mb-stack-lg">
              <h2
                id="section-compare"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Nowa strona od zera czy przeniesienie ze starego WordPressa
              </h2>
              <p class="text-on-surface-variant">
                Naprawianie istniejącej strony wydaje się tańsze, ale zwykle oznacza dokładanie do konstrukcji, która i tak ładuje się 5 sekund i wymaga comiesięcznych aktualizacji wtyczek.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block rounded-2xl bg-white shadow-md overflow-hidden border-2 border-outline-variant/50 mb-8">
              <table class="w-full border-collapse">
                <caption class="sr-only">Porównanie nowej strony od zera z naprawą starego WordPressa</caption>
                <thead>
                  <tr class="bg-surface-container-low">
                    <th class="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Kryterium</th>
                    <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Naprawa starego WordPressa</th>
                    <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-primary border-b-2 border-outline-variant/40" scope="col">Nowa strona od zera (EvolaTec)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in compareRows"
                    :key="row.label"
                    class="border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-low/60 transition-colors duration-150"
                  >
                    <td class="px-6 py-4 text-sm font-medium text-on-surface border-r border-outline-variant/30">{{ row.label }}</td>
                    <td class="px-5 py-4 text-center text-sm text-on-surface-variant border-r border-outline-variant/30">{{ row.tpl }}</td>
                    <td class="px-5 py-4 text-center text-sm font-bold text-primary bg-primary-fixed">{{ row.custom }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in compareRows"
                :key="row.label"
                class="bg-white rounded-xl border border-outline-variant/30 p-4"
              >
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Naprawa WP</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.tpl }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Nowa strona</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.custom }}</p>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-on-surface-variant">
              Przeniesienie treści odbywa się w obu wariantach — to nie jest argument za zostaniem na WordPressie. W praktyce nowa strona od zera kosztuje podobnie jak gruntowna przebudowa starej, a wynik jest trwalszy. Wyjątkiem są rozbudowane serwisy z setkami podstron, gdzie migracja bywa rozsądniejsza — wtedy mówimy to wprost.
            </p>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak zamówić"
          title="Jak zamówić stronę firmową — krok po kroku"
          :steps="processSteps"
          background="bg-surface"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o tworzenie stron firmowych"
          :faqs="faqData"
        />

        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Kompletna obecność online dla Twojej firmy"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zamów stronę firmową ze stałą ceną"
      description="Opisz firmę w kilku zdaniach — wracamy ze stałą ceną i terminem realizacji, zapisanymi w umowie, przed jakimkolwiek zobowiązaniem."
      primary-cta="Zamów bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
