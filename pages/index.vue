<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Tworzenie Stron Internetowych dla Firm | EvolaTec',
  description: 'Profesjonalne strony internetowe dla firm: landing page od 2 100 zł, strona firmowa od 6 300 zł. Lighthouse 95–100, realizacja od 3 dni. Stała cena.',
  ogTitle: 'Tworzenie Stron Internetowych dla Firm | EvolaTec',
  ogDescription: 'Strony internetowe dla firm w Polsce: landing page od 2 100 zł, strona firmowa od 6 300 zł. Lighthouse 95–100, realizacja od 3 dni. Stała cena.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje strona internetowa dla firmy w Polsce?',
    answer: 'Strona firmowa kosztuje od 6 300 zł netto i jest gotowa w 7 dni roboczych. Landing page kosztuje od 2 100 zł netto, realizacja od 3 dni roboczych. Sklep internetowy kosztuje od 12 600 zł netto, realizacja od 14 dni. Wszystkie ceny są stałe — wycena ustalana jest przed startem projektu i nie zmienia się w trakcie.',
  },
  {
    question: 'Jaka jest różnica między landing page a stroną firmową?',
    answer: 'Landing page to jedna strona z jednym celem — najczęściej zbieranie leadów lub sprzedaż przez kampanię reklamową. Strona firmowa to wielostronicowy serwis z osobnymi podstronami dla usług, bloga i kontaktu, który buduje widoczność organiczną w Google. Landing page kosztuje od 2 100 zł i jest gotowy w 3 dni — strona firmowa kosztuje od 6 300 zł i jest gotowa w 7 dni.',
  },
  {
    question: 'WordPress czy własne rozwiązanie — co wybrać dla firmy?',
    answer: 'WordPress ma wynik Lighthouse na poziomie 40–70/100 i czas ładowania 3–8 sekund przy typowej konfiguracji z wtyczkami. Nasze strony budowane w Nuxt.js osiągają 95–100/100 i ładują się poniżej 1 sekundy. WordPress wymaga stałej obsługi wtyczek, aktualizacji i jest częstym celem ataków przez podatności w rozszerzeniach — strona bez WordPressa nie ma tej powierzchni ataku.',
  },
  {
    question: 'Jak wygląda proces tworzenia strony internetowej?',
    answer: 'Projekt przebiega w 4 etapach: bezpłatna konsultacja i wycena, projekt i design, development z SEO i GEO, testy i launch. Strona firmowa jest gotowa w 7 dni roboczych od dostarczenia treści i materiałów przez klienta. Po wdrożeniu następują 30 dni wsparcia technicznego wliczone w cenę projektu.',
  },
  {
    question: 'Jak wybrać agencję webową w Polsce?',
    answer: 'Sprawdź trzy rzeczy: czy agencja podaje stałe ceny przed podpisaniem umowy, czy pokazuje mierzalne wyniki swoich realizacji (wynik Lighthouse, czas ładowania, ruch organiczny), i czy strony działają po roku — nie tylko w dniu oddania. Agencje pracujące na szablonach i WordPressie rzadko pokazują wyniki Core Web Vitals, bo zazwyczaj nie są powodem do dumy.',
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
      address: { '@type': 'PostalAddress', addressLocality: 'Wrocław', addressCountry: 'PL' },
      email: 'team@evolatec.pl',
      areaServed: [
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'City', name: 'Wrocław' },
        { '@type': 'City', name: 'Kraków' },
        { '@type': 'City', name: 'Warszawa' },
        { '@type': 'City', name: 'Gdańsk' },
      ],
      contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'team@evolatec.pl' },
      sameAs: ['https://g.page/evolatec-pl', 'https://www.linkedin.com/company/evolatec'],
      priceRange: '2100 zł – 25200 zł',
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
      '@id': 'https://evolatec.pl/#webpage',
      url: 'https://evolatec.pl',
      name: 'Tworzenie Stron Internetowych dla Firm | EvolaTec',
      description: 'Profesjonalne strony internetowe dla firm: landing page od 2 100 zł, strona firmowa od 6 300 zł. Lighthouse 95–100, realizacja od 3 dni. Stała cena.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-intro'] },
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/#service',
      name: 'Tworzenie stron internetowych dla firm',
      description: 'Strony firmowe, landing page i sklepy internetowe budowane w Nuxt.js. Lighthouse 95–100/100, ładowanie poniżej 1 sekundy, GEO optymalizacja w cenie każdego projektu.',
      url: 'https://evolatec.pl',
      serviceType: 'Web Development',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'AggregateOffer',
        lowPrice: '2100',
        highPrice: '25200',
        priceCurrency: 'PLN',
        offerCount: '4',
        priceSpecification: [
          { '@type': 'PriceSpecification', name: 'Landing page', price: '2100', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
          { '@type': 'PriceSpecification', name: 'Strona firmowa', price: '6300', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
          { '@type': 'PriceSpecification', name: 'Sklep internetowy', price: '12600', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
          { '@type': 'PriceSpecification', name: 'Premium e-commerce', price: '25200', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
        ],
      },
    },
    {
      '@type': 'ItemList',
      '@id': 'https://evolatec.pl/#services-list',
      name: 'Usługi EvolaTec',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Service', name: 'Landing page', url: 'https://evolatec.pl/landing-page', offers: { '@type': 'Offer', price: '2100', priceCurrency: 'PLN' } } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Service', name: 'Strona firmowa', url: 'https://evolatec.pl/stworz-strone-firmowa', offers: { '@type': 'Offer', price: '6300', priceCurrency: 'PLN' } } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Service', name: 'Sklep internetowy', url: 'https://evolatec.pl/sklep-internetowy', offers: { '@type': 'Offer', price: '12600', priceCurrency: 'PLN' } } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Service', name: 'Pozycjonowanie SEO', url: 'https://evolatec.pl/seo', offers: { '@type': 'Offer', price: '1260', priceCurrency: 'PLN' } } },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqData.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    {
      '@type': 'HowTo',
      name: 'Jak zamówić stronę internetową dla firmy — 4 etapy',
      description: 'Proces tworzenia strony internetowej w EvolaTec: od bezpłatnej konsultacji do wdrożenia.',
      totalTime: 'P7D',
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Bezpłatna konsultacja i wycena', text: 'Omawiamy cel, zakres i budżet. Wynik: stała wycena na piśmie przed startem. Czas: 1–2 dni robocze.' },
        { '@type': 'HowToStep', position: 2, name: 'Projekt i design', text: 'Planowanie struktury stron, projekt UI. Czas: 2–3 dni robocze dla landing page, 3–5 dla strony firmowej.' },
        { '@type': 'HowToStep', position: 3, name: 'Development, SEO i GEO', text: 'Kodowanie w Vue.js i Nuxt.js, pełne on-page SEO, Schema.org JSON-LD, konfiguracja hostingu.' },
        { '@type': 'HowToStep', position: 4, name: 'Testy i launch', text: 'Sprawdzenie na wszystkich urządzeniach, weryfikacja Core Web Vitals, wdrożenie. Zaczyna się 30 dni wsparcia.' },
      ],
    },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl' }],
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
    { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
})

