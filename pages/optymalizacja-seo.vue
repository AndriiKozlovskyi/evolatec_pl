<script setup lang="ts">

// ─── SEO Meta ──────────────────────────────────────────────────────────────

useSeoMeta({
  title: 'Optymalizacja SEO Strony — On-Page i Tech SEO | EvolaTec',
  description: 'Optymalizacja SEO strony internetowej: meta tagi, Core Web Vitals, Schema.org, linkowanie wewnętrzne. Od 1 260 zł netto/mies. Bez stałej umowy na start.',
  ogTitle: 'Optymalizacja SEO Strony — On-Page i Tech SEO | EvolaTec',
  ogDescription: 'Optymalizacja SEO strony internetowej: meta tagi, Core Web Vitals, Schema.org, linkowanie wewnętrzne. Od 1 260 zł netto/mies. Bez stałej umowy na start.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/optymalizacja-seo',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

// ─── Schema ────────────────────────────────────────────────────────────────

const faqData = [
  {
    question: 'Co to jest SEO i czy warto w nie inwestować?',
    answer: 'SEO to zestaw działań technicznych i treściowych, które sprawiają, że strona pojawia się wyżej w organicznych wynikach Google bez płacenia za każde kliknięcie. Inwestycja ma sens, jeśli Twoi klienci szukają w Google tego, co oferujesz — co dotyczy zdecydowanej większości firm usługowych i lokalnych w Polsce. Po 6–12 miesiącach dobrze prowadzone SEO zwraca się lepiej niż Google Ads, bo pozycje organiczne nie znikają po zatrzymaniu budżetu.',
  },
  {
    question: 'Ile czasu zajmuje pozycjonowanie strony w Google?',
    answer: 'Pierwsze zmiany pozycji pojawiają się po 6–12 tygodniach od wdrożenia poprawek technicznych. Widoczny wzrost ruchu organicznego — zazwyczaj po 3–6 miesiącach, zależnie od konkurencji na docelowych frazach i aktualnego stanu technicznego strony. Frazy lokalne pozycjonują się szybciej niż ogólnopolskie z wysokim monthly search volume.',
  },
  {
    question: 'Czym różni się SEO od Google Ads?',
    answer: 'SEO buduje pozycje w organicznych wynikach Google — bez kosztu za kliknięcie, z efektami, które pozostają po zakończeniu współpracy. Google Ads daje ruch od pierwszego dnia, ale każde kliknięcie kosztuje od kilku do kilkudziesięciu złotych, a ruch znika w ciągu 24 godzin po zatrzymaniu budżetu. SEO potrzebuje 3–6 miesięcy na pierwsze efekty, Google Ads działa natychmiast — ale nie buduje trwałej widoczności.',
  },
  {
    question: 'Co to jest GEO optymalizacja?',
    answer: 'GEO (Generative Engine Optimization) to optymalizacja strony pod asystentów AI — ChatGPT, Google Gemini, Perplexity i Copilot. Gdy użytkownik pyta „dobra agencja SEO w Warszawie" bezpośrednio w ChatGPT, GEO sprawia, że Twoja firma może być cytowana jako odpowiedź. Kluczowe elementy GEO to dane strukturalne Schema.org JSON-LD, kompletne i cytowalne odpowiedzi na konkretne pytania oraz treści z liczbami i faktami weryfikowalnymi przez modele językowe.',
  },
  {
    question: 'Jak szybkość ładowania strony wpływa na pozycję w Google?',
    answer: 'Google używa Core Web Vitals — LCP, CLS i INP — jako sygnałów rankingowych od 2021 roku. Strona, która ładuje się powyżej 2,5 sekundy (LCP), dostaje niższe oceny w porównaniu z konkurencją spełniającą normy. Strony budowane w Nuxt.js ładują się poniżej 1 sekundy i osiągają wynik Lighthouse 95–100/100 — zamiast typowych 40–70/100 dla WordPress z wtyczkami.',
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
      sameAs: [
        'https://g.page/evolatec-pl',
        'https://www.linkedin.com/company/evolatec',
      ],
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
      '@id': 'https://evolatec.pl/optymalizacja-seo#webpage',
      url: 'https://evolatec.pl/optymalizacja-seo',
      name: 'Optymalizacja SEO Strony — On-Page i Tech SEO | EvolaTec',
      description: 'Optymalizacja SEO strony internetowej: meta tagi, Core Web Vitals, Schema.org, linkowanie wewnętrzne. Od 1 260 zł netto/mies.',
      isPartOf: { '@id': 'https://evolatec.pl/#website' },
      about: { '@id': 'https://evolatec.pl/#organization' },
      inLanguage: 'pl-PL',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.speakable-intro'],
      },
      breadcrumb: { '@id': 'https://evolatec.pl/optymalizacja-seo#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://evolatec.pl/optymalizacja-seo#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://evolatec.pl' },
        { '@type': 'ListItem', position: 2, name: 'Pozycjonowanie SEO', item: 'https://evolatec.pl/seo' },
        { '@type': 'ListItem', position: 3, name: 'Optymalizacja SEO', item: 'https://evolatec.pl/optymalizacja-seo' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://evolatec.pl/optymalizacja-seo#service',
      name: 'Optymalizacja SEO strony internetowej',
      description: 'Miesięczna optymalizacja on-page i techniczna SEO: meta tagi, Core Web Vitals, Schema.org, linkowanie wewnętrzne i monitoring pozycji fraz.',
      url: 'https://evolatec.pl/optymalizacja-seo',
      serviceType: 'Search Engine Optimization',
      provider: { '@id': 'https://evolatec.pl/#organization' },
      areaServed: { '@type': 'Country', name: 'Poland' },
      offers: {
        '@type': 'Offer',
        priceSpecification: {
          '@type': 'PriceSpecification',
          minPrice: '1260',
          priceCurrency: 'PLN',
          unitText: 'miesięcznie',
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      '@type': 'HowTo',
      '@id': 'https://evolatec.pl/optymalizacja-seo#howto',
      name: 'Jak przebiega optymalizacja SEO strony — etapy',
      description: 'Proces optymalizacji SEO w EvolaTec: od audytu wstępnego przez wdrożenie poprawek do monitoringu pozycji.',
      step: [
        {
          '@type': 'HowToStep', position: 1,
          name: 'Audyt wstępny i priorytetyzacja',
          text: 'Analiza błędów crawlowania w Google Search Console, Core Web Vitals w PageSpeed Insights, struktury meta tagów i nagłówków oraz aktualnych pozycji na docelowych frazach.',
        },
        {
          '@type': 'HowToStep', position: 2,
          name: 'Wdrożenie poprawek technicznych i on-page',
          text: 'Naprawa błędów crawlowania, optymalizacja title i meta description, poprawa struktury nagłówków, wdrożenie Schema.org i poprawa czasu ładowania — bezpośrednio w kodzie, bez wtyczek.',
        },
        {
          '@type': 'HowToStep', position: 3,
          name: 'Monitoring i skalowanie',
          text: 'Śledzenie zmian pozycji na monitorowanych frazach i rozszerzanie optymalizacji na kolejne podstrony. Miesięczny raport z wykonanymi działaniami i rankingami fraz.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://evolatec.pl/optymalizacja-seo#faq',
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
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/optymalizacja-seo' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(mainSchema) }],
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
  { value: 'od 1 260 zł', label: 'Miesięcznie netto',  icon: 'sell'          },
  { value: '6–12 tyg.',   label: 'Pierwsze efekty',    icon: 'trending_up'   },
  { value: 'On-page',     label: 'i techniczne SEO',   icon: 'tune'          },
  { value: 'Bez umowy',   label: 'Na start',            icon: 'verified'      },
]

const comparisonRows = [
  { label: 'Co obejmuje',          onpage: 'Meta tagi, nagłówki H1–H4, treści, frazy, linkowanie wewnętrzne', tech: 'Core Web Vitals, crawlability, URL, canonical, Schema.org, szybkość' },
  { label: 'Kto to widzi',         onpage: 'Użytkownik i Google (treść strony)',      tech: 'Głównie Googlebot (kod i infrastruktura)'   },
  { label: 'Efekty po wdrożeniu',  onpage: '4–8 tygodni',                            tech: '2–6 tygodni (indeksowanie po crawlu)'        },
  { label: 'Jak sprawdzić',        onpage: 'GSC → Wyniki wyszukiwania',               tech: 'GSC → Pokrycie, PageSpeed Insights'          },
  { label: 'Kiedy priorytet',      onpage: 'Strona indeksowana, ale nie rankuje',     tech: 'Błędy crawlowania lub wolne ładowanie'       },
  { label: 'EvolaTec',             onpage: 'Ręczna optymalizacja każdej podstrony',  tech: 'Wbudowane w kod — bez wtyczek'              },
]

const processSteps = [
  {
    icon: 'manage_search',
    title: 'Audyt wstępny i priorytetyzacja',
    description: 'Przed wdrożeniem jakichkolwiek zmian analizujemy aktualny stan strony: błędy crawlowania w Google Search Console, Core Web Vitals w PageSpeed Insights, strukturę meta tagów i nagłówków oraz obecne pozycje na docelowych frazach. Wynikiem jest lista priorytetowych poprawek — bez tego wdrożenia są przypadkowe, a nie strategiczne.',
  },
  {
    icon: 'code',
    title: 'Wdrożenie poprawek technicznych i on-page',
    description: 'W pierwszym miesiącu skupiamy się na zmianach o największym wpływie: naprawa błędów crawlowania, optymalizacja title i meta description na priorytetowych podstronach, poprawa struktury nagłówków, wdrożenie lub korekta danych strukturalnych Schema.org i — jeśli potrzeba — poprawa czasu ładowania. Zmiany wdrażane są bezpośrednio w kodzie, nie przez wtyczki.',
  },
  {
    icon: 'trending_up',
    title: 'Monitoring i skalowanie',
    description: 'Od drugiego miesiąca śledzimy zmiany pozycji na monitorowanych frazach i rozszerzamy optymalizację na kolejne podstrony. Pierwsze zmiany pozycji pojawiają się po 6–12 tygodniach od wdrożenia poprawek technicznych. Każdy miesiąc kończy raport z wykonanymi działaniami i rankingami fraz.',
  },
]

const relatedServices = [
  {
    icon: 'search_check',
    title: 'Audyt SEO',
    description: 'Jednorazowy raport techniczny z priorytetyzowaną listą poprawek — 840 zł netto, bez abonamentu.',
    price: '840 zł netto',
    href: '/audyt-seo',
  },
  {
    icon: 'location_on',
    title: 'Lokalne SEO',
    description: 'Miesięczna obsługa SEO dla firm lokalnych — Google Business Profile i frazy lokalne.',
    price: 'od 1 260 zł netto',
    href: '/lokalne-seo',
  },
  {
    icon: 'hub',
    title: 'SEO + Linkbuilding',
    description: 'Pełna obsługa on-page, content SEO i regularne pozyskiwanie linków z tematycznych domen.',
    price: 'od 2 100 zł netto',
    href: '/link-building',
  },
]
</script>

<template>
  <div>

    <!-- ── Hero ─────────────────────────────────────────────────────────── -->
    <HeroSection
      badge="Optymalizacja SEO — on-page i techniczne"
      title="Optymalizacja SEO – spraw, żeby Google pokochał Twoją stronę"
      description="On-page SEO i techniczne poprawki wdrażane bezpośrednio w kodzie — bez wtyczek, bez przypadkowych działań. Od 1 260 zł netto miesięcznie, pierwsze efekty po 6–12 tygodniach."
      primaryCTA="Uzyskaj bezpłatną wycenę"
      secondaryCTA="Co obejmuje optymalizacja"
      primary-href="/kontakt"
      secondary-href="#zakres"
      :stats="heroStats"
    />

    <main id="main-content">

      <nav aria-label="breadcrumb" class="max-w-container-max mx-auto px-gutter py-4">
        <ol class="flex items-center gap-2 text-sm text-on-surface-variant">
          <li><NuxtLink to="/" class="hover:text-primary transition-colors">Strona główna</NuxtLink></li>
          <li aria-hidden="true"><span class="material-symbols-outlined text-sm">chevron_right</span></li>
          <li><NuxtLink to="/seo" class="hover:text-primary transition-colors">Pozycjonowanie SEO</NuxtLink></li>
          <li aria-hidden="true"><span class="material-symbols-outlined text-sm">chevron_right</span></li>
          <li aria-current="page" class="text-on-surface font-medium">Optymalizacja SEO</li>
        </ol>
      </nav>

      <article>

        <!-- ── Section 1: Co obejmuje — white, 2-col z NuxtImg ─────────── -->
        <section id="zakres" aria-labelledby="section-scope" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-4 py-2 text-sm font-medium text-primary mb-6">
                  <span class="material-symbols-outlined text-[18px]" aria-hidden="true">tune</span>
                  On-page i techniczne SEO
                </span>
                <h2 id="section-scope" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                  Co obejmuje optymalizacja SEO strony internetowej
                </h2>
                <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                  <p>
                    Strona, która istnieje od roku i nadal nie pojawia się w Google, rzadko ma problem z ilością treści. Najczęstszy powód to kilkanaście technicznych błędów, które Google widzi zanim w ogóle dotrze do tekstu.
                  </p>
                  <p>
                    Optymalizacja SEO to nie jednorazowe działanie, ale proces wdrażania konkretnych zmian w dwóch warstwach: on-page i technicznej. Warstwa on-page obejmuje meta tagi, strukturę nagłówków H1–H4, frazy kluczowe i linkowanie wewnętrzne. Warstwa techniczna obejmuje Core Web Vitals (LCP, CLS, INP), crawlability, URL, canonical tagi, Schema.org JSON-LD i indeksowalność przez Googlebot.
                  </p>
                  <p>
                    <strong class="text-on-surface">SEO techniczne jest wbudowane w kod strony — nie zależy od wtyczek ani zewnętrznych narzędzi.</strong> Poprawki działają po wdrożeniu i nie dezaktualizują się po kolejnej aktualizacji CMS.
                  </p>
                </div>
              </div>

              <div data-reveal="right">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=640&h=420&fit=crop&auto=format&q=80"
                  alt="Specjalista SEO weryfikujący Core Web Vitals i wyniki Google PageSpeed Insights na monitorze"
                  width="640"
                  height="420"
                  class="w-full rounded-2xl border border-outline-variant/30 shadow-sm object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 2: On-page vs techniczne SEO ──────────────────────── -->
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
                Optymalizacja on-page vs techniczne SEO — czym się różnią
              </h2>
              <p class="text-on-surface-variant">
                Wielu właścicieli stron nie wie, czy ich problem leży w treści, czy w kodzie. To ważne pytanie, bo odpowiedź zmienia zakres i koszt pracy — i decyduje, od czego zacząć.
              </p>
            </div>

            <!-- Desktop table -->
            <div class="hidden md:block overflow-x-auto rounded-2xl border border-outline-variant/30 mb-8">
              <table class="w-full text-sm">
                <caption class="sr-only">Porównanie optymalizacji on-page z technicznym SEO</caption>
                <thead>
                  <tr class="bg-surface-container-low border-b-2 border-outline-variant/40">
                    <th class="text-left p-4 font-bold text-on-surface w-1/4" scope="col">Obszar</th>
                    <th class="text-center p-4 font-bold text-primary bg-primary/5" scope="col">Optymalizacja on-page</th>
                    <th class="text-center p-4 font-bold text-on-surface-variant" scope="col">Techniczne SEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(row, i) in comparisonRows"
                    :key="row.label"
                    class="border-b border-outline-variant/20"
                    :class="i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low/40'"
                  >
                    <td class="p-4 font-semibold text-on-surface">{{ row.label }}</td>
                    <td class="p-4 text-center text-primary font-medium bg-primary/5">{{ row.onpage }}</td>
                    <td class="p-4 text-center text-on-surface-variant">{{ row.tech }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Mobile cards -->
            <div class="md:hidden space-y-3 mb-8">
              <div
                v-for="row in comparisonRows"
                :key="row.label"
                class="bg-white rounded-xl border border-outline-variant/30 p-4"
              >
                <p class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">{{ row.label }}</p>
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-primary/5 rounded-lg p-3 text-center border border-primary/15">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-primary mb-1">On-page</p>
                    <p class="text-xs text-primary font-semibold leading-snug">{{ row.onpage }}</p>
                  </div>
                  <div class="bg-surface-container-low rounded-lg p-3 text-center">
                    <p class="text-[10px] font-semibold uppercase tracking-wide text-on-surface-variant mb-1">Techniczne</p>
                    <p class="text-xs text-on-surface-variant leading-snug">{{ row.tech }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="max-w-3xl mx-auto text-on-surface-variant">
              <p>
                Większość stron potrzebuje obu warstw jednocześnie, bo techniczne błędy blokują efekty on-page — Google nie ocenia treści strony, której nie może poprawnie zaindeksować. Dlatego każdy projekt optymalizacji zaczynamy od krótkiego audytu, który wskazuje, gdzie leży główny problem.
              </p>
            </div>

          </div>
        </section>

        <!-- ── Section 3: Cena — primary (purple) ───────────────────────── -->
        <section id="cennik" aria-labelledby="section-price" class="relative overflow-hidden py-section-padding bg-primary">
          <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="animate-float          absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
            <div class="animate-float-reverse  absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          </div>
          <div class="relative max-w-container-max mx-auto px-gutter">
            <div class="grid lg:grid-cols-2 gap-stack-lg items-center">

              <div data-reveal="left">
                <span class="text-xs font-bold uppercase tracking-[0.25em] text-on-primary/60 mb-3 block">Cena</span>
                <h2 id="section-price" class="font-display text-3xl sm:text-4xl font-black text-on-primary leading-tight mb-6">
                  Optymalizacja SEO — cena i zakres
                </h2>
                <div class="space-y-4 text-on-primary/80 leading-relaxed">
                  <p>
                    Optymalizacja SEO kosztuje od 1 260 zł netto miesięcznie — bez stałej umowy na start. Minimalne zaangażowanie to 3 miesiące, bo Google potrzebuje czasu na ponowne zaindeksowanie zmian.
                  </p>
                  <p>
                    W ramach miesięcznej obsługi wykonujemy optymalizację meta tagów i nagłówków, techniczne SEO (szybkość ładowania, Core Web Vitals), wdrożenie Schema.org oraz optymalizację treści pod wybrane frazy. Każdy miesiąc kończy się raportem z rankingami i listą wykonanych działań.
                  </p>
                  <p>
                    Jeśli nie wiesz, od czego zacząć — zamów jednorazowy audyt SEO za 840 zł netto. Raport wskazuje dokładnie, które poprawki mają największy wpływ na pozycje.
                  </p>
                </div>
                <div class="flex flex-wrap gap-3 mt-8">
                  <NuxtLink to="/kontakt">
                    <BaseButton variant="outline" size="lg">Uzyskaj bezpłatną wycenę</BaseButton>
                  </NuxtLink>
                  <NuxtLink to="/audyt-seo">
                    <BaseButton variant="secondary" size="lg">Zamów audyt SEO — 840 zł</BaseButton>
                  </NuxtLink>
                </div>
              </div>

              <div data-reveal="right">
                <div class="bg-white rounded-2xl p-8 shadow-xl">
                  <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <span class="material-symbols-outlined text-primary text-[26px]" aria-hidden="true">tune</span>
                  </div>
                  <h3 class="font-bold text-on-surface text-xl mb-2">Optymalizacja SEO</h3>
                  <div class="flex items-baseline gap-2 mb-1">
                    <span class="font-black text-primary text-3xl">od 1 260 zł netto</span>
                  </div>
                  <p class="text-sm text-on-surface-variant mb-6">miesięcznie — minimum 3 miesiące</p>
                  <ul class="space-y-2 mb-8" role="list">
                    <li v-for="item in ['Optymalizacja meta tagów i nagłówków', 'Techniczne SEO i Core Web Vitals', 'Dane strukturalne Schema.org JSON-LD', 'Linkowanie wewnętrzne', 'Optymalizacja treści pod frazy', 'Monitoring pozycji fraz', 'Raport miesięczny z działaniami']" :key="item" class="flex items-center gap-2 text-sm text-on-surface-variant">
                      <span class="material-symbols-outlined text-primary text-base flex-shrink-0" aria-hidden="true">check_circle</span>
                      {{ item }}
                    </li>
                  </ul>
                  <NuxtLink to="/kontakt">
                    <BaseButton variant="primary" size="lg" class="w-full">Uzyskaj bezpłatną wycenę</BaseButton>
                  </NuxtLink>
                  <p class="text-xs text-on-surface-variant text-center mt-4">Stała cena — wycena przed startem projektu</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        <!-- ── Section 4: Etapy ───────────────────────────────────────────── -->
        <ProcessSection
          eyebrow="Jak pracujemy"
          title="Jak przebiega optymalizacja SEO strony — etapy"
          :steps="processSteps"
        />

        <!-- ── Section 5: FAQ ─────────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o optymalizację SEO"
          :faqs="faqData"
        />

        <!-- ── Related services ───────────────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Może Cię zainteresować"
          cta="Dowiedz się więcej"
          :services="relatedServices"
        />

      </article>
    </main>

    <!-- ── CTA ───────────────────────────────────────────────────────────── -->
    <CTASection
      title="Zacznij optymalizację SEO swojej strony"
      description="Opisz projekt — wrócimy ze stałą wyceną i zakresem działań na pierwsze 3 miesiące."
      primary-cta="Uzyskaj bezpłatną wycenę"
      secondary-cta="Sprawdź audyt SEO"
      primary-href="/kontakt"
      secondary-href="/audyt-seo"
    />

  </div>
</template>
