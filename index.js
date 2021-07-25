const { Client } = require('discord.js');
const client = new Client();
const keepAlive = require('./server');
const { token } = require('./config/bot.json')


require('./utils/defines')(client);
require('./utils/structure/registery')(client);
require('./utils/handlers/commands')(client);
require('./utils/handlers/events')(client);

client.on('message', async(message) => {
    message.channel.messages.fetch()
require('./utils/handlers/handler')(client, message)
});

client.on('messageUpdate', (o, message) => {
require('./utils/handlers/editHandles')(client, message);
})

client.on("ready", () => {
var word = ["jhelp", " 'for more info"];
let i = 0;
client.user.setActivity(word[0]);
i++;
setInterval(() => {
 if (i >= word.length + 1) {
   i = 0;
 }
client.user.setActivity(word[i]);
i++;
}, 1000 * 15); // 30 = 30s || 1000 * 1 = 1s
});

keepAlive();
client.login(process.env.TOKEN);