const menuButton=document.querySelector('.menu');const mobileNav=document.querySelector('.mobile-nav');const topButton=document.querySelector('.back-top');const year=document.querySelector('#year');
if(year)year.textContent=new Date().getFullYear();
menuButton?.addEventListener('click',()=>{const open=mobileNav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰'});
mobileNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileNav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');if(menuButton)menuButton.textContent='☰'}));
window.addEventListener('scroll',()=>{topButton?.classList.toggle('show',window.scrollY>500)});
topButton?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const appointmentModal=document.querySelector('#agendamento');
const patientModal=document.querySelector('#patient-modal');
const openAppointment=()=>{appointmentModal?.classList.add('open');appointmentModal?.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');document.querySelector('#name')?.focus()};
const closeAppointment=()=>{appointmentModal?.classList.remove('open');appointmentModal?.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};
const openPatient=()=>{patientModal?.classList.add('open');patientModal?.setAttribute('aria-hidden','false');document.body.classList.add('modal-open')};
const closePatient=()=>{patientModal?.classList.remove('open');patientModal?.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};

document.querySelectorAll('a[href="#agendamento"]').forEach(link=>link.addEventListener('click',e=>{e.preventDefault();openAppointment()}));
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeAppointment));
document.querySelectorAll('[data-open-patient]').forEach(el=>el.addEventListener('click',openPatient));
document.querySelectorAll('[data-close-patient]').forEach(el=>el.addEventListener('click',closePatient));
document.querySelectorAll('[data-doctor]').forEach(link=>link.addEventListener('click',()=>{const doctor=link.dataset.doctor;const select=document.querySelector('#doctor');if(select){select.value=doctor}openAppointment()}));

document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeAppointment();closePatient()}});

const dateInput=document.querySelector('#date');
if(dateInput){const today=new Date();const local=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split('T')[0];dateInput.min=local}

const appointmentForm=document.querySelector('#appointment-form');
appointmentForm?.addEventListener('submit',e=>{e.preventDefault();const specialty=document.querySelector('#specialty')?.value;const doctor=document.querySelector('#doctor')?.value||'Qualquer profissional';const type=document.querySelector('#type')?.value;const date=document.querySelector('#date')?.value;const name=document.querySelector('#name')?.value.trim();const phone=document.querySelector('#phone')?.value.trim();if(!specialty||!type||!date||!name||!phone)return;const [y,m,d]=date.split('-');const formatted=`${d}/${m}/${y}`;const message=`Olá! Gostaria de solicitar um agendamento na Center Clínica.%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Especialidade:* ${encodeURIComponent(specialty)}%0A*Médico de preferência:* ${encodeURIComponent(doctor)}%0A*Tipo de atendimento:* ${encodeURIComponent(type)}%0A*Data preferencial:* ${formatted}%0A%0AGostaria de confirmar a disponibilidade.`;window.open(`https://wa.me/553433321232?text=${message}`,'_blank','noopener,noreferrer');closeAppointment()});
