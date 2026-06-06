<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'UI/UX Design — projektowanie interfejsów | EvolaTec',
  description: 'UI/UX Design: audyt UX, mapy ścieżek, wireframy, interaktywny prototyp w Figmie, projekt interfejsu i specyfikacja dla developerów. Wycena indywidualna.',
  ogTitle: 'UI/UX Design — projektowanie interfejsów | EvolaTec',
  ogDescription: 'UI/UX Design: audyt UX, mapy ścieżek, wireframy, prototyp w Figmie, projekt interfejsu i specyfikacja dla developerów. Wycena indywidualna.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/ui-ux-design',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Ile kosztuje projekt UI/UX?',
    answer: 'Projekt UX wyceniamy indywidualnie w zależności od liczby ekranów i złożoności aplikacji. Sam audyt UX istniejącej strony to inny nakład niż zaprojektowanie aplikacji od zera z prototypem i testami. Wycena jest bezpłatna i zależy od liczby ekranów i ścieżek, poziomu dopracowania oraz tego, czy projekt obejmuje testy z użytkownikami. Najtańszym pierwszym krokiem jest zwykle sam audyt UX.',
  },
  {
    question: 'Czym różni się UI od UX?',
    answer: 'UI odpowiada za wygląd interfejsu, UX za to, jak się go używa — projekt obejmuje oba. UI to kolory, typografia i układ ekranu; UX to ścieżki, struktura i to, czy użytkownik bez wysiłku osiąga swój cel. Ładny ekran z mylącą ścieżką to dobry UI i zły UX. Dobry produkt potrzebuje obu naraz.',
  },
  {
    question: 'Co to jest prototyp w Figmie i po co go robić?',
    answer: 'Prototyp w Figmie to interaktywna, klikalna wersja interfejsu zbudowana przed napisaniem kodu. Pozwala przejść przez produkt jak przez gotową aplikację i przetestować ścieżki, zanim powstanie development. Dzięki temu błędy w sposobie korzystania wychodzą na jaw na etapie, na którym poprawka to zmiana w Figmie, a nie kosztowna przeróbka działającego kodu.',
  },
  {
    question: 'Dla kogo jest projekt UX?',
    answer: 'Projekt UX najbardziej opłaca się przy aplikacjach webowych, SaaS, sklepach i serwisach z dużym ruchem — wszędzie tam, gdzie użytkownik wykonuje wieloetapowe zadania, a sposób korzystania bezpośrednio wpływa na konwersję. Przy prostej stronie firmowej zwykle wystarcza projekt graficzny; im bardziej złożony produkt i im więcej kroków po stronie użytkownika, tym większy zwrot z pełnego procesu UX.',
  },
  {
    question: 'Co zawiera audyt UX?',
    answer: 'Audyt UX to analiza istniejącej strony lub aplikacji pod kątem przeszkód, na które natrafia użytkownik — mylących ścieżek, zbędnych kroków, miejsc, w których ludzie rezygnują. Wynik to lista konkretnych problemów z priorytetami i rekomendacjami zmian. Audyt jest najtańszym sposobem, by sprawdzić, gdzie produkt traci użytkowników, zanim zdecydujesz o pełnym przeprojektowaniu.',
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
        addressLocality: 'Wrocław',
        addressCountry: 'PL',
      },
      email: 'team@evolatec.pl',
      areaServed: [
        { '@type': 'Country', name: 'Poland' },
        { '@type': 'City', name: 'Wrocław' },
        { '@type': 'City', name: 'Kraków' },
        { '@type': 'City', name: 'Wrocław' },
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
      priceRange: '2100 zł – 25200 zł',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://evolatec.pl/ui-ux-design#webpage',
      url: 'https://evolatec.pl/ui-ux-design',
      name: 'UI/UX Design — projektowanie interfejsów | EvolaTec',
      description: 'UI/UX Design: audyt UX, mapy ścieżek, wireframy, interaktywny prototyp w Figmie, projekt interfejsu i specyfikacja dla developerów. Wycena indywidualna.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/ui-ux-design#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/ui-ux-design#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Projektowanie stron internetowych', item: 'https://evolatec.pl/projektowanie-stron' },
        { '@type': 'ListItem', position: 3, name: 'UI/UX Design', item: 'https://evolatec.pl/ui-ux-design' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/ui-ux-design#service',
      name: 'UI/UX Design',
      serviceType: 'Projektowanie interfejsów i doświadczeń użytkownika',
      description: 'Projekt UI/UX: audyt UX, mapy ścieżek użytkownika, wireframy lo-fi i hi-fi, interaktywny prototyp w Figmie, projekt graficzny interfejsu i specyfikacja dla developerów. Wycena indywidualna.',
      url: 'https://evolatec.pl/ui-ux-design',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/ui-ux-design#faq',
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
  name: 'Jak projektujemy UX — od audytu do prototypu',
  description: 'Proces projektowania UI/UX w EvolaTec: od audytu i researchu do interaktywnego prototypu i przekazania.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Audyt i research', text: 'Analizujemy istniejący produkt lub konkurencję i ustalamy, co użytkownik ma osiągnąć.' },
    { '@type': 'HowToStep', position: 2, name: 'Mapy ścieżek', text: 'Projektujemy, jak użytkownik przechodzi od wejścia do celu, eliminując zbędne kroki.' },
    { '@type': 'HowToStep', position: 3, name: 'Wireframy i prototyp', text: 'Budujemy układ ekranów i interaktywny prototyp w Figmie, który można przeklikać i przetestować.' },
    { '@type': 'HowToStep', position: 4, name: 'UI i przekazanie', text: 'Na zatwierdzonej strukturze tworzymy warstwę graficzną i specyfikację dla developerów.' },
  ],
}

