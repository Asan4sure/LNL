const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'color') {
        const hexColor = interaction.options.getString('hexcolor');
        const title = interaction.options.getString('title');
        const description = interaction.options.getString('description');

        const embed = new MessageEmbed()
            .setColor(hexColor)
            .setTitle(title)
            .setDescription(description);

        await interaction.reply({ embeds: [embed] });
    }
});

client.login('your-bot-token');