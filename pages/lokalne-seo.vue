<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Lokalne SEO – Pozycjonowanie Lokalne dla Firmy | EvolaTec',
  description: 'Lokalne SEO i optymalizacja wizytówki Google Maps dla firmy. Pojawiaj się w wynikach lokalnych, Google Maps i AI dla klientów z Twojego miasta. Od 1 260 zł netto/mies.',
  ogTitle: 'Lokalne SEO – Pozycjonowanie Lokalne dla Firmy | EvolaTec',
  ogDescription: 'Lokalne SEO i optymalizacja wizytówki Google Maps dla firmy. Pojawiaj się w wynikach lokalnych, Google Maps i AI dla klientów z Twojego miasta. Od 1 260 zł netto/mies.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/lokalne-seo',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co to jest Local SEO i kiedy go stosować?',
    answer: 'Local SEO to optymalizacja widoczności firmy w lokalnych wynikach Google i Mapach Google. Stosuje się je wtedy, gdy klientów pozyskujesz z określonego obszaru geograficznego — miasta, dzielnicy lub regionu. Jeśli ktoś wpisuje w Google „fryzjer Kraków" lub „hydraulik Wola", i Twoja firma nie pojawia się w pierwszych trzech wynikach Map Pack, tracisz ruch, który trafia do konkurencji.',
  },
  {
    question: 'Ile kosztuje pozycjonowanie SEO miesięcznie?',
    answer: 'Pozycjonowanie SEO kosztuje od 1 260 zł netto miesięcznie za Local SEO dla jednej lokalizacji. W tej kwocie zawarte są optymalizacja wizytówki Google Business Profile, optymalizacja on-page, lokalne cytowania i raport miesięczny. Cena jest stała i ustalana przed podpisaniem umowy.',
  },
  {
    question: 'Jak sprawić żeby firma pojawiała się w ChatGPT i Gemini?',
    answer: 'GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu. Konkretnie oznacza to: dane strukturalne JSON-LD LocalBusiness, kompletne odpowiedzi na pytania lokalne w treści strony i cytowalne zdania zawierające nazwę firmy, miasto i usługę. LLM-y indeksują te dane niezależnie od wyników Map Pack.',
  },
  {
    question: 'Co to jest GEO optymalizacja?',
    answer: 'GEO optymalizacja (Generative Engine Optimization) to dostosowanie treści i struktury strony do wymagań AI wyszukiwarek — ChatGPT Search, Google Gemini, Perplexity i Microsoft Copilot. Zamiast rankingów w niebieskich linkach chodzi o cytowanie Twojej firmy w odpowiedziach generowanych przez modele językowe. Kluczowe są: Schema.org markup, pełne zdania z weryfikowalnymi faktami i wysoki autorytet domeny. W każdej realizacji EvolaTec te elementy są wdrożone standardowo.',
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
      areaServed: [
        { '@type': 'City', name: 'Warszawa' },
        { '@type': 'City', name: 'Kraków' },
        { '@type': 'City', name: 'Wrocław' },
        { '@type': 'City', name: 'Gdańsk' },
        { '@type': 'Country', name: 'Poland' },
      ],
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
      '@id': 'https://evolatec.pl/lokalne-seo#webpage',
      url: 'https://evolatec.pl/lokalne-seo',
      name: 'Lokalne SEO – Pozycjonowanie Lokalne dla Firmy | EvolaTec',
      description: 'Lokalne SEO i optymalizacja wizytówki Google Maps dla firmy. Pojawiaj się w wynikach lokalnych, Google Maps i AI dla klientów z Twojego miasta. Od 1 260 zł netto/mies.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/lokalne-seo#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/lokalne-seo#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Pozycjonowanie SEO', item: 'https://evolatec.pl/seo' },
        { '@type': 'ListItem', position: 3, name: 'Lokalne SEO', item: 'https://evolatec.pl/lokalne-seo' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/lokalne-seo#service',
      name: 'Lokalne SEO i pozycjonowanie lokalne',
      description: 'Optymalizacja widoczności firmy w lokalnych wynikach Google, Mapach Google i AI wyszukiwarkach. Obejmuje Google Business Profile, lokalne cytowania, Schema.org LocalBusiness i optymalizację on-page.',
      url: 'https://evolatec.pl/lokalne-seo',
      serviceType: 'Local SEO',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1260',
          priceCurrency: 'PLN',
          valueAddedTaxIncluded: false,
          billingIncrement: 'P1M',
        },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/lokalne-seo#faq',
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
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/lokalne-seo' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) }],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'od 1 260 zł', label: 'netto miesięcznie',      icon: 'sell'          },
  { value: '2–4 mies.',   label: 'do pierwszych efektów',  icon: 'schedule'      },
  { value: 'Map Pack',    label: 'Top 3 Google Maps',       icon: 'location_on'   },
  { value: 'GEO',         label: 'Widoczność w AI — gratis', icon: 'smart_toy'   },
]

