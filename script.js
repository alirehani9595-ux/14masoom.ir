/* ═══════════════════════════════════════════════════════════
   سایت دبیرستان چهارده معصوم — راهنمای افزودن برنامه جدید
   ─────────────────────────────────────────────────────────
   کافی است یک آیتم جدید به آرایه زیر اضافه کنید؛ سایت خودش
   کارت، فیلتر و جزئیات را می‌سازد.

   {
     title: "عنوان برنامه",
     date: "۱۴۰۴/۰۷/۰۱",        ← تاریخ شمسی به‌صورت متن
     category: "آموزشی",         ← یکی از دسته‌های موجود یا دسته جدید
     icon: "🎓",                 ← ایموجی یا نماد برنامه (وقتی عکس ندارید)
     image: "",                  ← مسیر عکس مثل "images/photo1.jpg" (خالی = نمایش ایموجی)
     excerpt: "یک جمله کوتاه برای نمایش در کارت",
     description: "متن کامل گزارش برنامه. برای پاراگراف جدید از دو بار Enter استفاده کنید."
   },

   برای گذاشتن عکس واقعی: یک پوشه به نام images کنار این فایل‌ها
   بسازید، عکس‌ها را داخلش بگذارید و مسیر را در image بنویسید.
   برنامه‌های جدید را همیشه «بالای» آرایه اضافه کنید تا اول نمایش داده شوند.
   ═══════════════════════════════════════════════════════════ */

const PROGRAMS = [
  {
    title: "آیین افتتاحیه سال تحصیلی",
    date: "۱۴۰۴/۰۷/۰۱",
    category: "مناسبت‌ها",
    icon: "🎓",
    image: "",
    excerpt: "با حضور مدیر، معلمان و دانش‌آموزان، سال تحصیلی جدید با قرائت قرآن و سرود ملی آغاز شد.",
    description: "مراسم آغاز سال تحصیلی با حضور مدیر مدرسه، کادر آموزشی و همه دانش‌آموزان در حیاط مدرسه برگزار شد.\n\nپس از قرائت قرآن و سرود ملی، مدیر مدرسه در سخنانی بر نظم، تلاش علمی و رعایت انضباط تأکید کرد و برنامه‌های سال پیش رو را معرفی نمود."
  },
  {
    title: "جشنواره علوم و تجربه‌های علمی",
    date: "۱۴۰۴/۰۸/۱۵",
    category: "علمی",
    icon: "🔬",
    image: "",
    excerpt: "دانش‌آموزان بیش از ۳۰ آزمایش و ماکت علمی ساختند و برای بازدیدکنندگان ارائه کردند.",
    description: "جشنواره علوم با حضور بیش از ۳۰ ایستگاه آزمایشی در سالن مدرسه برگزار شد.\n\nدانش‌آموزان پروژه‌هایی در حوزه فیزیک، شیمی و زیست‌شناسی آماده کرده بودند و با توضیح مبانی علمی هر آزمایش، از مهمانان مدعو استقبال کردند.\n\nاز برگزیدگان با اهدای لوح تقدیر و جایزه تشکر شد."
  },
  {
    title: "مسابقات قرآن و عترت",
    date: "۱۴۰۴/۰۹/۰۵",
    category: "مذهبی",
    icon: "📖",
    image: "",
    excerpt: "در رشته‌های حفظ، قرائت و احکام، نفرات برتر به مرحله استانی راه یافتند.",
    description: "مسابقات قرآن و عترت مدرسه در سه رشته حفظ قرآن، قرائت و احکام برگزار شد.\n\nداوری توسط دبیران معارف و قاریان برجسته منطقه انجام گرفت و نفرات برگزیده به مرحله استانی اعزام شدند.\n\nاین مسابقات هر سال با هدف تقویت معنویت دانش‌آموزان در ماه‌های پایانی پاییز برگزار می‌شود."
  },
  {
    title: "اردوی بازدید از موزه ملی",
    date: "۱۴۰۴/۰۹/۲۰",
    category: "اردو",
    icon: "🚌",
    image: "",
    excerpt: "دانش‌آموزان پایه‌های هفتم و هشتم در قالب اردوی علمی از موزه ملی بازدید کردند.",
    description: "اردوی علمی-فرهنگی موزه ملی با همراهی دبیران تاریخ و علوم برگزار شد.\n\nدانش‌آموزان در این بازدید با آثار دوران مختلف تاریخ ایران آشنا شدند و در پایان، کارگاه پرسش و پاسخ برگزار گردید.\n\nهماهنگی این اردو با همکاری انجمن اولیا و مربیان انجام شده بود."
  },
  {
    title: "نمایشگاه هنرهای تجسمی دانش‌آموزی",
    date: "۱۴۰۴/۱۰/۱۰",
    category: "فرهنگی و هنری",
    icon: "🎨",
    image: "",
    excerpt: "آثار نقاشی، خوشنویسی و صنایع دستی دانش‌آموزان در سالن مدرسه به نمایش گذاشته شد.",
    description: "نمایشگاه هنرهای تجسمی با حضور بیش از ۱۲۰ اثر از دانش‌آموزان در سالن اجتماعات افتتاح شد.\n\nآثار شامل نقاشی رنگ روغن، خوشنویسی، کلاژ و صنایع دستی بود و در پایان نمایشگاه، آثار منتخب در سایت مدرسه منتشر گردید.\n\nاستعدادهای برتر برای حضور در جشنواره استانی هنر معرفی شدند."
  },
  {
    title: "المپیاد ورزشی درون‌مدرسه‌ای",
    date: "۱۴۰۴/۱۰/۲۵",
    category: "ورزشی",
    icon: "⚽",
    image: "",
    excerpt: "مسابقات فوتبال، والیبال و طناب‌کشی بین کلاس‌ها با استقبال گسترده برگزار شد.",
    description: "المپیاد ورزشی مدرسه در رشته‌های فوتبال، والیبال و طناب‌کشی میان تیم‌های کلاس‌های مختلف برگزار شد.\n\nاین رویداد با هدف تقویت روحیه تیمی و نشاط دانش‌آموزان طراحی شده بود و در پایان، به تیم‌های برتر جام اهدای شد.\n\nبرگزیدگان به تیم منتخب مدرسه برای مسابقات منطقه‌ای دعوت شدند."
  },
  {
    title: "کارگاه مهارت‌های زندگی و مشاوره تحصیلی",
    date: "۱۴۰۴/۱۱/۰۵",
    category: "آموزشی",
    icon: "🧠",
    image: "",
    excerpt: "مشاوران مدرسه مهارت‌های ارتباطی، مدیریت زمان و برنامه‌ریزی درسی را آموزش دادند.",
    description: "کارگاه مهارت‌های زندگی با حضور مشاور تحصیلی و مشاور خانواده مدرسه در دو نوبت برگزار شد.\n\nمباحث ارتباط مؤثر، مدیریت استرس امتحانات و برنامه‌ریزی هفتگی درسی به‌صورت کاربردی آموزش داده شد.\n\nدر پایان، بسته برنامه‌ریزی درسی میان دانش‌آموزان توزیع گردید."
  },
  {
    title: "جشن نوروزی و نمایشگاه کتاب",
    date: "۱۴۰۴/۱۲/۲۸",
    category: "مناسبت‌ها",
    icon: "🌸",
    image: "",
    excerpt: "جشن پایان سال با اجرای برنامه‌های هنری همراه شد و نمایشگاه کتاب با تخفیف ویژه برپا گردید.",
    description: "جشن استقبال از نوروز با اجرای سرود، تئاتر و برنامه‌های شاد دانش‌آموزی برگزار شد.\n\nهم‌زمان نمایشگاه کتاب با همکاری کانون کتاب مدرسه برپا شد و دانش‌آموزان با تخفیف ویژه کتاب خریداری کردند.\n\nدر پایان جشن، از زحمات کادر آموزشی در طول سال تقدیر به عمل آمد."
  }
];

