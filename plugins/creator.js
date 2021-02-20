let handler = function (m) {
  // this.sendContact(m.chat, '6285875158363', 'Nazeda', m)
  this.sendContact(m.chat, '6285875158363', 'Nazeda', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
