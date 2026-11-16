(function () {
  var button = document.querySelector(".menu-button");
  var nav = document.querySelector("#mobile-nav");
  var year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
  if (!button || !nav) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    var label = button.querySelector(".sr-only");
    if (label) label.textContent = open ? "Close menu" : "Open menu";
    if (open) nav.removeAttribute("hidden");
    else nav.setAttribute("hidden", "");
  }

  button.addEventListener("click", function () {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });
})();
