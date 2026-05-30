# KI-Dokumentation — NaturRaum Website

Diese Datei ist für KI-Assistenten (ChatGPT, Claude etc.) gedacht. Wenn du Hilfe bei Änderungen an der Website brauchst, kopiere den Inhalt dieser Datei in den Chat und erkläre dann was du ändern möchtest.

---

## Projekt-Überblick

**Marke:** NaturRaum — "Natur wahrnehmen und gestalten"
**Betreiber:** Matthias (Permakultur-Berater, Agroforst-Coach, Wildnispädagoge)
**Framework:** Astro v6 (Static Site Generator, statische HTML-Ausgabe)
**Hosting:** Netlify (Auto-Deploy aus GitHub-Repository)
**Node.js:** v22+

---

## Ordnerstruktur

```
naturraum-website/
  src/
    components/          ← Wiederverwendbare Bausteine (Header, Footer, etc.)
    layouts/
      BaseLayout.astro   ← Grundgerüst jeder Seite (Head, Header, Footer)
    pages/               ← Eine Datei = eine URL
      index.astro        → /
      ueber-mich.astro   → /ueber-mich
      leistungen/
        index.astro      → /leistungen
        beratung.astro   → /leistungen/beratung
        coaching.astro   → /leistungen/coaching
        kurse.astro      → /leistungen/kurse
      projekte/
        index.astro      → /projekte
        [slug].astro     → /projekte/[name] (dynamisch aus MD)
      termine.astro      → /termine
      kontakt.astro      → /kontakt
      impressum.astro    → /impressum
      datenschutz.astro  → /datenschutz
    content/             ← Markdown-Inhaltsdateien
      kurse/             ← Kurs-Dateien (eine Datei = ein Kurs)
      projekte/          ← Projekt-Dateien (eine Datei = ein Projekt)
      termine/           ← Termin-Dateien (eine Datei = ein Termin)
    styles/
      global.css         ← Alle globalen CSS-Variablen und Basis-Styles
    content.config.ts    ← Schema-Definitionen für Markdown-Collections
  public/
    bilder/
      kurse/             ← Kursbilder
      projekte/          ← Projektfotos
      allgemein/         ← Logos, Portraits
      designs/           ← Permakultur-Planzeichnungen
      Waldgärten/        ← Fotos Waldgarten Ahaus
      Permakultur-Elemente/
      Agroforst/
      essbare Wildpflanzen/
      Wildnispädagogik/
      wilde Küche/
      Baumpflege/
  astro.config.mjs       ← Astro-Konfiguration
  package.json
  ANLEITUNG.md           ← Nutzeranleitung für Matthias
  AI-DOKUMENTATION.md    ← Diese Datei
  DEPLOYMENT.md          ← Deployment-Anleitung
```

---

## Design-System

Alle Designwerte sind als CSS-Variablen in `src/styles/global.css` definiert.

### Farben

```css
--farbe-lila: #7B5EA7;          /* Primärfarbe aus Logo */
--farbe-tuerkis: #4ECDC4;       /* Sekundärfarbe aus Logo */
--farbe-gradient: linear-gradient(135deg, #7B5EA7, #4ECDC4);
--farbe-oliv: #5B7A4A;          /* Naturakzent, Buttons */
--farbe-braun: #8B6542;         /* Erdton */
--farbe-hintergrund: #F8F5F0;   /* Hellbeige Hintergrund */
--farbe-weiss: #FFFFFF;
--farbe-text: #2C2C2C;
--farbe-text-hell: #666666;
--farbe-border: #E0D8D0;
```

### Typografie

```css
--font-headline: 'Playfair Display', Georgia, serif;  /* Überschriften */
--font-text: 'Inter', system-ui, sans-serif;          /* Fließtext */
```

Google Fonts werden im `<head>` via CSS `@import` geladen (in `global.css`).

### Abstände

```css
--abstand-xs: 0.5rem;
--abstand-s: 1rem;
--abstand-m: 1.5rem;
--abstand-l: 2.5rem;
--abstand-xl: 4rem;
--abstand-xxl: 6rem;
```

### Wichtige CSS-Klassen

