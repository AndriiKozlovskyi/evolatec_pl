<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Projektowanie stron internetowych — webdesign | EvolaTec',
  description: 'Projektowanie stron internetowych od podstaw, bez szablonów: wireframy, projekt graficzny desktop i mobile, design system. Wycena indywidualna, bezpłatna konsultacja.',
  ogTitle: 'Projektowanie stron internetowych — webdesign | EvolaTec',
  ogDescription: 'Projektowanie stron internetowych od podstaw, bez szablonów: wireframy, projekt desktop i mobile, design system. Wycena indywidualna.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/projektowanie-stron',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje projektowanie strony internetowej?',
    answer: 'Projektowanie strony wyceniamy indywidualnie, bo zakres bardzo się różni — od projektu jednej strony głównej po kompletny design system rozbudowanego serwisu. Wycena jest bezpłatna i zależy od liczby unikalnych ekranów, zakresu design systemu i tego, czy projekt obejmuje też wireframy i architekturę informacji. Jeśli zamawiasz u nas również wykonanie strony, projekt jest częścią realizacji i nie jest fakturowany osobno.',
  },
  {
    question: 'Czym różni się indywidualny projekt graficzny od gotowego szablonu?',
    answer: 'Gotowy szablon to motyw używany przez tysiące firm, dostosowywany tylko w ramach jego opcji. Indywidualny projekt powstaje od podstaw pod Twoją markę — kolory, typografia i układ są dobierane pod Twój cel i branżę. Szablon jest tańszy i szybszy, ale wygląda jak konkurencja; projekt indywidualny wyróżnia firmę i buduje wyższą postrzeganą wartość.',
  },
  {
    question: 'Czy mogę zamówić sam projekt strony bez jej wykonania?',
    answer: 'Tak. Projekt można zamówić jako oddzielną usługę z przekazaniem plików developerom — wtedy my projektujemy, a stronę wdraża Twój zespół. Dostajesz pełny design desktop i mobile, design system oraz specyfikację potrzebną do wdrożenia. To częsty wybór firm, które mają własnych programistów i potrzebują wyłącznie warstwy graficznej.',
  },
  {
    question: 'Co zawiera projekt graficzny strony internetowej?',
    answer: 'Projekt obejmuje wireframy i architekturę informacji, pełny projekt graficzny w wersji desktop i mobile oraz design system — spójny zestaw kolorów, typografii i komponentów. Jeśli stronę wdraża zewnętrzny zespół, dołączamy pliki i specyfikację do developmentu. Całość projektowana jest od podstaw, bez korzystania z gotowych szablonów.',
  },
  {
    question: 'Czym różni się projektowanie stron od UI/UX design?',
    answer: 'Projektowanie stron skupia się na warstwie wizualnej witryny — układzie, grafice i design systemie strony internetowej. UI/UX design to szerszy proces obejmujący badanie ścieżek użytkownika, prototypy i testy użyteczności, stosowany głównie przy aplikacjach i serwisach, gdzie sposób korzystania bezpośrednio wpływa na konwersję. Dla typowej strony firmowej wystarcza projekt graficzny; przy aplikacji warto sięgnąć po pełny proces UI/UX.',
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
      '@id': 'https://evolatec.pl/projektowanie-stron#webpage',
      url: 'https://evolatec.pl/projektowanie-stron',
      name: 'Projektowanie stron internetowych — webdesign | EvolaTec',
      description: 'Projektowanie stron internetowych od podstaw, bez szablonów: wireframy, projekt graficzny desktop i mobile, design system. Wycena indywidualna, bezpłatna konsultacja.',
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
      '@id': 'https://evolatec.pl/projektowanie-stron#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Projektowanie stron internetowych', item: 'https://evolatec.pl/projektowanie-stron' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/projektowanie-stron#service',
      name: 'Projektowanie stron internetowych',
      serviceType: 'Projektowanie graficzne i UI stron internetowych',
      description: 'Projektowanie stron internetowych od podstaw, bez szablonów: wireframy, architektura informacji, projekt graficzny desktop i mobile oraz design system. Wycena indywidualna.',
      url: 'https://evolatec.pl/projektowanie-stron',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/projektowanie-stron#faq',
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
  name: 'Jak projektujemy stronę — od wireframe do gotowego designu',
  description: 'Proces projektowania strony internetowej w EvolaTec: od briefu do przekazania gotowego designu.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Brief i research', text: 'Poznajemy markę, cel strony i konkurencję, ustalamy kierunek wizualny.' },
    { '@type': 'HowToStep', position: 2, name: 'Wireframy', text: 'Projektujemy układ i hierarchię treści w czerni i bieli, zanim wejdziemy w grafikę. Tu zapadają decyzje o strukturze.' },
    { '@type': 'HowToStep', position: 3, name: 'Projekt graficzny', text: 'Na zaakceptowanym układzie budujemy pełny design desktop i mobile wraz z design systemem.' },
    { '@type': 'HowToStep', position: 4, name: 'Poprawki i przekazanie', text: 'Wprowadzamy ustaloną liczbę rund poprawek, po czym przekazujemy gotowe pliki do wdrożenia lub wdrażamy stronę sami.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/projektowanie-stron' }],
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
  { value: 'Od zera', label: 'Projekt bez szablonów',  icon: 'draw'          },
  { value: '2 wersje',  label: 'Desktop i mobile',       icon: 'devices'       },
  { value: 'System',    label: 'Spójny design system',   icon: 'style'         },
  { value: 'Bezpłatna', label: 'Wycena indywidualna',    icon: 'request_quote' },
]

