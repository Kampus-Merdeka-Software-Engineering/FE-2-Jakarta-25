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

var beritaTerbaruElement = document.getElementById("berita-terbaru");
if (beritaTerbaruElement) {
  const loadBeritaTerbaru = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/terbaru`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaTerbaruElement.innerHTML += `
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

  loadBeritaTerbaru();
}

var beritaTeknologiHome = document.getElementById("teknologi");
if (beritaTeknologiHome) {
  const loadBeritaTeknologiHome = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/tekno`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaTeknologiHome.innerHTML += `
            <article class="article-card" onclick="redirectToDetail(${id})">
              <div class="article-image">
                <img src="${foto}" alt="Article Image">
              </div>
              <div class="article-content">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </article>
          `;
        });

        console.log({ res });
      });
  };
  loadBeritaTeknologiHome();
}

var beritaEkonomiHome = document.getElementById("ekonomi");
if (beritaEkonomiHome) {
  const loadBeritaEkonomiHome = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/ekonom`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaEkonomiHome.innerHTML += `
            <article class="article-card" onclick="redirectToDetail(${id})">
              <div class="article-image">
                <img src="${foto}" alt="Article Image">
              </div>
              <div class="article-content">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </article>
          `;
        });

        console.log({ res });
      });
  };
  loadBeritaEkonomiHome();
}

var beritaOtomotifHome = document.getElementById("otomotif");
if (beritaOtomotifHome) {
  const loadBeritaOtomotifHome = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/oto`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaOtomotifHome.innerHTML += `
            <article class="article-card" onclick="redirectToDetail(${id})">
              <div class="article-image">
                <img src="${foto}" alt="Article Image">
              </div>
              <div class="article-content">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </article>
          `;
        });

        console.log({ res });
      });
  };
  loadBeritaOtomotifHome();
}

var beritaOlahragaHome = document.getElementById("olahraga");
if (beritaOlahragaHome) {
  const loadBeritaOlahragaHome = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/olah`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaOlahragaHome.innerHTML += `
            <article class="article-card" onclick="redirectToDetail(${id})">
              <div class="article-image">
                <img src="${foto}" alt="Article Image">
              </div>
              <div class="article-content">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </article>
          `;
        });

        console.log({ res });
      });
  };
  loadBeritaOlahragaHome();
}

var beritaPolitikHome = document.getElementById("politik");
if (beritaPolitikHome) {
  const loadBeritaPolitikHome = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/pol`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaPolitikHome.innerHTML += `
            <article class="article-card" onclick="redirectToDetail(${id})">
              <div class="article-image">
                <img src="${foto}" alt="Article Image">
              </div>
              <div class="article-content">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </article>
          `;
        });

        console.log({ res });
      });
  };
  loadBeritaPolitikHome();
}

var beritaGayahidupHome = document.getElementById("gaya-hidup");
if (beritaGayahidupHome) {
  const loadBeritaGayahidupHome = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/gaya`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaGayahidupHome.innerHTML += `
            <article class="article-card" onclick="redirectToDetail(${id})">
              <div class="article-image">
                <img src="${foto}" alt="Article Image">
              </div>
              <div class="article-content">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </article>
          `;
        });

        console.log({ res });
      });
  };
  loadBeritaGayahidupHome();
}

var beritaEdukasiHome = document.getElementById("edukasi");
if (beritaEdukasiHome) {
  const loadBeritaEdukasiHome = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/edu`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaEdukasiHome.innerHTML += `
            <article class="article-card" onclick="redirectToDetail(${id})">
              <div class="article-image">
                <img src="${foto}" alt="Article Image">
              </div>
              <div class="article-content">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </article>
          `;
        });

        console.log({ res });
      });
  };
  loadBeritaEdukasiHome();
}

var beritaHiburanHome = document.getElementById("hiburan");
if (beritaHiburanHome) {
  const loadBeritaHiburanHome = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/hibur`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaHiburanHome.innerHTML += `
            <article class="article-card" onclick="redirectToDetail(${id})">
              <div class="article-image">
                <img src="${foto}" alt="Article Image">
              </div>
              <div class="article-content">
                <h3>${judul}</h3>
                <p>${kategori}</p>
              </div>
            </article>
          `;
        });

        console.log({ res });
      });
  };
  loadBeritaHiburanHome();
}

var beritaTerlamaElement = document.getElementById("berita-terlama");
if (beritaTerlamaElement) {
  const loadBeritaTerlama = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/terlama`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaTerlamaElement.innerHTML += `
              <div class="aside-card" onclick="redirectToDetail(${id})">
                <img src="${foto}" alt="Berita Lama 3">
                <div class="aside-card-body">
                    <h3>${judul}</h3>
                    <p>${kategori}</p>
                </div>
              </div>
          `;
        });

        console.log({ res });
      });
  };

  loadBeritaTerlama();
}

var beritaTerlamaPageElement = document.getElementById("berita-terlama-page");
if (beritaTerlamaPageElement) {
  const loadBeritaTerlamaPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/terlama/page`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaTerlamaPageElement.innerHTML += `
              <div class="aside-card" onclick="redirectToDetail(${id})">
                <img src="${foto}" alt="Berita Lama 3">
                <div class="aside-card-body">
                    <h3>${judul}</h3>
                    <p>${kategori}</p>
                </div>
              </div>
          `;
        });

        console.log({ res });
      });
  };

  loadBeritaTerlamaPage();
}

