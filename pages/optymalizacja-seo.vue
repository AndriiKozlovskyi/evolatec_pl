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
      address: { '@type': 'PostalAddress', addressLocality: 'Wrocław', addressCountry: 'PL' },
      email: 'team@evolatec.pl',
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

// ── Dlaczego optymalizacja jest ważna (BenefitsSection — karty ze zdjęciem) ──
const benefits = [
  {
    icon: 'speed',
    title: 'Szybsze ładowanie strony',
    description: 'Wolne strony tracą pozycje i odwiedzających. Optymalizujemy obrazy, JavaScript, CSS i czas odpowiedzi serwera.',
    image: '/assets/seo-optimization.webp',
  },
  {
    icon: 'assessment',
    title: 'Lepsze Core Web Vitals',
    description: 'Google ocenia Core Web Vitals bezpośrednio w rankingu. Poprawiamy LCP, INP i CLS do wyników w zielonej strefie.',
    image: '/assets/web-analytics.webp',
  },
  {
    icon: 'smartphone',
    title: 'Optymalizacja mobile-first',
    description: 'Ponad 60% wyszukiwań pochodzi z telefonów. Wersja mobilna to dziś podstawa, nie dodatek.',
    image: '/assets/mobile-app.webp',
  },
]

// ── Nasze usługi optymalizacji (FeaturesSection — primary + zdjęcie) ─────────
const features = [
  {
    icon: 'speed',
    title: 'Szybkość ładowania',
    description: 'Obrazy, CSS, JavaScript i czas odpowiedzi serwera optymalizowane pod Core Web Vitals.',
  },
  {
    icon: 'architecture',
    title: 'Struktura strony',
    description: 'URL, nagłówki, nawigacja i linkowanie wewnętrzne uporządkowane pod SEO.',
  },
  {
    icon: 'data_object',
    title: 'Dane strukturalne',
    description: 'Schema.org JSON-LD: Service, FAQPage, BreadcrumbList — czytelne dla Google i AI.',
  },
  {
    icon: 'engineering',
    title: 'Crawling i indeksowanie',
    description: 'Naprawa błędów crawlowania, canonical tagi i poprawna indeksowalność przez Googlebot.',
  },
]

// ── Częste problemy techniczne (sekcja split — jak w wersji DE) ──────────────
const commonProblems = [
  'Wolne ładowanie (powyżej 3 sekund)',
  'Słabe wyniki Core Web Vitals',
  'Nieoptymalizowane obrazy',
  'Problemy z wersją mobilną',
  'Mixed content i braki HTTPS',
  'Nieczytelna struktura adresów URL',
]

const processSteps = [
  {
    icon: 'speed',
    title: 'Analiza wydajności',
    description: 'Techniczna analiza Core Web Vitals w Lighthouse i PageSpeed Insights.',
  },
  {
    icon: 'bug_report',
    title: 'Identyfikacja błędów',
    description: 'Wykrycie i priorytetyzacja wszystkich technicznych problemów SEO.',
  },
  {
    icon: 'priority_high',
    title: 'Priorytetyzacja',
    description: 'Plan optymalizacji ułożony według wpływu na pozycje w Google.',
  },
  {
    icon: 'build',
    title: 'Wdrożenie techniczne',
    description: 'Optymalizacja szybkości, poprawki SEO i zmiany w strukturze — w kodzie.',
  },
  {
    icon: 'monitoring',
    title: 'Monitoring',
    description: 'Stała kontrola, testy i kolejne usprawnienia po wdrożeniu.',
  },
]

