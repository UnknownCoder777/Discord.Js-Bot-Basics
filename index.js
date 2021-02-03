const Discord = require('discord.js');

const client = new Discord.Client();

const config = require("./config.json");

const { token, prefix } = require("./config.json");

//Change your status here 

client.on('ready', () => {

    client.user.setActivity(`UNKNOWN CODER'S GITHUB REPO`, { type: "WATCHING" })
        // You can use LISTENING instead of WATCHING.
    console.log(`Logged in as ${client.user.tag}`);
    console.log(client.user.id)
    console.log(`Guild Size -> ${client.guilds.cache.size}`)

});

// reply for a command . message.content is command and message.author.send is reply.... 
// you can add commands under this !! 
client.on('message', message => {
    if (message.content === '!invitelink') {

        message.author.send('YOUR INVITE LINK');
    }
});


client.on('message', message => {
    if (message.content === 'ping') {

        message.author.send('pong');
    }
});

client.login(config.token);

//credits to UnknownCoder777