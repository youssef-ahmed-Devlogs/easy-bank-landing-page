const hamburgerButton = document.getElementById("hamburger-button");
const headerNav = document.getElementById("header-nav");

hamburgerButton.addEventListener("click", function () {
  const isClose = JSON.parse(this.getAttribute("aria-close"));
  const icon = this.querySelector("img");

  this.setAttribute("aria-close", !isClose);

  icon.setAttribute(
    "src",
    icon.getAttribute("src").includes("icon-hamburger")
      ? "./images/icon-close.svg"
      : "./images/icon-hamburger.svg"
  );

  headerNav.style.display = isClose ? "flex" : "none";
});
