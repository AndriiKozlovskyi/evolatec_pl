<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Agencja Google Ads — kampanie w Google | EvolaTec',
  description: 'Prowadzenie kampanii Google Ads od 1 680 zł netto miesięcznie. Setup, słowa kluczowe, optymalizacja i raporty. Budżet reklamowy rozliczany oddzielnie.',
  ogTitle: 'Agencja Google Ads — kampanie w Google | EvolaTec',
  ogDescription: 'Prowadzenie kampanii Google Ads od 1 680 zł netto miesięcznie. Setup, słowa kluczowe, optymalizacja i raporty. Budżet reklamowy osobno.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/google-ads',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje prowadzenie kampanii Google Ads?',
    answer: 'Prowadzenie kampanii Google Ads kosztuje od 1 680 zł netto miesięcznie — to fee za obsługę agencji. Budżet reklamowy płacony Google jest rozliczany oddzielnie i ustalasz go samodzielnie. Cena obejmuje strategię, setup, dobór słów kluczowych, teksty reklam, śledzenie konwersji oraz miesięczną optymalizację i raportowanie.',
  },
  {
    question: 'Jaki budżet reklamowy jest potrzebny w Google Ads?',
    answer: 'Rekomendowany minimalny budżet reklamowy w Google to 1 000 zł miesięcznie, rozliczany bezpośrednio z Google. Poniżej tej kwoty kampania zbiera za mało danych, żeby algorytm nauczył się, kto kupuje. W bardziej konkurencyjnych branżach próg jest wyższy — ustalamy go realnie przed startem, na podstawie stawek za kliknięcie w Twojej niszy.',
  },
  {
    question: 'Czy budżet reklamowy Google jest wliczony w cenę obsługi?',
    answer: 'Nie — fee za obsługę i budżet reklamowy to dwie osobne kwoty. Płacisz nam stałe miesięczne wynagrodzenie za prowadzenie kampanii, a budżet reklamowy trafia bezpośrednio do Google. Dzięki temu nie pobieramy prowizji od wydanego budżetu, a nasze wynagrodzenie nie rośnie wraz z kwotą, którą wydajesz na kliknięcia.',
  },
  {
    question: 'Jak szybko Google Ads przynosi efekty?',
    answer: 'Google Ads przynosi pierwsze zapytania od pierwszego dnia kampanii — to jego główna przewaga nad SEO. Pełna optymalizacja stawek, słów kluczowych i odbiorców zajmuje zwykle 4–6 tygodni, zanim kampania osiągnie stabilny koszt pozyskania klienta. Od początku raportujemy konwersje, żeby było widać, kiedy wydatek zaczyna się zwracać.',
  },
  {
    question: 'Czym różni się SEO od Google Ads?',
    answer: 'Google Ads to reklama płatna — działa natychmiast, ale ruch trwa tylko tak długo, jak długo opłacasz kliknięcia. SEO to pozycjonowanie organiczne — efekty budują się tygodniami i miesiącami, ale ruch zostaje po zaprzestaniu płacenia za kliknięcia. Google Ads daje szybkość, SEO daje trwałość; najczęściej prowadzi się oba równolegle.',
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
      '@id': 'https://evolatec.pl/google-ads#webpage',
      url: 'https://evolatec.pl/google-ads',
      name: 'Agencja Google Ads — kampanie w Google | EvolaTec',
      description: 'Prowadzenie kampanii Google Ads od 1 680 zł netto miesięcznie. Setup, słowa kluczowe, optymalizacja i raporty. Budżet reklamowy rozliczany oddzielnie.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/google-ads#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/google-ads#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Marketing internetowy', item: 'https://evolatec.pl/marketing-online' },
        { '@type': 'ListItem', position: 3, name: 'Google Ads', item: 'https://evolatec.pl/google-ads' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/google-ads#service',
      name: 'Prowadzenie kampanii Google Ads',
      serviceType: 'Reklama Google Ads',
      description: 'Prowadzenie kampanii Google Ads: strategia, setup, dobór słów kluczowych, teksty reklam, śledzenie konwersji oraz miesięczna optymalizacja i raportowanie. Od 1 680 zł netto miesięcznie, budżet reklamowy rozliczany oddzielnie.',
      url: 'https://evolatec.pl/google-ads',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        name: 'Prowadzenie kampanii Google Ads',
        priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '1680', priceCurrency: 'PLN', unitText: 'MONTH', valueAddedTaxIncluded: false },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/google-ads#faq',
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
  name: 'Jak prowadzimy kampanie Google Ads — miesięczny cykl',
  description: 'Miesięczny cykl prowadzenia kampanii Google Ads w EvolaTec: od audytu i setupu po raport.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Audyt i setup', text: 'Wdrażamy śledzenie konwersji, budujemy lub porządkujemy strukturę konta i kampanii. Jednorazowo, na początku współpracy.' },
    { '@type': 'HowToStep', position: 2, name: 'Prowadzenie kampanii', text: 'Uruchamiamy reklamy, pilnujemy wydatku i wykluczamy frazy, które generują koszt bez konwersji.' },
    { '@type': 'HowToStep', position: 3, name: 'Cotygodniowa optymalizacja', text: 'Korygujemy stawki, grupy odbiorców i teksty na podstawie danych konwersji, nie przeczuć.' },
    { '@type': 'HowToStep', position: 4, name: 'Raport miesięczny', text: 'Dostajesz liczby, które mają znaczenie: wydatek, liczba i koszt konwersji oraz plan na kolejny miesiąc.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/google-ads' }],
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
  { value: 'od 1 680 zł', label: 'Fee miesięczne netto',    icon: 'payments'                },
  { value: 'Od 1. dnia',  label: 'Pierwsze zapytania',      icon: 'bolt'                    },
  { value: 'min. 1 000 zł', label: 'Rekomend. budżet/mies.', icon: 'account_balance_wallet' },
  { value: 'Bez prowizji', label: 'Od budżetu reklam',      icon: 'verified'                },
]

