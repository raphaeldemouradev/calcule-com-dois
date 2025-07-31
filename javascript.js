var mais = document.getElementById('mais')
mais.addEventListener('click', function soma() {
    var resultado = document.getElementById('resultado')
    var n1 = document.getElementById('numero1')
    var n2 = document.getElementById('numero2')

    var numero1 = Number(n1.value)
    var numero2 = Number(n2.value)

    resultado.innerHTML = `${numero1} + ${numero2} = ${numero1 + numero2}`
})

var menos = document.getElementById('menos')
menos.addEventListener('click', function reducao() {
    var resultado = document.getElementById('resultado')
    var n1 = document.getElementById('numero1')
    var n2 = document.getElementById('numero2')

    var numero1 = Number(n1.value)
    var numero2 = Number(n2.value)

    resultado.innerHTML = `${numero1} - ${numero2} = ${numero1 - numero2}`
})

var vezes = document.getElementById('vezes')
vezes.addEventListener('click', function multiplica() {
    var resultado = document.getElementById('resultado')
    var n1 = document.getElementById('numero1')
    var n2 = document.getElementById('numero2')

    var numero1 = Number(n1.value)
    var numero2 = Number(n2.value)

    resultado.innerHTML = `${numero1} x ${numero2} = ${numero1 * numero2}`
})

var divide = document.getElementById('divide')
divide.addEventListener('click', function divisao() {
    var resultado = document.getElementById('resultado')
    var n1 = document.getElementById('numero1')
    var n2 = document.getElementById('numero2')

    var numero1 = Number(n1.value)
    var numero2 = Number(n2.value)

    resultado.innerHTML = `${numero1} / ${numero2} = ${numero1 * numero2}`
})