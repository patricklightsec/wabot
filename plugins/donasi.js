let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Gopay • Dana • Subscribe 」
│ • Smartfren [088228825906]
│ • Gopay [088228825906]
│ • Dana [088228825906]
│ • Youtube [https://youtube.com/channel/UCl77jQD3nSFp__z1oRxm-fA]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
