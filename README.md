# LAMITECH Produkcja Stolarska — strona demonstracyjna

> **Nieoficjalna koncepcja demonstracyjna — projekt nie jest oficjalną stroną firmy.**

Klikalna, responsywna strona demo w czystym HTML + CSS + vanilla JS, zbudowana według
kierunku **„Przestrzeń domknięta meblem”** z pakietu briefów w katalogu
`LAMITECH_CLAUDE_CODE_PACKAGE/` (specyfikacja wykonawcza: `08-claude-code-build-spec.md`).

## Uruchomienie

Strona nie wymaga builda ani zależności. Wystarczy dowolny serwer statyczny:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

(Otwarcie plików przez `file://` też działa, ale serwer jest zalecany,
żeby fonty WOFF2 ładowały się bez ograniczeń przeglądarki.)

## Struktura plików

```
/
├── index.html               # Strona główna
├── meble-na-wymiar.html     # Oferta (6 sekcji zabudowy)
├── realizacje.html          # Portfolio: filtry + lightbox
├── jak-pracujemy.html       # Proces + interaktywna checklista
├── kontakt.html             # Dane + formularz demonstracyjny
├── assets/
│   ├── images/              # 12 placeholderów SVG (szkice elewacji zabudowy)
│   ├── fonts/               # lokalne WOFF2 (Bricolage Grotesque, IBM Plex Sans/Mono)
│   ├── icons/               # (favicon inline w HTML)
│   └── video/               # puste — patrz „Hero wideo” niżej
├── css/
│   ├── fonts.css            # @font-face (lokalne WOFF2)
│   ├── tokens.css           # paleta, typografia, skala, ruch
│   ├── base.css             # reset, typografia, przyciski, animacje wejścia
│   ├── components.css       # header, menu mobilne, stopka, pasma CTA
│   ├── pages.css            # hero, selektor przestrzeni, mozaika, proces, portfolio, formularz
│   └── responsive.css       # breakpointy: 0–639 / 640–959 / 960–1279 / 1280+
├── js/
│   ├── main.js              # menu mobilne, animacje wejścia, checklista, scrollspy
│   ├── modules.js           # interaktywny wybór typu przestrzeni (taby + klawiatura)
│   ├── gallery.js           # filtry realizacji + lightbox (dialog, pułapka fokusa)
│   └── form-demo.js         # walidacja lokalna, zero wysyłki danych
└── LAMITECH_CLAUDE_CODE_PACKAGE/   # briefy projektu (nie usuwać)
```

## Wykonane testy

Automatycznie (Chromium/Playwright) na szerokościach **360, 390, 768, 1024, 1440, 1920 px**,
dla wszystkich pięciu podstron:

- brak błędów konsoli i błędów strony,
- brak poziomego scrolla,
- menu mobilne: otwarcie, `aria-expanded`, fokus na „Zamknij”, Esc, powrót fokusa, pętla fokusa,
- skip-link jako pierwszy element fokusa,
- wybór typu przestrzeni: klik, strzałki ↑↓←→, Home/End, `aria-selected`, zmiana układu schematu,
- animacje wejścia po scrollu oraz ścieżka `prefers-reduced-motion` (wszystko widoczne bez animacji),
- filtry realizacji: `aria-pressed`, licznik „pokazano x / y”, poprawna liczba wyników,
- lightbox: otwarcie, fokus, strzałki ←/→, licznik, pułapka fokusa (Tab/Shift+Tab), Esc,
  powrót fokusa na element otwierający, klik w tło,
- formularz: walidacja pustych pól, fokus na pierwszym błędzie, komunikat demo po poprawnym
  wypełnieniu, **zero żądań sieciowych innych niż GET** (nic nie jest wysyłane),
- checklista „co przygotować przed pomiarem”: licznik postępu,
- szuflady sekcji „Funkcja przed ozdobą” (`<details>`).

Do ręcznego sprawdzenia pozostaje test na fizycznych urządzeniach dotykowych
(interakcje projektowano pod tap, bez zależności od hovera).

## Audyt antygeneryczności — wykonane poprawki

Wskazane słabe punkty (6) i wprowadzone korekty:

1. **Hero „tekst + obrazek w ramce”** → wizual na desktopie wychodzi do prawej krawędzi okna
   (zabudowa „domyka” ekran jak mebel domyka ścianę); dodana pionowa linia wymiarowa z podziałką
   przy nagłówku oraz rysowane linie elewacji i przesuwający się front nad ilustracją.
2. **Płaskie tła sekcji** → pasmo „arkusza roboczego” (podziały pionowe + gradient) za selektorem
   przestrzeni, pasmo materiałowe w tonie brzozy za sekcją procesu, miękkie światło w hero,
   siatka rysunku technicznego na całym tle strony.
