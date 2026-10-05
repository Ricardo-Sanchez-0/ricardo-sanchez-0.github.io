// Content remains visible when JavaScript or IntersectionObserver is unavailable.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.documentElement.classList.add('motion-ready');
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
}

function filterGallery(type, btn) {
  document.querySelectorAll('.tab-btn').forEach((button) => {
    const selected = button === btn;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  document.querySelectorAll('.gallery-item').forEach((item) => {
    const visible = type === 'all' || item.dataset.type === type;
    item.hidden = !visible;
    item.dataset.hidden = String(!visible);
  });
}
