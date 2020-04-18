const Telegraf = require('telegraf');
const apikey = require('./apikey');
const bot = new Telegraf('1165239069:AAGT7V29BbHYbvoKOq-gp-D6tCRwniK-1-s');


bot.start((ctx)=>{
  ctx.reply(`Bienvenue a CoqDig! ${ctx.from.first_name} Communauté de developpeurs 🇨🇩`)
});

bot.on((ctx)=>{
  ctx.reply('Quelle est votre compétence?')
});

bot.help((ctx)=>{
  ctx.reply('Merci d\'être dans la communauté')
});

bot.launch();