<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Strona internetowa dla firmy — tworzenie | EvolaTec',
  description: 'Strona internetowa dla firmy kosztuje od 6 300 zł netto, realizacja od 7 dni roboczych. Lighthouse 95–100, SEO i GEO w cenie, stała wycena przed startem.',
  ogTitle: 'Strona internetowa dla firmy — tworzenie | EvolaTec',
  ogDescription: 'Strona internetowa dla firmy od 6 300 zł netto, realizacja od 7 dni. Lighthouse 95–100, SEO i GEO w cenie. Stała cena ustalana przed startem.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/strona-internetowa',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje strona internetowa dla firmy w Polsce?',
    answer: 'Strona firmowa kosztuje od 6 300 zł netto i jest gotowa w 7 dni roboczych. Prostszy landing page kosztuje od 2 100 zł netto, realizacja od 3 dni, a sklep internetowy od 12 600 zł netto, realizacja od 14 dni. Wszystkie ceny są stałe — wycena ustalana jest przed startem projektu i nie zmienia się w trakcie.',
  },
  {
    question: 'Jak długo trwa wykonanie strony firmowej?',
    answer: 'Strona firmowa jest gotowa od 7 dni roboczych, licząc od momentu dostarczenia treści, logo i materiałów. Landing page powstaje od 3 dni roboczych. Termin jest zapisany w umowie i liczy się od kompletu materiałów, a nie od daty jej podpisania.',
  },
  {
    question: 'Co jest potrzebne żeby zamówić stronę internetową?',
    answer: 'Do startu wystarczą cztery rzeczy: treści lub briefing do napisania tekstów, logo, preferencje kolorystyczne oraz dostęp do domeny. Jeśli nie masz gotowych tekstów ani logo, możemy je przygotować — wtedy do startu wystarczy briefing i krótka rozmowa o firmie.',
  },
  {
    question: 'Czy mogę samodzielnie edytować treści na stronie po wdrożeniu?',
    answer: 'Tak. Na życzenie klienta strona wyposażana jest w Storyblok CMS — edycja treści i zdjęć odbywa się przez przeglądarkę, bez programisty i bez znajomości kodu. Jeśli wolisz nie zarządzać treścią samodzielnie, drobne zmiany wprowadzamy w ramach wsparcia.',
  },
  {
    question: 'Jak wybrać agencję webową w Polsce?',
    answer: 'Sprawdź trzy rzeczy: czy agencja podaje stałe ceny przed podpisaniem umowy, czy pokazuje mierzalne wyniki realizacji (wynik Lighthouse, czas ładowania, ruch organiczny) i czy jej strony działają po roku, nie tylko w dniu oddania. Agencje pracujące wyłącznie na szablonach rzadko pokazują wyniki Core Web Vitals, bo zwykle nie są one powodem do dumy.',
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
      '@id': 'https://evolatec.pl/strona-internetowa#webpage',
      url: 'https://evolatec.pl/strona-internetowa',
      name: 'Strona internetowa dla firmy — tworzenie | EvolaTec',
      description: 'Strona internetowa dla firmy kosztuje od 6 300 zł netto, realizacja od 7 dni roboczych. Lighthouse 95–100, SEO i GEO w cenie, stała wycena przed startem.',
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
      '@id': 'https://evolatec.pl/strona-internetowa#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Strona internetowa dla firmy', item: 'https://evolatec.pl/strona-internetowa' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/strona-internetowa#service',
      name: 'Strona internetowa dla firmy',
      serviceType: 'Tworzenie stron internetowych',
      description: 'Profesjonalna strona www dla firm i usługodawców. Projekt, development, SEO i GEO optymalizacja. Stała cena od 6 300 zł netto, realizacja od 7 dni roboczych.',
      url: 'https://evolatec.pl/strona-internetowa',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Landing page',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '2100', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
        },
        {
          '@type': 'Offer',
          name: 'Strona firmowa',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '6300', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
        },
        {
          '@type': 'Offer',
          name: 'Sklep internetowy',
          priceSpecification: { '@type': 'PriceSpecification', minPrice: '12600', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/strona-internetowa#faq',
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
  name: 'Jak zlecić stronę internetową dla firmy — 4 kroki',
  description: 'Proces zlecenia strony internetowej w EvolaTec: od bezpłatnej konsultacji do wdrożenia.',
  totalTime: 'P7D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Bezpłatna konsultacja i wycena', text: 'Omawiamy cel strony, zakres i budżet. Wynik: stała wycena na piśmie przed startem. Czas: 1–2 dni robocze.' },
    { '@type': 'HowToStep', position: 2, name: 'Projekt i design', text: 'Planujemy strukturę podstron i projektujemy układ pod Twoją branżę i materiały. Czas: 3–5 dni roboczych.' },
    { '@type': 'HowToStep', position: 3, name: 'Development, SEO i GEO', text: 'Kodujemy stronę w Vue.js i Nuxt.js, wdrażamy pełne SEO on-page, Schema.org JSON-LD i konfigurujemy hosting.' },
    { '@type': 'HowToStep', position: 4, name: 'Testy i launch', text: 'Sprawdzamy stronę na wszystkich urządzeniach, weryfikujemy Core Web Vitals i wdrażamy na serwer produkcyjny. Zaczyna się 30 dni wsparcia.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/strona-internetowa' }],
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
  { value: '95–100',      label: 'Lighthouse score',     icon: 'speed'     },
  { value: 'Stała',       label: 'Cena przed startem',   icon: 'verified'  },
]

