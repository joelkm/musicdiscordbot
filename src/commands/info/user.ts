const { SlashCommandBuilder } = require('discord.js');

export default {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Da información del usuario'),
	async execute(interaction: any) {
		await interaction.reply(`Comando ejecutado por ${interaction.user.username}, que se unió en ${interaction.member.joinedAt}.`);
	},
};