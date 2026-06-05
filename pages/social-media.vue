<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Marketing social media dla firm | EvolaTec',
  description: 'Prowadzenie social media i kampanii Meta Ads od 1 260 zł netto miesięcznie. Kalendarz treści, publikacje, community management i raporty. Budżet Meta oddzielnie.',
  ogTitle: 'Marketing social media dla firm | EvolaTec',
  ogDescription: 'Prowadzenie social media i kampanii Meta Ads od 1 260 zł netto miesięcznie. Kalendarz treści, publikacje, community management. Budżet Meta osobno.',
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
      '@id': 'https://evolatec.pl/social-media#webpage',
      url: 'https://evolatec.pl/social-media',
      name: 'Marketing social media dla firm | EvolaTec',
      description: 'Prowadzenie social media i kampanii Meta Ads od 1 260 zł netto miesięcznie. Kalendarz treści, publikacje, community management i raporty. Budżet Meta oddzielnie.',
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
      '@id': 'https://evolatec.pl/social-media#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Marketing internetowy', item: 'https://evolatec.pl/marketing-online' },
        { '@type': 'ListItem', position: 3, name: 'Marketing social media', item: 'https://evolatec.pl/social-media' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/social-media#service',
      name: 'Marketing social media',
      serviceType: 'Prowadzenie social media i Meta Ads',
      description: 'Prowadzenie social media na Facebooku i Instagramie: kalendarz treści, tworzenie i publikacja postów, community management, kampanie Meta Ads oraz miesięczny raport. Od 1 260 zł netto miesięcznie, budżet Meta rozliczany oddzielnie.',
      url: 'https://evolatec.pl/social-media',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        name: 'Prowadzenie social media',
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak prowadzimy social media — miesięczny cykl',
  description: 'Miesięczny cykl prowadzenia social media w EvolaTec: od planowania treści po raport.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Planowanie', text: 'Ustalamy tematy, przekaz i kalendarz treści na nadchodzący miesiąc pod cel biznesowy.' },
    { '@type': 'HowToStep', position: 2, name: 'Produkcja treści', text: 'Przygotowujemy grafiki i teksty postów, gotowe do publikacji.' },
    { '@type': 'HowToStep', position: 3, name: 'Publikacja i community management', text: 'Publikujemy zgodnie z harmonogramem, odpowiadamy na komentarze i wiadomości, prowadzimy płatne kampanie Meta.' },
    { '@type': 'HowToStep', position: 4, name: 'Raport miesięczny', text: 'Podsumowujemy zasięg, zaangażowanie i efekty kampanii oraz ustalamy kierunek na kolejny miesiąc.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/social-media' }],
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
  { value: 'od 1 260 zł', label: 'Fee miesięczne netto',   icon: 'payments'     },
  { value: 'FB i IG',     label: 'Organika i Meta Ads',    icon: 'thumb_up'     },
  { value: 'Miesięcznie', label: 'Bez długich umów',       icon: 'event_repeat' },
  { value: 'Budżet osobno', label: 'Meta Ads rozliczane',  icon: 'account_balance_wallet' },
]

const includedItems = [
  { icon: 'calendar_month', label: 'Kalendarz treści miesięczny'     },
  { icon: 'image',          label: 'Tworzenie i publikacja postów'   },
  { icon: 'forum',          label: 'Community management'            },
  { icon: 'ads_click',      label: 'Kampanie Meta Ads (FB + IG)'     },
  { icon: 'insights',       label: 'Raport miesięczny'               },
]

const compareRows = [
  { label: 'Zasięg',         org: 'Kilka procent fanów',       paid: 'Nowi odbiorcy spoza fanów'    },
  { label: 'Koszt',          org: 'W ramach fee',              paid: 'Budżet Meta osobno'           },
  { label: 'Pierwsze efekty', org: 'Wolno, miesiącami',        paid: 'Dni–tygodnie'                 },
  { label: 'Główna rola',    org: 'Wiarygodność i lojalność',  paid: 'Pozyskiwanie zasięgu i leadów' },
  { label: 'Najlepsze dla',  org: 'Budowania marki w czasie',  paid: 'Promocji ofert i dotarcia'    },
]

