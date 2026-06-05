<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Identyfikacja wizualna i projekt logo dla firm | EvolaTec',
  description: 'Branding i identyfikacja wizualna: logo w 3 koncepcjach, paleta kolorów, typografia, księga znaku, pliki AI, SVG, PNG, PDF. Wycena indywidualna, bezpłatna konsultacja.',
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
      '@id': 'https://evolatec.pl/branding#webpage',
      url: 'https://evolatec.pl/branding',
      name: 'Identyfikacja wizualna i projekt logo dla firm | EvolaTec',
      description: 'Branding i identyfikacja wizualna: logo w 3 koncepcjach, paleta kolorów, typografia, księga znaku, pliki AI, SVG, PNG, PDF. Wycena indywidualna, bezpłatna konsultacja.',
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
  { value: '3 koncepcje', label: 'Logo do wyboru',      icon: 'brush'         },
  { value: 'Księga znaku', label: 'Zasady marki',       icon: 'menu_book'     },
  { value: 'Wektor',      label: 'AI · SVG · PNG · PDF', icon: 'shapes'        },
  { value: 'Bezpłatna',   label: 'Wycena indywidualna', icon: 'request_quote' },
]

const includedItems = [
  { icon: 'brush',            label: 'Projekt logo w 3 koncepcjach'    },
  { icon: 'style',            label: 'System identyfikacji wizualnej'  },
  { icon: 'format_color_fill', label: 'Paleta kolorów i typografia'    },
  { icon: 'menu_book',        label: 'Księga znaku'                    },
  { icon: 'folder',           label: 'Pliki AI, SVG, PNG, PDF'         },
]

