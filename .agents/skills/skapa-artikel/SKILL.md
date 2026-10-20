---
name: skapa-artikel
description: Skapar nya LIMÓ-artiklar i JSON-format med tillhörande AI-genererade bilder. Använd när användaren vill skapa en artikel till LIMÓ:s befintliga artikelmall.
---

# Skapa en LIMÓ-artikel

## Utgångspunkt

Läs projektrotens AGENTS.md och Webbplats/artiklar/test-artikel.json.
Läs artikel.js endast för att förstå hur innehållet visas.

Följ användarens önskan att arbeta steg för steg. Förklara nästa
steg och invänta godkännande före nästa större moment.

## Skydda webbplatsen

- Ändra, flytta eller skriv inte över befintliga webbplatsfiler från del 1 och 2.
- Artiklar som skapats genom detta arbetsflöde får bearbetas på användarens
  uttryckliga begäran. Ändra endast det godkända innehållet och kontrollera
  att resten är oförändrat.
- Lämna befintliga HTML-, CSS- och JavaScript-filer orörda.
- Skapa endast nya artiklar och bilder med lediga filnamn.
- Kontrollera filnamnen igen precis innan filerna sparas.
- Vid skapande av en ny artikel: om den önskade sluggen redan finns,
  stanna och förklara konflikten. Låt användaren själv hantera den
  befintliga filen innan en ny artikel skapas med samma slug.
- Vid bearbetning av en plugin-skapad artikel på användarens uttryckliga
  begäran: behåll artikelns befintliga slug och ändra endast det
  godkända innehållet.
- Spara inga API-nycklar eller lösenord i projektet.

## 1. Planera artikeln

Utgå från användarens ämne och eventuell befintlig artikellänk.
Behåll den överenskomna sluggen så att länken fungerar.

Presentera titel, slug, kort innehållsidé och bildidé.
Invänta användarens godkännande innan artikeln och bilden skapas.

## 2. Skriv innehållet

- Skriv på svenska med varm, inspirerande, lekfull och naturlig ton.
- Anpassa innehållet till LIMÓ:s fruktiga smaker och stunder
  att dela.
- Undvik upprepningar och överdrivna reklamuttryck.
- Hitta inte på produktfakta, hälsofördelar eller miljöpåståenden.
  Be om underlag eller utelämna osäkra uppgifter.

Använd samma JSON-struktur som lärarens testartikel:

- title: artikelns sidtitel.
- content: en ordnad lista med innehållsblock.
- h1, h2, h3 och p använder text.
- img använder src och alt.
- ul och ol använder items som en lista med textsträngar.

Använd exakt en h1 och placera ingressen som ett p-block direkt
efter den. Följ logisk rubrikhierarki. Använd listor och h3 bara
när innehållet behöver dem.

## 3. Skapa och spara bilden

Använd tillgängligt bildgenereringsverktyg för att skapa en bild
som passar artikeln och LIMÓ:s visuella uttryck.

Läs relevanta bildinstruktioner om de finns i miljön.
Använd befintliga bilder som visuell referens vid behov,
utan att ändra dem.

- Spara bilden med ett nytt, ledigt namn i Webbplats/images/.
- Använd små bokstäver, siffror och bindestreck i filnamnet.
- Låt filändelsen motsvara bildens verkliga format.
- Ange sökvägen från artikel.html, exempelvis
  images/somrig-smakkombination.png.
- Skriv en beskrivande alt-text som stämmer med bilden.

Om bildverktyg saknas eller bildgenereringen misslyckas:
förklara vad som återstår. Hitta inte på en bildsökväg och
redovisa inte artikeln som färdig med bild.

### Bildval och bearbetning

När användaren vill jämföra bildalternativ, visa förslagen innan
artikelns bildreferens ändras. Använd den bild användaren uttryckligen
väljer. Om det är oklart vilken bild eller textdel som avses, be om
ett förtydligande innan något ändras.

Använd användarens produktbilder som referenser när LIMÓ-burkar
förekommer. Granska särskilt etiketter, proportioner och händer
innan bilden presenteras. Spara nya bildalternativ med lediga filnamn.

## 4. Spara och kontrollera artikeln

Spara artikeln som Webbplats/artiklar/<slug>.json.
Sluggen ska innehålla små bokstäver, siffror och bindestreck,
utan å, ä, ö eller mellanslag.

Kontrollera att:

- JSON-filen går att läsa som giltig JSON, utan kommentarer
  eller avslutande kommatecken.
- title och content finns och har rätt datatyper.
- Endast h1, h2, h3, p, img, ul och ol används.
- Varje block har de fält som dess typ behöver.
- Artikeln har exakt en h1 och logisk rubrikhierarki.
- Varje bildfil finns och har en beskrivande alt-text.
- Filnamnet motsvarar den överenskomna sluggen.

Prova artikeln via lokal webbserver om det är möjligt:
artikel.html?id=<slug>

Kontrollera text, bilder och listor i den befintliga artikelmallen.
Om visningen inte kan testas ska detta framgå i redovisningen.
Ändra inte webbplatsens kod för att lösa eventuella problem;
beskriv dem för användaren.

## 5. Lämna till mänsklig granskning

Redovisa vilka nya filer som skapats, artikelns testlänk och
vilka kontroller som genomförts.

Be användaren granska språk, tonalitet, faktauppgifter,
bild, alt-text och hur artikeln visas.

Skapad innebär inte godkänd för publicering. Publicera inte
och ändra inte startsidans länkar som del av denna skill.

När användaren lämnar feedback:
föreslå en konkret förbättring av arbetsinstruktionerna om
feedbacken visar ett återkommande problem. Ändra instruktionerna
först efter godkännande. Bearbeta en artikel som skapats genom detta
arbetsflöde endast på användarens uttryckliga begäran och kontrollera
att endast det godkända innehållet ändras.
