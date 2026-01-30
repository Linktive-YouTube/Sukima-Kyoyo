const YOUTUBE_URL = "https://youtu.be/SMx6Et878So";

function setupMagnets(){
  const magnets = [...document.querySelectorAll(".magnet")];
  if(!magnets.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduceMotion) return;

  const state = new Map();
  const strength = 18;
  const damping  = 0.12;
  const rotateFactor = 0.0; // 回転なし（必要なら 0.35）
  const lerp = (a, b, t) => a + (b - a) * t;

  function ensure(el){
    if(!state.has(el)){
      state.set(el, { x:0, y:0, tx:0, ty:0, rect:null, active:false });
    }
    return state.get(el);
  }

  magnets.forEach(el => {
    const s = ensure(el);

    el.addEventListener("pointerenter", () => {
      s.active = true;
      s.rect = el.getBoundingClientRect();
    });

    el.addEventListener("pointermove", (e) => {
      if(!s.active) return;
      if(!s.rect) s.rect = el.getBoundingClientRect();

      const cx = s.rect.left + s.rect.width / 2;
      const cy = s.rect.top  + s.rect.height / 2;

      const dx = (e.clientX - cx) / (s.rect.width  / 2);
      const dy = (e.clientY - cy) / (s.rect.height / 2);

      s.tx = dx * strength;
      s.ty = dy * strength;
    });

    el.addEventListener("pointerleave", () => {
      s.active = false;
      s.tx = 0; s.ty = 0;
      s.rect = null;
    });
  });

  function tick(){
    magnets.forEach(el => {
      const s = ensure(el);
      s.x = lerp(s.x, s.tx, damping);
      s.y = lerp(s.y, s.ty, damping);

      const rotate = s.x * rotateFactor;
      el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) rotate(${rotate}deg)`;
    });
    requestAnimationFrame(tick);
  }
  tick();

  window.addEventListener("resize", () => {
    magnets.forEach(el => ensure(el).rect = null);
  });
}

function setupEntranceAnimation(){
  const items = [...document.querySelectorAll("[data-animate]")];
  if(!items.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduceMotion){
    items.forEach(el => el.classList.add("is-in"));
    return;
  }

  items.forEach((el, i) => {
    window.setTimeout(() => el.classList.add("is-in"), 90 * i);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("youtubeButton");
  if(btn) btn.setAttribute("href", YOUTUBE_URL);

  setupEntranceAnimation();
  setupMagnets();
});
