//importand a biblioteca
const Discord = require('discord.js');

var data = new Date;

console.log(data.getHours());

//Guardando a classe na variavel
 const bot = new Discord.Client();

 const fetch = require("node-fetch");


//Gardando a chave de acesso do bot
const token = 'NjYzMjIwMzEyMTI4ODgwNzAw.XhFkvw.7Am9r2QJxwiNFAM6Tx2yGC1oHyY';

const streamOptions = {seek:0, volume:1};

const broadcast = bot.createVoiceBroadcast();

const ytdl = require('ytdl-core');

//Ativando a função que faz o login
bot.login(token);

bot.on('ready', ()=>{
    console.log('Estou pronto para ser utilizado, taca o pau doido!');
})



// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {

    // Send the message to a designated channel on a server:
    var channel = member.guild.channels.find(ch => ch.name === 'Frozen');
    var teste = member.guild.channels.find(ch=> ch.id = '318473593606373377');

    teste.send(`Olá, seja muito bem vindo ao nosso maravilhoso discord, ${member}, me chamo Consagrado!\n
    se você deseja ajudar a me criar fale com o Carlos, ele ira te passar o meu gitHub, aproveite o server!!!`)
    .then(message => console.log(`Sent message: ${message.content}`))
    .catch(console.error);


    // Do nothing if the channel wasn't found on this server
    if (!channel) return 'nao encontrei este canal';
    // Send the message, mentioning the member
    // member.send(`Olá, seja muito bem vindo, ao nosso discord, ${member}`);
  });

  /**************/


  bot.on('guildMemberAvailable', member => {

    // Send the message to a designated channel on a server:
    // var channel = member.guild.channels.find(ch => ch.name === 'Frozen');
    var channel = member.guild.channels.find(ch=> ch.id = '318473593606373377');

    channel.send(`${member} esta disponivel`)
    .then(message => console.log(`Sent message: ${message.content}`))
    .catch(console.error);


    // Do nothing if the channel wasn't found on this server
    if (!channel) return 'nao encontrei este canal';
    // Send the message, mentioning the member
    // member.send(`Olá, seja muito bem vindo, ao nosso discord, ${member}`);
  });


  bot.on('guildMemberRemove', member => {

    // Send the message to a designated channel on a server:
    // var channel = member.guild.channels.find(ch => ch.name === 'Frozen');
    var channel = member.guild.channels.find(ch=> ch.id = '318473593606373377');

    channel.send(`Tá na hora de passar a rapa, tchau ${member}`)
    .then(message => console.log(`Sent message: ${message.content}`))
    .catch(console.error);


    // Do nothing if the channel wasn't found on this server
    if (!channel) return 'nao encontrei este canal';
    // Send the message, mentioning the member
    // member.send(`Olá, seja muito bem vindo, ao nosso discord, ${member}`);
  });



  bot.on('guildMemberSpeaking', member => {
    
    // Send the message to a designated channel on a server:
    // var channel = member.guild.channels.find(ch => ch.name === 'Frozen');
    var channel = member.guild.channels.find(ch=> ch.id = '318473593606373377');
        
        if(member.user.username== 'carlos2'){
            channel.send(`Menos você senhor, seja bem vindo ${member}`)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error);
        }else{
            channel.send(`Para de falar ${member}`)
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error);
        }
 
  




    // Do nothing if the channel wasn't found on this server
    if (!channel) return 'nao encontrei este canal';
    // Send the message, mentioning the member
    // member.send(`Olá, seja muito bem vindo, ao nosso discord, ${member}`);
  });


/*******************/
bot.on('message', msg=>{
    if(msg.author.bot){
        return
    }

   

    let voiceChannelId = msg.guild.channels.find(channel=> channel.id ==='318473593606373378');

    var digitado = msg.content;


    marvel(digitado)

    function marvel(digitado){

        console.log('chamou marvel' + digitado);
        var channel = msg.guild.channels.find(ch=> ch.id = '318473593606373377');
     

       

      

        const conexao = () =>{
            const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${digitado}&ts=436481&apikey=7ef24d4d46dada752f7ff657cc95db65&hash=f603b1a8dc2c91ea0094f701c70017c4&limit=100`;
            var link = fetch(url).then(res =>res.json()).then(res=>mostraDados(res));
       
            console.log(url);
        }
 
   
        
        conexao();
        var mostraDados=(url)=>{
            
            
            let link = (url.data.results);
            channel.send(link[0].description)
           
           
        }

    }



    



       
   
    

    if(msg.content.toLowerCase().startsWith('obrigado filho')){
        let voiceChannelId = msg.guild.channels.find(channel=> channel.id ==='318473593606373378');
        
        msg.channel.send("Dnda, monstro sagrado");

        if(voiceChannelId == null){
            console.log('canal nao encontrado');
        }

    }

    if(msg.content.toLowerCase().startsWith('?help')){
        let voiceChannelId = msg.guild.channels.find(channel=> channel.id ==='318473593606373378');
        
        msg.channel.send("lista de comando que eu sei até o momento:\n?rules\n?mvp do server\n?piorzim do server\n?consagrado\nDigite o nome de um persoangem da marvel eu irei lhe trazer uma breve descrição sobre ele, lembre-se de digitar em inglês");

        if(voiceChannelId == null){
            console.log('canal nao encontrado');
        }

    }

    if(msg.content.toLowerCase().startsWith('?rules')){
        let voiceChannelId = msg.guild.channels.find(channel=> channel.id ==='318473593606373378');
        
        msg.channel.send('O servidor não tem regra, obrigado por perguntar');

        if(voiceChannelId == null){
            console.log('canal nao encontrado');
        }

    }

    if(msg.content.toLowerCase().startsWith('?consagrado')){
        let voiceChannelId = msg.guild.channels.find(channel=> channel.id ==='318473593606373378');
        


        if(voiceChannelId != null){
            console.log('canal  encontrado');

            voiceChannelId.join().then(connection =>{
                const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', { filter : 'audioonly' });
                broadcast.playStream(stream);
                const dispatcher = connection.playBroadcast(broadcast);              

            }).catch(console.error);
        }

    }


    if(msg.content.toLowerCase().startsWith('?piorzim do server')){
        let voiceChannelId = msg.guild.channels.find(channel=> channel.id ==='318473593606373378');
        
        msg.channel.send('Mantendo o cargo a incriveis 2 anos => Gustavo tiro cego Julio');

        if(voiceChannelId == null){
            console.log('canal nao encontrado');
        }

    }

    if(msg.content.toLowerCase().startsWith('?mvp do server')){
        let voiceChannelId = msg.guild.channels.find(channel=> channel.id ==='318473593606373378');
        
        msg.channel.send('Consagrado, The Bot');

        if(voiceChannelId == null){
            console.log('canal nao encontrado');
        }

    }

    if(msg.content.toLowerCase().startsWith('vai se foder')){
        let voiceChannelId = msg.guild.channels.find(channel=> channel.id ==='318473593606373378');
        
        msg.channel.send('vai tu');

        if(voiceChannelId == null){
            console.log('canal nao encontrado');
        }

    }

      
    
})

