<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Identyfikacja wizualna i projekt logo dla firm | EvolaTec',
  description: 'Branding i identyfikacja wizualna: logo w 3 koncepcjach, paleta kolorów, typografia, księga znaku, pliki AI, SVG, PNG, PDF. Wycena indywidualna.',
  ogTitle: 'Identyfikacja wizualna i projekt logo dla firm | EvolaTec',
  ogDescription: 'Branding i identyfikacja wizualna: logo w 3 koncepcjach, paleta, typografia, księga znaku, pliki AI, SVG, PNG, PDF. Wycena indywidualna.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/branding',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje projekt logo i identyfikacji wizualnej?',
    answer: 'Branding wyceniamy indywidualnie w zależności od zakresu — od samego logo po pełną księgę identyfikacji. Samo logo z plikami źródłowymi to inny koszt niż logo wraz z paletą kolorów, typografią, systemem znaku i księgą identyfikacji. Wycena jest bezpłatna i ustalana przed startem; jeśli zamawiasz też stronę, identyfikację i projekt wyceniamy łącznie.',
  },
  {
    question: 'Czym różni się logo od pełnej identyfikacji wizualnej?',
    answer: 'Logo to pojedynczy znak. Pełna identyfikacja wizualna to system: logo, paleta kolorów, typografia i zasady ich stosowania, spięte w księgę znaku. Samo logo wystarcza na start, ale to system sprawia, że firma wygląda spójnie na stronie, w mediach społecznościowych i na dokumentach — bez dobierania kolorów na nowo za każdym razem.',
  },
  {
    question: 'Co zawiera księga znaku?',
    answer: 'Księga znaku to dokument z zasadami stosowania marki: wersje logo i ich dozwolone użycia, paleta kolorów z wartościami, typografia oraz przykłady poprawnego i błędnego zastosowania. Dzięki niej każdy — projektant, drukarnia, osoba prowadząca social media — używa marki spójnie, nawet jeśli pracuje nad nią po raz pierwszy.',
  },
  {
    question: 'W jakich formatach dostarczane jest logo?',
    answer: 'Logo dostarczamy w formatach AI, SVG, PNG i PDF. Pliki wektorowe (AI, SVG) pozwalają skalować znak do dowolnego rozmiaru bez utraty jakości — od wizytówki po baner — a PNG i PDF są gotowe do użycia w sieci i dokumentach. Pliki źródłowe i prawa do znaku pozostają po Twojej stronie.',
  },
  {
    question: 'Ile koncepcji logo otrzymam?',
    answer: 'Projekt logo dostarczamy w 3 koncepcjach — trzech różnych kierunkach do wyboru, a nie jednej propozycji do przyjęcia lub odrzucenia. Wybierasz kierunek najbliższy Twojej wizji, a my dopiero ten rozwijamy w pełny system. Taki układ skraca proces, bo decyzja o kierunku zapada przed dopracowywaniem szczegółów.',
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
      address: { '@type': 'PostalAddress', addressLocality: 'Wrocław', addressCountry: 'PL' },
      email: 'team@evolatec.pl',
      areaServed: { '@type': 'Country', name: 'Poland' },
      sameAs: ['https://g.page/evolatec-pl', 'https://www.linkedin.com/company/evolatec'],
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
      '@id': 'https://evolatec.pl/branding#webpage',
      url: 'https://evolatec.pl/branding',
      name: 'Identyfikacja wizualna i projekt logo dla firm | EvolaTec',
      description: 'Branding i identyfikacja wizualna: logo w 3 koncepcjach, paleta kolorów, typografia, księga znaku, pliki AI, SVG, PNG, PDF. Wycena indywidualna.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-intro'] },
      breadcrumb: { '@id': 'https://evolatec.pl/branding#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/branding#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Projektowanie stron internetowych', item: 'https://evolatec.pl/projektowanie-stron' },
        { '@type': 'ListItem', position: 3, name: 'Branding i identyfikacja wizualna', item: 'https://evolatec.pl/branding' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/branding#service',
      name: 'Branding i identyfikacja wizualna',
      serviceType: 'Projektowanie logo i identyfikacji wizualnej',
      description: 'Projekt logo w 3 koncepcjach, system identyfikacji wizualnej, paleta kolorów, typografia, księga znaku oraz pliki w formatach AI, SVG, PNG i PDF. Wycena indywidualna.',
      url: 'https://evolatec.pl/branding',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/branding#faq',
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
  name: 'Jak powstaje identyfikacja wizualna — proces projektowy',
  description: 'Proces tworzenia identyfikacji wizualnej w EvolaTec: od briefu do księgi znaku i przekazania plików.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief i research', text: 'Poznajemy firmę, branżę i konkurencję, ustalamy charakter, jaki marka ma komunikować.' },
    { '@type': 'HowToStep', position: 2, name: 'Koncepcje logo', text: 'Przedstawiamy 3 różne kierunki, z których wybierasz ten najbliższy.' },
    { '@type': 'HowToStep', position: 3, name: 'Dopracowanie i system', text: 'Rozwijamy wybraną koncepcję w pełny system: kolory, typografia, zasady użycia.' },
    { '@type': 'HowToStep', position: 4, name: 'Księga znaku i przekazanie', text: 'Dostarczamy księgę znaku i komplet plików w formatach AI, SVG, PNG i PDF.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/branding' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: '3 koncepcje', label: 'Logo do wyboru',       icon: 'brush'         },
  { value: 'Księga',      label: 'Zasady marki',         icon: 'menu_book'     },
  { value: 'Wektor',      label: 'AI · SVG · PNG · PDF', icon: 'shapes'        },
  { value: 'Bezpłatna',   label: 'Wycena indywidualna',  icon: 'request_quote' },
]