const introParagraphs = [
  'Lokalne SEO to zestaw działań, które sprawiają, że firma pojawia się w wynikach Google wtedy, gdy ktoś szuka usługi lub produktu w określonym mieście lub regionie. Chodzi o widoczność w trzech miejscach jednocześnie: w organicznych wynikach wyszukiwania, w Mapach Google i — coraz częściej — w odpowiedziach AI asystentów, takich jak ChatGPT i Gemini.',
  'Lokalne SEO ma sens wtedy, gdy klientów pozyskujesz z określonego obszaru geograficznego. Firma budowlana działająca w Warszawie nie potrzebuje widoczności w Gdańsku — potrzebuje być pierwsza w wynikach dla zapytań z dopiskiem „Warszawa", „Mokotów" czy „Ursynów". Podobnie klinika stomatologiczna, salon urody, kancelaria prawna czy serwis samochodowy — każdy z tych biznesów ma swój promień działania i właśnie w tym promieniu musi być widoczny.',
  'Bez lokalnego SEO wiele firm pojawia się w Google dopiero na drugiej lub trzeciej stronie wyników — w miejscu, gdzie użytkownicy już nie zaglądają. Wizytówka Google Business Profile bez optymalizacji jest niewidoczna w Map Pack, choć to właśnie Map Pack pojawia się jako pierwsze przy lokalnych zapytaniach.',
]

const deliverables = [
  {
    icon: 'location_on',
    title: 'Optymalizacja Google Business Profile',
    description: 'Uzupełnienie i weryfikacja wizytówki, dobór kategorii podstawowej i dodatkowych, opis z frazami kluczowymi, harmonogram postów GBP i odpowiedzi na recenzje. Wizytówka jest pierwszym wynikiem, który widzi użytkownik przy lokalnych zapytaniach.',
  },
  {
    icon: 'corporate_fare',
    title: 'NAP consistency — spójność danych w internecie',
    description: 'Weryfikacja i ujednolicenie nazwy firmy, adresu i numeru telefonu we wszystkich katalogach, agregatorach i wzmiankach w internecie. Niespójne dane NAP obniżają ranking w Map Pack — Google nie wie, który wpis jest aktualny.',
  },
  {
    icon: 'hub',
    title: 'Lokalne cytowania i katalogi branżowe',
    description: 'Zgłoszenie firmy do katalogów tematycznych i lokalnych portali miejskich z linkiem zwrotnym do strony i wizytówki. Każde cytowanie wzmacnia sygnał lokalności dla algorytmu Google.',
  },
  {
    icon: 'schema',
    title: 'Dane strukturalne LocalBusiness Schema.org',
    description: 'Implementacja JSON-LD z adresem, obszarem obsługi i godzinami otwarcia. Schema.org markup dla FAQ, HowTo, Service i LocalBusiness jest standardem w każdej realizacji — czytelny dla Google i dla AI wyszukiwarek.',
  },
  {
    icon: 'article',
    title: 'Optymalizacja strony pod frazy lokalne',
    description: 'Dedykowane podstrony dla obsługiwanych dzielnic lub miast, treści odpowiadające na lokalne zapytania i wewnętrzna struktura linków. Frazy z geolokalizacją konwertują wyżej niż ogólne — użytkownik, który szuka „elektryk Mokotów", jest gotowy do zamówienia.',
  },
  {
    icon: 'analytics',
    title: 'Raport miesięczny z metrykami',
    description: 'Pozycje fraz lokalnych, liczba wyświetleń wizytówki, zapytania w Map Pack, zmiany w Call Clicks i Direction Requests. Każdy raport zawiera porównanie z poprzednim miesiącem i listę działań zrealizowanych w danym okresie.',
  },
]

