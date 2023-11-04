const { SlashCommandBuilder } = require('discord.js');

export default {
	data: new SlashCommandBuilder()
		.setName('perrea')
		.setDescription('Si el bot funciona responderá'),
	async execute(interaction: any) {
		await interaction.reply('*perrea guarro e intenso*');
	},
};