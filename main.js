// ===== THEME =====
function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeBtn').textContent = isDark ? '🌙' : '☀️';
}

// ===== LANG =====
function toggleLang() {
  const html = document.documentElement;
  const isEs = html.getAttribute('data-lang') === 'es';
  const newLang = isEs ? 'en' : 'es';
  html.setAttribute('data-lang', newLang);
  document.getElementById('langBtn').textContent = isEs ? 'ES' : 'EN';

  // Update all elements with data-es / data-en attributes
  document.querySelectorAll('[data-es]').forEach(el => {
    const txt = el.getAttribute('data-' + newLang);
    if (!txt) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = txt;
    } else {
      el.innerHTML = txt;
    }
  });

  // Update placeholders that use data-ph-es / data-ph-en
  document.querySelectorAll('[data-ph-es]').forEach(el => {
    const txt = el.getAttribute('data-ph-' + newLang);
    if (txt) el.placeholder = txt;
  });
}
