const Telegraf = require('telegraf'); 
const apikey = '1165239069:AAGT7V29BbHYbvoKOq-gp-D6tCRwniK-1-s';

const BotConfig = () => {
  return bot = new Telegraf(apikey);
}

module.exports = BotConfig;
