// FolderTintCM — language, reveals, the chapter rail and the hero's tilt,
// as on ScreenShotCM's site. The page is written in Spanish; English
// replaces each [data-i18n] text, alt and label.
(() => {
  "use strict";

  const EN = {
    "nav.tint": "Tint", "nav.custom": "Customise", "nav.theme": "Light or dark", "nav.stays": "It stays",
    "nav.light": "Light", "nav.download": "Download", "rail.intro": "Intro",
    "c.red": "Red", "c.orange": "Orange", "c.yellow": "Yellow", "c.green": "Green", "c.mint": "Mint",
    "c.teal": "Teal", "c.cyan": "Cyan", "c.blue": "Blue", "c.indigo": "Indigo", "c.purple": "Purple",
    "c.pink": "Pink", "c.brown": "Brown", "c.gray": "Gray", "c.custom": "Yours",
    "hero.eyebrow": "For Windows 10 and 11",
    "hero.title": "Your folders,<br><em>in full colour</em>.",
    "hero.lede": "Right-click a folder and pick a colour, just like on a Mac. Find your projects at a glance, without changing anything else about how you work.",
    "hero.cta": "Download free", "hero.tour": "See how it works ↓",
    "stats.colours": "Apple colours, plus your own", "stats.installer": "KB installer",
    "stats.background": "background processes", "stats.data": "bytes sent to the internet",
    "tin.title": "One right-click. <em>Thirteen colours</em>.",
    "tin.body": "FolderTintCM joins Explorer's menu. Pick a colour and the folder changes at once, with icons drawn to stay sharp in every view, from details to extra large icons.",
    "tin.l1": "On a folder, or on the background of an open folder",
    "tin.l2": "Several selected folders at once",
    "tin.l3": "“Remove colour” puts it back as it was",
    "tin.note": "On Windows 11 it is under “Show more options” (or <kbd>Shift + F10</kbd>). The menu speaks Spanish or English, like your Windows.",
    "f.archive": "Archive", "f.clients": "Clients", "f.design": "Design", "f.docs": "Documents",
    "f.invoices": "Invoices 2026", "f.travel": "Travel photos", "f.music": "Music", "f.projects": "Projects",
    "f.recipes": "Recipes", "f.taxes": "Taxes", "f.type": "File folder",
    "m.open": "Open", "m.tab": "Open in new tab", "m.window": "Open in new window", "m.pin": "Pin to Quick access",
    "m.path": "Copy as path", "m.cut": "Cut", "m.copy": "Copy", "m.rename": "Rename", "m.props": "Properties",
    "m.custom": "Custom…", "m.clear": "Remove colour",
    "cus.title": "Any colour. <em>Yours</em>.",
    "cus.body": "“Custom…” opens FolderTintCM's picker. Drag across the square and the hue bar, or type your brand's HEX code, and watch the folder change before you apply it.",
    "cus.c1": "Live preview", "cus.c2": "HEX code", "cus.c3": "The palette, one click away",
    "cus.c4": "Your last 6, in the menu too", "cus.c5": "One picker for many folders",
    "the.title": "Light or dark, <em>like your Windows</em>.",
    "the.body": "The picker follows your apps' theme, title bar included, and stays sharp at any display scaling.",
    "sta.title": "It stays. <em>Even after a restart</em>.",
    "sta.body": "The colour is kept in the folder itself, and Windows remembers it every time it shows it. It is the same as “Properties → Customize → Change Icon”, done in one click.",
    "sta.l1": "Still there after restarts and Windows updates",
    "sta.l2": "Travels with the folder when you move or rename it",
    "sta.l3": "On a USB or network drive, it shows on every PC with FolderTintCM",
    "sta.l4": "Uninstalling gives every folder its usual icon back",
    "sta.m1": "Today", "sta.m2": "After a restart", "sta.m3": "After a Windows update",
    "alt.persist": "The same blue folder today, after a restart and after a Windows update",
    "lig.title": "Made to <em>go unnoticed</em>.",
    "lig.body": "Written in Rust on the native Windows APIs. Nothing runs in the background: each menu entry opens FolderTintCM, changes the folder and closes in an instant.",
    "lig.s1": "background processes", "lig.s2": "one single executable",
    "lig.s3": "dependency: the Windows APIs", "lig.s4": "network connections: everything stays on your PC",
    "lig.note": "No administrator: it installs for your user only and never touches system folders or icons you chose by hand.",
    "dl.title": "Bring colour<br><em>to your order</em>.",
    "dl.button": "Download the MSI installer", "dl.meta": "MSI installer · 860 KB · version",
    "dl.note": "The installer is not signed yet: Windows SmartScreen may warn when you open it (<em>More info → Run anyway</em>). Check it is the original with its SHA-256.",
    "dl.f1": "Windows 10 and 11, 64-bit", "dl.f2": "Installs for your user, no administrator needed",
    "dl.f3": "A new version installs over the previous one", "dl.f4": "Free, no account, no ads", "dl.f5": "Open source, GPL-3.0 licence",
    "foot.privacy": "Privacy", "foot.source": "Source code", "foot.home": "Home", "foot.releases": "Releases", "foot.support": "Support",
    "alt.wall": "FolderTintCM's thirteen coloured folders and the custom colour one",
    "alt.menu": "Explorer's context menu with the FolderTintCM submenu open",
    "alt.picker": "FolderTintCM's colour picker, with the folder preview, the colour square, the hue bar, the palette and the recent colours",
    "alt.dark": "The picker in dark mode", "alt.light": "The same picker in light mode",
    "alt.sizes": "The same folder, sharp at 16, 24, 32, 48, 64, 128 and 256 pixels",
    "doc.title": "Privacy — FolderTintCM",
    "page.title": "FolderTintCM — Colours for your Windows folders",
    "page.description": "Right-click a folder and pick a colour, as on a Mac. 13 Apple colours or your own. Free, no background processes, and nothing leaves your PC.",
  };

  // The Spanish text is the page itself: read it once so a switch back
  // restores it exactly.
  const ES = {};
  document.querySelectorAll("[data-i18n]").forEach((el) => { ES[el.dataset.i18n] = el.innerHTML; });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => { ES[el.dataset.i18nAlt] = el.alt; });
  document.querySelectorAll("[data-i18n-label]").forEach((el) => { ES[el.dataset.i18nLabel] = el.getAttribute("aria-label"); });
  ES["page.title"] = document.title;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) ES["page.description"] = desc.content;

  function stored() {
    try { return localStorage.getItem("lang"); } catch { return null; }
  }
  function store(lang) {
    try { localStorage.setItem("lang", lang); } catch { /* private window */ }
  }

  function apply(lang) {
    const dict = lang === "en" ? EN : ES;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const t = dict[el.dataset.i18n];
      if (t !== undefined) el.innerHTML = t;
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const t = dict[el.dataset.i18nAlt];
      if (t !== undefined) el.alt = t;
    });
    document.querySelectorAll("[data-i18n-label]").forEach((el) => {
      const t = dict[el.dataset.i18nLabel];
      if (t !== undefined) el.setAttribute("aria-label", t);
    });
    document.querySelectorAll("img[data-shot]").forEach((img) => {
      img.src = `assets/img/${lang}/${img.dataset.shot}`;
    });
    document.querySelectorAll("[data-only]").forEach((el) => {
      el.classList.toggle("shown", el.dataset.only === lang);
    });
    const key = document.body.dataset.titleKey || "page.title";
    if (dict[key]) document.title = dict[key];
    if (desc && dict["page.description"]) desc.content = dict["page.description"];
    document.querySelectorAll(".lang button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    formatCounts(lang);
  }

  const initial = stored() || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => { store(b.dataset.lang); apply(b.dataset.lang); });
  });

  // ── Counters in the hero ───────────────────────────────────────────
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const counts = [...document.querySelectorAll("[data-count]")];
  let counted = false;
  function number(v, decimals, lang) {
    return v.toLocaleString(lang === "en" ? "en-US" : "es-ES", {
      minimumFractionDigits: decimals, maximumFractionDigits: decimals,
    });
  }
  function formatCounts(lang) {
    if (!counted) return;
    counts.forEach((el) => { el.textContent = number(+el.dataset.count, +(el.dataset.decimals || 0), lang); });
  }
  function runCounts() {
    counted = true;
    const lang = document.documentElement.lang;
    if (reduce) { formatCounts(lang); return; }
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / 1400);
      const e = 1 - Math.pow(1 - t, 3);
      counts.forEach((el) => {
        el.textContent = number(+el.dataset.count * e, +(el.dataset.decimals || 0), document.documentElement.lang);
      });
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  apply(initial);
  if (counts.length) setTimeout(runCounts, 350);

  // ── Reveals ────────────────────────────────────────────────────────
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -12% 0px" });
  document.querySelectorAll(".reveal, .chapter .copy").forEach((el) => io.observe(el));

  // ── Rail, nav and the hero's tilt follow the scroll ────────────────
  const chapters = [...document.querySelectorAll("[data-chapter]")];
  const railItems = [...document.querySelectorAll(".rail li")];
  const bar = document.querySelector(".rail-progress i");
  const railList = document.querySelector(".rail ol");
  const hero = document.querySelector(".hero-shot");
  const nav = document.getElementById("nav");
  let lastY = scrollY;
  let ticking = false;

  function update() {
    ticking = false;
    const y = scrollY;
    const mid = y + innerHeight * 0.45;
    let active = 0;
    chapters.forEach((c, i) => { if (c.offsetTop <= mid) active = i; });
    railItems.forEach((li, i) => li.classList.toggle("active", i === active));
    if (bar && railList) {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.style.height = `${railList.offsetHeight * (max > 0 ? y / max : 0)}px`;
    }
    if (hero && !reduce) {
      const p = Math.min(1, y / (innerHeight * 0.7));
      hero.style.setProperty("--p", p.toFixed(3));
    }
    if (nav) nav.classList.toggle("hidden", y > lastY && y > innerHeight * 0.6);
    lastY = y;
  }
  addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener("resize", update);
  update();
})();
