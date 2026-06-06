<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Teksty na stronę www — copywriting SEO | EvolaTec',
  description: 'Teksty na stronę www, które sprzedają i pozycjonują: podstrony usług, strona główna, opisy produktów, landing page. Pisane pod frazy i AI. Wycena indywidualna.',
  ogTitle: 'Teksty na stronę www — copywriting SEO | EvolaTec',
  ogDescription: 'Teksty na stronę www, które sprzedają i pozycjonują — pisane pod konkretne frazy i pod wyszukiwarki AI. Wycena indywidualna.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/copywriting',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztują teksty na stronę internetową?',
    answer: 'Teksty wyceniamy per podstrona lub per projekt — wycena zależy od liczby i rodzaju podstron. Strona z pięcioma podstronami to inny nakład niż sklep z dwustoma opisami produktów, dlatego nie ma jednej ceny. Żeby otrzymać szybką wycenę, wystarczy podać liczbę podstron i ich typ; jeśli zamawiasz też projekt lub wykonanie strony, teksty wyceniamy łącznie.',
  },
  {
    question: 'Czy teksty pisane przez AI wystarczą na stronę firmową?',
    answer: 'Tekst z generatora AI wystarcza na szybką notatkę lub punkt wyjścia, ale na stronie firmowej zwykle brakuje mu trzech rzeczy: konkretnych faktów o Twojej firmie, spójnego tonu marki i strategii fraz pod pozycjonowanie. Generatory uśredniają przekaz, przez co tekst brzmi podobnie do konkurencji. Sami korzystamy z AI jako wsparcia, ale finalny tekst powstaje pod konkretny cel, frazy i markę.',
  },
  {
    question: 'Co to jest copywriting SEO?',
    answer: 'Copywriting SEO to pisanie tekstów, które jednocześnie przekonują czytelnika i są zbudowane pod wyszukiwarkę. Oznacza to dobór fraz kluczowych, na które szukają klienci, naturalne wplecenie ich w treść oraz strukturę nagłówków czytelną dla Google. Dobry copywriting SEO nie poświęca czytelności dla fraz — tekst ma brzmieć naturalnie i sprzedawać, a pozycjonowanie jest wbudowane, nie doklejone.',
  },
  {
    question: 'Czy piszecie teksty pod pozycjonowanie?',
    answer: 'Tak — każdy tekst jest pisany pod konkretne frazy kluczowe oraz pod cytowalność w wyszukiwarkach AI. Przed pisaniem dobieramy frazy dla każdej podstrony, a treść budujemy tak, by odpowiadała na realne pytania klientów w sposób, który Google i asystenci AI mogą zacytować. Pozycjonowanie treści najlepiej działa w parze z technicznym SEO całej strony.',
  },
  {
    question: 'Czy mogę zamówić same teksty bez tworzenia strony?',
    answer: 'Tak. Teksty można zamówić jako oddzielną usługę, gdy stronę masz już gotową i brakuje jej tylko treści. Dostarczamy gotowe teksty w formacie do wdrożenia, z nagłówkami i strukturą pod SEO. Wystarczy podać liczbę i rodzaj podstron, żeby otrzymać wycenę.',
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
      '@id': 'https://evolatec.pl/copywriting#webpage',
      url: 'https://evolatec.pl/copywriting',
      name: 'Teksty na stronę www — copywriting SEO | EvolaTec',
      description: 'Teksty na stronę www, które sprzedają i pozycjonują: podstrony usług, strona główna, opisy produktów, landing page. Pisane pod frazy i AI. Wycena indywidualna.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.speakable-intro'] },
      breadcrumb: { '@id': 'https://evolatec.pl/copywriting#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/copywriting#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Projektowanie stron internetowych', item: 'https://evolatec.pl/projektowanie-stron' },
        { '@type': 'ListItem', position: 3, name: 'Teksty na stronę www', item: 'https://evolatec.pl/copywriting' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/copywriting#service',
      name: 'Teksty na stronę www — copywriting SEO',
      serviceType: 'Copywriting SEO i content marketing',
      description: 'Teksty na stronę www pisane pod konkretne frazy kluczowe i pod wyszukiwarki AI: podstrony usług, strona główna, opisy produktów, artykuły blogowe i landing page. Wycena indywidualna.',
      url: 'https://evolatec.pl/copywriting',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/copywriting#faq',
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
  name: 'Jak powstają teksty — od briefu do gotowej treści',
  description: 'Proces tworzenia tekstów na stronę w EvolaTec: od briefu i researchu fraz do gotowej treści.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief i research fraz', text: 'Zbieramy fakty o firmie i ofercie oraz dobieramy frazy kluczowe pod każdą podstronę.' },
    { '@type': 'HowToStep', position: 2, name: 'Pierwsza wersja', text: 'Piszemy tekst pod ustalony cel, frazy i ton marki.' },
    { '@type': 'HowToStep', position: 3, name: 'Poprawki', text: 'Wprowadzamy ustaloną liczbę rund uwag, dopasowując ton i akcenty.' },
    { '@type': 'HowToStep', position: 4, name: 'Przekazanie', text: 'Dostarczamy gotowe teksty w formacie do wdrożenia, z nagłówkami i strukturą pod SEO.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/copywriting' }],
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
  { value: 'Pod frazy',   label: 'Pisane pod SEO i AI',      icon: 'search'        },
  { value: 'Po polsku',   label: 'Native, nie tłumaczenie',  icon: 'translate'     },
  { value: 'Cała strona', label: 'Od głównej po blog',       icon: 'article'       },
  { value: 'Bezpłatna',   label: 'Wycena indywidualna',      icon: 'request_quote' },
]

