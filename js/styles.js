function toggleTheme() {
    const body = document.getElementById('mainBody');
    body.classList.toggle('dark-theme');

    const logoImage = document.getElementById('logoImage');
    const isDarkTheme = body.classList.contains('dark-theme');
    logoImage.src = isDarkTheme ? 'img/light-logo.png' : 'img/logo.png' ;
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}


let horizontScroll = document.querySelector('.container');
let leftBtn = document.getElementById('leftBtn'); // Змінено 'leftBth' на 'leftBtn'
let rightBtn = document.getElementById('rightBtn');

rightBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft += 600;
});

leftBtn.addEventListener('click', () => {
    horizontScroll.style.scrollBehavior = "smooth";
    horizontScroll.scrollLeft -= 600;
});



// Додайте JavaScript для закриття вікна при кліку за межами нього
document.addEventListener('click', function (event) {
    var loginForm = document.getElementById('loginForm');
    var loginLink = document.getElementById('loginLink');
    
    if (event.target !== loginForm && event.target !== loginLink) {
        loginForm.style.display = 'none';
    }
});
