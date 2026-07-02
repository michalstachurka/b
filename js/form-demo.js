/* LAMITECH — formularz demonstracyjny: walidacja lokalna, zero wysyłki danych */
(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;

  var status = document.getElementById("form-status");

  function setError(fieldEl, hasError) {
    var wrap = fieldEl.closest(".field");
    if (wrap) wrap.classList.toggle("has-error", hasError);
    fieldEl.setAttribute("aria-invalid", hasError ? "true" : "false");
    return hasError;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // wersja demonstracyjna — dane nie opuszczają przeglądarki

    var name = form.elements.imie;
    var contact = form.elements.kontakt;
    var desc = form.elements.opis;
    var typeChecked = form.querySelector("input[name='rodzaj']:checked");
    var typeFieldset = form.querySelector(".type-fieldset");
    var invalid = [];

    if (setError(name, name.value.trim().length < 2)) invalid.push(name);
    if (setError(contact, contact.value.trim().length < 5)) invalid.push(contact);
    if (setError(desc, desc.value.trim().length < 10)) invalid.push(desc);

    var typeError = !typeChecked;
    typeFieldset.classList.toggle("has-error", typeError);
    var typeErrorMsg = typeFieldset.querySelector(".field-error");
    typeErrorMsg.style.display = typeError ? "block" : "none";
    if (typeError) invalid.push(form.querySelector("input[name='rodzaj']"));

    if (invalid.length) {
      status.classList.remove("is-shown");
      invalid[0].focus();
      return;
    }

    status.innerHTML =
      "To demonstracyjna wersja formularza. <strong>Wiadomość nie została wysłana.</strong> " +
      "Skontaktuj się bezpośrednio przez <a href=\"mailto:lamitech@onet.pl\">lamitech@onet.pl</a>.";
    status.classList.add("is-shown");
    status.focus();
  });

  /* czyszczenie błędu przy edycji */
  form.addEventListener("input", function (e) {
    var wrap = e.target.closest(".field");
    if (wrap) wrap.classList.remove("has-error");
    if (e.target.name === "rodzaj") {
      var fs = form.querySelector(".type-fieldset");
      fs.classList.remove("has-error");
      fs.querySelector(".field-error").style.display = "none";
    }
  });

  /* atrapa dodawania zdjęć — pliki są tylko wypisywane, nic nie jest przesyłane */
  var fileInput = document.getElementById("upload-input");
  var fileList = document.getElementById("upload-file-list");

  if (fileInput && fileList) {
    fileInput.addEventListener("change", function () {
      fileList.innerHTML = "";
      Array.prototype.forEach.call(fileInput.files, function (file) {
        var li = document.createElement("li");
        li.textContent = file.name + " — NIE ZOSTANIE PRZESŁANY (DEMO)";
        fileList.appendChild(li);
      });
    });
  }
})();
