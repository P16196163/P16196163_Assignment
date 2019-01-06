console.log("hello");

const open = document.getElementById('menu-button-open');
const close = document.getElementById('menu-button-close');
const menu = document.getElementById('nav');
const page = document.getElementById('pageContent');

  function showMenu() {
      menu.style.display = "flex";
      open.style.display = "none";
      close.style.display = "flex";
      page.style.display  = "none";
    }

  function closeMenu() {
    menu.style.display = "none";
    close.style.display = "none";
    open.style.display = "flex";
    page.style.display = "block";
  }


open.addEventListener("click", showMenu);
close.addEventListener("click", closeMenu);

window.onresize = function(x) {
  if (x.target.innerWidth > 1015) {
    location.reload();
  }
}
