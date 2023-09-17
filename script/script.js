const menuBtn = document.getElementById("menu-btn");
const mobileNavLinks = document.getElementById("mobile-nav-links");

menuBtn.addEventListener("click", () => {
  if (mobileNavLinks.style.display === "none") {
    mobileNavLinks.style.display = "flex";
  } else {
    mobileNavLinks.style.display = "none";
  }
});
