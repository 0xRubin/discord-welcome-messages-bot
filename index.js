const {Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});
const Config = require('./config.json')

client.on('ready', () => {
    client.user.setActivity('YOUR TEXT');
    console.log("YOUR TEXT");
});

//Welcome / Leave messages
client.on('guildMemberAdd', (member) => {
    const ChannelID = 'YOUR CHANNEL ID';
    const channel = member.guild.channels.cache.get(ChannelID)
    const embed = new Discord.MessageEmbed()
        .setAuthor("Welcome")
        .setDescription(`${member.user.username} YOUR JOIN MESSAGE`)
        .setThumbnail("PICTURE LINK")
    channel.send({embeds: [embed]});
});

client.on('guildMemberRemove', (member) => {
    const ChannelID = 'YOUR CHANNEL ID';
    const channel = member.guild.channels.cache.get(ChannelID)
    const embed = new Discord.MessageEmbed()
        .setAuthor("Bye")
        .setDescription(`${member.user.username} YOUR LEAVE MESSAGE`)
        .setThumbnail("PICTURE LINK")
    channel.send({embeds: [embed]})
});

client.login(Config.token);