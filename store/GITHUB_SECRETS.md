# NEXION — GitHub Secrets dla builda Androida

Ustaw w repo: **Settings → Secrets and variables → Actions → New repository secret**.
Wartości dostarczone właścicielowi osobno (pliki poza repo). NIE commitować wartości.

| Secret | Zawartość |
|---|---|
| `ANDROID_KEYSTORE_BASE64` | zawartość pliku `keystore.b64` (base64 keystore) |
| `ANDROID_KEYSTORE_PASSWORD` | hasło keystore (z pliku `keystore-credentials.txt`) |
| `ANDROID_KEY_PASSWORD` | hasło klucza (to samo co keystore) |
| `ANDROID_KEY_ALIAS` | `nexion` |

Po ustawieniu sekretów: **Actions → NEXION Android Build → Run workflow** buduje i publikuje artefakty (APK/AAB) w zakładce Actions. Bez publikacji do sklepów.
