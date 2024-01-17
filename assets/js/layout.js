document.addEventListener("DOMContentLoaded", function() {
    // Haal de header en footer op
    fetch("./components/header.html")
      .then(response => response.text())
      .then(data => document.getElementById("header").innerHTML = data);
  
    fetch("./components/footer.html")
      .then(response => response.text())
      .then(data => document.getElementById("footer").innerHTML = data);
  });
  