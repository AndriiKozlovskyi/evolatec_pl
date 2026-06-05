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
      description: 'Agencja webowa tworząca strony internetowe, sklepy online i rozwiązania SEO dla polskich firm.',
      address: { '@type': 'PostalAddress', addressLocality: 'Warszawa', addressCountry: 'PL' },
      email: 'kontakt@evolatec.pl',
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
  { value: '3 koncepcje', label: 'Logo do wyboru',        icon: 'brush'         },
  { value: 'Księga',      label: 'Zasady marki',          icon: 'menu_book'     },
  { value: 'Wektor',      label: 'AI · SVG · PNG · PDF',  icon: 'shapes'        },
  { value: 'Bezpłatna',   label: 'Wycena indywidualna',   icon: 'request_quote' },
]

const deliverables = [
  {
    icon: 'brush',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    title: 'Logo w 3 koncepcjach',
    description: 'Trzy różne kierunki wizualne do wyboru — nie jedna propozycja do przyjęcia lub odrzucenia. Wybierasz kierunek, my rozwijamy go w pełny system.',
  },
  {
    icon: 'style',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    title: 'System identyfikacji wizualnej',
    description: 'Logo to jeden element. System to logo, kolory, typografia i zasady użycia — komplet, dzięki któremu marka wygląda spójnie wszędzie.',
  },
  {
    icon: 'format_color_fill',
    iconBg: 'bg-pink-50',
    iconColor: 'text-pink-600',
    title: 'Paleta kolorów i typografia',
    description: 'Kolory z wartościami HEX, RGB i CMYK gotowe do druku i ekranu. Typografia z dobranymi krojami i hierarchią nagłówków.',
  },
  {
    icon: 'menu_book',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Księga znaku',
    description: 'Zasady stosowania marki: dozwolone i zakazane użycia logo, wersje kolorystyczne, marginesy bezpieczne i przykłady zastosowań.',
  },
  {
    icon: 'folder',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'Pliki AI, SVG, PNG, PDF',
    description: 'Pliki wektorowe (AI, SVG) do skalowania bez utraty jakości — od wizytówki po billboard. Pliki rastrowe i PDF gotowe do natychmiastowego użycia.',
  },
]

const compareRows = [
  { label: 'Unikalność',         gen: 'Często wzór współdzielony',    full: 'Projektowane od podstaw dla firmy'   },
  { label: 'Spójność marki',     gen: 'Samo logo, bez systemu',       full: 'Logo, kolory, typografia, zasady'    },
  { label: 'Pliki źródłowe',     gen: 'Zwykle tylko PNG',             full: 'AI, SVG, PNG, PDF'                  },
  { label: 'Druk i skalowanie',  gen: 'Ograniczone',                  full: 'Wektor, każdy rozmiar'              },
  { label: 'Księga znaku',       gen: 'Brak',                         full: 'Pełna'                              },
  { label: 'Prawa do znaku',     gen: 'Często niejasne',              full: 'Pełne, po Twojej stronie'           },
]

