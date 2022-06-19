
let navi_toggle = document.getElementById("navi_toggle")
let toggle_button = document.getElementById("toggle_button")
if (navi_toggle.checked) {
   document.body.style = 'overflow-y: hidden'
}
navi_toggle.addEventListener('click', (event) => {
   if(navi_toggle.checked) {
    toggle_button.setAttribute('src', "images/icon-close.svg")
    document.body.style = 'overflow-y: hidden'
   } else{
    toggle_button.setAttribute('src', "images/icon-hamburger.svg")
    document.body.style = 'overflow-y: auto'
   }
   
})


