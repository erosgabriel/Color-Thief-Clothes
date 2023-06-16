function aviso(){
        alert('Olá, essa parte do site ainda está em desenvolvimento. Em breve estaremos com tudo pronto.')
}

window.addEventListener('scroll', ()=>{
  var menu = document.querySelector('.invernobutton');
  var link = document.querySelector('.link1');
  link.classList.toggle('sticky', window.scrollY < 300);
  menu.classList.toggle('sticky', window.scrollY < 300);
})
window.addEventListener('scroll', ()=>{
  var menu = document.querySelector('.veraobutton');
  var link = document.querySelector('.link2');
  link.classList.toggle('sticky', window.scrollY > 300 && window.scrollY < 1000);
  menu.classList.toggle('sticky', window.scrollY > 300 && window.scrollY < 1000);
})
window.addEventListener('scroll', ()=>{
  var menu = document.querySelector('.outonobutton');
  var link = document.querySelector('.link3');
  link.classList.toggle('sticky', window.scrollY > 1000 && window.scrollY < 1600);
  menu.classList.toggle('sticky', window.scrollY > 1000 && window.scrollY < 1600);
})
window.addEventListener('scroll', ()=>{
  var menu = document.querySelector('.primaverabutton');
  var link = document.querySelector('.link4');
  link.classList.toggle('sticky', window.scrollY > 1600);
  menu.classList.toggle('sticky', window.scrollY > 1600);
})