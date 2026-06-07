<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Agencja Social Media — Facebook i Instagram Ads | EvolaTec',
  description: 'Profesjonalne kampanie Social Media Ads na Facebooku i Instagramie. Strategia, kreacje, Meta Ads i raportowanie. Budżet reklamowy rozliczany oddzielnie.',
  ogTitle: 'Agencja Social Media — Facebook i Instagram Ads | EvolaTec',
  ogDescription: 'Social Media Ads na Facebooku i Instagramie — strategia, content i performance marketing dla mierzalnych wyników.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/social-media',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co robi agencja social media?',
    answer: 'Agencja social media tworzy, uruchamia i optymalizuje kampanie reklamowe na platformach takich jak Instagram, Facebook i LinkedIn. Obejmuje to analizę grupy docelowej, tworzenie kreacji, teksty reklamowe, targetowanie i bieżącą optymalizację. Celem jest wygenerowanie jak największej liczby kwalifikowanych kliknięć, leadów lub sprzedaży z dostępnego budżetu.',
  },
  {
    question: 'Ile kosztują Facebook lub Instagram Ads?',
    answer: 'Prowadzenie Meta Ads zaczyna się od 1 260 zł netto miesięcznie za usługi agencji. Budżet reklamowy na Facebooka i Instagrama jest ustalany oddzielnie i płacony bezpośrednio do Meta. Wysokość budżetu zależy od branży i celu — przed startem kampanii podajemy rekomendację.',
  },
  {
    question: 'Jak szybko działają Social Media Ads?',
    answer: 'Pierwsze wyniki mogą być widoczne już po kilku dniach. Pierwsze tygodnie służą głównie testowaniu różnych kreacji i grup docelowych — potem najlepsze kombinacje są dalej optymalizowane i skalowane.',
  },
  {
    question: 'Która platforma social media jest odpowiednia dla mojej firmy?',
    answer: 'Instagram i Facebook sprawdzają się szczególnie dla B2C, firm lokalnych i ofert wizualnych. TikTok działa dla młodszych grup docelowych. LinkedIn to pierwszy wybór w B2B. Analizujemy Twoją grupę docelową i rekomendujemy odpowiednią platformę.',
  },
  {
    question: 'Jaka jest różnica między Social Media Marketing a Google Ads?',
    answer: 'Google Ads dociera do użytkowników, którzy aktywnie szukają rozwiązania. Reklamy social media są wyświetlane użytkownikom pasującym do docelowej grupy odbiorców, ale niekoniecznie aktywnie szukającym. Social media sprawdza się szczególnie przy budowaniu marki i ofertach wizualnych, Google Ads — przy konkretnej intencji zakupowej.',
  },
  {
    question: 'Czy przejmujecie też tworzenie contentu na social media?',
    answer: 'Tak, tworzymy na życzenie kreacje, Reels, treści na Stories i teksty reklamowe do kampanii. Kreacje i grafiki zaczynają się od 630 zł, produkcja contentu od 1 260 zł.',
  },
  {
    question: 'Dla jakich firm nadaje się Social Media Marketing?',
    answer: 'Dla firm lokalnych, usługodawców, e-commerce, startupów i budowania marki. Szczególnie skuteczny, gdy Twoja oferta może być atrakcyjnie wizualnie zaprezentowana lub ma wyraźnie określoną grupę docelową.',
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
      priceRange: '1260 zł – 25200 zł',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://evolatec.pl/social-media#webpage',
      url: 'https://evolatec.pl/social-media',
      name: 'Agencja Social Media — Facebook i Instagram Ads | EvolaTec',
      description: 'Profesjonalne kampanie Social Media Ads na Facebooku i Instagramie. Strategia, kreacje, Meta Ads i raportowanie.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      breadcrumb: { '@id': 'https://evolatec.pl/social-media#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/social-media#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Marketing internetowy', item: 'https://evolatec.pl/marketing-online' },
        { '@type': 'ListItem', position: 3, name: 'Social Media', item: 'https://evolatec.pl/social-media' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/social-media#service',
      name: 'Meta Ads i Social Media Marketing',
      serviceType: 'Social Media Marketing',
      description: 'Instagram, Facebook i LinkedIn Ads dla większego zasięgu, obserwujących i konwersji.',
      url: 'https://evolatec.pl/social-media',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        name: 'Meta Ads Management',
        priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '1260', priceCurrency: 'PLN', unitText: 'MONTH', valueAddedTaxIncluded: false },
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/social-media#faq',
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
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/social-media' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
  ],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'Facebook',    label: 'Instagram i Meta',   icon: 'groups'     },
  { value: 'Więcej leadów', label: 'Generowanie',      icon: 'person_add' },
  { value: 'Performance', label: 'Fokus na wynikach',  icon: 'analytics'  },
  { value: 'Zasięg',      label: 'Budowanie',          icon: 'public'     },
]

