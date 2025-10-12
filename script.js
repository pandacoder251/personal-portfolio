

  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuBar = document.querySelector('.mobile-menu-bar');

  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuBar.classList.toggle('active');
  });

