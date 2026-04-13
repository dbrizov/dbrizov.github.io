// Highlight the active section in the top nav as the user scrolls.
(function () {
  const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
  const sections = links
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if (sections.length === 0) return;

  const linkFor = id => document.querySelector('.nav-links a[href="#' + id + '"]');
  const nav = document.querySelector('.topnav');

  const update = () => {
    const threshold = (nav ? nav.getBoundingClientRect().height : 0) + 16;
    let activeId = sections[0].id;
    for (const s of sections) {
      if (s.getBoundingClientRect().top - threshold <= 0) {
        activeId = s.id;
      } else {
        break;
      }
    }
    const activeLink = linkFor(activeId);
    if (!activeLink || activeLink.classList.contains('is-active')) return;
    links.forEach(l => l.classList.remove('is-active'));
    activeLink.classList.add('is-active');
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();

// Populate GitHub stars for each repo.
(function () {
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

  populateRepoStars("naughty-attributes-stars", "https://api.github.com/repos/dbrizov/NaughtyAttributes");
  populateRepoStars("character-controller-stars", "https://api.github.com/repos/dbrizov/Unity-CharacterController");
  populateRepoStars("bezier-curves-stars", "https://api.github.com/repos/dbrizov/Unity-BezierCurves");
  populateRepoStars("water-bouyancy-stars", "https://api.github.com/repos/dbrizov/Unity-WaterBuoyancy");
})();