const seoCompareRows = [
  { criterion: 'Co obejmuje', onpage: 'Meta tagi, nagłówki H1–H4, treści, frazy kluczowe, linkowanie wewnętrzne', tech: 'Core Web Vitals, crawlability, URL, canonical, Schema.org, szybkość ładowania' },
  { criterion: 'Kto to widzi', onpage: 'Użytkownik i Google (treść strony)', tech: 'Głównie Googlebot (kod i infrastruktura)' },
  { criterion: 'Efekty po wdrożeniu', onpage: '4–8 tygodni', tech: '2–6 tygodni (po ponownym crawlowaniu)' },
  { criterion: 'Jak sprawdzić problem', onpage: 'Google Search Console → Wyniki wyszukiwania', tech: 'Google Search Console → Pokrycie, PageSpeed Insights' },
  { criterion: 'Kiedy zacząć', onpage: 'Gdy strona jest indeksowana, ale nie rankuje na frazy', tech: 'Gdy strona ma błędy crawlowania lub wolno się ładuje' },
  { criterion: 'Narzędzie EvolaTec', onpage: 'Ręczna optymalizacja każdej podstrony', tech: 'Wbudowane w kod — bez wtyczek' },
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
      secondaryCTA="Bezpłatna konsultacja"
      primary-href="/kontakt"
      secondary-href="/kontakt"
      :stats="heroStats"
    />

    <main id="main-content">

      <article>

        <!-- ── Dlaczego optymalizacja jest ważna (BenefitsSection — white) ── -->
        <BenefitsSection
          title="Dlaczego techniczna optymalizacja SEO jest ważna"
          :benefits="benefits"
        />

        <!-- ── Optymalizacja on-page vs techniczne SEO (tabela porównawcza) ── -->
        <section aria-labelledby="section-onpage-vs-tech" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <h2 id="section-onpage-vs-tech" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
              Optymalizacja on-page vs techniczne SEO — czym się różnią
            </h2>
            <p class="text-on-surface-variant mb-10 leading-relaxed">Wielu właścicieli stron nie wie, czy problem leży w treści, czy w kodzie. To ważne pytanie — odpowiedź zmienia zakres i koszt pracy oraz decyduje, od czego zacząć.</p>
            <div class="rounded-2xl bg-white shadow-md overflow-hidden border-2 border-outline-variant/50 mb-8">
              <table class="w-full border-collapse">
                <caption class="sr-only">Porównanie optymalizacji on-page z technicznym SEO</caption>
                <thead>
                  <tr class="bg-surface-container-low">
                    <th class="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Obszar</th>
                    <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b-2 border-r border-outline-variant/40" scope="col">Optymalizacja on-page</th>
                    <th class="px-5 py-4 text-center text-[11px] font-bold uppercase tracking-widest text-primary border-b-2 border-outline-variant/40" scope="col">Techniczne SEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in seoCompareRows" :key="i" class="border-b border-outline-variant/30 last:border-0 hover:bg-surface-container-low/60 transition-colors duration-150">
                    <td class="px-6 py-4 text-sm font-medium text-on-surface border-r border-outline-variant/30">{{ row.criterion }}</td>
                    <td class="px-5 py-4 text-center text-sm text-on-surface-variant border-r border-outline-variant/30">{{ row.onpage }}</td>
                    <td class="px-5 py-4 text-center text-sm font-bold text-primary bg-primary-fixed">{{ row.tech }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-sm text-on-surface-variant text-center">Większość stron potrzebuje obu warstw jednocześnie — techniczne błędy blokują efekty on-page. Dlatego każdy projekt optymalizacji zaczynamy od krótkiego audytu wskazującego główny problem.</p>
          </div>
        </section>

        <!-- ── Nasze usługi optymalizacji (FeaturesSection — primary) ──────── -->
        <FeaturesSection
          title="Co obejmuje optymalizacja SEO strony"
          :features="features"
          image-url="/assets/code-editor.webp"
          image-alt="Edytor kodu z optymalizacją technicznego SEO i danych strukturalnych Schema.org"
        />

        <!-- ── Optymalizacja SEO — cena i zakres ─────────────────────────── -->
        <section aria-labelledby="section-cena-seo" class="py-section-padding bg-surface-container-low">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="max-w-3xl mx-auto">
              <h2 id="section-cena-seo" class="font-display text-3xl sm:text-4xl font-black text-on-surface leading-tight mb-6">
                Optymalizacja SEO — cena i zakres
              </h2>
              <div class="space-y-4 text-on-surface-variant leading-relaxed speakable-intro">
                <p>Optymalizacja SEO kosztuje od 1 260 zł netto miesięcznie — bez stałej umowy na start. Minimalne zaangażowanie to 3 miesiące, bo Google potrzebuje czasu na ponowne zaindeksowanie zmian i ocenę zaktualizowanej strony. Agencja, która obiecuje widoczne efekty w ciągu 30 dni, myli optymalizację z reklamą.</p>
                <p>W ramach miesięcznej obsługi wykonujemy optymalizację meta tagów i nagłówków priorytetowych podstron, poprawę struktury URL jeśli tego wymaga, techniczne SEO (szybkość ładowania, mobile, crawl budget), optymalizację Core Web Vitals, wdrożenie lub aktualizację danych strukturalnych Schema.org oraz optymalizację treści pod wybrane frazy kluczowe. Każdy miesiąc kończy się raportem z rankingami monitorowanych fraz i listą wykonanych działań.</p>
                <p>Jeśli nie wiesz, od czego zacząć — przed podpisaniem czegokolwiek możesz zamówić jednorazowy <NuxtLink to="/audyt-seo" class="text-primary font-semibold hover:underline">audyt SEO</NuxtLink> za 840 zł netto. Raport wskazuje dokładnie, które poprawki mają największy wpływ na pozycje Twojej strony.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ── Jak optymalizujemy stronę (ProcessSection — container-low) ──── -->
        <ProcessSection
          eyebrow="Jak pracujemy"
          title="Jak przebiega optymalizacja SEO strony — etapy"
          :steps="processSteps"
        />

        <!-- ── Częste problemy techniczne SEO (split image + lista) ───────── -->
        <section data-nav-label="Problemy" data-nav-icon="bug_report" class="py-section-padding bg-surface">
          <div class="max-w-container-max mx-auto px-gutter">
            <div class="grid md:grid-cols-2 gap-stack-lg items-center">
              <div class="relative rounded-2xl overflow-hidden aspect-[3/2] md:aspect-auto md:h-80 shadow-2xl order-2 md:order-1">
                <NuxtImg
                  src="/assets/seo-analytics.webp"
                  alt="Analiza technicznych problemów SEO w Google Search Console i PageSpeed Insights"
                  class="w-full h-full object-cover"
                  width="840"
                  height="560"
                  sizes="100vw md:576px"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              </div>
              <div class="order-1 md:order-2">
                <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight">Częste problemy techniczne SEO</h2>
                <div class="space-y-3">
                  <div v-for="problem in commonProblems" :key="problem" class="flex gap-3 items-center p-3 rounded-lg border border-black/10 glass-card">
                    <span class="material-symbols-outlined text-red-400 text-xl flex-shrink-0">cancel</span>
                    <span class="font-body-md text-on-surface">{{ problem }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ── FAQ (container-low) ────────────────────────────────────────── -->
        <FAQSection
          title="Najczęściej zadawane pytania o optymalizację SEO"
          :faqs="faqData"
        />

        <!-- ── Powiązane usługi (surface) ─────────────────────────────────── -->
        <RelatedServicesSection
          eyebrow="Powiązane usługi"
          title="Może Cię zainteresować"
          cta="Dowiedz się więcej"
          :services="relatedServices"
          background="bg-surface"
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