const whyLocalBenefits = [
  {
    icon: 'speed',
    title: 'Efekty szybciej niż w SEO ogólnopolskim',
    description: 'Frazy lokalne mają niższą konkurencję niż ogólnopolskie. Pierwsze zmiany w Map Pack pojawiają się po 6–10 tygodniach, a organiczne wyniki dla fraz lokalnych — po 3–4 miesiącach od startu kampanii.',
  },
  {
    icon: 'people',
    title: 'Wyższy współczynnik konwersji',
    description: 'Użytkownik szukający „dentysta Wrocław" jest zdecydowanie bliżej decyzji zakupowej niż ktoś wpisujący „dentysta". Ruch lokalny konwertuje wyżej — bo intencja jest bardziej precyzyjna.',
  },
  {
    icon: 'smart_toy',
    title: 'Widoczność w AI wyszukiwarkach — w cenie',
    description: 'GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu. Dane strukturalne LocalBusiness i FAQ pozwalają AI asystentom cytować Twoją firmę przy zapytaniach lokalnych.',
  },
  {
    icon: 'lock',
    title: 'Stała cena bez niespodzianek',
    description: 'Cena jest ustalana przed startem i nie zmienia się w trakcie kampanii. Jeśli zakres pracy rośnie — na przykład dodajesz nową lokalizację — nowy zakres jest wyceniany i zatwierdzany osobno.',
  },
]

const processSteps = [
  {
    step: 1,
    title: 'Audyt lokalny i analiza konkurencji',
    description: 'Sprawdzamy aktualny stan wizytówki Google Business Profile, profil cytowań NAP, pozycje fraz lokalnych i Map Pack konkurencji. Na tej podstawie określamy, co wymaga natychmiastowej poprawy, a co można budować stopniowo.',
  },
  {
    step: 2,
    title: 'Optymalizacja wizytówki i struktury strony',
    description: 'Uzupełniamy i optymalizujemy Google Business Profile, implementujemy dane strukturalne LocalBusiness Schema.org na stronie, tworzymy lub optymalizujemy podstrony lokalne i uruchamiamy kampanię cytowań NAP.',
  },
  {
    step: 3,
    title: 'Bieżące utrzymanie i budowanie autorytetu lokalnego',
    description: 'Co miesiąc: posty na GBP, odpowiedzi na recenzje, nowe lokalne cytowania, optymalizacja treści pod nowe frazy lokalne. Monitorujemy pozycje i reagujemy na zmiany algorytmu Google.',
  },
  {
    step: 4,
    title: 'Raport miesięczny i planowanie',
    description: 'Raport z pozycjami fraz, statystykami wizytówki, zmianami w Call Clicks i Direction Requests. Omawiamy wyniki i planujemy działania na kolejny miesiąc — każda decyzja jest uzasadniona danymi.',
  },
]

const featuresItems = [
  {
    icon: 'map',
    title: 'Map Pack — Top 3 w wynikach lokalnych',
    description: 'Widoczność w Map Pack to najcenniejsza pozycja przy lokalnych zapytaniach — pojawia się nad organicznymi wynikami, z przyciskiem „Zadzwoń" widocznym bezpośrednio w wyszukiwarce.',
  },
  {
    icon: 'record_voice_over',
    title: 'Zapytania głosowe i mobilne',
    description: 'Ponad 50% zapytań lokalnych pochodzi z urządzeń mobilnych. Optymalizujemy strukturę strony i wizytówki pod zapytania głosowe — krótsze frazy w formie pytań, które Siri, Google Assistant i Alexa przetwarzają inaczej niż wyszukiwarka desktopowa.',
  },
  {
    icon: 'reviews',
    title: 'Zarządzanie recenzjami Google',
    description: 'Recenzje Google wpływają na pozycję w Map Pack i na konwersję. Odpowiadamy na recenzje w Twoim imieniu lub przygotowujemy szablony odpowiedzi — zarówno na pozytywne, jak i na negatywne opinie.',
  },
]

const comparisonRows = [
  { label: 'Zasięg docelowy',         local: 'Jedno miasto, region, województwo',       national: 'Cała Polska'                       },
  { label: 'Czas do efektów',         local: '2–4 miesiące',                            national: '6–12 miesięcy'                     },
  { label: 'Konkurencja fraz',        local: 'Niższa — frazy z geolokalizacją',          national: 'Wysoka — domeny ogólnopolskie'     },
  { label: 'Kluczowe narzędzie',      local: 'Google Business Profile + Map Pack',       national: 'Profil linków zewnętrznych'        },
  { label: 'Cena miesięczna',         local: 'Od 1 260 zł netto',                        national: 'Od 2 100 zł netto'                 },
  { label: 'Kiedy wybrać',            local: 'Usługi lokalne, jeden lub kilka oddziałów', national: 'E-commerce, produkty ogólnopolskie' },
]

