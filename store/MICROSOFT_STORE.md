# NEXION — Microsoft Store (PWA przez PWABuilder)

Publikacja PWA bez osobnego kodu Windows. **Nie publikować bez zgody właściciela.**

## Konto (wymaga właściciela)
- Osobiste konto Microsoft + rejestracja w Partner Center (Windows Developer Program).
- W Partner Center: **Apps and games → New product → MSIX or PWA app** → zarezerwuj nazwę **NEXION — AI Automation Architect**.
- Zapisz z **Product management → Product Identity**: Package ID, Publisher ID, Publisher Display Name.

## Generowanie paczki
1. Wejdź na https://www.pwabuilder.com
2. Podaj URL: `https://kgregenevia-sys.github.io/api-intelligence/`
3. **Package For Stores → Windows → Generate Package**.
4. Wklej Publisher ID, Package ID, Publisher Display Name z Partner Center.
5. Pobierz paczkę (`.msixbundle` + `.classic.appxbundle`).
6. W Partner Center: **Start your submission**, wgraj oba pliki.
7. Recenzja zwykle 24–48 h.

## Wymagane pola Partner Center
- Nazwa, krótki i pełny opis (PL/EN — patrz `store/LISTING.md`).
- Kategoria: **Business** (alt.: Productivity).
- Wiek/klasyfikacja treści.
- **Polityka prywatności (URL)** — wymagane.
- **Strona wsparcia (URL)** i **adres kontaktowy** — wymagane.
- Zrzuty ekranu (min. 1; zalecane 4–8).

## Płatności
PWA ładuje żywą stronę; zakup subskrypcji odbywa się przez istniejące linki Stripe na stronie WWW. Bez integracji billingu Microsoft.

## Status
PACZKA: możliwa do wygenerowania po podaniu danych Partner Center (Publisher ID/Package ID) → **WYMAGA KONTA WŁAŚCICIELA**.
