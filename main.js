/* ==========================================================================
   HUYML.CO 100% FAITHFUL 3D CARD CASCADE & INTERACTIVE ENGINE
   ========================================================================== */

const PROJECTS = [
  {
    id: 'mark-woodland',
    number: '01',
    title: 'MARK WOODLAND',
    category: 'Personal Brand',
    desc: 'Working with the talented team at Uncommon Studio to reshape entrepreneur Mark Woodland’s digital presence.',
    team: 'Uncommon Studio',
    role: ['Interaction', 'Showcase', 'Front-End'],
    launch: 'October 2025',
    recognition: [
      'FWA of the Day',
      'CSSDA Website of the Day',
      'Behance UI Gallery'
    ],
    img: 'https://framerusercontent.com/images/e4NzJl004YbfnXuKnhQEuGgUPU.png?width=910&height=732',
    swatches: null
  },
  {
    id: 'eislab',
    number: '02',
    title: 'EISLAB',
    category: 'Food & Beverage',
    desc: 'Refreshed the digital identity for this German ice cream brand, transforming a more colorful and tasteful website experience.',
    team: 'Independent',
    role: ['Art Director', 'Design Direction', 'Design Lead'],
    launch: 'February 2025',
    recognition: [
      'Awwwards Site of the Day',
      'FWA of the Day',
      'CSSDA Website of the Day'
    ],
    img: 'https://framerusercontent.com/images/ZMZlhfAKVDPaWVzDIpnuU6HVRO4.jpg?width=1138&height=915',
    swatches: null
  },
  {
    id: 'mat-voyce',
    number: '03',
    title: 'MAT VOYCE',
    category: 'Portfolio',
    desc: 'A new home for the moving work of legendary type designer Mat Voyce, built to push the boundaries of creativity and performance.',
    team: 'Uncommon',
    role: ['Design Direction', 'Website Design', 'Showcase'],
    launch: 'January 2025',
    recognition: [
      'Awwwards Site of the Day',
      'Awwwards Typography Honors',
      'FWA of the Day',
      'CSSDA Website of the Day',
      'GSAP Site of the Year Nominee',
      'Good Design Award Green Tick',
      'AGDA Awards Merit'
    ],
    img: 'https://framerusercontent.com/images/G6KRK08IYPVsspZ3za8etsb60.jpg?width=910&height=732',
    swatches: ['cyan', 'yellow', 'black']
  },
  {
    id: 'defiant',
    number: '04',
    title: 'DEFIANT',
    category: 'Venture Capital',
    desc: 'A website designed to mirror the brand’s minimal, clean identity and help them stand out from traditional VC firms.',
    team: 'Independent',
    role: ['Art Director', 'Website Design', 'Showcase'],
    launch: 'January 2025',
    recognition: [
      'CSSDA Website of the Day',
      'Behance UI Gallery'
    ],
    img: 'https://framerusercontent.com/images/Ce5CMDqNJqwWN1TC3B0xbsBq47M.jpg?width=910&height=732',
    swatches: null
  },
  {
    id: 'by-kin',
    number: '05',
    title: "BY 'KIN",
    category: 'Agency & Studio',
    desc: 'Crafted a playful digital experience for Manchester-based interior and brand studio kin, featuring the layout switch that reflects the studio’s multifaceted personality.',
    team: 'Independent',
    role: ['Art Director', 'Website Design', 'Showcase'],
    launch: 'November 2024',
    recognition: [
      'Awwwards Site of the Day',
      'FWA of the Day',
      'CSSDA Website of the Day',
      'Behance UI Gallery'
    ],
    img: 'https://framerusercontent.com/images/JXol5lZzzYBnMZSEp2JZHIhuuI.jpg?width=1138&height=915',
    swatches: null
  },
  {
    id: 'uncommon',
    number: '06',
    title: 'UNCOMMON STUDIO',
    category: 'Agency & Studio',
    desc: 'Designed a bespoke digital experience for Uncommon, a Melbourne-based studio serving clients worldwide.',
    team: 'Uncommon Studio',
    role: ['Design Direction', 'Website Design'],
    launch: 'July 2026',
    recognition: [
      'Awwwards Site of the Day',
      'FWA of the Day'
    ],
    img: 'https://framerusercontent.com/images/e4NzJl004YbfnXuKnhQEuGgUPU.png?width=910&height=732',
    swatches: null
  },
  {
    id: 'serious-business',
    number: '07',
    title: 'SERIOUS BUSINESS',
    category: 'Agency & Studio',
    desc: 'Got a chance to help Serious Business transform their new brand into a website that is delicious and makes "people want to lick".',
    team: 'Serious Business',
    role: ['Website Design', 'Art Direction'],
    launch: 'August 2024',
    recognition: [
      'Awwwards Site of the Day',
      'Awwwards Business & Services Honors',
      'FWA of the Day',
      'CSSDA Website of the Day'
    ],
    img: 'https://framerusercontent.com/images/ZMZlhfAKVDPaWVzDIpnuU6HVRO4.jpg?width=1138&height=915',
    swatches: null
  },
  {
    id: 'ascon',
    number: '08',
    title: 'ASCON SYSTEMS',
    category: 'Corporate',
    desc: 'Working with Serious Business to build a website for ASCon that stands out from the typical corporate template while staying clean and professional.',
    team: 'Serious Business',
    role: ['Website Design', 'Corporate Architecture'],
    launch: 'August 2023',
    recognition: [
      'Awwwards Site of the Day',
      'CSSDA Website of the Day',
      'Behance Graphic Gallery'
    ],
    img: 'https://framerusercontent.com/images/Dr7ftrDUeUTFQY2afrDoalR8A.jpg?width=910&height=732',
    swatches: null
  },
  {
    id: 'mathijs',
    number: '09',
    title: 'MATHIJS HANENKAMP',
    category: 'Photography - portfolio',
    desc: 'Bringing the vision and personality of portrait and documentary photographer Mathijs Hanenkamp into pixels by using smooth transitions to highlight his imagery.',
    team: 'Hon Tran',
    role: ['Design Direction', 'Development'],
    launch: 'February 2023',
    recognition: [
      'FWA of the Day',
      'CSSDA Website of the Day',
      'Behance UI Gallery'
    ],
    img: 'https://framerusercontent.com/images/AHnUuCwiIe3u0k9N4az6316yTbU.jpg?width=910&height=732',
    swatches: null
  },
  {
    id: 'fromanother',
    number: '10',
    title: 'FROMANOTHER',
    category: 'Agency & Studio',
    desc: 'A fresh website for the creative agency fromanother, founded by two artists I’ve long admired, Vicki and Robin.',
    team: 'Independent',
    role: ['Design Direction', 'Website Design'],
    launch: 'April 2026',
    recognition: [
      'Awwwards Site of the Day',
      'Awwwards Site of the Month Nominee',
      'CSSDA Website of the Day',
      'FWA of the Day'
    ],
    img: 'https://framerusercontent.com/images/F33bHKrCMVcgpBMdUPAEP579M.jpg?width=910&height=732',
    swatches: null
  }
];