const pricingPlans = [
  {
    name: 'Local SEO',
    price: 'od 1 260 zł netto',
    delivery: 'miesięcznie',
    highlight: true,
    badge: 'Dla firm lokalnych',
    features: [
      'Optymalizacja Google Business Profile',
      'NAP consistency — spójność danych we wszystkich katalogach',
      'Lokalne cytowania i katalogi branżowe',
      'Dane strukturalne LocalBusiness Schema.org',
      'Optymalizacja on-page pod frazy lokalne',
      'GEO optymalizacja — widoczność w ChatGPT, Gemini, Perplexity',
      'Miesięczny raport z pozycjami i statystykami wizytówki',
    ],
    cta: 'Rozpocznij pozycjonowanie lokalne',
    ctaLink: '/kontakt',
    note: 'Stała cena — wycena przed startem projektu',
  },
  {
    name: 'SEO + Link Building',
    price: 'od 2 100 zł netto',
    delivery: 'miesięcznie',
    highlight: false,
    features: [
      'Wszystko z pakietu Local SEO',
      'Pozyskiwanie linków zewnętrznych z DR 30+',
      'Digital PR i guest posting na niszowych serwisach',
      'Raport linków: URL, DR, anchor text, data publikacji',
    ],
    cta: 'Sprawdź link building',
    ctaLink: '/link-building',
    note: 'Stała cena — wycena przed startem projektu',
  },
]

const checklistColumns = [
  {
    heading: 'Kiedy lokalne SEO przynosi efekty najszybciej',
    items: [
      'Firma świadczy usługi na miejscu — klient przyjeżdża do Ciebie',
      'Obszar działania to jedno miasto lub kilka dzielnic',
      'Branża lokalna: restauracja, klinika, salon, kancelaria, serwis',
      'Google Business Profile jest niekompletna lub nieoptymalziowana',
      'Konkurenci pojawiają się w Map Pack, Twoja firma — nie',
      'Ponad 50% ruchu na stronie pochodzi z urządzeń mobilnych',
    ],
  },
  {
    heading: 'Kiedy lepiej wybrać ogólnopolskie SEO',
    items: [
      'Sprzedajesz produkty lub usługi na całą Polskę',
      'Działasz w modelu e-commerce bez lokalnych punktów odbioru',
      'Klientów pozyskujesz z całego kraju lub za granicą',
      'Frazy docelowe nie zawierają nazwy miasta ani regionu',
      'Planujesz ekspansję na nowe rynki geograficzne',
      'Masz silną markę ogólnopolską wymagającą ochrony widoczności',
    ],
  },
]

