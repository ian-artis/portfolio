let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "index.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  localStorage.setItem("theme", mode);
}

document.getElementById("previewBtn").addEventListener("click", function () {
  let url = document.getElementById("urlInput").value;

  // Ensure the URL starts with http:// or https://
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  document.getElementById("sitePreview").src = url;
});
document.getElementById("redirectBtn").addEventListener("click", function () {
  window.open("https://techhavenfrontend.vercel.app/", "_blank");
});
