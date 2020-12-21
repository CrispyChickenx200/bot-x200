/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */

const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});

}

client.login("NzgzMjk3ODQ3NDk1MzYwNTQz.X8Ys9w.3C3Of-laAmZl0opVbpsm4qSNijc")
