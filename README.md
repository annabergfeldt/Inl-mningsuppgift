# LIMÓ – artiklar och AI-plugin

LIMÓ är ett fiktivt lemonadvarumärke. Artikelsystemet skapar
inspiration kring smaker, drycker och stunder att dela.

Projektet består av en webbplats, en gemensam artikelmall och
ett AI-plugin som skapar artikelinnehåll i JSON-format med
tillhörande AI-genererade bilder.

## Så fungerar systemet

Pluginet är ett instruktionsbaserat arbetsflöde för en AI-agent
i Codex.

Systemets delar har olika uppgifter:

- AGENTS.md beskriver projektet, mapparna och de gemensamma reglerna.
- .agents/skills/skapa-artikel/SKILL.md beskriver hur agenten
  planerar, skapar och kontrollerar en artikel med bild.
- webbplats/artiklar/test-artikel.json är referens för artikelns JSON-format.
- webbplats/artiklar/ innehåller artiklarnas JSON-filer.
- webbplats/images/ innehåller webbplatsens och artiklarnas bilder.
- webbplats/artikel.html är den gemensamma artikelmallen.
- webbplats/artikel.js hämtar rätt JSON-fil och bygger artikelns
  HTML-innehåll.
- webbplats/artikel.css bestämmer artikelns utseende.

Arbetsflödet är:

Artikelidé → godkänd plan → text och bild → teknisk kontroll
→ mänsklig granskning → eventuella förbättringar.

## Projektstruktur

```text
projektrot/
├── AGENTS.md
├── README.md
├── .agents/
│   └── skills/
│       └── skapa-artikel/
│           └── SKILL.md
└── webbplats/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── artikel.html
    ├── artikel.css
    ├── artikel.js
    ├── artiklar/
    └── images/
```

## Förutsättningar

- Codex med åtkomst till hela projektmappen.
- Ett tillgängligt bildgenereringsverktyg för att skapa bilder.
- En lokal webbserver, exempelvis Live Server i Visual Studio Code,
  för att kontrollera artiklarna i webbläsaren.

Artikelmallen hämtar JSON med fetch och ska därför öppnas via
en webbserver, inte genom att dubbelklicka på HTML-filen.

Inga API-nycklar eller lösenord ska sparas i projektet.

## Så körs pluginet

1. Öppna projektroten i Codex, alltså mappen som innehåller
   AGENTS.md, .agents/ och webbplats/.
2. Be agenten använda skapa-artikel och ange ämne och önskad slug.
3. Granska förslaget till titel, slug, innehåll och bild.
4. Godkänn planen innan agenten skapar artikeln och bilden.
5. Läs agentens redovisning av nya filer och genomförda kontroller.
6. Öppna artikeln via lokal webbserver och granska resultatet.

Exempel på instruktion till Codex:

> Läs AGENTS.md och använd skillen i
> .agents/skills/skapa-artikel/SKILL.md.
> Planera en LIMÓ-artikel om små stunder värda att fira,
> med sluggen sma-stunder-varda-att-fira.
> Visa planen och vänta på mitt godkännande innan du skapar filer.

Efter att artikeln skapats öppnas den från webbplatsens adress:

artikel.html?id=sma-stunder-varda-att-fira

Exemplet kan endast användas för att skapa en ny fil om sluggen
fortfarande är ledig.

## Artikelns format

Varje artikel innehåller:

- title: sidans titel.
- content: en ordnad lista med innehållsblock.

Tillåtna blocktyper är h1, h2, h3, p, img, ul och ol.

Artikeln ska ha exakt en h1, följd av en ingress i ett p-block.
Rubrikerna ska följa en logisk hierarki.

Bilder anges med src och alt. Sökvägen ska utgå från artikel.html,
exempelvis images/ny-artikelbild.png.

Artikelns filnamn är dess slug med ändelsen .json.
Sluggen använder små bokstäver, siffror och bindestreck,
utan å, ä, ö eller mellanslag.

