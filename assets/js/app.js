/* ============================================================
   KAZI PLATFORM — Shared JavaScript
   ============================================================ */

// ── Mobile sidebar toggle ──
function toggleSidebar() {
  const sb = document.querySelector('.sidebar');
  if (sb) sb.classList.toggle('open');
}

// ── Active nav highlight ──
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-item[data-page]').forEach(el => {
    el.classList.toggle('active', el.dataset.page === page);
  });
}

// ── Kazi Score ring renderer ──
function renderScoreRing(el, score, size = 120, stroke = 10) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const pct = score / 100;
  const color = score >= 80 ? '#10b981' : score >= 60 ? '#f59e0b' : '#7c3aed';
  const label = score >= 80 ? 'Expert' : score >= 60 ? 'Gold' : score >= 40 ? 'Silver' : 'Bronze';
  el.innerHTML = `
    <div class="score-ring-wrap" style="width:${size}px;height:${size}px;">
      <svg class="score-ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="${stroke}"/>
        <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="none"
          stroke="${color}" stroke-width="${stroke}"
          stroke-dasharray="${circ}"
          stroke-dashoffset="${circ * (1-pct)}"
          stroke-linecap="round"/>
      </svg>
      <div class="score-text">
        <div style="font-size:${size/5}px;font-weight:800;color:${color};line-height:1">${score}</div>
        <div style="font-size:${size/10}px;color:var(--text-muted);font-weight:600">${label}</div>
      </div>
    </div>`;
}

// ── Notification badge ──
function setNotifCount(el, count) {
  if (!el) return;
  el.textContent = count > 99 ? '99+' : count;
  el.style.display = count > 0 ? 'flex' : 'none';
}

// ── File upload preview ──
function setupUploadZone(zoneId, inputId, previewId) {
  const zone = document.getElementById(zoneId);
  const input = document.getElementById(inputId);
  if (!zone || !input) return;
  zone.addEventListener('click', () => input.click());
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
  zone.addEventListener('drop', e => {
    e.preventDefault(); zone.classList.remove('dragover');
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0], zoneId, previewId);
  });
  input.addEventListener('change', () => {
    if (input.files[0]) handleFile(input.files[0], zoneId, previewId);
  });
}
function handleFile(file, zoneId, previewId) {
  const zone = document.getElementById(zoneId);
  const preview = previewId ? document.getElementById(previewId) : null;
  const sizeKB = (file.size / 1024).toFixed(0);
  zone.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;">
      <div style="width:40px;height:40px;background:rgba(16,185,129,.15);border-radius:8px;display:flex;align-items:center;justify-content:center;">
        <svg width="20" height="20" fill="none" stroke="#10b981" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
      </div>
      <div>
        <div style="font-size:14px;font-weight:500;color:var(--text)">${file.name}</div>
        <div style="font-size:12px;color:var(--text-muted)">${sizeKB} KB • <span style="color:#10b981">✓ Fichier sélectionné</span></div>
      </div>
    </div>`;
}

// ── Toast notification ──
function showToast(msg, type='success', duration=3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
    document.body.appendChild(container);
  }
  const colors = { success:'#10b981', error:'#ef4444', warning:'#f59e0b', info:'#3b82f6' };
  const toast = document.createElement('div');
  toast.style.cssText = `
    background:var(--surface-2);border:1px solid ${colors[type]}40;border-left:3px solid ${colors[type]};
    color:var(--text);padding:12px 18px;border-radius:10px;font-size:14px;
    box-shadow:var(--shadow-lg);animation:fadeUp .3s ease;max-width:320px;
  `;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), duration);
}

// ── Animate numbers on scroll ──
function animateCounters() {
  const els = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1500;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current).toLocaleString() + suffix;
        if (current >= target) clearInterval(timer);
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

// ── Init on DOM ready ──
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  animateCounters();
});
