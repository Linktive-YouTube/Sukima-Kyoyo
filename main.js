// --- Constants & Data ---
const THEMES = [
  {
    id: 'custom-requested',
    name: 'Custom Design',
    description: 'Bold, italic, and colorful with black accents.',
    colors: {
      bg: 'bg-white',
      text: 'text-brand-dark',
      primary: 'bg-brand-teal-dark',
      secondary: 'bg-brand-blue-light',
      accent: 'text-brand-teal-dark',
      panel: 'bg-white/90 backdrop-blur',
      border: 'border-brand-green-light',
    },
    typography: { heading: 'font-bold italic', body: 'font-bold italic', size: 'large' },
    structure: { rounded: 'rounded-xl', spacing: 'breathable', borderWidth: 'border-0', shadow: 'shadow-xl' },
    vibe: { heroLayout: 'split', animation: 'slide', decor: 'blobs' }
  },
  {
    id: 'neon-noir',
    name: 'Neon Noir',
    description: 'Cyberpunk aesthetics with high contrast and glow.',
    colors: {
      bg: 'bg-black',
      text: 'text-gray-200',
      primary: 'bg-fuchsia-600',
      secondary: 'bg-cyan-900',
      accent: 'text-cyan-400',
      panel: 'bg-zinc-900/80',
      border: 'border-fuchsia-500',
    },
    typography: { heading: 'font-display', body: 'font-mono', size: 'large' },
    structure: { rounded: 'rounded-none', spacing: 'compact', borderWidth: 'border-r-4', shadow: 'shadow-[0_0_15px_rgba(217,70,239,0.5)]' },
    vibe: { heroLayout: 'split', animation: 'slide', decor: 'geometric' }
  },
  {
    id: 'minimal-zen',
    name: 'Minimal Zen',
    description: 'Clean, airy, and sophisticated with serif typography.',
    colors: {
      bg: 'bg-stone-50',
      text: 'text-stone-800',
      primary: 'bg-stone-900',
      secondary: 'bg-stone-200',
      accent: 'text-stone-500',
      panel: 'bg-white',
      border: 'border-stone-200',
    },
    typography: { heading: 'font-serif', body: 'font-sans', size: 'normal' },
    structure: { rounded: 'rounded-sm', spacing: 'spacious', borderWidth: 'border', shadow: 'shadow-sm' },
    vibe: { heroLayout: 'center', animation: 'fade', decor: 'none' }
  },
  {
    id: 'retro-pop',
    name: 'Retro Pop',
    description: 'Brutalist 90s vibes with bold borders and colors.',
    colors: {
      bg: 'bg-yellow-300',
      text: 'text-black',
      primary: 'bg-blue-600',
      secondary: 'bg-red-500',
      accent: 'text-blue-700',
      panel: 'bg-white',
      border: 'border-black',
    },
    typography: { heading: 'font-display', body: 'font-mono', size: 'massive' },
    structure: { rounded: 'rounded-none', spacing: 'compact', borderWidth: 'border-4', shadow: 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' },
    vibe: { heroLayout: 'asymmetric', animation: 'brutal', decor: 'geometric' }
  },
  {
    id: 'deep-ocean',
    name: 'Deep Ocean',
    description: 'Immersive dark blues and glassmorphism.',
    colors: {
      bg: 'bg-slate-900',
      text: 'text-slate-100',
      primary: 'bg-sky-500',
      secondary: 'bg-indigo-900',
      accent: 'text-sky-300',
      panel: 'bg-white/5 backdrop-blur-lg',
      border: 'border-white/10',
    },
    typography: { heading: 'font-sans', body: 'font-sans', size: 'large' },
    structure: { rounded: 'rounded-3xl', spacing: 'breathable', borderWidth: 'border', shadow: 'shadow-2xl' },
    vibe: { heroLayout: 'overlay', animation: 'fade', decor: 'gradient' }
  },
  {
    id: 'swiss-grid',
    name: 'Swiss Grid',
    description: 'Structured, objective, and typography-led.',
    colors: {
      bg: 'bg-white',
      text: 'text-neutral-900',
      primary: 'bg-red-600',
      secondary: 'bg-neutral-100',
      accent: 'text-red-600',
      panel: 'bg-neutral-50',
      border: 'border-neutral-200',
    },
    typography: { heading: 'font-sans font-black tracking-tight', body: 'font-sans', size: 'large' },
    structure: { rounded: 'rounded-none', spacing: 'compact', borderWidth: 'border-t-2', shadow: 'shadow-none' },
    vibe: { heroLayout: 'split', animation: 'slide', decor: 'none' }
  },
  {
    id: 'organic-paper',
    name: 'Organic Paper',
    description: 'Soft, earthy, and textured.',
    colors: {
      bg: 'bg-orange-50',
      text: 'text-amber-950',
      primary: 'bg-green-700',
      secondary: 'bg-orange-100',
      accent: 'text-green-800',
      panel: 'bg-orange-50/50',
      border: 'border-amber-900/10',
    },
    typography: { heading: 'font-serif italic', body: 'font-sans', size: 'normal' },
    structure: { rounded: 'rounded-[3rem]', spacing: 'breathable', borderWidth: 'border-0', shadow: 'shadow-inner' },
    vibe: { heroLayout: 'center', animation: 'pop', decor: 'noise' }
  },
  {
    id: 'hyper-grape',
    name: 'Hyper Grape',
    description: 'Loud, purple, and energetic.',
    colors: {
      bg: 'bg-purple-900',
      text: 'text-white',
      primary: 'bg-lime-400',
      secondary: 'bg-purple-800',
      accent: 'text-lime-300',
      panel: 'bg-purple-800',
      border: 'border-lime-400',
    },
    typography: { heading: 'font-display uppercase', body: 'font-sans', size: 'massive' },
    structure: { rounded: 'rounded-xl', spacing: 'spacious', borderWidth: 'border-2', shadow: 'shadow-[0_20px_50px_rgba(163,230,53,0.3)]' },
    vibe: { heroLayout: 'overlay', animation: 'pop', decor: 'geometric' }
  },
  {
    id: 'executive-pro',
    name: 'Executive Pro',
    description: 'Trustworthy, corporate, and polished.',
    colors: {
      bg: 'bg-gray-50',
      text: 'text-gray-900',
      primary: 'bg-blue-700',
      secondary: 'bg-white',
      accent: 'text-blue-800',
      panel: 'bg-white',
      border: 'border-gray-200',
    },
    typography: { heading: 'font-sans', body: 'font-sans', size: 'normal' },
    structure: { rounded: 'rounded-lg', spacing: 'breathable', borderWidth: 'border', shadow: 'shadow-lg' },
    vibe: { heroLayout: 'split', animation: 'fade', decor: 'none' }
  },
  {
    id: 'street-marker',
    name: 'Street Marker',
    description: 'Rough, hand-drawn, and rebellious.',
    colors: {
      bg: 'bg-zinc-800',
      text: 'text-white',
      primary: 'bg-red-500',
      secondary: 'bg-zinc-700',
      accent: 'text-yellow-400',
      panel: 'bg-zinc-900',
      border: 'border-white',
    },
    typography: { heading: 'font-marker', body: 'font-sans', size: 'large' },
    structure: { rounded: 'rounded-sm', spacing: 'compact', borderWidth: 'border-2', shadow: 'shadow-[4px_4px_0_rgba(255,255,255,0.2)]' },
    vibe: { heroLayout: 'asymmetric', animation: 'brutal', decor: 'noise' }
  },
  {
    id: 'glass-future',
    name: 'Glass Future',
    description: 'Frosted aesthetics with soft pastels.',
    colors: {
      bg: 'bg-gradient-to-br from-rose-100 to-teal-100',
      text: 'text-slate-700',
      primary: 'bg-white/40',
      secondary: 'bg-white/20',
      accent: 'text-teal-600',
      panel: 'bg-white/30 backdrop-blur-md',
      border: 'border-white/50',
    },
    typography: { heading: 'font-display', body: 'font-sans', size: 'large' },
    structure: { rounded: 'rounded-2xl', spacing: 'spacious', borderWidth: 'border', shadow: 'shadow-xl' },
    vibe: { heroLayout: 'center', animation: 'fade', decor: 'gradient' }
  }
];

// --- State ---
let currentTheme = THEMES[0];

// --- Helpers ---
function getThemeContrast(theme) {
  const isDark = theme.colors.bg.includes('black') ||
    theme.colors.bg.includes('slate-900') ||
    theme.colors.bg.includes('zinc-800') ||
    theme.colors.bg.includes('purple-900');
  return isDark;
}

// --- Theme Engine ---
function applyTheme(theme) {
  currentTheme = theme;
  const isDark = getThemeContrast(theme);

  // Body & Font
  const body = document.getElementById('body-root');
  body.className = `overflow-x-hidden min-h-screen transition-colors duration-700 relative ${theme.colors.bg} ${theme.colors.text} ${theme.typography.body}`;

  // Navbar
  const navbar = document.getElementById('navbar');
  navbar.className = `fixed top-0 w-full z-40 p-6 flex justify-between items-center transition-colors duration-300 ${theme.colors.bg === 'bg-white' ? 'bg-white/80' : 'backdrop-blur-sm'}`;

  const logoBox = document.getElementById('logo-box');
  logoBox.className = `w-8 h-8 flex items-center justify-center transition-all duration-700 ${theme.colors.primary} ${theme.structure.rounded}`;

  const logoText = document.getElementById('logo-text');
  logoText.className = `font-bold text-xl transition-all duration-700 ${theme.typography.heading}`;

  // Hero Layout Calculation
  const heroSection = document.getElementById('hero-section');
  let heroClasses = `relative pt-32 pb-20 px-6 md:px-12 min-h-screen flex items-center z-10 transition-all duration-700 `;

  if (theme.vibe.heroLayout === 'center') heroClasses += 'justify-center text-center ';
  if (theme.vibe.heroLayout === 'split') heroClasses += 'flex-col md:flex-row ';
  if (theme.vibe.heroLayout === 'overlay') heroClasses += 'justify-center items-center text-center ';
  if (theme.vibe.heroLayout === 'asymmetric') heroClasses += 'flex-col md:flex-row-reverse ';

  heroSection.className = heroClasses;

  // Hero Content Width & Alignment
  const heroContentWrapper = document.getElementById('hero-content-wrapper');
  let contentClasses = `flex flex-col gap-6 max-w-4xl transition-all duration-700 `;
  if (theme.vibe.heroLayout === 'center' || theme.vibe.heroLayout === 'overlay') contentClasses += 'items-center ';
  else contentClasses += 'items-start ';

  if (theme.vibe.heroLayout === 'split') contentClasses += 'md:w-1/2 ';
  else contentClasses += 'w-full ';

  heroContentWrapper.className = contentClasses;

  // Typography Sizing
  let sizeClass = 'text-4xl md:text-6xl';
  if (theme.typography.size === 'large') sizeClass = 'text-5xl md:text-7xl';
  if (theme.typography.size === 'massive') sizeClass = 'text-6xl md:text-9xl';

  const heroTagline = document.getElementById('hero-tagline');
  if (theme.id === 'custom-requested') {
    heroTagline.className = `inline-block px-4 py-2 mb-4 bg-brand-dark text-white transform -skew-x-12 uppercase tracking-widest text-sm font-black transition-all duration-700`;
  } else {
    heroTagline.className = `inline-block px-4 py-1 mb-4 border uppercase tracking-widest text-sm font-bold transition-all duration-700 ${theme.colors.border} ${theme.colors.accent} ${theme.structure.rounded}`;
  }

  const heroHeadline = document.getElementById('hero-headline');
  // For custom theme, we need flex-col to stack the skewed background spans
  const extraHeadlineClasses = theme.id === 'custom-requested' ? 'flex flex-col items-start gap-2 text-5xl md:text-7xl' : sizeClass;

  heroHeadline.className = `leading-[0.9] font-bold tracking-tighter transition-all duration-700 ${theme.typography.heading} ${extraHeadlineClasses}`;

  const heroDesc = document.getElementById('hero-desc');
  if (theme.id === 'custom-requested') {
    heroDesc.className = `text-lg md:text-xl text-brand-dark transform skew-x-12 max-w-lg font-bold transition-all duration-700 leading-relaxed`;
  } else {
    heroDesc.className = `text-lg md:text-xl opacity-80 max-w-lg transition-all duration-700 ${theme.structure.spacing === 'spacious' ? 'leading-10' : 'leading-relaxed'}`;
  }

  // Hero Visual
  const heroVisualWrapper = document.getElementById('hero-visual-wrapper');
  let visualClasses = `relative mt-12 md:mt-0 transition-all duration-700 `;
  if (theme.vibe.heroLayout === 'split') visualClasses += 'md:w-1/2 md:pl-12 ';
  if (theme.vibe.heroLayout === 'asymmetric') visualClasses += 'md:w-2/3 md:pr-12 ';
  if (theme.vibe.heroLayout === 'overlay') visualClasses += 'absolute inset-0 -z-10 opacity-30 ';
  heroVisualWrapper.className = visualClasses;

  const heroImageContainer = document.getElementById('hero-image-container');
  heroImageContainer.className = `relative overflow-hidden aspect-square md:aspect-[4/3] transition-all duration-700 ${theme.structure.rounded} ${theme.structure.shadow} ${theme.colors.border} ${theme.structure.borderWidth}`;

  const heroImage = document.getElementById('hero-image');
  heroImage.src = `https://picsum.photos/seed/${theme.id}/800/800`;
  heroImage.className = `object-cover w-full h-full hover:scale-105 transition-transform duration-[2s] ${theme.id === 'neon-noir' ? 'grayscale contrast-125' : ''}`;

  // Floating Icon
  const floatIcon = document.getElementById('hero-floating-icon');
  if (theme.vibe.decor !== 'none') {
    floatIcon.classList.remove('hidden');
    floatIcon.className = `absolute -bottom-6 -left-6 w-32 h-32 flex items-center justify-center animate-float z-20 transition-all duration-700 ${theme.colors.secondary} ${theme.structure.rounded}`;
  } else {
    floatIcon.classList.add('hidden');
  }

  // Decor Elements
  // Decor Elements
  const decorNoise = document.getElementById('decor-noise');
  const decorGradient = document.getElementById('decor-gradient');
  const decorBlobs = [document.getElementById('decor-blob-1'), document.getElementById('decor-blob-2')];

  if (decorNoise) decorNoise.classList.add('hidden');
  if (decorGradient) decorGradient.classList.add('hidden');
  decorBlobs.forEach(b => b?.classList.add('hidden'));

  if (theme.vibe.decor === 'noise' && decorNoise) {
    decorNoise.classList.remove('hidden');
    decorNoise.style.backgroundImage = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`;
  }
  if (theme.vibe.decor === 'gradient' && decorGradient) {
    decorGradient.classList.remove('hidden');
    const colorName = theme.colors.primary.replace('bg-', '');
    decorGradient.className = `absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0 bg-gradient-to-b from-${colorName} to-transparent`;
  }
  if (theme.vibe.decor === 'blobs') {
    decorBlobs.forEach(b => b?.classList.remove('hidden'));
  }

  // Marquee
  const marqueeSection = document.getElementById('marquee-section');
  if (['retro-pop', 'hyper-grape', 'street-marker'].includes(theme.id)) {
    marqueeSection.classList.remove('hidden');
    marqueeSection.className = `py-6 overflow-hidden border-y-4 transition-all duration-700 ${theme.colors.primary} ${theme.colors.border}`;
    document.querySelectorAll('.marquee-text').forEach(el => {
      el.className = `marquee-text text-4xl font-bold uppercase mx-8 text-white ${theme.typography.heading}`;
    });
  } else {
    marqueeSection.classList.add('hidden');
  }

  // Features Section
  const featuresSection = document.getElementById('features-section');
  featuresSection.className = `py-32 px-6 md:px-12 transition-all duration-700 ${theme.colors.panel}`;

  const featuresTitle = document.getElementById('features-title');
  featuresTitle.className = `text-4xl md:text-5xl font-bold mb-16 text-center transition-all duration-700 ${theme.typography.heading}`;

  for (let i = 1; i <= 3; i++) {
    const card = document.getElementById(`feat-card-${i}`);
    card.className = `feature-card p-8 h-full transition-all duration-500 group hover:-translate-y-2 ${theme.colors.bg} ${theme.structure.rounded} ${theme.structure.borderWidth} ${theme.colors.border} ${theme.structure.shadow}`;

    const iconBox = document.getElementById(`feat-icon-box-${i}`);
    iconBox.className = `w-12 h-12 mb-6 flex items-center justify-center transition-all duration-700 ${theme.colors.secondary} ${theme.structure.rounded}`;

    const icon = document.getElementById(`feat-icon-${i}`);
    icon.className = `transition-colors ${theme.colors.accent}`;

    const title = document.getElementById(`feat-title-${i}`);
    // Extract color class name like 'text-cyan-400' -> 'text-cyan' is not standard tailwind group-hover, so we simplify
    const accentBase = theme.colors.accent.split('-')[1]; // e.g. 'cyan'
    // Simulating the group-hover logic via style injection or just simplified generic hover
    title.className = `text-2xl font-bold mb-4 transition-colors ${theme.typography.heading}`;
    // Note: Complex Tailwind group-hover string construction in vanilla is tricky, sticking to base typography.
  }

  // Episodes
  const epTitle = document.getElementById('episodes-title');
  epTitle.className = `text-4xl md:text-6xl font-bold mb-8 transition-all duration-700 ${theme.typography.heading}`;

  const epImgBox = document.getElementById('episodes-img-box');
  epImgBox.className = `aspect-video relative overflow-hidden group cursor-pointer transition-all duration-700 ${theme.colors.secondary} ${theme.structure.rounded} ${theme.structure.shadow}`;

  const epImg = document.getElementById('episodes-img');
  epImg.src = `https://picsum.photos/seed/${theme.id}2/800/600`;

  document.querySelectorAll('.episode-item').forEach(el => {
    el.className = `episode-item flex gap-6 items-center p-4 hover:bg-black/5 transition-colors cursor-pointer group ${theme.structure.rounded}`;
  });
  document.querySelectorAll('.ep-num').forEach(el => {
    el.className = `ep-num text-4xl font-bold opacity-20 transition-all duration-700 ${theme.typography.heading}`;
  });
  document.querySelectorAll('.ep-play-btn').forEach(el => {
    // Simple logic for hover states in JS is heavy, setting static base
    el.className = `ep-play-btn ml-auto w-10 h-10 border rounded-full flex items-center justify-center transition-all ${theme.colors.border} hover:${theme.colors.primary} hover:text-white hover:border-transparent`;
  });

  // Footer
  const footer = document.getElementById('footer');
  footer.className = `text-white py-20 px-6 md:px-12 mt-20 text-center relative overflow-hidden transition-all duration-700 ${theme.colors.primary}`;

  const footerDecor = document.getElementById('footer-decor');
  if (theme.vibe.decor === 'geometric') footerDecor.classList.remove('hidden');
  else footerDecor.classList.add('hidden');

  const footerTitle = document.getElementById('footer-title');
  footerTitle.className = `text-4xl md:text-6xl font-bold mb-8 transition-all duration-700 ${theme.typography.heading}`;

  const footerInput = document.getElementById('footer-input');
  footerInput.className = `px-6 py-4 bg-white/10 backdrop-blur border border-white/30 placeholder-white/60 text-white outline-none focus:bg-white/20 transition-all w-full md:w-auto h-14 ${theme.structure.rounded}`;

  // --- Buttons & Ripples ---
  const rippleFillClass = isDark ? 'bg-white' : 'bg-black';
  const rippleTextHoverClass = isDark ? 'text-black' : 'text-white';

  // Hero CTA
  const heroCta = document.getElementById('hero-cta-btn');
  heroCta.className = `ripple-btn relative overflow-hidden isolate px-8 py-4 font-bold flex items-center gap-2 transition-all duration-700 ${theme.colors.primary} ${theme.structure.rounded} ${theme.structure.shadow} text-white`;
  heroCta.setAttribute('data-fill', rippleFillClass);
  heroCta.setAttribute('data-text-hover', rippleTextHoverClass);

  // Hero Preview
  const heroPreview = document.getElementById('hero-preview-btn');
  const previewFill = isDark ? 'bg-white' : theme.colors.primary.replace('bg-', 'bg-');
  const previewTextHover = isDark ? 'text-black' : 'text-white';
  heroPreview.className = `ripple-btn relative overflow-hidden isolate px-8 py-4 border-2 font-bold transition-all duration-700 ${theme.colors.border} ${theme.structure.rounded} ${theme.colors.text}`;
  heroPreview.setAttribute('data-fill', previewFill);
  heroPreview.setAttribute('data-text-hover', previewTextHover);

  // Footer Button
  const footerBtn = document.getElementById('footer-btn');
  footerBtn.className = `ripple-btn relative overflow-hidden isolate px-8 py-4 bg-white text-black font-bold h-14 transition-all duration-700 ${theme.structure.rounded}`;
  // Footer button always white bg, so black ripple
  footerBtn.setAttribute('data-fill', 'bg-black');
  footerBtn.setAttribute('data-text-hover', 'text-white');
}

// --- Interaction Logic ---

// Reveal Observer
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const delay = entry.target.getAttribute('data-delay') || 0;
      entry.target.style.transitionDelay = `${delay}ms`;
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal-anim').forEach(el => observer.observe(el));

// Ripple Button Logic
document.querySelectorAll('.ripple-btn').forEach(btn => {
  const fill = btn.querySelector('.ripple-fill');
  const textSpan = btn.querySelector('.btn-text');

  btn.addEventListener('pointerenter', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const radius = Math.max(
      Math.hypot(x, y),
      Math.hypot(rect.width - x, y),
      Math.hypot(x, rect.height - y),
      Math.hypot(rect.width - x, rect.height - y)
    );

    // Apply dynamic classes stored in data attributes
    const fillClass = btn.getAttribute('data-fill'); // e.g., 'bg-white'
    const textHover = btn.getAttribute('data-text-hover'); // e.g., 'text-black'

    // Reset class lists to base, then add specific colors
    fill.className = `ripple-fill absolute rounded-full pointer-events-none -z-10 ${fillClass}`;

    // Update Text Color
    if (textHover) {
      textSpan.classList.add(...textHover.split(' '));
    }

    // Animate
    fill.style.width = `${radius * 2}px`;
    fill.style.height = `${radius * 2}px`;
    fill.style.left = `${x - radius}px`;
    fill.style.top = `${y - radius}px`;
    fill.style.transform = 'scale(1)';
    fill.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
  });

  btn.addEventListener('pointerleave', () => {
    fill.style.transform = 'scale(0)';
    fill.style.transition = 'transform 0.4s ease-out';

    // Revert Text Color
    const textHover = btn.getAttribute('data-text-hover');
    if (textHover) {
      textSpan.classList.remove(...textHover.split(' '));
    }
  });
});

// Theme Selector Logic
const toggleBtn = document.getElementById('theme-toggle-btn');
const sidebar = document.getElementById('theme-sidebar');
const closeBtn = document.getElementById('theme-close-btn');
const themeList = document.getElementById('theme-list');

function toggleSidebar(show) {
  if (show) sidebar.classList.remove('translate-x-full');
  else sidebar.classList.add('translate-x-full');
}

toggleBtn.onclick = () => toggleSidebar(true);
closeBtn.onclick = () => toggleSidebar(false);

// Populate Themes
THEMES.forEach(theme => {
  const btn = document.createElement('button');
  btn.className = `w-full text-left p-4 rounded-xl transition-all duration-300 group relative border-2 border-transparent hover:bg-gray-50 hover:border-gray-200`;
  btn.innerHTML = `
        <div class="flex justify-between items-center mb-1">
            <span class="font-bold text-gray-600">${theme.name}</span>
        </div>
        <p class="text-xs text-gray-400 leading-relaxed mb-3 pr-4">${theme.description}</p>
        <div class="h-8 w-full rounded overflow-hidden flex ${theme.colors.bg} border border-gray-100">
            <div class="w-1/3 h-full ${theme.colors.primary}"></div>
            <div class="w-1/3 h-full ${theme.colors.text} opacity-20"></div>
        </div>
    `;
  btn.onclick = () => {
    applyTheme(theme);
    // Highlight active (simple logic)
    Array.from(themeList.children).forEach(c => {
      c.classList.remove('border-black', 'bg-gray-50', 'shadow-md');
      c.querySelector('span').classList.remove('text-black');
      c.querySelector('span').classList.add('text-gray-600');
    });
    btn.classList.add('border-black', 'bg-gray-50', 'shadow-md');
    btn.querySelector('span').classList.remove('text-gray-600');
    btn.querySelector('span').classList.add('text-black');
  };
  themeList.appendChild(btn);
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
// Simple toggle for demo purposes (actual menu implementation skipped for brevity as logic wasn't in original App.tsx strictly)
mobileMenuBtn.onclick = () => {
  alert("Menu toggled (Visual only)");
};

// --- Initialization ---
applyTheme(currentTheme);
lucide.createIcons();
