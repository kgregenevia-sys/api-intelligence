# NEXION — Checklista testów na prawdziwym urządzeniu (Android)

APK do zainstalowania: `NEXION-1.0.0-release.apk` (włącz „Instalacja z nieznanych źródeł").
Login i płatności MUSZĄ być sprawdzone tu — nie oznaczać PASS bez tego.

- [ ] 1. Instalacja APK kończy się sukcesem.
- [ ] 2. Pierwsze uruchomienie — aplikacja startuje jako samodzielna (bez paska przeglądarki*).
- [ ] 3. Ekran powitalny / modal „Witaj w NEXION" pojawia się i można go zamknąć.
- [ ] 4. Zamknięcie i ponowne otwarcie — sesja/stan zachowane.
- [ ] 5. Przejście do tła i powrót — brak resetu widoku.
- [ ] 6. Tryb samolotowy (offline) — po wcześniejszym otwarciu aplikacja pokazuje treść, nie pusty ekran.
- [ ] 7. Logowanie e-mail — kod przychodzi, logowanie działa.
- [ ] 8. Odświeżenie sesji — pozostaje zalogowany.
- [ ] 9. Otwarcie linku Stripe — otwiera się poprawnie (Custom Tab / przeglądarka).
- [ ] 10. Powrót z `?paid=1` — aplikacja wraca i uruchamia aktywację.
- [ ] 11. Automatyczne nadanie dostępu premium po zakupie.
- [ ] 12. Ponowne uruchomienie po zakupie — premium nadal aktywne.
- [ ] 13. Przycisk Wstecz — nawiguje w aplikacji, nie zamyka od razu.
- [ ] 14. Aktualizacja Service Workera — nie blokuje aplikacji.

*Pkt 2 (pełny ekran bez paska) zadziała dopiero po wystawieniu `assetlinks.json` na poziomie hosta — patrz raport, sekcja E.
