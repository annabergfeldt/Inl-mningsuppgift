## Om projektet

LIMÓ är ett fiktivt lemonadvarumärke med fokus på fruktiga smaker, inspiration och livets goda stunder.

Webbplatsen innehåller en startsida och en gemensam artikelmall. AI-agentens uppgift är att skapa nya artiklar som passar LIMÓ:s varumärke och webbplats.

## Projektstruktur

- Webbplatsen finns i mappen `Webbplats/`.
- Artiklar sparas i `Webbplats/artiklar/`.
- Bilder sparas i `Webbplats/images/`.
- `Webbplats/artiklar/test-artikel.json` är referens för artiklarnas JSON-format.
- Artikelmallen består av `artikel.html`, `artikel.css` och `artikel.js`.

## Tillgängliga skills

- `skapa-artikel`: Skapar artiklar för LIMÓ i korrekt JSON-format, med tillhörande bild när bildverktyg finns tillgängligt.
- Instruktionerna finns i `.agents/skills/skapa-artikel/SKILL.md`.

## Arbetsordning

När en ny artikel ska skapas ska AI-agenten:

1. Läsa instruktionerna i `AGENTS.md`.
2. Läsa `Webbplats/artiklar/test-artikel.json` för att förstå artikelns struktur.
3. Följa arbetsflödet i `.agents/skills/skapa-artikel/SKILL.md`.
4. Ta fram ett artikelutkast som passar LIMÓ:s tonalitet.
5. Skapa en ny JSON-fil och en relevant artikelbild.
6. Kontrollera filnamn, JSON-struktur, bildsökväg och alt-text.
7. Presentera resultatet för mänsklig granskning och feedback.

## Regler för alla artiklar

### Innehåll och tonalitet

- Alla artiklar ska skrivas på svenska.
- Tonaliteten ska vara varm, inspirerande, lekfull och naturlig.
- Undvik överdrivna reklamuttryck och onödiga upprepningar.
- Innehållet ska vara relevant för LIMÓ:s varumärke och målgrupp.
- Använd tydliga rubriker och lättlästa stycken.

### JSON-format

- Alla artiklar ska följa samma JSON-format som `test-artikel.json`.
- Varje artikel ska innehålla `title` och `content`.
- Använd endast de blocktyper som artikelmallen stödjer: `h1`, `h2`, `h3`, `p`, `img`, `ul` och `ol`.
- Använd en huvudrubrik (`h1`) per artikel.
- Underrubriker ska följa en logisk hierarki.
- Alla blocktyper behöver inte användas i varje artikel.

### Filnamn och länkar

- Artikelns filnamn ska vara dess slug med ändelsen `.json`.
- Använd små bokstäver och bindestreck.
- Använd inte å, ä, ö, mellanslag eller specialtecken i filnamnet.
- Artikellänkar ska följa formatet `artikel.html?id=slug`.

### Bilder

- Bilder ska sparas i `Webbplats/images/`.
- Bildens sökväg i JSON ska anges med `src`, exempelvis `images/artikelbild.png`.
- Alla bilder ska ha en beskrivande alt-text.
- AI-agenten ska använda bildverktyg för att skapa bilder när sådana finns tillgängliga.
- Om en bild inte kan skapas ska AI-agenten meddela detta, inte ange en bildfil som saknas.

## Begränsningar

- AI-agenten får inte ändra, flytta eller skriva över befintliga webbplatsfiler, med undantag för bearbetning av plugin-skapade artiklar enligt regeln nedan.
- Artiklar som skapats genom pluginets arbetsflöde får bearbetas på användarens uttryckliga begäran. Ändra endast det godkända innehållet och kontrollera att resten är oförändrat.
- Befintliga HTML-, CSS- och JavaScript-filer ska lämnas orörda.
- Befintliga bilder ska inte ändras eller skrivas över. Spara nya bildalternativ med lediga filnamn och uppdatera artikelns bildsökväg och alt-text endast på användarens begäran.
- Nya artiklar och bilder får endast skapas med nya, lediga filnamn.
- `test-artikel.json` ska behållas oförändrad.
- Inga API-nycklar eller lösenord får sparas i projektet.

## Mänsklig granskning

Alla AI-genererade artiklar ska granskas av en människa innan de publiceras.

Granskningen ska kontrollera:

- Språk, stavning och tonalitet.
- Faktauppgifter och innehållets relevans.
- Rubriker och artikelstruktur.
- Bilder och alt-texter.
- Att artikeln visas korrekt på webbplatsen.

Feedback från granskningen ska användas för att förbättra instruktionerna och kvaliteten på framtida artiklar.
