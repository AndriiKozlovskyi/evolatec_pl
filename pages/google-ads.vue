<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Agencja Google Ads — kampanie w Google | EvolaTec',
  description: 'Prowadzenie kampanii Google Ads od 1 680 zł netto miesięcznie. Setup, słowa kluczowe, optymalizacja i raporty. Budżet reklamowy rozliczany oddzielnie.',
  ogTitle: 'Agencja Google Ads — kampanie w Google | EvolaTec',
  ogDescription: 'Prowadzenie kampanii Google Ads od 1 680 zł netto miesięcznie. Budżet reklamowy osobno.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/google-ads',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co robi agencja Google Ads?',
    answer: 'Agencja Google Ads planuje, uruchamia i optymalizuje kampanie reklamowe w Google — Search, Display, Shopping i YouTube. Obejmuje to badanie słów kluczowych, tworzenie tekstów reklamowych, śledzenie konwersji i bieżącą optymalizację. Celem jest wygenerowanie jak największej liczby kwalifikowanych kliknięć, leadów lub sprzedaży z dostępnego budżetu.',
  },
  {
    question: 'Jak szybko działają Google Ads?',
    answer: 'Google Ads może przynieść pierwszych odwiedzających i leady już w ciągu kilku dni. W przeciwieństwie do SEO Google Ads daje natychmiastową widoczność. Kampanie są następnie stale optymalizowane na podstawie danych o wynikach.',
  },
  {
    question: 'Ile kosztuje prowadzenie kampanii Google Ads?',
    answer: 'Prowadzenie kampanii Google Ads kosztuje od 1 680 zł netto miesięcznie — to fee za obsługę agencji. Budżet reklamowy płacony Google jest ustalany oddzielnie i zależy od branży, konkurencji i celów. Przed startem kampanii podajemy rekomendację budżetu.',
  },
  {
    question: 'Jaka jest różnica między Google Ads a SEO?',
    answer: 'Google Ads to płatne reklamy, które natychmiast pojawiają się ponad organicznymi wynikami wyszukiwania — płacisz za każde kliknięcie. SEO zapewnia organiczne pozycje bez kosztów za kliknięcie, ale efekty pojawiają się po miesiącach. W praktyce oba kanały się uzupełniają: Ads generują szybkie leady, SEO buduje długofalową stabilną widoczność.',
  },
  {
    question: 'Dla jakich firm nadają się Google Ads?',
    answer: 'Google Ads nadają się dla niemal każdej branży, w której potencjalni klienci aktywnie szukają rozwiązań: lokalni usługodawcy, sklepy internetowe, firmy B2B, startupy i dostawcy usług. Szczególnie skuteczne, gdy Twoja oferta rozwiązuje konkretny problem, a ceny za kliknięcie są adekwatne do wartości zamówienia.',
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
      priceRange: '1680 zł – 25200 zł',
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
      description: 'Prowadzenie kampanii Google Ads: strategia, setup, dobór słów kluczowych, teksty reklam, śledzenie konwersji oraz miesięczna optymalizacja i raportowanie.',
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

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/google-ads' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
  ],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'Od razu',      label: 'Widoczność',         icon: 'visibility'  },
  { value: 'Więcej leadów', label: 'Generowanie',       icon: 'person_add'  },
  { value: 'Performance',  label: 'Fokus na wynikach',  icon: 'ads_click'   },
  { value: 'Mierzalne',    label: 'Wyniki',             icon: 'analytics'   },
]

const introParagraphs = [
  'Google Ads to jedna z najskuteczniejszych metod, żeby natychmiast zaistnieć i precyzyjnie dotrzeć do nowych klientów.',
  'Firmy mogą być widoczne dokładnie wtedy, gdy potencjalni klienci aktywnie szukają usług, produktów lub rozwiązań.',
  'Jako agencja Google Ads EvolaTec tworzy kampanie oparte na danych, które zwiększają zasięg, generują leady i podnoszą sprzedaż. Dowiedz się więcej o naszych <a href="/marketing-online" class="text-primary font-semibold hover:underline">usługach marketingu online</a>.',
]

