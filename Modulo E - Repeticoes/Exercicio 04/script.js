function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')

    if (num.value.length == 0) {
        alert('Por Favor, digite os valores corretamente!')

    } else {
        let n = Number(num.value)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = ` ${n} x ${cont} = ${n * cont}`
            tab.appendChild(item)
            cont++
        }
    }
}