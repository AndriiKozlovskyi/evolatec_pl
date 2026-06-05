<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Tworzenie landing page — skuteczne strony | EvolaTec',
  description: 'Tworzenie landing page od 2 100 zł netto, realizacja od 3 dni roboczych. Strona pod kampanie Google i Meta Ads, Lighthouse 95–100, GEO w cenie. Stała wycena.',
  ogTitle: 'Tworzenie landing page — skuteczne strony | EvolaTec',
  ogDescription: 'Landing page od 2 100 zł netto, realizacja od 3 dni. Strona pod kampanie Google i Meta Ads, Lighthouse 95–100, GEO w cenie.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/landing-page',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje landing page?',
    answer: 'Landing page kosztuje od 2 100 zł netto i jest gotowy w 3 dni robocze. Cena jest stała i ustalana przed startem. Rośnie tylko wtedy, gdy potrzebne są nietypowe integracje — system płatności, test A/B czy zewnętrzny kalendarz — a każda taka pozycja jest wyceniana z góry.',
  },
  {
    question: 'Jaka jest różnica między landing page a stroną firmową?',
    answer: 'Landing page to jedna strona z jednym celem, najczęściej konwersja ruchu z reklamy. Strona firmowa to wielostronicowy serwis budujący widoczność organiczną w Google. Landing page kosztuje od 2 100 zł i jest gotowy w 3 dni, a strona firmowa od 6 300 zł i jest gotowa w 7 dni.',
  },
  {
    question: 'Landing page czy strona firmowa — co lepiej konwertuje?',
    answer: 'Dla ruchu z płatnej reklamy landing page zwykle konwertuje lepiej, bo nie ma menu ani podstron, które odciągają odwiedzającego od jednego działania. Strona firmowa lepiej sprawdza się w budowaniu widoczności organicznej i marki. Wiele firm używa obu: strony firmowej pod ruch z Google i osobnego landing page pod każdą kampanię.',
  },
  {
    question: 'Jak szybkość ładowania strony wpływa na pozycję w Google?',
    answer: 'Szybkość ładowania jest jednym z czynników rankingowych Google poprzez Core Web Vitals i bezpośrednio wpływa na konwersję — po trzech sekundach ładowania znika połowa ruchu mobilnego. Nasze landing page ładują się poniżej 1 sekundy i osiągają wynik Lighthouse 95–100/100, co poprawia zarówno pozycję, jak i Quality Score w Google Ads.',
  },
  {
    question: 'Jak wygląda proces tworzenia strony internetowej?',
    answer: 'Landing page powstaje w 4 krokach: brief i cel, projekt i treść, development z SEO i GEO, testy i start. Cały proces zajmuje od 3 dni roboczych, licząc od dostarczenia treści, logo i dostępu do domeny. Strona wychodzi gotowa do podpięcia pod kampanię reklamową.',
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
        { '@type': 'City', name: 'Wrocław' },
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
      '@id': 'https://evolatec.pl/landing-page#webpage',
      url: 'https://evolatec.pl/landing-page',
      name: 'Tworzenie landing page — skuteczne strony | EvolaTec',
      description: 'Tworzenie landing page od 2 100 zł netto, realizacja od 3 dni roboczych. Strona pod kampanie Google i Meta Ads, Lighthouse 95–100, GEO w cenie. Stała wycena.',
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
      '@id': 'https://evolatec.pl/landing-page#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Strona internetowa dla firmy', item: 'https://evolatec.pl/strona-internetowa' },
        { '@type': 'ListItem', position: 3, name: 'Landing page', item: 'https://evolatec.pl/landing-page' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/landing-page#service',
      name: 'Tworzenie landing page',
      serviceType: 'Projektowanie stron konwersyjnych',
      description: 'Jednostronicowa strona konwersyjna pod kampanie Google Ads i Meta Ads. Stała cena od 2 100 zł netto, realizacja od 3 dni roboczych.',
      url: 'https://evolatec.pl/landing-page',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        name: 'Landing page',
        priceSpecification: { '@type': 'PriceSpecification', minPrice: '2100', priceCurrency: 'PLN', valueAddedTaxIncluded: false },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/landing-page#faq',
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
  name: 'Jak powstaje landing page — od briefu do startu',
  description: 'Proces tworzenia landing page w EvolaTec: od briefu do uruchomienia w 3 dni robocze.',
  totalTime: 'P3D',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief i cel', text: 'Ustalamy jedno działanie, które ma wykonać odwiedzający, i grupę docelową kampanii.' },
    { '@type': 'HowToStep', position: 2, name: 'Projekt i treść', text: 'Projektujemy układ pod konwersję i przygotowujemy lub redagujemy tekst. Czas: 1 dzień roboczy.' },
    { '@type': 'HowToStep', position: 3, name: 'Development, SEO i GEO', text: 'Kodujemy stronę w Nuxt.js, podpinamy formularz, wdrażamy SEO i Schema.org. Czas: 1 dzień roboczy.' },
    { '@type': 'HowToStep', position: 4, name: 'Testy i start', text: 'Sprawdzamy formularz, szybkość i wygląd na urządzeniach, wdrażamy na serwer i podpinamy domenę.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/landing-page' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
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
  { value: 'od 2 100 zł', label: 'Landing page netto',  icon: 'payments'  },
  { value: 'od 3 dni',    label: 'Czas realizacji',     icon: 'flash_on'  },
  { value: '< 1 s',       label: 'Czas ładowania',      icon: 'bolt'      },
  { value: '95–100',      label: 'Lighthouse score',    icon: 'speed'     },
]

const includedItems = [
  { icon: 'phone_iphone',    label: 'Responsywny projekt mobile-first'  },
  { icon: 'speed',           label: 'Lighthouse 95–100, ładowanie < 1 s' },
  { icon: 'ads_click',       label: 'Formularz / CTA pod cel kampanii'  },
  { icon: 'search_insights', label: 'SEO podstawowe'                    },
  { icon: 'smart_toy',       label: 'GEO — ChatGPT, Gemini, Perplexity' },
  { icon: 'lock',            label: 'Certyfikat SSL + hosting'          },
]

const compareRows = [
  { label: 'Cena od',         lp: '2 100 zł netto',           biz: '6 300 zł netto'                },
  { label: 'Czas realizacji', lp: 'od 3 dni roboczych',       biz: 'od 7 dni roboczych'            },
  { label: 'Liczba podstron', lp: '1',                        biz: '5–20'                          },
  { label: 'Główny cel',      lp: 'Jedno działanie',          biz: 'Widoczność organiczna'         },
  { label: 'Najlepsze dla',   lp: 'Kampanii Google i Meta Ads', biz: 'Budowania marki w Google'    },
  { label: 'CMS i blog',      lp: '—',                        biz: 'tak'                           },
]

const relatedServices = [
  {
    icon: 'corporate_fare',
    title: 'Strona firmowa',
    description: 'Wielostronicowy serwis z SEO, blogiem i CMS — gdy potrzebujesz widoczności organicznej.',
    price: 'od 6 300 zł netto',
    href: '/stworz-strone-firmowa',
  },
  {
    icon: 'ads_click',
    title: 'Google Ads',
    description: 'Kampanie reklamowe w Google — ruch od pierwszego dnia bez czekania na SEO.',
    price: 'od 1 680 zł netto/mies.',
    href: '/google-ads',
  },
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Organiczne pozycje w Google obok kampanii Ads — długoterminowy ruch bez kosztu za kliknięcie.',
    price: 'od 1 260 zł netto/mies.',
    href: '/seo',
  },
]

