let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Gopay • Dana 」
│ • Smartfren [088228825906]
│ • Gopay [088228825906]
│ • Dana [088228825906]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
