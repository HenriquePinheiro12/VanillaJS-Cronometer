// this script works for pages with more than one pop up


// element.dataset returns an object with all data- attributes of the element
// to access them, use camelCase

//closest reaches for the current or upper closest element with that specified selector condition

//logic for finding what pop-up to close: adding .pop-up class for every pop-up. The closing button is inside that pop-up
//box. Use closest('.pop-up') in the button to specify the one you want to close 

//Logic: when click on a button add/remove .active class in overlay and pop-up target
// funcs: open-pop-up, close-pop-up
// add those functions on eventListeners

const openPopUpBtn = document.querySelectorAll('[data-open-target]');
const closePopUpBtn = document.querySelectorAll('[data-close-target]');
const overlay = document.querySelector('.overlay');

const openPopUp = (target) => {
    target.classList.add('active')
    overlay.classList.add('active')    
}

const closePopUp = (target) => {
    overlay.classList.remove('active')
    target.classList.remove('active')
}


openPopUpBtn.forEach(btn => {
    // Made a query to find a string returned by an onject property
    // I thought about using:
    // target = btn.dataset.openTarget
    // this would assign a string to the variable. But I want to be the string as the selector to the querySelector argument and find the target element
    btn.addEventListener('click', () =>{
        var target = document.querySelector(btn.dataset.openTarget)
        openPopUp(target)
    })
})

closePopUpBtn.forEach(btn => {
    btn.addEventListener('click', () =>{
        var target = btn.closest('.pop-up');
        closePopUp(target)
    })
})

overlay.addEventListener('click', ()=>{
    target = document.querySelector('.pop-up.active');
    closePopUp(target);
})