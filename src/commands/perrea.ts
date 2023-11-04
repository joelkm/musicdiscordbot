const { SlashCommandBuilder } = require('discord.js');

export default {
	data: new SlashCommandBuilder()
		.setName('perrea')
		.setDescription('Si el bot funciona responderá'),
	async execute(interaction: any) {
		console.log('====================================');
		console.log(interaction);
		console.log('====================================');
		await interaction.reply('*perrea guarro e intenso*');
	},
};