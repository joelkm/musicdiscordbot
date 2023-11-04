const { SlashCommandBuilder } = require('discord.js');

export default {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Reproduce una canción en YT'),
	async execute(interaction: any) {
		// const voiceChannel = message.member.voice.channel;
		// if (!voiceChannel) {
		// 	return message.reply('You must be in a voice channel to use this command.');
		// }

		// const connection = joinVoiceChannel({
		// 	channelId: voiceChannel.id,
		// 	guildId: voiceChannel.guild.id,
		// });

		// try {
		// 	await entersState(connection, VoiceConnectionStatus.Ready, 30e3);
		// } catch (error) {
		// 	connection.destroy();
		// 	throw error;
		// }

		// const stream = ytdl(command[2], { filter: 'audioonly', quality: 'highestaudio' });
		// /*
		// const dispatcher = connection.play(stream);
		
		// dispatcher.on('finish', () => {
		// 	voiceChannel.leave();
		// });
		// */
	},
};