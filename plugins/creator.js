let handler = function (m) {
  // this.sendContact(m.chat, '6288228825906', 'Naze', m)
  this.sendContact(m.chat, '6288228825906', 'Naze', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