const compareRows = [
  { label: 'Unikalność',       gen: 'Często wzór współdzielony', full: 'Projektowane od podstaw'   },
  { label: 'Spójność marki',   gen: 'Samo logo, bez systemu',   full: 'Logo, kolory, typografia, zasady' },
  { label: 'Pliki źródłowe',   gen: 'Zwykle tylko PNG',         full: 'AI, SVG, PNG, PDF'         },
  { label: 'Druk i skalowanie', gen: 'Ograniczone',             full: 'Wektor, każdy rozmiar'     },
  { label: 'Księga znaku',     gen: 'Brak',                     full: 'Pełna'                     },
  { label: 'Prawa do znaku',   gen: 'Często niejasne',          full: 'Pełne, po Twojej stronie'  },
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
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Branding i identyfikacja wizualna"
      title="Branding i identyfikacja wizualna, która wyróżnia Twoją firmę"
      description="Logo w 3 koncepcjach, paleta kolorów, typografia i księga znaku — komplet, dzięki któremu firma wygląda spójnie wszędzie. Pliki AI, SVG, PNG i PDF. Wycena indywidualna."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz UI/UX Design"
      primary-href="/kontakt"
      secondary-href="/ui-ux-design"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="border-b border-outline-variant/30 bg-surface">
        <div class="max-w-container-max mx-auto px-gutter py-3">
          <ol class="flex items-center flex-wrap gap-2 text-sm text-on-surface-variant">
            <li><NuxtLink to="/" class="hover:text-primary">Strona główna</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li><NuxtLink to="/projektowanie-stron" class="hover:text-primary">Projektowanie stron internetowych</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li aria-current="page" class="text-on-surface font-medium">Branding i identyfikacja wizualna</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ── Section 1: Spójna marka ───────────────────────────────────── -->
        <section
          aria-labelledby="section-why"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-3xl mx-auto px-gutter">
            <h2
              id="section-why"
              class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
            >
              Dlaczego spójna marka sprzedaje, zanim powiesz słowo
            </h2>

            <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
              <p>
                Klient wyrabia sobie zdanie o firmie, zanim przeczyta ofertę — na podstawie logo, kolorów i tego, czy wszystko do siebie pasuje. Marka, która na wizytówce wygląda inaczej niż na stronie, a na Facebooku jeszcze inaczej, wysyła jeden sygnał: tu się nie przykłada do szczegółów. A jeśli nie do szczegółów wizualnych, to do jakich.
              </p>
              <p>
                Najczęstszy problem małych firm to nie brak logo, tylko brak systemu. Logo powstało kiedyś w generatorze albo u znajomego, kolory dobierane są za każdym razem na nowo, a typografia zależy od tego, w czym akurat ktoś robił grafikę. Efekt jest niespójny i wygląda taniej, niż firma realnie jest.
              </p>
              <p>
                Identyfikacja wizualna porządkuje to raz: jedno logo, jedna paleta, jedna typografia i zasady ich użycia. <strong class="text-on-surface">Identyfikacja wizualna obejmuje logo, paletę kolorów, typografię i system znaku</strong> — komplet, dzięki któremu firma wygląda tak samo profesjonalnie na stronie, w mediach społecznościowych i na dokumentach.
              </p>
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
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">palette</span>
                  System, nie pojedynczy plik
                </span>

                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co zawiera projekt identyfikacji wizualnej
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    Identyfikacja wizualna to system, nie pojedynczy plik z logo. Obejmuje wszystkie elementy potrzebne, żeby marka wyglądała spójnie w każdym miejscu, w którym się pojawia.
                  </p>
                  <p>
                    Projekt logo dostarczamy w 3 koncepcjach, z księgą znaku i plikami w formatach AI, SVG, PNG i PDF. Spójna marka najlepiej działa wdrożona na stronie i w
                    <NuxtLink to="/social-media" class="text-primary font-semibold hover:underline">mediach społecznościowych</NuxtLink>
                    jednocześnie.
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

        <!-- ── Section 3: Cena (wycena indywidualna) ─────────────────────── -->
        <section
          aria-labelledby="section-price"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-3xl mx-auto px-gutter">
            <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Wycena</span>
            <h2
              id="section-price"
              class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
            >
              Ile kosztuje branding — model wyceny
            </h2>

            <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 mb-8">
              <p class="text-on-surface-variant mb-1">Branding i identyfikacja wizualna</p>
              <p class="font-display text-3xl sm:text-4xl font-black text-primary mb-1">Wycena indywidualna</p>
              <p class="text-sm text-on-surface-variant">bezpłatna konsultacja · od samego logo po pełną księgę</p>
            </div>

            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Branding wyceniamy indywidualnie w zależności od zakresu — od samego logo po pełną księgę identyfikacji. Nie ma jednej ceny, bo „logo dla firmy" i „kompletna identyfikacja z księgą znaku" to dwa różne projekty pod względem nakładu pracy.
              </p>
              <p>
                Na wycenę wpływa, jak daleko ma sięgać projekt: samo logo z plikami źródłowymi to inny koszt niż logo wraz z paletą, typografią, systemem znaku i pełną księgą identyfikacji. Wpływ ma też liczba zastosowań, które trzeba zaprojektować — wizytówki, szablony social media, papier firmowy.
              </p>
              <p>
                Wycena jest bezpłatna i ustalana przed startem. Jeśli zamawiasz u nas również stronę, identyfikację i projekt strony wyceniamy łącznie, tak żeby marka i witryna powstały w jednym, spójnym kierunku.
              </p>
            </div>

            <div class="mt-10">
              <NuxtLink to="/kontakt">
                <BaseButton variant="outline" size="md">Omów projekt i poznaj wycenę</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ── Section 4: Generator vs pełna identyfikacja ───────────────── -->
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
                Tanie logo z generatora vs pełna identyfikacja wizualna — co dostaje firma
              </h2>
              <p class="text-on-surface-variant">
                Logo z generatora kosztuje kilkadziesiąt złotych i jest w godzinę. To realna opcja na sam start — pod warunkiem, że rozumiesz, czego w niej nie ma. Różnica nie polega na „ładniej kontra brzydziej", tylko na tym, co firma faktycznie dostaje na własność.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie taniego logo z generatora z pełną identyfikacją wizualną</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/4" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Logo z generatora</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Pełna identyfikacja</th>
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
                    <td class="p-4 text-center text-on-surface-variant">{{ row.gen }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.full }}</td>
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
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Generator</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.gen }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Identyfikacja</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.full }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Logo z generatora wystarcza, gdy potrzebujesz czegokolwiek na szybko i marka nie jest jeszcze priorytetem. Pełna identyfikacja opłaca się, gdy firma ma budować wiarygodność i pojawiać się w wielu miejscach naraz — bo wtedy spójność i pliki wektorowe przestają być luksusem, a stają się warunkiem profesjonalnego wyglądu.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak powstaje"
          title="Jak powstaje identyfikacja wizualna — proces projektowy"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o branding i identyfikację wizualną"
          :faqs="faqData"
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
