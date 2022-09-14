const time = document.querySelector('.navbar_center_down-card')
var slider = document.querySelector('.slider')
var slideValue = document.querySelector('.nav_end_c-rdiv').querySelectorAll('p')[0]
const links = document.querySelectorAll('#link')
const logIn = document.querySelector('.navbar_center_up-a')
const logIn2 = document.querySelector('.nav_end_center_left').querySelector('a')
const logIn3 = document.querySelector('.form_a')
const logContent = document.querySelector('.login__content')
const btnContent = document.querySelector('.btn_content')
var btnsOffLogin = btnContent.querySelectorAll('button')
const burgerOn = document.querySelector('.navbar_button')
const burgerOf = document.querySelector('.burger_off')
const nav = document.querySelector('.navbar_center_up').querySelector('nav')


// for
btnsOffLogin.forEach(function(el,key){
    el.addEventListener('click', logInContentOff)
})

// event
links[0].addEventListener('click', scrollMain)
links[1].addEventListener('click', scrollCourses)
links[2].addEventListener('click', scrollSchedule)
links[3].addEventListener('click', scrollTeachers)
links[4].addEventListener('click', scrollLinker)
links[5].addEventListener('click', scrollContacts)
logIn.addEventListener('click', logInContent)
logIn2.addEventListener('click', logInContent)
logIn3.addEventListener('click', logInContent)
burgerOn.addEventListener('click', navOn)
burgerOf.addEventListener('click', navOff)




slideValue.innerHTML = slider.value + "₽"
slider.oninput = function(){
    slideValue.innerHTML = slider.value + "₽"
}

// function
window.setInterval(function(){
    var timeCards = time.querySelectorAll('ul')
    var date = new Date()
    var day = date.getDate()
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()

    if(day < 10) day = "0" + day;
    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    timeCards[0].innerHTML = day
    timeCards[1].innerHTML = hour
    timeCards[2].innerHTML = min
    timeCards[3].innerHTML = sec
})

function scrollMain(){
    var main = document.querySelector('.navbar_center_down')
    main.scrollIntoView({
        behavior:"smooth"
    })
}
function scrollCourses(){
    var courses = document.querySelector('.grafik')
    courses.scrollIntoView({
        behavior:"smooth"
    })
}
function scrollSchedule(){
    var schedule = document.querySelector('.obucenia')
    schedule.scrollIntoView({
        behavior:"smooth"
    })
}
function scrollTeachers(){
    var teachers = document.querySelector('.avatar')
    teachers.scrollIntoView({
        behavior:"smooth"
    })
}
function scrollLinker(){
    var linker = document.querySelector('.brendi')
    linker.scrollIntoView({
        behavior:"smooth"
    })
}
function scrollContacts(){
    var contacts = document.querySelector('.footer')
    contacts.scrollIntoView({
        behavior:"smooth"
    })
}

function logInContent(){
    logContent.style.top = '20%' 
}
function logInContentOff(){
    logContent.style.top = '-200%'
}

function navOn(){
    nav.style.right = '0%'
}
function navOff(){
    nav.style.right = '-100%'
}