## Skydd av befintligt arbete

Startsidan, artikelmallen, designen och befintliga funktioner
ska bevaras. Befintliga HTML-, CSS- och JavaScript-filer samt
referensfilen test-artikel.json ska lämnas orörda.

Artiklar som skapats genom arbetsflödet får bearbetas på
användarens uttryckliga begäran. Endast det godkända innehållet
ska ändras och resten kontrolleras som oförändrat.

Nya artiklar och bilder får endast sparas med lediga filnamn.
Vid skapande av en ny artikel måste sluggen vara ledig. Om den
redan finns ska agenten stanna och förklara konflikten. Användaren
hanterar själv den befintliga filen innan en ny artikel skapas
med samma slug.

Vid bearbetning av en plugin-skapad artikel på användarens
uttryckliga begäran behålls artikelns befintliga slug. Endast
det godkända innehållet ändras.

Ändringar i webbplatsens HTML, CSS och JavaScript görs manuellt
av användaren.

## Kontroller och mänsklig granskning

Agenten kontrollerar:

- Att artikelns JSON går att läsa.
- Att innehållsblocken har rätt struktur.
- Att slug och filnamn stämmer överens.
- Att bildfilerna finns och sökvägarna är korrekta.
- Att bilderna har alt-text.
- Att artikeln visas korrekt, om webbläsartest är möjligt.

Agenten ska tydligt ange vilka kontroller som inte kunnat göras.

Användaren granskar:

- Språk, stavning och LIMÓ:s tonalitet.
- Faktauppgifter och innehållets relevans.
- Rubrikhierarki och läsbarhet.
- Bildens kvalitet och koppling till texten.
- Att alt-texten beskriver bilden.
- Artikelns utseende i den befintliga mallen.

En skapad artikel är ett utkast tills användaren har granskat
och godkänt den. Att skapa filer innebär inte att publicera dem.

## Så förbättras systemet med feedback

Feedback används för att förbättra kommande artiklar.

1. Användaren beskriver ett konkret problem i resultatet.
2. Agenten bedömer om problemet gäller den enskilda artikeln
   eller visar en brist i arbetsinstruktionerna.
3. Vid ett återkommande problem föreslår agenten en avgränsad
   förbättring i AGENTS.md eller SKILL.md.
4. Användaren godkänner instruktionsändringen.
5. Nästa artikel granskas för att se om ändringen hjälpte.

Exempel: Om texterna återkommande innehåller för många
reklamuttryck kan instruktionen för tonalitet förtydligas.

Förbättringen sker genom granskade instruktionsändringar.
Systemet lär sig inte automatiskt av feedback.

Vid jämförelse av bildalternativ visas förslagen innan artikelns
bildreferens ändras. Användaren väljer bild och nya bildalternativ
sparas med lediga filnamn. Om en hänvisning till en bild eller
textdel är oklar ska agenten be om ett förtydligande.

LIMÓ:s produktbilder används som referenser när burkar syns i
bilden. Etiketter, proportioner och eventuella händer granskas
innan bilden presenteras.

Dessa regler har förtydligats efter granskning av artikelbilder
och bearbetning av texterna. De ska minska risken att fel bild
eller textdel ändras. Effekten följs upp vid kommande artiklar.

## Artiklar

Följande artiklar har skapats genom arbetsflödet:

- Konsten att hitta den perfekta smakkombinationen:
  artikel.html?id=perfekta-smakkombinationen
- Små stunder värda att fira:
  artikel.html?id=sma-stunder-varda-att-fira
- Vilken LIMÓ-smak är du?:
  artikel.html?id=vilken-limo-smak-ar-du

Artiklarna har tillhörande AI-genererade bilder och har bearbetats
utifrån användarens feedback. JSON-struktur, bildsökvägar och
alt-texter har kontrollerats. Användaren har bekräftat att alla tre
artiklar fungerar via lokal webbserver och granskat resultaten.

Referensfilen test-artikel.json används för formatet.
