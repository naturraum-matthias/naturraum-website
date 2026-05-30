# Deployment-Anleitung — NaturRaum Website

Diese Anleitung erklärt den einmaligen Setup und die tägliche Nutzung für das Veröffentlichen der Website.

---

## Überblick: Der Workflow

```
Du änderst Dateien
      ↓
GitHub Desktop: Commit + Push
      ↓
Netlify baut die Website automatisch neu
      ↓
Website ist live (nach ca. 1–2 Minuten)
```

---

## Einmaliger Setup

### 1. GitHub-Account erstellen

1. Gehe auf [github.com](https://github.com)
2. Klicke auf "Sign up"
3. E-Mail, Passwort und Benutzernamen eingeben
4. E-Mail bestätigen

### 2. GitHub Desktop installieren

1. Lade GitHub Desktop herunter: [desktop.github.com](https://desktop.github.com)
2. Installieren und mit deinem GitHub-Account anmelden

### 3. Repository auf GitHub erstellen

1. Auf github.com einloggen
2. Oben rechts auf "+" → "New repository"
3. Name: `naturraum-website`
4. Auf "Create repository" klicken

### 4. Projekt mit GitHub verknüpfen

In GitHub Desktop:
1. "Add an Existing Repository from your Hard Drive"
2. Ordner `naturraum-website` auswählen
3. "Publish repository" klicken → mit GitHub verbinden

### 5. Netlify-Account erstellen und verbinden

1. Gehe auf [netlify.com](https://netlify.com)
2. "Sign up" → "Sign up with GitHub" (gleicher Account)
3. "Add new site" → "Import an existing project"
4. GitHub auswählen → Repository `naturraum-website` auswählen
5. Build-Einstellungen:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. "Deploy site" klicken

Netlify vergibt dir eine temporäre URL (z. B. `zufallsname.netlify.app`). Sobald du eine eigene Domain hast, kannst du sie dort verknüpfen.

---

## Tägliche Nutzung

Wenn du Dateien geändert oder neue Dateien angelegt hast:

1. **GitHub Desktop öffnen**
2. **Links** siehst du alle geänderten Dateien (grüne = neue, gelbe = geänderte)
3. **Unten links:** Kurze Beschreibung was du geändert hast, z. B.:
   - `Neuen Kurs "Spuren lesen" hinzugefügt`
   - `Projektfotos Billerbeck hochgeladen`
4. Klicke auf **"Commit to main"**
5. Klicke oben auf **"Push origin"**
6. Fertig — Netlify startet automatisch

Den Status kannst du auf [app.netlify.com](https://app.netlify.com) verfolgen. Unter "Deploys" siehst du ob der Build erfolgreich war.

---

## Eigene Domain einrichten

Sobald du eine Domain hast (z. B. `naturraum.de`):

1. Auf app.netlify.com → deine Site → "Domain settings"
2. "Add custom domain" → Domain eingeben
3. Netlify zeigt dir die DNS-Einstellungen
4. Diese Einstellungen bei deinem Domain-Anbieter eintragen (dort wo du die Domain gekauft hast)
5. Nach einigen Stunden ist die Domain aktiv

Netlify richtet automatisch ein SSL-Zertifikat (HTTPS) ein — kostenlos.

---

## Häufige Probleme

**Build schlägt fehl:**
→ Auf app.netlify.com → Deploys → Fehlgeschlagenen Deploy anklicken → Log lesen
→ Häufige Ursache: Fehler in einer `.md`-Datei (z. B. fehlendes Pflichtfeld oder falsches Datumsformat)

**Änderungen erscheinen nicht:**
→ Prüfen ob der Push in GitHub Desktop erfolgreich war (kein roter Fehler)
→ Auf Netlify prüfen ob der Build fertig ist

**Bild erscheint nicht:**
→ Dateiname in der `.md`-Datei prüfen (Groß-/Kleinschreibung beachten!)
→ Prüfen ob die Bilddatei im richtigen Ordner liegt (`public/bilder/kurse/` etc.)

---

## Support

Bei Fragen zur Technik:
- `ANLEITUNG.md` lesen für Inhalts-Änderungen
- `AI-DOKUMENTATION.md` einem KI-Assistenten zeigen und Frage stellen
