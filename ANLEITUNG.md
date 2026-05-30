# Anleitung — NaturRaum Website selbst pflegen

Diese Anleitung erklärt, wie du neue Inhalte hinzufügst und die Website aktualisierst — ohne Programmierkenntnisse.

---

## Überblick: Wie funktioniert das?

Du pflegst Inhalte als einfache Textdateien (Markdown, `.md`). Wenn du eine neue Datei anlegst oder eine bestehende änderst, erscheint der neue Inhalt automatisch auf der Website — sobald du die Änderung hochlädst (Deploy).

**Der Workflow:**
1. Datei erstellen oder bearbeiten (z. B. neuen Kurs anlegen)
2. Bild in den richtigen Ordner legen (falls nötig)
3. Mit GitHub Desktop hochladen → Website aktualisiert sich automatisch

---

## Neue Dateien anlegen

### Neuen Kurs anlegen

1. Öffne den Ordner `src/content/kurse/`
2. Kopiere die Datei `_vorlage.md`
3. Benenne die Kopie sinnvoll, z. B. `spuren-lesen-juni.md`
4. Öffne die Datei in einem Texteditor und fülle die Felder aus:

```
---
titel: "Spuren lesen — Tagesworkshop"
kategorie: "Wildnispädagogik"
datum: "2026-06-15"
ort: "Ahaus"
dauer: "1 Tag"
preis: 75
plaetze: 10
titelbild: "spuren-lesen.jpg"
buchungslink: ""
aktiv: true
---

Kurzbeschreibung hier...
```

**Wichtige Regeln:**
- Das Datum immer im Format `JJJJ-MM-TT` (z. B. `2026-06-15`)
- `aktiv: true` = Kurs wird angezeigt, `aktiv: false` = Kurs ist versteckt
- `buchungslink: ""` lassen wenn kein Link → es erscheint automatisch ein "Anfragen"-Button
- Anführungszeichen um Text-Werte nicht vergessen

---

### Neues Projekt anlegen

1. Öffne den Ordner `src/content/projekte/`
2. Kopiere `_vorlage.md`, benenne sie z. B. `waldgarten-billerbeck.md`
3. Fülle die Felder aus:

```
---
titel: "Waldgarten Billerbeck"
ort: "Billerbeck"
jahr: 2025
kategorie: "Waldgarten"
titelbild: "billerbeck-hauptbild.jpg"
bilder:
  - "billerbeck-01.jpg"
  - "billerbeck-02.jpg"
featured: false
---

Beschreibung des Projekts...
```

- `featured: true` = Projekt erscheint auf der Startseite

---

### Neuen Termin anlegen

1. Öffne den Ordner `src/content/termine/`
2. Kopiere `_vorlage.md`, benenne sie z. B. `workshop-september-2026.md`
3. Fülle die Felder aus:

```
---
titel: "Essbare Wildpflanzen — Herbst"
datum: "2026-09-20"
uhrzeit: "10:00 Uhr"
ort: "Ahaus"
typ: "Workshop"
plaetze: 12
preis: 75
buchungslink: ""
aktiv: true
---
```

- Vergangene Termine: einfach `aktiv: false` setzen statt löschen

---

## Bilder hochladen

Bilder kommen in diese Ordner (je nach Inhalt):

| Inhalt | Ordner |
|---|---|
| Kursbilder | `public/bilder/kurse/` |
| Projektfotos | `public/bilder/projekte/` |
| Sonstiges | `public/bilder/allgemein/` |

**Empfehlungen für Bilder:**
- Format: JPG oder WEBP
- Breite: 1200–1800 px (nicht größer nötig)
- Dateinamen ohne Leerzeichen und Umlaute, z. B. `spuren-lesen-workshop.jpg`
- Im Markdown verwendest du nur den Dateinamen: `titelbild: "spuren-lesen-workshop.jpg"`

---

## Website deployen (veröffentlichen)

Sobald du Dateien geändert oder neue angelegt hast, muss die Änderung zu Netlify hochgeladen werden.

### Mit GitHub Desktop

1. **GitHub Desktop öffnen**
2. Links siehst du alle geänderten Dateien
3. Unten links: Kurze Beschreibung eingeben, z. B. `Neuen Kurs hinzugefügt`
4. Auf **"Commit to main"** klicken
5. Oben auf **"Push origin"** klicken
6. Fertig — Netlify baut die Website automatisch neu (dauert ca. 1–2 Minuten)

Du kannst den Build-Status auf [netlify.com](https://app.netlify.com) verfolgen.

---

## Häufige Fragen

**Der Kurs erscheint nicht auf der Website?**
→ Prüfe ob `aktiv: true` gesetzt ist und ob du die Datei auch gespeichert und hochgeladen (gepusht) hast.

**Ich habe einen Tippfehler im Datum gemacht?**
→ Datei öffnen, korrigieren, speichern, und erneut pushen.

**Ich möchte einen Kurs vorübergehend verstecken?**
→ `aktiv: true` zu `aktiv: false` ändern und pushen.

**Ein altes Projekt soll nicht mehr erscheinen?**
→ `featured: false` setzen oder die Datei löschen.

---

## Noch Fragen?

Schau in die `AI-DOKUMENTATION.md` — dort findest du eine vollständige Beschreibung der Website, die du einem KI-Assistenten (ChatGPT, Claude) zum Lesen geben kannst. Der kann dir dann bei komplexeren Änderungen helfen.
