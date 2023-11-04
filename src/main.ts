import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

import ytdl from 'ytdl-core';

import { Client, GatewayIntentBits, Events, Collection, VoiceChannel } from 'discord.js';


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

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
};

client.login(DISCORD_TOKEN)