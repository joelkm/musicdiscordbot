import dotenv from 'dotenv';
dotenv.config();
import ytdl from 'ytdl-core';

import { Client, GatewayIntentBits, VoiceChannel } from 'discord.js';


/*
    https://github.com/discordjs/voice/tree/main/examples/basic
    https://www.reddit.com/r/Discord_Bots/comments/p2b970/joining_a_voicechannel_in_discordjs_v13/
*/

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
    console.log(`Connected as ${client.user!.tag}`);
})

client.on("message", async (message) => {
    const command = message.content.split(" ");Morko

    // trycatch para mensajes con espacios en blanco y comandos semicorrectos
    if (command[0] == '$pls') {
        switch (command[1]) {
            case 'help':
                await message.channel.send("///LISTA DE COMANDOS///");
                break;
            case 'perrea':
                console.log("ahi ahi");
                await message.channel.send("*perrea guarro e intenso*");
                break;
            case 'play':
                const voiceChannel = message.member.voice.channel;
                if (!voiceChannel) {
                    return message.reply('You must be in a voice channel to use this command.');
                }

                const connection = joinVoiceChannel({
                    channelId: voiceChannel.id,
                    guildId: voiceChannel.guild.id,
                });

                try {
                    await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
                } catch (error) {
                    connection.destroy();
                    throw error;
                }

                const stream = ytdl(command[2], { filter: 'audioonly', quality: 'highestaudio' });
                /*
                const dispatcher = connection.play(stream);
                
                dispatcher.on('finish', () => {
                    voiceChannel.leave();
                });
                */
                break;
            case 'kys':
                await message.channel.send("*se desmaterializa*");
                console.log("Process exited");
                process.exit(1);
                break;
            default:
                await message.channel.send("Invalid command");
                break;
        }
    }
})

client.login(process.env.DISCORD_TOKEN)