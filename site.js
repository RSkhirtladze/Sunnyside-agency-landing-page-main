const burgerMenuElement = document.getElementById("BurgerMenu");
const menu = document.getElementById("Menu");
burgerMenuElement.addEventListener("click", toogleBurgerMenu);

function toogleBurgerMenu() {
  const burgerMenuStyle = getComputedStyle(burgerMenuElement);
  // const menuStyle = getComputedStyle(menu);
  const isShown = burgerMenuElement.classList.contains("isShown");

  if (isShown) {
    burgerMenuElement.style.opacity = "1";
    menu.style.display = "none";
  } else {
    burgerMenuElement.style.opacity = "0.5";
    menu.style.display = "flex";
  }
  burgerMenuElement.classList.toggle("isShown");
}

document.addEventListener("click", function (event) {
  if (
    !burgerMenuElement.contains(event.target) &&
    !menu.contains(event.target)
  ) {
    const burgerMenuStyle = getComputedStyle(burgerMenuElement);
    const isShown = burgerMenuElement.classList.contains("isShown");
    if (isShown) {
      toogleBurgerMenu();
    }
  }
});