const introParagraphs = [
  'Klient wyrabia sobie zdanie o firmie, zanim przeczyta ofertę — na podstawie logo, kolorów i tego, czy wszystko do siebie pasuje. Marka, która na wizytówce wygląda inaczej niż na stronie, a na Facebooku jeszcze inaczej, wysyła jeden sygnał: tu się nie przykłada do szczegółów. A jeśli nie do szczegółów wizualnych, to do jakich.',
  'Najczęstszy problem małych firm to nie brak logo, tylko brak systemu. Logo powstało kiedyś w generatorze albo u znajomego, kolory dobierane są za każdym razem na nowo, a typografia zależy od tego, w czym akurat ktoś robił grafikę. Efekt jest niespójny i wygląda taniej, niż firma realnie jest.',
  'Identyfikacja wizualna porządkuje to raz: jedno logo, jedna paleta, jedna typografia i zasady ich użycia. <strong>Identyfikacja wizualna obejmuje logo, paletę kolorów, typografię i system znaku</strong> — komplet, dzięki któremu firma wygląda tak samo profesjonalnie na stronie, w mediach społecznościowych i na dokumentach.',
]

const deliverables = [
  {
    icon: 'brush',
    title: 'Projekt logo w 3 koncepcjach',
    description: 'Różne kierunki do wyboru, nie jedna propozycja do przyjęcia lub odrzucenia.',
  },
  {
    icon: 'style',
    title: 'System identyfikacji wizualnej',
    description: 'Zasady użycia znaku w różnych kontekstach — komplet, dzięki któremu marka wygląda spójnie wszędzie.',
  },
  {
    icon: 'format_color_fill',
    title: 'Paleta kolorów i typografia',
    description: 'Spójny zestaw barw i krojów dla całej marki.',
  },
  {
    icon: 'menu_book',
    title: 'Księga znaku',
    description: 'Dokument z zasadami stosowania logo, kolorów i typografii.',
  },
  {
    icon: 'folder',
    title: 'Pliki w formatach do druku i web',
    description: 'AI, SVG, PNG i PDF, gotowe do każdego użycia.',
  },
]

const checklistColumns = [
  {
    heading: 'Logo z generatora',
    paragraphs: ['Logo z generatora albo z taniego serwisu kosztuje kilkadziesiąt złotych i jest w godzinę. To realna opcja na sam start — pod warunkiem, że rozumiesz, czego w niej nie ma.'],
    icon: 'close',
    items: [
      'Często wzór współdzielony z innymi firmami',
      'Samo logo, bez systemu kolorów i typografii',
      'Zwykle tylko PNG — ograniczenia przy druku',
      'Brak księgi znaku',
      'Prawa do znaku często niejasne',
    ],
  },
  {
    heading: 'Pełna identyfikacja wizualna',
    paragraphs: ['Pełna identyfikacja opłaca się, gdy firma ma budować wiarygodność i pojawiać się w wielu miejscach naraz — bo wtedy spójność i pliki wektorowe przestają być luksusem, a stają się warunkiem profesjonalnego wyglądu.'],
    icon: 'check_circle',
    items: [
      'Projektowane od podstaw — unikalne dla firmy',
      'Logo, kolory, typografia i zasady użycia',
      'AI, SVG, PNG, PDF — wektor do każdego rozmiaru',
      'Pełna księga znaku',
      'Pełne prawa do znaku po Twojej stronie',
    ],
  },
]

