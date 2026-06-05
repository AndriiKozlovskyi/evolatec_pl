<template>
  <div class="bg-surface-container-low">

    <!-- Header -->
    <section class="bg-primary text-on-primary">
      <div class="max-w-3xl mx-auto px-gutter py-14 md:py-20 text-center">
        <div class="inline-flex w-14 h-14 rounded-2xl bg-white/10 items-center justify-center mb-5">
          <span class="material-symbols-outlined text-[1.9rem]">shield_person</span>
        </div>
        <h1 class="font-display text-3xl md:text-4xl font-black mb-3">Polityka prywatności</h1>
        <p class="text-on-primary/70 max-w-lg mx-auto leading-relaxed">
          Transparentna informacja o tym, jakie dane przetwarzamy — i na jakiej podstawie. Zgodna z RODO, ustawą o ochronie danych osobowych i Prawem komunikacji elektronicznej z 2024 r.
        </p>
        <span class="inline-block mt-6 text-xs font-bold uppercase tracking-[0.15em] bg-white/10 rounded-full px-4 py-1.5">
          Ostatnia aktualizacja: czerwiec 2026
        </span>
      </div>
    </section>

    <!-- Content -->
    <div class="max-w-3xl mx-auto px-gutter pb-16 md:pb-24 -mt-10">
      <article class="bg-white rounded-2xl border border-outline-variant/20 shadow-sm p-6 sm:p-10">

        <!-- TOC -->
        <nav class="bg-surface-container-low rounded-xl p-5 sm:p-6 mb-12" aria-label="Spis treści">
          <p class="font-bold text-on-surface text-sm mb-4">Spis treści</p>
          <ol class="grid sm:grid-cols-2 gap-x-6 gap-y-1">
            <li v-for="(entry, i) in toc" :key="entry.id">
              <a
                :href="`#${entry.id}`"
                class="group flex items-center gap-3 py-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                <span class="w-6 h-6 shrink-0 rounded-md bg-white border border-outline-variant/30 text-xs font-bold text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-colors">
                  {{ i + 1 }}
                </span>
                {{ entry.label }}
              </a>
            </li>
          </ol>
        </nav>

        <!-- 1 -->
        <h2 id="administrator" class="legal-h2"><span class="legal-num">1</span>Administrator danych osobowych</h2>
        <p class="legal-p">Zgodnie z art. 13 ust. 1 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO), administratorem Pani/Pana danych osobowych zbieranych za pośrednictwem serwisu <strong class="text-on-surface">evolatec.pl</strong> jest:</p>
        <div class="legal-card">
          <p class="font-bold text-on-surface mb-1">EvolaTec</p>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            Maksym Streltsov<br>
            Desenißstraße 14, 22083 Hamburg, Germany<br>
            Działalność nierejestrowana — brak NIP/VAT i REGON
          </p>
          <div class="flex flex-col gap-1.5 mt-3 pt-3 border-t border-outline-variant/20">
            <a href="tel:+48789711631" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-base">phone</span>+48 789 711 631
            </a>
            <a href="mailto:team@evolatec.pl" class="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors">
              <span class="material-symbols-outlined text-base">mail</span>team@evolatec.pl
            </a>
          </div>
        </div>
        <p class="legal-p">Administrator nie wyznaczył Inspektora Ochrony Danych (IOD). We wszystkich sprawach dotyczących ochrony danych osobowych należy kontaktować się bezpośrednio z administratorem pod adresem e-mail podanym powyżej.</p>

        <!-- 2 -->
        <h2 id="hosting" class="legal-h2"><span class="legal-num">2</span>Hosting (Netlify)</h2>
        <p class="legal-p">Serwis jest hostowany przez zewnętrznego dostawcę:</p>
        <div class="legal-card">
          <p class="font-bold text-on-surface mb-1">Netlify, Inc.</p>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            512 2nd Street, Suite 200, San Francisco, CA 94107, USA<br>
            Polityka prywatności: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener" class="legal-a">netlify.com/privacy</a>
          </p>
        </div>
        <p class="legal-p">Dane przetwarzane przez Netlify to przede wszystkim adresy IP, logi dostępu oraz dane przesyłane przez formularz kontaktowy. Hosting odbywa się na podstawie art. 6 ust. 1 lit. b RODO (wykonanie umowy lub podjęcie działań przed jej zawarciem) oraz art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora — zapewnienie stabilności i bezpieczeństwa serwisu). Z Netlify zawarta jest umowa powierzenia przetwarzania danych (DPA). Netlify jest certyfikowany w ramach „EU-US Data Privacy Framework" (DPF), co stanowi odpowiednią gwarancję bezpieczeństwa przekazania danych do USA zgodnie z art. 46 RODO.</p>

        <!-- 3 -->
        <h2 id="logi" class="legal-h2"><span class="legal-num">3</span>Logi serwera i wizyty w serwisie</h2>
        <h3 class="legal-h3">Cel i zakres przetwarzania</h3>
        <p class="legal-p">Przy każdej wizycie w serwisie serwer Netlify automatycznie rejestruje dane techniczne przesyłane przez przeglądarkę użytkownika:</p>
        <ul class="legal-ul">
          <li>adres IP urządzenia końcowego,</li>
          <li>typ i wersja przeglądarki internetowej,</li>
          <li>system operacyjny,</li>
          <li>adres URL strony odsyłającej (referrer),</li>
          <li>data i godzina żądania,</li>
          <li>kod odpowiedzi HTTP.</li>
        </ul>
        <h3 class="legal-h3">Podstawa prawna i okres przechowywania</h3>
        <p class="legal-p">Podstawą prawną jest art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes administratora polegający na zapewnieniu technicznej sprawności serwisu, wykrywaniu błędów i ochronie przed atakami sieciowymi. Dane logów są przechowywane przez maksymalnie <strong class="text-on-surface">12 miesięcy</strong>, a następnie są anonimizowane lub usuwane. Dane te nie są łączone z innymi źródłami informacji o użytkowniku.</p>

        <!-- 4 -->
        <h2 id="formularz" class="legal-h2"><span class="legal-num">4</span>Formularz kontaktowy</h2>
        <h3 class="legal-h3">Cel i zakres przetwarzania</h3>
        <p class="legal-p">Skorzystanie z formularza kontaktowego wiąże się z podaniem następujących danych: imię i nazwisko, adres e-mail, numer telefonu (opcjonalnie) oraz treść wiadomości. Dane są przetwarzane wyłącznie w celu odpowiedzi na przesłane zapytanie lub podjęcia działań zmierzających do zawarcia umowy.</p>
        <h3 class="legal-h3">Przetwarzanie przez Netlify Forms</h3>
        <p class="legal-p">Formularz obsługiwany jest przez usługę <strong class="text-on-surface">Netlify Forms</strong> — część infrastruktury hostingowej Netlify, Inc. Przesłane dane są tymczasowo przechowywane na serwerach Netlify i udostępniane administratorowi w panelu zarządzania. Do ochrony przed spamem stosowane jest rozwiązanie typu honeypot, bez dodatkowego tworzenia profili użytkowników. Z Netlify zawarta jest umowa powierzenia przetwarzania danych.</p>
        <h3 class="legal-h3">Podstawa prawna i okres przechowywania</h3>
        <p class="legal-p">Podstawą prawną jest art. 6 ust. 1 lit. b RODO (podjęcie działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy) lub art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes w zakresie sprawnej obsługi zapytań). Dane przechowywane są przez okres niezbędny do realizacji zapytania, a następnie do upływu ogólnego terminu przedawnienia roszczeń wynoszącego <strong class="text-on-surface">3 lata</strong> (zgodnie z art. 118 Kodeksu cywilnego), o ile przepisy szczególne nie stanowią inaczej.</p>

        <!-- 5 -->
        <h2 id="email-telefon" class="legal-h2"><span class="legal-num">5</span>Kontakt e-mail i telefoniczny</h2>
        <p class="legal-p">Kontaktując się z administratorem bezpośrednio za pomocą adresu e-mail lub numeru telefonu, przekazują Państwo dane osobowe (m.in. adres e-mail, imię, numer telefonu, treść wiadomości). Dane te są przetwarzane wyłącznie w celu obsługi Państwa zapytania lub realizacji umowy.</p>
        <p class="legal-p">Podstawą prawną jest art. 6 ust. 1 lit. b RODO lub — jeżeli zapytanie nie jest bezpośrednio związane z zawarciem umowy — art. 6 ust. 1 lit. f RODO (uzasadniony interes w zakresie sprawnej komunikacji). Dane przechowywane są do czasu zakończenia sprawy, a w przypadku nawiązania stosunku umownego — przez czas trwania umowy i okres przedawnienia ewentualnych roszczeń.</p>

        <!-- 6 -->
        <h2 id="whatsapp" class="legal-h2"><span class="legal-num">6</span>Kontakt przez WhatsApp</h2>
        <p class="legal-p">Na stronie dostępny jest przycisk umożliwiający nawiązanie kontaktu przez <strong class="text-on-surface">WhatsApp</strong>. Połączenie z serwerami WhatsApp nawiązywane jest dopiero po aktywnym kliknięciu przycisku — nie dochodzi do automatycznego ładowania zasobów przy wejściu na stronę. Dostawcą usługi jest WhatsApp Ireland Limited, 4 Grand Canal Square, Dublin 2, Irlandia (podmiot zależny Meta Platforms, Inc., USA).</p>
        <p class="legal-p">Po kliknięciu przycisku i nawiązaniu kontaktu WhatsApp przetwarza dane takie jak numer telefonu, treść i czas wiadomości. Administrator nie ma wpływu na przetwarzanie danych przez WhatsApp. Możliwe jest przekazanie danych do USA — Meta Platforms, Inc. jest certyfikowana w ramach EU-US Data Privacy Framework. Szczegółowe informacje znajdują się w <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener" class="legal-a">Polityce prywatności WhatsApp</a>.</p>
        <p class="legal-p">Udostępnienie linku do WhatsApp oparte jest na art. 6 ust. 1 lit. f RODO (uzasadniony interes w zakresie zapewnienia dodatkowego kanału komunikacji). Dalsza komunikacja przez WhatsApp odbywa się na podstawie art. 6 ust. 1 lit. a RODO — Państwa zgody wyrażonej przez zainicjowanie kontaktu.</p>

        <!-- 7 -->
        <h2 id="cookies" class="legal-h2"><span class="legal-num">7</span>Pliki cookie i podobne technologie</h2>
        <h3 class="legal-h3">Podstawa prawna — Prawo komunikacji elektronicznej (PKE 2024)</h3>
        <p class="legal-p">Zasady stosowania plików cookie reguluje <strong class="text-on-surface">Prawo komunikacji elektronicznej z dnia 12 lipca 2024 r.</strong> (Dz.U. 2024 poz. 1221), które weszło w życie 10 listopada 2024 r., implementując Dyrektywę ePrivacy. Zgodnie z art. 388 i nast. PKE, przechowywanie informacji w urządzeniu końcowym użytkownika lub dostęp do takich informacji jest dopuszczalne wyłącznie za uprzednią i dobrowolną zgodą użytkownika — z wyjątkiem plików cookie niezbędnych technicznie, dla których zgoda nie jest wymagana.</p>

        <h3 class="legal-h3">Zarządzanie zgodą — własne rozwiązanie</h3>
        <p class="legal-p">Serwis korzysta z własnego, wbudowanego systemu zarządzania zgodami na pliki cookie — bez korzystania z zewnętrznych platform CMP. Wszystkie preferencje zapisywane są lokalnie na urządzeniu użytkownika. Przy pierwszej wizycie wyświetlany jest baner z wyborem trzech kategorii:</p>
        <ul class="legal-ul">
          <li><strong class="text-on-surface">Niezbędne</strong> — technicznie wymagane do prawidłowego działania serwisu (m.in. przechowywanie statusu zgody). Stosowane na podstawie art. 390 ust. 3 PKE — zgoda nie jest wymagana.</li>
          <li><strong class="text-on-surface">Analityczne</strong> — statystyki oglądalności. Aktualnie nie są stosowane żadne narzędzia analityczne; jeśli zostaną wdrożone w przyszłości, stosowane będą wyłącznie po uzyskaniu uprzedniej zgody (art. 6 ust. 1 lit. a RODO i art. 388 PKE).</li>
          <li><strong class="text-on-surface">Marketingowe</strong> — remarketing i śledzenie konwersji. Aktualnie nie są stosowane; w razie wdrożenia — wyłącznie na podstawie uprzedniej, wyraźnej zgody.</li>
        </ul>
        <p class="legal-p">Wyrażona zgoda zapisywana jest w pliku cookie <code class="bg-surface-container-low px-1.5 py-0.5 rounded text-xs font-mono">evolatec-cookie-consent</code> wraz ze znacznikiem czasu i numerem wersji, przez maksymalnie <strong class="text-on-surface">12 miesięcy</strong>. Zgodę można wycofać w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.</p>

        <h3 class="legal-h3">Przegląd plików cookie</h3>
        <p class="legal-p">Poniżej przedstawiony jest bieżący status zgód oraz stosowane pliki cookie. Ustawienia można zmienić w dowolnej chwili.</p>
        <CookieDeclaration class="mt-3" />

        <!-- 8 -->
        <h2 id="czcionki" class="legal-h2"><span class="legal-num">8</span>Zasoby zewnętrzne — czcionki i ikony</h2>
        <h3 class="legal-h3">Czcionki Inter i Material Symbols — pobieranie lokalne</h3>
        <p class="legal-p">Serwis korzysta z czcionki <strong class="text-on-surface">Inter</strong> oraz ikon <strong class="text-on-surface">Material Symbols Outlined</strong>. Oba zasoby są pobierane i przechowywane lokalnie na serwerze serwisu — nie są ładowane z zewnętrznych serwerów Google. Oznacza to, że odwiedzenie serwisu nie powoduje nawiązania połączenia z serwerami Google w celu pobrania czcionek ani ikon. Żadne dane osobowe odwiedzających (w szczególności adresy IP) nie są przekazywane do Google w związku z wyświetlaniem typografii lub ikon.</p>

        <!-- 9 -->
        <h2 id="prawa" class="legal-h2"><span class="legal-num">9</span>Prawa osoby, której dane dotyczą</h2>
        <p class="legal-p">Zgodnie z art. 15–22 RODO przysługują Państwu następujące prawa w odniesieniu do przetwarzanych danych osobowych:</p>
        <div class="grid sm:grid-cols-2 gap-3 my-4">
          <div v-for="right in rights" :key="right.title" class="legal-card !mb-0 flex gap-3">
            <span class="material-symbols-outlined text-primary text-xl shrink-0">{{ right.icon }}</span>
            <div>
              <p class="font-bold text-on-surface text-sm">{{ right.title }} <span class="font-normal text-on-surface-variant/70">· {{ right.law }}</span></p>
              <p class="text-sm text-on-surface-variant leading-relaxed mt-0.5">{{ right.text }}</p>
            </div>
          </div>
        </div>

        <h3 class="legal-h3">Prawo sprzeciwu (art. 21 RODO)</h3>
        <div class="legal-callout">
          <span class="material-symbols-outlined text-primary text-xl shrink-0">gavel</span>
          <p class="text-xs leading-relaxed text-on-surface-variant font-medium">
            JEŻELI PRZETWARZANIE DANYCH OSOBOWYCH ODBYWA SIĘ NA PODSTAWIE ART. 6 UST. 1 LIT. F RODO (PRAWNIE UZASADNIONY INTERES), MAJĄ PAŃSTWO PRAWO W DOWOLNYM MOMENCIE WNIEŚĆ SPRZECIW WOBEC PRZETWARZANIA DANYCH — Z PRZYCZYN ZWIĄZANYCH Z PAŃSTWA SZCZEGÓLNĄ SYTUACJĄ. ADMINISTRATOR ZAPRZESTANIE PRZETWARZANIA DANYCH, CHYBA ŻE WYKAŻE ISTNIENIE WAŻNYCH PRAWNIE UZASADNIONYCH PODSTAW DO PRZETWARZANIA, NADRZĘDNYCH WOBEC PAŃSTWA INTERESÓW, PRAW I WOLNOŚCI, LUB PODSTAW DO USTALENIA, DOCHODZENIA LUB OBRONY ROSZCZEŃ (ART. 21 UST. 1 RODO).
          </p>
        </div>

        <h3 class="legal-h3">Prawo skargi do organu nadzorczego</h3>
        <p class="legal-p">Zgodnie z art. 77 RODO, w przypadku naruszenia przepisów o ochronie danych osobowych mają Państwo prawo wniesienia skargi do organu nadzorczego. Organem właściwym w Polsce jest:</p>
        <div class="legal-card">
          <p class="font-bold text-on-surface mb-1">Prezes Urzędu Ochrony Danych Osobowych (UODO)</p>
          <p class="text-sm text-on-surface-variant leading-relaxed">
            ul. Stawki 2, 00-193 Warszawa<br>
            tel.: 22 531 03 00<br>
            <a href="https://uodo.gov.pl" target="_blank" rel="noopener" class="legal-a">uodo.gov.pl</a>
          </p>
        </div>

        <!-- 10 -->
        <h2 id="ssl" class="legal-h2"><span class="legal-num">10</span>Szyfrowanie SSL/TLS</h2>
        <p class="legal-p">Serwis korzysta z szyfrowania SSL/TLS w celu ochrony transmisji danych. Szyfrowane połączenie jest widoczne w postaci ikony kłódki w pasku adresu przeglądarki oraz prefiksu <code class="bg-surface-container-low px-1.5 py-0.5 rounded text-xs font-mono">https://</code>. Przy włączonym szyfrowaniu SSL/TLS przesyłane dane nie mogą być odczytane przez osoby trzecie.</p>

        <!-- Contact callout -->
        <div class="mt-12 rounded-2xl bg-primary text-on-primary p-6 sm:p-8 text-center">
          <span class="material-symbols-outlined text-3xl mb-2 block">support_agent</span>
          <h3 class="font-display text-xl font-bold mb-1">Pytania dotyczące ochrony danych?</h3>
          <p class="text-on-primary/70 text-sm mb-5 max-w-md mx-auto">
            W celu realizacji przysługujących Państwu praw lub w razie jakichkolwiek pytań — prosimy o kontakt.
          </p>
          <a
            href="mailto:team@evolatec.pl"
            class="inline-flex items-center gap-2 bg-white text-primary font-bold text-sm rounded-full px-6 py-3 hover:bg-white/90 transition-colors"
          >
            <span class="material-symbols-outlined text-base">mail</span>
            team@evolatec.pl
          </a>
        </div>

      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Polityka prywatności | EvolaTec',
  meta: [
    { name: 'description', content: 'Polityka prywatności EvolaTec — informacje o przetwarzaniu danych osobowych zgodnie z RODO i Prawem komunikacji elektronicznej 2024.' },
    { name: 'robots', content: 'noindex, follow' },
  ],
  link: [{ rel: 'canonical', href: 'https://evolatec.pl/polityka-prywatnosci' }],
})

