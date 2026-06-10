<template>
  <div class="bg-surface">
    <!-- TOP CTA: zakładki + treść od razu na górze -->
    <section class="pt-8 md:pt-14 pb-8 md:pb-12">
      <div class="max-w-3xl mx-auto px-gutter">
        <!-- Nagłówek nad zakładkami -->
        <div class="text-center mb-6">
          <h1 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface leading-tight">
            Jak chcesz zacząć?
          </h1>
          <p class="text-sm sm:text-base text-on-surface-variant mt-2">
            Zarezerwuj termin lub napisz zapytanie — Ty decydujesz.
          </p>
        </div>

        <!-- Zakładki -->
        <div class="flex bg-surface-container-low rounded-full p-1 mb-6 max-w-md mx-auto">
          <button
            @click="hasConsented ? (tab = 'call') : focusBanner()"
            :class="[
              'flex-1 py-2.5 px-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]',
              tab === 'call' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">event</span>
            Zarezerwuj termin
          </button>
          <button
            @click="tab = 'form'"
            :class="[
              'flex-1 py-2.5 px-3 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]',
              tab === 'form' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:text-primary',
            ]"
          >
            <span class="material-symbols-outlined text-lg">mail</span>
            Wyślij zapytanie
          </button>
        </div>

        <!-- Zakładka: TERMIN -->
        <div v-show="tab === 'call'" class="bg-white rounded-2xl shadow-md border border-outline-variant/20 p-3 sm:p-4 animate-fade-in-up">
          <!-- Cal.com inline widget -->
          <div class="rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-low">
            <iframe
              v-if="hasConsented"
              :src="calComEmbedUrl"
              title="Zarezerwuj termin"
              loading="lazy"
              class="w-full h-[620px] sm:h-[680px] md:h-[720px] border-0 block"
              allow="payment"
            />
            <div
              v-else
              class="flex flex-col items-center justify-center gap-3 p-10 text-center h-64 cursor-pointer"
              @click="focusBanner"
            >
              <span class="material-symbols-outlined text-primary text-4xl">cookie</span>
              <p class="text-sm font-bold text-on-surface">Wymagane ustawienia plików cookie</p>
              <p class="text-xs text-on-surface-variant max-w-xs leading-relaxed">
                Najpierw ustaw swoje
                <button type="button" @click.stop="focusBanner" class="text-primary font-semibold underline underline-offset-2">ustawienia plików cookie</button>,
                aby zarezerwować termin.
              </p>
            </div>
          </div>

          <!-- Dodatkowe kanały kontaktu pod widgetem -->
          <div class="grid grid-cols-2 gap-2 mt-3">
            <a
              :href="contact.phoneTel"
              class="group flex items-center gap-2 bg-surface-container-low rounded-lg p-3 hover:bg-primary/5 transition-colors"
            >
              <span class="material-symbols-outlined text-primary text-lg">phone</span>
              <span class="text-xs sm:text-sm font-semibold text-on-surface truncate">Zadzwoń</span>
            </a>
            <a
              :href="contact.whatsapp"
              target="_blank"
              rel="noopener"
              class="group flex items-center gap-2 bg-surface-container-low rounded-lg p-3 hover:bg-primary/5 transition-colors"
            >
              <span class="material-symbols-outlined text-primary text-lg">chat</span>
              <span class="text-xs sm:text-sm font-semibold text-on-surface">WhatsApp</span>
            </a>
          </div>

          <p class="text-xs text-on-surface-variant/70 text-center mt-3">
            Widget nie ładuje się?
            <a :href="calComUrl" target="_blank" rel="noopener" class="text-primary font-semibold hover:underline">Otwórz w nowej karcie</a>
          </p>
        </div>

        <!-- Zakładka: FORMULARZ -->
        <div v-show="tab === 'form'" class="bg-white rounded-2xl shadow-md border border-outline-variant/20 p-5 sm:p-7 animate-fade-in-up">
          <ContactForm />
        </div>
      </div>
    </section>

    <!-- Blok tekstowy — bezpłatna konsultacja -->
    <section class="bg-white border-y border-outline-variant/30 py-10 md:py-14">
      <div class="max-w-3xl mx-auto px-gutter text-center">
        <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3">
          Bezpłatna konsultacja
        </span>
        <h2 class="font-display text-2xl sm:text-3xl md:text-4xl font-black text-on-surface leading-tight mb-4">
          Odpowiedź w ciągu 24 godzin
        </h2>
        <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
          Opowiedz nam krótko o swoim projekcie. Sprawdzimy zapytanie i odezwiemy się z
          <span class="text-on-surface font-semibold">niewiążącą ofertą</span>
          lub propozycją terminu rozmowy — niezależnie od tego, czy chodzi o landing page, stronę firmową czy sklep internetowy.
        </p>

        <div class="flex flex-wrap gap-2 justify-center mt-5">
          <span v-for="chip in trustChips" :key="chip" class="inline-flex items-center gap-1.5 bg-primary/5 border border-primary/10 rounded-full px-3 py-1 text-xs sm:text-sm text-on-surface font-medium">
            <span class="material-symbols-outlined text-base text-primary">check</span>
            {{ chip }}
          </span>
        </div>
      </div>
    </section>

    <!-- Skrót do kalkulatora cen -->
    <section class="py-8 md:py-12">
      <div class="max-w-3xl mx-auto px-gutter">
        <a
          href="/kalkulator-kosztow"
          class="flex items-center justify-between gap-4 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl p-4 sm:p-5 hover:shadow-lg transition-shadow duration-200 group"
        >
          <div class="flex items-center gap-4 min-w-0">
            <div class="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
              <span class="material-symbols-outlined">calculate</span>
            </div>
            <div class="min-w-0">
              <p class="text-xs uppercase tracking-wider text-white/70 font-semibold">Szybkie sprawdzenie</p>
              <p class="text-sm sm:text-base font-bold">Oblicz swój koszt już teraz</p>
            </div>
          </div>
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>
    </section>

    <!-- FAQ -->
    <FAQSection title="Najczęściej zadawane pytania" :faqs="faqs" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { hasConsented, focusBanner } = useCookieConsent()