| Klasse | Beschreibung |
|---|---|
| `.container` | Zentriert mit max-width 1200px |
| `.container--schmal` | Zentriert mit max-width 720px (für Text-Seiten) |
| `.sektion` | Abschnitt mit Padding oben/unten |
| `.sektion--hell` | Abschnitt mit hellbeigem Hintergrund |
| `.grid-2` | 2-spaltiges Grid (responsive) |
| `.grid-3` | 3-spaltiges Grid (responsive) |
| `.btn--primaer` | Olivgrüner Button |
| `.btn--sekundaer` | Transparenter Button (für dunkle Hintergründe) |
| `.btn--outline` | Kontur-Button in Olivgrün |
| `.abschnitt-kopf` | Zentrierter Abschnitt-Header mit h2 und Beschreibung |
| `.trennlinie` | Kurze Gradient-Linie als Dekorationselement |
| `.badge` | Kleines Label/Tag-Element |

---

## Content Collections (Markdown)

### Kurse (`src/content/kurse/`)

Pflichtfelder: `titel`, `kategorie`
Optionale Felder: `datum` (JJJJ-MM-TT), `ort`, `dauer`, `preis` (Zahl), `plaetze` (Zahl), `titelbild` (Dateiname in `public/bilder/kurse/`), `buchungslink`, `aktiv` (true/false)

Dateien die mit `_` beginnen werden ignoriert.

### Projekte (`src/content/projekte/`)

Pflichtfelder: `titel`, `kategorie`
Optionale Felder: `ort`, `jahr` (Zahl), `titelbild` (in `public/bilder/projekte/`), `bilder` (Liste von Dateinamen), `featured` (true = erscheint auf Startseite)

### Termine (`src/content/termine/`)

Pflichtfelder: `titel`, `datum` (JJJJ-MM-TT), `ort`, `typ`
Optionale Felder: `uhrzeit`, `plaetze` (Zahl), `preis` (Zahl), `buchungslink`, `aktiv` (true/false)

---

## Komponenten

### `src/components/Header.astro`
- Fixierter Header mit Gradient-Hintergrund (Lila → Türkis)
- Desktop: Logo links, Navigation mitte, CTA-Button rechts
- Mobile: Hamburger-Menü (JS-Toggle)
- Aktive Seite wird automatisch hervorgehoben via `Astro.url.pathname`

### `src/components/Footer.astro`
- 4-spaltiges Grid (Logo, Navigation, Leistungen, Kontakt-CTA)
- Gleicher Gradient-Hintergrund wie Header
- Enthält Links zu Impressum und Datenschutz

### `src/layouts/BaseLayout.astro`
- Props: `titel` (Pflicht), `beschreibung` (optional), `bild` (optional, für OG-Tag)
- Lädt `global.css`, bindet Header und Footer ein
- Setzt alle Meta-Tags inkl. Open Graph

---

## Seiten-Muster (Seiten-Hero)

Fast alle Unterseiten beginnen mit einem "Seiten-Hero" — einem Vollbild-Bild mit Overlay und Text darüber. Das Muster sieht so aus:

```astro
<section class="seiten-hero">
  <div class="seiten-hero__bild-wrapper">
    <img src="/bilder/..." alt="..." />
    <div class="seiten-hero__overlay"></div>
  </div>
  <div class="container seiten-hero__inhalt">
    <p class="seiten-hero__label">Kategorie-Label</p>
    <h1>Seitentitel</h1>
  </div>
</section>
```

Die zugehörigen CSS-Klassen sind in jeder Seite lokal definiert (nicht global).

---

## Kontaktformular

Datei: `src/pages/kontakt.astro`
Technologie: Netlify Forms (`data-netlify="true"`)
Das Formular funktioniert nur wenn die Website auf Netlify gehostet wird. Lokal ist es ein normales HTML-Formular ohne Funktion.
Spam-Schutz: Honeypot-Feld (`netlify-honeypot="bot-feld"`)

---

## Typische Aufgaben für KI-Assistenten

### Neue Seite hinzufügen
Neue `.astro`-Datei in `src/pages/` anlegen. Sie folgt dem Muster der anderen Seiten: `BaseLayout` importieren, Seiten-Hero oben, Sektionen darunter.

### Farbe ändern
CSS-Variable in `src/styles/global.css` anpassen (z. B. `--farbe-oliv`).

### Navigation ändern
Array `navLinks` in `src/components/Header.astro` anpassen.

### Footer-Inhalt ändern
`src/components/Footer.astro` bearbeiten.

### Startseiten-Inhalt ändern
`src/pages/index.astro` bearbeiten.

### Impressum-Daten eintragen
`src/pages/impressum.astro` — Platzhalter `[...]` durch echte Daten ersetzen.

---

## Build & Deploy

```bash
npm run dev      # Lokaler Entwicklungsserver auf localhost:4321
npm run build    # Statische Website in dist/ generieren
```

Deployment läuft automatisch über Netlify: Jeder Push auf den `main`-Branch in GitHub löst einen neuen Build aus.