const processSteps = [
  {
    icon: 'lightbulb',
    title: 'Brief i research',
    description: 'Poznajemy firmę, branżę i konkurencję, ustalamy charakter, jaki marka ma komunikować i jakich skojarzeń unikać.',
  },
  {
    icon: 'brush',
    title: 'Koncepcje logo',
    description: 'Przedstawiamy 3 różne kierunki wizualne. Każdy to odrębna koncepcja — nie warianty jednego pomysłu.',
  },
  {
    icon: 'tune',
    title: 'Dopracowanie i system',
    description: 'Rozwijamy wybrany kierunek w pełny system: kolory z wartościami, typografia, zasady użycia i wersje logo.',
  },
  {
    icon: 'menu_book',
    title: 'Księga znaku i przekazanie',
    description: 'Dostarczamy księgę znaku i komplet plików w formatach AI, SVG, PNG i PDF. Prawa do znaku przechodzą na Ciebie.',
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

    <!-- ══ Hero ══════════════════════════════════════════════════════════════ -->
    <HeroSection
      badge="Branding i identyfikacja wizualna"
      title="Branding i identyfikacja wizualna, która wyróżnia Twoją firmę"
      description="Logo w 3 koncepcjach, paleta kolorów, typografia i księga znaku — komplet, dzięki któremu firma wygląda spójnie wszędzie. Pliki AI, SVG, PNG i PDF. Wycena indywidualna."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Jak powstaje identyfikacja"
      :stats="heroStats"
    />

    <main id="main-content">

      <nav aria-label="breadcrumb" class="border-b border-outline-variant/30 bg-surface">
        <div class="max-w-container-max mx-auto px-gutter py-3">
          <ol class="flex items-center flex-wrap gap-2 text-sm text-on-surface-variant">
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Strona główna</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li><NuxtLink to="/projektowanie-stron" class="hover:text-primary transition-colors">Projektowanie stron</NuxtLink></li>
            <li aria-hidden="true" class="text-outline">/</li>
            <li aria-current="page" class="text-on-surface font-medium">Branding i identyfikacja wizualna</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ══ 1. Dlaczego spójna marka — white ══════════════════════════════ -->
        <section aria-labelledby="section-why" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">palette</span>
                  Marka to pierwsze wrażenie
                </span>
                <h2 id="section-why" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Dlaczego spójna marka sprzedaje, zanim powiesz słowo
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Klient wyrabia sobie zdanie o firmie, zanim przeczyta ofertę — na podstawie logo, kolorów i tego, czy wszystko do siebie pasuje. Marka, która na wizytówce wygląda inaczej niż na stronie, a na Facebooku jeszcze inaczej, wysyła jeden sygnał: tu nie przykłada się do szczegółów.
                  </p>
                  <p>
                    Najczęstszy problem małych firm to nie brak logo, tylko brak systemu. Logo powstało kiedyś w generatorze albo u znajomego, kolory dobierane są za każdym razem na nowo, a typografia zależy od tego, w czym akurat ktoś robił grafikę. Efekt jest niespójny i wygląda taniej, niż firma realnie jest.
                  </p>
                  <p>
                    <strong class="text-on-surface">Identyfikacja wizualna obejmuje logo, paletę kolorów, typografię i system znaku</strong> — komplet, dzięki któremu firma wygląda tak samo profesjonalnie na stronie, w social media i na dokumentach. Projekt logo dostarczamy w 3 koncepcjach, z księgą znaku i plikami w formatach AI, SVG, PNG i PDF.
                  </p>
                </div>
              </div>

              <div data-reveal="right">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=640&h=420&fit=crop&auto=format&q=80"
                  alt="Projekt identyfikacji wizualnej marki — logo, paleta kolorów i typografia na białym tle"
                  width="640"
                  height="420"
                  class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 2. Co zawiera — primary (purple) ══════════════════════════════ -->
        <section aria-labelledby="section-included" class="relative overflow-hidden py-section-padding bg-primary">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="animate-float          absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            <div class="animate-float-reverse  absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div class="relative max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-14" data-reveal>
              <span class="inline-block text-xs font-bold uppercase tracking-[0.3em] text-on-primary/60 mb-3">Co dostajesz</span>
              <h2 id="section-included" class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-4">
                Co zawiera projekt identyfikacji wizualnej
              </h2>
              <p class="text-on-primary/75 leading-relaxed">
                Identyfikacja wizualna to system, nie pojedynczy plik z logo. Obejmuje wszystkie elementy potrzebne, żeby marka wyglądała spójnie w każdym miejscu, w którym się pojawia.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                v-for="(item, i) in deliverables"
                :key="item.title"
                :data-reveal="'scale'"
                :data-delay="String(i + 1)"
                class="group bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/18 hover:-translate-y-1 transition-all duration-300"
              >
                <div class="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center mb-4 group-hover:bg-white/25 transition-colors duration-300">
                  <span class="material-symbols-outlined text-on-primary text-[22px]" aria-hidden="true">{{ item.icon }}</span>
                </div>
                <h3 class="font-bold text-on-primary text-base leading-snug mb-2">{{ item.title }}</h3>
                <p class="text-sm text-on-primary/70 leading-relaxed">{{ item.description }}</p>
              </div>
            </div>

          </div>
        </section>

        <!-- ══ 3. Cena — gray ════════════════════════════════════════════════ -->
        <section aria-labelledby="section-price" class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Wycena</span>
                <h2 id="section-price" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Ile kosztuje branding — model wyceny
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>Branding wyceniamy indywidualnie w zależności od zakresu — od samego logo po pełną księgę identyfikacji. Nie ma jednej ceny, bo „logo dla firmy" i „kompletna identyfikacja z księgą znaku" to dwa różne projekty pod względem nakładu pracy.</p>
                  <p>Wycena jest bezpłatna i ustalana przed startem. Jeśli zamawiasz u nas również stronę, identyfikację i projekt strony wyceniamy łącznie, tak żeby marka i witryna powstały w jednym, spójnym kierunku.</p>
                </div>
                <NuxtLink to="/kontakt" class="inline-block mt-8">
                  <BaseButton variant="primary" size="lg">Omów projekt i poznaj wycenę</BaseButton>
                </NuxtLink>
              </div>

              <div data-reveal="right">
                <div class="bg-white rounded-2xl border border-outline-variant/20 p-8 shadow-sm">
                  <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <span class="material-symbols-outlined text-primary text-[28px]" aria-hidden="true">brush</span>
                  </div>
                  <h3 class="font-bold text-on-surface text-xl mb-1">Branding i identyfikacja</h3>
                  <p class="font-display text-3xl font-black text-primary mb-1">Wycena indywidualna</p>
                  <p class="text-sm text-on-surface-variant mb-6">bezpłatna konsultacja · od samego logo po pełną księgę</p>
                  <ul class="space-y-2.5" role="list">
                    <li v-for="item in deliverables" :key="item.title" class="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span class="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      {{ item.title }}
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 4. Porównanie — white ══════════════════════════════════════════ -->
        <section aria-labelledby="section-compare" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg" data-reveal>
              <h2 id="section-compare" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4">
                Tanie logo z generatora vs pełna identyfikacja wizualna — co dostaje firma
              </h2>
              <p class="text-on-surface-variant">
                Logo z generatora to realna opcja na sam start — pod warunkiem, że rozumiesz, czego w niej nie ma. Różnica nie polega na „ładniej kontra brzydziej", tylko na tym, co firma dostaje na własność i co może z tym zrobić.
              </p>
            </div>

            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8 shadow-sm" data-reveal>
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
                  <tr v-for="(row, i) in compareRows" :key="row.label" class="border-b border-outline-variant/20" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-on-surface-variant text-xs">{{ row.gen }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5 text-xs">{{ row.full }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="md:hidden space-y-3 mb-8">
              <div v-for="row in compareRows" :key="row.label" class="bg-white rounded-xl border border-outline-variant/30 p-4">
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

            <div class="grid lg:grid-cols-2 gap-stack-lg items-center mt-stack-lg">
              <p class="text-on-surface-variant" data-reveal="left">
                Logo z generatora wystarcza, gdy potrzebujesz czegokolwiek na szybko i marka nie jest jeszcze priorytetem. Pełna identyfikacja opłaca się, gdy firma buduje wiarygodność i pojawia się w wielu miejscach naraz — bo wtedy spójność i pliki wektorowe przestają być luksusem.
              </p>
              <NuxtImg
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=560&h=300&fit=crop&auto=format&q=80"
                alt="Tablet z prezentacją identyfikacji wizualnej marki — logo na różnych nośnikach i materiałach firmowych"
                width="560"
                height="300"
                class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                data-reveal="right"
                loading="lazy"
              />
            </div>

          </div>
        </section>

        <!-- ══ 5. Proces — gray (ProcessSection) ════════════════════════════ -->
        <ProcessSection
          eyebrow="Jak powstaje"
          title="Jak powstaje identyfikacja wizualna — 4 etapy"
          :steps="processSteps"
        />

        <!-- ══ 6. FAQ — white ════════════════════════════════════════════════ -->
        <FAQSection
          title="Najczęściej zadawane pytania o branding i identyfikację wizualną"
          :faqs="faqData"
        />

        <!-- ══ Related ════════════════════════════════════════════════════════ -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Kompletna marka — od logo po stronę"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ══ CTA ═══════════════════════════════════════════════════════════════ -->
    <CTASection
      title="Marka, która wygląda spójnie wszędzie"
      description="Opisz firmę i kierunek, w jakim chcesz iść — wrócimy z koncepcjami i wyceną przed startem."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
    />

  </div>
</template>
