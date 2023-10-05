document
.getElementById('changeTheme')
.addEventListener('click', changeBodyColor)

function changeBodyColor(){
    let body = document.getElementsByTagName('body')
    // console.log(body[0])
    body[0].style.backgroundColor ='#413a3a'
    let changecolor = document.getElementById('changeclrcontainer')
    changecolor.style.backgroundColor = 'rgb(94, 94, 94)'
    changecolor.style.color = '#fff'
    let aboutus = document.getElementById('aboutus')
    aboutus.style.color = '#fff'
    let btn = document.getElementById('changeTheme')
    btn.style.backgroundColor = '#fff'
    btn.style.color = 'black'
    btn.style.fontWeight = 'bold'
    let home = document.getElementById('home')
    home.style.color = '#fff'
    let about = document.getElementById('about')
    about.style.color = '#fff'
    let service = document.getElementById('service')
    service.style.color = '#fff'
    let contact = document.getElementById('contact')
    contact.style.color = '#fff'
}
