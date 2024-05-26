// cdn-links.js
const bootstrapCSS =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css";
const bootstrapJS =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("nav-placeholder").innerHTML = data;
    });

    fetch("ad.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("ad-placeholder").innerHTML = data;
    })

  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
