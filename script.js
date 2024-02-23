function menuOpen() {
    var nuvem = document.getElementById('nuvem')
    menuAction.style.display = 'block'
    burguerFechar.style.display = 'block'
    nuvem.setAttribute('class', 'filter')
}

function menuClose() {
    menuAction.style.display = "none"
    burguerFechar.style.display = 'none'
    nuvem.removeAttribute('class')
}