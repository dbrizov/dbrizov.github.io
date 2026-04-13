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

// Populate GitHub stars for each repo.
function populateRepoStars(starsElementId, repoUrl) {
  const starsElement = document.getElementById(starsElementId);
  if (!starsElement) {
    return;
  }

  const countElement = starsElement.querySelector('.tag-stars-count');
  if (!countElement) {
    return;
  }

  const format = n => n < 1000 ? String(n) : (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';

  fetch(repoUrl)
    .then(r => r.ok ? r.json() : null)
    .then(d => { if (d && typeof d.stargazers_count === 'number') countElement.textContent = format(d.stargazers_count); })
    .catch(() => { });
}

(function () {
  populateRepoStars("naughty-attributes-stars", "https://api.github.com/repos/dbrizov/NaughtyAttributes");
  populateRepoStars("character-controller-stars", "https://api.github.com/repos/dbrizov/Unity-CharacterController");
  populateRepoStars("bezier-curves-stars", "https://api.github.com/repos/dbrizov/Unity-BezierCurves");
  populateRepoStars("water-bouyancy-stars", "https://api.github.com/repos/dbrizov/Unity-WaterBuoyancy");
})();
