// NavBar transparent to solid karne wala

const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent", "bg-opacity-0");
      navbar.classList.add(
        "bg-primary",     
        "bg-opacity-100",
        "pb-4",
        "shadow-md"
      );
    } else {
      navbar.classList.add("bg-transparent", "bg-opacity-0");
      navbar.classList.remove(
        "bg-primary",
        "bg-opacity-100",
        "pb-4",
        "shadow-md"
      );
    }
  });