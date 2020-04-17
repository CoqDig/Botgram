const BotConfig = require('./apikey');

BotConfig.start((ctx)=>{
  ctx.reply('Bienvenue au CoqDig')
});

BotConfig.launch();