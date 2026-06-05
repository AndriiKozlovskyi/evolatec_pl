<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Marketing internetowy dla firm — agencja online | EvolaTec',
  description: 'Marketing internetowy dla firm: Google Ads od 1 680 zł i social media od 1 260 zł netto miesięcznie. Rozliczenie miesięczne, przejrzyste raporty, jeden partner.',
  ogTitle: 'Marketing internetowy dla firm — agencja online | EvolaTec',
  ogDescription: 'Marketing internetowy dla firm: Google Ads od 1 680 zł i social media od 1 260 zł netto miesięcznie. Budżet reklamowy rozliczany oddzielnie.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/marketing-online',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje marketing internetowy dla firmy?',
    answer: 'Marketing internetowy rozliczamy miesięcznie: Google Ads od 1 680 zł netto, prowadzenie social media od 1 260 zł netto. To fee za obsługę agencji — budżet reklamowy płacony Google lub Meta jest rozliczany oddzielnie, bezpośrednio z platformą. Dla firmy zaczynającej rekomendujemy minimum 1 000 zł miesięcznie budżetu reklamowego.',
  },
  {
    question: 'Google Ads czy social media — od czego zacząć?',
    answer: 'Jeśli klienci już wyszukują Twojej usługi w Google, zacznij od Google Ads — kampania łapie istniejący popyt i przynosi zapytania od pierwszego dnia. Jeśli sprzedajesz produkt kupowany pod wpływem, a nie z aktywnej potrzeby, zacznij od social media, które buduje popyt i markę. Firmy z większym budżetem prowadzą oba kanały równolegle.',
  },
  {
    question: 'Czym różni się SEO od Google Ads?',
    answer: 'SEO to pozycjonowanie organiczne — efekty budują się tygodniami i miesiącami, ale ruch nie znika po wyłączeniu i nie płacisz za pojedyncze kliknięcie. Google Ads to reklama płatna — działa od pierwszego dnia, ale ruch trwa tylko tak długo, jak długo opłacasz kampanię. SEO opłaca się długofalowo, Google Ads daje efekt natychmiast; najczęściej prowadzi się je równolegle.',
  },
  {
    question: 'Czy budżet reklamowy jest wliczony w cenę obsługi?',
    answer: 'Nie — fee za obsługę i budżet reklamowy to dwie osobne kwoty. Płacisz agencji stałe miesięczne wynagrodzenie za prowadzenie kampanii, a budżet reklamowy trafia bezpośrednio do Google lub Meta i ustalasz go samodzielnie. Dzięki temu nasze wynagrodzenie nie rośnie automatycznie wraz z wydanym budżetem reklamowym.',
  },
  {
    question: 'Jak długo trwa, zanim marketing online przynosi efekty?',
    answer: 'Google Ads przynosi pierwsze zapytania od pierwszego dnia kampanii, choć pełna optymalizacja stawek i odbiorców zajmuje zwykle 4–6 tygodni. Social media i budowanie marki działają wolniej — pierwsze mierzalne efekty pojawiają się po kilku tygodniach do kilku miesięcy. Dlatego od początku raportujemy koszt pozyskania klienta, żeby było widać, kiedy kampania zaczyna się zwracać.',
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
        addressLocality: 'Warszawa',
        addressCountry: 'PL',
      },
      email: 'kontakt@evolatec.pl',
      areaServed: [
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'City', name: 'Warszawa' },
        { '@type': 'City', name: 'Kraków' },
        { '@type': 'City', name: 'Wrocław' },
        { '@type': 'City', name: 'Gdańsk' },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'kontakt@evolatec.pl',
      },
      sameAs: [
        'https://g.page/evolatec-pl',
        'https://www.linkedin.com/company/evolatec',
      ],
      priceRange: '2100 zł – 25200 zł',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://evolatec.pl/marketing-online#webpage',
      url: 'https://evolatec.pl/marketing-online',
      name: 'Marketing internetowy dla firm — agencja online | EvolaTec',
      description: 'Marketing internetowy dla firm: Google Ads od 1 680 zł i social media od 1 260 zł netto miesięcznie. Rozliczenie miesięczne, przejrzyste raporty, jeden partner.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/marketing-online#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/marketing-online#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Marketing internetowy', item: 'https://evolatec.pl/marketing-online' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/marketing-online#service',
      name: 'Marketing internetowy',
      serviceType: 'Marketing online: Google Ads i social media',
      description: 'Marketing internetowy dla firm w modelu miesięcznym: Google Ads od 1 680 zł netto i prowadzenie social media od 1 260 zł netto miesięcznie. Budżet reklamowy rozliczany oddzielnie.',
      url: 'https://evolatec.pl/marketing-online',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: [
        {
          '@type': 'Offer',
          name: 'Google Ads',
          priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '1680', priceCurrency: 'PLN', unitText: 'MONTH', valueAddedTaxIncluded: false },
        },
        {
          '@type': 'Offer',
          name: 'Social media (Meta)',
          priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '1260', priceCurrency: 'PLN', unitText: 'MONTH', valueAddedTaxIncluded: false },
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/marketing-online#faq',
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
  name: 'Jak prowadzimy marketing online — miesięczny cykl',
  description: 'Miesięczny cykl prowadzenia marketingu online w EvolaTec: od audytu i setupu po raport.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Audyt i setup', text: 'Na starcie wdrażamy śledzenie konwersji, audytujemy istniejące kampanie i budujemy strategię pod cel.' },
    { '@type': 'HowToStep', position: 2, name: 'Prowadzenie kampanii', text: 'Tworzymy reklamy lub treści, uruchamiamy i pilnujemy kampanii w trakcie miesiąca.' },
    { '@type': 'HowToStep', position: 3, name: 'Optymalizacja', text: 'Co tydzień korygujemy stawki, grupy odbiorców i przekaz na podstawie danych konwersji.' },
    { '@type': 'HowToStep', position: 4, name: 'Raport miesięczny', text: 'Dostajesz konkretne liczby: wydatek, efekty, koszt pozyskania klienta i plan na kolejny miesiąc.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/marketing-online' }],
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
  { value: 'Google Ads',   label: 'od 1 680 zł / mies.',  icon: 'ads_click'    },
  { value: 'Social media', label: 'od 1 260 zł / mies.',  icon: 'thumb_up'     },
  { value: 'Miesięcznie',  label: 'Bez długich umów',     icon: 'event_repeat' },
  { value: 'Fee stałe',    label: 'Budżet reklam osobno', icon: 'verified'     },
]

const channels = [
  {
    icon: 'ads_click',
    title: 'Google Ads',
    text: 'Reklama dla ludzi, którzy już szukają Twojej usługi. Zapytania od pierwszego dnia kampanii.',
    href: '/google-ads',
    cta: 'Zobacz Google Ads',
  },
  {
    icon: 'thumb_up',
    title: 'Social media',
    text: 'Facebook i Instagram — organika i Meta Ads. Buduje rozpoznawalność i popyt, zanim klient zacznie szukać.',
    href: '/social-media',
    cta: 'Zobacz social media',
  },
]

const pricingRows = [
  { service: 'Google Ads',          fee: 'od 1 680 zł netto / mies.', budget: 'budżet Google osobno' },
  { service: 'Social media (Meta)', fee: 'od 1 260 zł netto / mies.', budget: 'budżet Meta osobno'   },
]

const compareRows = [
  { label: 'Fee od',         ads: '1 680 zł netto / mies.',           soc: '1 260 zł netto / mies.'        },
  { label: 'Jak działa',     ads: 'Łapie istniejący popyt',           soc: 'Buduje popyt i markę'          },
  { label: 'Pierwsze efekty', ads: 'Od pierwszego dnia',              soc: 'Tygodnie–miesiące'             },
  { label: 'Najlepsze dla',  ads: 'Usług wyszukiwanych w Google',     soc: 'Marek B2C, sklepów, biznesów lokalnych' },
  { label: 'Budżet reklamowy', ads: 'Rozliczany z Google',            soc: 'Rozliczany z Meta'             },
]

const relatedServices = [
  { icon: 'ads_click', title: 'Google Ads', description: 'Kampanie reklamowe w Google — ruch od pierwszego dnia, budżet rozliczany z Google.', price: 'od 1 680 zł netto/mies.', href: '/google-ads' },
  { icon: 'share', title: 'Social Media Marketing', description: 'Organiczne i płatne działania na Facebooku i Instagramie.', price: 'od 1 260 zł netto/mies.', href: '/social-media' },
  { icon: 'trending_up', title: 'Pozycjonowanie SEO', description: 'Długoterminowa widoczność organiczna w Google obok kampanii płatnych.', price: 'od 1 260 zł netto/mies.', href: '/seo' },
]

