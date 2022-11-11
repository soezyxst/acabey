let itung = 0
let ini = document.getElementById('drop')
function apa() {
    itung++
    if ((ini.value == 'About') && (itung % 2 == 0)) {
        location.href = 'about.html'
        ini.value = 'About'
    }
    else if ((ini.value == 'Home') && (itung % 2 == 0)) {
        location.href = 'index.html'
    } else if ((ini.value == 'Contact') && (itung % 2 == 0)) {
        location.href = 'contact.html'
    }
}