const includedItems = [
  { icon: 'account_tree', label: 'Wireframy i architektura informacji' },
  { icon: 'devices',      label: 'Projekt graficzny desktop i mobile'  },
  { icon: 'style',        label: 'Design system — kolory, typografia'  },
  { icon: 'code',         label: 'Przekazanie plików developerom'      },
]

const compareRows = [
  { label: 'Unikalność',            tpl: 'Wspólny dla tysięcy firm',  custom: 'Tworzony tylko dla Ciebie'      },
  { label: 'Dopasowanie do marki',  tpl: 'Ograniczone do opcji motywu', custom: 'Pełne — kolory, typografia, ton' },
  { label: 'Prowadzenie wzroku',    tpl: 'Układ uniwersalny',         custom: 'Zaprojektowany pod Twój cel'    },
  { label: 'Postrzegana wartość',   tpl: 'Jak u tańszej konkurencji', custom: 'Buduje pozycję premium'         },
  { label: 'Wyróżnienie w pamięci', tpl: 'Niskie',                    custom: 'Wysokie'                        },
]

const processSteps = [
  {
    icon: 'lightbulb',
    title: 'Brief i research',
    description: 'Poznajemy markę, cel strony i konkurencję, ustalamy kierunek wizualny.',
  },
  {
    icon: 'account_tree',
    title: 'Wireframy',
    description: 'Projektujemy układ i hierarchię treści w czerni i bieli, zanim wejdziemy w grafikę. Tu zapadają decyzje o strukturze.',
  },
  {
    icon: 'palette',
    title: 'Projekt graficzny',
    description: 'Na zaakceptowanym układzie budujemy pełny design desktop i mobile wraz z design systemem.',
  },
  {
    icon: 'handshake',
    title: 'Poprawki i przekazanie',
    description: 'Wprowadzamy ustaloną liczbę rund poprawek, po czym przekazujemy gotowe pliki do wdrożenia lub wdrażamy stronę sami.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Projektowanie stron internetowych"
      title="Projektowanie stron internetowych, które robią pierwsze wrażenie"
      description="Projektujemy strony od podstaw, bez szablonów — wireframy, projekt graficzny desktop i mobile oraz spójny design system. Wycena indywidualna, bezpłatna konsultacja."
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
            <li aria-current="page" class="text-on-surface font-medium">Projektowanie stron internetowych</li>
          </ol>
        </div>
      </nav>

      <article>

        <!-- ── Section 1: Pierwsze wrażenie ──────────────────────────────── -->
        <section
          aria-labelledby="section-impression"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <h2
                  id="section-impression"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Dlaczego wygląd strony decyduje w pierwszych sekundach
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Odwiedzający ocenia stronę, zanim ją przeczyta. Pierwsze wrażenie buduje się w ułamku sekundy i opiera się nie na treści, lecz na wyglądzie — układzie, kolorach, typografii. Jeśli strona wygląda jak setki innych, klient podświadomie zakłada, że firma też jest jedną z setek innych, i klika dalej.
                  </p>
                  <p>
                    To nie jest kwestia gustu, tylko zaufania. Strona oparta na popularnym szablonie wygląda znajomo, bo te same motywy używane są przez tysiące firm — w tym Twoją konkurencję. Znajomość działa tu przeciwko Tobie: nic nie wyróżnia, nic nie zostaje w pamięci, a podobieństwo do tańszych usługodawców obniża postrzeganą wartość Twojej oferty.
                  </p>
                  <p>
                    Projektujemy strony od podstaw, pod konkretną markę i branżę. <strong class="text-on-surface">Każdy projekt powstaje od podstaw, bez gotowych szablonów</strong> — od układu, przez kolory, po typografię dobraną do charakteru firmy. Celem nie jest „ładnie", tylko żeby wygląd budował zaufanie i prowadził wzrok dokładnie tam, gdzie ma trafić: do oferty i do kontaktu.
                  </p>
                </div>
              </div>

              <div data-reveal="right" class="rounded-2xl overflow-hidden">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=640&h=420&fit=crop&auto=format&q=80"
                  alt="Projektant UX szkicujący interfejs strony internetowej na tablecie — prototyp i projekt graficzny"
                  width="640"
                  height="420"
                  class="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: Co obejmuje ────────────────────────────────────── -->
        <section
          aria-labelledby="section-included"
          class="py-section-padding bg-surface-container-low"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-start">

              <div>
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">design_services</span>
                  Projekt od podstaw
                </span>

                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co obejmuje projektowanie strony internetowej
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    Projektowanie strony to proces z konkretnymi etapami i plikami na wyjściu, nie pojedyncza grafika. Obejmuje wszystko od struktury po gotowy do wdrożenia design.
                  </p>
                  <p>
                    Projekt można zamówić jako część realizacji strony lub jako oddzielną usługę z przekazaniem plików developerom — wtedy projektujemy, a Twój zespół koduje. Sam layout to jeszcze nie gotowa strona — potrzebne są też
                    <NuxtLink to="/copywriting" class="text-primary font-semibold hover:underline">teksty na stronę</NuxtLink>.
                    Dla aplikacji i serwisów z dużym ruchem warto rozszerzyć projekt o pełny
                    <NuxtLink to="/ui-ux-design" class="text-primary font-semibold hover:underline">proces UI/UX</NuxtLink>.
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
              Ile kosztuje projektowanie strony — i co wpływa na wycenę
            </h2>

            <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 mb-8">
              <p class="text-on-surface-variant mb-1">Projektowanie strony</p>
              <p class="font-display text-3xl sm:text-4xl font-black text-primary mb-1">Wycena indywidualna</p>
              <p class="text-sm text-on-surface-variant">bezpłatna konsultacja · cena ustalana przed startem</p>
            </div>

            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Projektowanie strony wyceniamy indywidualnie, bo zakres różni się tu bardziej niż przy gotowych pakietach. Wycena jest bezpłatna i ustalana przed startem — podajemy konkretną kwotę, gdy wiemy, co dokładnie ma powstać.
              </p>
              <p>
                Na wycenę wpływają trzy rzeczy: liczba unikalnych ekranów do zaprojektowania (strona główna i podstrona usługi to inny nakład niż dziesięć różnych layoutów), zakres design systemu oraz to, czy projekt obejmuje samą grafikę, czy też wireframy i architekturę informacji od zera.
              </p>
              <p>
                Jeśli zamawiasz u nas również wykonanie strony, projekt jest częścią realizacji i nie jest osobno fakturowany. Jako oddzielną usługę — gdy stronę wdraża Twój zespół — wyceniamy projekt per zakres po krótkiej rozmowie o tym, co ma powstać.
              </p>
            </div>

            <div class="mt-10">
              <NuxtLink to="/kontakt">
                <BaseButton variant="outline" size="md">Omów projekt i poznaj wycenę</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ── Section 4: Szablon vs projekt ─────────────────────────────── -->
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
                Gotowy szablon czy indywidualny projekt — co widzi klient
              </h2>
              <p class="text-on-surface-variant">
                Szablon kosztuje mniej i rusza szybciej — to jego jedyne dwie realne przewagi. Reszta różnicy jest po stronie tego, co widzi i czuje Twój klient, a tego nie widać w cenie na starcie.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie gotowego szablonu z indywidualnym projektem graficznym</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/3" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Gotowy szablon</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Indywidualny projekt</th>
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
                    <td class="p-4 text-center text-on-surface-variant">{{ row.tpl }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.custom }}</td>
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
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Szablon</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.tpl }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Projekt</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.custom }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Szablon ma sens, gdy liczy się wyłącznie najniższy koszt i czas, a wygląd jest drugorzędny. Indywidualny projekt opłaca się wtedy, gdy strona ma budować wizerunek i konkurować o klienta, dla którego liczy się wrażenie. Spójny wygląd najlepiej działa w parze z dopracowaną
                <NuxtLink to="/branding" class="text-primary font-semibold hover:underline">identyfikacją wizualną</NuxtLink>.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak projektujemy"
          title="Jak projektujemy stronę — od wireframe do gotowego designu"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o projektowanie stron internetowych"
          :faqs="faqData"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zaprojektujemy stronę, która wyróżnia"
      description="Opisz markę i cel strony — wrócimy z kierunkiem wizualnym i wyceną przed startem projektu."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