const processSteps = [
  {
    icon: 'troubleshoot',
    title: 'Audyt i setup',
    description: 'Na starcie wdrażamy śledzenie konwersji, audytujemy istniejące kampanie i budujemy strategię pod cel. Jednorazowo, na początku współpracy.',
  },
  {
    icon: 'campaign',
    title: 'Prowadzenie kampanii',
    description: 'Tworzymy reklamy lub treści, uruchamiamy i pilnujemy kampanii w trakcie miesiąca.',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja',
    description: 'Co tydzień korygujemy stawki, grupy odbiorców i przekaz na podstawie danych konwersji, nie przeczuć.',
  },
  {
    icon: 'summarize',
    title: 'Raport miesięczny',
    description: 'Dostajesz konkretne liczby: wydatek, efekty, koszt pozyskania klienta i plan na kolejny miesiąc.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Marketing internetowy"
      title="Marketing internetowy, który przynosi klientów — nie tylko kliknięcia"
      description="Prowadzimy Google Ads i social media w modelu miesięcznym — fee stałe, budżet reklamowy rozliczany oddzielnie z Google lub Meta. Co miesiąc raportujemy koszt pozyskania klienta."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Oblicz koszt"
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
            <li aria-current="page" class="text-on-surface font-medium">Marketing internetowy</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ── Section 1: Bez strategii ──────────────────────────────────── -->
        <section
          aria-labelledby="section-strategy"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <h2
                  id="section-strategy"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Dlaczego marketing online bez strategii to spalony budżet
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Firma odpala reklamy, wrzuca posty, płaci co miesiąc — i po kwartale nie potrafi powiedzieć, czy to się opłaca. To najczęstszy scenariusz w marketingu małych firm: aktywność zastąpiła strategię. Pieniądze wychodzą, kliknięcia są, ale nikt nie liczy, ile z nich zamieniło się w zapytanie albo sprzedaż.
                  </p>
                  <p>
                    Powód jest zwykle techniczny, nie kreatywny. Brakuje śledzenia konwersji, więc nie wiadomo, która kampania działa. Budżet idzie na kanał dobrany przypadkiem, a nie pod to, jak kupują klienci w danej branży. I nikt nie odpowiada za jedną liczbę — koszt pozyskania klienta — która jako jedyna mówi, czy marketing zarabia, czy pali budżet.
                  </p>
                  <p>
                    Prowadzimy marketing online inaczej: zaczynamy od wdrożenia śledzenia konwersji, dobieramy kanał pod sposób, w jaki kupują Twoi klienci, i co miesiąc raportujemy konkretne liczby. <strong class="text-on-surface">Budżet reklamowy rozliczany jest oddzielnie, bezpośrednio z Google lub Meta — fee za obsługę jest stałe</strong>, więc wiesz, za co płacisz agencji, a ile idzie na same reklamy.
                  </p>
                </div>
              </div>

              <div data-reveal="right" class="rounded-2xl overflow-hidden">
                <NuxtImg
                  src="/assets/marketing-online.webp"
                  alt="Dashboard marketingu internetowego z wykresami ruchu organicznego i konwersji kampanii Google Ads"
                  width="640"
                  height="420"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: Kanały ─────────────────────────────────────────── -->
        <section
          aria-labelledby="section-channels"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="max-w-3xl mx-auto mb-stack-lg">
              <h2
                id="section-channels"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
              >
                Kanały, którymi prowadzimy marketing online
              </h2>
              <div class="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  Marketing online to nie jeden kanał, tylko dobór właściwego do celu. Prowadzimy dwa, które dla większości polskich firm dają najszybszy mierzalny zwrot, i nie namawiamy na trzeci, jeśli budżet lepiej zadziała skupiony.
                </p>
                <p>
                  Najczęściej łączymy oba: Google Ads łapie popyt, który już istnieje, a social media buduje ten, którego jeszcze nie ma. Jeśli ruch ma trafiać na dopracowaną stronę docelową, dokładamy do tego
                  <NuxtLink to="/landing-page" class="text-primary font-semibold hover:underline">landing page</NuxtLink>
                  pod konkretną kampanię.
                </p>
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-5">
              <NuxtLink
                v-for="ch in channels"
                :key="ch.title"
                :to="ch.href"
                class="block bg-white rounded-2xl border border-outline-variant/30 p-6 ambient-shadow transition-all duration-300 hover:-translate-y-1"
              >
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary" aria-hidden="true">{{ ch.icon }}</span>
                </div>
                <h3 class="font-bold text-lg text-on-surface mb-2">{{ ch.title }}</h3>
                <p class="text-sm text-on-surface-variant leading-relaxed mb-4">{{ ch.text }}</p>
                <span class="text-sm font-semibold text-primary inline-flex items-center gap-1">
                  {{ ch.cta }}
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
                </span>
              </NuxtLink>
            </div>

          </div>
        </section>

        <!-- ── Section 3: Cena i model ───────────────────────────────────── -->
        <section
          aria-labelledby="section-prices"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Cennik</span>
              <h2
                id="section-prices"
                class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4"
              >
                Marketing internetowy — cena i model rozliczeń
              </h2>
              <p class="text-on-surface-variant">
                Stałe fee za obsługę plus budżet reklamowy płacony osobno, bezpośrednio dostawcy. To rozróżnienie jest kluczowe — właśnie jego brak sprawia, że oferty agencji są nieporównywalne.
              </p>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in pricingRows"
                :key="row.service"
                class="bg-white rounded-xl border border-outline-variant/30 p-4"
              >
                <p class="font-bold text-on-surface">{{ row.service }}</p>
                <p class="text-primary font-black text-lg mt-1">{{ row.fee }}</p>
                <p class="text-xs text-on-surface-variant mt-0.5">{{ row.budget }}</p>
              </div>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block mb-stack-lg rounded-xl overflow-hidden border border-outline-variant/30">
              <table class="w-full text-base">
                <caption class="sr-only">Ceny miesięczne marketingu internetowego</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-primary/20">
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Usługa</th>
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Fee miesięczne</th>
                    <th class="text-left p-4 font-bold text-on-surface" scope="col">Budżet reklamowy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in pricingRows"
                    :key="row.service"
                    class="border-b border-outline-variant/20"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/30'"
                  >
                    <td class="p-4 font-medium text-on-surface">{{ row.service }}</td>
                    <td class="p-4 font-bold text-primary text-lg">{{ row.fee }}</td>
                    <td class="p-4 text-on-surface-variant">{{ row.budget }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="max-w-2xl mx-auto space-y-4 text-on-surface-variant">
              <p>
                <strong class="text-on-surface">Google Ads kosztuje od 1 680 zł netto miesięcznie — budżet reklamowy rozliczany oddzielnie. Prowadzenie social media kosztuje od 1 260 zł netto miesięcznie — budżet Meta Ads rozliczany oddzielnie.</strong> Podana kwota to fee za pracę agencji: strategię, prowadzenie, optymalizację i raporty.
              </p>
              <p>
                Nie dopłacasz agencji prowizji od wydanego budżetu reklamowego. Dla firmy zaczynającej rekomendujemy minimum 1 000 zł miesięcznie budżetu reklamowego, żeby kampania miała z czego się uczyć.
              </p>
            </div>

            <div class="text-center mt-10">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt usług</BaseButton>
              </NuxtLink>
            </div>

          </div>
        </section>

        <!-- ── Section 4: Google Ads vs social ───────────────────────────── -->
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
                Google Ads czy social media — od czego zacząć
              </h2>
              <p class="text-on-surface-variant">
                Przy ograniczonym pierwszym budżecie pytanie nie brzmi „który kanał jest lepszy", tylko „gdzie ma trafić pierwsza złotówka". Odpowiedź zależy od tego, czy Twoi klienci już szukają Twojej usługi, czy trzeba dopiero zbudować popyt.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie Google Ads z social media</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/4" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Google Ads</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Social media (Meta)</th>
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
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.ads }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.soc }}</td>
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
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Google Ads</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.ads }}</p>
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Social media</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.soc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Jeśli klienci wpisują Twoją usługę w Google — zaczynaj od
                <NuxtLink to="/google-ads" class="text-primary font-semibold hover:underline">Google Ads</NuxtLink>,
                bo popyt już istnieje i wystarczy go przechwycić. Jeśli sprzedajesz produkt kupowany pod wpływem — zaczynaj od
                <NuxtLink to="/social-media" class="text-primary font-semibold hover:underline">social media</NuxtLink>.
                Firmy z większym budżetem prowadzą oba kanały równolegle.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak prowadzimy"
          title="Jak prowadzimy marketing online — miesięczny cykl"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o marketing internetowy"
          :faqs="faqData"
        />

        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Kanały marketingowe dopasowane do celu"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Jeden partner do całego marketingu online"
      description="Opisz cel i budżet — doradzimy, od którego kanału zacząć, i wrócimy ze stałym fee przed startem."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