const includedItems = [
  { icon: 'phone_iphone',    label: 'Responsywny projekt mobile-first'  },
  { icon: 'web',             label: 'Wiele podstron + blog'             },
  { icon: 'edit_note',       label: 'Storyblok CMS na życzenie'         },
  { icon: 'search_insights', label: 'SEO wbudowane w kod'               },
  { icon: 'smart_toy',       label: 'GEO — ChatGPT, Gemini, Perplexity' },
  { icon: 'lock',            label: 'Certyfikat SSL + hosting'          },
  { icon: 'mail',            label: 'Formularz kontaktowy'              },
  { icon: 'support_agent',   label: '30 dni wsparcia po wdrożeniu'      },
]

const pricingRows = [
  { service: 'Landing page',      price: 'od 2 100 zł netto',  delivery: 'od 3 dni roboczych'  },
  { service: 'Strona firmowa',    price: 'od 6 300 zł netto',  delivery: 'od 7 dni roboczych'  },
  { service: 'Sklep internetowy', price: 'od 12 600 zł netto', delivery: 'od 14 dni roboczych' },
]

const compareRows = [
  { label: 'Czas ładowania',   tpl: '3–8 sekund',                  custom: '< 1 sekunda'                          },
  { label: 'Wynik Lighthouse', tpl: '40–70 / 100',                 custom: '95–100 / 100'                         },
  { label: 'Wygląd',           tpl: 'Wspólny dla tysięcy firm',    custom: 'Projektowany pod Twoją markę'         },
  { label: 'Utrzymanie',       tpl: 'Comiesięczne aktualizacje',   custom: 'Minimalne — brak wtyczek'             },
  { label: 'Bezpieczeństwo',   tpl: 'Podatności przez wtyczki',    custom: 'Brak CMS opartego na wtyczkach'       },
  { label: 'Baza SEO',         tpl: 'Zależna od dodatków',         custom: 'Zoptymalizowana w kodzie'             },
  { label: 'Własność kodu',    tpl: 'Uwiązanie do platformy',      custom: 'Pełna własność, bez abonamentu'       },
]

const relatedServices = [
  { icon: 'corporate_fare', title: 'Strona firmowa', description: 'Wielostronicowy serwis z SEO, blogiem i CMS — od 7 dni roboczych.', price: 'od 6 300 zł netto', href: '/stworz-strone-firmowa' },
  { icon: 'trending_up', title: 'Pozycjonowanie SEO', description: 'Organiczna widoczność w Google — audyt, on-page SEO i raportowanie.', price: 'od 1 260 zł netto/mies.', href: '/seo' },
  { icon: 'search_check', title: 'Audyt SEO', description: 'Jednorazowy raport techniczny z priorytetami do naprawy — bez abonamentu.', price: '840 zł netto', href: '/audyt-seo' },
]