const introParagraphs = [
  'Facebook, Instagram i inne sieci społecznościowe należą do najważniejszych kanałów marketingowych dla nowoczesnych firm.',
  'Profesjonalna reklama social media pozwala precyzyjnie dotrzeć do nowych klientów, budować rozpoznawalność marki i zwiększać sprzedaż.',
  'Jako agencja social media EvolaTec tworzy kampanie, które generują zasięg, zaangażowanie, leady i obroty — uzupełnione o <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a> i <a href="/google-ads" class="text-primary font-semibold hover:underline">Google Ads</a>.',
]

const socialPlatforms = [
  {
    name: 'Facebook Marketing',
    description: 'Reklamy dla firm lokalnych, usługodawców i e-commerce.',
    icon: 'thumb_up',
    bg: 'bg-gradient-to-br from-blue-600 to-blue-800',
    image: '/assets/marketing-online.webp',
  },
  {
    name: 'Instagram Marketing',
    description: 'Wizualne kampanie dla budowania marki i zasięgu.',
    icon: 'photo_camera',
    bg: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400',
    image: '/assets/social-media.webp',
  },
  {
    name: 'Meta Ads',
    description: 'Kampanie performance w całej sieci Meta.',
    icon: 'hub',
    bg: 'bg-gradient-to-br from-indigo-600 to-blue-700',
    image: '/assets/seo-analytics.webp',
  },
  {
    name: 'Retargeting',
    description: 'Odzyskiwanie odwiedzających i zainteresowanych.',
    icon: 'refresh',
    bg: 'bg-gradient-to-br from-slate-700 to-slate-900',
    image: '/assets/web-analytics.webp',
  },
]

