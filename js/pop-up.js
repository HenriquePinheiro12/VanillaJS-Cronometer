// this script works for pages with more than one pop up


// element.dataset returns an object with all data- attributes of the element
// to access them, use camelCase

//closest reaches for the current or upper closest element with that specified selector condition

//logic for finding what pop-up to close: adding .pop-up class for every pop-up. The closing button is inside that pop-up
//box. Use closest('.pop-up') in the button to specify the one you want to close 

//Logic: when click on a button add/remove .active class in overlay and pop-up target
// funcs: open-pop-up, close-pop-up
// add those functions on eventListeners

const openPopUpBtn = document.querySelectorAll('[data-open-target]')
console.log(openPopUpBtn)