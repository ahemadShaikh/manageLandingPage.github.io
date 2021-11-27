
// navbar toggle icon

// targeting open icon
const openIcon = document.querySelector('.open-icon');

// targetting close icon
const closeIcon = document.querySelector('.close-icon');

// targting nav 
const navMenu = document.querySelector('.navbar-mobile');

// tartgeting parent div 
const target = document.querySelector('.toggle-icon');
target.addEventListener('click',()=>{
    openIcon.classList.toggle('hide');
    closeIcon.classList.toggle('hide');
    navMenu.classList.toggle('hide');
})





// testimonial start
let mainTesti = document.getElementById('main-testi');
let control1 = document.getElementById('control-1');
let control2 = document.getElementById('control-2');
let control3 = document.getElementById('control-3');
let control4 = document.getElementById('control-4');

control1.addEventListener('click',()=>{
    mainTesti.style.transform = "translateX(0px)";
    control1.classList.add('small-box');
    control2.classList.remove('small-box');
    control3.classList.remove('small-box');
    control4.classList.remove('small-box');
})
control2.addEventListener('click',()=>{
    mainTesti.style.transform = "translateX(-106%)";
    control2.classList.add('small-box');
    control1.classList.remove('small-box');
    control3.classList.remove('small-box');
    control4.classList.remove('small-box');
    // document.querySelector('.t-testi').classList.add('space')
    // document.querySelector('.s-testi').classList.remove('space')
})
control3.addEventListener('click',()=>{
    mainTesti.style.transform = "translateX(-222%)";
    control3.classList.add('small-box');
    control1.classList.remove('small-box');
    control2.classList.remove('small-box');
    control4.classList.remove('small-box');
    // document.querySelector('.t-testi').classList.toggle('space')
})
control4.addEventListener('click',()=>{
    mainTesti.style.transform = "translateX(-329%)";
    control4.classList.add('small-box');
    control1.classList.remove('small-box');
    control2.classList.remove('small-box');
    control3.classList.remove('small-box');
    // document.querySelector('.fo-testi').classList.toggle('space')
})

// testimoni end

// automated testimonials




