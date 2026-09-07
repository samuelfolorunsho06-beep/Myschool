const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((el, i) => {
  el.style.transitionDelay = `${Math.min(i * 55, 260)}ms`;
  observer.observe(el);
});

const shareBtn = document.getElementById("shareBtn");
const toast = document.getElementById("toast");

shareBtn?.addEventListener("click", async () => {
  const shareData = {
    title: "Aurelia Academy",
    text: "Take a look at the Aurelia Academy experience.",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2600);
    }
  } catch (_) {}
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
});