const contact = useContact()

const tab = ref<'call' | 'form'>('call')

const calComUrl = 'https://cal.eu/evolatec/15min'
const calComEmbedUrl = 'https://cal.eu/evolatec/15min?embed=true&layout=month_view&theme=light&hideEventTypeDetails=false'

const trustChips = [
  'Bez zobowiązań',
  'Odpowiedź w 24h',
  'Zgodność z RODO',
]

const faqs = [
  {
    question: 'Co dzieje się po wysłaniu zapytania?',
    answer: 'Sprawdzamy Twoje zapytanie i odezwiemy się w ciągu 24 godzin z niewiążącą ofertą lub propozycjami terminów rozmowy wstępnej. Podczas rozmowy omawiamy Twoje cele, wymagania i budżet — następnie otrzymujesz szczegółową ofertę ze stałą ceną.',
  },
  {
    question: 'Czy konsultacja jest naprawdę bezpłatna i bez zobowiązań?',
    answer: 'Tak, rozmowa wstępna i wynikająca z niej oferta są całkowicie bezpłatne i bez zobowiązań. Nie zaciągasz żadnych zobowiązań.',
  },
  {
    question: 'Czy można zacząć z małym budżetem?',
    answer: 'Tak, landing page już od 2 100 zł, strony firmowe od 6 300 zł, a audyty SEO od 420 zł. Skorzystaj z naszego kalkulatora kosztów, aby uzyskać szybką wycenę swojego projektu.',
  },
  {
    question: 'Jak szybko EvolaTec odpowiada na zapytania?',
    answer: 'Na zapytania kontaktowe odpowiadamy zazwyczaj w ciągu kilku godzin, najpóźniej jednak w ciągu 24 godzin w dni robocze. W pilnych sprawach możesz się z nami skontaktować również bezpośrednio przez WhatsApp.',
  },
  {
    question: 'Kiedy jesteście dostępni?',
    answer: 'Jesteśmy dostępni od poniedziałku do piątku w godzinach 9–17. W pilnych sprawach poza tymi godzinami napisz do nas na WhatsApp.',
  },
  {
    question: 'Dla jakich firm pracuje EvolaTec?',
    answer: 'EvolaTec obsługuje firmy z całej Polski — zarówno lokalne, jak i ogólnopolskie. Większość projektów realizujemy zdalnie poprzez wideorozmowy, e-mail i narzędzia do zarządzania projektami.',
  },
  {
    question: 'Czy oferujecie stałe ceny czy rozliczenie godzinowe?',
    answer: 'Pracujemy z przejrzystymi ofertami ze stałą ceną. Przed rozpoczęciem projektu wiesz dokładnie, ile kosztuje — bez niespodziewanych kosztów dodatkowych. Rozliczenie godzinowe stosujemy wyłącznie przy konsultacjach lub mniejszych zadaniach specjalnych (od 210 zł/godzina).',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

useSeoMeta({
  title: 'Kontakt – Bezpłatna Konsultacja | EvolaTec',
  description: 'Skontaktuj się z EvolaTec. Bezpłatna konsultacja dla Twojej strony lub sklepu internetowego. Zarezerwuj termin lub wyślij zapytanie — odpowiedź w 24 godziny.',
  ogTitle: 'Kontakt – Bezpłatna Konsultacja | EvolaTec',
  ogDescription: 'Skontaktuj się z EvolaTec. Bezpłatna konsultacja dla Twojej strony lub sklepu internetowego. Zarezerwuj termin lub wyślij zapytanie — odpowiedź w 24 godziny.',
  ogType: 'website',
  ogUrl: 'https://evolatec.pl/kontakt',
  ogImage: 'https://evolatec.pl/og-image.webp',
  twitterCard: 'summary_large_image',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/kontakt' }],
  script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(faqSchema) }],
})
</script>
