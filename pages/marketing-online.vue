<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Marketing internetowy dla firm — agencja online | EvolaTec',
  description: 'Marketing internetowy dla firm: Google Ads od 1 680 zł i social media od 1 260 zł netto miesięcznie. Rozliczenie miesięczne, jeden partner.',
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
  {
    question: 'Dla jakich firm sprawdza się marketing online?',
    answer: 'Dla lokalnych firm, usługodawców, sklepów internetowych, startupów i marek cyfrowych. Kluczowe jest, żeby Twoi klienci byli aktywni online i żebyś był gotów inwestować w odpowiednie kanały. Dobieramy kanały pod branżę i model sprzedaży — nie ma jednej strategii dla wszystkich.',
  },
  {
    question: 'Który kanał marketingowy jest najlepszy dla mojej firmy?',
    answer: 'Zależy od branży, grupy docelowej i modelu sprzedaży. Lokalne firmy usługowe często korzystają z Local SEO i Google Ads, sklepy z Meta Ads, a firmy B2B — z SEO i content marketingu. Analizujemy Twoją grupę docelową i rekomendujemy kanały, które faktycznie docierają do Twoich klientów.',
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
      '@id': 'https://evolatec.pl/marketing-online#webpage',
      url: 'https://evolatec.pl/marketing-online',
      name: 'Marketing internetowy dla firm — agencja online | EvolaTec',
      description: 'Marketing internetowy dla firm: Google Ads od 1 680 zł i social media od 1 260 zł netto miesięcznie. Rozliczenie miesięczne, jeden partner.',
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
  { value: 'Full Service', label: 'Marketing online',      icon: 'campaign'      },
  { value: 'Więcej leadów', label: 'Generowanie',          icon: 'person_add'    },
  { value: 'Performance',  label: 'Fokus na wynikach',     icon: 'analytics'     },
  { value: 'Mierzalne',    label: 'Efekty kampanii',       icon: 'trending_up'   },
]

const introParagraphs = [
  'Firma odpala reklamy, wrzuca posty, płaci co miesiąc — i po kwartale nie potrafi powiedzieć, czy to się opłaca. To najczęstszy scenariusz w marketingu małych firm: aktywność zastąpiła strategię. Pieniądze wychodzą, kliknięcia są, ale nikt nie liczy, ile z nich zamieniło się w zapytanie albo sprzedaż.',
  'Powód jest zwykle techniczny, nie kreatywny. Brakuje śledzenia konwersji, więc nie wiadomo, która kampania działa. Budżet idzie na kanał dobrany przypadkiem, a nie pod to, jak kupują klienci w danej branży. I nikt nie odpowiada za jedną liczbę — koszt pozyskania klienta — która jako jedyna mówi, czy marketing zarabia, czy pali budżet.',
  'Prowadzimy marketing online inaczej: zaczynamy od wdrożenia śledzenia konwersji, dobieramy kanał pod sposób, w jaki kupują Twoi klienci, i co miesiąc raportujemy konkretne liczby. Budżet reklamowy rozliczany jest oddzielnie, bezpośrednio z Google lub Meta — fee za obsługę jest stałe, więc wiesz, za co płacisz agencji, a ile idzie na same reklamy.',
]

const marketingServices = [
  {
    title: 'SEO i pozycjonowanie',
    description: 'Więcej widoczności w Google przez techniczne SEO, strategie treści i trwałe pozycje organiczne.',
    icon: 'search_insights',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
    href: '/seo',
  },
  {
    title: 'Google Ads i performance',
    description: 'Kampanie reklamowe zoptymalizowane pod konwersje, leady i wzrost sprzedaży.',
    icon: 'ads_click',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
    href: '/google-ads',
  },
  {
    title: 'Cyfrowe strategie marketingowe',
    description: 'Indywidualne strategie dla trwałego cyfrowego wzrostu dopasowane do branży.',
    icon: 'insights',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
    href: '/kontakt',
  },
  {
    title: 'Branding i pozycjonowanie marki',
    description: 'Profesjonalna identyfikacja wizualna dla większej rozpoznawalności i zaufania.',
    icon: 'palette',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
    href: '/branding',
  },
  {
    title: 'Optymalizacja konwersji',
    description: 'Optymalizacja stron i landing page\'ów dla lepszych efektów kampanii.',
    icon: 'conversion_path',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
    href: '/kontakt',
  },
  {
    title: 'Doradztwo marketingowe',
    description: 'Strategiczne doradztwo dla firm, startupów i projektów cyfrowych.',
    icon: 'support_agent',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
    href: '/kontakt',
  },
]

