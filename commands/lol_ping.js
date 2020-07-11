module.exports = {
    name: 'ping', //Commandname
    usage: '<user>', //Gets send, if a user provides too few arguments!
    guildOnly: true, //Should only be usable on the Server!
    args: true, // Has arguments
    description: 'Spam ping a Servermember with the famous "Missing Enemies" ping from League of Legends',
    execute(message, args) {
        //Message
        message.channel.send(`ping! ${message.mentions.users.first()}`, {files: ["./questionmark.png"]}); //Add path or URL to pic here!

    }
}