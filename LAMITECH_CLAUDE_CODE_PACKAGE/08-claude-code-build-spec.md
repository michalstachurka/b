# Specyfikacja dla Claude Code — LAMITECH

## Zadanie

Zbuduj kompletną, klikalną stronę demonstracyjną LAMITECH w czystym HTML, CSS i JavaScript na podstawie wszystkich plików `.md` w folderze.

Przed rozpoczęciem przeczytaj `CLAUDE.md` oraz pliki `01`–`09`. `CLAUDE.md` ma nadrzędny charakter estetyczny, a dokumenty projektowe określają fakty, treści, strukturę i wybrany kierunek. Nie pomijaj żadnego z nich.

Nie projektuj ponownie kierunku. Zastosuj motyw „Przestrzeń domknięta meblem”.

## Tryb pracy Claude Code

- Pracuj w bieżącym katalogu projektu.
- Nie usuwaj ani nie nadpisuj plików briefu Markdown.
- Najpierw przeanalizuj strukturę katalogu i wypisz krótki plan maksymalnie 8 punktów.
- Następnie wykonaj całość bez zatrzymywania się po akceptację.
- Używaj narzędzi edycji plików i poleceń powłoki do tworzenia, uruchamiania i sprawdzania strony.
- Jeżeli dostępne jest narzędzie przeglądarki, Chrome lub MCP browser, otwórz lokalny adres i wykonaj testy wizualne.
- Jeżeli nie ma narzędzia przeglądarki, uruchom serwer lokalny, wykonaj testy statyczne i opisz w README, które kontrole wizualne wymagają ręcznego sprawdzenia.
- Nie pobieraj przypadkowych zdjęć z internetu. Korzystaj z lokalnych assetów albo przygotuj estetyczne placeholdery SVG o właściwych proporcjach.
- Nie publikuj strony i nie wysyłaj żadnych danych.

## Technologie

- HTML5,
- CSS3,
- vanilla JavaScript,
- bez frameworków,
- bez procesu build,
- bez zewnętrznego trackingu.

## Struktura

```text
/
├── index.html
├── meble-na-wymiar.html
├── realizacje.html
├── jak-pracujemy.html
├── kontakt.html
├── assets/
│   ├── images/
│   ├── video/
│   └── icons/
├── css/
│   ├── tokens.css
│   ├── base.css
│   ├── components.css
│   ├── pages.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── modules.js
│   ├── gallery.js
│   └── form-demo.js
└── README.md
```

## Zmienne CSS

```css
:root {
  --ink-green: #17352D;
  --bone: #F2EEE5;
  --birch: #D9C9AF;
  --signal-orange: #E86C3B;
  --graphite: #2B2D2A;
  --sage-grey: #8C968E;
  --soft-line: #D8D4CA;
  --warm-white: #FAF8F3;

  --font-heading: "Bricolage Grotesque", sans-serif;
  --font-body: "IBM Plex Sans", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  --container: 1240px;
  --radius-sm: 2px;
  --radius-md: 6px;
  --ease: cubic-bezier(.22,1,.36,1);
}
```

## Breakpointy

- 0–639 px,
- 640–959 px,
- 960–1279 px,
- 1280 px+.

## Komponenty

- header,
- mobile-menu,
- modular-hero,
- space-selector,
- furniture-grid,
- process-rail,
- function-detail,
- portfolio-mosaic,
- gallery-filter,
- contact-form,
- demo-disclaimer,
- footer.

## Kluczowe sekcje

### Hero

- duża typografia po lewej,
- wizual po prawej,
- cienkie linie rysunku meblowego,
- jeden przesuwający się moduł,
- bez klasycznego centralnego hero.

### Space selector

Trzy opcje:

- wnęka,
- kuchnia,
- garderoba.

Po kliknięciu:

- zmienia się układ wizualny,
- zmienia krótki opis,
- aktywny moduł przesuwa się jak front meblowy,
- interakcja działa klawiaturą.

### Furniture grid

Asymetryczna siatka kategorii. Nie używać identycznych kart.

### Process rail

Pozioma sekwencja na desktopie, pionowa na mobile. Linia i znaczniki inspirowane rysunkiem technicznym.

### Portfolio

- filtry kategorii,
- różne proporcje zdjęć,
- lightbox,
- focus trap,
- podpisy bez wymyślonych danych.

## Nawigacja

- tekstowe logo LAMITECH,
- Oferta,
- Realizacje,
- Jak pracujemy,
- Kontakt,
- CTA „Opowiedz o przestrzeni”.

## Animacje

- mask reveal,
- przesunięcie paneli 12–24 px,
- rysowanie linii wymiarowych,
- subtelne skalowanie zdjęć,
- bez ciężkich bibliotek,
- respektuj reduced motion.

## Formularz

- demonstracyjny,
- bez wysyłania danych,
- walidacja lokalna,
- komunikat po submit,
- pole rodzaju zabudowy,
- pole lokalizacji,
- atrapę dodawania zdjęć wyraźnie oznaczyć jako demo.

## SEO

Na każdej stronie:

```html
<meta name="robots" content="noindex, nofollow, noarchive">
```

Użyć title i description z `05-content.md`.

## Dostępność

- WCAG AA,
- skip link,
- widoczny focus,
- semantic HTML,
- aria-expanded,
- jeden H1,
- pełna obsługa klawiatury,
- alt dla grafik.

## Wydajność

- WebP/AVIF,
- lazy loading,
- width i height,
- lokalne WOFF2 lub ograniczone fonty,
- wideo maks. 6 MB,
- brak błędów konsoli,
- minimalny CLS.

## Oznaczenie demo

> Nieoficjalna koncepcja demonstracyjna — projekt nie jest oficjalną stroną firmy.

## Testy

- 360 × 800,
- 390 × 844,
- 768 × 1024,
- 1024 × 768,
- 1440 × 900,
- 1920 × 1080.

Sprawdź menu, filtry, formularz, space selector, lightbox, linki, focus, reduced motion i brak poziomego scrolla.

## Kontrola antygeneryczności

Po zbudowaniu pierwszej wersji wykonaj osobny audyt wizualny. Odpowiedz wewnętrznie na pytania:

- Czy hero może należeć do dowolnej firmy meblowej?
- Czy kompozycja naprawdę przypomina zabudowę i podziały meblowe?
- Czy wszystkie sekcje nie korzystają z tego samego układu obraz + tekst?
- Czy w projekcie występuje co najmniej pięć różnych rytmów kompozycyjnych?
- Czy kolor Signal Orange pozostaje ostrym, oszczędnym akcentem?
- Czy tła mają atmosferę, warstwy i głębię, a nie wyłącznie jednolite prostokąty?
- Czy ruch ma związek z frontami, szufladami, osiami i wymiarami?
- Czy strona nie wygląda jak motyw SaaS, e-commerce albo beżowy katalog kuchni premium?

Wskaż minimum pięć słabych lub zbyt przewidywalnych elementów i popraw co najmniej trzy najważniejsze przed zakończeniem.

## Kryteria ukończenia

- pięć działających podstron,
- spójna nawigacja,
- wdrożona modularna kompozycja,
- minimum trzy niestandardowe sekcje,
- pełna responsywność,
- formularz bez wysyłki,
- brak wymyślonych faktów,
- finalna krytyka i poprawa minimum trzech elementów.


## Raport końcowy

Na końcu podaj:

- utworzoną strukturę plików,
- sposób uruchomienia strony,
- wykonane testy,
- poprawki wykonane po audycie antygeneryczności,
- listę assetów tymczasowych,
- listę faktów wymagających potwierdzenia przed publikacją.
