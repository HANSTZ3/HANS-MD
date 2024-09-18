const { zokou } = require("../framework/zokou");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

zokou({ nomCom: "owner", categorie: "General", reaction: "🚘" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

zokou({ nomCom: "dev", categorie: "General", reaction: "🚘" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "/HANSTZ", numero: "255692540143" },
      { nom: "᚛Ibrahim᚜", numero: "255756530143" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "WELCOME TO BMW HELP CENTER! ASK FOR HELP FROM ANY OF THE DEVELOPERS BELOW:\n\n";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

zokou({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("THANK YOU FOR CHOOSING HANS-MD, HERE ARE OUR SUPPORTIVE LINKS\n\n ☉ CHANNEL LINK IS HERE ☉ \n\n❒⁠⁠⁠⁠[https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31] \n\n ☉ GROUP LINK IS HERE ☉\n\n❒⁠⁠⁠⁠[https://chat.whatsapp.com/FA8HSJjO94TFWj7ZGMNaOU] 
  
  \n\Ulimwengu wa Sasa matumizi makubwa ni ya artificial intelligence (robot) now Whatsapp Kuna robot maarufu kama Whatsapp bot.

*BOT FEATURES*
*🤖 Auto View Status*
 👉Hii utaview status ata ukiwa offline tena just now😁

*🤖Always Online*
 👉hii muda wote utaonekana active online ata Kam umezima sim au huna bando😂 

*🤖Virtual Typing/Recording*
 👉Hii ukitaka kuweka ili tu uwavuruge watu kama ni magroup yako utaonekana muda wote una type au una record audio mtu akituma text kumbe kijana wawatu umelala zako huna bando😁

*🤖 Acces to chat GPT and Google*
 👉Hapa Utauliza swali lolote naitajibiwa kwausahihi🌝

*🤖Group Management E.g Setting antilink and bot removes anyone who sends link, tag all, welcome etc🫣*
 👉Hii inasaidia ku handle group kwaurahisi kama ukiwa admin kufuta link zote zinazotumwa ata kama haupo online kutag watu wote kweny group ili waje kwaurahisi unapokuwa na tangazo la muhimu

*🤖Download Songs (Both Audio and Video)*
 👉uta download music audio au video kuoitia Whatsapp yako

🤖 Features ni nyingi hzo ni basic pia Kuna kusev status sio unaumwambia mtu nitumie hii😂, kutengeneza logo,  kuonesha picha au video uliotumiwa view once 😂 
* *And 300+ other features*

Bei ya kawaida : Tsh 4000
BOT SIO FREE OK UKIJA INBOX NJOO NA MONEY OK

Whatsapp 
1::HANSTZ CHAT.   +255756530143
2::TIMNASA CHAT.  +255 784766591

*Clean Online Services*
  await zk.sendMessage(auteurMessage,{text : `THANK YOU FOR CHOOSING HANS-MD,MAKE SURE YOU FOLLOW THESE LINKS. `},{quoted :ms})

})
