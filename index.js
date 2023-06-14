const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });

let selectMenuResponse = '';

client.on('ready', () => {
  console.log(`${client.user.username} is ready!`);
});

client.login('MTA1NDQzNjY3NzYxNzIwNTI3MA.GvVZmT.9Mro71C95uBcgVveZ0HeWZxuk1dLnqfjUJwaPk');


const { Client, Intents } = require('discord.js-selfbot-v13');
const acc = new Client({
  checkUpdate: false,
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

acc.on('ready', async () => {
  console.log(`${acc.user.username} is ready!`);
});

acc.login('MTA2ODY0NjYzOTA0NjI1MDUwNg.G4-nRN.I0KiUU-nFI09jCsKBjl13lO_7t0BwTJU_OKeK4');



client.on('channelCreate', (channel) => {
  if (channel.name.startsWith('ticket')) {
    setTimeout(() => {
      const options = [
        { label: 'Nitro・Gift', value: '1', emoji: '<a:emoji_44:1118326110220988476>' },
        { label: 'Nitro・Link', value: '2', emoji: '<a:Nitro:1118369892245176392>' },
        { label: 'Visa', value: '3', emoji: '<:emoji_6:1117280217656999947>' },
        { label: 'Netlix', value: '4', emoji: '<:Netflix:1118325468920287332>' },
        { label: 'Rizer・Gold', value: '5', emoji: '<:PS_RazerG:1118326054604521492>' },
        { label: 'Credit', value: '6', emoji: '<a:pro1:1117144426632978482>' },
        { label: 'Boosts', value: '7', emoji: '<a:boosting:1118326160443580486>' },
      ];

      const selectMenu = new Discord.MessageSelectMenu()
        .setCustomId('ticket_select')
        .setPlaceholder('اضغض هنا لاختيار طلبك')
        .addOptions(options);

      const row = new Discord.MessageActionRow().addComponents(selectMenu);

      channel.send({ content: 'يرجي اختيار طلبك الذي تريده :', components: [row] });
    }, 2000); // Delay in milliseconds (2 seconds)
  }
});

client.on('interactionCreate', (interaction) => {
  if (interaction.isSelectMenu() && interaction.customId === 'ticket_select') {
    const selectedOption = interaction.values[0];

    // Determine the response based on the selected option
    switch (selectedOption) {
      case '1':
        selectMenuResponse = '$rename need・nitro・gift';
        break;
      case '2':
        selectMenuResponse = '$rename need・nitro・link';
        break;
      case '3':
        selectMenuResponse = '$rename need・visa';
        break;
      case '4':
        selectMenuResponse = '$rename need・netflix';
        break;
      case '5':
        selectMenuResponse = '$rename need・rizer・gold';
        break;
      case '6':
        selectMenuResponse = '$rename need・credit';
        break;
      case '7':
        selectMenuResponse = '$rename need・boosts';
        break;
      default:
        selectMenuResponse = 'Invalid option selected.';
        break;
    }

    interaction.reply(`${selectMenuResponse}`).then(() => {
      // Delete the select menu after replying
      interaction.message.delete().catch(console.error);
    });
  }
});

const allowedBotId = `1054436677617205270`;
acc.on('messageCreate', (message) => {
  if (message.author.id === allowedBotId && message.content === `${selectMenuResponse}`) {
    message.delete().then(() => {
      message.channel.send(`${selectMenuResponse}`)
    });
  }
});
