const { SlashCommandBuilder } = require('discord.js');

export default {
	data: new SlashCommandBuilder()
		.setName('kys')
		.setDescription('Kill Yourself: Si el usuario tiene permisos, el bot se apagará'),
	async execute(interaction: any) {
		await interaction.reply('AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
        process.exit(1);
	},
};