// ─── Animated counters ─────────────────────────────────────────────────────

const c95    = ref(0)
const cLoad  = ref(0)
const cDays  = ref(0)
const c100   = ref(0)

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }

function animateCount(setter: (v: number) => void, from: number, to: number, ms: number) {
  const start = performance.now()
  const tick = (now: number) => {
    const p = Math.min((now - start) / ms, 1)
    setter(Math.round(from + (to - from) * easeOutCubic(p)))
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  const banner = document.querySelector('[data-metrics-banner]')
  if (!banner) return
  const obs = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (!entry?.isIntersecting) return
      animateCount(v => (c95.value   = v),  40,  95,  900)
      animateCount(v => (cLoad.value  = v),  80,  100, 700)
      animateCount(v => (cDays.value  = v),  0,   3,   600)
      animateCount(v => (c100.value   = v),  0,   100, 1100)
      obs.disconnect()
    },
    { threshold: 0.3 },
  )
  obs.observe(banner)
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'od 3 dni', label: 'Czas realizacji',    icon: 'flash_on' },
  { value: '95–100',   label: 'Lighthouse score',   icon: 'speed'    },
  { value: '< 1 s',    label: 'Czas ładowania',     icon: 'bolt'     },
  { value: 'Stała',    label: 'Cena przed startem', icon: 'verified' },
]

const keyMetrics = [
  { value: '95–100',   unit: '/100', label: 'Lighthouse score na każdej realizacji',    icon: 'speed'         },
  { value: '< 1 s',    unit: '',     label: 'Czas ładowania — vs 3–8 s WordPress',      icon: 'bolt'          },
  { value: 'od 3',     unit: ' dni', label: 'Realizacja landing page',                  icon: 'flash_on'      },
  { value: '100%',     unit: '',     label: 'Stała cena — bez zmian w trakcie projektu', icon: 'lock'         },
]

const includedItems = [
  { icon: 'speed',           label: 'Lighthouse 95–100/100'              },
  { icon: 'phone_iphone',    label: 'Responsive mobile-first'            },
  { icon: 'search_insights', label: 'SEO on-page wbudowane w kod'        },
  { icon: 'smart_toy',       label: 'GEO — ChatGPT, Gemini, Claude'  },
  { icon: 'lock',            label: 'Certyfikat SSL'                     },
  { icon: 'support_agent',   label: '30 dni wsparcia po wdrożeniu'       },
]

const allServices = [
  {
    icon: 'web',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    title: 'Landing page',
    description: 'Jedna konwersyjna strona do kampanii Google Ads lub launchu produktu. Gotowa w 3 dni robocze, od 2 100 zł netto.',
    href: '/landing-page',
  },
  {
    icon: 'corporate_fare',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    title: 'Strona firmowa',
    description: 'Wielostronicowy serwis z SEO, blogiem i opcjonalnym CMS. Realizacja od 7 dni roboczych, od 6 300 zł netto.',
    href: '/stworz-strone-firmowa',
  },
  {
    icon: 'storefront',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'Sklep internetowy',
    description: 'E-commerce z katalogiem produktów, koszykiem i płatnościami. Od 12 600 zł netto, realizacja od 14 dni.',
    href: '/sklep-internetowy',
  },
  {
    icon: 'trending_up',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Pozycjonowanie SEO',
    description: 'Miesięczna obsługa SEO z audytem technicznym, optymalizacją on-page i link buildingiem. Od 1 260 zł netto/mies.',
    href: '/seo',
  },
  {
    icon: 'location_on',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    title: 'Lokalne SEO',
    description: 'Google Business Profile, Map Pack i widoczność lokalna dla firm działających regionalnie. Od 1 680 zł netto/mies.',
    href: '/lokalne-seo',
  },
  {
    icon: 'phone_android',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    title: 'Aplikacja mobilna',
    description: 'React Native — jedna baza kodu na iOS i Android. MVP gotowy w 45 dni roboczych, od 21 000 zł netto.',
    href: '/kontakt',
  },
]

const usps = [
  {
    icon: 'verified',
    title: 'Stała cena ustalana przed startem',
    description: 'Wycenę dostajesz na piśmie przed podpisaniem umowy. Nie zmienia się w trakcie projektu — nie ma scope creep ani ukrytych pozycji za SSL, SEO ani responsywność.',
  },
  {
    icon: 'speed',
    title: 'Lighthouse 95–100/100 — mierzalne, nie obiecane',
    description: 'Wynik sprawdzasz sam w Google PageSpeed Insights po wdrożeniu. Nie deklarujemy — dostarczamy liczby. WordPress osiąga zazwyczaj 40–70/100 przy tej samej treści.',
  },
  {
    icon: 'smart_toy',
    title: 'GEO optymalizacja w cenie każdego projektu',
    description: 'Schema.org JSON-LD, FAQPage i LocalBusiness markup — Twoja firma jest widoczna w ChatGPT, Gemini i Claude bez dodatkowej opłaty. To był osobny pakiet rok temu.',
  },
  {
    icon: 'shield',
    title: 'Zero WordPress — zero wtyczek — zero podatności',
    description: 'Nuxt.js i Vue.js bez CMS opartego na wtyczkach oznaczają brak powierzchni ataku. Nie potrzebujesz comiesięcznych aktualizacji wtyczek ani specjalisty od bezpieczeństwa WP.',
  },
]

