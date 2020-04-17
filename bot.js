const Telegraf = require('telegraf');
const bot = new Telegraf('1165239069:AAGT7V29BbHYbvoKOq-gp-D6tCRwniK-1-s');

bot.start((ctx)=>{
  ctx.reply('Bienvenue au CoqDig')
});

bot.launch();