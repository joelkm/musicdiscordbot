const { SlashCommandBuilder } = require('discord.js');

export default {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Da información del servidor'),
	async execute(interaction: any) {
		await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
	},
};