const processSteps = [
  {
    icon: 'lightbulb',
    title: 'Brief i research',
    description: 'Poznajemy firmę, branżę i konkurencję, ustalamy charakter, jaki marka ma komunikować.',
  },
  {
    icon: 'brush',
    title: 'Koncepcje logo',
    description: 'Przedstawiamy 3 różne kierunki, z których wybierasz ten najbliższy.',
  },
  {
    icon: 'tune',
    title: 'Dopracowanie i system',
    description: 'Rozwijamy wybraną koncepcję w pełny system: kolory, typografia, zasady użycia.',
  },
  {
    icon: 'menu_book',
    title: 'Księga znaku i przekazanie',
    description: 'Dostarczamy księgę znaku i komplet plików w formatach AI, SVG, PNG i PDF.',
  },
]

const pricingSubtitle = 'Branding wyceniamy indywidualnie w zależności od zakresu — od samego logo po pełną księgę identyfikacji. Nie ma jednej ceny, bo „logo dla firmy” i „kompletna identyfikacja z księgą znaku” to dwa różne projekty pod względem nakładu pracy. Jeśli zamawiasz też stronę, identyfikację i projekt wyceniamy łącznie.'

const pricingPlans = [
  {
    name: 'Projekt logo',
    price: 'od 840 zł netto',
    highlight: false,
    features: [
      'Profesjonalne logo',
      'Logo w 3 koncepcjach do wyboru',
      'Format wektorowy (SVG, PDF)',
      'Pliki gotowe do druku i web',
    ],
    cta: 'Zapytaj o logo',
    ctaLink: '/kontakt',
  },
  {
    name: 'Identyfikacja wizualna',
    price: 'od 4 200 zł netto',
    badge: 'Najpopularniejszy',
    highlight: true,
    features: [
      'Wszystko z planu Projekt logo',
      'Paleta kolorów i typografia',
      'Wytyczne marki (brand guidelines)',
      'Wizualny system identyfikacji',
    ],
    cta: 'Rozpocznij branding',
    ctaLink: '/kontakt',
  },
  {
    name: 'Rebranding',
    price: 'od 8 400 zł netto',
    highlight: false,
    features: [
      'Wszystko z planu Identyfikacja wizualna',
      'Analiza marki i strategia',
      'Modernizacja wizualna',
      'Wdrożenie i roll-out',
    ],
    cta: 'Omów rebranding',
    ctaLink: '/kontakt',
  },
]

const expertiseBlocks = [
  {
    icon: 'brand_awareness',
    title: 'Branding dla firm, które chcą wyglądać spójnie',
    paragraphs: [
      'EvolaTec projektuje identyfikację wizualną dla małych i średnich firm — od startupu po lokalnego usługodawcę, który chce zbudować rozpoznawalną markę.',
      'Projekt logo dostarczamy w 3 koncepcjach. Nie akceptujesz jednej propozycji na ślepo — wybierasz kierunek, który chcesz rozwinąć, a my dopiero wtedy budujemy pełny system.',
      'Branding wyceniamy przed startem i łączymy z projektem strony, gdy zamawiasz obie usługi — tak żeby marka i witryna powstały jako jeden spójny system.',
    ],
    tags: ['Logo', 'Paleta kolorów', 'Typografia', 'Księga znaku'],
  },
  {
    icon: 'inventory_2',
    title: 'Co firma dostaje na własność po projekcie',
    paragraphs: [
      'Pliki źródłowe (AI, SVG), pliki gotowe do druku i web (PNG, PDF) oraz pełna księga znaku — wszystko przechodzi na Ciebie po zakończeniu projektu.',
      'Pliki wektorowe pozwalają skalować znak bez utraty jakości: od wizytówki po baner. Wydrukujesz, opublikujesz i wyślesz do każdego, kto będzie pracować z Twoją marką.',
      'Prawa do znaku są Twoje. Nie ma abonamentu ani licencji — znak jest Twój, a pliki źródłowe pozwalają na każdą przyszłą modyfikację.',
    ],
    tags: ['Pliki AI i SVG', 'Prawa do znaku', 'Wektor', 'Gotowe do druku'],
  },
]

