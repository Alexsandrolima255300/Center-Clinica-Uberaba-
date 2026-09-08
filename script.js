const menuButton=document.querySelector('.menu');const mobileNav=document.querySelector('.mobile-nav');const topButton=document.querySelector('.back-top');const year=document.querySelector('#year');
if(year) year.textContent=new Date().getFullYear();
menuButton?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});
mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰'}));
window.addEventListener('scroll',()=>{topButton?.classList.toggle('show',window.scrollY>500)});
topButton?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
