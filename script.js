// HamburgerMenu
const buttons = document.querySelectorAll(".hamburger-button");
const mobileNav = document.querySelector(".primary-header__nav");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
      mobileNav.style.display = "block";
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
      mobileNav.style.display = "none";
    }
  });
});
