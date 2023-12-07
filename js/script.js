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

const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
const apiRoutes = {
  berita: `${baseUrl}/berita/terbaru`,
};
var beritaTerbaruElement = document.getElementById("berita-terbaru");
if (beritaTerbaruElement) {
  const loadBerita = () => {
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        var beritaTerbaruElement = document.getElementById("berita-terbaru");
        res.data.forEach(({ id, judul, foto, kategori }) => {
          document.getElementById("berita-terbaru").innerHTML += `
            <div class="card" onclick="redirectToDetail(${id})">
                <img src="${foto}" alt="Card 1">
                <div class="card-body">
                  <h3>${judul}</h3>
                  <p>${kategori}</p>
                </div>
              </div>
          `;
        });

        console.log({ res });
      });
  };

  loadBerita();
}

function redirectToDetail(id) {
  window.location.href = `/FE-2-Jakarta-25/detail?id=${id}`;
}

const loadBeritaDetail = async () => {
  const query = window.location.search;
  const urlSearchParams = new URLSearchParams(query);

  if (urlSearchParams.get("id") != null) {
    const id = urlSearchParams.get("id");

    const rawResponse = await fetch(`https://be-2-jakarta-25-production.up.railway.app/berita/${id}`);
    const response = await rawResponse.json();

    // Mendapatkan elemen dengan id "publish_date"
    const publishDateElement = document.getElementById("publish_date");

    // Mendapatkan timestam dari response.data.publish_date
    const timestamp = response.data.publish_date;

    // Membuat objek Date dari timestam
    const date = new Date(timestamp);

    // Mengonversi waktu ke waktu lokal Indonesia
    const options = {
      timeZone: "Asia/Jakarta",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, // Format 24 jam
    };

    // Menghasilkan string waktu yang diformat
    const formattedDate = date.toLocaleString("id-ID", options);

    document.getElementById("judul").innerText = response.data.judul;
    document.getElementById("penulis").innerText = response.data.penulis;
    // Menetapkan teks elemen dengan waktu yang diformat
    publishDateElement.innerText = formattedDate;
    document.getElementById("foto").setAttribute('src', response.data.foto)
    document.getElementById("deskripsi").innerText = response.data.deskripsi;

    console.log({ response });
  }
};
loadBeritaDetail();