const textTypes = [
  {
    icon: 'sell',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    title: 'Teksty na podstrony usług',
    description: 'Konwertujące opisy usług pisane z perspektywy problemu klienta — nie firmowej prezentacji. Każdy tekst zawiera frazy kluczowe i cytowalne zdania dla AI.',
  },
  {
    icon: 'home',
    iconBg: 'bg-sky-50',
    iconColor: 'text-sky-600',
    title: 'Teksty na stronę główną',
    description: 'Tekst główny, sekcje usług i wyróżniki firmy — napisane tak, żeby odwiedzający w 10 sekund wiedział, co oferujesz i dlaczego warto wybrać właśnie Ciebie.',
  },
  {
    icon: 'inventory_2',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    title: 'Opisy produktów pod sklep',
    description: 'Opisy sprzedające i zoptymalizowane pod frazy — nie „opisy producenta" wklejone z hurt. Każdy opis jest unikalny i napisany pod konkretne słowo kluczowe.',
  },
  {
    icon: 'feed',
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-600',
    title: 'Artykuły blogowe SEO',
    description: 'Artykuły z researchu fraz pisane pod długi ogon — z sekcją FAQ pod rich snippets i strukturą odpowiadającą na zapytania głosowe.',
  },
  {
    icon: 'ads_click',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    title: 'Teksty landing page',
    description: 'Copywriting pod konkretną konwersję — lead, zakup lub zapis. Hierarchia treści zgodna z zasadą AIDA, CTA powtórzone w kluczowych punktach strony.',
  },
]

const compareRows = [
  { label: 'Czas i koszt',       ai: 'Sekundy, za darmo',           seo: 'Płatny, kilka dni'          },
  { label: 'Konkrety i fakty',   ai: 'Często ogólne lub zmyślone',  seo: 'Oparte na danych firmy'     },
  { label: 'Ton marki',          ai: 'Uśredniony, rozpoznawalny',   seo: 'Dopasowany do firmy'        },
  { label: 'Pozycjonowanie',     ai: 'Bez strategii fraz',          seo: 'Pisany pod konkretne frazy' },
  { label: 'Różnicowanie',       ai: 'Podobny do konkurencji',      seo: 'Unikalny przekaz'           },
]

const processSteps = [
  {
    icon: 'fact_check',
    title: 'Brief i research fraz',
    description: 'Zbieramy fakty o firmie i ofercie, dobieramy frazy kluczowe pod każdą podstronę na podstawie danych z Google Search Console lub narzędzi SEO.',
  },
  {
    icon: 'edit',
    title: 'Pierwsza wersja',
    description: 'Piszemy tekst pod ustalony cel, frazy i ton marki. Tekst otwiera się od problemu klienta — nie od autoprezentacji firmy.',
  },
  {
    icon: 'rate_review',
    title: 'Poprawki',
    description: 'Wprowadzamy ustaloną liczbę rund uwag, dopasowując ton i akcenty. Każda zmiana jest uzasadniona — nie poprawiamy dla poprawiania.',
  },
  {
    icon: 'task_alt',
    title: 'Przekazanie',
    description: 'Dostarczamy gotowe teksty w formacie do wdrożenia, z nagłówkami H1–H4 i strukturą pod SEO. Wystarczy wkleić do CMS.',
  },
]

