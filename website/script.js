/* ===== NAVBAR SCROLL ===== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  // Active link highlight
  const sections = document.querySelectorAll('section[id]');
  const scrollY  = window.scrollY + 120;
  sections.forEach(sec => {
    const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
    if (!link) return;
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    link.classList.toggle('active', scrollY >= top && scrollY < bottom);
  });
}, { passive: true });

/* ===== MOBILE MENU ===== */
const toggle   = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  toggle.classList.toggle('open');
});
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.classList.remove('open');
  });
});

/* ===== SCROLL REVEAL ===== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('revealed');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left').forEach(el => revealObserver.observe(el));

/* ===== GALLERY FILTERS ===== */
const filterBtns  = document.querySelectorAll('.filter-btn');
const allItems    = Array.from(document.querySelectorAll('.gallery-item'));

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    allItems.forEach(item => {
      const cat = item.dataset.category;
      if (filter === 'all' || cat === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

/* ===== LIGHTBOX ===== */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lightbox-img');
const lbCaption = document.getElementById('lightbox-caption');
const lbClose   = document.getElementById('lightbox-close');
const lbPrev    = document.getElementById('lightbox-prev');
const lbNext    = document.getElementById('lightbox-next');

let currentIndex = 0;

function visibleItems() {
  return allItems.filter(item => !item.classList.contains('hidden'));
}

function openLightbox(index) {
  const items = visibleItems();
  if (!items.length) return;
  currentIndex = ((index % items.length) + items.length) % items.length;
  const item = items[currentIndex];
  const img  = item.querySelector('img');
  const cap  = item.querySelector('.gallery-caption p');
  const tag  = item.querySelector('.cap-region');
  lbImg.src             = img ? img.src : '';
  lbImg.alt             = img ? img.alt : '';
  lbCaption.textContent = (tag ? tag.textContent + ' — ' : '') + (cap ? cap.textContent : '');
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function showNext() { openLightbox(currentIndex + 1); }
function showPrev() { openLightbox(currentIndex - 1); }

allItems.forEach((item) => {
  item.addEventListener('click', () => {
    const items = visibleItems();
    const idx   = items.indexOf(item);
    if (idx !== -1) openLightbox(idx);
  });
});

lbClose.addEventListener('click', closeLightbox);
lbNext.addEventListener('click',  (e) => { e.stopPropagation(); showNext(); });
lbPrev.addEventListener('click',  (e) => { e.stopPropagation(); showPrev(); });
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft')  showPrev();
});

/* ===== SMOOTH HERO PARALLAX ===== */
const heroBgImg = document.querySelector('.hero-bg-img');
window.addEventListener('scroll', () => {
  if (!heroBgImg) return;
  const y = window.scrollY;
  if (y < window.innerHeight) {
    heroBgImg.style.transform = `scale(1) translateY(${y * 0.25}px)`;
  }
}, { passive: true });
