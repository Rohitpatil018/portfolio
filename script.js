// Initialize EmailJS immediately (replace YOUR_PUBLIC_KEY with actual key)
(function() {
  if (typeof emailjs !== "undefined" && emailjs.init) {
    try {
      emailjs.init("0PUo74B45K_a8ofMp");
    } catch (e) {
      console.warn("EmailJS init in IIFE failed:", e);
    }
  }
})();

document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     BASIC ELEMENTS
  ======================= */
  const themeToggle = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");
  const yearEl = document.getElementById("year");
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  /* ======================
     FOOTER YEAR
  ======================= */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ======================
     THEME HANDLING
  ======================= */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "light");
  }

  const updateThemeUI = () => {
    if (!themeToggle) return;
    const theme = root.getAttribute("data-theme") || "dark";
    themeToggle.textContent = theme === "light" ? "🌞" : "🌙";
  };

  updateThemeUI();

  themeToggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeUI();
  });

  /* ======================
     MOBILE NAVIGATION
  ======================= */
  menuToggle?.addEventListener("click", () => {
    nav?.classList.toggle("show");
  });

  nav?.addEventListener("click", (e) => {
    if (e.target.tagName === "A") nav.classList.remove("show");
  });

  /* ======================
     HEADER SCROLL EFFECT
  ======================= */
  const header = document.querySelector(".site-header");
  let lastScroll = 0;

  if (header) {
    window.addEventListener("scroll", () => {
      const current = window.pageYOffset;

      if (current <= 0) {
        header.classList.remove("scroll-up");
        return;
      }

      if (current > lastScroll) {
        header.classList.add("scroll-down");
        header.classList.remove("scroll-up");
      } else {
        header.classList.add("scroll-up");
        header.classList.remove("scroll-down");
      }

      lastScroll = current;
    });
  }

  /* ======================
     ANIMATIONS
  ======================= */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".card, .skill-card, .service-card, .exp-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "0.6s ease";
      observer.observe(el);
    });

  const SERVICE_ID = "service_wu2u6j5";
  const TEMPLATE_ID = "template_y59s42m";
  const PUBLIC_KEY = "0PUo74B45K_a8ofMp";

  if (typeof emailjs !== "undefined") {
    emailjs.init(PUBLIC_KEY);
  }

  /* ======================
     CONTACT FORM
  ======================= */

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        formStatus.textContent = "❌ Please fill out all fields.";
        formStatus.style.color = "#ef4444";
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formStatus.textContent = "❌ Invalid email address.";
        formStatus.style.color = "#ef4444";
        return;
      }

      const submitBtn = form.querySelector("button[type='submit']");
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      // Use EmailJS v4 promise-based API
      emailjs
        .send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: name,
            from_email: email,
            message: message,
            sent_at: new Date().toLocaleString(),
          }
        )
        .then(function (response) {
          formStatus.textContent = "✅ Message sent successfully!";
          formStatus.style.color = "#10b981";
          form.reset();
        })
        .catch(function (err) {
          console.error("Email send error:", err);
          const statusText = err && (err.statusText || err.text || err.message);
          formStatus.textContent = `❌ Failed to send message. ${statusText || "Please check EmailJS settings or network."}`;
          formStatus.style.color = "#ef4444";

          // Remove previous fallback link if present
          const prev = formStatus.querySelector && formStatus.querySelector('.mailto-fallback');
          if (prev) prev.remove();

          // Fallback mailto
          const mailto = `mailto:rpatil6721@gmail.com?subject=${encodeURIComponent("Website message from " + name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " <" + email + ">")}`;
          const fallback = document.createElement("a");
          fallback.href = mailto;
          fallback.textContent = " Or click to email directly.";
          fallback.className = 'mailto-fallback';
          fallback.style.marginLeft = "6px";
          formStatus.appendChild(fallback);
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
        });
    });
  }

  /* ======================
     PAGE LOAD STATE
  ======================= */
  window.addEventListener("load", () => {
    document.body.classList.add("loaded");
  });

  /* ======================
     ESC KEY SUPPORT
  ======================= */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") nav?.classList.remove("show");
  });

});
