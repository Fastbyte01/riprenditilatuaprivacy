---
label: "Difesa dalla violazione di dati: autenticazione a 2 fattori"
description: Capire come funziona l'autenticazione a 2 fattori.
order: 991
author:
  name: Giuseppe Pignataro
  email: rogepix@gmail.com
---

Un'altra buona cosa che possiamo fare per proteggere i nostri account online è utilizzare l'autenticazione a due fattori.

Secondo <a href="https://www.microsoft.com/security/blog/2019/08/20/one-simple-action-you-can-take-to-prevent-99-9-percent-of-account-attacks/" target="_blank">Microsoft</a>, questa tecnica può bloccare fino al 99,9% degli accessi non autorizzati all'account.

L'autenticazione a più fattori (nota anche come MFA, autenticazione a due fattori o 2FA) è un sistema che richiede dei passaggi aggiunti oltre al nome utente e alla password per accedere ad un determinato account.

La forma più comune di MFA è il messaggio di testo: si accede ad un sito, ci mandano un messaggio con un codice, inseriamo il codice nella schermata apposita e poi accediamo al nostro account.

Questo procedimento ci protegge maggiormente perché con l'MFA, anche se un pirata informatico dovesse ottenere l'accesso alle nostre credenziali di accesso, avrebbe comunque bisogno di avere accesso al nostro dispositivo fisico per completare il processo di accesso.

Quando scegliamo una soluzione MFA, la cosa più importante è cercare qualcosa che useremo in modo coerente e che non vada ad interferire negativamente con la nostra vita.

Se, per esempio, abbiamo bisogno della possibilità di accedere al nostro account da qualsiasi computer in un dato momento, una chiave hardware potrebbe non essere la soluzione migliore.

In generale, dovremmo cercare di <a href="https://www.zdnet.com/article/microsoft-urges-users-to-stop-using-phone-based-multi-factor-authentication/" target="_blank">evitare l'autenticazione a 2 fattori tramite SMS</a> ogni volta che è possibile, in quanto è relativamente facile per un malintenzionato o un pirata informatico "dirottare" il nostro numero di telefono in vari modi e quindi ricevere il codice 2FA in arrivo, andando a vanificare lo scopo dell'autenticazione a 2 fattori e rendendo pertanto inutile il passaggio questo passaggio aggiuntivo.

Usiamo gli SMS solo se non è disponibile nessun'altra alternativa, ma cerchiamo sempre di usare qualcos'altro se ne abbiamo la possibilità.

L'ordine dei metodi 2FA consigliati dal più forte al più debole sono:

1. Chiavi hardware
2. App software
3. Notifiche push
4. SMS / email

### Come procedere

L'autenticazione a due fattori solitamente può essere abilitata nelle impostazioni di "Sicurezza" del nostro account anche se a volte può trovarsi sotto un impostazione simile ma con un nome diverso tipo "Accesso" o "Account".

La mia strategia preferita per implementare l'autenticazione a due fattori sugli account esistenti è quella di iniziare ad abilitarla subito su ogni account "critico"; email, banche, account di lavoro, ecc.

Prendiamoci un pò di tempo e analizziamo quali sono gli account più importanti che abbiamo e abilitiamo in questi l'autenticazione a due fattori.

Per gli account meno "critici", come l'account su Twitter o quello di un sito di news, possiamo usare la solita strategia "as you go" abilitando l'autenticazione a due fattori ogni volta che usiamo un sito o un servizio.

Prima di rendercene conto, avremmo abilitato l'autenticazione su tutti i siti e i servizi in cui questo sistema viene offerto.

### Menzione d'onore: i token hardware

Per la maggior parte delle persone, le app software forniscono la miglior combinazione tra sicurezza e usabilità.

Tuttavia, per coloro che hanno bisogno di una protezione aggiuntiva, o semplicemente voglio qualcosa di più di un "semplice" software, esistono delle chiavi hardware che forniscono la massima protezione ad un costo minimo e con una buona facilità d'uso.

Alcune delle chiavi hardware più comuni e consigliate includono <a href="https://www.yubico.com/" target="_blank">Yubikey</a>, <a href="https://onlykey.io" target="_blank">OnlyKey</a> e <a href="https://puri.sm/products/librem-key/" target="_blank">LibremKey</a>.

