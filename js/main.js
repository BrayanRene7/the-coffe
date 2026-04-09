const navToggle = document.querySelector(".nav-toggle");
const navWrapper = document.querySelector(".nav-wrapper");

if (navToggle && navWrapper) {
  navToggle.setAttribute("aria-expanded", "false");

  navToggle.addEventListener("click", () => {
    navWrapper.classList.toggle("active");
    navToggle.setAttribute(
      "aria-expanded",
      navWrapper.classList.contains("active") ? "true" : "false",
    );
  });

  navWrapper.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navWrapper.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navWrapper.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}
