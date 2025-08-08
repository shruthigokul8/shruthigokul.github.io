// Theme toggle (light/dark) + persist to localStorage
(function(){
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  // init from localStorage or prefers-color-scheme
  const saved = localStorage.getItem('theme');
  if(saved) document.documentElement.setAttribute('data-theme', saved);
  else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  function updateIcon(){
    const t = document.documentElement.getAttribute('data-theme');
    btn.textContent = t === 'dark' ? '☀️' : '🌙';
  }
  updateIcon();

  btn.addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
})();