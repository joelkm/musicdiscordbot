const { SlashCommandBuilder } = require('discord.js');

export default {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction: any) {
		console.log('====================================');
		console.log(interaction);
		console.log('====================================');
		await interaction.reply('Pong!');
	},
};