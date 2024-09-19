"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "🛠️", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/HANSTZ3/TIMNASA-MD';
  const img = 'https://i.imgur.com/a1TOgcP.jpeg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *HANS_MD .*\n support our channel *by*,  https://chat.whatsapp.com/Ia4V8wnwCIjLYaVI3FVHb4

╭─────────────────────➳
│╭────────────────────➳
││ 🗼 *REPOSITORY:* ${data.html_url}
││ 🌟 *STARS:* ${repoInfo.stars}
││ 🧧 *FORKS:* ${repoInfo.forks}
││ 📅 *RELEASE DATE:* ${releaseDate}
││🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
││ 👨‍💻 *OWNER:* *TIMNASA tech*
││ 💞 *THEME:* *TIMNASA BOY*
││ 🥰 *ENJOY TO USE TIMNASA MD *
│╰────────────────────➳
│╭──────────────────❍ 
││  ╭───────────────➳
││  │ _*Made With hanstz Tech*_
││  ╰───────────────➳
│╰──────────────────❍ 
╰─────────────────────➳ 
 ❍━━━━━━━━━━━━━━━━━━❍`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