const relatedServices = [
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description: 'Projekt interfejsu strony spójny z identyfikacją wizualną — od wireframe po gotowy design.',
    price: 'Wycena indywidualna',
    href: '/ui-ux-design',
  },
  {
    icon: 'web',
    title: 'Projektowanie stron',
    description: 'Projekt strony spójny z identyfikacją — wireframe, design desktop i mobile, design system.',
    price: 'Wycena indywidualna',
    href: '/projektowanie-stron',
  },
  {
    icon: 'share',
    title: 'Social Media Marketing',
    description: 'Spójna marka na Facebooku i Instagramie — posty, kampanie Meta Ads i community management.',
    price: 'od 1 260 zł netto/mies.',
    href: '/social-media',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ──────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Branding i identyfikacja wizualna"
      title="Branding i identyfikacja wizualna, która wyróżnia Twoją firmę"
      description="Logo w 3 koncepcjach, paleta kolorów, typografia i księga znaku — komplet, dzięki któremu firma wygląda spójnie wszędzie. Pliki AI, SVG, PNG i PDF. Wycena indywidualna."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Jak powstaje identyfikacja"
      primary-href="/kontakt"
      secondary-href="#main-content"
      :stats="heroStats"
    />

    <main id="main-content">
      <article>

        <!-- ── Intro ─────────────────────────────────────────────────────── -->
        <IntroSection
          heading="Dlaczego spójna marka sprzedaje, zanim powiesz słowo"
          :paragraphs="introParagraphs"
          image="/assets/branding-design.webp"
          image-alt="Projekt identyfikacji wizualnej marki — logo, paleta kolorów i typografia na białym tle"
          :badge="{ icon: 'palette', title: 'Marka to pierwsze wrażenie', subtitle: 'Identyfikacja wizualna' }"
          :reverse="true"
        />

        <!-- ── Services — what's included ───────────────────────────────── -->
        <ServicesSection
          title="Co zawiera projekt identyfikacji wizualnej"
          subtitle="Identyfikacja wizualna to system, nie pojedynczy plik z logo. Obejmuje wszystkie elementy potrzebne, żeby marka wyglądała spójnie w każdym miejscu, w którym się pojawia."
          variant="centered"
          :services="deliverables"
          learn-more-label=""
          background="bg-surface-container-low"
        />

        <!-- ── Checklist — logo vs full identity ─────────────────────────── -->
        <ChecklistSection
          title="Tanie logo z generatora vs pełna identyfikacja wizualna"
          :columns="checklistColumns"
          icon="check_circle"
          bg="surface"
        />

        <!-- ── Process ───────────────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak powstaje"
          title="Jak powstaje identyfikacja wizualna — 4 etapy"
          :steps="processSteps"
        />

        <!-- ── Pricing ───────────────────────────────────────────────────── -->
        <PricingSection
          eyebrow="Wycena"
          title="Ile kosztuje branding — model wyceny"
          :subtitle="pricingSubtitle"
          :pricing-plans="pricingPlans"
          background="bg-surface"
        />

        <!-- ── Expertise blocks ──────────────────────────────────────────── -->
        <ExpertiseCardsSection
          eyebrow="Branding z EvolaTec"
          eyebrow-icon="verified"
          title="Identyfikacja wizualna zaprojektowana od podstaw"
          :blocks="expertiseBlocks"
        />

        <!-- ── FAQ ───────────────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o branding i identyfikację wizualną"
          :faqs="faqData"
          background="bg-surface"
        />

        <!-- ── Related services ──────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Kompletna marka — od logo po stronę"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Marka, która wygląda spójnie wszędzie"
      description="Opisz firmę i kierunek, w jakim chcesz iść — wrócimy z koncepcjami i wyceną przed startem."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
