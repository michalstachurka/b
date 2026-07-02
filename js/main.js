/* LAMITECH — nawigacja, menu mobilne, animacje wejścia */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Menu mobilne ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");
  var closeBtn = menu ? menu.querySelector(".menu-close") : null;
  var lastFocused = null;

  function openMenu() {
    lastFocused = document.activeElement;
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    closeBtn.focus();
  }

  function closeMenu() {
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    if (lastFocused) lastFocused.focus();
  }

  if (toggle && menu && closeBtn) {
    toggle.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

    menu.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      // prosta pętla fokusa wewnątrz menu
      var focusables = menu.querySelectorAll("a[href], button");
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    menu.querySelectorAll("nav a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  /* ---------- Animacje wejścia ---------- */
  var animated = document.querySelectorAll(".reveal, .mask-reveal, .process-track, .anim-scope");

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    animated.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );
    animated.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- Checklista „co przygotować przed pomiarem” ---------- */
  var prepList = document.querySelector(".prep-list");
  if (prepList) {
    var boxes = prepList.querySelectorAll("input[type='checkbox']");
    var progressText = document.querySelector(".prep-progress .txt");
    var progressBar = document.querySelector(".prep-progress .bar span");

    var updatePrep = function () {
      var done = prepList.querySelectorAll("input:checked").length;
      progressText.textContent = "PRZYGOTOWANE: " + done + " / " + boxes.length;
      progressBar.style.transform = "scaleX(" + (done / boxes.length) + ")";
    };

    boxes.forEach(function (box) {
      box.addEventListener("change", updatePrep);
    });
    updatePrep();
  }

  /* ---------- Scrollspy indeksu oferty ---------- */
  var indexLinks = document.querySelectorAll(".offer-index a[href^='#']");
  if (indexLinks.length && "IntersectionObserver" in window) {
    var map = {};
    indexLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (target) map[id] = link;
    });
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = map[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            indexLinks.forEach(function (l) {
              l.classList.remove("is-active");
            });
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-30% 0px -55% 0px" }
    );
    Object.keys(map).forEach(function (id) {
      spy.observe(document.getElementById(id));
    });
  }
})();
