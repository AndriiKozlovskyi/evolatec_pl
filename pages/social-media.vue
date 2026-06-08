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
    question: 'Ile kosztuje prowadzenie social media dla firmy?',
    answer: 'Prowadzenie social media kosztuje od 1 260 zł netto miesięcznie — to fee za obsługę agencji. Budżet reklamowy Meta jest rozliczany oddzielnie, bezpośrednio z Meta, i ustalasz go samodzielnie. Cena obejmuje kalendarz treści, tworzenie i publikację postów, community management, kampanie Meta Ads oraz miesięczny raport.',
  },
  {
    question: 'Organika czy płatne kampanie Meta — co działa lepiej?',
    answer: 'Organika buduje wiarygodność i utrzymuje obecnych odbiorców, ale jej zasięg bez budżetu spadł do kilku procent fanów. Płatne kampanie Meta docierają do nowych odbiorców i przynoszą efekty w dni, a nie miesiące. Dla większości firm najlepiej działa połączenie obu: organika dla spójnego wizerunku, płatne kampanie dla zasięgu i zapytań.',
  },
  {
    question: 'Jaki budżet na reklamę na Facebooku i Instagramie jest potrzebny?',
    answer: 'Dla firmy zaczynającej z płatną promocją rozsądny próg to kilkaset złotych miesięcznie budżetu Meta, żeby kampania miała z czego docierać do nowych odbiorców. Budżet ustalasz samodzielnie i płacisz bezpośrednio Meta, niezależnie od fee za obsługę. W bardziej konkurencyjnych branżach próg jest wyższy i ustalamy go przed startem.',
  },
  {
    question: 'Czy budżet reklamowy Meta jest wliczony w cenę obsługi?',
    answer: 'Nie — fee za obsługę i budżet reklamowy Meta to dwie osobne kwoty. Płacisz nam stałe miesięczne wynagrodzenie za prowadzenie social media, a budżet reklamowy trafia bezpośrednio do Meta. Dzięki temu nie pobieramy prowizji od wydanego budżetu, a nasze wynagrodzenie nie rośnie wraz z kwotą wydaną na reklamy.',
  },
  {
    question: 'Które social media są najlepsze dla firmy B2C?',
    answer: 'Dla większości firm B2C w Polsce podstawą są Facebook i Instagram — razem docierają do najszerszej grupy odbiorców i dzielą jeden system reklamowy Meta Ads. Instagram lepiej sprawdza się dla marek wizualnych i młodszej grupy, Facebook dla lokalnych biznesów i szerszej grupy wiekowej. Wybór platformy ustalamy na podstawie tego, gdzie realnie są Twoi klienci, a nie gdzie jest najmodniej.',
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
  'Firma zakłada profil na Facebooku i Instagramie, publikuje regularnie, zbiera kilka polubień od znajomych — i nic z tego nie wynika. To najczęstszy obraz firmowego social media: aktywność jest, zapytań nie ma. Problem nie leży w tym, że „social media nie działa", tylko w tym, jak jest prowadzone.',
  'Trzy rzeczy zwykle zawodzą. Posty powstają bez planu i przekazu, więc nie budują żadnej spójnej historii marki. Trafiają wyłącznie do obecnych obserwujących, bo bez płatnego zasięgu organiczny zasięg Facebooka spadł do kilku procent fanów. I nikt nie mierzy, czy te treści w ogóle przekładają się na ruch lub zapytania — publikacja jest celem samym w sobie.',
  'Prowadzimy social media jako narzędzie sprzedaży, nie kronikę firmy. Zaczynamy od strategii i kalendarza treści, łączymy organikę z płatnymi kampaniami Meta Ads, żeby treść docierała poza grono obecnych fanów, i co miesiąc raportujemy efekty. Budżet reklamowy Meta rozliczany jest oddzielnie, bezpośrednio z Meta — fee za obsługę jest stałe.',
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
    title: 'Kalendarz treści miesięczny',
    description: 'Zaplanowane tematy i przekaz na cały miesiąc — nie posty tworzone z dnia na dzień.',
    icon: 'thumb_up',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-500',
  },
  {
    title: 'Tworzenie i publikacja postów',
    description: 'Grafika, tekst i harmonogram publikacji — treści gotowe do pojawienia się na profilu.',
    icon: 'photo_camera',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    borderColor: 'border-pink-500',
  },
  {
    title: 'Community management',
    description: 'Odpowiedzi na komentarze i wiadomości, moderacja profilu na bieżąco.',
    icon: 'hub',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    borderColor: 'border-indigo-500',
  },
  {
    title: 'Kampanie Meta Ads',
    description: 'Płatna promocja na Facebooku i Instagramie poza grono obecnych fanów.',
    icon: 'edit_square',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    borderColor: 'border-orange-500',
  },
  {
    title: 'Raport miesięczny',
    description: 'Zasięg, zaangażowanie i efekty kampanii w liczbach — co miesiąc, bez zaskoczeń.',
    icon: 'manage_accounts',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-500',
  },
  {
    title: 'Strategia i targeting',
    description: 'Dobór grupy docelowej, przekaz i platforma dopasowane do tego, gdzie są Twoi klienci.',
    icon: 'analytics',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-500',
  },
]

