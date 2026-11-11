// Efek mengetik
const teks = ["Web Developer", "UI Designer", "Pelajar Teknologi"];
const el = document.getElementById("typing");
let i = 0, j = 0, hapus = false;

function ketik() {
  if (!el) return;
  const kata = teks[i];
  el.textContent = kata.substring(0, j);

  if (!hapus && j < kata.length) j++;
  else if (hapus && j > 0) j--;
  else if (!hapus) { hapus = true; return setTimeout(ketik, 1200); }
  else { hapus = false; i = (i + 1) % teks.length; }

  setTimeout(ketik, hapus ? 50 : 100);
}
ketik();

// Menu aktif saat scroll
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  links.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + current);
  });
});

// Muncul halus saat di-scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll("section").forEach(s => {
  s.classList.add("reveal");
  observer.observe(s);
});
