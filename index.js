import dotenv from 'dotenv';
dotenv.config();

import {Client, GatewayIntentBits} from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ]
})

client.login(process.env.DISCORD_TOKEN)

console.log("DePerrito aktivo klk");

client.on("messageCreate", async (message) => {
    const command = message.content.split(" ");

    for (let index = 0; index < command.length; index++) {
        console.log(command[index]);
    }

    if(command[0]=='$pls') {
        switch (command[1]) {
            case 'help':
                message.channel.send("///LISTA DE COMANDOS///");
            case 'perrea':
                message.channel.send("*perrea guarro e intenso*");
                console.log("funciona");
                break;
            default:
                message.channel.send("Invalid command");
                break;
        }
    }
})