const socialProcess = [
  {
    icon: 'analytics',
    title: 'Planowanie',
    description: 'Ustalamy tematy, przekaz i kalendarz treści na nadchodzący miesiąc pod cel biznesowy.',
  },
  {
    icon: 'brush',
    title: 'Produkcja treści',
    description: 'Przygotowujemy grafiki i teksty postów, gotowe do publikacji.',
  },
  {
    icon: 'campaign',
    title: 'Publikacja i community management',
    description: 'Publikujemy zgodnie z harmonogramem, odpowiadamy na komentarze i wiadomości, prowadzimy płatne kampanie Meta.',
  },
  {
    icon: 'tune',
    title: 'Raport miesięczny',
    description: 'Podsumowujemy zasięg, zaangażowanie i efekty kampanii oraz ustalamy kierunek na kolejny miesiąc.',
  },
]

const whyEvolaTecParagraphs = [
  'Organiczne posty i płatne kampanie Meta to nie alternatywy, tylko dwie warstwy tej samej pracy. Organika buduje wiarygodność i utrzymuje obecnych odbiorców; płatne kampanie docierają do nowych. Sama organika dziś rzadko skaluje sprzedaż, bo zasięg bez budżetu jest minimalny.',
  'Dla większości firm właściwy układ to jedno i drugie: organika utrzymuje spójny wizerunek, a płatne kampanie Meta dowożą zasięg i zapytania. Jeśli budżet jest mały, lepiej zacząć od kilku dobrze wypromowanych treści niż od dużej liczby postów, których nikt nie zobaczy.',
  'EvolaTec łączy obie warstwy — <a href="/marketing-online" class="text-primary font-semibold hover:underline">performance marketing</a>, content i <a href="/seo" class="text-primary font-semibold hover:underline">SEO</a> — w jeden spójny system, który działa na wszystkich etapach lejka.',
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
      badge="Prowadzenie social media jako narzędzie sprzedaży"
      title="Social media jako narzędzie sprzedaży — nie kronika firmy"
      description="Prowadzimy social media ze strategią, kalendarzem treści i kampaniami Meta Ads. Budżet reklamowy rozliczany oddzielnie — fee za prowadzenie jest stałe."
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
          heading="Dlaczego firmowe profile w social media nie sprzedają"
          :paragraphs="introParagraphs"
          image="/assets/social-media.webp"
          image-alt="Social Media Marketing EvolaTec — kampanie Meta Ads i content"
        />

        <!-- ── Platforms Section ──────────────────────────────────────────── -->
        <section class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="text-center max-w-2xl mx-auto mb-stack-lg">
              <h2 class="font-headline-lg text-headline-lg text-primary mb-4">
                Facebook, Instagram i Meta Ads — jedna spójna strategia
              </h2>
              <p class="font-body-lg text-on-surface-variant">
                Łączymy organikę z płatnymi kampaniami, żeby treść docierała poza grono obecnych fanów.
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
          title="Co zawiera prowadzenie social media"
          variant="centered"
          :services="socialServices"
          learnMoreLabel="Dowiedz się więcej"
          background="bg-surface"
        />

        <!-- ── Process Section ────────────────────────────────────────────── -->
        <ProcessSection
          title="Jak prowadzimy social media — miesięczny cykl"
          :steps="socialProcess"
          background="bg-surface-container-low"
        />

        <!-- ── Why EvolaTec ───────────────────────────────────────────────── -->
        <IntroSection
          heading="Organika czy płatne kampanie Meta — dlaczego potrzebujesz obu"
          :paragraphs="whyEvolaTecParagraphs"
          image="/assets/marketing-online.webp"
          image-alt="Agencja Social Media Marketing EvolaTec"
          :usps="whyEvolaTec"
        />

        <!-- ── Pricing Table ──────────────────────────────────────────────── -->
        <section id="cennik" class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <h2 class="font-headline-lg text-headline-lg text-primary text-center mb-4">
              Ile kosztuje prowadzenie social media — fee i budżet Meta
            </h2>
            <p class="text-center font-body-lg text-on-surface-variant mb-stack-lg">
              Podane kwoty to fee za pracę agencji: strategię, treści, prowadzenie profili i raportowanie. Budżet reklamowy Meta rozliczany jest oddzielnie, bezpośrednio z Meta — nie pobieramy prowizji od wydanego budżetu.
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
          title="Najczęściej zadawane pytania o marketing w social media"
          :faqs="faqData"
        />

        <!-- ── Related Services ───────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Strona internetowa i development"
          title="Social media bez dobrej strony docelowej to budżet wyrzucony w błoto"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Prowadzenie social media, które działa — nie kronika firmy"
      description="Współpraca jest miesięczna i bezterminowa. Konta i profile pozostają Twoją własnością — treści i dostępy przekazujemy na bieżąco."
      primary-cta="Uruchom Social Media"
      secondary-cta="Zobacz wszystkie ceny"
      primary-href="/kontakt"
      secondary-href="#cennik"
    />

  </div>
</template>
