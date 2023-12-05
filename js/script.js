document.querySelector(".hamburger").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("myModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

document.getElementById("profileBtn").addEventListener("click", function () {
  var dropdown = document.getElementById("profileDropdown");
  dropdown.classList.toggle("show");
});

document.addEventListener("click", function (event) {
  var dropdown = document.getElementById("profileDropdown");
  var profileBtn = document.getElementById("profileBtn");

  if (!profileBtn.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.remove("show");
  }
});

const baseUrl = "http://localhost:3000";
const apiRoutes = {
  berita: `${baseUrl}/berita`,
};
const loadBerita = () => {
  fetch(apiRoutes.berita)
    .then((res) => res.json())
    .then((res) => {
      res.data.forEach(({judul, foto, kategori}) => {
        document.getElementById("berita-terbaru").innerHTML += `
          <div class="card">
              <img src="${foto}" alt="Card 1">
              <div class="card-body">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </div>
        `
      });

      console.log({ res });
    });
};

loadBerita();