const processSteps = [
  {
    icon: 'event_note',
    title: 'Planowanie',
    description: 'Ustalamy tematy, przekaz i kalendarz treści na nadchodzący miesiąc pod cel biznesowy.',
  },
  {
    icon: 'palette',
    title: 'Produkcja treści',
    description: 'Przygotowujemy grafiki i teksty postów, gotowe do publikacji.',
  },
  {
    icon: 'forum',
    title: 'Publikacja i community management',
    description: 'Publikujemy zgodnie z harmonogramem, odpowiadamy na komentarze i wiadomości, prowadzimy płatne kampanie Meta.',
  },
  {
    icon: 'summarize',
    title: 'Raport miesięczny',
    description: 'Podsumowujemy zasięg, zaangażowanie i efekty kampanii oraz ustalamy kierunek na kolejny miesiąc.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Marketing social media"
      title="Marketing social media, który buduje markę i przynosi klientów"
      description="Prowadzenie Facebooka i Instagrama — organika i płatne kampanie Meta Ads — od 1 260 zł netto miesięcznie. Kalendarz treści, community management i raporty. Budżet Meta osobno."
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
            <li aria-current="page" class="text-on-surface font-medium">Marketing social media</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ── Section 1: Profile nie sprzedają ──────────────────────────── -->
        <section
          aria-labelledby="section-problem"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <h2
                  id="section-problem"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Dlaczego firmowe profile w social media nie sprzedają
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Firma zakłada profil na Facebooku i Instagramie, publikuje regularnie, zbiera kilka polubień od znajomych — i nic z tego nie wynika. To najczęstszy obraz firmowego social media: aktywność jest, zapytań nie ma. Problem nie leży w tym, że „social media nie działa", tylko w tym, jak jest prowadzone.
                  </p>
                  <p>
                    Trzy rzeczy zwykle zawodzą. Posty powstają bez planu i przekazu, więc nie budują żadnej spójnej historii marki. Trafiają wyłącznie do obecnych obserwujących, bo bez płatnego zasięgu organiczny zasięg Facebooka spadł do kilku procent fanów. I nikt nie mierzy, czy te treści w ogóle przekładają się na ruch lub zapytania — publikacja jest celem samym w sobie.
                  </p>
                  <p>
                    Prowadzimy social media jako narzędzie sprzedaży, nie kronikę firmy. Zaczynamy od strategii i kalendarza treści, łączymy organikę z płatnymi kampaniami Meta Ads, żeby treść docierała poza grono obecnych fanów, i co miesiąc raportujemy efekty. <strong class="text-on-surface">Budżet reklamowy Meta rozliczany jest oddzielnie, bezpośrednio z Meta — fee za obsługę jest stałe.</strong>
                  </p>
                </div>
              </div>

              <div data-reveal="right" class="rounded-2xl overflow-hidden">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=640&h=420&fit=crop&auto=format&q=80"
                  alt="Smartfon z otwartymi profilami firmowymi na Facebooku i Instagramie — zasięg organiczny i kampania Meta Ads"
                  width="640"
                  height="420"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: Co zawiera ─────────────────────────────────────── -->
        <section
          aria-labelledby="section-included"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

              <div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">thumb_up</span>
                  Treść plus jej promocja
                </span>

                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co zawiera prowadzenie social media
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    Prowadzenie social media to praca miesięczna obejmująca i treść, i jej promocję. W stałym fee mieści się komplet, dzięki któremu profil żyje i dociera dalej niż do obecnych obserwujących.
                  </p>
                  <p>
                    Łączymy treść organiczną z płatną dystrybucją, bo sam organiczny zasięg dziś nie wystarcza. Spójny przekaz wizualny zaczyna się od
                    <NuxtLink to="/branding" class="text-primary font-semibold hover:underline">identyfikacji marki</NuxtLink>
                    — jeśli jej nie masz, najpierw warto zająć się brandingiem.
                  </p>
                </div>
              </div>

              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li
                  v-for="item in includedItems"
                  :key="item.label"
                  class="flex items-center gap-3 bg-white rounded-xl border border-outline-variant/30 px-5 py-4 ambient-shadow"
                >
                  <div class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span class="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">{{ item.icon }}</span>
                  </div>
                  <span class="text-sm font-semibold text-on-surface leading-snug">{{ item.label }}</span>
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
              Ile kosztuje prowadzenie social media — fee i budżet Meta
            </h2>

            <div class="grid sm:grid-cols-2 gap-4 mb-8">
              <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <p class="text-on-surface-variant mb-1 text-sm">Fee za obsługę</p>
                <p class="font-display text-3xl font-black text-primary mb-1">od 1 260 zł netto</p>
                <p class="text-sm text-on-surface-variant">miesięcznie · praca agencji</p>
              </div>
              <div class="rounded-2xl border border-outline-variant/40 bg-white p-6">
                <p class="text-on-surface-variant mb-1 text-sm">Budżet reklamowy Meta</p>
                <p class="font-display text-3xl font-black text-on-surface mb-1">od kilkuset zł</p>
                <p class="text-sm text-on-surface-variant">miesięcznie · płacony Meta</p>
              </div>
            </div>

            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                <strong class="text-on-surface">Prowadzenie social media kosztuje od 1 260 zł netto miesięcznie — budżet Meta Ads rozliczany oddzielnie.</strong> Podana kwota to fee za pracę agencji: strategię, treści, prowadzenie profili i raportowanie.
              </p>
              <p>
                Budżet reklamowy Meta rozliczany jest oddzielnie, bezpośrednio z Meta — ustalasz go samodzielnie i płacisz platformie, nie nam. Dla firmy zaczynającej z płatną promocją rozsądny próg to kilkaset złotych miesięcznie.
              </p>
              <p>
                Nasze fee nie rośnie wraz z budżetem przeznaczonym na reklamy — nie pobieramy prowizji od kwoty wydanej w Meta.
              </p>
            </div>

            <div class="mt-10">
              <NuxtLink to="/kalkulator-kosztow">
                <BaseButton variant="outline" size="md">Oblicz koszt usług</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ── Section 4: Organika vs płatne ─────────────────────────────── -->
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
                Organika czy płatne kampanie Meta — co działa dla firmy
              </h2>
              <p class="text-on-surface-variant">
                Organiczne posty i płatne kampanie Meta to nie alternatywy, tylko dwie warstwy tej samej pracy. Organika buduje wiarygodność i utrzymuje obecnych odbiorców; płatne kampanie docierają do nowych.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie organiki z płatnymi kampaniami Meta</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/4" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Organika</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Płatne kampanie Meta</th>
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
                    <td class="p-4 text-center text-on-surface-variant">{{ row.org }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.paid }}</td>
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
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Organika</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.org }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Płatne Meta</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.paid }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Dla większości firm właściwy układ to jedno i drugie: organika utrzymuje spójny wizerunek, a płatne kampanie Meta dowożą zasięg i zapytania. Jeśli budżet jest mały, lepiej zacząć od kilku dobrze wypromowanych treści niż od dużej liczby postów, których nikt nie zobaczy.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak prowadzimy"
          title="Jak prowadzimy social media — miesięczny cykl"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o marketing w social media"
          :faqs="faqData"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Social media, które buduje markę i sprzedaje"
      description="Opisz firmę i cel — zaproponujemy plan treści i kampanii oraz stałe fee przed startem."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
