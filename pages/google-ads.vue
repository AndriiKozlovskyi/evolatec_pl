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
  'Firma uruchamia Google Ads, widzi rosnący wydatek i kilka telefonów, ale nie wie, czy te telefony przyszły z reklamy, czy mimo niej. Tak wygląda większość źle ustawionych kampanii: budżet znika, a związek między wydatkiem a sprzedażą pozostaje zgadywaniem.',
  'Trzy błędy powtarzają się najczęściej. Pierwszy to zbyt szerokie słowa kluczowe — reklama wyświetla się na zapytania, które nigdy nie kończą się zakupem, a każde kliknięcie kosztuje. Drugi to brak śledzenia konwersji, więc nie wiadomo, którą kampanię wyłączyć, a którą zwiększyć. Trzeci to ruch kierowany na stronę główną zamiast na stronę docelową dopasowaną do reklamy, co obniża konwersję i podnosi koszt kliknięcia przez niski Quality Score.',
  'Prowadzimy kampanie odwrotnie: zaczynamy od wdrożenia śledzenia konwersji, zawężamy słowa kluczowe do tych, które realnie sprzedają, i kierujemy ruch na dopasowany landing page. Budżet reklamowy rozliczany jest oddzielnie, bezpośrednio z Google — fee za obsługę jest stałe, więc widzisz osobno, ile płacisz za pracę, a ile za same kliknięcia. Dowiedz się więcej o naszych <a href="/marketing-online" class="text-primary font-semibold hover:underline">usługach marketingu online</a>.',
]