/* ==========================================================================
   AUDIO SYNTHESIZER
   ========================================================================== */
class HuymlAudio {
  constructor() {
    this.ctx = null;
    this.muted = true;
    this.gain = null;
    this.drone = [];
  }

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.gain = this.ctx.createGain();
    this.gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.gain.connect(this.ctx.destination);
  }

  toggle() {
    this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.muted = !this.muted;
    const now = this.ctx.currentTime;
    if (!this.muted) {
      this.gain.gain.exponentialRampToValueAtTime(0.035, now + 0.8);
      this.playTick(600);
    } else {
      this.gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      this.playTick(300);
    }
    return !this.muted;
  }

  playTick(pitch = 1000) {
    if (this.muted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      const now = this.ctx.currentTime;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(pitch, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.03);
      g.gain.setValueAtTime(0.04, now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.035);
    } catch (_) {}
  }
}

const audio = new HuymlAudio();

/* ==========================================================================
   3D CARD CASCADE & TITLES WHEEL ENGINE
   ========================================================================== */
function initExperience() {
  const deck = document.getElementById('deck-3d');
  const titlesTrack = document.getElementById('titles-track');
  const metaTeam = document.getElementById('meta-team');
  const metaRole = document.getElementById('meta-role');
  const metaLaunch = document.getElementById('meta-launch');
  const metaRecognition = document.getElementById('meta-recognition');
  const hudNum = document.getElementById('hud-active-num');

  // 1. Populate Deck and Titles Track
  deck.innerHTML = '';
  titlesTrack.innerHTML = '';

  PROJECTS.forEach((proj, idx) => {
    // 3D Card
    const card = document.createElement('div');
    card.className = 'card-3d';
    card.setAttribute('data-index', idx);
    card.innerHTML = `<img src="${proj.img}" alt="${proj.title}" loading="${idx < 3 ? 'eager' : 'lazy'}">`;
    card.addEventListener('click', () => {
      targetProgress = idx;
      audio.playTick(800);
    });
    deck.appendChild(card);

    // Title Item
    const item = document.createElement('div');
    item.className = 'title-item' + (idx === 0 ? ' active' : '');
    item.setAttribute('data-index', idx);

    let swatchesHtml = '';
    if (proj.swatches) {
      swatchesHtml = `<div class="color-swatches">${proj.swatches.map(s => `<span class="swatch swatch-${s}"></span>`).join('')}</div>`;
    }

    item.innerHTML = `
      <span class="title-category">${proj.category}</span>
      <div class="title-main-row">
        <h2 class="title-heading">${proj.title}</h2>
        ${swatchesHtml}
      </div>
      <p class="title-desc">${proj.desc}</p>
    `;

    item.addEventListener('click', () => {
      targetProgress = idx;
      audio.playTick(1200);
    });

    titlesTrack.appendChild(item);
  });

  const cardElements = deck.querySelectorAll('.card-3d');
  const titleElements = titlesTrack.querySelectorAll('.title-item');

  // State
  let currentProgress = 2; // Start near Mat Voyce
  let targetProgress = 2;
  let lastActiveIndex = -1;
  const maxIndex = PROJECTS.length - 1;

  // Wheel scrubbing
  window.addEventListener('wheel', (e) => {
    if (document.querySelector('.hud-drawer-panel.active')) return;
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    targetProgress += delta * 0.0035;
    targetProgress = Math.max(0, Math.min(maxIndex, targetProgress));
  }, { passive: true });

  // Touch & Drag Support
  let isDragging = false;
  let startY = 0;
  let dragStartProgress = 0;

  window.addEventListener('mousedown', (e) => {
    if (e.target.closest('.hud-drawer-panel') || e.target.closest('.hud-top-left') || e.target.closest('.hud-top-right')) return;
    isDragging = true;
    startY = e.clientY;
    dragStartProgress = targetProgress;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = (startY - e.clientY) * 0.006;
    targetProgress = Math.max(0, Math.min(maxIndex, dragStartProgress + diff));
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    targetProgress = Math.round(targetProgress); // gentle magnetic snap to nearest card
  });

  window.addEventListener('keydown', (e) => {
    if (document.querySelector('.hud-drawer-panel.active')) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      targetProgress = Math.min(maxIndex, Math.round(targetProgress) + 1);
      audio.playTick(900);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      targetProgress = Math.max(0, Math.round(targetProgress) - 1);
      audio.playTick(900);
    }
  });

  // Render loop
  function render() {
    currentProgress += (targetProgress - currentProgress) * 0.1;
    const activeIndex = Math.min(maxIndex, Math.max(0, Math.round(currentProgress)));

    // Update Left HUD Metadata when index changes
    if (activeIndex !== lastActiveIndex) {
      lastActiveIndex = activeIndex;
      const proj = PROJECTS[activeIndex];

      if (hudNum) hudNum.textContent = proj.number;
      if (metaTeam) metaTeam.textContent = proj.team;
      if (metaLaunch) metaLaunch.textContent = proj.launch;
      if (metaRole) {
        metaRole.innerHTML = proj.role.map(r => `<span>${r}</span>`).join('');
      }
      if (metaRecognition) {
        metaRecognition.innerHTML = proj.recognition.map(rc => `<span>${rc}</span>`).join('');
      }

      titleElements.forEach((el, idx) => {
        el.classList.toggle('active', idx === activeIndex);
      });

      audio.playTick(1100);
    }

    // 1. Transform the 3D Fanned Cards
    cardElements.forEach((card, idx) => {
      const offset = idx - currentProgress;
      const absOffset = Math.abs(offset);

      if (absOffset > 3.5) {
        card.style.display = 'none';
        return;
      }
      card.style.display = 'block';

      let translateY, translateZ, rotateX, rotateZ, scale, opacity, zIndex;

      if (offset < 0) {
        // Cards stacked ABOVE active (fanning backwards)
        translateY = offset * 210 - 20;
        translateZ = offset * 110;
        rotateX = Math.min(22, -offset * 14);
        rotateZ = offset * 5 + (idx % 2 === 0 ? 2 : -2);
        scale = Math.max(0.7, 1 + offset * 0.05);
        opacity = Math.max(0, 1 + offset * 0.28);
        zIndex = 50 + Math.round(offset * 5);
      } else if (offset > 0) {
        // Cards peeking from BELOW
        translateY = offset * 210 + 20;
        translateZ = -offset * 110;
        rotateX = Math.max(-22, -offset * 14);
        rotateZ = offset * -4 + (idx % 2 === 0 ? -2 : 2);
        scale = Math.max(0.7, 1 - offset * 0.05);
        opacity = Math.max(0, 1 - offset * 0.28);
        zIndex = 50 - Math.round(offset * 5);
      } else {
        // Active Center Card
        translateY = 0;
        translateZ = 0;
        rotateX = 0;
        rotateZ = 0;
        scale = 1;
        opacity = 1;
        zIndex = 100;
      }

      card.style.transform = `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
      card.style.opacity = opacity;
      card.style.zIndex = zIndex;
    });

    // 2. Transform the Right Titles Column (centers active item)
    if (titleElements[activeIndex]) {
      const itemHeight = 110; // approximate row step
      const trackOffset = -currentProgress * itemHeight;
      titlesTrack.style.transform = `translate3d(0, ${trackOffset}px, 0)`;
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ==========================================================================
   HUD ROUTING & DRAWERS
   ========================================================================== */
function initHudRouting() {
  const navItems = document.querySelectorAll('.menu-nav .nav-item');
  const panels = document.querySelectorAll('.hud-drawer-panel');
  const closeBtns = document.querySelectorAll('.drawer-close-btn');
  const avatarHome = document.getElementById('avatar-home');

  function openDrawer(tabName) {
    panels.forEach(p => p.classList.remove('active'));
    navItems.forEach(b => b.classList.remove('active'));

    if (tabName === 'work') {
      const workBtn = document.querySelector('.nav-item[data-tab="work"]');
      if (workBtn) workBtn.classList.add('active');
      return;
    }

    const target = document.getElementById(`overlay-${tabName}`);
    const activeNav = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
    if (target) target.classList.add('active');
    if (activeNav) activeNav.classList.add('active');
  }

  function closeAll() {
    panels.forEach(p => p.classList.remove('active'));
    navItems.forEach(b => b.classList.remove('active'));
    const workBtn = document.querySelector('.nav-item[data-tab="work"]');
    if (workBtn) workBtn.classList.add('active');
  }

  navItems.forEach(btn => {
    btn.addEventListener('click', () => {
      openDrawer(btn.getAttribute('data-tab'));
      audio.playTick(700);
    });
  });

  closeBtns.forEach(btn => btn.addEventListener('click', closeAll));
  if (avatarHome) avatarHome.addEventListener('click', (e) => { e.preventDefault(); closeAll(); });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

/* ==========================================================================
   REALTIME CLOCK & INQUIRIES
   ========================================================================== */
function initClock() {
  const timeEl = document.getElementById('live-hcmc-time');
  if (!timeEl) return;
  function update() {
    const opts = { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', hour12: false };
    timeEl.textContent = `HCMC, ${new Intl.DateTimeFormat([], opts).format(new Date())}`;
  }
  update();
  setInterval(update, 1000);
}

function initCopyEmail() {
  const btn = document.getElementById('copy-email-trigger');
  if (!btn) return;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('hello@huyml.co');
      btn.classList.add('copied');
      audio.playTick(1400);
      setTimeout(() => btn.classList.remove('copied'), 2000);
    } catch (_) {}
  });
}

/* ==========================================================================
   AUDIO TOGGLE
   ========================================================================== */
function initAudio() {
  const btn = document.getElementById('audio-toggle-btn');
  const txt = document.getElementById('audio-state-text');
  if (!btn || !txt) return;

  btn.addEventListener('click', () => {
    const active = audio.toggle();
    txt.textContent = active ? 'On —' : 'Off —';
  });
}

/* ==========================================================================
   SHOWREEL MODAL
   ========================================================================== */
function initShowreel() {
  const modal = document.getElementById('showreel-modal');
  const trigger = document.getElementById('showreel-trigger');
  const close = document.getElementById('close-reel-btn');

  if (!modal || !trigger) return;
  trigger.addEventListener('click', () => modal.classList.add('active'));
  close?.addEventListener('click', () => modal.classList.remove('active'));
  modal.querySelector('.showreel-dimmer')?.addEventListener('click', () => modal.classList.remove('active'));
}

/* ==========================================================================
   CUSTOM CURSOR
   ========================================================================== */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const dot = cursor ? cursor.querySelector('.cursor-dot') : null;
  if (!dot) return;
  window.addEventListener('mousemove', (e) => {
    dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
  });
}

/* ==========================================================================
   START
   ========================================================================== */
window.addEventListener('DOMContentLoaded', () => {
  initExperience();
  initHudRouting();
  initClock();
  initCopyEmail();
  initAudio();
  initShowreel();
  initCursor();
});
