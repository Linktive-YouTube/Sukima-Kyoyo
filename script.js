// =========
// Settings
// =========
// ここをあなたのYouTube動画リンクに置き換えてください。
const YOUTUBE_URL = "";

// =========
// Helpers
// =========
function $(sel, root = document) {
  return root.querySelector(sel);
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

// =========
// Reveal on scroll (static animation)
// =========
function setupReveal() {
  const targets = Array.from(document.querySelectorAll(".js-reveal"));

  // Reduce motion support
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) e.target.classList.add("is-visible");
      }
    },
    { root: null, threshold: 0.12 }
  );

  targets.forEach((el) => io.observe(el));
}

// =========
// CTA link wiring
// =========
function setupYouTubeButton() {
  const btn = $("#youtubeButton");
  if (!btn) return;

  if (typeof YOUTUBE_URL === "string" && YOUTUBE_URL.trim().length > 0) {
    btn.href = YOUTUBE_URL.trim();
    btn.removeAttribute("aria-disabled");
  } else {
    // URL未設定でも見た目は保ちつつ、誤クリックは防止
    btn.href = "#";
    btn.setAttribute("aria-disabled", "true");
  }
}

// =========
// Gentle thumbnail float (static animation)
// =========
function setupThumbnailFloat() {
  const img = document.querySelector(".thumbnail");
  if (!img) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let t0 = performance.now();

  function tick(t) {
    const dt = (t - t0) / 1000;
    // ふわっと上下（最大2.5px）＋ごく軽い傾き
    const y = Math.sin(dt * 1.15) * 2.5;
    const r = Math.sin(dt * 0.85) * 0.35;
    img.style.transform = `translateY(${y.toFixed(2)}px) rotate(${r.toFixed(2)}deg)`;
    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

// =========
// Decorative dots in header (static animation)
// =========
function setupHeaderDots() {
  const header = document.querySelector(".header-section");
  if (!header) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  const dots = [];
  const dotCount = 10;

  for (let i = 0; i < dotCount; i++) {
    const d = document.createElement("div");
    d.className = "header-dot";

    const size = 10 + Math.random() * 36;
    d.style.width = `${size}px`;
    d.style.height = `${size}px`;
    d.style.left = `${Math.random() * 100}%`;
    d.style.top = `${Math.random() * 100}%`;

    header.appendChild(d);
    dots.push({
      el: d,
      baseX: parseFloat(d.style.left),
      baseY: parseFloat(d.style.top),
      phase: Math.random() * Math.PI * 2,
      speed: 0.12 + Math.random() * 0.22,
      amp: 0.9 + Math.random() * 1.8
    });
  }

  function animate(t) {
    const s = t / 1000;
    for (const dot of dots) {
      const dx = Math.sin(s * dot.speed + dot.phase) * dot.amp;
      const dy = Math.cos(s * dot.speed + dot.phase) * dot.amp;
      dot.el.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
    }
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

// =========
// Boot
// =========
document.addEventListener("DOMContentLoaded", () => {
  setupReveal();
  setupYouTubeButton();
  setupThumbnailFloat();
  setupHeaderDots();
});
