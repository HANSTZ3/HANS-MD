"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *hans md V1 * \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *hans Tech*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/347ba7a613b4d025b89a8.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Hi my name is *Hans V1* \n\n '+' I'm a Multi-device Whatsapp bot '
      let d =' developed by *ʜᴀɴs ᴛᴇᴄʜ*'
      let varmess=z+d
      var img='https://telegra.ph/file/5a0a3058b3949a15b3501.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
