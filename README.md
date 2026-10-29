# EUROMASTER Netzwerk DE und AT

Live-Verzeichnis aus Google Sheets 1f4HK7sF3wBent4HHIAOg_9y8hT19DoZNlg8yik8JDXk.

## Daten
Die Quelle wird bei jedem Öffnen, bei Rückkehr zum Tab und alle fünf Minuten bei sichtbarer Seite neu geladen. Google-IMPORTRANGE kann zusätzliche Verzögerungen verursachen. Die CSV muss für Besucher lesbar bleiben. Es werden keine Google-Zugangsdaten gespeichert. Bei Fehlern bleibt der letzte erfolgreiche Abruf sichtbar; beim ersten Laden steht ein ausdrücklich gekennzeichneter gespeicherter Stand zur Verfügung.

Der Parser berücksichtigt getrennte DE- und AT-Überschriften. Die AT-Tabelle ist gegenüber DE verschoben: Name in E statt F, Koordinaten I/J statt K/L. Keine privaten Kontakt-, Mail- oder Telefondaten werden in den gespeicherten Kartenbestand übernommen. AT-Consultant wird für die ausdrücklich gewünschte Betreuer-Ebene genutzt. Region/RL aus DE T/U. DE-Business-Unit C bestimmt Light/Heavy/Mixed-Symbol in der RL-Ebene. AT nutzt die eigene Spalte „Business Unit“ (T), unabhängig von „Vertrag“. „mixed“ wird zu „Mixed“ vereinheitlicht. Leere Business Units bleiben als „Nicht zugeordnet“ filterbar. FRA und FRP werden in der Oberfläche einheitlich als FRP angezeigt.

## Filter
Deutschland und Österreich lassen sich unabhängig ein- und ausblenden. Die Länder werden gemeinsam angezeigt; innerhalb jedes Landes gelten Netzwerk, RL-/Betreuerregion, BL und Business Unit gemeinsam.

- Netzwerk: Equity (ERM), Franchise (FRP), EFR, PLP, soweit vorhanden. „Nur“ isoliert die Kategorie innerhalb ihres Landes.
- „Gesamt“ aktiviert alle Kategorien des Landes. „One Network“ in DE aktiviert ausschließlich ERM + FRP. Bestehende Regions-/BU-Filter bleiben bestehen; „Zurücksetzen“ setzt alles zurück.
- DE: RL-Region samt Name, BL-Name und Business Unit. Die RL-Region kann Equity und Franchise gemeinsam abbilden.
- AT: Betreuer und Business Unit, auch mit einzelnen Netzwerkkategorien kombinierbar.
- Aus der Quelle geladene Werte bilden die Filteroptionen automatisch. Fehlende Werte lassen sich gezielt auswählen.
- Nord/Süd wird erst angeboten, wenn die Quelle eine ausdrückliche Spalte „Nord/Süd“, „Nord / Süd“ oder „Vertriebsbereich“ enthält. Eine Zuordnung der BL-Namen wird nicht geraten. Bis dahin steht der BL-Filter zur Verfügung.

Standortliste und Detailanzeige enthalten KST, Netzwerkkennung und Betreuung. In den Details stehen RL-Nummer/Region, RL-Name und BL-Name; fehlende Angaben werden gekennzeichnet. Suche umfasst auch Betreuung, BL und Business Unit. Karte und Liste verwenden dieselben Filter. Standorte ohne Koordinaten bleiben in der Liste.

## Prüfung
`node tests/data.cjs`, `node tests/selection.cjs`, `node --check app.js`.
Die Filtertests vergleichen Kombinationen aus Land, Netzwerk, RL-/Betreuerregion, BL und Business Unit mit dem gespeicherten Datenbestand.

Die bisherige Google-Karte wurde nicht verändert. Bereitstellung über GitHub Pages: Settings → Pages → Source: GitHub Actions. Der Workflow prüft die Datenverarbeitung und veröffentlicht die Karte. Die bisherige Einbindung kann auf die Pages-Adresse umgestellt werden.