const relatedServices = [
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Pełna obsługa SEO z audytem technicznym, optymalizacją on-page i link buildingiem — gdy Twoi klienci są w całej Polsce.',
    link: '/seo',
  },
  {
    icon: 'search_check',
    title: 'Audyt SEO',
    description: 'Sprawdź, dlaczego strona nie pojawia się w lokalnych wynikach. Jednorazowy raport PDF — 840 zł netto, bez abonamentu.',
    link: '/audyt-seo',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja SEO',
    description: 'Techniczne i on-page SEO — wdrożenie konkretnych poprawek bez stałej umowy miesięcznej.',
    link: '/optymalizacja-seo',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <HeroSection
      background-image="/images/hero-lokalne-seo.webp"
      badge="Lokalne SEO — pozycjonowanie regionalne"
      title="Lokalne SEO – bądź widoczny tam, gdzie szukają Twoi klienci"
      description="Widoczność w Google Maps, Map Pack i AI wyszukiwarkach dla firm działających lokalnie. Optymalizacja Google Business Profile, lokalne cytowania i Schema.org LocalBusiness — od 1 260 zł netto miesięcznie."
      primaryCTA="Rozpocznij pozycjonowanie lokalne"
      secondaryCTA="Co obejmuje usługa"
      :stats="heroStats"
    />

    <main id="main-content">

      <nav aria-label="breadcrumb" class="max-w-container-max mx-auto px-gutter py-4">
        <ol class="flex items-center gap-2 text-sm text-on-surface-variant">
          <li><NuxtLink to="/" class="hover:text-primary transition-colors">Strona główna</NuxtLink></li>
          <li aria-hidden="true"><span class="material-symbols-outlined text-sm">chevron_right</span></li>
          <li><NuxtLink to="/seo" class="hover:text-primary transition-colors">Pozycjonowanie SEO</NuxtLink></li>
          <li aria-hidden="true"><span class="material-symbols-outlined text-sm">chevron_right</span></li>
          <li aria-current="page" class="text-on-surface font-medium">Lokalne SEO</li>
        </ol>
      </nav>

      <article>

        <!-- ── Section 1: Co to jest lokalne SEO ─────────────────────────── -->
        <IntroSection
          heading="Co to jest lokalne SEO i kiedy warto je stosować"
          :paragraphs="introParagraphs"
          image="/images/lokalne-seo-intro.webp"
          image-alt="Wyniki Map Pack Google dla lokalnego zapytania o usługę w mieście"
        />

        <!-- ── Section 2: Co obejmuje usługa ─────────────────────────────── -->
        <ServicesSection
          title="Co obejmuje usługa pozycjonowania lokalnego"
          variant="left"
          :services="deliverables"
        />

        <!-- ── Section 3: Dlaczego lokalne SEO ───────────────────────────── -->
        <BenefitsSection
          title="Dlaczego lokalne SEO przynosi efekty szybciej niż ogólnopolskie"
          :benefits="whyLocalBenefits"
        />

        <!-- ── Section 4: Jak przebiega kampania ─────────────────────────── -->
        <ProcessSection
          title="Jak przebiega kampania lokalnego SEO — 4 etapy"
          :steps="processSteps"
        />

        <!-- ── Section 5: Kiedy lokalne vs ogólnopolskie ──────────────────── -->
        <ChecklistSection
          bg="container-low"
          :columns="checklistColumns"
        />

        <!-- ── Section 6: Specyficzne możliwości ─────────────────────────── -->
        <FeaturesSection
          title="Trzy obszary, w których lokalne SEO przewyższa ogólne pozycjonowanie"
          :features="featuresItems"
          image-url="/images/lokalne-seo-features.webp"
        />

        <!-- ── Section 7: Lokalne vs ogólnopolskie — tabela ──────────────── -->
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
                Lokalne SEO vs ogólnopolskie SEO — co wybrać dla swojej firmy
              </h2>
              <p class="text-on-surface-variant">
                Wybór między lokalnym a ogólnopolskim SEO nie jest kwestią budżetu — jest kwestią zasięgu działalności. Firma obsługująca klientów wyłącznie z jednego województwa marnuje czas, walcząc o widoczność na frazach ogólnopolskich z domenami z wieloletnią historią.
              </p>
            </div>

            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie lokalnego SEO z ogólnopolskim pozycjonowaniem</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Lokalne SEO</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Ogólnopolskie SEO</th>
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
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.local }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.national }}</td>
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
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Lokalne SEO</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.local }}</p>
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Ogólnopolskie</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.national }}</p>
                  </div>
                </div>
              </div>
            </div>

            <p class="max-w-3xl mx-auto text-on-surface-variant">
              Jeśli ponad 80% klientów pochodzi z jednego miasta lub regionu, lokalne SEO przyniesie mierzalne efekty szybciej i taniej niż kampania ogólnopolska. Przy skali działalności obejmującej kilka województw obie strategie można łączyć.
            </p>

          </div>
        </section>

        <!-- ── Section 8: Cennik ──────────────────────────────────────────── -->
        <PricingSection
          title="Ile kosztuje pozycjonowanie lokalne"
          subtitle="Stała cena miesięczna, ustalana przed startem. Bez ukrytych opłat za narzędzia, raportowanie ani konsultacje."
          :pricing-plans="pricingPlans"
        />

        <!-- ── Section 9: FAQ ─────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o lokalne SEO"
          :faqs="faqData"
        />

        <!-- ── Related services ───────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Uzupełnij lokalne SEO o inne działania marketingowe"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zacznij pojawiać się tam, gdzie szukają Twoi klienci"
      description="Od 1 260 zł netto miesięcznie. Optymalizacja Google Business Profile, Map Pack i GEO widoczność w ChatGPT, Gemini i Perplexity — stała cena, bez niespodzianek."
      primary-cta="Rozpocznij pozycjonowanie lokalne"
      secondary-cta="Sprawdź pozycjonowanie ogólne"
    />

  </div>
</template>