3. **Generyczny przycisk primary** → przycisk zachowuje się jak front meblowy: przy hoverze
   odsuwa się, odsłaniając „szczelinę cieniową” (twardy cień w Ink Green).
4. **Moduły tekstowe mozaiki jak zwykłe karty** → moduł brzozowy dostał usłojenie i uchwyt,
   ciemny — podziały frontów, jasny — narożny znacznik rysunkowy; dodatkowo pasek próbek
   materiałowych zamyka siatkę.
5. **Monotonny rytm nagłówków sekcji** → metki arkusza po prawej („Moduły 01–05”, „06 etapów”,
   „Typ · potrzeba · rozwiązanie”, „Checklista 06”, „Etapy 02 / 04”).
6. **Za słaba kreska ilustracji „Pomiar”** → mocniejszy szrafunek ścian, grubsza linia wnęki
   i wyraźniejsza linia lasera.

## Assety tymczasowe do podmiany

Wszystkie grafiki to **lokalne placeholdery SVG** (styl: szkic elewacji zabudowy, ozn. „IL. xx —
SZKIC POGLĄDOWY / DEMO”). Docelowe pliki należy wygenerować/wybrać według promptów z
`LAMITECH_CLAUDE_CODE_PACKAGE/06-image-prompts.md` i podmienić 1:1 (te same ścieżki, format WebP):

| Placeholder (assets/images/) | Docelowy plik wg 06-image-prompts.md |
|---|---|
| `hero-przestrzen-domknieta-meblem-16x9.svg` | `hero-przestrzen-domknieta-meblem-16x9.webp` (prompt 1) |
| `kuchnia-na-wymiar-4x5.svg` | `kuchnia-na-wymiar-4x5.webp` (prompt 2) |
| `garderoba-wneka-4x5.svg` | `garderoba-wnęka-4x5.webp` (prompt 3) |
| `mebel-lazienkowy-detal-3x2.svg` | `mebel-lazienkowy-detal-3x2.webp` (prompt 4) |
| `biuro-zabudowa-16x9.svg` | `biuro-zabudowa-16x9.webp` (prompt 5) |
| `proces-pomiar-przestrzeni-16x9.svg` | `proces-pomiar-przestrzeni-16x9.webp` (prompt 6) |
| `materialy-meblowe-flatlay-3x2.svg` | `materialy-meblowe-flatlay-3x2.webp` (prompt 7) |
| `detal-montazu-zabudowy-4x5.svg` | `detal-montazu-zabudowy-4x5.webp` (prompt 8) |
| `realizacja-salon-16x10.svg` | zdjęcie realizacji — salon (do dostarczenia przez firmę) |
| `realizacja-sypialnia-4x5.svg` | zdjęcie realizacji — sypialnia (jw.) |
| `realizacja-skos-4x5.svg` | zdjęcie realizacji — zabudowa skosu (jw.) |
| `realizacja-przedpokoj-3x4.svg` | zdjęcie realizacji — przedpokój (jw.) |

**Hero wideo** (rekomendacja z `07-video-prompts.md`): docelowo `assets/video/` powinno zawierać
pętlę WebM/MP4 (≤6 MB, 1920×1080, bez dźwięku, `autoplay muted loop playsinline`, poster WebP,
a przy `prefers-reduced-motion` i na mobile — statyczny poster). W wersji demo rolę hero pełni
ilustracja SVG z animowaną nakładką linii; po wygenerowaniu wideo wg promptu należy podmienić
blok `.hero-frame` w `index.html`.

## Fakty wymagające potwierdzenia przed publikacją

(za `01-research.md` — na stronie oznaczone dopiskami „wymaga potwierdzenia”)

- aktualność telefonu 12 275 14 96 oraz adresu ul. Brzegi 51, 32-052 Radziszów,
- aktualny obszar działania (na stronie: „Małopolska i okolice” + zastrzeżenie),
- działalność od 1989 roku (nieużyte na stronie — niepotwierdzone),
- pełny zakres kategorii mebli oraz zleceń dla firm,
- czy firma wykonuje pomiar, projekt/wizualizacje i montaż (proces opisany warunkowo),
- stosowane materiały i systemy,
- zgoda na wykorzystanie zdjęć dotychczasowych realizacji.

Nie użyto żadnych zmyślonych danych: liczb realizacji, terminów, cen, marek, gwarancji,
opinii, certyfikatów ani nazw partnerów. Formularz kontaktowy jest atrapą — dane nie
opuszczają przeglądarki; wszystkie strony mają `noindex, nofollow, noarchive`.

## Fonty

Lokalne WOFF2 (Google Fonts, licencja OFL), podzbiory latin + latin-ext:
**Bricolage Grotesque** (nagłówki, zmienny 400–700), **IBM Plex Sans** (tekst, zmienny),
**IBM Plex Mono** (etykiety techniczne, 400/500).