const adsServices = [
  {
    title: 'Reklamy w wyszukiwarce Google',
    description: 'Widoczność przy trafnych zapytaniach dzięki reklamom o wysokiej konwersji.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Reklamy Display',
    description: 'Kampanie banerowe zwiększające rozpoznawalność marki i zasięg.',
    icon: 'image',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Google Shopping Ads',
    description: 'Kampanie performance dla sklepów internetowych i projektów e-commerce.',
    icon: 'shopping_cart',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Kampanie remarketingowe',
    description: 'Odzyskiwanie odwiedzających przez precyzyjnie targetowane reklamy.',
    icon: 'refresh',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Optymalizacja konwersji',
    description: 'Optymalizacja reklam, landing page\'ów i ścieżki użytkownika.',
    icon: 'conversion_path',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Doradztwo Google Ads',
    description: 'Strategiczne doradztwo dla firm i kampanii performance.',
    icon: 'support_agent',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
]

const adsBenefits = [
  {
    title: 'Natychmiastowa widoczność',
    description: 'Twoje reklamy pojawiają się od razu przy trafnych zapytaniach.',
    icon: 'visibility',
    image: '/assets/google-ads.webp',
  },
  {
    title: 'Kwalifikowane leady',
    description: 'Targetowane reklamy docierają do potencjalnych klientów.',
    icon: 'person_add',
    image: '/assets/marketing-online.webp',
  },
  {
    title: 'Mierzalne wyniki',
    description: 'Kliknięcia, leady i konwersje są dokładnie analizowane.',
    icon: 'analytics',
    image: '/assets/seo-analytics.webp',
  },
  {
    title: 'Skalowalny wzrost',
    description: 'Skuteczne kampanie można stale skalować.',
    icon: 'stacked_line_chart',
    image: '/assets/web-analytics.webp',
  },
]

const adsProcess = [
  {
    icon: 'analytics',
    title: 'Analiza i strategia',
    description: 'Analizujemy Twoją branżę, grupę docelową i konkurencję.',
  },
  {
    icon: 'search',
    title: 'Dobór słów kluczowych',
    description: 'Wybieramy trafne frazy wyszukiwania o wysokim potencjale.',
  },
  {
    icon: 'campaign',
    title: 'Tworzenie kampanii',
    description: 'Tworzymy profesjonalne reklamy, grupy odbiorców i landing page\'e.',
  },
  {
    icon: 'tune',
    title: 'Optymalizacja i skalowanie',
    description: 'Stale poprawiamy kampanię dla lepszej efektywności i niższych kosztów.',
  },
]

const campaignTypes = [
  { title: 'Generowanie leadów',    description: 'Więcej zapytań dla usługodawców i firm.',                             icon: 'person_add'    },
  { title: 'Reklama e-commerce',   description: 'Google Shopping i kampanie performance dla sklepów internetowych.',    icon: 'shopping_cart' },
  { title: 'Reklama lokalna',      description: 'Google Ads dla firm lokalnych i regionalnej widoczności.',             icon: 'location_on'   },
  { title: 'Kampanie brandowe',    description: 'Budowanie rozpoznawalności marki i cyfrowego zasięgu.',               icon: 'campaign'      },
]

const whyEvolaTecParagraphs = [
  'Skuteczna reklama Google to nie tylko reklamy.',
  'Kluczowe są strategia, doświadczenie użytkownika, landing page\'e i ciągła optymalizacja.',
  'EvolaTec łączy Google Ads, <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a>, optymalizację konwersji i nowoczesny web design w wydajne systemy marketingowe.',
]

const whyEvolaTec = [
  {
    title: 'Fokus na wynikach',
    description: 'Celowane kampanie skoncentrowane na efektach.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Ekspertyza techniczna',
    description: 'Połączenie marketingu, SEO i developmentu.',
    icon: 'code',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Skalowalne kampanie',
    description: 'Systemy, które rosną długofalowo.',
    icon: 'stacked_line_chart',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
]

const pricingItems = [
  { name: 'Doradztwo Google Ads',      price: 'od 380 zł/h'          },
  { name: 'Prowadzenie Google Ads',    price: 'od 1 680 zł/mies.'    },
  { name: 'Kreacje i grafiki',         price: 'od 630 zł'             },
  { name: 'Raport miesięczny',         price: 'od 420 zł/mies.'      },
  { name: 'Landing page',             price: 'od 2 100 zł'           },
  { name: 'Optymalizacja SEO',        price: 'od 1 260 zł'           },
]

const relatedServices = [
  {
    icon: 'article',
    title: 'Landing page',
    description: 'Każde kliknięcie kosztuje — konwersyjna landing page sprawia, że odwiedzający stają się zapytaniami, a nie odskakują.',
    price: 'od 2 100 zł netto',
    href: '/landing-page',
  },
  {
    icon: 'language',
    title: 'Strona firmowa',
    description: 'Twoje Ads generują ruch — profesjonalna strona firmowa zamienia go w klientów. Performance-first, gotowa na SEO.',
    price: 'od 2 100 zł netto',
    href: '/strona-internetowa',
  },
  {
    icon: 'shopping_bag',
    title: 'Sklep internetowy',
    description: 'Google Shopping i Performance Max osiągają pełny potencjał dopiero z szybkim, dobrze zbudowanym sklepem.',
    price: 'od 4 200 zł netto',
    href: '/sklep-internetowy',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Profesjonalna agencja Google Ads i SEA"
      title="Agencja Google Ads: reklamy, które przynoszą kliknięcia i klientów"
      description="EvolaTec tworzy skuteczne kampanie Google Ads, które generują kwalifikowanych odwiedzających, więcej zapytań i mierzalny wzrost."
      primaryCTA="Zapytaj o Google Ads"
      secondaryCTA="Zobacz cennik"
      primary-href="/kontakt"
      secondary-href="#cennik"
      :stats="heroStats"
    />

    <main id="main-content">
      <article>

        <!-- ── Intro Section ──────────────────────────────────────────────── -->
        <IntroSection
          heading="Dlaczego Google Ads jest ważne dla firm"
          :paragraphs="introParagraphs"
          image="/assets/google-ads.webp"
          image-alt="Kampanie Google Ads EvolaTec — dashboard reklam i konwersji"
        />

        <!-- ── Services Section ───────────────────────────────────────────── -->
        <ServicesSection
          title="Nasze usługi Google Ads"
          variant="centered"
          :services="adsServices"
          learnMoreLabel="Dowiedz się więcej"
          background="bg-surface-container-low"
        />

        <!-- ── Benefits Section ───────────────────────────────────────────── -->
        <BenefitsSection
          title="Zalety profesjonalnych kampanii Google Ads"
          :benefits="adsBenefits"
        />

        <!-- ── Process Section ────────────────────────────────────────────── -->
        <ProcessSection
          title="Nasz proces Google Ads"
          :steps="adsProcess"
          background="bg-surface-container-low"
        />

        <!-- ── Campaign Types ─────────────────────────────────────────────── -->
        <DarkCardsSection
          title="Reklama Google dla różnych celów"
          :cards="campaignTypes"
        />

        <!-- ── Why EvolaTec ───────────────────────────────────────────────── -->
        <IntroSection
          heading="Dlaczego EvolaTec jako agencja Google Ads?"
          :paragraphs="whyEvolaTecParagraphs"
          image="/assets/marketing-online.webp"
          image-alt="Performance marketing Google Ads EvolaTec"
          :usps="whyEvolaTec"
        />

        <!-- ── Pricing Table ──────────────────────────────────────────────── -->
        <section id="cennik" class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-4">
              Cennik obsługi Google Ads
            </h2>
            <p class="text-center font-body-lg text-on-surface-variant mb-stack-lg">
              Przejrzyste ceny za Google Ads, SEA i performance marketing. Budżet reklamowy rozliczany oddzielnie z Google.
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
          title="Najczęściej zadawane pytania o Google Ads"
          :faqs="faqData"
        />

        <!-- ── Related Services ───────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Strona internetowa i development"
          title="Google Ads działa tylko z właściwą stroną docelową"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Więcej klientów dzięki profesjonalnej reklamie Google"
      description="EvolaTec tworzy kampanie Google Ads, które zwiększają widoczność, generują leady i pomagają firmom rosnąć."
      primary-cta="Uruchom Google Ads"
      secondary-cta="Zobacz wszystkie ceny"
      primary-href="/kontakt"
      secondary-href="#cennik"
    />

  </div>
</template>
