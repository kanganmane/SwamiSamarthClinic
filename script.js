 /* Year */
  document.getElementById('yr').textContent = new Date().getFullYear();

  /* Smooth scroll */
  function goTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }

  /* Navbar scroll behaviour */
  const nav      = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['home','stats','about','how','services','quote','testimonials','faq','contact'];

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.classList.add('shadow-md', '!py-3', 'border-divider');
    } else {
      nav.classList.remove('shadow-md', '!py-3', 'border-divider');
    }

    let active = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) active = id;
    });
    navLinks.forEach(l => {
      const isActive = l.dataset.sec === active;
      l.classList.toggle('active', isActive);
    });
  });

  /* Mobile menu */
  const ham     = document.getElementById('ham');
  const mobMenu = document.getElementById('mobile-menu');
  const bars    = ham.querySelectorAll('span');

  function toggleMenu() {
    const open = ham.classList.toggle('open');
    bars[0].style.transform = open ? 'translateY(6.5px)  rotate(45deg)' : '';
    bars[1].style.opacity   = open ? '0' : '1';
    bars[2].style.transform = open ? 'translateY(-6.5px)  rotate(-45deg)' : '';
    mobMenu.classList.toggle('translate-x-full ', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  /* Ripple effect */
  function ripple(e, btn) {
    const r  = btn.getBoundingClientRect();
    const sp = document.createElement('span');
    sp.className = 'absolute rounded-full bg-white/30 w-5 h-5 pointer-events-none animate-ripple';
    sp.style.left = (e.clientX - r.left - 10) + 'px';
    sp.style.top  = (e.clientY - r.top  - 10) + 'px';
    btn.appendChild(sp);
    setTimeout(() => sp.remove(), 700);
  }

  /* FAQ accordion */
  function toggleFaq(btn) {
    const item    = btn.parentElement;
    const wasOpen = item.classList.contains('open');

    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight     = '0';
      i.querySelector('.faq-a').style.paddingBottom  = '0';
      i.querySelector('.faq-arrow').style.background  = '';
      i.querySelector('.faq-arrow').style.borderColor = '';
      i.querySelector('.faq-arrow svg').style.transform = '';
    });

    if (!wasOpen) {
      item.classList.add('open');
      const ans = item.querySelector('.faq-a');
      ans.style.maxHeight     = ans.scrollHeight + 'px';
      ans.style.paddingBottom = '1.25rem';
      item.querySelector('.faq-arrow').style.background  = '#4CAF50';
      item.querySelector('.faq-arrow').style.borderColor = '#4CAF50';
      item.querySelector('.faq-arrow svg').style.transform = 'rotate(180deg)';
    }
  }

  /* Form submit */
  function submitForm(e) {
    e.preventDefault();
    document.getElementById('form-wrap').style.display = 'none';
    const ok = document.getElementById('form-ok');
    ok.classList.remove('hidden');
    ok.classList.add('flex');
  }

  function resetForm() {
    document.getElementById('appt-form').reset();
    document.getElementById('form-wrap').style.display = '';
    const ok = document.getElementById('form-ok');
    ok.classList.add('hidden');
    ok.classList.remove('flex');
  }

  /* Scroll reveal */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.service-card, .faq-item').forEach(el => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });