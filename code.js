

var ponteiroHora = document.getElementById('ponteiroHora')
var ponteiroMinuto = document.getElementById('ponteiroMinuto')
var ponteiroSegundo = document.getElementById('ponteiroSegundo')

var data = new Date()
var hora = data.getHours()

if(hora > 12) {
  hora -= 12
}

var minutos = data.getMinutes()
var segundos = data.getSeconds()


var rotacaoSegundo = segundos
var rotacaoMinuto = minutos * 6 + segundos * 0.5
var rotacaoHora = hora * 30 + minutos * 6 + segundos * (1 / 120)
setInterval(() => {
  rotacaoSegundo+= 6
  ponteiroSegundo.style.rotate = `${rotacaoSegundo}deg`
  rotacaoMinuto += 0.1
  ponteiroMinuto.style.rotate = `${rotacaoMinuto}deg`
  rotacaoHora += 0.00833
  ponteiroHora.style.rotate = `${rotacaoHora}deg`
}, 1000)


