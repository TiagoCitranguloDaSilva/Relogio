

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
var rotacaoMinuto = minutos * 6// + segundos * 0.5
var rotacaoHora = hora * 30//+ minutos * 6 + segundos * (1 / 120)
ponteiroSegundo.style.rotate = `${rotacaoSegundo}deg`
ponteiroMinuto.style.rotate = `${rotacaoMinuto}deg`
ponteiroHora.style.rotate = `${rotacaoHora}deg`

setInterval(() => {
  rotacaoSegundo+= 6
  ponteiroSegundo.style.rotate = `${rotacaoSegundo}deg`
  
}, 1000)

setInterval(() => {
  rotacaoMinuto += 6
  ponteiroMinuto.style.rotate = `${rotacaoMinuto}deg`
  
}, 60000);

setInterval(() => {
  rotacaoHora += 30
  ponteiroHora.style.rotate = `${rotacaoHora}deg`
}, 3600000)

console.log(data)


