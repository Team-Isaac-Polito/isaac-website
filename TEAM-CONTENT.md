# Aggiornare le aree e i membri del team

I contenuti dello slider della pagina About si trovano in
[`app/components/about/team-content.json`](./app/components/about/team-content.json).
Puoi modificarli senza intervenire sul componente grafico.

## Modificare un’area

Ogni elemento dentro `areas` corrisponde a una scheda in alto nello slider:

- `name`: nome mostrato nella scheda;
- `description`: testo introduttivo dell’area;
- `members`: elenco delle persone associate.

Per rinominare o aggiornare un’area, modifica questi valori lasciando invariati
gli altri campi.

## Aggiungere o aggiornare una persona

Dentro `members`, ogni persona ha:

- `name`: nome e cognome;
- `role`: ruolo nel team;
- `photo`: URL completo di una foto pubblica (facoltativo);
- `email`: indirizzo e-mail (facoltativo);
- `linkedin`: link al profilo LinkedIn (facoltativo).

Per aggiungere una persona, copia un oggetto membro della stessa area e cambia
i campi. Puoi omettere i campi facoltativi se non sono disponibili; senza una
foto viene mostrato un avatar con le iniziali. Per rimuovere una persona, elimina
il suo oggetto dall’elenco dell’area.

Se una persona fa parte di più aree, aggiungi o aggiorna la sua scheda in
ciascuna area. Usa foto pubbliche ospitate su `cms.teamisaac.it`.

Quando modifichi il JSON, mantieni virgolette e virgole tra gli oggetti; il
build del sito verifica che il file sia valido.
