const Telegraf = require('telegraf'); 
const apikey = require('./apikey');

const BotConfig = () => {
  return bot = new Telegraf(apikey);
}

module.exports = BotConfig;
