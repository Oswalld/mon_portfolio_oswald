function burgerMenu(){
    const menu = document.querySelector(".menu")
    const ham = document.querySelector(".ham")
    const xIcon = document.querySelector(".xIcon")
    const menuIcon = document.querySelector(".menuIcon")
    
    ham.addEventListener("click", toggleMenu)
    
    function toggleMenu() {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        xIcon.style.display = "none";
        menuIcon.style.display = "block";
        ham.style.background ="white"
      } else {
        menu.classList.add("showMenu");
        xIcon.style.display = "block";
        ham.style.background ="#282828"
        menuIcon.style.display = "none";
      }
    }
    
    var menuLinks = document.querySelectorAll(".menuLink")
    
    menuLinks.forEach(
      function (menuLink) {
        menuLink.addEventListener("click", toggleMenu)
      }
    )
}

window.addEventListener('DOMContentLoaded', (event) => {
    burgerMenu()
})