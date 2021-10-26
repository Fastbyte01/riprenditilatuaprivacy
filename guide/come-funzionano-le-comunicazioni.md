---
label: Come funzionano le comunicazioni di rete
description: Capire come funzionano le comunicazioni tra dispositivi e perché è importante proteggerle.
order: 994
author:
  name: Giuseppe Pignataro
  email: rogepix@gmail.com
---

# Come funzionano le comunicazioni di rete

Probabilmente siamo già consapevoli del fatto che i telefoni cellulari non comunicano direttamente tra loro, ma comunicano con delle torri di rete cellulare che creano una rete mesh con altre torri cellulari per fare rimbalzare la nostra chiamato, il nostro messaggio o i nostri dati, da una torre ad un'altra finché non raggiungono la destinazione.

Ma potremmo non sapere che Internet funziona in modo simile.

In questa sezione, andremo a vedere come funziona la moderna comunicazione digitale per aiutarci a capire come alcune delle tecniche e degli strumenti che vedremo nelle prossime sezioni possono proteggere le nostre comunicazioni.

## Il tuo telefono è una radio

Senza entrare troppo in profondità e senza usare molti tecnicismi, possiamo dire che tutti i segnali wireless utilizzano lo spettro elettromagnetico.

Conoscete o ricordate, da qualche lezione di scienza a scuola, ROYGBIV, conosciuto anche come Arcobaleno?

Questa è una rappresentazione della radiazione elettromagnetica, del tipo che conosciamo come "luce visibile".

Che ci crediamo o no, questa rappresenta la totalità del segnale wireless.

Radio, raggi X, telefoni cellulari, wifi, non sono altro che onde luminose che trasportano in giro informazioni.

L'unica cosa che li separa e li differenzia è la frequenza delle onde sullo spettro elettromagnetico.

I microfoni wireless, le radio, i telefoni cellulari e perfino il Wi-Fi rientrano nella sezione "onde radio."

Tutti questi dispositivi utilizzano la stessa tecnologia di base per funzionare e l'unica cosa che gli impedisce di interferire tra di loro è che operano su diverse sezioni delle frequenze radio.

E' inutile dire che il nostro telefono è piuttosto piccolo e se dovrebbe cercare di emettere abbastanza radiazioni radio da raggiungere qualsiasi parte del mondo, la cosa lo renderebbe estremamente dannoso per la nostra salute e richiederebbe che avesse delle dimensioni davvero massicce, il che lo renderebbe troppo grande da poter essere portato sempre con noi.

Per poter comunicare lo stesso con ogni parte del mondo, il nostro "piccolo" telefono che ha una portata limitata, ma sufficiente a connettersi a delle torri più grandi che a loro volta trasmettono il segnale ad altre torri fino a raggiungere la destinazione scelta.

Spesso abbiamo sperimentato la potenza limitata di questa soluzione, ogni volta che perdiamo la ricezione quando ci troviamo in mezzo al nulla.

## Internet funziona allo stesso modo

Sia che si tratti di Wi-Fi o di un cavo ethernet fisico, Internet comunica per lo più in modo simile ai telefoni cellulari, nel senso che i nostri dati saltano da un luogo all'altro prima di raggiungere la destinazione finale, invece che andare direttamente a destinazione.

Una volta che i dati lasciano il nostro router, questi fondamentalmente saltano  attraverso una serie di altri router per arrivare a destinazione.

Questi altri router non sono di proprietà di singoli individui, ma sono di proprietà di società e di provider di servizi Internet (ISP), ma il principio di fondo è lo stesso.

## Che cos'è il DNS

Possiamo pensare ai DNS (Domain Name Service), come una sorta di rubrica di Internet.

Quando digitiamo "Amazon.com" nel nostro browser, il nostro computer non comprende questo indirizzo.

Allora contatta un DNS, che cerca quell'indirizzo e dice al nostro computer:"Hey quello che cerchi è 52.88.253.183"(questo tipo di numero è noto come indirizzo IP).

Ed è il tipo di indirizzo che il nostro computer capisce.

Il nostro computer, a questo punto contatta quell'indirizzo e il sito di Amazon viene visualizzato sul nostro browser.

Lo stesso principio di base si verifica con le app, i servizi di streaming e con praticamente tutto ciò che richiede una connessione ad Internet.

Per avere una speigazione del motivo per cui questo è importante e perché vale la pena proteggerlo, potete leggere l'articolo <a href="https://mullvad.net/en/help/all-about-dns-servers-and-privacy/" target="_blank">"Tutto sui server DNS e la privacy"</a> sul blog del servizio di VPN Mullvad.

MOlti provider di servizi Internet e di servizi VPN gestiscono i propri sistemi DNS, ma in realtà è possibile modificare la maggior parte dei dispositivi affinché funzioni con dei DNS alternativi.

Ci sono diversi vantaggi nell'effettuare questa operazione.

Ad esempio, la maggior parte dei provider DNS predefiniti mantiene un registro dei siti a cui si tenta di accedere, e questo elenco viene venduto a dei data broker che poi li rivendono ad altre aziende per le varie tipologie di profilazione.

Alcuni potrebbero anche essere in grado di accedere al software presente sul nostro computer.

Inoltre, molti provider DNS alternativi bloccano i domini pubblicitari o di malware noti, il significa avere una esperienza online più sicura e meno frustrante.

Siti come questo o come <a href="https://www.privacytools.io/providers/dns/" target="_blank">Privacytools.io</a>, offrono un ottimo elenco di provider DNS alternativi.

Se non siamo sicuri come modificare i DNS dei nostri dispositivi, possiamo fare una semplice ricerca sul web con il nome del dispositivo o del sistema operativo che stiamo utilizzando.

Il principio di base che dobbiamo apprendere da questa sezione del sito è che nessuna comunicazione arriva direttamente alla sua destinazione.

Sia che si tratti di un messaggio, di una telefonata, dello streaming di un film su Netflix, di una ricerca su Google etc. 

Tutte le comunicazioni rimbalzano da un luogo all'altro e a volte passano tra le mani di diverse società e giurisdizioni più volte prima di raggiungere la destinazione finale.

L'email che mandiamo al nostro amico dall'altra parte della città potrebbe effettivamente attraversare diversi continenti prima di arrivare a lui o il messaggio di testo che inviamo al nostro amico che si trova nel negozio accanto potrebbe rimbalzare attraverso le reti di diversi fornitori di servizi cellulari  prima di raggiungerlo.

Questo tipo di capacità di trasmissione ha reso l'accesso ai dati onnipresente e  veloce nella maggior parte delle aree del mondo sviluppato, ma apre anche a rischi incredibili in termini di protezione dei dati durante il loro transito.

Rischi che i nostri dati vengano letti o copiati o addirittura alterati, anche inconsapevolmente, da un numero qualsiasi di organizzazioni, aziende, pirati informatici o altre persone che hanno accesso, legittimo o meno, ad essi lungo il loro percorso.