const socialServices = [
  {
    title: 'Facebook Ads',
    description: 'Targetowane reklamy na Facebooku dla leadów, sprzedaży i budowania marki.',
    icon: 'thumb_up',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Instagram Ads',
    description: 'Nowoczesne kampanie na Instagramie dla zasięgu i performance.',
    icon: 'photo_camera',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Kampanie Meta Ads',
    description: 'Kampanie performance w całej sieci Meta.',
    icon: 'hub',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
  },
  {
    title: 'Content social media',
    description: 'Tworzenie treści reklamowych, kreacji i materiałów kampanijnych.',
    icon: 'edit_square',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Zarządzanie Social Media',
    description: 'Opieka, planowanie i optymalizacja Twoich kanałów social media.',
    icon: 'manage_accounts',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Performance Marketing',
    description: 'Skalowalne kampanie skoncentrowane na obrocie i konwersji.',
    icon: 'analytics',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
]

const socialProcess = [
  {
    icon: 'analytics',
    title: 'Analiza i strategia',
    description: 'Analizujemy Twoją grupę docelową, branżę i konkurencję.',
  },
  {
    icon: 'brush',
    title: 'Content i kreacje',
    description: 'Tworzymy treści reklamowe, grafiki i materiały kampanijne.',
  },
  {
    icon: 'campaign',
    title: 'Setup kampanii',
    description: 'Konfigurujemy profesjonalne kampanie na Facebooku i Instagramie.',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja i skalowanie',
    description: 'Stała analiza i poprawa efektywności kampanii.',
  },
]

const whyEvolaTecParagraphs = [
  'Skuteczny Social Media Marketing to coś więcej niż ładne posty.',
  'Kluczowe są strategia, analiza grupy docelowej, content i optymalizacja oparta na danych.',
  'EvolaTec łączy reklamy social media, <a href="/marketing-online" class="text-primary font-semibold hover:underline">performance marketing</a>, web design i <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a> w wydajne systemy marketingowe.',
]

const whyEvolaTec = [
  {
    title: 'Fokus na performance',
    description: 'Kampanie z mierzalnymi wynikami.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Kreatywny content',
    description: 'Reklamy, które przyciągają uwagę.',
    icon: 'brush',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Skalowalne systemy',
    description: 'Strategie dla długofalowego wzrostu.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
]

const pricingItems = [
  { name: 'Doradztwo Social Media',   price: 'od 380 zł/h'        },
  { name: 'Prowadzenie Meta Ads',     price: 'od 1 260 zł/mies.'  },
  { name: 'Kreacje i grafiki',        price: 'od 630 zł'           },
  { name: 'Raport miesięczny',        price: 'od 420 zł/mies.'    },
  { name: 'Szablony Social Media',    price: 'od 630 zł'           },
  { name: 'Produkcja contentu',       price: 'od 1 260 zł'         },
]

const relatedServices = [
  {
    icon: 'article',
    title: 'Landing page',
    description: 'Konwersyjna landing page jako cel kampanii social media — więcej leadów, mniej odrzuceń.',
    price: 'od 2 100 zł netto',
    href: '/landing-page',
  },
  {
    icon: 'language',
    title: 'Strona firmowa',
    description: 'Profesjonalna strona firmowa jako cyfrowa baza, na którą kierujesz ruch z social media.',
    price: 'od 2 100 zł netto',
    href: '/strona-internetowa',
  },
  {
    icon: 'shopping_bag',
    title: 'Sklep internetowy',
    description: 'E-commerce ze Social Commerce Integration — sprzedaż bezpośrednio z Instagrama i Facebooka.',
    price: 'od 4 200 zł netto',
    href: '/sklep-internetowy',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Profesjonalna agencja Social Media i Meta Ads"
      title="Agencja Social Media Ads: reklamy na Facebooku i Instagramie, które sprzedają"
      description="EvolaTec tworzy skuteczne kampanie Social Media na Facebooku, Instagramie i Meta Ads — strategia, content i performance marketing dla mierzalnych wyników."
      primaryCTA="Zapytaj o Social Media"
      secondaryCTA="Zobacz cennik"
      primary-href="/kontakt"
      secondary-href="#cennik"
      :stats="heroStats"
    />

    <main id="main-content">
      <article>

        <!-- ── Intro Section ──────────────────────────────────────────────── -->
        <IntroSection
          heading="Dlaczego Social Media Marketing jest dziś kluczowy"
          :paragraphs="introParagraphs"
          image="/assets/social-media.webp"
          image-alt="Social Media Marketing EvolaTec — kampanie Meta Ads i content"
        />

        <!-- ── Platforms Section ──────────────────────────────────────────── -->
        <section class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
                Social Media Marketing dla różnych platform
              </h2>
              <p class="font-body-lg text-on-surface-variant">
                Tworzymy kampanie dostosowane do każdego kanału.
              </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              <div
                v-for="platform in socialPlatforms"
                :key="platform.name"
                class="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
                :class="platform.bg"
              >
                <NuxtPicture
                  :src="platform.image"
                  alt=""
                  format="avif,webp"
                  sizes="xs:100vw sm:100vw md:50vw lg:25vw xl:25vw xxl:25vw"
                  :width="600"
                  :height="450"
                  :img-attrs="{
                    loading: 'lazy',
                    decoding: 'async',
                    class: 'absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500 scale-105 group-hover:scale-110 transition-transform',
                  }"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div class="relative h-full flex flex-col justify-between p-6">
                  <div class="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span class="material-symbols-outlined text-white text-2xl">{{ platform.icon }}</span>
                  </div>
                  <div>
                    <h3 class="font-headline-md text-white mb-1">{{ platform.name }}</h3>
                    <p class="text-white/70 text-sm font-body-md">{{ platform.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Services Section ───────────────────────────────────────────── -->
        <ServicesSection
          title="Nasze usługi Social Media"
          variant="centered"
          :services="socialServices"
          learnMoreLabel="Dowiedz się więcej"
          background="bg-surface"
        />

        <!-- ── Process Section ────────────────────────────────────────────── -->
        <ProcessSection
          title="Nasz proces Social Media"
          :steps="socialProcess"
          background="bg-surface-container-low"
        />

        <!-- ── Why EvolaTec ───────────────────────────────────────────────── -->
        <IntroSection
          heading="Dlaczego EvolaTec jako agencja Social Media?"
          :paragraphs="whyEvolaTecParagraphs"
          image="/assets/marketing-online.webp"
          image-alt="Agencja Social Media Marketing EvolaTec"
          :usps="whyEvolaTec"
        />

        <!-- ── Pricing Table ──────────────────────────────────────────────── -->
        <section id="cennik" class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-4">
              Cennik Social Media Marketing
            </h2>
            <p class="text-center font-body-lg text-on-surface-variant mb-stack-lg">
              Przejrzyste ceny za obsługę social media, Meta Ads i kampanie performance. Budżet reklamowy rozliczany oddzielnie z Meta.
            </p>

            <div class="max-w-2xl mx-auto overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b-2 border-primary">
                    <th class="text-left py-4 px-6 font-headline-md text-primary">Usługa</th>
                    <th class="text-right py-4 px-6 font-headline-md text-primary">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in pricingItems"
                    :key="item.name"
                    class="border-b border-outline-variant/20 hover:bg-surface transition-colors"
                  >
                    <td class="py-4 px-6 font-body-md text-on-surface">{{ item.name }}</td>
                    <td class="py-4 px-6 font-body-md text-primary font-bold text-right">{{ item.price }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="text-center mt-10">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt usług</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ── FAQ Section ────────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o Social Media Marketing"
          :faqs="faqData"
        />

        <!-- ── Related Services ───────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Strona internetowa i development"
          title="Reklama social media działa tylko z właściwą stroną docelową"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Więcej zasięgu i klientów dzięki Social Media Marketing"
      description="EvolaTec tworzy kampanie social media, które zwiększają widoczność, zdobywają klientów i pomagają firmom rosnąć."
      primary-cta="Uruchom Social Media"
      secondary-cta="Zobacz wszystkie ceny"
      primary-href="/kontakt"
      secondary-href="#cennik"
    />

  </div>
</template>
