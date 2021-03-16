function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')

    let result = document.getElementById('result')

    if (inicio.value.length == 0 || fim.value.length == 0 | passo.value.length == 0) {
        alert("Por Favor, digite os dados corretamente!");
    } else {
        result.innerHTML = `Contando: `
        let start = Number(inicio.value)
        let finish = Number(fim.value)
        let step = Number(passo.value)
        if (start < finish) {
            for (let cont = start; cont <= finish; cont += step) {
                result.innerHTML += `${cont} <strong>-></strong> `
            }
        } else {
            for (let cont = start; cont >= finish; cont -= step) {
                result.innerHTML += `${cont} <strong>-></strong> `
            }
        }
        result.innerHTML += `<strong>FIM!</strong>`
    }
}