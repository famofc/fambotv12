//  Base YT : @YASSxOFC 
//  Recode By Kyy famofc
//  90% Fitur By Kyy


require("./module")
require("../settings")
require("./exif")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})