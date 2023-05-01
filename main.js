import dotenv from 'dotenv';
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ]
})


client.once("ready", () => {
    console.log(`Connected as ${client.user.tag}`);
})

client.on("messageCreate", async (message) => {
    const command = message.content.split(" ");

    if (command[0] == '$pls') {
        switch (command[1]) {
            case 'help':
                message.channel.send("///LISTA DE COMANDOS///");
            case 'perrea':
                console.log("ahi ahi");
                message.channel.send("*perrea guarro e intenso*");
                break;
            default:
                message.channel.send("Invalid command");
                break;
        }
    }
})

client.login(process.env.DISCORD_TOKEN)