const serviceTypes = [
  {
    name: 'Landing page',
    price: 'od 2 100 zł netto',
    delivery: 'od 3 dni',
    subpages: '1',
    cms: false,
    blog: false,
    payments: false,
    bestFor: 'Kampanie Google Ads, generowanie leadów, launche produktów',
    href: '/landing-page',
    highlight: false,
  },
  {
    name: 'Strona firmowa',
    price: 'od 6 300 zł netto',
    delivery: 'od 7 dni',
    subpages: '5–20',
    cms: true,
    blog: true,
    payments: false,
    bestFor: 'Firmy usługowe, kancelarie, kliniki, startupy',
    href: '/stworz-strone-firmowa',
    highlight: true,
  },
  {
    name: 'Sklep internetowy',
    price: 'od 12 600 zł netto',
    delivery: 'od 14 dni',
    subpages: 'bez limitu',
    cms: true,
    blog: true,
    payments: true,
    bestFor: 'Sprzedaż produktów lub usług online',
    href: '/sklep-internetowy',
    highlight: false,
  },
]

const seoServices = [
  { icon: 'manage_search',  title: 'Pozycjonowanie SEO',   desc: 'Od 1 260 zł netto/mies.', href: '/seo'              },
  { icon: 'location_on',    title: 'Lokalne SEO',           desc: 'Od 1 680 zł netto/mies.', href: '/lokalne-seo'     },
  { icon: 'link',           title: 'Link Building',         desc: 'Od 420 zł netto/mies.', href: '/link-building'   },
  { icon: 'search_check',   title: 'Audyt SEO',             desc: '420 zł netto, jednorazowo', href: '/audyt-seo'    },
  { icon: 'tune',           title: 'Optymalizacja SEO',     desc: 'Wycena indywidualna',      href: '/optymalizacja-seo' },
  { icon: 'smart_toy',      title: 'AI SEO / GEO',          desc: 'W cenie każdego projektu', href: '/optymalizacja-ai' },
]

const wpRows = [
  { label: 'Czas ładowania',       wp: '3–8 sekund',                     nuxt: '< 1 sekunda'              },
  { label: 'Wynik Lighthouse',     wp: '40–70 / 100',                    nuxt: '95–100 / 100'             },
  { label: 'Core Web Vitals',      wp: 'Często niezaliczone',            nuxt: 'Bardzo dobre'             },
  { label: 'Bezpieczeństwo',       wp: 'Podatności przez wtyczki',       nuxt: 'Brak CMS, brak ataku'     },
  { label: 'Baza SEO',             wp: 'Zależna od wtyczek',             nuxt: 'Zoptymalizowana w kodzie' },
  { label: 'Nakład na utrzymanie', wp: 'Wysoki — wtyczki, aktualizacje', nuxt: 'Minimalny'                },
  { label: 'Skalowalność',         wp: 'Ograniczona',                    nuxt: 'Nieograniczona'           },
]

const processSteps = [
  {
    icon: 'mail',
    title: 'Bezpłatna konsultacja i wycena',
    description: 'Omawiamy cel, zakres i budżet. Wynik: stała wycena na piśmie przed startem. Czas: 1–2 dni robocze.',
  },
  {
    icon: 'design_services',
    title: 'Projekt i design',
    description: 'Planowanie struktury stron, projekt UI w oparciu o Twoje materiały i branżę. 2–3 dni robocze dla landing page, 3–5 dla strony firmowej.',
  },
  {
    icon: 'code',
    title: 'Development, SEO i GEO',
    description: 'Kodowanie w Vue.js i Nuxt.js, pełne on-page SEO, Schema.org JSON-LD dla asystentów AI, konfiguracja hostingu.',
  },
  {
    icon: 'rocket_launch',
    title: 'Testy i launch',
    description: 'Sprawdzenie na wszystkich urządzeniach, weryfikacja Core Web Vitals, wdrożenie na serwer produkcyjny. Zaczyna się 30 dni wsparcia technicznego.',
  },
]

const relatedPages = [
  {
    icon: 'web',
    title: 'Strona firmowa',
    description: 'Wielostronicowy serwis z SEO, blogiem i CMS. Realizacja od 7 dni roboczych.',
    price: 'od 6 300 zł netto',
    href: '/stworz-strone-firmowa',
  },
  {
    icon: 'storefront',
    title: 'Sklep internetowy',
    description: 'E-commerce z koszykiem i płatnościami. Realizacja od 14 dni roboczych.',
    price: 'od 12 600 zł netto',
    href: '/sklep-internetowy',
  },
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Miesięczna obsługa SEO z audytem technicznym i raportowaniem.',
    price: 'od 1 260 zł netto/mies.',
    href: '/seo',
  },
]

const pricingTableData = [
  { service: 'Landing page',       price: 'od 2 100 zł netto',  delivery: 'od 3 dni roboczych'  },
  { service: 'Strona firmowa',     price: 'od 6 300 zł netto',  delivery: 'od 7 dni roboczych'  },
  { service: 'Sklep internetowy',  price: 'od 12 600 zł netto', delivery: 'od 14 dni roboczych' },
  { service: 'Pozycjonowanie SEO', price: 'od 1 260 zł netto',  delivery: 'miesięcznie'         },
  { service: 'Google Ads',         price: 'od 1 680 zł netto',  delivery: 'miesięcznie'         },
]

const aboutFeatures = [
  { icon: 'code_blocks',    title: 'Nowoczesne technologie',    description: 'Vue.js, Nuxt.js, Tailwind CSS i TypeScript — bez WordPressa, bez wtyczek, bez kompromisów.' },
  { icon: 'bolt',           title: 'Wydajność i szybkość',      description: 'Czas ładowania poniżej 1 sekundy i Lighthouse 95–100/100 — sprawdzalny samodzielnie po wdrożeniu.' },
  { icon: 'search_insights',title: 'SEO i GEO w kodzie',        description: 'Schema.org JSON-LD, FAQPage i speakable markup — widoczność w Google i ChatGPT, Gemini, Claude.' },
  { icon: 'verified',       title: 'Stała cena przed startem',  description: 'Wycena na piśmie przed podpisaniem umowy. Cena nie zmienia się w trakcie projektu.' },
]

