//  Base YT : @YASSxOFC 
//  Recode By famofc bot v12
//  90% Fitur By famofc

require("./system/module.js")

// >~~~~~~ Setting Bot & Owner  ~~~~~~~< //
global.owner = "923350963366"
global.namabot = "famofc bot v12" 
global.namaowner = " famofc"
global.linkgc = 'https://chat.whatsapp.com/'
global.linksaluran = "https://whatsapp.com/channel/"
global.fotomenu = "https://img1.pixhost.to/images/7296/623098761_imgtmp.jpg"
global.packname = "Vertin"
global.author = "YASSxOFC"


// >~~~~~~~~ Setting Channel ~~~~~~~~~< //
global.idsaluran = "120363390114292114@newsletter"
global.namasaluran = "Vertin [ Whatsapp Channel ]"


global.image = "https://img1.pixhost.to/images/7296/623098761_imgtmp.jpg"

// >~~~~~~~~ Setting Payment ~~~~~~~~~< //
global.dana = "Belum tersedia"
global.ovo = "Belum tersedia"
global.gopay = "Belum tersedia"
global.qris = "https://img1.pixhost.to/images/7296/623098761_imgtmp.jpg"


// >~~~~~~~~ Setting Api Panel ~~~~~~~~< //
global.egg = "15" // Isi id egg
global.nestid = "5" // Isi id nest
global.loc = "1" // Isi id location
global.domain = "https" // isi domain
global.apikey = "ptla" // Isi api ptla
global.capikey = "ptlc" // Isi api ptlc


// >~~~~~~~~ Setting Message ~~~~~~~~~< //
global.msg = {
  wait: "پروسیس ہو رہا ہے۔۔۔",
  owner: "یہ فیچر صرف اونر کے لیے ہے!",
  group: "یہ فیچر گروپ کے اندر کے لیے ہے!",
  admin: "یہ فیچر گروپ ایڈمن کے لیے ہے!",
  botadmin: "یہ فیچر صرف تب کام کرتا ہے جب بوٹ ایڈمن ہو"
}

// >~~~~~~~ Setting Api Domain ~~~~~~~~< //
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "uByz8U9jRoor5FiZekdcNhzlWBpr9mekqVaXgR1w"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "), chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})