function openNav() {
  const links = document.querySelector('.navLinks');
  links.style.display === 'flex' ? links.style.display = 'none' : links.style.display = 'flex';
}

function closeNav(){
  if(window.innerWidth < 768){
    const links = document.querySelector('.navLinks');
    links.style.display = 'none';
  }
}
window.onresize = () => {
  if(window.innerWidth >= 768){
    const links = document.querySelector('.navLinks');
    links.style.display = 'flex';
  }
}