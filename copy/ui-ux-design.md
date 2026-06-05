# Copy — ui-ux-design
<!-- Source: blueprints/ui-ux-design.json | Stage 2 output -->

---

## Dlaczego ładny interfejs to nie to samo co dobry

Aplikacja albo sklep mogą wyglądać świetnie i jednocześnie tracić użytkowników na każdym kroku. Ludzie nie kończą rejestracji, porzucają koszyk, nie znajdują funkcji, za którą zapłacili. Wygląd jest, a korzystanie boli — bo interfejs został pomalowany, a nie zaprojektowany pod sposób, w jaki ludzie naprawdę go używają.

Na tym polega różnica między UI a UX. UI odpowiada za wygląd interfejsu, UX za to, jak się go używa — projekt obejmuje oba. Ładny ekran, na którym przycisk „dalej" jest tam, gdzie nikt go nie szuka, to dobry UI i zły UX. Sam wygląd nie wyłapie, że ścieżka zakupu ma o dwa kroki za dużo albo że formularz odstrasza połowę użytkowników na trzecim polu.

Projektujemy interfejsy, zaczynając od tego, co użytkownik ma osiągnąć, a nie od tego, jak ekran ma wyglądać. Najpierw ścieżki i struktura, potem prototyp, który można przeklikać i przetestować, a dopiero na końcu warstwa graficzna. Dzięki temu błędy w sposobie korzystania wychodzą na jaw, zanim cokolwiek trafi do kodu.

---

## Co obejmuje projekt UI/UX

Projekt UI/UX to proces oparty na badaniu i testowaniu, z konkretnymi artefaktami na każdym etapie — nie zestaw ładnych ekranów.

- **Audyt UX** — analiza istniejącej strony lub aplikacji pod kątem przeszkód w korzystaniu
- **Mapa ścieżek użytkownika** — jak użytkownik przechodzi od wejścia do celu
- **Wireframy lo-fi i hi-fi** — układ i hierarchia ekranów, zanim wejdzie grafika
- **Interaktywny prototyp w Figmie** — wersja do przeklikania, testowana przed kodowaniem
- **Projekt graficzny interfejsu** — finalna warstwa wizualna na zatwierdzonej strukturze
- **Specyfikacja dla developerów** — wytyczne potrzebne do wiernego wdrożenia

Projekt UI/UX obejmuje audyt UX, wireframy, interaktywny prototyp w Figmie i specyfikację dla developerów — komplet, który pozwala przetestować produkt, zanim powstanie, i wdrożyć go bez zgadywania. Dla sklepów i serwisów z dużym ruchem to różnica, która bezpośrednio przekłada się na konwersję.

---

## Ile kosztuje projekt UI/UX — model wyceny

Projekt UX wyceniamy indywidualnie w zależności od liczby ekranów i złożoności aplikacji. Audyt UX istniejącej strony to inny nakład niż zaprojektowanie aplikacji od zera z prototypem i testami, dlatego nie ma jednej ceny.

Na wycenę wpływają trzy rzeczy: liczba unikalnych ekranów i ścieżek do zaprojektowania, poziom dopracowania (sam audyt i wireframy czy pełny prototyp z warstwą graficzną) oraz czy projekt obejmuje testy użyteczności z udziałem użytkowników. Mały, jednofunkcyjny produkt wyceniamy znacznie niżej niż rozbudowaną platformę z wieloma rolami i ekranami.

Wycena jest bezpłatna i ustalana przed startem — żeby ją przygotować, wystarczy krótko opisać produkt i jego główne funkcje. Często najtańszym pierwszym krokiem jest sam audyt UX, który pokazuje, gdzie istniejący produkt traci użytkowników, zanim zdecydujesz o pełnym przeprojektowaniu.

---

## Samo UI czy pełny proces UX — co wybrać

Najczęstsza pokusa to zamówić „ładne ekrany" i przejść od razu do kodu, pomijając UX jako zbędny etap. Czasem to ma sens — przy prostym produkcie. Przy każdym, w którym użytkownik ma coś osiągnąć w kilku krokach, pominięcie UX wychodzi drożej, tylko później.

