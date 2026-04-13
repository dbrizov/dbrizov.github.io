// Highlight the active section in the top nav as the user scrolls.
(function () {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(links)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const linkFor = id => document.querySelector('.nav-links a[href="#' + id + '"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const link = linkFor(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

  sections.forEach(s => observer.observe(s));
})();

(function () {
  const el = document.getElementById('na-stars');
  if (!el) return;
  const countEl = el.querySelector('.tag-stars-count');
  if (!countEl) return;

  const format = n => n < 1000 ? String(n) : (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';

  fetch('https://api.github.com/repos/dbrizov/NaughtyAttributes')
    .then(r => r.ok ? r.json() : null)
    .then(d => { if (d && typeof d.stargazers_count === 'number') countEl.textContent = format(d.stargazers_count); })
    .catch(() => {});
})();
