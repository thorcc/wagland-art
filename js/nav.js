function openNav() {
  const links = document.querySelector('.navLinks');
  links.style.display === 'flex' ? links.style.display = 'none' : links.style.display = 'flex';
}

function closeNav(){
  const links = document.querySelector('.navLinks');
  links.style.display = 'none';
}