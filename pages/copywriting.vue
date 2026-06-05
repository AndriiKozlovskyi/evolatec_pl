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
      '@id': 'https://evolatec.pl/copywriting#webpage',
      url: 'https://evolatec.pl/copywriting',
      name: 'Teksty na stronę www — copywriting SEO | EvolaTec',
      description: 'Teksty na stronę www, które sprzedają i pozycjonują: podstrony usług, strona główna, opisy produktów, landing page. Pisane pod frazy i AI. Wycena indywidualna.',
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

// ─── Page data ─────────────────────────────────────────────────────────────

const heroStats = [
  { value: 'Pod frazy',   label: 'Pisane pod SEO i AI',      icon: 'search'        },
  { value: 'Po polsku',   label: 'Native, nie tłumaczenie',  icon: 'translate'     },
  { value: 'Cała strona', label: 'Od głównej po blog',       icon: 'article'       },
  { value: 'Bezpłatna',   label: 'Wycena indywidualna',      icon: 'request_quote' },
]

const includedItems = [
  { icon: 'sell',          label: 'Teksty na podstrony usług'        },
  { icon: 'home',          label: 'Teksty na stronę główną'          },
  { icon: 'inventory_2',   label: 'Opisy produktów pod sklep'        },
  { icon: 'feed',          label: 'Artykuły blogowe SEO'             },
  { icon: 'ads_click',     label: 'Teksty landing page'              },
]

const compareRows = [
  { label: 'Czas i koszt',      ai: 'Sekundy, za darmo',          seo: 'Płatny, kilka dni'        },
  { label: 'Konkrety i fakty',  ai: 'Często ogólne lub zmyślone', seo: 'Oparte na danych firmy'   },
  { label: 'Ton marki',         ai: 'Uśredniony, rozpoznawalny',  seo: 'Dopasowany do firmy'      },
  { label: 'Pozycjonowanie',    ai: 'Bez strategii fraz',         seo: 'Pisany pod konkretne frazy' },
  { label: 'Różnicowanie',      ai: 'Podobny do konkurencji',     seo: 'Unikalny przekaz'         },
]