var beritaTeknologiPage = document.getElementById("berita-teknologi");
if (beritaTeknologiPage) {
  const loadBeritaTeknologiPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/teknologi`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        document
          .getElementById("nav-teknologi")
          .setAttribute("class", "active-nav");
        document.getElementById("modal-teknologi").style.color = "#3498db";

        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaTeknologiPage.innerHTML += `
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
  loadBeritaTeknologiPage();
}

var beritaEkonomiPage = document.getElementById("berita-ekonomi");
if (beritaEkonomiPage) {
  const loadBeritaEkonomiPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/ekonomi`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        document
          .getElementById("nav-ekonomi")
          .setAttribute("class", "active-nav");
        document.getElementById("modal-ekonomi").style.color = "#3498db";

        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaEkonomiPage.innerHTML += `
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
  loadBeritaEkonomiPage();
}

var beritaOtomotifPage = document.getElementById("berita-otomotif");
if (beritaOtomotifPage) {
  const loadBeritaOtomotifPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/otomotif`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        document
          .getElementById("nav-otomotif")
          .setAttribute("class", "active-nav");
        document.getElementById("modal-otomotif").style.color = "#3498db";

        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaOtomotifPage.innerHTML += `
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
  loadBeritaOtomotifPage();
}

var beritaOlahragaPage = document.getElementById("berita-olahraga");
if (beritaOlahragaPage) {
  const loadBeritaOlahragaPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/olahraga`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        document
          .getElementById("nav-olahraga")
          .setAttribute("class", "active-nav");
        document.getElementById("modal-olahraga").style.color = "#3498db";

        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaOlahragaPage.innerHTML += `
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
  loadBeritaOlahragaPage();
}

var beritaPolitikPage = document.getElementById("berita-politik");
if (beritaPolitikPage) {
  const loadBeritaPolitikPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/politik`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        document
          .getElementById("nav-politik")
          .setAttribute("class", "active-nav");
        document.getElementById("modal-politik").style.color = "#3498db";

        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaPolitikPage.innerHTML += `
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
  loadBeritaPolitikPage();
}

var beritaGayahidupPage = document.getElementById("berita-gayahidup");
if (beritaGayahidupPage) {
  const loadBeritaGayahidupPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/gayahidup`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        document
          .getElementById("nav-gayahidup")
          .setAttribute("class", "active-nav");
        document.getElementById("modal-gayahidup").style.color = "#3498db";

        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaGayahidupPage.innerHTML += `
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
  loadBeritaGayahidupPage();
}

var beritaEdukasiPage = document.getElementById("berita-edukasi");
if (beritaEdukasiPage) {
  const loadBeritaEdukasiPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/edukasi`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        document
          .getElementById("nav-edukasi")
          .setAttribute("class", "active-nav");
        document.getElementById("modal-edukasi").style.color = "#3498db";

        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaEdukasiPage.innerHTML += `
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
  loadBeritaEdukasiPage();
}

