/* ============================================================
   MACEDONIA CHURCH KONDAPALLI - ALL EDITABLE CONTENT
   ------------------------------------------------------------
   This is the ONLY file you need to edit for everyday updates:
   service timings, events, sermons, year plan, contact details.

   RULES (very important):
   1. Keep the quote marks "like this" and the commas , at the end of lines.
   2. Every text has two versions:  en: "English",  te: "తెలుగు"
      If you leave te empty, English is shown for Telugu readers.
   3. Dates are always written as  "YYYY-MM-DD"  (year-month-day).
   4. Save the file, then refresh the website in your browser.
   ============================================================ */

window.CHURCH = {

  /* ---------- BASIC INFORMATION ---------- */
  name:    { en: "Macedonia Church, Kondapalli", te: "మాసిడోనియా చర్చ్ కొండపల్లి" },
  tagline: { en: "A place to worship, grow and serve together",
             te: "ఆరాధించడానికి, ఎదగడానికి, కలిసి సేవ చేయడానికి ఒక స్థలం" },

  /* Put your logo file in  and make sure the name matches.
     If the file is missing, a golden cross is shown instead. */
  logo: "logo.png",

  /* Optional big photo behind the top of the Home page. Leave "" for none.
     Example: "hero.jpg" */
  heroImage: "hero.jpg",

  /* ---------- LIVE STREAM (the Watch Live button) ---------- */
  liveUrl: "https://youtu.be/ibuSSPxzuUA",

  /* ---------- HOME PAGE WELCOME ---------- */
  welcome: {
    en: "We warmly welcome you to Macedonia Church Kondapalli.",
    te: "మాసిడోనియా చర్చ్ కొండపల్లికి మిమ్మల్ని సాదరంగా ఆహ్వానిస్తున్నాము."
  },
  welcomeText: {
    en: "We want every person to know Jesus Christ, grow in faith, and experience God's love through worship, fellowship and service.",
    te: "ప్రతి వ్యక్తి యేసు క్రీస్తును తెలుసుకొని, విశ్వాసంలో ఎదిగి, ఆరాధన, సహవాసం మరియు సేవ ద్వారా దేవుని ప్రేమను అనుభవించాలని మేము కోరుకుంటున్నాము."
  },

  /* ---------- BIBLE VERSE ---------- */
  verse: {
    text: { en: "I can do all things through Christ who strengthens me.",
            te: "నన్ను బలపరచు క్రీస్తు ద్వారా నేను సమస్తమును చేయగలను." },
    ref:  { en: "Philippians 4:13", te: "ఫిలిప్పీయులకు 4:13" }
  },

  /* ---------- SERVICE TIMINGS ----------
     To change a time, edit the "time" lines.
     To add a service, copy one whole { ... }, block and change it. */
  services: [
    { name: { en: "Sunday Worship Service", te: "ఆదివారం ఆరాధన" },
      day:  { en: "Every Sunday", te: "ప్రతి ఆదివారం" },
      time: { en: "9:30 AM – 12:30 PM", te: "ఉదయం 9:30 – మధ్యాహ్నం 12:30" } },

    { name: { en: "Sunday School", te: "సండే స్కూల్" },
      day:  { en: "Every Sunday", te: "ప్రతి ఆదివారం" },
      time: { en: "11:30 AM – 12:30 PM", te: "ఉదయం 11:30 – మధ్యాహ్నం 12:30" } },

    { name: { en: "Youth Meeting", te: "యవనస్థుల కూడిక" },
      day:  { en: "Every Sunday", te: "ప్రతి ఆదివారం" },
      time: { en: "2:00 PM – 3:00 PM", te: "మధ్యాహ్నం 2:00 – 3:00" } }
  ],

  /* ---------- MINISTRIES ---------- */
  ministries: [
    { en: "Children's Ministries", te: "పిల్లల పరిచర్య" },
    { en: "Youth Ministries",      te: "యువజన పరిచర్య" },
    { en: "Women's Fellowship",    te: "మహిళల సహవాసం" }
  ],

  /* ---------- EVENTS ----------
     Add a new event by copying one { ... }, block. Order does not matter:
     the website puts upcoming events first and moves finished ones to "Past Events".
     "image" is optional, e.g. "retreat.jpg" (or leave ""). */
  events: [
    { title: { en: "Children's Retreat", te: "పిల్లల రిట్రీట్" },
      date: "2026-09-04",
      time: { en: "10:00 AM", te: "ఉదయం 10:00" },
      venue: { en: "Macedonia Church Kondapalli", te: "మాసిడోనియా చర్చ్ కొండపల్లి" },
      description: { en: "", te: "" },
      image: "" },

    { title: { en: "Women's Retreat", te: "మహిళల రిట్రీట్" },
      date: "2026-10-02",
      time: { en: "10:00 AM", te: "ఉదయం 10:00" },
      venue: { en: "Macedonia Church Kondapalli", te: "మాసిడోనియా చర్చ్ కొండపల్లి" },
      description: { en: "", te: "" },
      image: "" }
  ],

  /* ---------- SERMONS ----------
     "id" is the part of a YouTube link after  watch?v=  or after  youtu.be/
     Example: https://youtu.be/e2dNWK90Y2E  ->  id: "e2dNWK90Y2E"
     Newest sermon first. title and date are optional (leave "" to hide). */
  sermons: [
    { id: "e2dNWK90Y2E", title: { en: "", te: "" }, date: "" },
    { id: "OkL2DunAlk4", title: { en: "", te: "" }, date: "" }
  ],
  channelUrl: "https://youtu.be/TXDqoB7v7Ls",

  /* ---------- CHURCH YEAR PLAN ---------- */
  yearPlan: {
    year: 2026,
    intro: {
      en: "Stay updated with our worship services, prayer meetings, Bible studies, fellowship programs and special church events.",
      te: "మా ఆరాధనలు, ప్రార్థన కూడికలు, బైబిల్ అధ్యయనాలు, సహవాస కార్యక్రమాలు మరియు ప్రత్యేక సంఘ కార్యక్రమాల గురించి తెలుసుకోండి."
    },
    /* Pictures of the printed year plan. Put the files in 
       with these names (add or remove lines as you like). Missing files are hidden. */
    images: [
      "year-plan-1.jpg",
      "year-plan-2.jpg"
    ],
    /* Month by month list. month = 1 (January) ... 12 (December).
       Add lines inside "items" for each program of that month. */
    months: [
      { month: 9,  items: [ { day: 4, text: { en: "Children's Retreat", te: "పిల్లల రిట్రీట్" } } ] },
      { month: 10, items: [ { day: 2, text: { en: "Women's Retreat",   te: "మహిళల రిట్రీట్" } } ] }
    ]
  },

  /* ---------- CONTACT ---------- */
  contact: {
    address: { en: "Malkapurampeta, Kondapalli, NTR District, Ibrahimpatnam Mandal, Andhra Pradesh - 521228",
               te: "మల్కాపురంపేట, కొండపల్లి, ఎన్.టి.ఆర్ జిల్లా, ఇబ్రహీంపట్నం మండలం, ఆంధ్రప్రదేశ్ - 521228" },
    pastorLabel: { en: "Pastor", te: "పాస్టర్" },
    pastor: "Muppidi Satyanartana Garu",   /* spelled exactly as on the old website - correct it here if needed */
    mobile: "9490908480",
    email: "",                     /* add an email here later if you want one shown */
    mapLat: 16.613177,
    mapLng: 80.540649
  },

  /* ---------- PHOTOS ON HOME PAGE (optional) ----------
     Add photos like:  { src: "photo1.jpg", alt: { en: "Sunday worship", te: "ఆదివారం ఆరాధన" } },
     Leave the list empty [] to hide the photo section. */
  gallery: [
  ],

  /* ---------- MENU ---------- */
  nav: [
    { id: "home",     href: "index.html",     label: { en: "Home",             te: "హోమ్" } },
    { id: "sermons",  href: "sermons.html",   label: { en: "Sermons",          te: "ప్రసంగాలు" } },
    { id: "events",   href: "events.html",    label: { en: "Events",           te: "కార్యక్రమాలు" } },
    { id: "yearplan", href: "year-plan.html", label: { en: "Church Year Plan", te: "వార్షిక ప్రణాళిక" } },
    { id: "contact",  href: "contact.html",   label: { en: "Contact Us",       te: "సంప్రదించండి" } }
  ]
};
