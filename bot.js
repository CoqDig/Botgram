const BotConfig = require('./botconfig');

BotConfig.start((ctx)=>{
  ctx.reply('Bienvenue au CoqDig')
});

BotConfig.launch();