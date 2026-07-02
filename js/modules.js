/* LAMITECH — interaktywny wybór typu przestrzeni (wnęka / kuchnia / garderoba) */
(function () {
  "use strict";

  var shell = document.querySelector("[data-space]");
  if (!shell) return;

  var tabs = Array.prototype.slice.call(shell.querySelectorAll(".selector-tab"));
  var panels = Array.prototype.slice.call(shell.querySelectorAll(".selector-panel"));

  function activate(tab, focus) {
    tabs.forEach(function (t) {
      var selected = t === tab;
      t.setAttribute("aria-selected", selected ? "true" : "false");
      t.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(function (p) {
      p.hidden = p.id !== tab.getAttribute("aria-controls");
    });
    shell.setAttribute("data-space", tab.dataset.space);
    if (focus) tab.focus();
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", function () {
      activate(tab, false);
    });

    tab.addEventListener("keydown", function (e) {
      var next = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        next = tabs[(i + 1) % tabs.length];
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        next = tabs[(i - 1 + tabs.length) % tabs.length];
      } else if (e.key === "Home") {
        next = tabs[0];
      } else if (e.key === "End") {
        next = tabs[tabs.length - 1];
      }
      if (next) {
        e.preventDefault();
        activate(next, true);
      }
    });
  });
})();
