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

// tingle
var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["custom-class-1", "custom-class-2"],
  onOpen: function () {
    console.log("modal open");
  },
  onClose: function () {
    console.log("modal closed");
  },
  beforeClose: function () {
    // here's goes some logic
    // e.g. save content before closing the modal
    return true; // close the modal
    return false; // nothing happens
  },
});

// set content
modal.setContent("<h1>here's some content</h1>");

// open modal
modal.open();

// close modal
modal.close();