const processSteps = [
  {
    icon: 'fact_check',
    title: 'Brief i research fraz',
    description: 'Zbieramy fakty o firmie i ofercie oraz dobieramy frazy kluczowe pod każdą podstronę.',
  },
  {
    icon: 'edit',
    title: 'Pierwsza wersja',
    description: 'Piszemy tekst pod ustalony cel, frazy i ton marki.',
  },
  {
    icon: 'rate_review',
    title: 'Poprawki',
    description: 'Wprowadzamy ustaloną liczbę rund uwag, dopasowując ton i akcenty.',
  },
  {
    icon: 'task_alt',
    title: 'Przekazanie',
    description: 'Dostarczamy gotowe teksty w formacie do wdrożenia, z nagłówkami i strukturą pod SEO.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Teksty na stronę www"
      title="Teksty na stronę www, które sprzedają i pozycjonują"
      description="Piszemy teksty pod konkretne frazy i pod wyszukiwarki AI — od strony głównej po opisy produktów i bloga. Po polsku jako native, nie jako tłumaczenie. Wycena indywidualna."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz SEO"
      primary-href="/kontakt"
      secondary-href="/seo"
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
            <li aria-current="page" class="text-on-surface font-medium">Teksty na stronę www</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ── Section 1: Dlaczego teksty decydują ───────────────────────── -->
        <section
          aria-labelledby="section-why"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-3xl mx-auto px-gutter">
            <h2
              id="section-why"
              class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
            >
              Dlaczego teksty na stronie decydują, czy klient zostaje
            </h2>

            <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
              <p>
                Firma inwestuje w ładny projekt strony, a potem wkleja w niego teksty napisane w pół godziny wieczorem — i dziwi się, że strona nie sprzedaje. Wygląd przyciąga wzrok na sekundę, ale to tekst decyduje, czy odwiedzający zostaje, rozumie ofertę i wysyła zapytanie. Najsłabszym ogniwem większości stron nie jest design, tylko treść.
              </p>
              <p>
                Trzy błędy powtarzają się najczęściej. Tekst mówi o firmie („jesteśmy zespołem profesjonalistów") zamiast o problemie klienta, który ten klient właśnie próbuje rozwiązać. Jest ogólny, więc nie różni się od tekstu konkurencji i niczego nie obiecuje konkretnie. I nie jest pisany pod wyszukiwarkę, więc nawet najlepsza treść nie zostaje znaleziona.
              </p>
              <p>
                Piszemy teksty, które zaczynają od problemu czytelnika, mówią konkretami — ceną, terminem, liczbą — i są zbudowane pod frazy, na które szukają klienci. <strong class="text-on-surface">Każdy tekst jest pisany pod konkretne frazy kluczowe oraz pod cytowalność w wyszukiwarkach AI</strong>, dzięki czemu może być znaleziony zarówno w Google, jak i w odpowiedziach ChatGPT czy Perplexity.
              </p>
            </div>
          </div>
        </section>

        <!-- ── Section 2: Jakie teksty ───────────────────────────────────── -->
        <section
          aria-labelledby="section-included"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

              <div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">edit_note</span>
                  Treści dla całej strony
                </span>

                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Jakie teksty piszemy
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    Piszemy treści dla całej strony, nie tylko pojedynczej podstrony — od pierwszego ekranu po opisy produktów i bloga.
                  </p>
                  <p>
                    Wszystkie teksty piszemy po polsku jako native, nie jako tłumaczenie z angielskiego czy niemieckiego. Teksty można zamówić jako część
                    <NuxtLink to="/strona-internetowa" class="text-primary font-semibold hover:underline">projektu strony</NuxtLink>
                    lub jako oddzielną usługę, gdy stronę masz już gotową.
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
              Ile kosztują teksty na stronę — model wyceny
            </h2>

            <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 mb-8">
              <p class="text-on-surface-variant mb-1">Teksty na stronę www</p>
              <p class="font-display text-3xl sm:text-4xl font-black text-primary mb-1">Per podstrona lub projekt</p>
              <p class="text-sm text-on-surface-variant">bezpłatna wycena · podaj liczbę podstron</p>
            </div>

            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Teksty na stronę wyceniamy per podstrona lub per projekt — wycena zależy od liczby podstron. Nie ma jednej ceny za „teksty na stronę", bo strona z pięcioma podstronami i sklep z dwustoma opisami produktów to zupełnie inny nakład pracy.
              </p>
              <p>
                Żeby otrzymać szybką i konkretną wycenę, wystarczy podać liczbę podstron i ich rodzaj — strona główna, podstrony usług, blog, opisy produktów. Na koszt wpływa też, czy dostarczasz materiały merytoryczne, czy musimy je zebrać w wywiadzie. Im więcej konkretów dostarczysz na starcie, tym niższy koszt i krótszy termin.
              </p>
              <p>
                Jeśli zamawiasz u nas również projekt lub wykonanie strony, teksty wyceniamy łącznie z całością i często taniej, niż jako osobne zlecenie.
              </p>
            </div>

            <div class="mt-10">
              <NuxtLink to="/kontakt">
                <BaseButton variant="outline" size="md">Omów projekt i poznaj wycenę</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ── Section 4: AI vs copywriter ───────────────────────────────── -->
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
                Teksty z AI czy od copywritera SEO — co konwertuje i pozycjonuje
              </h2>
              <p class="text-on-surface-variant">
                Generatory AI piszą teksty w sekundy i za darmo — to realna alternatywa. Pytanie nie brzmi „czy AI umie pisać", tylko „czy tekst z generatora sprzedaje i pozycjonuje tak samo jak pisany pod konkretny cel".
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
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
                  <tr
                    v-for="(row, i) in compareRows"
                    :key="row.label"
                    class="border-b border-outline-variant/20"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'"
                  >
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.ai }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.seo }}</td>
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

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Tekst z AI wystarcza na szybką notatkę albo punkt wyjścia do dalszej pracy. Na stronę, która ma budować wiarygodność i sprzedawać, brakuje mu trzech rzeczy: konkretnych faktów o Twojej firmie, spójnego tonu i strategii fraz. W praktyce sami korzystamy z narzędzi AI jako wsparcia, ale finalny tekst powstaje pod konkretny cel, frazy i markę — bo to one decydują o konwersji.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak powstają teksty"
          title="Jak powstają teksty — od briefu do gotowej treści"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o teksty na stronę www"
          :faqs="faqData"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Teksty, które sprzedają i pozycjonują"
      description="Podaj liczbę podstron — wrócimy z wyceną i przykładem tonu, zanim zaczniemy pisać."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