const marketingBenefits = [
  {
    title: 'Więcej zasięgu',
    description: 'Profesjonalny marketing dowozi markę do właściwej grupy odbiorców.',
    icon: 'public',
    image: '/assets/marketing-online.webp',
  },
  {
    title: 'Więcej leadów',
    description: 'Kampanie zoptymalizowane pod konwersje generują kwalifikowane zapytania.',
    icon: 'person_add',
    image: '/assets/google-ads.webp',
  },
  {
    title: 'Wzrost sprzedaży',
    description: 'Dane z kampanii kierują budżet tam, gdzie faktycznie sprzedaje.',
    icon: 'trending_up',
    image: '/assets/seo-analytics.webp',
  },
  {
    title: 'Trwałe efekty',
    description: 'Długofalowe strategie zapewniają stabilną widoczność i zwrot z inwestycji.',
    icon: 'schedule',
    image: '/assets/web-analytics.webp',
  },
]

const processSteps = [
  {
    icon: 'analytics',
    title: 'Audyt i setup',
    description: 'Na starcie wdrażamy śledzenie konwersji, audytujemy istniejące kampanie i budujemy strategię pod cel. Jednorazowo, na początku współpracy.',
  },
  {
    icon: 'rocket_launch',
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

const marketingChannels = [
  { title: 'Google Ads', description: 'Reklama trafiająca do ludzi, którzy już szukają Twojej usługi. Zapytanie pojawia się od pierwszego dnia kampanii — sprawdza się, gdy potrzebujesz ruchu natychmiast.', icon: 'ads_click', href: '/google-ads' },
  { title: 'Social media (Meta)', description: 'Facebook i Instagram — organika i płatne kampanie Meta Ads. Budowanie rozpoznawalności i popytu zanim klient zacznie szukać. Dla marek B2C, lokalnych biznesów i sklepów.', icon: 'groups', href: '/social-media' },
  { title: 'Landing page konwersyjny', description: 'Jeśli ruch ma trafiać na dopracowaną stronę docelową, dokładamy landing page pod konkretną kampanię — bez niego tracisz część budżetu reklamowego.', icon: 'article', href: '/landing-page' },
  { title: 'Google SEO', description: 'Organiczna widoczność przez pozycjonowanie w wyszukiwarce. SEO i Google Ads uzupełniają się — Ads łapie popyt istniejący, SEO buduje widoczność długofalową.', icon: 'search_insights', href: '/seo' },
]

const whyEvolaTecParagraphs = [
  'Wiele agencji marketingowych skupia się wyłącznie na reklamie.',
  'EvolaTec łączy marketing, <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a>, tworzenie stron, <a href="/branding" class="text-primary font-semibold hover:underline">branding</a> i optymalizację techniczną w kompleksowe rozwiązanie.',
  'Dzięki temu powstają strony i strategie marketingowe, które nie tylko dobrze wyglądają, ale przynoszą realne wyniki.',
]

const whyEvolaTec = [
  {
    title: 'Know-how techniczne',
    description: 'Łączymy development, SEO i marketing w jednym miejscu.',
    icon: 'code',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Fokus na wynikach',
    description: 'Więcej leadów, lepsze pozycje i trwały wzrost sprzedaży.',
    icon: 'trending_up',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Skalowalne strategie',
    description: 'Systemy marketingowe, które działają długofalowo.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
]

const consultingItems = [
  { label: 'Doradztwo marketingu online', icon: 'support_agent'   },
  { label: 'Digital marketing consulting', icon: 'business_center' },
  { label: 'Strategie lejkowe',           icon: 'filter_alt'      },
  { label: 'Generowanie leadów',          icon: 'person_add'      },
  { label: 'Strategie SEO',              icon: 'search_insights'  },
  { label: 'Branding i pozycjonowanie',   icon: 'palette'         },
  { label: 'Optymalizacja konwersji',     icon: 'conversion_path' },
  { label: 'Performance marketing',       icon: 'analytics'       },
]

const consultingColors = [
  'text-blue-500',
  'text-emerald-500',
  'text-orange-500',
  'text-purple-500',
]

const pricingItems = [
  { name: 'Prowadzenie Google Ads',          price: 'od 1 680 zł netto/mies.', icon: 'ads_click',       highlight: true,  href: '/google-ads'    },
  { name: 'Prowadzenie Social Media (Meta)', price: 'od 1 260 zł netto/mies.', icon: 'groups',          highlight: true,  href: '/social-media'  },
  { name: 'Pozycjonowanie SEO',              price: 'od 1 260 zł netto/mies.', icon: 'search_insights', highlight: true,  href: '/seo'           },
  { name: 'Landing page konwersyjny',        price: 'od 2 100 zł netto',       icon: 'article',         highlight: false, href: '/landing-page'  },
  { name: 'Copywriting SEO',                price: 'wycena indywidualna',      icon: 'edit_note',       highlight: false, href: '/copywriting'   },
  { name: 'Doradztwo marketingowe',          price: 'wycena indywidualna',     icon: 'support_agent',   highlight: false, href: '/kontakt'       },
]

const relatedServices = [
  {
    icon: 'article',
    title: 'Landing page',
    description: 'Każda kampania potrzebuje strony konwersyjnej — bez niej tracisz budżet reklamowy.',
    price: 'od 2 100 zł netto',
    href: '/landing-page',
  },
  {
    icon: 'language',
    title: 'Strona firmowa',
    description: 'Twoje kanały marketingowe generują ruch — profesjonalna strona zamienia go w zapytania.',
    price: 'od 6 300 zł netto',
    href: '/strona-internetowa',
  },
  {
    icon: 'shopping_bag',
    title: 'Sklep internetowy',
    description: 'Prowadź reklamy na sklep, który naprawdę sprzedaje — szybki, bezpieczny i zoptymalizowany.',
    price: 'od 12 600 zł netto',
    href: '/sklep-internetowy',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Full Service Marketing Online"
      title="Agencja marketingu online: więcej zasięgu, więcej leadów, więcej sprzedaży"
      description="EvolaTec opracowuje cyfrowe strategie marketingowe, które budują widoczność firm, generują kwalifikowane leady i tworzą trwały wzrost."
      primaryCTA="Zapytaj o strategię"
      secondaryCTA="Zobacz cennik"
      primary-href="/kontakt"
      secondary-href="#cennik"
      :stats="heroStats"
    />

    <main id="main-content">
      <article>

        <!-- ── Intro Section ──────────────────────────────────────────────── -->
        <IntroSection
          heading="Dlaczego marketing online bez strategii to spalony budżet"
          :paragraphs="introParagraphs"
          image="/assets/marketing-online.webp"
          image-alt="Agencja marketingu online EvolaTec — dashboard kampanii i analityki"
          :reverse="true"
        />

        <!-- ── Services Section ───────────────────────────────────────────── -->
        <ServicesSection
          title="Nasze usługi marketingu internetowego"
          variant="centered"
          :services="marketingServices"
          learnMoreLabel="Dowiedz się więcej"
          background="bg-surface-container-low"
        />

        <!-- ── Benefits Section ───────────────────────────────────────────── -->
        <BenefitsSection
          title="Korzyści profesjonalnej agencji marketingowej"
          :benefits="marketingBenefits"
        />

        <!-- ── Process Section ────────────────────────────────────────────── -->
        <ProcessSection
          title="Jak prowadzimy marketing online — miesięczny cykl"
          :steps="processSteps"
          background="bg-surface-container-low"
        />

        <!-- ── Marketing Channels ─────────────────────────────────────────── -->
        <DarkCardsSection
          title="Kanały, którymi prowadzimy marketing online"
          :cards="marketingChannels"
        />

        <!-- ── Why EvolaTec ───────────────────────────────────────────────── -->
        <IntroSection
          heading="Dlaczego EvolaTec jako agencja marketingu online?"
          :paragraphs="whyEvolaTecParagraphs"
          image="/assets/web-analytics.webp"
          image-alt="Agencja marketingu online EvolaTec — analityka i wyniki kampanii"
          :usps="whyEvolaTec"
        />

        <!-- ── Consulting Section ─────────────────────────────────────────── -->
        <section class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid md:grid-cols-2 gap-stack-lg items-start">
              <div>
                <h2 class="font-headline-lg text-headline-lg text-primary mb-stack-md">
                  Google Ads czy social media — od czego zacząć
                </h2>
                <p class="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Przy ograniczonym pierwszym budżecie pytanie nie brzmi „który kanał jest lepszy", tylko „gdzie ma trafić pierwsza złotówka". Odpowiedź zależy od tego, czy Twoi klienci już szukają Twojej usługi, czy trzeba dopiero zbudować popyt.
                </p>
                <p class="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Jeśli klienci wpisują Twoją usługę w Google — zaczynaj od Google Ads, bo popyt już istnieje i wystarczy go przechwycić. Jeśli sprzedajesz produkt, który ludzie kupują pod wpływem, a nie z potrzeby wyszukanej w Google — zaczynaj od social media. Firmy z większym budżetem prowadzą oba kanały równolegle.
                </p>
                <NuxtLink to="/kontakt">
                  <BaseButton variant="primary" size="lg">Zapytaj o doradztwo</BaseButton>
                </NuxtLink>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  v-for="(item, index) in consultingItems"
                  :key="item.label"
                  class="flex flex-col items-center justify-center gap-2 text-center bg-surface rounded-xl p-4 border border-outline-variant/20"
                >
                  <span
                    class="material-symbols-outlined text-xl"
                    :class="consultingColors[index % consultingColors.length]"
                  >{{ item.icon }}</span>
                  <span class="font-body-md text-on-surface text-sm font-medium">{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Pricing Section ───────────────────────────────────────────── -->
        <section id="cennik" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center mb-stack-lg">
              <span class="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-4">Cennik</span>
              <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
                Cennik usług marketingu internetowego
              </h2>
              <p class="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
                Stałe miesięczne fee za obsługę agencji — budżet reklamowy płacisz osobno, bezpośrednio do Google lub Meta.
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <NuxtLink
                v-for="item in pricingItems.filter(i => i.highlight)"
                :key="item.name"
                :to="item.href"
                class="relative bg-white rounded-2xl p-6 border-2 border-primary/20 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-primary/50 transition-all duration-200 group"
              >
                <div class="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span class="material-symbols-outlined text-primary text-xl">{{ item.icon }}</span>
                </div>
                <p class="font-semibold text-on-surface text-sm mb-2">{{ item.name }}</p>
                <p class="font-bold text-primary text-lg">{{ item.price }}</p>
                <span class="material-symbols-outlined text-primary/40 group-hover:text-primary text-base absolute top-5 right-5 transition-colors duration-200">arrow_forward</span>
              </NuxtLink>
            </div>

            <div class="grid md:grid-cols-3 gap-4 mb-10">
              <NuxtLink
                v-for="item in pricingItems.filter(i => !i.highlight)"
                :key="item.name"
                :to="item.href"
                class="flex items-center gap-4 bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30 hover:border-primary/30 hover:bg-white transition-all duration-200 group"
              >
                <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 border border-outline-variant/20">
                  <span class="material-symbols-outlined text-on-surface-variant text-lg">{{ item.icon }}</span>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-semibold text-on-surface">{{ item.name }}</p>
                  <p class="text-sm text-primary font-bold">{{ item.price }}</p>
                </div>
                <span class="material-symbols-outlined text-primary/30 group-hover:text-primary text-base transition-colors duration-200">arrow_forward</span>
              </NuxtLink>
            </div>

            <div class="text-center">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt usług</BaseButton>
              </NuxtLink>
            </div>

          </div>
        </section>

        <!-- ── FAQ Section ────────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o marketing internetowy"
          :faqs="faqData"
        />

        <!-- ── Related Services ───────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Strona internetowa i development"
          title="Marketing potrzebuje konwersyjnej strony jako podstawy"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Więcej widoczności, więcej leadów, więcej wzrostu"
      description="EvolaTec opracowuje nowoczesne strategie marketingu online dla firm, które chcą rosnąć cyfrowo."
      primary-cta="Zapytaj o projekt marketingowy"
      secondary-cta="Bezpłatna konsultacja"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