var beritaHiburanPage = document.getElementById("berita-hiburan");
if (beritaHiburanPage) {
  const loadBeritaHiburanPage = () => {
    const baseUrl = "https://be-2-jakarta-25-production.up.railway.app";
    const apiRoutes = {
      berita: `${baseUrl}/berita/hiburan`,
    };
    fetch(apiRoutes.berita)
      .then((res) => res.json())
      .then((res) => {
        document
          .getElementById("nav-hiburan")
          .setAttribute("class", "active-nav");
        document.getElementById("modal-hiburan").style.color = "#3498db";

        res.data.forEach(({ id, judul, foto, kategori }) => {
          beritaHiburanPage.innerHTML += `
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
  loadBeritaHiburanPage();
}

function redirectToHome() {
  window.location.href = `/FE-2-Jakarta-25/`;
}

function redirectToDetail(id) {
  window.location.href = `/FE-2-Jakarta-25/detail?id=${id}`;
}

const loadBeritaDetail = async () => {
  const query = window.location.search;
  const urlSearchParams = new URLSearchParams(query);

  if (urlSearchParams.get("id") != null) {
    const id = urlSearchParams.get("id");

    const rawResponse = await fetch(
      `https://be-2-jakarta-25-production.up.railway.app/berita/${id}`
    );
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
    document.getElementById("foto").setAttribute("src", response.data.foto);
    document.getElementById("deskripsi").innerText = response.data.deskripsi;
    document.title = response.data.judul;

    if (response.data.kategori == "Teknologi") {
      document
        .getElementById("nav-teknologi")
        .setAttribute("class", "active-nav");
      document.getElementById("modal-teknologi").style.color = "#3498db";
    }

    if (response.data.kategori == "Ekonomi") {
      document
        .getElementById("nav-ekonomi")
        .setAttribute("class", "active-nav");
      document.getElementById("modal-ekonomi").style.color = "#3498db";
    }

    if (response.data.kategori == "Otomotif") {
      document
        .getElementById("nav-otomotif")
        .setAttribute("class", "active-nav");
      document.getElementById("modal-otomotif").style.color = "#3498db";
    }

    if (response.data.kategori == "Politik") {
      document
        .getElementById("nav-politik")
        .setAttribute("class", "active-nav");
      document.getElementById("modal-politik").style.color = "#3498db";
    }

    if (response.data.kategori == "Edukasi") {
      document
        .getElementById("nav-edukasi")
        .setAttribute("class", "active-nav");
      document.getElementById("modal-edukasi").style.color = "#3498db";
    }

    if (response.data.kategori == "Olahraga") {
      document
        .getElementById("nav-olahraga")
        .setAttribute("class", "active-nav");
      document.getElementById("modal-olahraga").style.color = "#3498db";
    }

    if (response.data.kategori == "Gaya Hidup") {
      document
        .getElementById("nav-gayahidup")
        .setAttribute("class", "active-nav");
      document.getElementById("modal-gayahidup").style.color = "#3498db";
    }

    if (response.data.kategori == "Hiburan") {
      document
        .getElementById("nav-hiburan")
        .setAttribute("class", "active-nav");
      document.getElementById("modal-hiburan").style.color = "#3498db";
    }

    console.log({ response });
  }
};
loadBeritaDetail();

function redirectToSearch(inputElement) {
  const keywordValue = inputElement.value.trim();

  window.location.href = `/FE-2-Jakarta-25/cari?judul=${keywordValue}`;
}

const searchBerita = async () => {
    const query = window.location.search;
    const urlSearchParams = new URLSearchParams(query);

    
    if (urlSearchParams.get("judul") != null) {
      const judul = urlSearchParams.get("judul");

    const response = await fetch(
      `https://be-2-jakarta-25-production.up.railway.app/berita/cari/${judul}`
    );

    // Lakukan pemanggilan API pencarian

    const result = await response.json();
    var beritaCariPage = document.getElementById("berita-cari");

    // Mendapatkan elemen dengan ID "hasil-cari"
    var hasilCariElement = document.getElementById("hasil-cari");

    // Mengubah nilai elemen h2
    hasilCariElement.innerHTML = `Hasil Pencarian: "${judul}"`;

    // if(!result.data) {
    //   beritaCariPage.innerHTML = `<p class"kosong">Hasil tidak ditemukan...</p>`
    // }

    if (result.data.length != "0") {
      result.data.forEach(({ id, judul, foto, kategori }) => {
        beritaCariPage.innerHTML += `
        <div class="card" onclick="redirectToDetail(${id})">
        <img src="${foto}" alt="Card 1">
        <div class="card-body">
        <h3>${judul}</h3>
        <p>${kategori}</p>
        </div>
        </div>
        `;
      });
    } else {
      beritaCariPage.innerHTML = `<p class"kosong">Hasil tidak ditemukan...</p>`;
    }

    // Manipulasi DOM atau tampilkan hasil pencarian sesuai kebutuhan Anda
    console.log(result);
  }
};
searchBerita();

// Fungsi untuk menangani event ketika tombol Enter ditekan pada input
const handleEnterKey = (inputElement) => {
  inputElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      redirectToSearch(inputElement);
    }
  });
};

// Fungsi untuk menangani event pada button
const handleButtonClick = (buttonElement, inputElement) => {
  buttonElement.addEventListener("click", () => {
    redirectToSearch(inputElement);
  });
};

// Menggunakan fungsi handleEnterKey untuk berbagai input
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
handleEnterKey(searchInput);
handleButtonClick(searchButton, searchInput);

const cariInput = document.getElementById("cariInput");
const cariButton = document.getElementById("cariButton");
handleEnterKey(cariInput);
handleButtonClick(cariButton, cariInput);

const modalInput = document.getElementById("modalInput");
const modalButton = document.getElementById("modalButton");
handleEnterKey(modalInput);
handleButtonClick(modalButton, modalInput);

const saranForm = document.getElementById("saranForm");
if (saranForm) {
  saranForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default

    // Mengumpulkan data formulir
    const formData = new FormData(saranForm);

    // Kirim data ke API
    fetch("https://be-2-jakarta-25-production.up.railway.app/saran/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle respon dari API
        console.log(data);

        // Tampilkan pemberitahuan dengan menggunakan alert
        alert("Saran berhasil diterima!");

        // Kosongkan nilai input dan textarea
        saranForm.reset();

        // Tambahkan logika atau respons lainnya sesuai kebutuhan
      })
      .catch((error) => {
        // Tangani kesalahan koneksi atau kesalahan lainnya
        console.error("Error:", error);
      });
  });
}