const includedItems = [
  { icon: 'rocket_launch', label: 'Strategia i setup kampanii'      },
  { icon: 'key',           label: 'Dobór słów kluczowych'           },
  { icon: 'edit',          label: 'Tworzenie tekstów reklamowych'   },
  { icon: 'track_changes', label: 'Śledzenie konwersji'             },
  { icon: 'insights',      label: 'Miesięczna optymalizacja i raporty' },
  { icon: 'fact_check',    label: 'Audyt istniejących kampanii'     },
]

const compareRows = [
  { label: 'Pierwsze efekty',        ads: 'Od pierwszego dnia',     seo: 'Tygodnie–miesiące'      },
  { label: 'Model kosztu',           ads: 'Płatność za kliknięcie', seo: 'Stałe fee miesięczne'   },
  { label: 'Po wyłączeniu',          ads: 'Ruch znika natychmiast', seo: 'Ruch zostaje'           },
  { label: 'Pozycja w wynikach',     ads: 'Górne sloty reklamowe',  seo: 'Wyniki organiczne'      },
  { label: 'Najlepsze dla',          ads: 'Szybkiego ruchu i testów', seo: 'Trwałego wzrostu na lata' },
]

const relatedServices = [
  {
    icon: 'ads_click',
    title: 'Landing page',
    description: 'Strona konwersyjna pod kampanię Ads — wyższy Quality Score i niższy koszt kliknięcia.',
    price: 'od 2 100 zł netto',
    href: '/landing-page',
  },
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Organiczne pozycje obok reklam — ruch, który zostaje po wyłączeniu kampanii.',
    price: 'od 1 260 zł netto/mies.',
    href: '/seo',
  },
  {
    icon: 'share',
    title: 'Social Media Marketing',
    description: 'Reklamy na Facebooku i Instagramie w połączeniu z Google Ads — pełne pokrycie kanałów.',
    price: 'od 1 260 zł netto/mies.',
    href: '/social-media',
  },
]

