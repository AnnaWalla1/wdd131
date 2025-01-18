let selectElm = document.querySelector('select');
let logo = document.querySelector('img');

selectElm.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElm.value;
    console.log(current);
    if (current =='dark'){
        document.body.className ='dark';
        logo.setAttribute('src', 'byu-logo_white.jpg')
    } else (current == 'light') {
        document.body.classList.remove('dark');
        logo.setAttribute('src', 'byu-logo.webp')
    }
}