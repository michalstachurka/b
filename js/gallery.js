/* LAMITECH — filtry realizacji + lightbox z pułapką fokusa */
(function () {
  "use strict";

  /* ---------- Filtry ---------- */
  var filterBar = document.querySelector(".filter-bar");
  var works = Array.prototype.slice.call(document.querySelectorAll(".portfolio-grid .work"));
  var countEl = document.querySelector(".filter-count");

  function applyFilter(cat) {
    var visible = 0;
    works.forEach(function (work) {
      var match = cat === "all" || work.dataset.cat === cat;
      work.classList.toggle("is-hidden", !match);
      if (match) visible += 1;
    });
    if (countEl) {
      countEl.textContent = "POKAZANO: " + visible + " / " + works.length;
    }
  }

  if (filterBar) {
    var buttons = Array.prototype.slice.call(filterBar.querySelectorAll(".filter-btn"));
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) {
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        applyFilter(btn.dataset.filter);
      });
    });
    applyFilter("all");
  }

  /* ---------- Lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  if (!lightbox || typeof lightbox.showModal !== "function") return;

  var lbImg = lightbox.querySelector(".lightbox-media img");
  var lbType = lightbox.querySelector(".lightbox-caption .work-type");
  var lbTitle = lightbox.querySelector(".lightbox-title");
  var lbCounter = lightbox.querySelector(".lightbox-counter");
  var btnPrev = lightbox.querySelector(".lightbox-prev");
  var btnNext = lightbox.querySelector(".lightbox-next");
  var btnClose = lightbox.querySelector(".lightbox-close");
  var current = 0;
  var opener = null;

  function visibleWorks() {
    return works.filter(function (w) {
      return !w.classList.contains("is-hidden");
    });
  }

  function show(index) {
    var list = visibleWorks();
    if (!list.length) return;
    current = (index + list.length) % list.length;
    var work = list[current];
    var img = work.querySelector("img");
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    lbType.textContent = work.querySelector(".work-type").textContent;
    lbTitle.textContent = work.querySelector("h3").textContent;
    lbCounter.textContent = (current + 1) + " / " + list.length;
  }

  function openLightbox(work, trigger) {
    opener = trigger;
    show(visibleWorks().indexOf(work));
    lightbox.showModal();
    btnClose.focus();
  }

  works.forEach(function (work) {
    var zoom = work.querySelector(".work-zoom");
    if (!zoom) return;
    zoom.addEventListener("click", function () {
      openLightbox(work, zoom);
    });
  });

  btnPrev.addEventListener("click", function () { show(current - 1); });
  btnNext.addEventListener("click", function () { show(current + 1); });
  btnClose.addEventListener("click", function () { lightbox.close(); });

  lightbox.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { show(current - 1); }
    if (e.key === "ArrowRight") { show(current + 1); }
    if (e.key !== "Tab") return;
    /* pułapka fokusa — uzupełnienie natywnego zachowania <dialog> */
    var focusables = lightbox.querySelectorAll("button");
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

  /* klik w tło zamyka */
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) lightbox.close();
  });

  lightbox.addEventListener("close", function () {
    if (opener) opener.focus();
  });
})();
