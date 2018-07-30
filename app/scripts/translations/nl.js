// Dutch
"use strict";
var nl = function() {};
nl.code = "nl";
nl.data = {
  /* DexNS tabs */

  NAV_DexNS: "DexNS",
  NAV_Decentralized_Naming_Service: "Decentralized Naming Service",

  /* New Generics */
  x_CancelReplaceTx: "Annuleer of Vervang Transactie",
  x_CancelTx: "Annuleer Transactie",
  x_PasswordDesc:
    'Dit wachtwoord * versleuteld * je prive sleutel. Dit wachtwoord dient niet als "seed" om je sleutels te genereren. **Je hebt zowel je wachtwoord als je prive sleutel beide nodig om je wallet te openen.**',
  x_ReadMore: "Lees meer",
  x_ReplaceTx: "Vervang Transactie",
  x_TransHash: "Transactie Hash",
  x_TXFee: 'TX Vergoeding ("TX Fee")',
  x_TxHash: "TX Hash",

  /* Check TX Status */
  NAV_CheckTxStatus: "Check TX Status",
  NAV_TxStatus: "TX Status",
  tx_Details: "Transactie Details",
  tx_Summary:
    'Ten tijden van hoog transactie volume (zoals tijdens ICOs) kunnen transacties voor uren, zo niet dagen, "pending" blijven. Deze tool heeft als doel om je de mogelijkheid te geven om deze TXs op te sporen en ze te "annuleren" / vervangen. ** Dit is niet typisch iets wat je kunt doen. Je zou er niet op moeten vertrouwen dat dit werkt & het kan alleen werken als de TX Pools vol zitten. [Lees hier meer over deze tool.](https://myetherwallet.groovehq.com/knowledge_base/topics/how-can-i-check-on-the-status-of-my-transaction-can-i-cancel-override-overwrite-replace-or-do-anything-once-a-transaction-has-been-sent)**',
  tx_notFound: "Transactie Niet Gevonden",
  tx_notFound_1:
    "Deze TX werd niet gevonden in de TX Pool van de node waarmee je bent verbonden.",
  tx_notFound_2:
    'Als je deze transactie zojuist hebt verzonden, wacht dan eerst 15 seconden en druk nogmaals op de "Check TX Status" knop. ',
  tx_notFound_3:
    "De transactie zou nog steeds in de TX Pool van een andere node kunnen zitten, in afwachting om ge-mined te worden.",
  tx_notFound_4:
    "Gebruik het drop-down menu in de rechterbovenhoek & selecteer een andere ETH node (bijvoobeeld `ETH (Etherscan.io)` of `ETH (Infura.io)` of `ETH (MyEtherWallet)`) en check opnieuw.",
  tx_foundInPending: "Pending Transactie Gevonden",
  tx_foundInPending_1:
    "Je transactie is gevonden in de TX Pool van de node waarmee je bent verbonden. ",
  tx_foundInPending_2:
    'Je transactie is momenteel "pending" (in afwachting om ge-mined te worden). ',
  tx_foundInPending_3:
    'Er is een kans dat je je transactie kunt "anneleren" of vervangen. Open je wallet hieronder.',
  tx_FoundOnChain: "Transactie Gevonden",
  tx_FoundOnChain_1:
    "Je transactie was succesvol ge-mined en is in de blockchain opgenomen.",
  tx_FoundOnChain_2:
    '**Als je een rood `( ! )`, een `BAD INSTRUCTION` of een `OUT OF GAS` foutmelding**, betekend dat dat de transactie niet succesvol is *verzonden*. Je kunt deze transactie niet annuleren of vervangen. Verzend in plaats daarvan een nieuwe transactie. Als je een "Out of Gas" foutmelding krijgt, zou je de oorspronkelijke gas limit moeten verdubbelen.',
  tx_FoundOnChain_3:
    "**Als je geen enkele foutmelding ziet is je transactie met succes verzonden.** Je ETH of Tokens zijn waar je ze naar verzonden hebt. Als je je verzonden ETH of Tokens niet gecrediteerd ziet in je andere wallet / exchange account, en het is inmiddels al 24+ uur geleden sinds je de transactie verzonden hebt, neem dan [contact op met die service](https://myetherwallet.groovehq.com/knowledge_base/topics/i-have-a-question-but-its-not-about-myetherwallet-dot-com-what-do-i-do). Geef ze de *link* naar je transactie en vraag ze op je allerliefste manier om naar je situatie te kijken.",

  /* Gen Wallet Updates */
  GEN_Help_1: "gebruik jouw",
  GEN_Help_2: "om toegang tot je account te verkrijgen.",
  GEN_Help_3: "Jouw device * is * je wallet.",
  GEN_Help_4: "Guides & FAQ",
  GEN_Help_5: "Hoe maak je een Wallet",
  GEN_Help_6: "Aan de slag",
  GEN_Help_7:
    "Bewaar dit veilig · Maak een backup · Deel het met niemand · Raak het niet kwijt · Dit kan niet meer worden hersteld als je het kwijtraakt.",
  GEN_Help_8: "Lukt het downloaden niet? ",
  GEN_Help_9: "Probeer het met Google Chrome ",
  GEN_Help_10: "Rechtermuisknop & kies opslaan als. Bestandsnaam: ",
  GEN_Help_11: "Open dit bestand niet op je computer ",
  GEN_Help_12:
    "Gebruik het enkel om je wallet te openen via MyEtherWallet (of Mist, Geth, Parity en andere wallet clients.) ",
  GEN_Help_13: "Hoe maak je een backup van je Keystore bestand ",
  GEN_Help_14: "Wat zijn al deze verschillende formaten? ",
  GEN_Help_15: "Voorkom verlies &amp; diefstal van je tegoeden.",
  GEN_Help_16: "Wat zijn al deze verschillende formaten?",
  GEN_Help_17: "Waarom zou ik?",
  GEN_Help_18: "Om een tweede extra backup te hebben.",
  GEN_Help_19: "Voor als je ooit je wachtwoord vergeet.",
  GEN_Help_20: "Cold Storage",
  GET_ConfButton: "Ik begrijp het. Ga door.",
  GEN_Label_5: "Sla je Prive Sleutel op. ",
  GEN_Unlock: "Open je wallet om je adres te bekijken",
  GAS_PRICE_Desc:
    "Gas Prijs is het bedrag dat je betaald per unit gas. `TX vergoeding = gas prijs * gas limiet` & wordt betaald aan de miners om jouw TX in een blok op de blockchain op te nemen. Des te hoger de gas prijs = de sneller je transactie, maar ook duurder. Standaard is `21 GWEI`.",
  GAS_LIMIT_Desc:
    "Gas limiet is de hoeveelheid gas waarmee je je TX verstuurd. `TX vergoeding = gas prijs * gas limiet` & wordt betaald aan de miners om jouw TX in een blok op de blockchain op te nemen. Het verhogen van dit nummer zorgt er niet voor dat je TX sneller ge-mined zal worden. Verzenden van ETH = `21000`. Verzenden van Tokens = ~`200000`.",
  NONCE_Desc:
    "De nonce is het aantal transacties die reeds verzonden zijn van een gegeven adres. De nonce verzekert dat transacties in de juiste volgorde worden verzonden en dat een transactie slechts 1 keer geldig is.",
  TXFEE_Desc:
    "De TX vergoeding (`fee`) wordt betaald aan de miners om jouw TX in een blok op de blockchain op te nemen. De vergoeding is de `gas limiet` * `gas prijs`. [Je kunt hier GWEI -> ETH converteren](https://www.myetherwallet.com/helpers.html)",

  /* Navigation*/
  NAV_AddWallet: "Wallet Toevoegen ",
  NAV_BulkGenerate: "Bulk Genereren ",
  NAV_Contact: "Contact ",
  NAV_Contracts: "Contracten ",
  NAV_DeployContract: "Publiceer Contract ",
  NAV_ENS: "ENS",
  NAV_GenerateWallet_alt: "Nieuw Wallet ",
  NAV_GenerateWallet: "Genereer Nieuw Wallet ",
  NAV_Help: "Help ",
  NAV_InteractContract: "Interactie met Contract ",
  NAV_Multisig: "Multisig ",
  NAV_MyWallets: "Mijn Wallets ",
  NAV_Offline: "Verzend Offline ",
  NAV_SendEther: "Verzend Ether & Tokens ",
  NAV_SendTokens: "Verzend Tokens ",
  NAV_SignMsg: "Onderteken Bericht ",
  NAV_Swap: "Omwisselen ",
  NAV_ViewWallet: "Bekijk Wallet Info ",
  NAV_YourWallets: "Jouw Wallets ",

  /* General */
  x_Access: "Verkrijg Toegang ",
  x_AddessDesc:
    'Je Adres wordt ook wel je `Account #` of je Publieke Sleutel ("Public Key") genoemd. Dit is wat je deelt met anderen zodat ze je Ether of Tokens kunnen toesturen. Zie ook je kleurrijke adres icoon. Zorg ervoor dat het matched met je paper wallet & waar dan ook wanneer je je adres ergens invoerd. Dit icoon is een makkelijke manier om je adres te herkennen. ',
  x_Address: "Je Adres ",
  x_Cancel: "Annuleren ",
  x_CSV: "CSV bestand (onversleuteld) ",
  x_Download: "Download ",
  x_Json: "JSON Bestand (onversleuteld) ",
  x_JsonDesc:
    'Dit is het onversleutelde, JSON formaat van je prive sleutel ("Private Key"). Dit betekend dat je het wachtwoord niet nodig hebt, maar ook dat een ieder die je JSON bestand vind toegang heeft tot je wallet & Ether zonder wachtwoord. ',
  x_Keystore: "Keystore Bestand (UTC / JSON · Aangeraden · versleuteld) ",
  x_Keystore2: "Keystore Bestand (UTC / JSON) ",
  x_KeystoreDesc:
    "Dit Keystore bestand voldoet aan het formaat zoals gebruikt door Mist waardoor je het gemakkelijk kunt importeren in de toekomst. Dit is de aanbevolen methode voor download en back up. ",
  x_MetaMask: "ClassicMask / MetaMask / Mist ",
  x_Mnemonic: "Mnemonic Zin ",
  x_ParityPhrase: "Parity herstelzin ",
  x_Password: "Wachtwoord ",
  x_Print: "Druk je papieren wallet af ",
  x_PrintDesc:
    "ProTip: Klik Afdrukken en sla deze pagina op als PDF, zelfs als je geen printer hebt! ",
  x_PrintShort: "Afdrukken ",
  x_PrivKey: "Prive Sleutel (onversleuteld) ",
  x_PrivKey2: "Prive Sleutel ",
  x_PrivKeyDesc:
    "Dit is een onversleutelde tekst versie van je prive sleutel waarbij geen wachtwoord benodigd is. Mocht iemand deze onversleutelde prive sleutel vinden, kunnen zij zonder wachtwoord bij je account. Om deze reden zijn versleutelde versies aanbevolen. ",
  x_Save: "Opslaan ",
  x_TXT: "TXT bestand (onversleuteld) ",
  x_Wallet: "Wallet ",

  /* Header */
  CX_Tagline:
    "Open Source JavaScript Client-Side Ether Wallet Chrome Extensie ",
  CX_Warning_1:
    "Zorg voor **externe backups** van alle wallets die je hier opslaat. Er kunnen diverse dingen gebeuren die ervoor zorgen dat je gegevens in deze Chrome Extensie verloren gaan, inclusief het deinstalleren en installeren van de extensie. Deze extensie is een manier om je wallet gemakkelijk toegankelijk te maken, **geen** manier om ze te backuppen. ",
  MEW_Tagline: "Open Source JavaScript Client-Side Ether Wallet ",
  MEW_Warning_1:
    "Check altijd de URL voordat je jouw wallet opent of een nieuwe wallet genereert. Pas op voor phishing sites! ",

  /* Footer */
  FOOTER_1:
    "Een gratis, open source, client-side interface om Ethereum wallets te genereren &amp; meer. Wissel op een gemakkelijke &amp; veilige manier informatie uit met de Ethereum blockchain. Dubbel-check de URL/link ( .com ) alvorens je wallet te openen.",
  FOOTER_1b: "Gemaakt door ",
  FOOTER_2: "Donaties worden zeer gewaardeerd: ",
  FOOTER_3: "Client-side wallet genereren door ",
  FOOTER_4: "Disclaimer ",

  /* Sidebar */
  sidebar_AccountInfo: "Account Informatie ",
  sidebar_AccountAddr: "Account Adres ",
  sidebar_AccountBal: "Account Saldo ",
  sidebar_TokenBal: "Token Saldo ",
  sidebar_Equiv: "Equivalente Waarde ",
  sidebar_TransHistory: "Transactie Geschiedenis ",
  sidebar_donation:
    "MyEtherWallet is een gratis, open-source service toegewijd aan jouw privacy en beveiliging. Des te meer donaties we ontvangen, des te meer tijd we zullen spenderen aan nieuwe functies, aan de hand van jouw terugkoppeling, en we je kunnen geven wat jij wilt. Wij zijn slechts twee mensen die de wereld een stukje beter willen maken. Help jij mee? ",
  sidebar_donate: "Doneer ",
  sidebar_thanks: "BEDANKT!!! ",
  sidebar_DisplayOnTrezor: "Toon adres op TREZOR",
  sidebar_DisplayOnLedger: "Toon adres op Ledger",

  /* Decrypt Panel */
  decrypt_Access: "Hoe wil je toegang tot je wallet? ",
  decrypt_Title: "Selecteer het formaat van je prive sleutel: ",
  decrypt_Select: "Selecteer een Wallet: ",

  /* Mnemonic */
  MNEM_1: "Selecteer het adres waarmee je wilt communiceren. ",
  MNEM_2:
    "Met jouw enkele HD mnemonic zin heb je toegang tot meerdere wallets / adressen. Selecteer het adres waarmee je nu wilt communiceren. ",
  MNEM_more: "Meer Adressen ",
  MNEM_prev: "Vorige Adressen ",

  /* Hardware wallets */
  x_Ledger: "Ledger Wallet ",
  ADD_Ledger_1: "Verbind je Ledger Wallet ",
  ADD_Ledger_2: "Open de Ethereum applicatie (of een contract applicatie) ",
  ADD_Ledger_3:
    'Controleer of "Browser Support" is ingeschakeld in je instellingen ',
  ADD_Ledger_4:
    'Als je "Browser Support" niet in je instellingen kunt vinden, controleer dan dat je [Firmware >1.2](https://www.ledgerwallet.com/apps/manager) is ',
  ADD_Ledger_0a: "Her-open MyEtherWallet met een veilige (SSL) verbinding ",
  ADD_Ledger_0b:
    "Her-open MyEtherWallet door gebruik te maken van [Chrome](https://www.google.com/chrome/browser/desktop/) of [Opera](https://www.opera.com/) ",
  ADD_Ledger_scan: "Verbind met Ledger Wallet ",
  x_Trezor: "TREZOR ",
  ADD_Trezor_scan: "Verbind met TREZOR ",
  ADD_MetaMask: "Verbind met MetaMask ",
  x_DigitalBitbox: "Digital Bitbox ",
  ADD_DigitalBitbox_0a:
    "Her-open MyEtherWallet met een veilige (SSL) verbinding ",
  ADD_DigitalBitbox_0b:
    "Her-open MyEtherWallet door gebruik te maken van [Chrome](https://www.google.com/chrome/browser/desktop/) of [Opera](https://www.opera.com/) ",
  ADD_DigitalBitbox_scan: "Verbind met Digital Bitbox ",

  /* Add Wallet */
  ADD_Label_1: "Wat wil je doen? ",
  ADD_Radio_1: "Genereer nieuwe wallet ",
  ADD_Radio_2: "Selecteer je wallet bestand (Keystore / JSON) ",
  ADD_Radio_2_alt: "Selecteer je wallet bestand ",
  ADD_Radio_2_short: "SELECTEER WALLET BESTAND... ",
  ADD_Radio_3: "Plak/Type je prive sleutel ",
  ADD_Radio_4: "Voeg een te bekijken account toe ",
  ADD_Radio_5: "Plak/type Mnemonic ",
  ADD_Radio_5_Path: "Selecteer HD derivation path ",
  ADD_Radio_5_woTrezor: "(Jaxx, Metamask, Exodus, imToken)",
  ADD_Radio_5_withTrezor: "(Jaxx, Metamask, Exodus, imToken, TREZOR)",
  ADD_Radio_5_PathAlternative: "(Ledger)",
  ADD_Radio_5_PathTrezor: "(TREZOR)",
  ADD_Radio_5_PathCustom: "Custom",
  ADD_Label_2: "Verzin een Nickname: ",
  ADD_Label_3: "Je wallet is versleuteld. Geef je wachtwoord ",
  ADD_Label_4: "Voeg een te bekijken account toe ",
  ADD_Warning_1:
    'Je kunt elk account toevoegen als "bekijken" in het wallets tabblad zonder de prive sleutel te uploaden. Dit betekend ** niet ** dat je toegang hebt tot deze wallet, noch dat je er Ether vanuit kunt versturen. ',
  ADD_Label_5: "Voer het adres in ",
  ADD_Label_6: "Ontsleutel je wallet ",
  ADD_Label_6_short: "Ontsleutel ",
  ADD_Label_7: "Voeg account toe ",
  ADD_Label_8: "Wachtwoord (optioneel): ",

  /* My Wallet */
  MYWAL_Nick: "Wallet Nickname ",
  MYWAL_Address: "Wallet Adres ",
  MYWAL_Bal: "Saldo ",
  MYWAL_Edit: "Bewerken ",
  MYWAL_View: "Bekijken ",
  MYWAL_Remove: "Verwijderen ",
  MYWAL_RemoveWal: "Verwijder Wallet: ",
  MYWAL_WatchOnly: "Je Watch-Only Accounts ",
  MYWAL_Viewing: "Te Bekijken Wallet ",
  MYWAL_Hide: "Verberg Wallet Info ",
  MYWAL_Edit_2: "Bewerk Wallet ",
  MYWAL_Name: "Wallet Naam ",
  MYWAL_Content_1:
    "Waarschuwing! Je staat op het punt om je wallet te verwijderen ",
  MYWAL_Content_2:
    "Wees er zeker van dat je **de prive sleutel/JSON bestand en het wachtwoord opgeslagen hebt** van deze wallet voordat je het verwijderd. ",
  MYWAL_Content_3:
    "Als je deze wallet in de toekomst nog wilt gebruiken met MyEtherWallet CX, zul je het met de hand moeten toevoegen door gebruik te maken van de prive sleutel/JSON en wachtwoord. ",

  /* Generate Wallets */
  GEN_desc: "Als je meerdere wallets wilt genereren, kun je dat hier doen ",
  GEN_Label_1: "Voer een sterk wachtwoord in (minimaal 9 karakters) ",
  GEN_Placeholder_1: "Vergeet NIET om dit wachtwoord op te slaan! ",
  GEN_SuccessMsg: "Gelukt! Je wallet is gegenereerd. ",
  GEN_Label_2: 'Sla je "Keystore" bestand op.',
  GEN_Label_3: "Sla je adres op. ",
  GEN_Label_4:
    "Optioneel: Druk je papieren wallet af, of bewaar hem als QR code.",

  /* Bulk Generate Wallets */
  BULK_Label_1: "Aantal te genereren wallets ",
  BULK_Label_2: "Genereer Wallets ",
  BULK_SuccessMsg: "Gelukt! Je wallets zijn gegenereerd. ",

  /* Sending Ether and Tokens */
  SEND_addr: "Aan Adres ",
  SEND_amount: "Te verzenden bedrag ",
  SEND_amount_short: "Bedrag ",
  SEND_custom: "Aangepast Token ",
  SEND_gas: "Gas ",
  SEND_TransferTotal: "Verzend volledig saldo ",
  SEND_generate: "Genereer Transactie ",
  SEND_raw: "Raw Transactie ",
  SEND_signed: "Gesigneerde Transactie ",
  SEND_trans: "Verzend Transactie ",
  SENDModal_Title: "Waarschuwing! ",
  /* full sentence reads "You are about to send "10 ETH" to address "0x1234". Are you sure you want to do this? " */
  SENDModal_Content_1:
    "Je staat op het punt om het volgende bedrag over te maken ",
  SENDModal_Content_2: "aan adres ",
  SENDModal_Content_3: "Weet je zeker dat je dit wilt doen? ",
  SENDModal_Content_4:
    "OPMERKING: Als je een fout bent tegengekomen, zul je waarschijnlijk ether aan je account moeten toevoegen om de gas kosten voor het verzenden van deze transactie te betalen. Gas wordt betaald in ether. ",
  SENDModal_No: "Nee, haal me hier weg! ",
  SENDModal_Yes: "Ja, ik weet het zeker! Maak de transactie. ",

  /* Tokens */
  TOKEN_Addr: "Adres ",
  TOKEN_Symbol: "Token Symbool ",
  TOKEN_Dec: "Decimalen ",
  TOKEN_show: "Toon alle Tokens ",
  TOKEN_hide: "Verberg Tokens ",

  /* Send Transaction */
  TRANS_desc:
    'Als je Tokens wilt versturen, gebruik dan de "Verzend Token" pagina i.p.v. deze pagina. ',
  TRANS_advanced: "+Geavanceerd: Voeg Data toe ",
  TRANS_data: "Data ",
  TRANS_gas: "Gas Limit ",
  TRANS_sendInfo:
    "Een standaard transactie met 21000 gas zal 0.000441 ETH kosten. Wij gebruiken een iets-boven-minimum gas prijs van 0.000000021 ETH om te garranderen dat de transactie snel uitgevoerd zal worden. Wij zijn niet verantwoordelijk voor je transactie kosten. ",

  /* Offline Transaction */
  OFFLINE_Title: "Genereer & Verzend een Offline Transactie ",
  OFFLINE_Desc:
    "Een offline transactie doe je in drie stappen. Stap 1 en 3 doe je op een online computer, terwijl je stap 2 uitvoert op een offline/afgeschermde computer. Dit zorgt ervoor dat je prive sleutel niet in aanraking komt met een met internet verbonden computer. ",
  OFFLLINE_Step1_Title: "Stap 1: Genereer Informatie (Online Computer) ",
  OFFLINE_Step1_Button: "Genereer Informatie ",
  OFFLINE_Step1_Label_1: "Van Adres ",
  OFFLINE_Step1_Label_2:
    "Opmerking: Dit is het VAN adress, niet het AAN adres. De Nonce wordt generenereerd van het oorspronkelijke account. Als je een afgeschermde (airgapped) computer gebruikt, zal dit het adres van het cold-storage account zijn. ",
  OFFLINE_Step2_Title: "Stap 2: Genereer Transactie (Offline Computer) ",
  OFFLINE_Step2_Label_1: "Aan Adres ",
  OFFLINE_Step2_Label_2: "Waarde / Te Verzenden Bedrag ",
  OFFLINE_Step2_Label_3: "Gas Prijs ",
  OFFLINE_Step2_Label_3b:
    "Dit werd weergegeven in Stap 1 op je online computer. ",
  OFFLINE_Step2_Label_4: "Gas Limiet ",
  OFFLINE_Step2_Label_4b:
    "21000 is de standaard gas limiet. Als je (naar) een contract verstuurd of data toevoegd, zou je dit anders moeten instellen. Alle onbenutte gas zal aan je worden teruggestuurd. ",
  OFFLINE_Step2_Label_5: "Nonce ",
  OFFLINE_Step2_Label_5b:
    "Dit werd weergegeven in Stap 1 op je online computer. ",
  OFFLINE_Step2_Label_6: "Data ",
  OFFLINE_Step2_Label_6b:
    "Dit is optioneel. Data wordt vaak gebruikt als je transacties naar contracten verstuurd. ",
  OFFLINE_Step2_Label_7: "Selecteer en geef je Prive Sleutel / JSON in. ",
  OFFLINE_Step3_Title:
    "Stap 3: Verstuur / Publiceer Transactie (Online Computer) ",
  OFFLINE_Step3_Label_1:
    'Plak de gesigneerde transactie van Stap 2 hier en klik de "Verzend Transactie" knop. ',

  /* Contracts */
  CONTRACT_Title: "Contract Adres ",
  CONTRACT_Title_2: "Selecteer Bestaand Contract ",
  CONTRACT_Json: "ABI / JSON Interface ",
  CONTRACT_Interact_Title: "Lees / Schrijf Contract ",
  CONTRACT_Interact_CTA: "Selecteer een functie ",
  CONTRACT_ByteCode: "Byte Code ",
  CONTRACT_Read: "LEES ",
  CONTRACT_Write: "SCHRIJF ",
  DEP_generate: "Genereer Bytecode ",
  DEP_generated: "Gegenereerde Bytecode ",
  DEP_signtx: "Onderteken Transactie ",
  DEP_interface: "Gegenereerde Interface ",

  /* Node Switcher */
  NODE_Title: "Stel je Custom Node in",
  NODE_Subtitle: "Om met een lokale node te verbinden...",
  NODE_Warning:
    "Je node dient HTTPS te zijn om met MyEtherWallet.com te kunnen verbinden. Je kunt de [MyEtherWallet repo downloaden](https://github.com/kvhnuke/etherwallet/releases/latest) en lokaal uitvoeren en vervolgens met iedere node verbinden. Of, verkrijg een gratis SSL certificaat via [LetsEncrypt](https://letsencrypt.org/)",
  NODE_Name: "Node Naam",
  NODE_Port: "Node Poort",
  NODE_CTA: "Opslaan & Custom Node gebruiken",

  /* Swap / Exchange */
  SWAP_rates: "Actuele Koersen ",
  SWAP_init_1: "Ik wil mijn ",
  SWAP_init_2: " omwisselen voor ", // "I want to swap my X ETH for X BTC"
  SWAP_init_CTA: "Naar de volgende stap ", // or "Continue"
  SWAP_information: "Je informatie ",
  SWAP_send_amt: "Te verzenden bedrag ",
  SWAP_rec_amt: "Te ontvangen bedrag ",
  SWAP_your_rate: "Je wisselkoers ",
  SWAP_rec_add: "Je ontvangst Adres ",
  SWAP_start_CTA: "Start Omwisselen ",
  SWAP_ref_num: "Je referentie nummer ",
  SWAP_time: "Resterende tijd om te verzenden ",
  SWAP_elapsed: "Verstreken tijd sinds verzonden",
  SWAP_progress_1: "Bestelling Gestart ",
  SWAP_progress_2: "Wachten op je ", // Waiting for your BTC...
  SWAP_progress_3: "Ontvangen! ", // ETH Received!
  SWAP_progress_4: "Verzenden van je {{orderResult.output.currency}} ",
  SWAP_progress_5: "Bestelling Voltooid ",
  SWAP_order_CTA: "Verzend alsjeblieft ", // Please send 1 ETH...
  SWAP_unlock:
    "Open je Wallet op deze pagina om ETH of Tokens direct te verzenden. ",

  /* Sign Message */
  MSG_message: "Bericht ",
  MSG_date: "Datum ",
  MSG_signature: "Handtekening ",
  MSG_verify: "Verifieer Bericht ",
  MSG_info1:
    "Voeg de huidige datum toe zodat je handtekening niet opnieuw kan worden gebruikt op een andere datum. ",
  MSG_info2:
    "Voeg je nickname toe en waar je deze gebruikt zodat anderen deze niet kunnen gebruiken. ",
  MSG_info3:
    "Geef een specifieke reden op voor de boodschap, zodat deze niet kan worden hergebruikt voor een ander doel. ",

  /* View Wallet Details */
  VIEWWALLET_Subtitle:
    "Hiermee kun je verschillende versies van je prive sleutels downloaden en je papieren wallet opnieuw afdrukken. Je zou dit kunnen doen om [je account in Geth/Mist te importeren](http://ethereum.stackexchange.com/questions/465/how-to-import-a-plain-private-key-into-geth/). Als je enkel je saldo wilt raadplegen, adviseren we je om gebruik te maken van een blockchain explorer zoals [gastracker.io](https://gastracker.io/) (ETC) / [etherscan.io](https://etherscan.io/) (ETH). ",
  VIEWWALLET_Subtitle_Short:
    "Hiermee kun je verschillende versies van je prive sleutels downloaden en je papieren wallet opnieuw afdrukken. ",
  VIEWWALLET_SuccessMsg: "Gelukt! Hier zijn je wallet details. ",
  VIEWWALLET_ShowPrivKey: "(laat zien)",
  VIEWWALLET_HidePrivKey: "(verberg)",

  /* Chrome Extension */
  CX_error_1:
    'Je hebt nog geen enkele wallets opgeslagen. Klik ["Voeg wallet toe"](/cx-wallet.html#add-wallet) om er een toe te voegen! ',
  CX_quicksend: "VerzendSnel ",

  /* Error Messages */
  ERROR_0: "Geef alsjeblieft een geldig bedrag in. ",
  ERROR_1:
    "Je wachtwoord dient minimaal 9 karakters lang te zijn. Zorg voor een sterk wachtwoord. ",
  ERROR_2: "Sorry! We herkennen dit type Wallet bestand niet. ",
  ERROR_3: "Dit is geen geldig Wallet bestand. ",
  ERROR_4:
    "Deze eenheid bestaat niet, kies alsjeblieft een van de volgende eenheden ",
  ERROR_5: "Ongeldig adres. ",
  ERROR_6: "Ongeldig wachtwoord. ",
  ERROR_7: "Ongeldig bedrag. (Moet een getal zijn. Probeer 0-18.) ", // 7
  ERROR_8:
    "Ongeldige gas limiet. (Moet een getal zijn. Probeer 21000-4000000.) ", // 8
  ERROR_9: "Ongeldige data waarde. (Moet hexadecimaal zijn.) ", // 9
  ERROR_10:
    "Ongeldige gas bedrag. (Moet een getal zijn. Probeer 20 GWEI / 20000000000 WEI.) ",
  ERROR_11: "Ongeldige nonce. (Moet een getal zijn.) ", // 11
  ERROR_12: "Ongeldige gesigneerde transactie. ",
  ERROR_13: "Een wallet met deze nickname bestaat reeds. ",
  ERROR_14: "Wallet niet gevonden. ",
  ERROR_15:
    "Het ziet er niet naar uit dat een proposal met dit ID bestaat of dat er een fout is opgetreden bij het lezen van dit proposal. ",
  ERROR_16:
    "Een wallet met dit adres bestaat reeds. Check alsjeblileft je wallet pagina. ",
  ERROR_17:
    "Ontoereikend saldo. Het account waarvan je probeert te versturen bevat niet voldoende saldo. Je hebt mininaal 0.01 ether in je account nodig om de in de gas kosten te voorzien. Voeg alsjeblieft wat ether toe en probeer het opnieuw. ",
  ERROR_18:
    "Alle gas zou worden verbruikt op deze transactie. Dit betekend dat je al gestemd hebt op dit proposal of dat de debateerperiode is verstreken. ",
  ERROR_19: "Ongeldig symbol ",
  ERROR_20:
    "is geen geldig ERC-20 token. Als andere tokens nog aan het laden zijn, verwijder dan dit token en probeer het opnieuw. ",
  ERROR_21:
    "Kon gas niet inschatten. Er is onvoldoende saldo in het account, of het ontvangende contract adres geeft een fout. Voel je vrij om het gas handmatig in te stellen en door te gaan. De foutmelding bij het verzenden kan informatiever zijn. ",
  ERROR_22: "Geef een geldige node naam in ",
  ERROR_23:
    "Voer een geldige url in, als je van https gebruik maakt moet je url met https beginnen ",
  ERROR_24: "Voer een geldige poort in ",
  ERROR_25: "Voer een geldig chain ID in ",
  ERROR_26: "Voer een geldige ABI in ",
  ERROR_27: "Minimale hoeveelheid is 0.01 ",
  ERROR_28:
    "**Je hebt je Keystore Bestand & wachtwoord of prive sleutel nodig** om toegang tot deze wallet te verkrijgen in de toekomst. Sla het op & maak een externe back-up! Er is geen enkele manier om je wallet te herstellen als je het nu niet opslaat. Lees ook de help pagina (https://www.myetherwallet.com/#help) voor instructies. ",
  ERROR_29: "Voer een valide gebruikersnaam en wachtwoord in ",
  ERROR_30: "Voer een valide ENS naam in ",
  ERROR_31: "Ongeldige geheime zin ",
  ERROR_32:
    "Kon niet met de node verbinden. Ververs de pagina, probeer een andere node (rechterbovenhoek) en/of check je firewall instellingen. Check bij een custom node je configuratie.", // 32
  ERROR_33:
    "De wallet die je hebt geopend matched niet bij het adres van de eigenaar owner's. ", // 33
  ERROR_34:
    'De naam die je probeert de onthullen ("reveal") matched niet met de naam die je hebt ingevoerd. ', // 34
  ERROR_35:
    'Input adres is niet ge-checksummed. <a href="https://myetherwallet.groovehq.com/knowledge_base/topics/not-checksummed-shows-when-i-enter-an-address" target="_blank" rel="noopener"> Meer info</a>', // 35
  ERROR_36: "Voer een geldige TX hash in", // 36
  ERROR_37: "Voer een geldige hex string in (0-9, a-f)", // 37

  SUCCESS_1: "Geldig adres ",
  SUCCESS_2: "Wallet succesvol ontsleuteld ",
  SUCCESS_3:
    "Je TX is naar het netwerk verzonden (ge-broadcast), en is in afwachting om ge-mined en bevestigd te worden. Ten tijden van ICOs, kan het zijn dat het bevestigen ervan 3+ uur duurt. Gebruik de Verify & Check knoppen hieronder on de status te volgen. TX Hash:   ", //'Transactie verzonden. TX Hash ',
  SUCCESS_4: "Je Wallet is succesvol toegevoegd ",
  SUCCESS_5: "Bestand Geselecteerd ",
  SUCCESS_6: "Je bent succesvol verbonden ",
  SUCCESS_7: "Bericht Ondertekening Geverifieerd",
  WARN_Send_Link:
    "Je bent hier gekomen via een link waarbij het adres, bedrag, gas of data velden al ingevuld zijn. Indien gewenst kun je elk veld nog aanpassen voor het verzenden. Ontgrendel je wallet on te beginnen. ",

  /* Geth Error Messages */
  GETH_InvalidSender: "Ongeldige verzender ",
  GETH_Nonce: "Nonce te laag ",
  GETH_Cheap: "Gas prijs te laag voor acceptatie ",
  GETH_Balance: "Ontoereikend saldo ",
  GETH_NonExistentAccount: "Account bestaat niet of account saldo te laag ",
  GETH_InsufficientFunds: "Ontoereikend saldo voor gas * prijs + waarde ",
  GETH_IntrinsicGas: "Intrinsiek gas te laag ",
  GETH_GasLimit: "Overstijgt blok gas limiet ",
  GETH_NegativeValue: "Negative waarde ",

  /* Parity Error Messages */
  PARITY_AlreadyImported:
    "Transactie met dezelfde hash was reeds geimporteerd.",
  PARITY_Old: "Transactie nonce is te laag. Probeer de nonce te verhogen.",
  PARITY_TooCheapToReplace:
    "Transactie vergoeding is te laag. Er staat een andere transactie met dezelfde nonce in de wachtrij. Probeer de transactie vergoeding of de nonce te verhogen.",
  PARITY_LimitReached:
    "Er staan te veel transacties in de wachtrij. Je transactie is afgewezen door deze limiet. Probeer je transactie vergoeding te verhogen.",
  PARITY_InsufficientGasPrice:
    "Transactie vergoeding is te laag. Het voldoet niet aan je node's minimale vergoeding (minimaal: {}, momenteel: {}). Probeer je transactie vergoeding te verhogen.",
  PARITY_InsufficientBalance:
    "Ontoereikend saldo. Het account waarvan je probeert te versturen bevat niet voldoende saldo. Vereist {} en momenteel: {}.",
  PARITY_GasLimitExceeded:
    "Transactie kosten overstijgen de huidige gas limiet. Limiet: {}, momenteel: {}. Probeer de hoeveelheid gas te verminderen.",
  PARITY_InvalidGasLimit: "Hoeveelheid gas is boven de limiet.",

  /* Translation Info */
  translate_version: "0.5 ",
  Translator_Desc: "Bedank onze vertalers ",
  TranslatorName_1:
    "[h3ll0fr13nd](https://www.myetherwallet.com/?gaslimit=21000&to=0xB5FbCE123F12347206c881cae73A3046BA1A90bA&value=1.0#send-transaction) ",
  TranslatorAddr_1: "0xB5FbCE123F12347206c881cae73A3046BA1A90bA ",
  /* Translator 1             : Insert Comments Here */
  TranslatorName_2: "",
  TranslatorAddr_2: "",
  /* Translator 2             : Insert Comments Here */
  TranslatorName_3: "",
  TranslatorAddr_3: "",
  /* Translator 3             : Insert Comments Here */
  TranslatorName_4: "",
  TranslatorAddr_4: "",
  /* Translator 4             : Insert Comments Here */
  TranslatorName_5: "",
  TranslatorAddr_5: "",
  /* Translator 5             : Insert Comments Here */

  /* Help - Nothing after this point has to be translated. If you feel like being extra helpful, go for it. */
  HELP_Warning:
    "Als je een wallet aangemaakt hebt -of repo hebt gedownload- voor **31 december 2015**, verifieer dan alsjebieft je wallets en download een nieuwe versie van de repo. Klik voor details. ",
  HELP_Desc:
    "Zie je dat er iets mist? Of heb je een andere vraag? [Neem contact met ons op](mailto:support@myetherwallet.com), en we zullen niet alleen je vraag beantwoorden, maar ook deze help pagina bijwerken zodat deze nog nuttiger wordt voor toekomstige gebruikers! ",
  HELP_Remind_Title: "Enkele herinneringen ",
  HELP_Remind_Desc_1:
    "**Ethereum, MyEtherWallet.com & MyEtherWallet CX, en enkele onderliggende Javascript libraries waar we gebruik van maken zijn onderheving aan active ontwikkeling.** Hoewel we grondig testen & er inmiddels tienduizenden wallets succesvol zijn aangemaakt door mensen over de hele wereld, blijft er altijd een geringe kans dat iets er onverwachts optreedt waardoor je je ether kunt verliezen. Investeer alsjeblieft niet meer dan dat je bereid bent om te verliezen, en wees voorzichtig. Zou er onverhoopt toch iets gebeuren vinden we dat zeer spijtig, echter **zullen wij nooit verantwoordelijk zijn voor de verloren Ether**. ",
  HELP_Remind_Desc_2:
    'MyEtherWallet.com & MyEtherWallet CX zijn geen "web wallets". Je maakt bij ons geen account aan noch geef je ooit je Ether aan ons in bezit. Alle gegevens verlaten nooit je computer/je browser. We helpen je alleen gemakkelijk toegang te verkrijgen tot de blockchain zodat je er informatie in kunt opslaan en kunt uitlezen. ',
  HELP_Remind_Desc_3:
    "Als je je prive sleutel en wachtwoord niet opslaat, is er geen enkele manier om toegang tot je wallet te verkrijgen of het saldo dat het bevat. Maak back-ups en bewaar deze op meerdere fysieke lokaties en dus niet alleen op je eigen computer! ",

  HELP_0_Title: "0) Ik ben nieuw. Waar begin ik? ",
  HELP_0_Desc_1:
    "MyEtherWallet geeft je de mogelijkheid om nieuwe wallets te genereren zodat je daarin je Ether kunt bewaren in plaat van op een exchange. Dit process vind volledig lokaal plaats, op je eigen computer en niet op onze servers. Daarom **ben je volledig zelf verantwoordelijk voor het veilig opslaan** van je via deze website aangemaakte wallets. ",
  HELP_0_Desc_2: "Creer een nieuwe wallet. ",
  HELP_0_Desc_3: "Maak een wallet back-up. ",
  HELP_0_Desc_4:
    "Verrifieer dat je toegang hebt tot dit nieuwe wallet en dat je alle noodzakelijke informatie correct hebt opgeslagen. ",
  HELP_0_Desc_5: "Verzend Ether naar dit nieuwe wallet. ",

  HELP_1_Title: "1) Hoe creer ik een nieuw wallet? ",
  HELP_1_Desc_1: 'Ga naar de "Genereer Wallet" pagina. ',
  HELP_1_Desc_2:
    'Ga naar de "Wallet Toevoegen" pagina & selecteer "Genereer Nieuw Wallet" ',
  HELP_1_Desc_3:
    "Voer een sterk wachtwoord in. Als je denkt dat je het misschien gaat vergeten, bewaar het dan op een veilige plek. Je zult dit wachtwoord nodig hebben om transacties te versturen. ",
  HELP_1_Desc_4: 'klik "GENENEREER". ',
  HELP_1_Desc_5: "Je wallet is nu gegenereerd. ",

  HELP_2a_Title: "Hoe bewaar/back-up ik mijn wallet? ",
  HELP_2a_Desc_1:
    "Zorg altijd voor een goede back-up van je wallet op meerdere fysiek verschillende lokaties - bijvoorbeeld op een USB drive en/of op een vel papier. ",
  HELP_2a_Desc_2:
    "Bewaar het adres. Je kunt het voor jezelf bewaren of met anderen delen. Op die manier kunnen anderen ether naar je versturen. ",
  HELP_2a_Desc_3:
    "Bewaar versies van je prive sleutel. Deel deze niet met anderen. Je prive sleutel heb je nodig wanneer je toegang tot je ETH wilt om het te versturen! Er zijn drie soorten prive sleutels: ",
  HELP_2a_Desc_4:
    "Plaats je adres, versies van je prive sleutel, en de PDF versie van je papieren wallet in een map. Bewaar deze op je computer en een USB drive. ",
  HELP_2a_Desc_5:
    "Druk je wallet af als je een printer hebt. Zo niet, schrijf dan je prive sleutel en adres op een vel papier. Bewaar dit op een veilige lokatie, ergens anders dan je computer en de USB drive. ",
  HELP_2a_Desc_6:
    "Houd in gedachte dat je moet voorkomen dan je je sleutels en wachtwoord kwijt raakt door een defect of verlies van je harde schijf, USB drive, of vel papier. Denk ook aan het fysieke verlies / schade van een complete ruimte (denk aan brand of overstroming). ",

  HELP_2b_Title:
    "2b) Hoe doe ik veilig / offline / cold storage met MyEtherWallet? ",
  HELP_2b_Desc_1:
    "Ga naar onze github: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest). ",
  HELP_2b_Desc_2: "Klik `etherwallet-vX.X.X.X.zip`. ",
  HELP_2b_Desc_3: "Verplaats de zip naar een offline (airgapped) computer. ",
  HELP_2b_Desc_4: "Unzip het en dubbel-klik `index.html`. ",
  HELP_2b_Desc_5: "Genereer een wallet met een sterk wachtwoord. ",
  HELP_2b_Desc_6:
    "Bewaar het adres. Bewaar versies van de prive sleutel. Bewaar het wachtwoord als je het je niet voor altijd kunt herinneren. ",
  HELP_2b_Desc_7:
    "Bewaar deze papieren / USB drives op verschillende fysiek verschillende lokaties. ",
  HELP_2b_Desc_8:
    'Ga naar de "Bekijk Wallet Info" pagina en voer je prive sleutel / wachtwoord in om zeker te stellen dat ze correct zijn en dat je toegang hebt tot je wallet. Controleer dat het adres wat je opgeschreven hebt gelijk is. ',

  HELP_3_Title:
    "3) Hoe verifieer ik dat ik toegang hebt tot mijn nieuwe wallets? ",
  HELP_3_Desc_1:
    "Zorg **voordat je enige Ether naar je wallet verstuurd** dat je controleerd dat je er toegang toe hebt. ",
  HELP_3_Desc_2: 'Navigeer naar de "Bekijk Wallet Info" pagina. ',
  HELP_3_Desc_3:
    'Navigeer naar de MyEtherWallet.com "Bekijk Wallet Info" pagina. ',
  HELP_3_Desc_4:
    "Selecteer je wallet bestand -of- je prive sleutel en open je wallet. ",
  HELP_3_Desc_5:
    "Als je wallet is versleuteld (encrypted) zal er een automatisch een extra invoerveld verschijnen. Voer je wachtwoord in. ",
  HELP_3_Desc_6: 'Klik op de "Ontsleutel je Wallet" knop. ',
  HELP_3_Desc_7:
    "Informatie over je wallet zal verschijnen. Zoek je account adres, naast een kleurrijk, cirkelvormig icoon. Dit icoon is een visuele voorstelling van je address. Zorg ervoor dat je zeker weet dat dit adres het adres is wat je opgeslagen hebt in je tekst document en op je papieren wallet. ",
  HELP_3_Desc_8:
    "Als je van plan bent om er een grote hoeveelheid ether op na te houden, raden we je aan om eerst een kleine hoeveelheid ether naar je nieuwe wallet te versturen voordat je er een grotere hoeveelheid ether naar stuurt. Stuur bijvoorbeeld 0.001 ether naar je nieuwe wallet, verkrijg vervolgens toegang tot dit wallet, stuur die zelfde 0.001 ether naar een ander adres, en controleer dat alles soepel verloopt. ",

  HELP_4_Title: "4) Hoe stuur ik Ether van het ene wallet naar het ander? ",
  HELP_4_Desc_1:
    "Als je van plan ben om een grote hoeveelheid ether te versturen/ontvangen, raden we je aan om eerst te testen met een klein bedrag om er zeker van te zijn dat alles gaat zoals je verwacht. ",
  HELP_4_Desc_2: 'Navigeer naar de "Verzend Ether en Tokens" pagina. ',
  HELP_4_Desc_3:
    "Selecteer je wallet bestand -of- je prive sleutel en ontgrendel je wallet. ",
  HELP_4_Desc_4:
    "Als je wallet gecodeerd (encrypted) is, zal er automatisch een extra invoer veld verschijnen. Voer je wachtwoord in. ",
  HELP_4_Desc_5: 'Klik op de "Ontsleutel Wallet" knop. ',
  HELP_4_Desc_6:
    'Voer het adres in waar naar je wilt versturen in het "Aan adres:" veld. ',
  HELP_4_Desc_7:
    'Voer het te verzenden bedrag in. Je kunt ook klikken op de "Verzend volledig saldo" link als je het totaal beschikbare saldo wilt overmaken. ',
  HELP_4_Desc_9: 'Klik "Genereer Transactie". ',
  HELP_4_Desc_10:
    "Enkele extra nieuwe invoer velden zullen verschijnen. Dit is jouw browser die de transactie genereert. ",
  HELP_4_Desc_11: 'Klik op de blauwe "Verzend Transactie" knop eronder. ',
  HELP_4_Desc_12:
    'Een pop-up zal verschijnen. Controleer dat het bedrag en het adres waarnaar je gaat verzenden correct zijn. Klik vervolgens op de "Ja, ik weet het zeker! Maak de transactie." knop. ',
  HELP_4_Desc_13:
    "De transactie zal worden verstuurt. Het TX Hash zal worden weergegeven. Je kunt op dit TX Hash klikken om het in de blockchain te bekijken. ",

  HELP_4CX_Title: "4) Hoe verzend ik Ether met MyEtherWallet CX? ",
  HELP_4CX_Desc_1:
    'Ten eerste heb je een wallet nodig. Zodra je die hebt, heb je 2 opties: De "VerzendSnel" functionaliteit vanuit het Chrome Extensie icoon of de "Verzend Ether en Tokens" pagina. ',
  HELP_4CX_Desc_2: "VerzendSnel: ",
  HELP_4CX_Desc_3: "Klik op het Chrome Extensie icoon. ",
  HELP_4CX_Desc_4: 'Klik op de "VerzendSnel" knop. ',
  HELP_4CX_Desc_5: "Selecteer het wallet waar vanuit je wilt verzenden. ",
  HELP_4CX_Desc_6:
    'Voer het adres in waar naar je wilt versturen in het "Aan adres:" veld. ',
  HELP_4CX_Desc_7:
    'Voer het te verzenden bedrag in. Je kunt ook klikken op de "Transfer total available balance" link als je het totaal beschikbare saldo wilt overmaken. ',
  HELP_4CX_Desc_8: 'Klik "Verzend Transactie". ',
  HELP_4CX_Desc_9:
    "Controleer dat het bedrag en het adres waarnaar je gaat verzenden correct zijn. ",
  HELP_4CX_Desc_10: "Voer het wachtwoord van je wallet in. ",
  HELP_4CX_Desc_11: 'Klik "Verzend Transactie." ',
  HELP_4CX_Desc_12: 'Maak gebruik van de "Verzend Ether en Tokens" Pagina ',

  HELP_5_Title: "5) Hoe voer ik MyEtherWallet.com offline/lokaal uit? ",
  HELP_5_Desc_1:
    'Je kunt MyEtherWallet.com uitvoeren op je eigen computer in plaats van op de GitHub servers. Je kunt een wallet volledig offline genereren en transacties versturen met behulp van de "Offline Transactie" pagina. ',
  HELP_5_Desc_7: "MyEtherWallet.com draait nu volledig op jouw computer. ",
  HELP_5_Desc_8:
    "Voor het geval dat je er niet bekend mee bent: je hebt de volledige map nodig om de site lokaal te draaien, niet alleen het `index.html` bestand. Laat alle bestanden in de map met rust en ga ze niet verplaatsen. Als je een back-up wilt bewaren van de MyEtherWallet repo voor de toekomst, raden we je aan om alleen de ZIP te bewaren zodat je zeker weet dat de inhoud intact blijft. ",
  HELP_5_Desc_9:
    "Gezien we MyEtherWallet.com continu updaten, raden we je aan om regelmatig je opgeslagen versie van de repo bij te werken. ",

  HELP_5CX_Title:
    "5) Hoe installeer ik deze extensie vanuit de repo in plaats van de Chrome Store? ",
  HELP_5CX_Desc_2: "Klik `chrome-extension-vX.X.X.X.zip`. ",
  HELP_5CX_Desc_3:
    "Ga naar Google Chrome zoek je instellingen op (in het menu in de rechterbovenhoek). ",
  HELP_5CX_Desc_4: 'Klik "Extensies" aan de linkerkant. ',
  HELP_5CX_Desc_5: 'Vink de "Ontwikkelaarmodus" aan bovenaan op de pagina. ',
  HELP_5CX_Desc_6: 'Klik op de "Uitgepakte extensie laden..." knop. ',
  HELP_5CX_Desc_7:
    'Navigeer naar de nu ge-unzipte map die je eerder hebt gedownload. Klik "selecteer". ',
  HELP_5CX_Desc_8:
    "De extensie zou nu moeten verschijnen in je extensies en in je Chrome Extensie balk. ",

  HELP_7_Title: "7) Hoe verzend ik Tokens & voeg ik alternatieve tokens toe? ",
  HELP_7_Desc_0:
    "[Ethplorer.io](https://ethplorer.io/) is a goede manier om tokens te verkenen en de getallen omtrent het token op te zoeken. ",
  HELP_7_Desc_1: 'Navigeer naar de "Verzend Token" pagina. ',
  HELP_7_Desc_2: "Ontsleutel je wallet. ",
  HELP_7_Desc_3:
    'Voer het adres in waar naar je wilt versturen in het "Aan adres:" veld. ',
  HELP_7_Desc_4: "Voer de te verzenden hoeveelheid in. ",
  HELP_7_Desc_5: "Selecteer welk token je zou willen verzenden ",
  HELP_7_Desc_6: "Als het token niet wordt vermeld: ",
  HELP_7_Desc_7: 'Klik op "Aangepast". ',
  HELP_7_Desc_8:
    'Voer het adres, naam, en decimalen van het token in. Deze worden verschaft door de ontwikkelaars van het token en zijn tevens benodigd wanneer je een "Add a Watch Token" aan Mist toevoegd. ',
  HELP_7_Desc_9: 'Klik op "Opslaan". ',
  HELP_7_Desc_10:
    "Je kunt nu dit token verzenden en tevens zul je het saldo kunnen zien in the zijbalk. ",
  HELP_7_Desc_11: 'Klik "Genereer Transactie". ',
  HELP_7_Desc_12:
    "Enkele extra velden zullen verschijnen. Dit is je browser die de transactie genereert. ",
  HELP_7_Desc_13: 'Klik op de blauwe "Verzend Transactie" knop eronder. ',
  HELP_7_Desc_14:
    'Een pop-up zal verschijnen. Controleer dat het bedrag en het adres waarnaar je gaat verzenden correct zijn. Klik vervolgens op de "Ja, ik weet het zeker! Maak de transactie." knop. ',
  HELP_7_Desc_15:
    "De transactie zal worden verstuurt. Het TX Hash zal worden weergegeven. Je kunt op dit TX Hash klikken om het in de blockchain te bekijken. ",

  HELP_8_Title: "8) Wat gebeurd er als deze website stopt? ",
  HELP_8_Desc_1:
    "MyEtherWallet is geen web wallet. Je hoeft niet in te loggen en er zal nooit iets van je op onze servers worden bewaard. Onze website is enkel een interface om toegang te verkrijgen tot de blockchain. ",
  HELP_8_Desc_2:
    "Als MyEtherWallet.com er mee stopt, zul je een andere manier moeten zien te vinden (zoals geth of Ethereum Wallet / Mist) om te doen wat wij doen. Maar wat je niet zult hoeven te doen is je Ether uit MyEtherWallet halen omdat het niet in MyEtherWallet zit. Je Ether zit in in welk wallet dan ook je op onze site hebt gegenereerd. ",
  HELP_8_Desc_3:
    "Je kunt je  onversleutelde (unencrypted) prive sleutel en je Geth/Mist Formaat (encrypted) bestanden heel gemakkelijk en direct in geth / Ethereum Wallet / Mist importeren. Zie onderstaande vraag #12. ",
  HELP_8_Desc_4:
    "Daarnaast is de kans dat wij MyEtherWallet offline halen is miniem tot onmogelijk. Het kost ons vrijwel niets om de site in stand te houden omdat we geen informatie opslaan. Als we toch het domijn offline halen, is het ook altijd nog publiekelijk beschikbaar op [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Je kunt daar de ZIP downloaden en het lokaal draaien. ",

  HELP_8CX_Title: "8) Wat gebeurd er als MyEtherWallet CX verdwijnt? ",
  HELP_8CX_Desc_1:
    "Ten eerste is alle je data op jouw computer opgeslagen, niet op onze servers. We snappen dat het verwarrend kan zijn, maar als je naar de Chrome Extensie kijkt, kijk je NIET naar dingen die ergens op onze servers staan opgeslagen - alles is bewaard op je eigen computer. ",
  HELP_8CX_Desc_2:
    "Dat gezegd hebbende, is het dan ook **erg belangrijk** dat je een back-up maakt van je wallets die met MyEtherWallet CX zijn gegenereerd. Als er iets met MyEtherWallet CX of jouw computer gebeurd blijft op die manier je wallet bewaard, en heb alle noodzakelijke informatie bij de hand om toegang tot je Ether te verkrijgen. Zie vraag #2a om te leren hoe een back-up van je wallet kunt maken. ",
  HELP_8CX_Desc_3:
    "Als om wat voor reden dan ook MyEtherWallet CX verdwijnt van de Chrome Store, kunt je het altijd nog handmatig laden met de broncode van Github. Zie #5 hierboven. ",

  HELP_9_Title: '9) Is de "Verzend Ether en Tokens" pagina offline? ',
  HELP_9_Desc_1:
    'Nee. De pagina heeft een internet verbinding nodig voor het bepalen van de actuele gas prijs, nonce van je account, en het versturen (broadcasten) van de transactie. Echter, het enige wat verstuurd wordt is je ondertekende transactie. Je prive sleutel blijft veilig bij je. We hebben nu ook een "Offline Transactie" pagina zodat je ervoor kunt zorgen dat je prive sleutels ten alle tijden op een offline/airgapped computer blijven. ',

  HELP_10_Title: "10) Hoe voer ik een offline transactie uit? ",
  HELP_10_Desc_1:
    'Navigeer naar de "Offline Transactie" pagina met je online computer. ',
  HELP_10_Desc_2:
    'Voer het "Van Adres" in. Let hierbij op dat dit het adres is waar VAN je zal gaan versturen; VAN, en niet AAN. Dit genereert de nonce en gas prijs. ',
  HELP_10_Desc_3:
    'Ga vervolgens naar je offline computer. Voor het "AAN ADRES" en het te verzenden "BEDRAG" in. ',
  HELP_10_Desc_4:
    'Voer de "GAS PRIJS" in zoals werd weergegeven op je online computer in stap #1. ',
  HELP_10_Desc_5:
    'Voer de "NONCE" in zoals werd weergegeven op je online computer in stap #1. ',
  HELP_10_Desc_6:
    'De "GAS LIMIET" heeft een standaard waarde van 21000. Dit zal een standaard transactie dekken. Indien je naar een contract verstuurd of als je extra data aan je transactie wilt toevoegen, zil je de gas limiet moeten verhogen. Al het teveel aan gas zal aan je geretourneerd worden. ',
  HELP_10_Desc_7:
    "Als je dat wenst, kun je extra data invoeren. Als je extra data toevoegd, zul je meer dan de standaard 21000 gas limiet moeten instellen. Alle data is in HEX formaat. ",
  HELP_10_Desc_8:
    "Selecteer je wallet bestand -of- je prive sleutel en ontsleutel je wallet. ",
  HELP_10_Desc_9: 'Druk op de "GENEREREER ONDERTEKENDE TRANSACTIE" knop. ',
  HELP_10_Desc_10:
    "Het data veld eronder zal worden ingevuld met je ondertekende transactie. Kopier dit veld en neem het mee terug naar je online computer. ",
  HELP_10_Desc_11:
    "Plak de ondertekende transactie op je online computer in het tekst veld van stap #3 em klik send. Dit zal je transactie publiceren op de blockchain (broadcasten). ",

  HELP_12_Title:
    "12) Hoe importeer ik een MyEtherWallet  wallet in geth / Ethereum Wallet / Mist? ",
  HELP_12_Desc_1:
    "Door gebruik te maken van een Geth/Mist JSON bestand van MyEtherWallet v2+.... ",
  HELP_12_Desc_2: 'Ga naar de "Bekijk Wallet Info" pagina. ',
  HELP_12_Desc_3:
    "Ontsleutel je wallet met je **versleutelde** prive sleutel of JSON bestand. ",
  HELP_12_Desc_4: 'Ga naar de "Mijn Wallets" pagina. ',
  HELP_12_Desc_5:
    'Selecteer het wallet dat je wilt importeren in Mist, klik op het "Bekijken" icoon, voer je wachtwoord in, en verkrijg toegang tot je wallet. ',
  HELP_12_Desc_6:
    'Zoek naar de "Download JSON bestand - Geth/Mist Formaat (encrypted)" sectie. Druk op de "Download" knop eronder. Je hebt nu je keystore bestand. ',
  HELP_12_Desc_7: "Open de Ethereum Wallet applicatie. ",
  HELP_12_Desc_8:
    'In de menu balk, ga naar "Accounts" -> "Backup" -> "Accounts" ',
  HELP_12_Desc_9:
    "Hiermee open je de keystore map. Kopier het bestand wat je zojuist hebt gedownload (`UTC--2016-04-14......../`) naar deze keystore map. ",
  HELP_12_Desc_10:
    'Je account zou nu direct moeten verschijnen onder "Accounts." ',
  HELP_12_Desc_11:
    "Door gebruik te maken van je onversleutelde prive sleutel... ",
  HELP_12_Desc_12:
    'Indien je nog geen onversleutelde (unencrypted) prive sleutel van je wallet hebt, navigeer je naar de "Bekijk Wallet Info" pagina. ',
  HELP_12_Desc_13:
    "Selecteer je wallet bestand -of- voer je prive sleutel in om je wallet te ontsleutelen. ",
  HELP_12_Desc_14: "Kopier je prive sleutel (onversleuteld/unencrypted). ",
  HELP_12_Desc_15: "Als je op een Mac werkt: ",
  HELP_12_Desc_15b: "Als je op een PC werkt: ",
  HELP_12_Desc_16: "Open Tekst Editor en plak deze prive sleutel. ",
  HELP_12_Desc_17:
    'Ga naar de menu balk en klik "Formaat" -> "Maak Platte Tekst". ',
  HELP_12_Desc_18:
    'Sla dit bestand op op je bureaublad als `niets_bijzonders_verwijder_mij.txt`. Controleer dat de opties "UTF-8" en "If no extension is provided use .txt" gekozen zijn in het dialog. ',
  HELP_12_Desc_19:
    "Open terminal en voer het volgende commando uit: `geth account import ~/Desktop/niets_bijzonders_verwijder_mij.txt` ",
  HELP_12_Desc_20:
    "Je zal gevraagd worden om een nieuw wachtwoord. Dit is het wachtwoord wat je zult gebruiken in geth / Ethereum Wallet / Mist elke keer als je een transactie verzend, dus zorg dat je dit niet vergeet. ",
  HELP_12_Desc_21:
    "Verwijder het bestand `niets_bijzonders_verwijder_mij.txt` na een geslaagde import. ",
  HELP_12_Desc_22:
    'De volgende keer dat je de Ethereum Wallet applicatie opent, zal je account worden vermeld onder "Accounts". ',
  HELP_12_Desc_23: "Open Kladblok (Notepad) & plak de prive seutel ",
  HELP_12_Desc_24:
    "Sla het bestand op als `niets_bijzonders_verwijder_mij.txt` in `C:` ",
  HELP_12_Desc_25:
    "Open de command prompt en voer het volgende commando uit: `geth account import C:\\niets_bijzonders_verwijder_mij.txt` ",
  HELP_12_Desc_26:
    "Je zal gevraagd worden om een nieuw wachtwoord. Dit is het wachtwoord wat je zult gebruiken in geth / Ethereum Wallet / Mist elke keer als je een transactie verzend, dus zorg dat je dit niet vergeet. ",
  HELP_12_Desc_27:
    "Verwijder het bestand `niets_bijzonders_verwijder_mij.txt` na een geslaagde import. ",
  HELP_12_Desc_28:
    'De volgende keer dat je de Ethereum Wallet applicatie opent, zal je account worden vermeld onder "Accounts". ',

  HELP_13_Title:
    '13) Wat betekend "Ontoereikend saldo. Het account waarvan je de transactie verstuurd bevat niet voldoende saldo. Vereist XXXXXXXXXXXXXXXXXXX en heeft: XXXXXXXXXXXXXXXX."? ',
  HELP_13_Desc_1:
    "Dit betekend dat je account onvoldoende Ether bevat om de kosten voor het vereiste gas te dekken. Elke transactie (inclusief token en contract transacties) vereisen gas en dit gas wordt betaald in Ether. Het weergegeven nummer is de hoeveelheid die voor de transactie vereist in Wei. Neem dit nummer, deel het door `1000000000000000000`, en trek daarvan de hoeveelheid Ether die je probeerde te verzenden af (als je probeerde Ether te versturen). Dit geeft je de hoeveelheid Ether die je dient te versturen naar het account om de transactie te maken. ",

  HELP_14_Title:
    "14) Sommige sites zorgen voor een willekeurigheid (seed) bij het genereren van de prive sleutel via muis bewegingen. MyEtherWallet.com doet dit niet. Is de wikkeleurigheid (random number generation) van MyEtherWallet wel veilig? ",
  HELP_14_Desc_1:
    'Hoewel het bewegen van de muis een slimme truck is en we begrijpen waarom mensen dit een goed idee vinden, is de werkelijkheid dat "window.crypto" een grotere willekeurigheid (hogere entropie) zeker stelt dan je muisbewegingen. De muisbewegingen zijn niet onveilig, echter wij (en enorm veel andere crypto experimenten) geloven in "window.crypto". Bovendien kan MyEtherWallet.com gebruikt worden op touchscreen apparaten. Hier vind je een [conversatie tussen een boze redditor en Vitalik Buterin over de muisbewegingen v. window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto). ',

  HELP_15_Title:
    "15) Hoe komt het dat het wallet wat ik zojuist heb aangemaakt niet in de blockchain explorer terug te vinden is? (bijvoorbeeld: etherchain, etherscan) ",
  HELP_15_Desc_1:
    "Adresen zullen enkel in een blockchain explorer worden weergegeven zodra er activiteit op een account heeft plaats gevonden. Bijvoorbeeld, zodra je er wat Ether naar toe verzonden hebt. ",

  HELP_16_Title: "16) Hoe check ik het saldo van mijn account? ",
  HELP_16_Desc_1:
    "Je kunt hiervoor een blockchain explorer gebruiken zoals bijvoorbeeld [gastracker.io](https://gastracker.io/) (ETC) / [etherscan.io](https://etherscan.io/) (ETH). Plak daar je adres in de zoekbalk en je adres en transactie geschiedenis zullen worden getoond. Bekijk bijvoobeeld hoe ons [donatie account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8)  eruit ziet op etherscan.io ",

  HELP_17_Title:
    "17) Waarom wordt mijn saldo niet weergegeven nadat ik mijn wallet heb ontsleuteld? ",
  HELP_17_Desc_1:
    "Dit wordt zeer waarschijnlijk veroorzaakt door het feit dat je achter een firwall zit. De API waarvan we gebruik maken om je saldo op te halen en te converteren wordt vaak geblokkeerd door firewalls om wat voor reden dan ook. Het is nog steeds mogelijk om transacties te verzenden, je hebt enkel een andere methode nodig om je saldo the checken, zoals bijvoorbeeld etherscan.io ",

  HELP_18_Title: "18) Waar is mijn Geth wallet bestand? ",

  HELP_19_Title: "19) Waar is mijn Mist wallet bestand? ",
  HELP_19_Desc_1:
    'Mist bestanden zijn normaliter te vinden op de bovenstaande bestandslocaties, maar het volgende is veel makkelijker: open Mist, selecteer "Accounts" in de top balk, selecteer "Backup", en selecteer "Accounts". Hiermee open je de map waar je bestanden worden bewaard. ',

  HELP_20_Title: "20) Waar is mijn pre-sale wallet bestand? ",
  HELP_20_Desc_1:
    'Waar jij het opgeslagen hebt. ;) Het was ook naar je gemailed, dus kijk ook daar. Zoek naar het bestand genaamd "ethereum_wallet_backup.json" en selecteer dit bestand. Dit wallet bestand zal versleuteld (encrypted) zijn met een wachtwoord dat je aangemaakt hebt tijdens de aankoop van de pre-sale. ',

  HELP_21_Title:
    "21) Kan iedereen niet simpelweg willekeurige prive sleutels invoeren, zoekend naar een saldo, en dit naar hun eigen adres versturen? ",
  HELP_21_Desc_1:
    "De korte versie: ja, echter het vinden van een account met saldo gaat je langer duren dan het universum...dus...nee. ",
  HELP_21_Desc_2:
    "De lange ELI5 versie: Ethereum is gebasserd op [Publieke Sleutel Cryptografie](https://en.wikipedia.org/wiki/Public-key_cryptography), en meer specifiek op [Elliptische curve cryptografie](https://eprint.iacr.org/2013/734.pdf) wat op grote schaal gebruikt wordt, niet alleen in Ethereum. De meeste van onze servers zijn beveiligd via ECC. Bitcoin maakt hier ook gebruik van, net als SSH, TLS en vele andere dingen. De specifieke Ethereum sleutels zijn 256-bit sleutels, welke sterker zijn dan 128-bit en 192-bit, terwijl die ook op grote schaal gebruikt worden en no steeds als veilig worden beschouwd door experts. ",
  HELP_21_Desc_3:
    "Hierbij heb je een prive sleutel en een publieke sleutel. Vanuit de prive sleutel kan de publieke sleutel afgeleid worden, maar de publieke sleutel kan niet terug omgezet worden in de prive sleutel. Het feit dat het internet en ’s werelds geheimen gebruik maken van deze cryptografie betekend dat indien er een manier is om van publieke sleutel naar prive sleutel te gaan, dat jouw verloren ether wel het minste van een ieders probleem is. ",
  HELP_21_Desc_4:
    "Nu we dat duidelijk hebben: JA, als iemand anders je prive sleutel heeft kunnen ze inderdaad ether vanuit jouw account versturen. Net zoals dat iemand die je wachtwoord van je email heeft, je email kan lezen en sturen, of met het wachtwoord van je bank rekening geld kunnen overmaken. Je zou de Keystore versie van je prive sleutel kunnen downloaden, dat is je prive sleutel die is versleuteld (encrypted) met een wachtwoord. Dit is alsof je een wachtwoord hebt want je vervolgens nog eens beveiligd met een ander wachtwoord. ",
  HELP_21_Desc_5:
    'En JA, in theorie zou je een serie van 64 hexadecimale karakters kunnen intypen tot je er een hebt die matched. Sterker nog, een slim persoon zou een programma kunnen schrijven om heel snel willekeurige prive sleutels te controleren. Dit wordt ook wel "brute-forcing" van prive sleutels genoemd. Mensen hebben hier lang en goed over nagedacht. Met enkele krachtige servers zouden ze misschien wel zo’n miljoen sleutels per seconde kunnen controleren. Echter, zelfs wanneer er zoveel sleutels per seconde gecontroleed kunnen worden zou de opbrengst ervan niet eens in de buurt komen bij de kosten om de servers te onderhouden - het is waarschijnlijker dat jij, en je achterkleinkinderen, zijn overleden voordat je een match vind. ',
  HELP_21_Desc_6:
    "Als je Bitcoin een beetje kent, [biedt dit een aardig perspectief:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *To illustrate how unlikely this is: suppose every satoshi of every bitcoin ever to be generated was sent to its own unique private keys. The probability that among those keys there could be two that would correspond to the same address is roughly one in 100 quintillion. ",
  HELP_21_Desc_7:
    "[Als je het iets technischer wilt:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *These numbers have nothing to do with the technology of the devices; they are the maximums that thermodynamics will allow. And they strongly imply that brute-force attacks against 256-bit keys will be infeasible until computers are built from something other than matter and occupy something other than space. ",
  HELP_21_Desc_8:
    'Uiteraard gaat bovenstaande er vanuit dat de sleutels worden gegenereerd met een volledige willekeur & met afdoende entropie. De sleutels die hier gegenreerd worden voldoen aan dat criterium, net als Jaxx en Mist/geth. De Ethereum wallets zijn allemaal best goed. Sleutels gegenereerd door "brainwallets" doen dit niet, omdat een het brein van een persoon niet capabel is om een werkelijk willekeurige "seed" te maken. Er zijn een heel aantal kwesties geweest met betrekking tot het gebrek entropie en "seeds" die niet in een volledig willekeurige manier waren gemaakt in Bitcoin-land, maar dat is een ander verhaal en kan wachten tot een andere keer. ',

  HELP_SecCX_Title: "Beveiliging - MyEtherWallet CX ",
  HELP_SecCX_Desc_1: "Waar bewaard deze extentie mijn informatie? ",
  HELP_SecCX_Desc_2:
    "De informatie die je bewaard in deze Chrome Extensie wordt opgeslagen via [chrome.storage](http://chrome.storage/). - dit is dezelfde plek als waar je wachtwoorden staan opgeslagen als je je wachtwoorden bewaard in Chrome. ",
  HELP_SecCX_Desc_3: "Welke informatie wordt bewaard? ",
  HELP_SecCX_Desc_4:
    "Het adres, nickname en prive sleutel worden bewaard in chrome.storage. De prive sleutel is versleuteld (encrypted) met het wachtwoord wat je hebt ingesteld toen je je wallet hebt toegevoegd. De nickname en het wallet adres zijn niet versleuteld. ",
  HELP_SecCX_Desc_5: "Waarom zijn de nickname en adres niet versleuteld? ",
  HELP_SecCX_Desc_6:
    "Als we deze items zouden versleutelen, zou je iedere keer dat je je saldo of nicknames wilt checken je wachtwoord moeten invoeren. Als je je hierover zorgen maakt, raden we je aan om gebruik te maken van MyEtherWallet.com in plaats van deze Chrome Extensie. ",

  HELP_Sec_Title: "Beveiliging ",
  HELP_Sec_Desc_1:
    'Als een van je eerste vragen is: "Waarom zou ik deze mensen moeten vertrouwen?", dan is dat alleen maar goed. Hopelijk zal het volgende je angst verminderen. ',
  HELP_Sec_Desc_2:
    'We zijn up en running sinds augustus 2015. Als je zoekt naar ["myetherwallet" on reddit](https://www.reddit.com/search?q=myetherwallet), zul je tal van mensen vinden die ons met groot succes gebruiken. ',
  HELP_Sec_Desc_3:
    'We gaan je niet je geld afnemen of je prive sleutel(s) stelen. Onze website bevat geen kwaadaardige code. Sterker nog, de "GENEREER WALLET" paginas zijn volledig client-side. Dit betekend dat alle code wordt uitgevoerd op ** jouw computer** en dat het buiten jouw computer niets bewaard of verstuurd. ',
  HELP_Sec_Desc_4:
    "Controleer de URL -- Deze website draait vanaf GitHub en je kunt de bron code hier vinden: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) naar de domein namen: [https://www.myetherwallet.com](https://www.myetherwallet.com). ",
  HELP_Sec_Desc_5:
    "Om wallets te genereren, kun je ook de [source code](https://github.com/kvhnuke/etherwallet/releases/latest) downloaden. Zie #5 hierboven. ",
  HELP_Sec_Desc_6:
    'Doe een test ronde en controleer wat voor netwerk activiteit er plaats vind. De makkelijkste manier om dit te doen is door met de rechtermuisknop op de pagina de klikken en te kiezen voor "inspecteer element". Ga naar het "Netwerk" tab. Genereer een test wallet. Je zult zien dat er geen netwerk activiteit is. Je zou kunnen zien dat er iets gebeurd wat er als volgt uitziet: data:image/gif and data:image/png. Dit zijn de QR codes die worden gegenereerd...op jouw computer...door jouw computer. Er werden geen bytes overgedragen. ',
  HELP_Sec_Desc_8:
    'Als je je niet pettig voelt bij het gebruikt van deze tool, gebruik hem dan vooral niet. We hebben deze tool voor mensen gemaakt als een handige manier om wallets te genereren en transacties te maken zonder dat je in de command prompt hoeft te duiken of een "full node" moet draaien. Nogmaals, voel je vrij om contact met ons op te nemen als je je zorgen maakt en we zullen zo snel mogelijk reageren. Bedankt! ',

  HELP_FAQ_Title: "Meer hulpzame antwoorden op veel voorkomende vragen: ",
  HELP_Contact_Title: "Manieren om in contact te komen:"
};

module.exports = nl;
