// mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      navMenu.classList.remove('open');
    }
  });
});

// contact form simple client-side validation (demo only)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    formMsg.textContent = "Please fill all fields.";
    formMsg.style.color = "crimson";
    return;
  }

  // simple email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)){
    formMsg.textContent = "Please enter a valid email.";
    formMsg.style.color = "crimson";
    return;
  }

  // demo success (replace with real backend call)
  formMsg.textContent = "Thanks — message sent (demo).";
  formMsg.style.color = "green";
  form.reset();
});

// dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