Esistono anche delle soluzioni meno comuni ma open source come <a href="https://www.nitrokey.com/" target="_blank">NitroKey</a> e <a href="https://solokeys.com/" target="_blank">SoloKey</a>.

Ognuna di queste soluzioni offre funzionalità diverse, ma tutte forniscono all'incirca lo stesso livello di protezione.

Le chiavi di autenticazione hardware sono dei dispositivi fisici che si collegano al computer e agiscono come un'opzione hardware di autenticazione a più fattori.

Sono un grande sistema di sicurezza aggiuntiva, ma non sono molto resistenti e potrebbero comunque non rivelarsi una buona scelta per un portatile o per una persona che deve essere in grado di accedere da remoto.

Allo stesso tempo però, questa tipologia di chiavi, richiedono che si presti una particolare attenzione ai backup (per esempio, se dovessimo perdere la chiave?).

Vale comunque la pena notare che, tuttavia, le chiavi hardware sono incredibilmente sicure, perché non possono essere in alcun modo intaccate da remoto, come invece è possibile con altre forme di autenticazione a due fattori.

### Suggerimenti e trucchi

La maggior parte ha un opzione durante la seconda schermata di accesso, solitamente quella in cui si inserisce la password, per "ricordare questo dispositivo per 30 giorni" o qualcosa di simile.

Questa opzione ci permette di mantenere il nostro account connesso senza doverci richiedere password e codice di autenticazione a 2 fattori per il periodo di tempo indicato.

Non sono contrario a questo tipo di soluzione, è comodo, ma dobbiamo assicurarci  di non abilitarla su un computer pubblico, su un computer usato da più persone o su un computer che comunque rimane spesso sbloccato.

Usiamo questa opzione eventualmente solo su un computer che non lasciamo incustodito.

Quando attiviamo l'autenticazione a 2 fattori, la maggior parte dei siti ci fornirà dei codici di backup.

Assicuriamoci di annotarli in un posto sicuro, nel caso in cui dovessimo perdere il nostri dispositivo MFA, risparmieremo molto tempo e sopratutto molti mal di testa.

Possiamo anche salvarli nella sezione note del nostro gestore di password.

Alcuni gestori di password offrono anche la possibilità di utilizzare la chiave MFA con un pò di lavoro extra, questo per rendere il processo di accesso più semplice e centralizzato.

Questo può tornarci utile, ad esempio, quando condividiamo un account on qualcuno (un membro della nostra famiglia, per esempio) o se vogliamo semplicemente fare meno affidamento sul nostro telefono.

Tuttavia, dobbiamo essere consapevoli del rischio che mettendo la nostra password e il codice di autenticazione a due fattori nello stesso posto, stiamo creando un unico punto critico.

Assicuriamoci di prendere delle ulteriori precauzioni se decidiamo di intraprendere questo tipo di soluzione.

Molti siti web elencano esplicitamente "Google Authenticator" come opzione per l'autenticazione a due fattori, ma non lasciamoci ingannare.

Qualsiasi app di autenticazione software, tra quelle che trovate elencate anche nella sezione [Autenticazione software 2FA](/strumenti/autenticazione-software-2fa.md) degli strumenti, funzioneranno perfettamente.

Alcune app offrono anche la possibilità di eseguire il backup dei database a die fattori, a volte anche nel cloud.

Ma dobbiamo anche in questo caso essere consapevoli degli eventuali rischi, che possono essere:

* Tutto ciò che viene archiviato nel cloud corre il rischio di essere esposto a causa di una violazione dei dati o di un eventuale dipendente disonesto se il servizio non è "zero knowledge". Facciamo delle ricerche e assicuriamoci di poter nel caso accettare questo rischio.
* Se il backup richiede una password, assicuriamoci di crearne e utilizzarne una complessa, altrimenti corriamo il rischio che venga facilmente violata, come abbiamo discusso nella sezione [Comprendere la violazione dei dati](comprendere-violazione-dati.md).

Se decidiamo di optare per l'utilizzo di un token hardware, assicuriamoci di acquistarne due copie e di conservarne una in un luogo sicuro, come backup nel caso in cui la prima si rompa.

Proprio come per i backup, assicuriamoci di mantenerle regolarmente aggiornate.

Non è utile, avere una copia di backup, se poi non è configurato con i siti su cui utilizzarlo, qualora il dispositivo principale si dove rompere o andare perduto.





