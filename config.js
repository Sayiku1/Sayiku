module.exports = {
  Admins: ["240900307654148096", "453461986219655169"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "$", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sejjyVwJ5g", //Support Server Link
  Token: process.env.Token || "ODQ5MDIyOTIxMzYzMDMwMDM3.YLVINg.mJ0o32VKUZWR0K9WJYRgC8bFsUE", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "849022921363030037", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "SrSf449XUxPK0OP4D50Biu1VLhWnBx-w", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Sayiku is Epic", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "451832856dc54460ab927b1262c581fc", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "ff7db2b46c574d4195c039c817a8f1c4", //Spotify Client Secret
  },
};
