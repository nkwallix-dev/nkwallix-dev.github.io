export interface ReadingPage {
  label: string;
  title?: string;
  paragraphs: string[];
  quote?: string;
}

export interface ReadingChapter {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  date: string;
  pages: ReadingPage[];
}

export const READING_CHAPTERS: ReadingChapter[] = [
  {
    id: 'beginn-einer-reise',
    number: 1,
    title: 'DER BEGINN EINER REISE',
    subtitle: 'Wie aus Videos langsam eine eigene Welt wurde',
    date: '2020 – 2021',
    pages: [
      {
        label: '24. JULI 2020',
        title: 'Der Anfang',
        paragraphs: [
          'Niklas erstellt einen YouTube-Kanal mit einem einfachen Wunsch: irgendwann selbst Kinder mit Videos unterhalten zu können – so, wie ihn andere Creator zuvor unterhalten hatten.',
          'Schon damals beschreibt er Kreativität als eine seiner größten Stärken. Noch existiert keine große Lore, kein Xyros und keine magische Schriftrolle. Es gibt nur Ideen, Videos und eine Menge Fantasie. Genau daraus entsteht später jedoch die Grundlage für alles, was im Storyhub Realität werden soll.',
          'Rückblickend wirkt dieser harmlose Start fast wie der erste unbewusste Schritt in eine Geschichte, die viel größer werden würde als der Kanal selbst.'
        ]
      },
      {
        label: 'FRÜHJAHR 2021',
        title: 'Der hängende Alman',
        paragraphs: [
          'Niklas und Philip haben Langeweile. Philip zeigt, wie lange er verkehrt herum an einer Stange hängen kann – und aus einem simplen Gag entsteht eine kleine Videoreihe.',
          'Am 29. April schafft Philip etwas mehr als sieben Minuten. Wenige Tage später werden daraus zwölf Minuten, danach sogar fünfzehn. Storytechnisch passiert noch kaum etwas, aber die Videos etablieren etwas Wichtiges: Niklas und Philip funktionieren als Duo.',
          'Der spätere Crackyman ist hier einfach nur Philip – der Freund, mit dem aus einer dummen Idee jederzeit ein neues Video werden kann.'
        ]
      },
      {
        label: '31. OKTOBER 2021',
        title: 'X-EYES – Die Verkörperung böser Energie',
        paragraphs: [
          'Purge-Masken mit leuchtenden X-Augen faszinieren Niklas und Philip. Daraus entsteht „X-eyes ft. Philip“, ein Musikvideo, das ursprünglich nur wegen seines Looks und Vibes gedreht wird.',
          'Doch nach Halloween verändert sich etwas. Niklas schläft schlechter, Albträume werden häufiger und es fühlt sich an, als würde etwas in seinem Kopf gegen ihn ankämpfen.',
          'Die X-Augen sind damit nicht länger nur ein Kostüm. Ohne es zu wissen, haben Niklas und Philip ein Symbol geschaffen, das später mit Xyros, Kontrolle, Albträumen und der dunkelsten Seite der gesamten Geschichte verbunden sein wird.'
        ],
        quote: 'Etwas in seinem Kopf versuchte gegen ihn anzukämpfen.'
      }
    ]
  },

  {
    id: 'monster-in-dir',
    number: 2,
    title: 'DAS MONSTER IN DIR',
    subtitle: 'Wenn aus einem schlechten Gefühl plötzlich Gefahr wird',
    date: '2022',
    pages: [
      {
        label: '2. APRIL 2022',
        title: 'Monster',
        paragraphs: [
          'Bei einem weiteren Spielplatzvideo trinkt Philip einen Monster Energy Drink. Eigentlich nichts Besonderes – bis Niklas plötzlich eine bösartige Energie an ihm wahrnimmt.',
          'Philips Verhalten kippt. Er wirkt aggressiver, unberechenbarer und verletzt Niklas schließlich. Der Dealer hatte genau dieses Monster zurückgelassen, wodurch das Getränk rückblickend wie ein Auslöser wirkt.',
          'Danach verschwindet Philip für Monate. Niklas versucht ihn aufzuspüren, während seine eigenen Albträume und Kopfschmerzen immer schlimmer werden.'
        ]
      },
      {
        label: '4. JULI 2022',
        title: 'Wenn Freunde zu Feinden werden',
        paragraphs: [
          'Auf einem Spielplatz, an dem beide früher oft gemeinsam waren, taucht Philip plötzlich wieder auf und bittet Niklas, ihm zu folgen. Was wie ein Wiedersehen beginnt, entwickelt sich zu einer Schnitzeljagd aus Verfolgungen, Schusswechseln, absurdem Humor und immer ernsteren Momenten.',
          'Niklas weiß nicht, ob Philip noch sein Freund ist, ob er ihm vertrauen kann oder was in den vergangenen Monaten überhaupt passiert ist.',
          'Am Ende reden die beiden kurz miteinander, als wäre nie etwas gewesen. Genau diese Normalität macht die Situation nur noch seltsamer.'
        ]
      },
      {
        label: 'ZWISCHEN DEN EREIGNISSEN',
        title: 'Die Erinnerungsrisse',
        paragraphs: [
          'Während Philip immer schwerer einzuschätzen ist, verschlechtert sich auch Niklas’ Zustand. Fast schlaflose Nächte, unerträgliche Kopfschmerzen und eine dunkle Macht begleiten ihn.',
          'In seiner Umgebung entstehen Erinnerungsrisse. Jeder von ihnen steht für Figuren, Ideen oder Einflüsse, die Niklas in seiner Kindheit geprägt haben.',
          'Noch versteht niemand, warum diese Risse existieren. Doch sie sind der erste sichtbare Hinweis darauf, dass Niklas’ Erinnerungen nicht nur Erinnerungen sind – sondern etwas, das reale Macht besitzt.'
        ]
      }
    ]
  },

  {
    id: 'bester-freund-oder-ich',
    number: 3,
    title: 'MEIN BESTER FREUND · ODER ICH?',
    subtitle: 'Der Crackyman und der König der X-Augen',
    date: 'SEPTEMBER – OKTOBER 2022',
    pages: [
      {
        label: '4. SEPTEMBER 2022',
        title: 'Der Crackyman fällt',
        paragraphs: [
          'Philip – inzwischen als Crackyman bekannt – versucht Niklas gefangenzunehmen. Er unterschätzt jedoch das Messer, das Niklas im Wald gefunden hat.',
          'Niklas rammt es ihm in den Bauch. Was zunächst nur ein verzweifelter Versuch ist, die Jagd zu beenden, wird tödlich: Philip bricht nach wenigen Metern durch den Blutverlust zusammen.',
          'Dann erscheint etwas Neues. Eine Gestalt nimmt die Form von Niklas’ X-Augen-Maske an, trägt einen mächtigen Zepter und belebt Philip wieder. Die Maske des Crackyman leuchtet nun grün.'
        ]
      },
      {
        label: '30. OKTOBER 2022',
        title: 'Die Prüfung zum perfekten Sidekick',
        paragraphs: [
          'Die Gestalt stellt sich als X-King vor – später kennen wir ihn als Xyros. Er beansprucht die Herrschaft über die X-Eyes und möchte Crackyman als Leibwächter.',
          'Doch Philip muss sich zuerst beweisen: Waffen zusammenbauen, Niklas das Sturmgewehr wieder abnehmen und zeigen, dass er auch unbewaffnet kämpfen kann.',
          'Nach bestandener Prüfung erhält Crackyman seine erste große Aufgabe: Er soll Niklas eine mysteriöse Schriftrolle übergeben. Diese Rolle kann die Macht der Erinnerungsrisse sammeln und irgendwann an ihren rechtmäßigen Besitzer zurückgeben.'
        ]
      },
      {
        label: '31. OKTOBER 2022',
        title: 'The X-King ft. Crackyman',
        paragraphs: [
          'Im Halloween-Musikvideo treten X-King und Crackyman erstmals gemeinsam als Team auf. Noch wirkt vieles überzeichnet und chaotisch – doch die Rollen sind damit klar verteilt.',
          'Xyros lenkt, plant und verspricht Macht. Crackyman führt seine Befehle aus. Niklas hingegen weiß noch nicht einmal, dass die Schriftrolle Teil eines größeren Plans ist.',
          'Xyros möchte die gesammelte Macht nicht für Niklas sichern. Er will sie stehlen, bevor Niklas überhaupt versteht, dass sie ursprünglich ihm gehört.'
        ]
      }
    ]
  },

  {
    id: 'albtraum-in-person',
    number: 4,
    title: 'XYROS – DER ALBTRAUM IN PERSON',
    subtitle: 'Fünf Wächter, ein falscher Schatz und eine Reise',
    date: '2023 – 2024',
    pages: [
      {
        label: '31. OKTOBER 2023',
        title: 'Happy X',
        paragraphs: [
          'Mit „Happy X“ spricht Xyros beinahe offen über seine Rolle. Er erzählt von Niklas’ Albträumen, von seinem Zepter, von einem Alptraummodus und davon, dass die Dunkelheit herrschen soll.',
          'Besonders wichtig ist seine Anweisung: Niklas soll alle fünf Wächter finden und ihre Zeichen auf der magischen Schriftrolle sammeln.',
          'Gleichzeitig verkauft Xyros ihm die Reise als Schatzsuche. Er verspricht, Niklas am Leben zu lassen, wenn dieser ihm den Schatz bringt – obwohl damit in Wahrheit die gesammelte Macht gemeint ist.'
        ]
      },
      {
        label: '22. OKTOBER 2024',
        title: 'Der Anfang vom Ende',
        paragraphs: [
          'Im Trailer zur magischen Schriftrolle wird die Bedrohung erstmals klar ausgesprochen. Niklas erzählt, dass er schon seit Mitte 2022 spürt, wie etwas aus seinem Kopf fliehen will.',
          'Xyros antwortet darauf nicht mehr wie eine bloße Stimme oder Halluzination. Er erklärt, dass Niklas ihn für eine Illusion hielt – doch nun sei er in Fleisch und Blut hier.',
          'Crackyman erhält währenddessen den Auftrag, Niklas auf seiner Reise zu beschatten und nur dann einzugreifen, wenn es wirklich notwendig wird.'
        ]
      },
      {
        label: '31. OKTOBER 2024',
        title: 'Der erste Erinnerungsriss',
        paragraphs: [
          'Akt 1 beginnt dort, wo Crackyman Niklas im Wald zurückgelassen hat. Xyros erklärt endgültig die Aufgabe, und nach „Weltm4cht“ beginnt die eigentliche Reise.',
          'Der erste Wächter ist Slim Schlappen. Auf dem Weg zu ihm folgt Niklas dem Crackyman durch den Wald. Slim bedroht ihn, doch als Crackyman sich einmischt, entsteht genug Chaos, damit Niklas die erste Unterschrift bekommt.',
          'Xyros reagiert wütend. Crackyman hätte nicht eingreifen dürfen, solange Niklas nicht in Lebensgefahr war.',
        ],
        quote: '„Du hast einen Fehler gemacht und das wird Konsequenzen haben!“'
      }
    ]
  },

  {
    id: 'geheimnisvolle-dealer',
    number: 5,
    title: 'DER GEHEIMNISVOLLE DEALER',
    subtitle: 'Die zweite Unterschrift und ein Märchen, das keines bleiben sollte',
    date: '2025 – 2026',
    pages: [
      {
        label: '31. OKTOBER 2025',
        title: 'Xyros zeigt seine Karten',
        paragraphs: [
          'In Akt 2 verfolgt Niklas weiter die Koordinaten der Schriftrolle. Crackyman bekommt parallel den Auftrag, Slim Schlappen zu suchen – und beginnt erstmals ernsthaft zu hinterfragen, wozu Xyros die Unterschriften überhaupt braucht.',
          'Xyros verrät ihm den Plan: Sobald alle Erinnerungsrisse auf der Schriftrolle gesammelt sind, möchte er deren Energie stehlen.',
          'Crackyman reagiert skeptisch. Zum ersten Mal entsteht der Eindruck, dass seine Loyalität gegenüber Xyros nicht grenzenlos ist.'
        ]
      },
      {
        label: 'DER ZWEITE ERINNERUNGSRISS',
        title: 'Monster, Dealer und die goldene Hand',
        paragraphs: [
          'Niklas kommt vom Weg ab und trifft den Dealer. Das angebotene Monster Energy erinnert ihn sofort an Philips damalige Persönlichkeitsveränderung.',
          'Der Dealer erkennt in der Schriftrolle einen Satz: „Wenn die Hoffnung stirbt, und Dunkelheit die Krone trägt, dann ruft das Vergessene den letzten Ausweg.“ Noch weiß niemand, was damit gemeint ist.',
          'Später erreicht Niklas Ski Augli, erhält die zweite Unterschrift und zieht eine vergoldete Skeletthand aus dem Boden. Die Rolle beginnt in ihrer Nähe zu leuchten. Unter einer Brücke wartet bereits die nächste Begegnung.'
        ]
      },
      {
        label: '31. MÄRZ 2026',
        title: 'Der Wolf, der seine Stimme verlor',
        paragraphs: [
          'Der „Wolf of Waldstreet“ wirkt zunächst wie ein eigenes Märchen außerhalb der Hauptstory. Ein Wolf, der im falschen Märchen landet, seine Stimme verliert und mit Fame, Hexen und einem Todesengel konfrontiert wird.',
          'Doch mitten in diesem scheinbaren Spin-off stehen zwei Figuren, die später entscheidend werden: die Hexe des Waldes und ihr Märchenhaus.',
          'Was zunächst als non-canon Gag gedacht war, entwickelt sich damit rückwirkend zu einem Teil der Welt, in der Niklas’ Erinnerungen, Wünsche und erfundene Geschichten miteinander verschmelzen.'
        ]
      }
    ]
  },

  {
    id: 'alles-nur-ein-traum',
    number: 6,
    title: 'ALLES NUR EIN TRAUM?!',
    subtitle: 'Akt 3 – Erinnerungen beginnen zurückzuschlagen',
    date: '31. OKTOBER 2026',
    pages: [
      {
        label: 'EIN PAAR STUNDEN ZUVOR',
        title: 'Crackymans Jagd',
        paragraphs: [
          'Niklas versucht im Café zu rekonstruieren, was seit Akt 2 passiert ist. Währenddessen erfahren wir, weshalb Crackyman ihn nicht rechtzeitig erreicht hatte.',
          'Bei Xyros taucht ein unbekannter, schwarz gekleideter Mann auf und behauptet, dessen Plan könne nicht funktionieren. Er flieht durch eine Art Portal, Crackyman nimmt die Verfolgung auf und landet schließlich in einer Scheune.',
          'Dort wird Crackyman niedergestochen. Xyros erscheint, heilt ihn mit seinem Zepter und die ikonische X-Augen-Maske kehrt für einen kurzen Moment zurück.'
        ]
      },
      {
        label: 'DER DRITTE WÄCHTER',
        title: 'Amina, Corra und Corey',
        paragraphs: [
          'Niklas erreicht die Brücke und trifft auf Amina. Aus einem Gespräch wird schnell ein Kampf mit zwei Sicheln.',
          'Amina verwandelt sich in Corra. Als die vergoldete Skeletthand während des Kampfes reagiert, blitzt eine Erinnerung an Corey auf. Für Niklas ist das erste Mal spürbar, dass die Hand mit etwas aus seiner Vergangenheit verbunden ist.',
          'Am Ende erhält er die nächste Unterschrift – „corrapop“. Amina erkennt jedoch ebenfalls etwas in der Hand und warnt Niklas, bevor sie verschwindet.'
        ]
      },
      {
        label: 'DAS MÄRCHENHAUS',
        title: 'Der letzte Ausweg',
        paragraphs: [
          'Nach dem Café wird Niklas von einem CIA-Agenten abgefangen. Die Behörde untersucht die wachsenden Anomalien und besonders den Crackyman, der bereits ganze Teams ausgeschaltet hat.',
          'Crackyman greift ein. Rauchgranaten, seine grün leuchtende Maske und eine infrarotartige Sicht verwandeln den Kampf in ein Chaos. Als Crackyman getroffen wird, nutzt Niklas die Schriftrolle und spricht den geheimnisvollen Satz.',
          'Gemeinsam schlagen sie den Agenten zurück. Niklas erreicht schließlich das Märchenhaus, betritt es und greift nach dem Zauberstab der Hexe. Cliffhanger.'
        ],
        quote: '„Wenn die Hoffnung stirbt, und Dunkelheit die Krone trägt, dann ruft das Vergessene den letzten Ausweg!“'
      }
    ]
  },

  {
    id: 'wahre-feind-bist-du',
    number: 7,
    title: 'DER WAHRE FEIND BIST DU',
    subtitle: 'Akt 4 – Der Raum der Erinnerungen',
    date: '31. OKTOBER 2027',
    pages: [
      {
        label: 'DER RAUM DER ERINNERUNGEN',
        title: 'Eine Wahl',
        paragraphs: [
          'Als Niklas den Zauberstab aufhebt, erscheint die Hexe aus dem Wolf-Märchen. Sie behauptet, ein ganzes Jahrzehnt auf seine Rückkehr gewartet zu haben.',
          'Sie führt ihn in einen dunklen Raum voller Erinnerungen. Niklas sieht Bilder seiner Kindheit und Aufnahmen mit Philip, die sich gleichzeitig vertraut und völlig fremd anfühlen.',
          'Die Hexe erklärt, dass Niklas selbst entschieden hatte, diese Erinnerungen zu vergessen. Ihre Aufgabe ist es nicht, ihm etwas aufzuzwingen – sondern ihm die Wahl zu geben, ob er sie zurückhaben möchte.'
        ]
      },
      {
        label: 'DIE WAHRHEIT',
        title: 'Fantasie wurde Realität',
        paragraphs: [
          'Niklas erfährt, dass seine Fantasie früher mehr war als bloße Vorstellungskraft. Wünsche, Serien, Filme und selbst erfundene Geschichten konnten durch ihn in der realen Welt Gestalt annehmen.',
          'Mit Philip teilte er unzählige Abenteuer. Doch nicht nur positive Gedanken wurden real. Auch eine schwarze Gestalt aus seinen Träumen fand einen Weg in die Welt.',
          'Im Kampf dagegen erschuf Niklas als Corey einen Symbionten, verlor seinen Arm und glaubte schließlich, das Monster vernichtet zu haben. Um die Gefahr endgültig wegzusperren, verschloss er seine eigene Macht – gemeinsam mit den Erinnerungen – in der Schriftrolle.'
        ]
      },
      {
        label: 'VIER VON FÜNF',
        title: 'Noch einmal entkommst du mir nicht',
        paragraphs: [
          'Crackyman hört das Gespräch heimlich mit. Xyros wird ungeduldig und bereitet im Hintergrund bereits den finalen Schritt seines Plans vor.',
          'Die Hexe erklärt, dass selbst Figuren wie Slim Schlappen oder Ski Augli Teil von Niklas’ Erinnerungswelt sein können, weil sie aus Einflüssen entstanden, die ihn bis zur Verschließung geprägt haben.',
          'Zum Abschied überträgt sie ihre verbliebene Kraft auf die Schriftrolle. Niklas erkennt den letzten Standort. Während er zur Scheune läuft, beginnen sowohl die Rolle als auch seine Hand erneut zu leuchten.'
        ]
      }
    ]
  },

  {
    id: 'finale-kampf',
    number: 8,
    title: 'DER FINALE KAMPF ZWISCHEN GUT UND BÖSE',
    subtitle: 'Akt 5 – Fünf Machtpunkte und eine letzte Entscheidung',
    date: '31. OKTOBER 2028',
    pages: [
      {
        label: 'DER LETZTE WÄCHTER',
        title: 'Philip',
        paragraphs: [
          'Vor der Scheune leuchten vier von fünf Machtpunkten. Drinnen bereitet Xyros alles vor: Slim Schlappen und Ski Augli werden als willenlose Kampfmaschinen zurückgebracht, Crackyman wird gefesselt und das Licht verschwindet.',
          'Niklas betritt die Scheune. Xyros zeigt ihm den letzten Wächter – den Crackyman selbst. Philip soll der finale Machtpunkt sein.',
          'Niklas müsste nur die goldene Hand über ihn halten und seine Macht aufnehmen. Doch als er den bewusstlosen Freund vor sich sieht, weigert er sich, dies gegen dessen Willen zu tun.'
        ]
      },
      {
        label: 'FREUND GEGEN FREUND',
        title: 'Eine faire Entscheidung',
        paragraphs: [
          'Xyros zwingt Crackyman unter seine Kontrolle und schickt ihn gegen Niklas. Es kommt zum Kampf zwischen zwei Menschen, deren Geschichte Jahre zuvor mit simplen Spielplatzvideos begonnen hatte.',
          'Niklas gewinnt, weigert sich aber erneut, Philips Macht zu stehlen. Daraufhin greifen Xyros’ Diener ein. Auch Amina erscheint unter einer X-Augen-Maske.',
          'Crackyman schafft es schließlich, sich gegen Xyros zu stellen. Seine Waffe beginnt grün zu leuchten und er verletzt seinen ehemaligen Meister – bis Xyros ihm eine Sichel in den Bauch rammt.'
        ]
      },
      {
        label: 'DER LETZTE AUSWEG',
        title: 'Stell es dir vor',
        paragraphs: [
          'Sterbend reicht Crackyman Niklas die Schriftrolle. Nun leuchten alle fünf Machtpunkte. Niklas versteht endlich, was mit dem „Vergessenen“ gemeint war: Philip und die Verbindung zu seiner verlorenen Vergangenheit waren der letzte Schlüssel.',
          'Die gesammelte Macht kehrt zu Niklas zurück. Im finalen Kampf trägt er Coreys Maske, seine Hand leuchtet schwarz und weiß und Xyros wird bezwungen.',
          'Doch der Sieg hat einen Preis. Philip liegt schwer verletzt in Niklas’ Armen. Als Niklas verzweifelt fragt, wie er ihn retten soll, erinnert ihn die Hexe an die Fähigkeit, die all diese Ereignisse überhaupt möglich gemacht hat.'
        ],
        quote: '„Stell es dir vor.“'
      }
    ]
  }
];