| Kryterium | Sam projekt UI | Pełny proces UX |
|---|---|---|
| Co obejmuje | Warstwę graficzną ekranów | Badanie, ścieżki, prototyp, UI |
| Co wyłapuje | Wygląd i spójność | Błędy w sposobie korzystania |
| Kiedy widać problem | Po wdrożeniu, w kodzie | W prototypie, przed kodem |
| Koszt poprawek | Wysoki — zmiana w kodzie | Niski — zmiana w Figmie |
| Najlepsze dla | Prostych ekranów | Aplikacji, SaaS, sklepów |

Sam projekt UI wystarcza, gdy struktura jest oczywista, a chodzi tylko o spójny wygląd. Pełny proces UX opłaca się tam, gdzie użytkownik wykonuje wieloetapowe zadania — rejestrację, zakup, konfigurację — bo koszt poprawienia ścieżki w prototypie jest ułamkiem kosztu przerabiania jej w gotowym kodzie. Im bardziej złożony produkt, tym wcześniej prototyp zwraca swój koszt.

---

## Jak projektujemy UX — od audytu do prototypu

Proces UX bywa odbierany jako mglisty „research", za który trudno zapłacić. U nas każdy etap ma namacalny rezultat, a kluczowe decyzje zapadają, zanim powstanie kod.

1. **Audyt i research** — analizujemy istniejący produkt lub konkurencję i ustalamy, co użytkownik ma osiągnąć.
2. **Mapy ścieżek** — projektujemy, jak użytkownik przechodzi od wejścia do celu, eliminując zbędne kroki.
3. **Wireframy i prototyp** — budujemy układ ekranów i interaktywny prototyp w Figmie, który można przeklikać i przetestować.
4. **UI i przekazanie** — na zatwierdzonej strukturze tworzymy warstwę graficzną i specyfikację dla developerów.

Kolejność jest celowa: testujemy sposób korzystania na prototypie, zanim wejdzie grafika i kod. Dzięki temu poprawki dotyczą taniej do zmiany Figmy, a nie gotowej aplikacji, i do developmentu trafia rozwiązanie już sprawdzone.

---

## Najczęściej zadawane pytania o UI/UX Design

### Ile kosztuje projekt UI/UX?

Projekt UX wyceniamy indywidualnie w zależności od liczby ekranów i złożoności aplikacji. Sam audyt UX istniejącej strony to inny nakład niż zaprojektowanie aplikacji od zera z prototypem i testami. Wycena jest bezpłatna i zależy od liczby ekranów i ścieżek, poziomu dopracowania oraz tego, czy projekt obejmuje testy z użytkownikami. Najtańszym pierwszym krokiem jest zwykle sam audyt UX.

### Czym różni się UI od UX?

UI odpowiada za wygląd interfejsu, UX za to, jak się go używa — projekt obejmuje oba. UI to kolory, typografia i układ ekranu; UX to ścieżki, struktura i to, czy użytkownik bez wysiłku osiąga swój cel. Ładny ekran z mylącą ścieżką to dobry UI i zły UX. Dobry produkt potrzebuje obu naraz.

### Co to jest prototyp w Figmie i po co go robić?

Prototyp w Figmie to interaktywna, klikalna wersja interfejsu zbudowana przed napisaniem kodu. Pozwala przejść przez produkt jak przez gotową aplikację i przetestować ścieżki, zanim powstanie development. Dzięki temu błędy w sposobie korzystania wychodzą na jaw na etapie, na którym poprawka to zmiana w Figmie, a nie kosztowna przeróbka działającego kodu.

### Dla kogo jest projekt UX?

Projekt UX najbardziej opłaca się przy aplikacjach webowych, SaaS, sklepach i serwisach z dużym ruchem — wszędzie tam, gdzie użytkownik wykonuje wieloetapowe zadania, a sposób korzystania bezpośrednio wpływa na konwersję. Przy prostej stronie firmowej zwykle wystarcza projekt graficzny; im bardziej złożony produkt i im więcej kroków po stronie użytkownika, tym większy zwrot z pełnego procesu UX.

### Co zawiera audyt UX?

Audyt UX to analiza istniejącej strony lub aplikacji pod kątem przeszkód, na które natrafia użytkownik — mylących ścieżek, zbędnych kroków, miejsc, w których ludzie rezygnują. Wynik to lista konkretnych problemów z priorytetami i rekomendacjami zmian. Audyt jest najtańszym sposobem, by sprawdzić, gdzie produkt traci użytkowników, zanim zdecydujesz o pełnym przeprojektowaniu.
