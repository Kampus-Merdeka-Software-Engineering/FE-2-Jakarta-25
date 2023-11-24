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