const processSteps = [
  {
    icon: 'mail',
    title: 'Bezpłatna konsultacja i wycena',
    description: 'Omawiamy cel strony, zakres i budżet. Wynik: stała wycena na piśmie przed startem. Czas: 1–2 dni robocze.',
  },
  {
    icon: 'design_services',
    title: 'Projekt i design',
    description: 'Planujemy strukturę podstron i projektujemy układ pod Twoją branżę i materiały. Czas: 3–5 dni roboczych dla strony firmowej.',
  },
  {
    icon: 'code',
    title: 'Development, SEO i GEO',
    description: 'Kodujemy stronę w Vue.js i Nuxt.js, wdrażamy pełne SEO on-page, Schema.org JSON-LD i konfigurujemy hosting.',
  },
  {
    icon: 'rocket_launch',
    title: 'Testy i launch',
    description: 'Sprawdzamy stronę na wszystkich urządzeniach, weryfikujemy Core Web Vitals i wdrażamy na serwer produkcyjny. Zaczyna się 30 dni wsparcia.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Strona internetowa dla firmy"
      title="Strona internetowa dla firmy, która przyciąga klientów"
      description="Strona firmowa budowana w Nuxt.js — szybka, zoptymalizowana pod SEO i GEO, ze stałą ceną od 6 300 zł netto ustaloną przed startem. Realizacja od 7 dni roboczych."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz ceny"
      primary-href="/kontakt"
      secondary-href="/kalkulator-kosztow"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb -->

      <article>

        <!-- ── Section 1: Dlaczego strony nie przynoszą zapytań ─────────── -->
        <section
          aria-labelledby="section-problem"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <h2
                  id="section-problem"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Dlaczego większość firmowych stron nie przynosi zapytań
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Firma zamawia stronę, płaci, dostaje ją — i po pół roku okazuje się, że telefon milczy, a w Google nie widać jej nawet po nazwie. Powód jest niemal zawsze ten sam: powstała „wizytówka", a nie narzędzie sprzedaży. Ładnie wygląda, ale ładuje się wolno, nie ma struktury pod wyszukiwarkę i nie odpowiada na pytania, które zadaje klient gotowy do zakupu.
                  </p>
                  <p>
                    Strona, która przynosi zapytania, musi robić trzy rzeczy naraz: ładować się poniżej 1 sekundy, być zrozumiała dla Google od strony kodu i prowadzić odwiedzającego do jednego jasnego działania — kontaktu lub wyceny. To nie jest kwestia ładniejszego szablonu, tylko architektury. Strona zbudowana w Nuxt.js osiąga <strong class="text-on-surface">wynik Lighthouse 95–100/100</strong> mierzony w Google PageSpeed Insights, podczas gdy typowa witryna na gotowym szablonie zatrzymuje się na 40–70/100.
                  </p>
                  <p>
                    Druga połowa problemu to widoczność. Budujemy każdą stronę z wbudowanym SEO i danymi strukturalnymi Schema.org, dzięki czemu firma może pojawiać się nie tylko w klasycznych wynikach Google, ale też jako cytowane źródło w <strong class="text-on-surface">ChatGPT, Gemini i Perplexity</strong>. Coraz więcej klientów zaczyna poszukiwania właśnie od asystenta AI — strona bez tej warstwy jest dla nich niewidoczna.
                  </p>
                </div>
              </div>

              <div data-reveal="right" class="rounded-2xl overflow-hidden">
                <NuxtImg
                  src="/assets/website.webp"
                  alt="Strona internetowa dla firmy wyświetlona na MacBooku — nowoczesny design i wynik Lighthouse 100/100"
                  width="640"
                  height="420"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: Co zawiera ─────────────────────────────────────── -->
        <section
          aria-labelledby="section-included"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

              <div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">check_circle</span>
                  Bez ukrytych pozycji
                </span>

                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co zawiera strona internetowa dla firmy — bez dopłat
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    Strona internetowa dla firmy kosztuje od 6 300 zł netto i w tej cenie dostajesz kompletny serwis, nie szkielet do rozbudowy za dopłatą. Nie ma osobnych pozycji za SSL, wersję mobilną czy podstawowe SEO — to standard każdego projektu.
                  </p>
                  <p>
                    Strona firmowa nie zawiera katalogu produktów ani płatności online — to domena
                    <NuxtLink to="/sklep-internetowy" class="text-primary font-semibold hover:underline">sklepu internetowego</NuxtLink>,
                    który zaczyna się od 12 600 zł netto. Jeśli sprzedajesz produkty, od razu kierujemy rozmowę na właściwy model, zamiast doklejać koszyk do strony, która nie była pod to projektowana.
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

        <!-- ── Section 3: Cena i czas realizacji ─────────────────────────── -->
        <section
          aria-labelledby="section-prices"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-left mx-auto mb-stack-lg">
              <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Cennik</span>
              <h2
                id="section-prices"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Strona internetowa dla firmy — cena i czas realizacji
              </h2>
              <p class="text-on-surface-variant">
                Brak widocznych cen na stronie agencji to sygnał ostrzegawczy — zwykle oznacza, że cena pojawia się dopiero po rozmowie. U nas jest odwrotnie: ceny są stałe, publiczne i ustalane przed podpisaniem umowy.
              </p>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in pricingRows"
                :key="row.service"
                class="bg-white rounded-xl border border-outline-variant/30 p-4 flex items-center justify-between gap-3"
              >
                <div>
                  <p class="font-bold text-on-surface">{{ row.service }}</p>
                  <p class="text-xs text-on-surface-variant mt-0.5 flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm" aria-hidden="true">schedule</span>
                    {{ row.delivery }}
                  </p>
                </div>
                <p class="text-primary font-black text-lg whitespace-nowrap">{{ row.price }}</p>
              </div>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block mb-stack-lg rounded-xl overflow-hidden border border-outline-variant/30">
              <table class="w-full text-base">
                <caption class="sr-only">Ceny i czas realizacji stron internetowych dla firm</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-primary/20">
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Usługa</th>
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Cena od</th>
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Czas realizacji</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in pricingRows"
                    :key="row.service"
                    class="border-b border-outline-variant/20 hover:bg-surface-container-low/50 transition-colors"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/30'"
                  >
                    <td class="p-4 font-medium text-on-surface">{{ row.service }}</td>
                    <td class="p-4 font-bold text-primary text-lg">{{ row.price }}</td>
                    <td class="p-4 text-on-surface-variant">{{ row.delivery }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="max-w-2xl mx-auto space-y-4 text-on-surface-variant">
              <p>
                <strong class="text-on-surface">Strona firmowa kosztuje od 6 300 zł netto, realizacja trwa od 7 dni roboczych</strong> od dostarczenia treści i materiałów. Prostsza strona jednostronicowa — landing page — kosztuje od 2 100 zł netto i jest gotowa od 3 dni roboczych. Sklep internetowy z katalogiem i płatnościami zaczyna się od 12 600 zł netto.
              </p>
              <p>
                Każda z tych kwot to cena stała — wycena jest ustalana przed startem i nie zmienia się w trakcie projektu. Dla projektów wykraczających poza standard — integracja z systemem rezerwacji, niestandardowy formularz, wielojęzyczność — wycenę przygotowujemy bezpłatnie po krótkiej rozmowie technicznej.
              </p>
            </div>

            <div class="text-left mt-10">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt swojej strony</BaseButton>
              </NuxtLink>
            </div>

          </div>
        </section>

        <!-- ── Section 4: Na zamówienie vs szablon ───────────────────────── -->
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
                Strona na zamówienie czy gotowy szablon — co wybrać dla firmy
              </h2>
              <p class="text-on-surface-variant">
                Gotowy szablon kusi niską ceną na starcie. Problem w tym, że cena startowa i koszt całkowity to dwie różne liczby — szablon trzeba co miesiąc aktualizować, jest wolniejszy, a jego struktura jest wspólna dla tysięcy innych firm.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie strony na zamówienie z gotowym szablonem</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Gotowy szablon (Wix / WordPress)</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Strona na zamówienie (EvolaTec)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in compareRows"
                    :key="row.label"
                    class="border-b border-outline-variant/20"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'"
                  >
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.tpl }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.custom }}</td>
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
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Szablon</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.tpl }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Na zamówienie</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.custom }}</p>
                  </div>
                </div>
              </div>
            </div>

            <p class="text-on-surface-variant">
              Strona na zamówienie ma sens wtedy, gdy ma realnie przynosić klientów, a nie tylko istnieć. Jeśli potrzebujesz wyłącznie adresu w sieci na wizytówkę, szablon wystarczy — i uczciwie to powiemy. Granica przebiega tam, gdzie szybkość, pozycja w Google i wygląd zaczynają wpływać na to, ile zapytań spływa w miesiącu. Alternatywą pośrednią bywa
              <NuxtLink to="/landing-page" class="text-primary font-semibold hover:underline">landing page</NuxtLink>
              — jedna dopracowana strona pod konkretną kampanię.
            </p>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak zlecić"
          title="Jak zlecić stronę internetową — proces w 4 krokach"
          :steps="processSteps"
          background="bg-surface"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o strony internetowe dla firm"
          :faqs="faqData"
        />

        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Następny krok po stronie internetowej"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Uzyskaj bezpłatną wycenę w 24 godziny"
      description="Opisz projekt w kilku zdaniach — wracamy ze stałą ceną i terminem realizacji przed podpisaniem jakiejkolwiek umowy."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
