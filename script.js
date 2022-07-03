const toggleMenu = document.querySelector("#toggleMenu");
const menu = document.querySelector("#menu");
const logo = document.querySelector("#logo");

toggleMenu.addEventListener('click' , function() {
    this.classList.toggle("active");
    menu.classList.toggle("active");
});

window.addEventListener('click' , function(e) {
    if(e.target.id !== 'toggleMenu') {
        toggleMenu.classList.remove("active");
        menu.classList.remove("active");
    }
});

window.addEventListener('scroll' , function() {
   logo.classList.toggle("active" , this.window.scrollY > 0); 
});