const whyUsPoints = [
  { icon: 'bolt',           title: 'Szybkie i wydajne strony',         description: 'Vue.js i Nuxt.js z SSR dają czas ładowania poniżej 1 sekundy i Lighthouse 95–100/100 — wielokrotnie szybciej niż typowy WordPress.' },
  { icon: 'search_insights',title: 'SEO i GEO optymalizacja',          description: 'Techniczne SEO, SSR rendering i Schema.org JSON-LD zapewniają widoczność w Google oraz cytowania w ChatGPT, Gemini i Claude.' },
  { icon: 'design_services',title: 'Premium design bez szablonów',     description: 'Żadnych motywów WordPress ani gotowych szablonów. Każdy projekt jest projektowany i kodowany indywidualnie.' },
  { icon: 'rocket_launch',  title: 'Skalowalne rozwiązania',           description: 'Architektura JAMstack nadaje się zarówno na landing page, jak i rozbudowany sklep z tysiącami produktów.' },
  { icon: 'security',       title: 'Zero wtyczek — zero podatności',   description: 'Brak CMS opartego na wtyczkach oznacza brak powierzchni ataku. Nie potrzebujesz comiesięcznych aktualizacji bezpieczeństwa.' },
  { icon: 'psychology',     title: 'Strategiczne podejście',           description: 'Nie budujemy tylko ładnych stron — dostarczamy narzędzia konwersji zoptymalizowane pod Twoich klientów i cel biznesowy.' },
]

const geoPoints = [
  'Dane strukturalne Schema.org dla zrozumienia przez AI',
  'FAQPage i HowTo markup — bezpośrednie cytowania w LLM',
  'Czytelna architektura informacji dla crawlerów AI',
  'Autoryzowane treści z faktami — polecane przez AI asystentów',
  'Server-Side Rendering — treść widoczna bez bariery JavaScript',
]

const aiEngines = ['ChatGPT', 'Google Gemini', 'Claude', 'Copilot']

const geoBenefits = [
  { icon: 'smart_toy', title: 'Widoczność w AI',           desc: 'Twoja firma jest cytowana przez ChatGPT, Gemini i Claude jako wiarygodne źródło.' },
  { icon: 'schema',    title: 'Dane strukturalne',         desc: 'Schema.org JSON-LD dla FAQ, HowTo i Service — czytelne maszynowo dla LLM.' },
  { icon: 'verified',  title: 'W cenie każdego projektu',  desc: 'GEO to nie osobna pozycja — jest wbudowane w każdą realizację EvolaTec.' },
]
</script>