const adsServices = [
  {
    title: 'Strategia i setup kampanii',
    description: 'Struktura konta, kampanii i grup reklam dopasowana do Twojego celu.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Dobór słów kluczowych',
    description: 'Z naciskiem na frazy, które kończą się zapytaniem, nie samym kliknięciem.',
    icon: 'search',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Tworzenie tekstów reklamowych',
    description: 'Tworzenie i testowanie wariantów tekstów — każda reklama mierzona konwersją.',
    icon: 'edit_note',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Śledzenie konwersji',
    description: 'Wdrożenie pomiaru — bez którego optymalizacja jest zgadywaniem.',
    icon: 'conversion_path',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
  {
    title: 'Miesięczna optymalizacja i raportowanie',
    description: 'Korekty stawek, odbiorców i przekazu na podstawie danych konwersji, nie przeczuć.',
    icon: 'tune',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-500',
  },
  {
    title: 'Audyt istniejących kampanii',
    description: 'Przy przejęciu konta — mówimy wprost, co działa, a co przepala budżet.',
    icon: 'manage_search',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-500',
  },
]

const adsBenefits = [
  {
    title: 'Efekt od pierwszego dnia',
    description: 'Google Ads przynosi pierwsze zapytania od dnia uruchomienia kampanii — w odróżnieniu od SEO nie czekasz miesięcy.',
    icon: 'visibility',
    image: '/assets/google-ads.webp',
  },
  {
    title: 'Płacisz za pracę, nie za kliknięcia',
    description: 'Nasze fee jest stałe — nie pobieramy prowizji od budżetu reklamowego, więc nie mamy interesu w zwiększaniu Twoich wydatków na Google.',
    icon: 'person_add',
    image: '/assets/marketing-online.webp',
  },
  {
    title: 'Konwersje mierzone od startu',
    description: 'Każdą kampanię zaczynamy od wdrożenia śledzenia konwersji — wiesz, ile kosztuje zapytanie, a nie tylko kliknięcie.',
    icon: 'analytics',
    image: '/assets/seo-analytics.webp',
  },
  {
    title: 'Konto zostaje Twoje',
    description: 'Współpraca jest bezterminowa i można ją zakończyć z miesięcznym wyprzedzeniem. Konto Google Ads pozostaje Twoją własnością.',
    icon: 'stacked_line_chart',
    image: '/assets/web-analytics.webp',
  },
]

const adsProcess = [
  {
    icon: 'analytics',
    title: 'Audyt i setup',
    description: 'Wdrażamy śledzenie konwersji, budujemy lub porządkujemy strukturę konta i kampanii. Jednorazowo, na początku współpracy.',
  },
  {
    icon: 'campaign',
    title: 'Prowadzenie kampanii',
    description: 'Uruchamiamy reklamy, pilnujemy wydatku i wykluczamy frazy generujące koszt bez konwersji.',
  },
  {
    icon: 'tune',
    title: 'Cotygodniowa optymalizacja',
    description: 'Korygujemy stawki, grupy odbiorców i teksty na podstawie danych konwersji — nie przeczuć.',
  },
  {
    icon: 'summarize',
    title: 'Raport miesięczny',
    description: 'Dostajesz liczby, które mają znaczenie: wydatek, liczba i koszt konwersji oraz plan na kolejny miesiąc.',
  },
]

const campaignTypes = [
  { title: 'Generowanie leadów',    description: 'Więcej zapytań dla usługodawców i firm.',                             icon: 'person_add'    },
  { title: 'Reklama e-commerce',   description: 'Google Shopping i kampanie performance dla sklepów internetowych.',    icon: 'shopping_cart' },
  { title: 'Reklama lokalna',      description: 'Google Ads dla firm lokalnych i regionalnej widoczności.',             icon: 'location_on'   },
  { title: 'Kampanie brandowe',    description: 'Budowanie rozpoznawalności marki i cyfrowego zasięgu.',               icon: 'campaign'      },
]

const whyEvolaTecParagraphs = [
  'Jeśli potrzebujesz zapytań w tym tygodniu — Google Ads daje efekt od pierwszego dnia. Jeśli budujesz pozycję na lata — inwestuj w SEO równolegle. Najzdrowszy układ to jedno i drugie: Google Ads na start i testy, pozycjonowanie jako fundament, który z czasem przejmuje część ruchu płatnego.',
  'Nie pobieramy prowizji od wydanego budżetu reklamowego. Płacisz stałe fee za pracę — nie za to, że wydałeś więcej na kliknięcia.',
  'EvolaTec łączy Google Ads, <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a>, optymalizację konwersji i web design w spójne systemy marketingowe — kampania i landing page to jeden projekt, nie dwa oddzielne zlecenia.',
]

const whyEvolaTec = [
  {
    title: 'Stałe fee, bez prowizji',
    description: 'Nie pobieramy % od budżetu reklamowego — nasze wynagrodzenie nie rośnie, gdy zwiększasz wydatki na kliknięcia.',
    icon: 'ads_click',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Ads i landing page razem',
    description: 'Kampania i strona docelowa to jeden projekt — konwersja nie spada przez niedopasowany landing page.',
    icon: 'code',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Konto zawsze Twoje',
    description: 'Nie przejmujemy dostępu na wyłączność. Współpraca miesięczna i bezterminowa — można zakończyć z miesięcznym wyprzedzeniem.',
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
          heading="Dlaczego większość kampanii Google Ads przepala budżet"
          :paragraphs="introParagraphs"
          image="/assets/google-ads.webp"
          image-alt="Kampanie Google Ads EvolaTec — dashboard reklam i konwersji"
        />

        <!-- ── Services Section ───────────────────────────────────────────── -->
        <ServicesSection
          title="Co zawiera prowadzenie kampanii Google Ads"
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
          title="Jak prowadzimy kampanie Google Ads — miesięczny cykl"
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
          heading="Google Ads czy SEO — co wybrać i dlaczego warto oba"
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
              Podana kwota to fee za pracę agencji — budżet reklamowy rozliczasz oddzielnie, bezpośrednio z Google. Nie pobieramy prowizji od kwoty, którą wydajesz na kliknięcia.
            </p>

            <div class="max-w-2xl mx-auto rounded-2xl bg-white shadow-md overflow-hidden border-2 border-outline-variant/50">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-surface-container-low">
                    <th class="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40">Usługa</th>
                    <th class="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-outline-variant/40">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in pricingItems"
                    :key="item.name"
                    class="border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-low/60 transition-colors duration-150"
                  >
                    <td class="px-6 py-4 text-sm text-on-surface border-r border-outline-variant/30">{{ item.name }}</td>
                    <td class="px-6 py-4 text-sm text-primary font-bold text-right">{{ item.price }}</td>
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
      title="Kampania Google Ads, która wiesz, że działa"
      description="Zaczynamy od śledzenia konwersji — żebyś od pierwszego dnia wiedział, ile kosztuje Cię jedno zapytanie, nie tylko kliknięcie."
      primary-cta="Uruchom Google Ads"
      secondary-cta="Zobacz wszystkie ceny"
      primary-href="/kontakt"
      secondary-href="#cennik"
    />

  </div>
</template>
