document.getElementById('menu').addEventListener('click', () => {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
});