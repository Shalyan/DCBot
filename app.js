require("dotenv").config();

const discord = require("discord.js");
const client = new discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

// MONGO

//const mongoose = require("mongoose");
//const mg = process.env.DB;

//mongoose
  //.connect(mg, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  //})
  //.then(() => {
    //console.log("Conectado a MongoDB");
    //console.log("--------------------- LOGS DEL BOT ---------------------");
  //})
  //.catch((e) => {
    //console.log(e);
  //});

//MONGO

//-----------------------------CODIGO----------------------------------------

client.commands = new discord.Collection();
client.events = new discord.Collection();

["commandHandler", "eventHandler"].forEach((file) => {
  require(`./handlers/${file}`)(client, discord);
});

//---------------------------------------------------------------------------
//------------------------------TOKEN----------------------------------------
client.login("");
//---------------------------------------------------------------------------