const toc = [
  { id: 'administrator',  label: 'Administrator danych osobowych' },
  { id: 'hosting',        label: 'Hosting (Netlify)' },
  { id: 'logi',           label: 'Logi serwera i wizyty' },
  { id: 'formularz',      label: 'Formularz kontaktowy' },
  { id: 'email-telefon',  label: 'Kontakt e-mail i telefoniczny' },
  { id: 'whatsapp',       label: 'Kontakt przez WhatsApp' },
  { id: 'cookies',        label: 'Pliki cookie (PKE 2024)' },
  { id: 'czcionki',       label: 'Zasoby zewnętrzne' },
  { id: 'prawa',          label: 'Prawa osoby, której dane dotyczą' },
  { id: 'ssl',            label: 'Szyfrowanie SSL/TLS' },
]

const rights = [
  { title: 'Dostęp',               law: 'art. 15 RODO', icon: 'info',         text: 'Prawo do uzyskania informacji, czy i jakie dane osobowe są przetwarzane.' },
  { title: 'Sprostowanie',         law: 'art. 16 RODO', icon: 'edit',         text: 'Prawo żądania niezwłocznego sprostowania nieprawidłowych danych.' },
  { title: 'Usunięcie',            law: 'art. 17 RODO', icon: 'delete',       text: 'Prawo żądania usunięcia danych („prawo do bycia zapomnianym").' },
  { title: 'Ograniczenie',         law: 'art. 18 RODO', icon: 'pause_circle', text: 'Prawo żądania ograniczenia przetwarzania w określonych przypadkach.' },
  { title: 'Przenoszenie',         law: 'art. 20 RODO', icon: 'sync_alt',     text: 'Prawo do otrzymania danych w ustrukturyzowanym formacie nadającym się do odczytu maszynowego.' },
  { title: 'Sprzeciw',             law: 'art. 21 RODO', icon: 'block',        text: 'Prawo wniesienia sprzeciwu wobec przetwarzania opartego na uzasadnionym interesie.' },
  { title: 'Cofnięcie zgody',      law: 'art. 7 RODO',  icon: 'undo',        text: 'Prawo do cofnięcia zgody w dowolnym momencie, bez wpływu na zgodność z prawem wcześniejszego przetwarzania.' },
  { title: 'Skarga do UODO',       law: 'art. 77 RODO', icon: 'gavel',        text: 'Prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).' },
]
</script>

<style scoped>
.legal-h2  { @apply flex items-center gap-3 font-display text-lg sm:text-xl font-bold text-on-surface mt-14 pt-7 border-t border-outline-variant/30 mb-4 scroll-mt-28; }
.legal-num { @apply w-8 h-8 shrink-0 rounded-lg bg-primary text-on-primary text-sm font-black flex items-center justify-center; }
.legal-h3  { @apply font-bold text-on-surface text-base mt-8 mb-2; }
.legal-p   { @apply text-sm text-on-surface-variant leading-relaxed mb-3; }
.legal-ul  { @apply list-disc pl-5 space-y-1.5 text-sm text-on-surface-variant leading-relaxed mb-3; }
.legal-a   { @apply text-primary font-medium hover:underline break-words; }
.legal-card    { @apply bg-surface-container-low rounded-xl p-5 my-4; }
.legal-callout { @apply flex gap-4 bg-surface-container-low border-l-4 border-primary rounded-xl p-5 my-4; }
</style>
