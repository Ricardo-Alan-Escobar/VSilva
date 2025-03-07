document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  document.getElementById('menu-toggle').addEventListener('click', function () {
    const header = document.getElementById('header');
    header.classList.toggle('open');
  });
});
