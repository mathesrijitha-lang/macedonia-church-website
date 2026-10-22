/* =============================================================
   MACEDONIA CHURCH - SITE SCRIPT
   You normally do NOT need to edit this file.
   Everyday changes are made in data/content.js
   ============================================================= */
(function () {
  "use strict";
  var C = window.CHURCH;
  if (!C) { return; }

  /* ---------- small helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  /* Bilingual text: writes both languages, CSS shows the chosen one. */
  function L(o) {
    if (o == null) { return ""; }
    if (typeof o === "string") { return esc(o); }
    var en = o.en || "", te = o.te || o.en || "";
    if (!en && !te) { return ""; }
    return '<span data-l="en">' + esc(en) + '</span><span data-l="te">' + esc(te) + "</span>";
  }
  function has(o) { return o && (o.en || o.te); }
  function $(sel) { return document.querySelector(sel); }
  function parseDate(s) {
    var p = String(s).split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function fmt(date, opts) {
    var out = "";
    ["en", "te"].forEach(function (lg) {
      var txt;
      try { txt = new Intl.DateTimeFormat(lg === "te" ? "te-IN" : "en-IN", opts).format(date); }
      catch (e) { txt = date.toDateString(); }
      out += '<span data-l="' + lg + '">' + esc(txt) + "</span>";
    });
    return out;
  }
  function telHref(n) { return "tel:+91" + String(n).replace(/\D/g, ""); }

  /* ---------- language ---------- */
  var lang = "en";
  try {
    var q = new URLSearchParams(location.search).get("lang");
    lang = (q === "te" || q === "en") ? q : (localStorage.getItem("church-lang") || "en");
  } catch (e) {}
  function setLang(l) {
    lang = l;
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.lang = l;
    try { localStorage.setItem("church-lang", l); } catch (e) {}
    var b = $(".lang-btn");
    if (b) {
      b.textContent = l === "en" ? "తెలుగు" : "English";
      b.setAttribute("aria-label", l === "en" ? "Switch to Telugu" : "Switch to English");
    }
  }
  setLang(lang);

  /* ---------- logo (falls back to a golden cross) ---------- */
  var CROSS = '<svg viewBox="0 0 64 64" role="img" aria-label="Cross"><rect width="64" height="64" rx="32" fill="#0B1F3F"/><path d="M28 12h8v14h14v8H36v20h-8V34H14v-8h14z" fill="#C9A24B"/></svg>';
  function logoHtml() { return '<img src="' + esc(C.logo) + '" alt="" width="44" height="44">'; }

  /* ---------- header ---------- */
  var page = document.body.getAttribute("data-page");
  var navHtml = C.nav.map(function (n) {
    return '<a href="' + esc(n.href) + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + L(n.label) + "</a>";
  }).join("");

  var header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="container header-inner">' +
        '<a class="brand" href="index.html" aria-label="Home">' + logoHtml() + '<span class="brand-name">' + L(C.name) + "</span></a>" +
        '<div class="header-actions">' +
          '<a class="btn btn--gold header-live" href="' + esc(C.liveUrl) + '" target="_blank" rel="noopener"><span class="live-dot"></span><span class="live-text">' +
            '<span data-l="en">Watch Live</span><span data-l="te">లైవ్ చూడండి</span></span></a>' +
          '<button class="lang-btn" type="button"></button>' +
          '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Menu"><span></span></button>' +
        "</div>" +
        '<nav class="nav" id="main-nav" aria-label="Main">' + navHtml + "</nav>" +
      "</div>";
    var img = header.querySelector(".brand img");
    if (img) { img.addEventListener("error", function () { img.outerHTML = CROSS; }); }
    header.querySelector(".lang-btn").addEventListener("click", function () { setLang(lang === "en" ? "te" : "en"); });
    var menuBtn = header.querySelector(".menu-btn"), nav = header.querySelector(".nav");
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open);
    });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); } });
    setLang(lang);
  }

  /* ---------- footer ---------- */
  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    var ct = C.contact;
    footer.innerHTML =
      '<div class="container"><div class="footer-grid">' +
        "<div><h3>" + L(C.name) + "</h3><p>" + L(C.tagline) + "</p></div>" +
        '<div><h3><span data-l="en">Service Times</span><span data-l="te">ఆరాధన సమయాలు</span></h3><ul>' +
          C.services.map(function (s) { return "<li><strong>" + L(s.name) + "</strong><br>" + L(s.day) + ", " + L(s.time) + "</li>"; }).join("") +
        "</ul></div>" +
        '<div><h3><span data-l="en">Visit &amp; Contact</span><span data-l="te">సంప్రదింపు</span></h3>' +
          "<p>" + L(ct.address) + "</p>" +
          (ct.mobile ? '<p><a href="' + telHref(ct.mobile) + '">' + esc(ct.mobile) + "</a></p>" : "") +
        "</div>" +
      "</div>" +
      '<p class="copyright">© ' + new Date().getFullYear() + " " + L(C.name) + "</p></div>";
    setLang(lang);
  }

  /* ---------- hero background photo (optional) ---------- */
  var hero = $(".hero");
  if (hero && C.heroImage) { hero.style.setProperty("--hero-img", 'url("' + C.heroImage + '")'); }

  /* ---------- Watch Live links anywhere on the page ---------- */
  Array.prototype.forEach.call(document.querySelectorAll("[data-live]"), function (a) {
    a.href = C.liveUrl; a.target = "_blank"; a.rel = "noopener";
  });

  /* ---------- renderers ---------- */
  function mount(id, html) { var el = document.getElementById(id); if (el) { el.innerHTML = html; } return el; }

  function renderServices() {
    mount("services", C.services.map(function (s) {
      return '<article class="card service-card"><h3>' + L(s.name) + '</h3><p class="day">' + L(s.day) + '</p><p class="time">' + L(s.time) + "</p></article>";
    }).join(""));
  }

  function renderMinistries() {
    mount("ministries", C.ministries.map(function (m) { return "<li>" + L(m) + "</li>"; }).join(""));
  }

  function renderVerse() {
    mount("verse", "<blockquote>“" + L(C.verse.text) + "”<cite>" + L(C.verse.ref) + "</cite></blockquote>");
  }

  function eventHtml(ev, past) {
    var d = parseDate(ev.date);
    return '<article class="event' + (past ? " past" : "") + '">' +
      '<div class="date-badge"><span class="d">' + fmt(d, { day: "numeric" }) + '</span><span class="m">' + fmt(d, { month: "short" }) + '</span><span class="y">' + d.getFullYear() + "</span></div>" +
      '<div class="event-body"><h3>' + L(ev.title) + "</h3>" +
        '<ul class="event-meta">' +
          "<li>📅 " + fmt(d, { weekday: "long", day: "numeric", month: "long", year: "numeric" }) + "</li>" +
          (has(ev.time) ? "<li>🕙 " + L(ev.time) + "</li>" : "") +
          (has(ev.venue) ? "<li>📍 " + L(ev.venue) + "</li>" : "") +
        "</ul>" +
        (has(ev.description) ? '<p style="margin-top:.6rem">' + L(ev.description) + "</p>" : "") +
        (ev.image ? '<img src="' + esc(ev.image) + '" alt="" loading="lazy" onerror="this.remove()">' : "") +
      "</div></article>";
  }
  function splitEvents() {
    var t = new Date(); t.setHours(0, 0, 0, 0);
    var all = C.events.slice().sort(function (a, b) { return parseDate(a.date) - parseDate(b.date); });
    return {
      upcoming: all.filter(function (e) { return parseDate(e.date) >= t; }),
      past: all.filter(function (e) { return parseDate(e.date) < t; }).reverse()
    };
  }
  var NO_EVENTS = '<div class="empty"><span data-l="en">No upcoming events right now. Please check back soon.</span><span data-l="te">ప్రస్తుతం రాబోయే కార్యక్రమాలు లేవు. దయచేసి మళ్లీ చూడండి.</span></div>';

  function renderEvents() {
    var s = splitEvents();
    mount("events-upcoming", s.upcoming.length ? s.upcoming.map(function (e) { return eventHtml(e, false); }).join("") : NO_EVENTS);
    if (document.getElementById("events-past")) {
      mount("events-past", s.past.map(function (e) { return eventHtml(e, true); }).join(""));
      var box = document.getElementById("past-section");
      if (box && !s.past.length) { box.hidden = true; }
    }
    if (document.getElementById("home-events")) {
      mount("home-events", s.upcoming.length ? s.upcoming.slice(0, 3).map(function (e) { return eventHtml(e, false); }).join("") : NO_EVENTS);
    }
  }

  function renderSermons() {
    var el = document.getElementById("sermons");
    if (!el) { return; }
    el.innerHTML = C.sermons.map(function (s, i) {
      var info = "";
      if (has(s.title) || s.date) {
        info = '<div class="sermon-info">' + (has(s.title) ? "<h3>" + L(s.title) + "</h3>" : "") +
          (s.date ? '<p class="date">' + fmt(parseDate(s.date), { day: "numeric", month: "long", year: "numeric" }) + "</p>" : "") + "</div>";
      }
      return '<article class="card sermon-card">' +
        '<button class="video" type="button" data-id="' + esc(s.id) + '" style="background-image:url(https://i.ytimg.com/vi/' + esc(s.id) + '/hqdefault.jpg)">' +
          '<span class="play"></span><span class="sr-only">Play sermon ' + (i + 1) + "</span></button>" + info +
        '<p style="margin:.8rem 0 0"><a href="https://youtu.be/' + esc(s.id) + '" target="_blank" rel="noopener"><span data-l="en">Open on YouTube</span><span data-l="te">YouTubeలో తెరవండి</span></a></p>' +
      "</article>";
    }).join("");
    el.addEventListener("click", function (e) {
      var b = e.target.closest(".video");
      if (!b) { return; }
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(b.getAttribute("data-id")) + "?autoplay=1&rel=0";
      f.title = "Sermon video";
      f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      f.allowFullscreen = true;
      b.innerHTML = ""; b.appendChild(f); b.style.cursor = "default";
    });
    var more = document.getElementById("more-sermons");
    if (more && C.channelUrl) { more.href = C.channelUrl; }
  }

  function renderYearPlan() {
    var host = document.getElementById("year-plan");
    if (!host) { return; }
    var html = "";
    var imgs = (C.yearPlan.images || []).map(function (src) {
      return '<a href="' + esc(src) + '" target="_blank" rel="noopener"><img src="' + esc(src) + '" alt="Church Year Plan ' + C.yearPlan.year + '" loading="lazy" onerror="this.parentNode.remove()"></a>';
    }).join("");
    if (imgs) { html += '<div class="plan-images">' + imgs + "</div>"; }
    var months = C.yearPlan.months.filter(function (m) { return m.items && m.items.length; }).sort(function (a, b) { return a.month - b.month; });
    if (months.length) {
      html += '<div class="grid">' + months.map(function (m) {
        var d = new Date(C.yearPlan.year, m.month - 1, 1);
        return '<article class="card month-card"><h3>' + fmt(d, { month: "long" }) + "</h3><ul>" +
          m.items.map(function (it) {
            return "<li>" + (it.day ? '<span class="day">' + it.day + "</span>" : "") + "<span>" + L(it.text) + "</span></li>";
          }).join("") + "</ul></article>";
      }).join("") + "</div>";
    }
    host.innerHTML = html;
  }

  function renderContact() {
    var ct = C.contact;
    var items = "";
    items += '<li><span class="ico">📍</span><div class="val"><span class="lab"><span data-l="en">Address</span><span data-l="te">చిరునామా</span></span>' + L(ct.address) + "</div></li>";
    if (ct.pastor) {
      items += '<li><span class="ico">✝</span><div class="val"><span class="lab">' + L(ct.pastorLabel) + "</span>" + esc(ct.pastor) + "</div></li>";
    }
    if (ct.mobile) {
      items += '<li><span class="ico">📞</span><div class="val"><span class="lab"><span data-l="en">Mobile</span><span data-l="te">మొబైల్</span></span><a href="' + telHref(ct.mobile) + '">' + esc(ct.mobile) + "</a></div></li>";
    }
    if (ct.email) {
      items += '<li><span class="ico">✉</span><div class="val"><span class="lab">Email</span><a href="mailto:' + esc(ct.email) + '">' + esc(ct.email) + "</a></div></li>";
    }
    mount("contact-list", items);
    var map = document.getElementById("map");
    if (map) { map.src = "https://maps.google.com/maps?q=" + ct.mapLat + "," + ct.mapLng + "&z=17&output=embed"; }
    var dir = document.getElementById("directions");
    if (dir) { dir.href = "https://www.google.com/maps/search/?api=1&query=" + ct.mapLat + "," + ct.mapLng; }
    var call = document.getElementById("call-btn");
    if (call && ct.mobile) { call.href = telHref(ct.mobile); } else if (call) { call.hidden = true; }
  }

  function renderGallery() {
    var sec = document.getElementById("gallery-section");
    if (!sec) { return; }
    if (!C.gallery || !C.gallery.length) { sec.hidden = true; return; }
    mount("gallery", C.gallery.map(function (g) {
      return '<img src="' + esc(g.src) + '" alt="' + esc((g.alt && g.alt.en) || "") + '" loading="lazy" onerror="this.remove()">';
    }).join(""));
  }

  renderServices(); renderMinistries(); renderVerse(); renderEvents();
  renderSermons(); renderYearPlan(); renderContact(); renderGallery();
  setLang(lang);
})();