const relatedServices = [
  {
    icon: 'trending_up',
    title: 'Pozycjonowanie SEO',
    description: 'Teksty działają najlepiej w parze z technicznym SEO — audyt, on-page i link building w jednym pakiecie.',
    price: 'od 1 260 zł netto/mies.',
    href: '/seo',
  },
  {
    icon: 'web',
    title: 'Strona internetowa dla firmy',
    description: 'Teksty i strona zamówione razem — wyceniane łącznie i spójne wizualnie od pierwszego ekranu.',
    price: 'od 6 300 zł netto',
    href: '/strona-internetowa',
  },
  {
    icon: 'palette',
    title: 'Branding',
    description: 'Spójny ton marki zaczyna się od identyfikacji wizualnej — logo, paleta, typografia, księga znaku.',
    price: 'Wycena indywidualna',
    href: '/branding',
  },
]
</script>

<template>
  <div>

    <!-- ══ Hero ══════════════════════════════════════════════════════════════ -->
    <HeroSection
      badge="Teksty na stronę www"
      title="Teksty na stronę www, które sprzedają i pozycjonują"
      description="Piszemy teksty pod konkretne frazy i pod wyszukiwarki AI — od strony głównej po opisy produktów i bloga. Po polsku jako native, nie jako tłumaczenie. Wycena indywidualna."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Jakie teksty piszemy"
      :stats="heroStats"
    />

    <main id="main-content">


      <article>

        <!-- ══ 1. Dlaczego teksty decydują — white ════════════════════════════ -->
        <section aria-labelledby="section-why" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">edit_note</span>
                  Tekst sprzedaje, design przyciąga wzrok
                </span>
                <h2 id="section-why" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Dlaczego teksty na stronie decydują, czy klient zostaje
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Firma inwestuje w ładny projekt strony, a potem wkleja w niego teksty napisane w pół godziny wieczorem — i dziwi się, że strona nie sprzedaje. Wygląd przyciąga wzrok na sekundę, ale to tekst decyduje, czy odwiedzający zostaje, rozumie ofertę i wysyła zapytanie.
                  </p>
                  <p>
                    Trzy błędy powtarzają się najczęściej. Tekst mówi o firmie zamiast o problemie klienta. Jest ogólny, więc nie różni się od konkurencji. I nie jest pisany pod wyszukiwarkę, więc nawet najlepsza treść nie zostaje znaleziona.
                  </p>
                  <p>
                    <strong class="text-on-surface">Każdy tekst jest pisany pod konkretne frazy kluczowe oraz pod cytowalność w wyszukiwarkach AI</strong>, dzięki czemu może być znaleziony zarówno w Google, jak i w odpowiedziach ChatGPT czy Perplexity.
                  </p>
                </div>
              </div>

              <div data-reveal="right">
                <NuxtImg
                  src="/assets/copywriting.webp"
                  alt="Osoba pisząca profesjonalne teksty na stronę internetową na laptopie przy biurku"
                  width="640"
                  height="420"
                  class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 2. Jakie teksty — primary (purple) ════════════════════════════ -->
        <section aria-labelledby="section-types" class="relative overflow-hidden py-section-padding bg-primary">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="animate-float          absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            <div class="animate-float-reverse  absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div class="relative max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-14" data-reveal>
              <span class="inline-block text-xs font-bold uppercase tracking-[0.3em] text-on-primary/60 mb-3">Zakres</span>
              <h2 id="section-types" class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-4">
                Jakie teksty piszemy
              </h2>
              <p class="text-on-primary/75 leading-relaxed">
                Piszemy treści dla całej strony, nie tylko pojedynczej podstrony — od pierwszego ekranu po opisy produktów i bloga. Wszystkie po polsku jako native, nie jako tłumaczenie.
              </p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div
                v-for="(item, i) in textTypes"
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
                  Ile kosztują teksty na stronę — model wyceny
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>Teksty wyceniamy per podstrona lub per projekt — wycena zależy od liczby podstron. Nie ma jednej ceny, bo strona z pięcioma podstronami i sklep z dwustoma opisami produktów to zupełnie inny nakład pracy.</p>
                  <p>Żeby otrzymać szybką i konkretną wycenę, wystarczy podać liczbę podstron i ich rodzaj. Jeśli zamawiasz u nas również projekt lub wykonanie strony, teksty wyceniamy łącznie z całością.</p>
                </div>
                <NuxtLink to="/kontakt" class="inline-block mt-8">
                  <BaseButton variant="primary" size="lg">Omów projekt i poznaj wycenę</BaseButton>
                </NuxtLink>
              </div>

              <div data-reveal="right">
                <div class="bg-white rounded-2xl border border-outline-variant/20 p-8 shadow-sm">
                  <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <span class="material-symbols-outlined text-primary text-[28px]" aria-hidden="true">article</span>
                  </div>
                  <h3 class="font-bold text-on-surface text-xl mb-1">Copywriting SEO</h3>
                  <p class="font-display text-2xl font-black text-primary mb-1">Per podstrona lub projekt</p>
                  <p class="text-sm text-on-surface-variant mb-6">bezpłatna wycena · podaj liczbę podstron</p>
                  <ul class="space-y-2.5" role="list">
                    <li v-for="item in textTypes" :key="item.title" class="flex items-start gap-2 text-sm text-on-surface-variant">
                      <span class="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5" aria-hidden="true">check_circle</span>
                      {{ item.title }}
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ══ 4. AI vs copywriter — white ═══════════════════════════════════ -->
        <section aria-labelledby="section-compare" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">

            <div class="text-center max-w-2xl mx-auto mb-stack-lg" data-reveal>
              <h2 id="section-compare" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-4">
                Teksty z AI czy od copywritera SEO — co konwertuje i pozycjonuje
              </h2>
              <p class="text-on-surface-variant">
                Generatory AI piszą w sekundy i za darmo — to realna alternatywa. Pytanie nie brzmi „czy AI umie pisać", tylko „czy tekst z generatora sprzedaje i pozycjonuje tak samo jak pisany pod konkretny cel".
              </p>
            </div>

            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8 shadow-sm" data-reveal>
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie tekstu z generatora AI z copywritingiem SEO</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Tekst z generatora AI</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Copywriting SEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in compareRows" :key="row.label" class="border-b border-outline-variant/20" :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'">
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-on-surface-variant text-xs">{{ row.ai }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5 text-xs">{{ row.seo }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="md:hidden space-y-3 mb-8">
              <div v-for="row in compareRows" :key="row.label" class="bg-white rounded-xl border border-outline-variant/30 p-4">
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Generator AI</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.ai }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Copywriting SEO</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.seo }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid lg:grid-cols-2 gap-stack-lg items-center mt-stack-lg">
              <p class="text-on-surface-variant" data-reveal="left">
                Tekst z AI wystarcza na szybką notatkę albo punkt wyjścia. Na stronę, która ma budować wiarygodność i sprzedawać, brakuje mu konkretnych faktów o Twojej firmie, spójnego tonu i strategii fraz. W praktyce sami korzystamy z narzędzi AI jako wsparcia, ale finalny tekst powstaje pod konkretny cel i markę.
              </p>
              <NuxtImg
                src="/assets/seo-analytics.webp"
                alt="Dane analityczne pokazujące wzrost ruchu organicznego po wdrożeniu tekstów SEO na stronie"
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
          eyebrow="Jak powstają teksty"
          title="Jak powstają teksty — od briefu do gotowej treści"
          :steps="processSteps"
        />

        <!-- ══ 6. FAQ — white ════════════════════════════════════════════════ -->
        <FAQSection
          title="Najczęściej zadawane pytania o teksty na stronę www"
          :faqs="faqData"
        />

        <!-- ══ Related ════════════════════════════════════════════════════════ -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Teksty działają najlepiej w parze z SEO i dobrym projektem"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ══ CTA ═══════════════════════════════════════════════════════════════ -->
    <CTASection
      title="Teksty, które sprzedają i pozycjonują"
      description="Podaj liczbę podstron — wrócimy z wyceną i przykładem tonu, zanim zaczniemy pisać."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Sprawdź SEO"
    />

  </div>
</template>
