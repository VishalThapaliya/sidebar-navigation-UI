// Navigation toggle

let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', function() {
    navigation.classList.toggle('active');
});


// Menu list toggle

let list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}

list.forEach((item) => {
    item.addEventListener('click', activeLink);
});