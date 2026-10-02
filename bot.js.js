const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });

client.on('ready', async () => {
    console.log(`Logado como ${client.user.tag}`);
    
    const channel = await client.channels.fetch(process.env.VOICE_CHANNEL_ID);
    
    await client.voice.joinChannel(channel, {
        selfMute: true,
        selfDeaf: true,
    });
    
    console.log('Entrou na call');
});

client.login(process.env.TOKEN);