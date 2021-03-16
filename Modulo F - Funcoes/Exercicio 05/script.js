let num = document.getElementById("num")
let numList = document.getElementById("table")
let res = document.getElementById("result")
let numArray = []


function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, numArray)) { // ""!"" para pegar return false
        numArray.push(Number(num.value))
        let newOpt = document.createElement('option')
        numList.appendChild(newOpt)
        newOpt.text = `Valor ${num.value} foi adicionado.` // não precisa converter para Number pois está sendo incluido numa lista
        res.innerHTML = ""
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ""
    num.focus() // foco no input
}


function finalizar() {
    if (numArray.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = numArray.length
        let maior = numArray[0]
        let menor = numArray[0]
        let soma = 0

        for (let pos in numArray) {
            soma += numArray[pos]
            if (numArray[pos] > maior)
                maior = numArray[pos]
            if (numArray[pos] < menor)
                menor = numArray[pos]
        }
        let media = soma / total

        res.innerHTML = ``
        res.innerHTML += `<p>Foram adicionados ${total} valores.</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>O menos valor foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}


function apagar() {
    num.value = ""
    numList.innerHTML = ""
    numArray = []
    res.innerHTML = ""
}