useHead({
  htmlAttrs: { lang: 'pl' },
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/ui-ux-design' }],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(howToSchema) },
  ],
})

// ─── Page data ─────────────────────────────────────────────────────────────

// ─── Scroll reveal ─────────────────────────────────────────────────────────

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-revealed'); observer.unobserve(entry.target) } }) },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
  )
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
})

const heroStats = [
  { value: 'Audyt UX',  label: 'Najtańszy pierwszy krok', icon: 'query_stats'    },
  { value: 'Prototyp',  label: 'Klikalny, w Figmie',      icon: 'touch_app'      },
  { value: 'UI + UX',   label: 'Wygląd i działanie',      icon: 'design_services' },
  { value: 'Bezpłatna', label: 'Wycena indywidualna',     icon: 'request_quote'  },
]

const includedItems = [
  { icon: 'query_stats',  label: 'Audyt UX istniejącego produktu'    },
  { icon: 'route',        label: 'Mapa ścieżek użytkownika'          },
  { icon: 'dashboard',    label: 'Wireframy lo-fi i hi-fi'           },
  { icon: 'touch_app',    label: 'Interaktywny prototyp w Figmie'    },
  { icon: 'palette',      label: 'Projekt graficzny interfejsu'      },
  { icon: 'code',         label: 'Specyfikacja dla developerów'      },
]

const compareRows = [
  { label: 'Co obejmuje',        ui: 'Warstwę graficzną ekranów', ux: 'Badanie, ścieżki, prototyp, UI' },
  { label: 'Co wyłapuje',        ui: 'Wygląd i spójność',         ux: 'Błędy w sposobie korzystania'   },
  { label: 'Kiedy widać problem', ui: 'Po wdrożeniu, w kodzie',   ux: 'W prototypie, przed kodem'      },
  { label: 'Koszt poprawek',     ui: 'Wysoki — zmiana w kodzie',  ux: 'Niski — zmiana w Figmie'        },
  { label: 'Najlepsze dla',      ui: 'Prostych ekranów',          ux: 'Aplikacji, SaaS, sklepów'       },
]

