var assets = require("../assets.js");
var Discord = require("Discord.js");
var format = require("./__formatter.js");

module.exports = async function (game, faction) {

  faction = faction.toLowerCase();

  var config = game.config;

  var guild = game.client.guilds.get(config["server-id"]);

  var log = guild.channels.find("name", config["channels"]["log"]);
  var main = guild.channels.find("name", config["channels"]["main"]);

  await log.send(format(game, config["messages"]["log"][faction + "-wins"]));

  if (config["assets"][faction + "-win"] !== undefined) {
    var attachment = new Discord.Attachment(assets[config["assets"][faction + "-win"]], config["assets"][faction + "-win"]);
    await main.send(undefined, attachment);
  };

  await main.send(format(game, config["messages"]["main"][faction + "-wins"]));

};
