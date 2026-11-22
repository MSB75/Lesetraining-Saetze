// Die senkrechten Striche markieren Silbengrenzen; Schrägstriche gliedern Satzteile.
// Bild, Satzteile (Subjekt / Verb / Ergänzungen), falsche Verben, überflüssiges Wort.
const LEVELS = [
[
 ['p8-1','Jan / ba|det','rennt','kocht','Ball'],
 ['p8-2','Wir / sind / Freun|de','ma|len','kau|fen','Topf'],
 ['p8-3','Pa|pa / baut','tanzt','schläft','Fisch'],
 ['p8-4','Li|sa / kauft / ein','schläft','rennt','Bett'],
 ['p8-5','Mo|na / rech|net','singt','rennt','Hund'],
 ['p8-6','Sa|ra / duscht','malt','liest','Buch'],
 ['p8-7','Li|na / rei|tet','sitzt','malt','Zug'],
 ['p8-8','Me|la|nie / fährt / Rad','trägt','wirft','Kuh'],
],
[
 ['p22-1','Der Kö|nig / trägt / ei|ne Kro|ne','kauft','sucht','En|te'],
 ['p22-2','Die Freun|de / ste|hen / zu|sam|men','schla|fen','schwim|men','Ap|fel'],
 ['p22-3','Li|sa / kauft / im La|den','turnt','duscht','Ba|na|ne'],
 ['p22-4','Su|si / hält / ei|nen Ball','isst','liest','Fens|ter'],
 ['p22-5','To|ni / lässt / den Dra|chen stei|gen','malt','kocht','Schu|he'],
 ['p22-6','Mi|ra / gräbt / ein Loch','singt','liest','Blu|me'],
 ['p22-7','Mo|na / rech|net / mit Zah|len','rennt','tanzt','Kof|fer'],
 ['p22-8','Fa|bi|an / steht / im Re|gen','schläft','kocht','Ze|bra'],
],
[
 ['p40-1','Der Fi|scher / hält / ei|nen gro|ßen Fisch','ver|liert','wirft','Blu|se'],
 ['p40-2','Wir / bil|den / mit den Kin|dern / ei|nen Kreis','es|sen','schla|fen','Ta|sche'],
 ['p40-3','Pa|pa / baut / ei|ne Mau|er / aus Stei|nen','zählt','malt','I|gel'],
 ['p40-4','Jan / isst / ein le|cke|res Eis','ver|liert','wirft','Au|to'],
 ['p40-5','Das Kind / ba|det / in der Ba|de|wan|ne','rennt','turnt','Ga|bel'],
 ['p40-6','Die Er|de / ist / rund wie ein Ball','rollt','singt','Ho|se'],
 ['p40-7','Der Rit|ter / hält / ein lan|ges Schwert','ver|liert','ver|steckt','So|fa'],
 ['p40-8','Ein Ge|spenst / ras|selt / mit schwe|ren Ket|ten','singt','schläft','Bir|ne'],
],
[
 ['p65-1','Der Kö|nig / trägt / ei|ne Kro|ne / auf dem Kopf','sucht','ver|kauft','E|le|fant'],
 ['p65-2','Die drei Zwer|ge / ste|hen / ne|ben|ei|nan|der / auf dem Kopf','sit|zen','schla|fen','Ge|mü|se'],
 ['p65-3','Sa|ra / wäscht / sich un|ter der Du|sche / die Haa|re','kämmt','trock|net','Te|le|fon'],
 ['p65-4','Drei Men|schen / sit|zen / in ei|nem Ka|nu / auf dem Was|ser','lie|gen','schwim|men','Schreib|tisch'],
 ['p65-5','Fa|bi|an / schützt / sich mit dem Re|gen|schirm / vor dem Re|gen','wäscht','ver|klei|det','Zahn|bürs|te'],
 ['p65-6','Mi|ra / gräbt / im Gar|ten / mit ei|ner Schau|fel / ein Loch','malt','sucht','Kühl|schrank'],
 ['p65-7','Ein Mann / war|tet / auf ei|ner klei|nen In|sel / auf ein Schiff','kocht','tanzt','Fuß|ball'],
 ['p65-8','Die Kin|der / ar|bei|ten / ge|mein|sam / an ei|nem Tisch','schla|fen','lau|fen','Re|gen|bo|gen'],
],
[
 ['p66-1','Der Rit|ter / trägt / ein Schwert und ei|nen Schild, / um sich zu schüt|zen','ver|liert','ver|kauft','Scho|ko|la|de'],
 ['p66-2','Der Pi|rat / trägt / ei|ne schwar|ze Au|gen|klap|pe, / die ein Au|ge ver|deckt','sucht','ver|liert','Ta|schen|lam|pe'],
 ['p66-3','Das Ka|mel / läuft / durch die hei|ße Wüs|te, / in der es kaum Was|ser gibt','schwimmt','fliegt','Ba|de|wan|ne'],
 ['p66-4','Nach dem Sport / duscht / der Schwim|mer, / da|mit er wie|der sau|ber wird','schreibt','rech|net','Schnee|mann'],
 ['p66-5','Das Mäd|chen / fährt / mit sei|nem Fahr|rad, / das zwei Rä|der hat','fliegt','läuft','Zahn|pas|ta'],
 ['p66-6','Ein Ge|spenst / ras|selt / nachts mit sei|nen Ket|ten, / um uns zu er|schre|cken','malt','bas|telt','Schmet|ter|ling'],
 ['p66-7','Do|mi|nik / lauscht / dem Vo|gel, / der auf ei|nem Ast sitzt und singt','hilft','folgt','Gieß|kan|ne'],
 ['p66-8','Im Herbst / fal|len / die Blät|ter vom Baum, / weil es käl|ter wird','wach|sen','hän|gen','Was|ser|fla|sche'],
]
].map(rows => rows.map(([image,parts,a,b,extra])=>({image,parts:parts.split(' / '),wrong:[a,b],extra})));