const processSteps = [
  {
    icon: 'troubleshoot',
    title: 'Audyt i setup',
    description: 'Wdrażamy śledzenie konwersji, budujemy lub porządkujemy strukturę konta i kampanii. Jednorazowo, na początku współpracy.',
  },
  {
    icon: 'campaign',
    title: 'Prowadzenie kampanii',
    description: 'Uruchamiamy reklamy, pilnujemy wydatku i wykluczamy frazy, które generują koszt bez konwersji.',
  },
  {
    icon: 'tune',
    title: 'Cotygodniowa optymalizacja',
    description: 'Korygujemy stawki, grupy odbiorców i teksty na podstawie danych konwersji, nie przeczuć.',
  },
  {
    icon: 'summarize',
    title: 'Raport miesięczny',
    description: 'Dostajesz liczby, które mają znaczenie: wydatek, liczba i koszt konwersji oraz plan na kolejny miesiąc.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Agencja Google Ads"
      title="Kampanie Google Ads, które sprzedają — prowadzimy reklamy w Google"
      description="Prowadzenie kampanii Google Ads od 1 680 zł netto miesięcznie — strategia, słowa kluczowe, śledzenie konwersji i optymalizacja. Budżet reklamowy rozliczany oddzielnie z Google."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz marketing online"
      primary-href="/kontakt"
      secondary-href="/marketing-online"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="border-b border-outline-variant/30 bg-surface">
        <div class="max-w-container-max mx-auto px-gutter py-3">
          <ol class="flex items-center flex-wrap gap-2 text-sm text-on-surface-variant">
            <li><NuxtLink to="/" class="hover:text-primary">Strona główna</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li><NuxtLink to="/marketing-online" class="hover:text-primary">Marketing internetowy</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li aria-current="page" class="text-on-surface font-medium">Google Ads</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ── Section 1: Przepalony budżet — white, 2-col ─────────────── -->
        <section aria-labelledby="section-problem" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">track_changes</span>
                  Konwersje, nie kliknięcia
                </span>
                <h2 id="section-problem" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Dlaczego większość kampanii Google Ads przepala budżet
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Firma uruchamia Google Ads, widzi rosnący wydatek i kilka telefonów, ale nie wie, czy te telefony przyszły z reklamy, czy mimo niej. Tak wygląda większość źle ustawionych kampanii: budżet znika, a związek między wydatkiem a sprzedażą pozostaje zgadywaniem.
                  </p>
                  <p>
                    Trzy błędy powtarzają się najczęściej: zbyt szerokie słowa kluczowe, brak śledzenia konwersji i ruch kierowany na stronę główną zamiast dopasowany landing page.
                  </p>
                  <p>
                    Prowadzimy kampanie odwrotnie: od wdrożenia śledzenia konwersji, przez zawężenie słów kluczowych. <strong class="text-on-surface">Budżet reklamowy rozliczany jest oddzielnie z Google — fee za obsługę jest stałe</strong> i nie rośnie wraz z wydanym budżetem.
                  </p>
                </div>
              </div>

              <div data-reveal="right">
                <NuxtImg
                  src="/assets/google-ads.webp"
                  alt="Dashboard Google Ads z wykresem konwersji, kosztu kliknięcia i ROAS kampanii reklamowej"
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
                  Co zawiera prowadzenie kampanii Google Ads
                </h2>
                <div class="space-y-4 text-on-primary/80 leading-relaxed">
                  <p>
                    Prowadzenie kampanii Google Ads to praca miesięczna, nie jednorazowy setup. W stałym fee mieści się wszystko, co potrzebne, żeby kampania działała i się poprawiała.
                  </p>
                  <p>
                    Jeśli przejmujemy istniejące konto, zaczynamy od audytu i mówimy wprost, co działa, a co przepala budżet. Ruch z reklam najlepiej kierować na dopasowany landing page, a nie stronę główną.
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
              Ile kosztuje Google Ads — fee za obsługę i budżet reklamowy
            </h2>

            <div class="grid sm:grid-cols-2 gap-4 mb-8">
              <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p class="text-on-surface-variant mb-1 text-sm">Fee za obsługę</p>
                <p class="font-display text-3xl font-black text-primary mb-1">od 1 680 zł netto</p>
                <p class="text-sm text-on-surface-variant">miesięcznie · praca agencji</p>
              </div>
              <div class="rounded-2xl border border-outline-variant/40 bg-white p-6">
                <p class="text-on-surface-variant mb-1 text-sm">Budżet reklamowy</p>
                <p class="font-display text-3xl font-black text-on-surface mb-1">min. 1 000 zł</p>
                <p class="text-sm text-on-surface-variant">miesięcznie · płacony Google</p>
              </div>
            </div>

            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                <strong class="text-on-surface">Google Ads kosztuje od 1 680 zł netto miesięcznie — budżet reklamowy rozliczany oddzielnie.</strong> Podana kwota to fee za pracę agencji, a nie to, co realnie trafia do Google.
              </p>
              <p>
                Budżet reklamowy ustalasz Ty i płacisz go bezpośrednio Google. Rekomendowany minimalny budżet reklamowy w Google to 1 000 zł miesięcznie, rozliczany bezpośrednio z Google — poniżej tej kwoty kampania ma za mało danych, żeby algorytm nauczył się, kto kupuje.
              </p>
              <p>
                Nasze fee nie rośnie automatycznie wraz z wydanym budżetem — nie pobieramy prowizji od kwoty, którą przepuszczasz przez Google.
              </p>
            </div>

            <div class="mt-10">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt usług</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ── Section 4: Google Ads vs SEO ──────────────────────────────── -->
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
                Google Ads czy SEO — co daje szybsze efekty dla firmy
              </h2>
              <p class="text-on-surface-variant">
                Różnica jest prosta: Google Ads kupuje ruch od zaraz, SEO buduje go na własność, ale wolniej. Nie wykluczają się — odpowiadają na dwie różne potrzeby w czasie.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie Google Ads z SEO</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Google Ads</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">SEO (pozycjonowanie)</th>
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
                    <td class="p-4 text-center text-on-surface-variant">{{ row.seo }}</td>
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
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">SEO</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.seo }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Jeśli potrzebujesz zapytań w tym tygodniu — zaczynaj od Google Ads. Jeśli budujesz pozycję na lata i chcesz przestać płacić za każde kliknięcie — inwestuj w
                <NuxtLink to="/seo" class="text-primary font-semibold hover:underline">SEO</NuxtLink>
                równolegle. Najzdrowszy układ to jedno i drugie: Google Ads na start, pozycjonowanie jako fundament, który z czasem przejmuje część ruchu płatnego.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak prowadzimy"
          title="Jak prowadzimy kampanie Google Ads — miesięczny cykl"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o Google Ads"
          :faqs="faqData"
        />

        <!-- ── Related ────────────────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Zmaksymalizuj efekty kampanii"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Kampania Google Ads, która się rozlicza"
      description="Opisz cel i budżet — zaczniemy od audytu i wrócimy ze stałym fee oraz rekomendowanym budżetem przed startem."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
