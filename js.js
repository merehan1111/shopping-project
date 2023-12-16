const header = document.querySelector('[data-header]');
window.addEventListener("scroll",function(){
    header.classList.toggle("active", this.scrollY > 100);
})