/* ═══════════ بخش زیر را تغییر ندهید ═══════════ */

const grid = document.getElementById("cardsGrid");
const filtersBox = document.getElementById("filters");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const overlay = document.getElementById("modalOverlay");

let activeCategory = "همه";
let query = "";
const palette = ["c1", "c2", "c3", "c4", "c5", "c6", "c7"];

const toFa = (n) => String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

/* ساخت دکمه‌های فیلتر از روی دسته‌های موجود */
function buildFilters() {
  const categories = ["همه", ...new Set(PROGRAMS.map((p) => p.category))];
  filtersBox.innerHTML = categories
    .map(
      (c) =>
        `<button class="filter-btn ${c === activeCategory ? "active" : ""}" data-cat="${c}">${c}</button>`
    )
    .join("");
  document.getElementById("statCategories").textContent = toFa(categories.length - 1);
}

filtersBox.addEventListener("click", (e) => {
  if (!e.target.classList.contains("filter-btn")) return;
  activeCategory = e.target.dataset.cat;
  buildFilters();
  render();
});

searchInput.addEventListener("input", (e) => {
  query = e.target.value.trim();
  render();
});

/* ساخت کارت‌ها */
function cardClass(p) {
  const idx = [...new Set(PROGRAMS.map((x) => x.category))].indexOf(p.category);
  return palette[idx % palette.length];
}

function render() {
  const list = PROGRAMS.filter((p) => {
    const byCat = activeCategory === "همه" || p.category === activeCategory;
    const bySearch =
      !query || p.title.includes(query) || p.excerpt.includes(query) || p.category.includes(query);
    return byCat && bySearch;
  });

  resultCount.textContent = `${toFa(list.length)} برنامه نمایش داده می‌شود`;
  emptyState.hidden = list.length !== 0;

  grid.innerHTML = list
    .map(
      (p) => `
      <article class="card">
        <div class="card-media ${cardClass(p)}">
          ${p.image ? `<img src="${p.image}" alt="${p.title}" loading="lazy">` : `<span>${p.icon || "🏫"}</span>`}
          <span class="badge">${p.category}</span>
        </div>
        <div class="card-body">
          <time class="card-date">📅 ${p.date}</time>
          <h3>${p.title}</h3>
          <p>${p.excerpt}</p>
          <button class="card-btn" onclick="openModal(${PROGRAMS.indexOf(p)})">مشاهده جزئیات ←</button>
        </div>
      </article>`
    )
    .join("");
}

/* پنجره جزئیات برنامه */
function openModal(index) {
  const p = PROGRAMS[index];
  document.getElementById("modalMedia").className = `modal-media ${cardClass(p)}`;
  document.getElementById("modalMedia").innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.title}">`
    : `<span>${p.icon || "🏫"}</span>`;
  document.getElementById("modalCategory").textContent = p.category;
  document.getElementById("modalDate").textContent = "📅 " + p.date;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").innerHTML = p.description
    .split("\n\n")
    .map((par) => `<p>${par}</p>`)
    .join("");
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("show");
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* منوی موبایل */
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") mainNav.classList.remove("open");
});

/* شمارنده‌ها و سال پاورقی */
document.getElementById("statPrograms").textContent = toFa(PROGRAMS.length);
document.getElementById("year").textContent = toFa(1404);

/* شروع */
buildFilters();
render();