const processSteps = [
  {
    icon: 'flag',
    title: 'Brief i cel',
    description: 'Ustalamy jedno działanie, które ma wykonać odwiedzający, i grupę docelową kampanii. Czas: kilka godzin.',
  },
  {
    icon: 'design_services',
    title: 'Projekt i treść',
    description: 'Projektujemy układ pod konwersję i przygotowujemy lub redagujemy tekst. Czas: 1 dzień roboczy.',
  },
  {
    icon: 'code',
    title: 'Development, SEO i GEO',
    description: 'Kodujemy stronę w Nuxt.js, podpinamy formularz, wdrażamy SEO on-page i Schema.org. Czas: 1 dzień roboczy.',
  },
  {
    icon: 'rocket_launch',
    title: 'Testy i start',
    description: 'Sprawdzamy formularz, szybkość i wygląd na urządzeniach, wdrażamy na serwer i podpinamy domenę. Strona gotowa pod reklamę.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Tworzenie landing page"
      title="Tworzenie landing page, który zamienia reklamę w zapytania"
      description="Jednostronicowa strona konwersyjna pod kampanie Google i Meta Ads — od 2 100 zł netto, realizacja od 3 dni roboczych. Lighthouse 95–100 i ładowanie poniżej 1 sekundy."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz ceny"
      primary-href="/kontakt"
      secondary-href="/kalkulator-kosztow"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="border-b border-outline-variant/30 bg-surface">
        <div class="max-w-container-max mx-auto px-gutter py-3">
          <ol class="flex items-center flex-wrap gap-2 text-sm text-on-surface-variant">
            <li><NuxtLink to="/" class="hover:text-primary">Strona główna</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li><NuxtLink to="/strona-internetowa" class="hover:text-primary">Strona internetowa dla firmy</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li aria-current="page" class="text-on-surface font-medium">Landing page</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ── Section 1: Dlaczego ruch nie konwertuje — white, 2-col ─── -->
        <section aria-labelledby="section-problem" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">ads_click</span>
                  Konwersja, nie tylko ruch
                </span>
                <h2 id="section-problem" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Dlaczego ruch z reklamy nie zamienia się w zapytania
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Firma uruchamia kampanię Google Ads, płaci za kliknięcia, a formularz milczy. Pierwszym podejrzanym jest zwykle reklama — ale częściej winna jest strona, na którą trafia kliknięcie. Ruch ląduje na stronie głównej z dziesięcioma celami naraz i żadnym konkretnym, więc odwiedzający klika „wstecz", zanim znajdzie to, po co przyszedł.
                  </p>
                  <p>
                    Landing page rozwiązuje ten problem. To jedna strona z jednym celem — zapis, wycena, pobranie, zakup — pozbawiona menu i rozpraszaczy. Każdy element prowadzi do jednego działania.
                  </p>
                  <p>
                    Po trzech sekundach ładowania znika połowa ruchu mobilnego. Nasze landing page osiągają <strong class="text-on-surface">wynik Lighthouse 95–100/100</strong> i ładują się poniżej 1 sekundy — budżet reklamowy nie wycieka na porzucone ładowania. GEO optymalizacja — widoczność w ChatGPT, Gemini i Perplexity — jest w cenie każdego projektu.
                  </p>
                </div>
              </div>

              <div data-reveal="right">
                <NuxtImg
                  src="/assets/landing-page.webp"
                  alt="Osoba analizująca wskaźniki konwersji kampanii Google Ads na laptopie — CTR, CPC i liczba leadów"
                  width="640"
                  height="420"
                  class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: Co zawiera — primary (purple) ──────────────────── -->
        <section aria-labelledby="section-included" class="relative overflow-hidden py-section-padding bg-primary">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="animate-float          absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            <div class="animate-float-reverse  absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div class="relative max-w-container-max mx-auto px-gutter">

            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="inline-block text-xs font-bold uppercase tracking-[0.3em] text-on-primary/60 mb-3">Co dostajesz</span>
                <h2 id="section-included" class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-6">
                  Co zawiera landing page od 2 100 zł
                </h2>
                <div class="space-y-4 text-on-primary/80 leading-relaxed">
                  <p>
                    Landing page jest celowo jedną stroną — jego siła bierze się z koncentracji, nie z liczby podstron. Za 2 100 zł netto dostajesz komplet potrzebny, żeby strona przyjęła ruch z kampanii i zamieniła go w zapytania.
                  </p>
                  <p>
                    Świadomie nie zawiera CMS, bloga ani wielu podstron — to elementy strony firmowej, które tutaj rozpraszałyby uwagę i opóźniały start.
                  </p>
                </div>
                <NuxtLink to="/kontakt" class="inline-block mt-8">
                  <BaseButton variant="outline" size="lg">Uzyskaj bezpłatną wycenę</BaseButton>
                </NuxtLink>
              </div>

              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3" data-reveal="right">
                <li
                  v-for="(item, i) in includedItems"
                  :key="item.label"
                  :data-reveal="'scale'"
                  :data-delay="String(i + 1)"
                  class="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-4 hover:bg-white/18 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div class="w-9 h-9 rounded-lg bg-white/15 group-hover:bg-white/25 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                    <span class="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">{{ item.icon }}</span>
                  </div>
                  <span class="text-sm font-semibold text-on-primary leading-snug">{{ item.label }}</span>
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
          <div class="max-w-3xl mx-auto px-gutter">
            <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Cennik</span>
            <h2
              id="section-price"
              class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
            >
              Ile kosztuje landing page i od czego zależy termin
            </h2>

            <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 mb-8">
              <p class="text-on-surface-variant mb-1">Landing page</p>
              <p class="font-display text-4xl font-black text-primary mb-1">od 2 100 zł netto</p>
              <p class="text-sm text-on-surface-variant">realizacja od 3 dni roboczych · cena stała przed startem</p>
            </div>

            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                <strong class="text-on-surface">Landing page kosztuje od 2 100 zł netto i jest gotowy w 3 dni robocze.</strong> To cena stała, ustalana przed startem — bez osobnych pozycji za wersję mobilną, SSL czy podstawowe SEO.
              </p>
              <p>
                Termin zależy głównie od tego, czy masz gotowe treści i materiały. Jeśli dostarczasz tekst, logo i zdjęcia, trzy dni robocze są realne. Jeśli treści mamy napisać od zera albo potrzebne są nietypowe integracje — system płatności, zewnętrzny kalendarz, test A/B dwóch wersji — termin i cena rosną o z góry podaną wartość, ustaloną przed rozpoczęciem pracy.
              </p>
            </div>

            <div class="mt-10">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt swojej strony</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ── Section 4: Landing vs firmowa ─────────────────────────────── -->
        <section
          aria-labelledby="section-compare"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2
                id="section-compare"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Landing page czy strona firmowa — co lepiej konwertuje
              </h2>
              <p class="text-on-surface-variant">
                Dla ruchu z reklamy landing page niemal zawsze konwertuje lepiej niż strona główna — bo nie daje odwiedzającemu dokąd uciec. Strona firmowa wygrywa tam, gdzie celem jest długofalowa widoczność w Google.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie landing page ze stroną firmową</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Landing page</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Strona firmowa</th>
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
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.lp }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.biz }}</td>
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
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Landing page</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.lp }}</p>
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Strona firmowa</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.biz }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                W praktyce wiele firm robi jedno i drugie: stronę firmową pod ruch organiczny i osobny landing page pod każdą większą kampanię. Jeśli dopiero zaczynasz i budżet jest ograniczony, landing page pod konkretną usługę jest tańszym i szybszym pierwszym krokiem — szczególnie w parze z
                <NuxtLink to="/google-ads" class="text-primary font-semibold hover:underline">kampanią Google Ads</NuxtLink>.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak powstaje"
          title="Jak powstaje landing page — od briefu do startu w 3 dni"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o tworzenie landing page"
          :faqs="faqData"
        />

        <!-- ── Related ────────────────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Co jeszcze możesz potrzebować do kampanii"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Landing page gotowy pod Twoją kampanię"
      description="Opisz cel kampanii — wracamy ze stałą ceną i terminem startu, zanim odpalisz pierwszą reklamę."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