<template>
  <div>

    <!-- ══ 1. HERO ════════════════════════════════════════════════════════════ -->
    <HeroSection
      badge="Agencja webowa — Polska"
      title="Tworzymy strony internetowe, które pracują na Twój biznes"
      description="Strony firmowe, landing page i sklepy online budowane w Nuxt.js — szybkie, zoptymalizowane pod SEO i GEO, ze stałą ceną ustaloną przed startem."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz ceny"
      :stats="heroStats"
    />

    <main id="main-content">
      <nav aria-label="breadcrumb" class="sr-only">
        <ol><li aria-current="page">Strona główna</li></ol>
      </nav>
      <article>

        <!-- ══ 2. O NAS ════════════════════════════════════════════════════════ -->
        <section aria-labelledby="section-about" class="relative py-section-padding bg-surface overflow-hidden">
          <div class="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" aria-hidden="true"></div>
          <div class="absolute bottom-0 -right-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none" aria-hidden="true"></div>
          <div class="relative max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">
              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">info</span>
                  O EvolaTec
                </span>
                <h2 id="section-about" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Profesjonalna strona internetowa dla
                  <span class="relative inline-block">
                    <span class="relative z-10">Twojej firmy</span>
                    <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
                  </span>
                  — jak ją tworzymy
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>EvolaTec tworzy nowoczesne strony internetowe, serwisy firmowe, landing page i platformy cyfrowe dla firm, startupów i lokalnych usługodawców.</p>
                  <p>Skupiamy się na wydajnym web developmencie, nowoczesnym UI/UX designie oraz optymalizacji SEO i GEO — rozwiązaniach, które nie tylko wyglądają profesjonalnie, ale dostarczają mierzalne wyniki.</p>
                  <p>Łączymy nowoczesne technologie jak Vue.js, Nuxt, Tailwind CSS i TypeScript, tworząc szybkie, skalowalne strony internetowe dla nowoczesnych firm.</p>
                  <p>Niezależnie czy potrzebujesz strony firmowej, platformy e-commerce, landing page czy indywidualnego rozwiązania — EvolaTec wspiera firmy w profesjonalnym cyfrowym wzroście.</p>
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6" data-reveal="right">
                <div
                  v-for="card in aboutFeatures"
                  :key="card.title"
                  class="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
                >
                  <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <span class="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">{{ card.icon }}</span>
                  </div>
                  <h3 class="font-display font-bold text-on-surface mb-2 leading-tight">{{ card.title }}</h3>
                  <p class="text-sm text-on-surface-variant leading-relaxed">{{ card.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ 3. DLACZEGO MY — white ══════════════════════════════════════════ -->
        <section aria-labelledby="section-why" class="relative py-section-padding bg-surface-container-low overflow-hidden">
          <div class="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" aria-hidden="true"></div>
          <div class="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-primary-container/20 blur-[100px] pointer-events-none" aria-hidden="true"></div>
          <div class="relative max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-[1.15fr_1fr] gap-stack-lg items-center">
              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">stars</span>
                  Dlaczego EvolaTec?
                </span>
                <h2 id="section-why" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Web development dla firm z
                  <span class="relative inline-block">
                    <span class="relative z-10">wysokimi</span>
                    <span class="absolute -bottom-1 left-0 right-0 h-3 bg-primary/15 rounded-sm -z-0"></span>
                  </span>
                  wymaganiami
                </h2>
                <p class="text-on-surface-variant mb-10 leading-relaxed">
                  EvolaTec łączy nowoczesny design, wydajny development oraz technologie SEO i GEO — tworząc szybkie, profesjonalne i skalowalne strony internetowe.
                </p>
                <div class="space-y-5">
                  <div v-for="(point, i) in whyUsPoints" :key="i" class="flex gap-4 items-start">
                    <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span class="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">{{ point.icon }}</span>
                    </div>
                    <div class="flex-1">
                      <h3 class="font-display font-bold text-on-surface mb-1 leading-tight">{{ point.title }}</h3>
                      <p class="text-sm text-on-surface-variant leading-relaxed">{{ point.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Decorative toolkit — desktop only -->
              <div class="relative hidden lg:block" data-reveal="right">
                <div class="relative aspect-square max-w-md mx-auto">
                  <div class="absolute inset-6 rounded-[2rem] bg-gradient-to-br from-primary/85 via-primary-container to-primary/60 shadow-2xl"></div>
                  <div class="absolute top-0 right-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center rotate-[8deg]">
                    <span class="material-symbols-outlined text-primary text-[40px]" aria-hidden="true">code_blocks</span>
                  </div>
                  <div class="absolute top-20 left-0 bg-white rounded-2xl p-5 shadow-xl rotate-[-5deg]">
                    <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Tech Stack</div>
                    <div class="flex flex-wrap gap-1.5 max-w-[180px]">
                      <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Vue</span>
                      <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Nuxt</span>
                      <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">Tailwind</span>
                      <span class="px-2 py-1 rounded-md bg-primary/10 text-primary text-[0.65rem] font-bold">TypeScript</span>
                    </div>
                  </div>
                  <div class="absolute top-44 right-0 bg-white rounded-2xl p-5 shadow-xl rotate-[5deg]">
                    <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-2">Performance</div>
                    <div class="font-display text-4xl font-black leading-none text-primary">99<span class="text-lg text-on-surface-variant">/100</span></div>
                    <div class="text-xs text-on-surface-variant mt-1">Lighthouse</div>
                  </div>
                  <div class="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl rotate-[-3deg]">
                    <div class="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant mb-3">Clean Code</div>
                    <div class="flex flex-col gap-1.5 w-32">
                      <div class="h-2 rounded-sm bg-primary w-full"></div>
                      <div class="h-2 rounded-sm bg-primary/30 w-3/4"></div>
                      <div class="h-2 rounded-sm bg-primary/30 w-5/6"></div>
                      <div class="h-2 rounded-sm bg-primary w-2/3"></div>
                    </div>
                  </div>
                  <div class="absolute bottom-16 right-0 bg-white rounded-full px-4 py-2 shadow-xl rotate-[6deg] flex items-center gap-2">
                    <span class="relative flex w-2 h-2">
                      <span class="absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75 animate-ping"></span>
                      <span class="relative inline-flex w-2 h-2 rounded-full bg-emerald-500"></span>
                    </span>
                    <span class="text-xs font-bold text-on-surface uppercase tracking-wider">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ 4. GEO ══════════════════════════════════════════════════════════ -->
        <section aria-labelledby="section-geo" class="py-8 md:py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-stack-lg items-center">
              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">auto_awesome</span>
                  Generative Engine Optimization
                </span>
                <h2 id="section-geo" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4">
                  GEO: Widoczność w ChatGPT, Gemini i Claude
                </h2>
                <p class="text-on-surface-variant leading-relaxed mb-4">
                  Klasyczne SEO optymalizuje pod Google. <strong class="text-on-surface">GEO — Generative Engine Optimization</strong> — optymalizuje Twoją stronę pod nową generację wyszukiwarek AI jak ChatGPT, Google Gemini i Claude.
                </p>
                <p class="text-on-surface-variant leading-relaxed mb-8">
                  Coraz więcej osób zadaje pytania zakupowe bezpośrednio asystentom AI. Jeśli Twoja firma tam nie trafia, tracisz zapytania na rzecz konkurencji, która już ma GEO optymalizację.
                </p>
                <ul class="space-y-3 mb-8">
                  <li v-for="point in geoPoints" :key="point" class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-primary text-lg flex-shrink-0" aria-hidden="true">check_circle</span>
                    <span class="text-sm text-on-surface">{{ point }}</span>
                  </li>
                </ul>
                <div class="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/8 border border-primary/15 rounded-xl px-5 py-3">
                  <span class="material-symbols-outlined text-lg" aria-hidden="true">verified</span>
                  GEO optymalizacja w cenie każdego projektu — bez dopłat
                </div>
              </div>
              <div class="space-y-4" data-reveal="right">
                <div class="bg-white rounded-2xl p-6 border border-outline-variant/30">
                  <p class="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-4">Wyszukiwarki AI, dla których optymalizujemy</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="ai in aiEngines"
                      :key="ai"
                      class="px-3 py-1.5 bg-surface-container-low rounded-full border border-outline-variant/30 text-sm font-semibold text-on-surface shadow-sm"
                    >{{ ai }}</span>
                  </div>
                </div>
                <div
                  v-for="benefit in geoBenefits"
                  :key="benefit.title"
                  class="bg-white rounded-xl p-5 border border-outline-variant/20 flex items-start gap-4"
                >
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

        <!-- ══ 5. CO DOSTAJESZ ════════════════════════════════════════════════ -->
        <section
          aria-labelledby="section-included"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">check_circle</span>
                  Bez ukrytych pozycji
                </span>
                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co dostajesz w każdym projekcie — bez dopłat
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Większość firm zamawiających stronę po raz pierwszy odkrywa po fakcie, że "cena bazowa" nie zawierała SSL, pozycjonowania ani wersji mobilnej. To nie złośliwość — to model biznesowy.
                  </p>
                  <p>
                    W każdym projekcie wychodzi strona z wynikiem <strong class="text-on-surface">Lighthouse 95–100/100</strong> — sprawdzalnym samodzielnie w 30 sekund po wdrożeniu. Do tego: responsywny projekt mobile-first, certyfikat SSL, formularz kontaktowy i SEO wbudowane w kod.
                  </p>
                  <p>
                    <strong class="text-on-surface">GEO optymalizacja — widoczność w ChatGPT, Gemini i Claude — jest w cenie każdego projektu.</strong> JSON-LD dla FAQ, usług i firmy lokalnej sprawiają, że asystent AI może zacytować Twoją firmę jako odpowiedź na zapytanie zakupowe.
                  </p>
                  <p>
                    Po wdrożeniu każdy projekt obejmuje <strong class="text-on-surface">30 dni wsparcia technicznego</strong> — termin zapisany w umowie, nie obietnica.
                  </p>
                </div>
              </div>

              <div class="flex flex-col gap-4" data-reveal="right">
                <NuxtImg
                  src="/assets/seo-analytics.webp"
                  alt="Panel analityczny z wykresami wydajności strony internetowej — wynik Lighthouse i Core Web Vitals"
                  width="640"
                  height="320"
                  class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                  loading="lazy"
                />
                <div class="grid grid-cols-2 gap-3">
                  <div
                    v-for="(item, i) in includedItems"
                    :key="item.label"
                    :data-reveal="'scale'"
                    :data-delay="String(i + 1)"
                    class="group flex items-center gap-3 bg-surface-container-lowest rounded-xl border border-outline-variant/30 px-4 py-3.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div class="w-9 h-9 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                      <span class="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">{{ item.icon }}</span>
                    </div>
                    <span class="text-sm font-semibold text-on-surface leading-snug">{{ item.label }}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 4. WSZYSTKIE USŁUGI — gray ════════════════════════════════════ -->
        <ServicesSection
          title="Strony, sklepy, SEO i aplikacje — jeden partner"
          variant="centered"
          :services="allServices"
        />

        <!-- ══ 5. DLACZEGO MY — primary ════════════════════════════════════════ -->
        <section aria-labelledby="section-usps" class="relative overflow-hidden py-section-padding bg-primary">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div class="relative max-w-container-max mx-auto px-gutter">
            <div class="text-center max-w-2xl mx-auto mb-16" data-reveal>
              <span class="inline-block text-xs font-bold uppercase tracking-[0.3em] text-on-primary/60 mb-3">Dlaczego EvolaTec</span>
              <h2 id="section-usps" class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-4">
                Cztery rzeczy, których większość agencji nie może powiedzieć
              </h2>
              <p class="text-on-primary/70 leading-relaxed">
                Nie są to obietnice — każda z nich jest weryfikowalna po wdrożeniu, zanim zapłacisz następną fakturę.
              </p>
            </div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                v-for="(usp, i) in usps"
                :key="usp.title"
                :data-reveal="'scale'"
                :data-delay="String(i + 1)"
                class="group bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/18 hover:-translate-y-1 transition-all duration-300"
              >
                <div class="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-5 group-hover:bg-white/25 transition-colors duration-300">
                  <span class="material-symbols-outlined text-on-primary text-[22px]" aria-hidden="true">{{ usp.icon }}</span>
                </div>
                <h3 class="font-bold text-on-primary text-base leading-snug mb-3">{{ usp.title }}</h3>
                <p class="text-sm text-on-primary/70 leading-relaxed">{{ usp.description }}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ══ 6. JAKI TYP STRONY — white ════════════════════════════════════ -->
        <section
          aria-labelledby="section-types"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg" data-reveal>
              <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Porównanie</span>
              <h2
                id="section-types"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Jaki typ strony potrzebujesz?
              </h2>
              <p class="text-on-surface-variant">
                Trzy typy stron, trzy różne cele. Wybór złego modelu kosztuje albo w nadpłacie, albo w tym, że strona nie robi tego, czego potrzebujesz.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8 shadow-sm" data-reveal>
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie typów stron internetowych: landing page, strona firmowa, sklep internetowy</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/4" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface" scope="col">Landing page</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">
                      Strona firmowa
                      <span class="block text-[10px] font-semibold text-primary/70 mt-0.5 uppercase tracking-wider">Najpopularniejszy</span>
                    </th>
                    <th class="text-center p-4 font-bold text-on-surface" scope="col">Sklep internetowy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-outline-variant/20 bg-white">
                    <td class="p-4 font-semibold text-on-surface">Cena od</td>
                    <td class="p-4 text-center text-on-surface">2 100 zł netto</td>
                    <td class="p-4 text-center text-primary font-bold bg-primary/5">6 300 zł netto</td>
                    <td class="p-4 text-center text-on-surface">12 600 zł netto</td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-surface-container-low/40">
                    <td class="p-4 font-semibold text-on-surface">Czas realizacji</td>
                    <td class="p-4 text-center text-on-surface-variant">od 3 dni</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">od 7 dni</td>
                    <td class="p-4 text-center text-on-surface-variant">od 14 dni</td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-white">
                    <td class="p-4 font-semibold text-on-surface">Liczba podstron</td>
                    <td class="p-4 text-center text-on-surface-variant">1</td>
                    <td class="p-4 text-center text-on-surface bg-primary/5">5–20</td>
                    <td class="p-4 text-center text-on-surface-variant">bez limitu</td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-surface-container-low/40">
                    <td class="p-4 font-semibold text-on-surface">CMS — edycja treści</td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-outline text-lg" aria-label="nie">remove</span></td>
                    <td class="p-4 text-center bg-primary/5"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-white">
                    <td class="p-4 font-semibold text-on-surface">Blog / aktualności</td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-outline text-lg" aria-label="nie">remove</span></td>
                    <td class="p-4 text-center bg-primary/5"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                  </tr>
                  <tr class="border-b border-outline-variant/20 bg-surface-container-low/40">
                    <td class="p-4 font-semibold text-on-surface">Koszyk i płatności</td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-outline text-lg" aria-label="nie">remove</span></td>
                    <td class="p-4 text-center bg-primary/5"><span class="material-symbols-outlined text-outline text-lg" aria-label="nie">remove</span></td>
                    <td class="p-4 text-center"><span class="material-symbols-outlined text-emerald-500 text-lg" aria-label="tak">check_circle</span></td>
                  </tr>
                  <tr class="bg-white">
                    <td class="p-4 font-semibold text-on-surface">Najlepiej dla</td>
                    <td class="p-4 text-center text-on-surface-variant text-xs leading-relaxed">Kampanie Google Ads, generowanie leadów</td>
                    <td class="p-4 text-center text-primary text-xs font-medium leading-relaxed bg-primary/5">Firmy usługowe, kancelarie, startupy</td>
                    <td class="p-4 text-center text-on-surface-variant text-xs leading-relaxed">Sprzedaż produktów lub usług online</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-4 mb-8">
              <NuxtLink
                v-for="type in serviceTypes"
                :key="type.name"
                :to="type.href"
                class="block rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1"
                :class="type.highlight
                  ? 'bg-primary border-primary shadow-lg'
                  : 'bg-white border-outline-variant/30 shadow-sm'"
              >
                <div class="flex items-start justify-between gap-4 mb-4">
                  <h3 class="font-bold text-lg leading-tight" :class="type.highlight ? 'text-white' : 'text-on-surface'">{{ type.name }}</h3>
                  <span v-if="type.highlight" class="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full bg-white/20 text-white whitespace-nowrap">Najpopularniejszy</span>
                </div>
                <p class="font-black text-xl mb-1" :class="type.highlight ? 'text-white' : 'text-primary'">{{ type.price }}</p>
                <p class="text-sm mb-4" :class="type.highlight ? 'text-white/70' : 'text-on-surface-variant'">{{ type.delivery }} roboczych</p>
                <p class="text-xs leading-relaxed" :class="type.highlight ? 'text-white/80' : 'text-on-surface-variant'">{{ type.bestFor }}</p>
              </NuxtLink>
            </div>

            <p class="text-sm text-on-surface-variant text-center">
              Nie jesteś pewien, który wariant pasuje do Twojego celu?
              <NuxtLink to="/kalkulator-kosztow" class="text-primary font-semibold hover:underline ml-1">Sprawdź kalkulator kosztów</NuxtLink> — bez podawania danych kontaktowych.
            </p>

          </div>
        </section>

        <!-- ══ 7. SEO — primary ══════════════════════════════════════════════ -->
        <section aria-labelledby="section-seo" class="relative overflow-hidden py-section-padding bg-primary">

          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="animate-float          absolute top-1/4  -left-32  w-80 h-80 rounded-full bg-primary/25 blur-3xl"></div>
            <div class="animate-float-reverse  absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary-container/25 blur-3xl"></div>
          </div>

          <div class="relative max-w-container-max mx-auto px-gutter">

            <div class="grid lg:grid-cols-2 gap-16 items-center">

              <!-- Left copy + services -->
              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-2 text-sm font-medium text-on-primary mb-6">
                  <span class="material-symbols-outlined text-[16px]" aria-hidden="true">trending_up</span>
                  Pozycjonowanie SEO i GEO
                </span>
                <h2
                  id="section-seo"
                  class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-6"
                >
                  Strona bez SEO to strona, którą klienci nie znajdą
                </h2>
                <div class="space-y-4 text-on-primary/80 leading-relaxed mb-8">
                  <p>
                    Pozycjonowanie SEO kosztuje od 1 260 zł netto miesięcznie. Obejmuje audyt techniczny, optymalizację on-page, budowanie profilu linków i miesięczny raport z pozycjami fraz.
                  </p>
                  <p>
                    GEO optymalizacja — widoczność w ChatGPT, Gemini i Claude — jest w cenie każdego projektu strony. Dla istniejących stron wdrażamy ją w ramach pakietu SEO.
                  </p>
                </div>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  <NuxtLink
                    v-for="svc in seoServices"
                    :key="svc.title"
                    :to="svc.href"
                    class="group flex flex-col gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/40 rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div class="w-9 h-9 rounded-lg bg-dark-inverse group-hover:bg-primary/35 flex items-center justify-center transition-colors duration-200">
                      <span class="material-symbols-outlined text-white text-[18px]" aria-hidden="true">{{ svc.icon }}</span>
                    </div>
                    <div>
                      <p class="text-sm font-bold text-white leading-snug mb-1">{{ svc.title }}</p>
                      <p class="text-xs text-white/50 leading-snug">{{ svc.desc }}</p>
                    </div>
                  </NuxtLink>
                </div>
                <NuxtLink to="/seo">
                  <BaseButton variant="secondary" size="lg">Sprawdź pozycjonowanie SEO</BaseButton>
                </NuxtLink>
              </div>

              <!-- Right: image -->
              <div class="relative flex items-center justify-center" data-reveal="right">
                <div class="relative w-full">
                  <div class="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl"></div>
                  <NuxtImg
                    src="/assets/web-analytics.webp"
                    alt="Laptop z wykresem wzrostu ruchu organicznego i pozycji w wyszukiwarce Google"
                    width="640"
                    height="420"
                    class="relative w-full rounded-2xl object-cover shadow-2xl border border-white/15"
                    loading="lazy"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 8. PROCES — white ══════════════════════════════════════════════ -->
        <ProcessSection
          title="Jak wygląda tworzenie strony internetowej — 4 etapy"
          :steps="processSteps"
          background="bg-surface"
        />

        <!-- ══ 9. CENY — gray ═════════════════════════════════════════════════ -->
        <section aria-labelledby="section-pricing" class="py-8 md:py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="text-center mb-6 md:mb-stack-lg" data-reveal>
              <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2 block">Ceny</span>
              <h2 id="section-pricing" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4">
                Tworzenie stron internetowych — ceny i terminy realizacji
              </h2>
              <p class="text-on-surface-variant max-w-2xl mx-auto">
                Strona firmowa kosztuje od 6 300 zł netto, realizacja trwa od 7 dni roboczych. Wszystkie ceny są stałe — wycena ustalana jest przed startem projektu i nie zmienia się w trakcie.
              </p>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-6">
              <div
                v-for="(item, index) in pricingTableData"
                :key="`m-${index}`"
                class="bg-white rounded-xl border border-surface-container-high p-4 flex items-center justify-between gap-3"
              >
                <div class="min-w-0 flex-1">
                  <p class="font-bold text-on-surface text-base leading-tight">{{ item.service }}</p>
                  <p class="text-on-surface-variant text-xs mt-1 flex items-center gap-1">
                    <span class="material-symbols-outlined text-sm" aria-hidden="true">schedule</span>
                    {{ item.delivery }}
                  </p>
                </div>
                <p class="text-primary font-black text-lg whitespace-nowrap">{{ item.price }}</p>
              </div>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block mb-stack-lg rounded-lg overflow-hidden" data-reveal>
              <table class="w-full text-base">
                <caption class="sr-only">Cennik usług EvolaTec — tworzenie stron internetowych, SEO, Google Ads</caption>
                <thead>
                  <tr class="border-b-2 border-primary/20 bg-surface">
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Usługa</th>
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Cena</th>
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Czas realizacji</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in pricingTableData" :key="index" class="border-b border-surface-container hover:bg-white transition-colors duration-200">
                    <td class="p-4 text-on-surface font-medium">{{ item.service }}</td>
                    <td class="p-4 text-primary font-bold text-lg">{{ item.price }}</td>
                    <td class="p-4 text-on-surface-variant">{{ item.delivery }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="text-center">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="primary" size="lg">Oblicz koszt swojej strony</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ══ 10. NUXT VS WORDPRESS — white ══════════════════════════════════ -->
        <section
          aria-labelledby="section-nuxt"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

              <!-- Left: copy -->
              <div data-reveal="left">
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Technologia</span>
                <h2
                  id="section-nuxt"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
                >
                  Dlaczego Nuxt.js — nie WordPress
                </h2>
                <div class="space-y-3 text-on-surface-variant leading-relaxed">
                  <p>
                    Gdy zapytasz dziesięć polskich agencji o ofertę na stronę firmową, osiem wróci z wyceną na WordPress. To wybór z uzasadnieniem — WordPress jest wszędzie, każdy go zna. Problem w tym, że te zalety są jednocześnie jego największymi wadami.
                  </p>
                  <p>
                    WordPress oparty jest o dynamiczne generowanie stron z bazy danych i system wtyczek. Przy ponad 60 000 wtyczek, każda to potencjalna luka bezpieczeństwa. Wynik Lighthouse typowej witryny WordPress wynosi <strong class="text-on-surface">40–70/100</strong>. Nasze strony budowane w Nuxt.js osiągają <strong class="text-on-surface">95–100/100</strong> mierzony w Google PageSpeed Insights — nie dlatego, że "się staramy", ale dlatego, że architektura SSR i brak wtyczek tak po prostu działa.
                  </p>
                  <p>
                    Jeśli potrzebujesz możliwości samodzielnej edycji treści — integrujemy <strong class="text-on-surface">Storyblok CMS</strong>. Klient edytuje teksty przez przeglądarkę, kod pozostaje czysty. Więcej o tym, jak wygląda
                    <NuxtLink to="/strona-internetowa" class="text-primary font-semibold hover:underline">strona internetowa dla firmy</NuxtLink> w praktyce.
                  </p>
                </div>

                <!-- Tech stack pills -->
                <div class="flex flex-wrap gap-2 mt-5">
                  <span v-for="tech in ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Storyblok CMS']" :key="tech"
                    class="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-xs font-semibold text-primary">
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Right: comparison table -->
              <div data-reveal="right">

                <!-- Desktop table -->
                <div class="hidden md:block rounded-2xl bg-white shadow-md overflow-hidden border-2 border-outline-variant/50">
                  <table class="w-full border-collapse">
                    <caption class="sr-only">Porównanie WordPress z EvolaTec Nuxt.js</caption>
                    <thead>
                      <tr class="bg-surface-container-low">
                        <th class="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Kryterium</th>
                        <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">WordPress</th>
                        <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-primary border-b-2 border-outline-variant/40" scope="col">EvolaTec</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="row in wpRows"
                        :key="row.label"
                        class="border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-low/60 transition-colors duration-150"
                      >
                        <td class="px-6 py-4 text-sm font-medium text-on-surface border-r border-outline-variant/30">{{ row.label }}</td>
                        <td class="px-5 py-4 text-center text-sm text-on-surface-variant border-r border-outline-variant/30">{{ row.wp }}</td>
                        <td class="px-5 py-4 text-center text-sm font-bold text-primary bg-primary-fixed">{{ row.nuxt }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Mobile cards -->
                <div class="md:hidden space-y-3">
                  <div v-for="row in wpRows" :key="row.label" class="bg-white rounded-xl border border-outline-variant/30 p-4">
                    <p class="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                    <div class="grid grid-cols-2 gap-2">
                      <div class="bg-surface-container-low rounded-lg px-3 py-2.5 text-center">
                        <p class="text-[10px] font-bold uppercase tracking-wide text-on-surface-variant mb-1">WordPress</p>
                        <p class="text-xs text-on-surface-variant leading-snug">{{ row.wp }}</p>
                      </div>
                      <div class="bg-primary-fixed rounded-lg px-3 py-2.5 text-center border border-primary/20">
                        <p class="text-[10px] font-bold uppercase tracking-wide text-primary mb-1">EvolaTec</p>
                        <p class="text-xs text-primary font-semibold leading-snug">{{ row.nuxt }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p class="text-xs text-on-surface-variant mt-3 text-center">
                  Dane oparte na pomiarach Google PageSpeed Insights i Lighthouse.
                </p>
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 10. FAQ — gray ════════════════════════════════════════════════ -->
        <FAQSection
          title="Najczęściej zadawane pytania o tworzenie stron www dla firm"
          :faqs="faqData"
        />

        <!-- ══ 11. POWIĄZANE STRONY — white ═══════════════════════════════════ -->
        <RelatedServicesSection
          eyebrow="Odkryj więcej"
          title="Usługi dopasowane do etapu Twojego projektu"
          :services="relatedPages"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ══ 12. CTA — dark branded ════════════════════════════════════════════ -->
    <CTASection
      title="Uzyskaj bezpłatną wycenę w 24 godziny"
      description="Opisz projekt w kilku zdaniach — wracamy ze stałą ceną i terminem realizacji przed podpisaniem jakiejkolwiek umowy."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
    />

  </div>
</template>
