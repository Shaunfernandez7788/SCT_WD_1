const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#34495e';
  } else {
    navbar.style.backgroundColor = '#2c3e50';
  }
});
