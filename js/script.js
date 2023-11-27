document.querySelector('.hamburger').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('profileBtn').addEventListener('click', function () {
    var dropdown = document.getElementById('profileDropdown');
    dropdown.classList.toggle('show');
});

document.addEventListener('click', function (event) {
    var dropdown = document.getElementById('profileDropdown');
    var profileBtn = document.getElementById('profileBtn');

    if (!profileBtn.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});


//mencoba utuk menangkap API

        // Mengambil data dari API
        function getArticles() {
            const url = "https://newsdata.io/api/1/news?country=id&apikey=pub_335767a0176944d927e96151a9c852003ebe0";
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    const articles = JSON.parse(xhr.responseText);
                    for (let i = 0; i < 5; i++) {
                        addArticles(articles[i]);
                    }
                } else {
                    console.error("Error fetching articles: " + xhr.status);
                }
            };
            xhr.send();
        }

        // Menambahkan artikel ke halaman
        function addArticles(articles) {
            if (articles && Array.isArray(articles) && articles.length > 0) {
                const container = document.querySelector(".articles");

                for (let i = 0; i < articles.length; i++) {
                    const article = articles[i];

                    if (article && article.image_url && article.image_url !== "") {
                        const articleElement = document.createElement("article");
                        articleElement.innerHTML = `
                    <img src="${article.image_url}" alt="${article.title}">
                    <h2>${article.title}</h2>
                    <p>${article.category}</p>
                `;
                        container.appendChild(articleElement);
                        console.log(article);
                    }
                }
            } else {
                console.error("No valid articles to display.");
            }
        }



        // Memulai fungsi getArticles()
        getArticles();