const relatedServices = [
  { icon: 'corporate_fare', title: 'Strona firmowa', description: 'Wdrożenie zaprojektowanego interfejsu w Nuxt.js — Lighthouse 95–100.', price: 'od 6 300 zł netto', href: '/stworz-strone-firmowa' },
  { icon: 'brush', title: 'Branding', description: 'Identyfikacja wizualna spójna z projektem UI — logo, kolory, typografia.', price: 'Wycena indywidualna', href: '/branding' },
  { icon: 'web', title: 'Projektowanie stron', description: 'Projekt strony pod Twój produkt lub usługę — od wireframe po design.', price: 'Wycena indywidualna', href: '/projektowanie-stron' },
]

const processSteps = [
  {
    icon: 'query_stats',
    title: 'Audyt i research',
    description: 'Analizujemy istniejący produkt lub konkurencję i ustalamy, co użytkownik ma osiągnąć.',
  },
  {
    icon: 'route',
    title: 'Mapy ścieżek',
    description: 'Projektujemy, jak użytkownik przechodzi od wejścia do celu, eliminując zbędne kroki.',
  },
  {
    icon: 'touch_app',
    title: 'Wireframy i prototyp',
    description: 'Budujemy układ ekranów i interaktywny prototyp w Figmie, który można przeklikać i przetestować.',
  },
  {
    icon: 'code',
    title: 'UI i przekazanie',
    description: 'Na zatwierdzonej strukturze tworzymy warstwę graficzną i specyfikację dla developerów.',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="UI/UX Design"
      title="UI/UX Design — projektujemy interfejsy, które chce się używać"
      description="Audyt UX, mapy ścieżek, wireframy i interaktywny prototyp w Figmie — testujemy produkt, zanim powstanie kod. Projekt UI i specyfikacja dla developerów. Wycena indywidualna."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Zobacz projektowanie stron"
      primary-href="/kontakt"
      secondary-href="/projektowanie-stron"
      :stats="heroStats"
    />

    <main id="main-content">

      <!-- Breadcrumb -->

      <article>

        <!-- ── Section 1: UI vs UX ───────────────────────────────────────── -->
        <section
          aria-labelledby="section-why"
          class="py-section-padding bg-surface"
        >
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <h2
                  id="section-why"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Dlaczego ładny interfejs to nie to samo co dobry
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Aplikacja albo sklep mogą wyglądać świetnie i jednocześnie tracić użytkowników na każdym kroku. Ludzie nie kończą rejestracji, porzucają koszyk, nie znajdują funkcji, za którą zapłacili. Wygląd jest, a korzystanie boli — bo interfejs został pomalowany, a nie zaprojektowany pod sposób, w jaki ludzie naprawdę go używają.
                  </p>
                  <p>
                    Na tym polega różnica między UI a UX. <strong class="text-on-surface">UI odpowiada za wygląd interfejsu, UX za to, jak się go używa — projekt obejmuje oba.</strong> Ładny ekran, na którym przycisk „dalej" jest tam, gdzie nikt go nie szuka, to dobry UI i zły UX. Sam wygląd nie wyłapie, że ścieżka zakupu ma o dwa kroki za dużo albo że formularz odstrasza połowę użytkowników na trzecim polu.
                  </p>
                  <p>
                    Projektujemy interfejsy, zaczynając od tego, co użytkownik ma osiągnąć, a nie od tego, jak ekran ma wyglądać. Najpierw ścieżki i struktura, potem prototyp, który można przeklikać i przetestować, a dopiero na końcu warstwa graficzna. Dzięki temu błędy w sposobie korzystania wychodzą na jaw, zanim cokolwiek trafi do kodu.
                  </p>
                </div>
              </div>

              <div data-reveal="right" class="rounded-2xl overflow-hidden">
                <NuxtImg
                  src="/assets/ui-ux-design.webp"
                  alt="Projektant UX przy tablicy z wireframami strony internetowej — mapowanie ścieżki użytkownika i projekt interfejsu"
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
                  Proces oparty na testach
                </span>

                <h2
                  id="section-included"
                  class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6"
                >
                  Co obejmuje projekt UI/UX
                </h2>

                <div class="space-y-4 text-on-surface-variant leading-relaxed">
                  <p>
                    Projekt UI/UX to proces oparty na badaniu i testowaniu, z konkretnymi artefaktami na każdym etapie — nie zestaw ładnych ekranów.
                  </p>
                  <p>
                    Projekt UI/UX obejmuje audyt UX, wireframy, interaktywny prototyp w Figmie i specyfikację dla developerów. Dla
                    <NuxtLink to="/sklep-internetowy" class="text-primary font-semibold hover:underline">sklepów</NuxtLink>
                    i serwisów z dużym ruchem to różnica, która bezpośrednio przekłada się na konwersję.
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
              Ile kosztuje projekt UI/UX — model wyceny
            </h2>

            <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 mb-8">
              <p class="text-on-surface-variant mb-1">Projekt UI/UX</p>
              <p class="font-display text-3xl sm:text-4xl font-black text-primary mb-1">Wycena indywidualna</p>
              <p class="text-sm text-on-surface-variant">bezpłatna konsultacja · od audytu UX po pełny projekt</p>
            </div>

            <div class="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Projekt UX wyceniamy indywidualnie w zależności od liczby ekranów i złożoności aplikacji. Audyt UX istniejącej strony to inny nakład niż zaprojektowanie aplikacji od zera z prototypem i testami, dlatego nie ma jednej ceny.
              </p>
              <p>
                Na wycenę wpływają trzy rzeczy: liczba unikalnych ekranów i ścieżek do zaprojektowania, poziom dopracowania (sam audyt i wireframy czy pełny prototyp z warstwą graficzną) oraz czy projekt obejmuje testy użyteczności z udziałem użytkowników.
              </p>
              <p>
                Wycena jest bezpłatna i ustalana przed startem. Często najtańszym pierwszym krokiem jest sam audyt UX, który pokazuje, gdzie istniejący produkt traci użytkowników, zanim zdecydujesz o pełnym przeprojektowaniu.
              </p>
            </div>

            <div class="mt-10">
              <NuxtLink to="/kontakt">
                <BaseButton variant="outline" size="md">Omów projekt i poznaj wycenę</BaseButton>
              </NuxtLink>
            </div>
          </div>
        </section>

        <!-- ── Section 4: Samo UI vs pełny UX ────────────────────────────── -->
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
                Samo UI czy pełny proces UX — co wybrać
              </h2>
              <p class="text-on-surface-variant">
                Najczęstsza pokusa to zamówić „ładne ekrany" i przejść od razu do kodu, pomijając UX jako zbędny etap. Czasem to ma sens — przy prostym produkcie. Przy każdym, w którym użytkownik ma coś osiągnąć w kilku krokach, pominięcie UX wychodzi drożej, tylko później.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie samego projektu UI z pełnym procesem UX</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/4" scope="col">Kryterium</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Sam projekt UI</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Pełny proces UX</th>
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
                    <td class="p-4 text-center text-on-surface-variant">{{ row.ui }}</td>
                    <td class="p-4 text-center text-primary font-semibold bg-primary/5">{{ row.ux }}</td>
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
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Sam UI</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.ui }}</p>
                  </div>
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">Pełny UX</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.ux }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto">
              <p class="text-on-surface-variant">
                Sam projekt UI wystarcza, gdy struktura jest oczywista, a chodzi tylko o spójny wygląd. Pełny proces UX opłaca się tam, gdzie użytkownik wykonuje wieloetapowe zadania — rejestrację, zakup, konfigurację — bo koszt poprawienia ścieżki w prototypie jest ułamkiem kosztu przerabiania jej w gotowym kodzie. Im bardziej złożony produkt, tym wcześniej prototyp zwraca swój koszt.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 5: Proces ─────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak projektujemy UX"
          title="Jak projektujemy UX — od audytu do prototypu"
          :steps="processSteps"
        />

        <!-- ── Section 6: FAQ ────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o UI/UX Design"
          :faqs="faqData"
        />

        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Od projektu UX do wdrożonej strony"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Interfejs, którego chce się używać"
      description="Opisz produkt i jego główne funkcje — zaproponujemy zakres i wycenę, często zaczynając od audytu UX."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Omów projekt"
      primary-href="/kontakt"
      secondary-href="/kontakt"
    />

  </div>
</template>
