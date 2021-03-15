
function load() {
    var timeHour = document.getElementById('timeHour')
    var img = document.getElementById('imgDay')
    var date = new Date()
    var hour = date.getHours()
    timeHour.innerHTML = `<strong>Hora atual:</strong> ${hour} Horas`

    if (hour >= 0 && hour <= 12) {
        img.src = 'images/imgmanha.png'

    } else if (hour >= 12 && hour <= 18) {
        img.src = 'images/imgtarde.png'

    } else {
        img.src = 'images/imgnoite.png'
    }
}