// === VALIDASI FORM ===
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          handleFormSubmit(form.id);
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// === FUNGSI SUBMIT FORM ===
function handleFormSubmit(formId) {
  if (formId === "collectForm") {
    const name = document.getElementById("collectName").value;
    const phone = document.getElementById("collectPhone").value;
    const address = document.getElementById("collectAddress").value;
    const volume = document.getElementById("collectVolume").value;
    const method = document.getElementById("collectMethod").value;

    alert(
      `Terima kasih, ${name}!\n\nPermintaan pengumpulan minyak jelantah Anda telah dikirim.\nDetail:\nNo HP: ${phone}\nAlamat: ${address}\nJumlah: ${volume} liter\nMetode: ${method}`
    );
  }

  if (formId === "contactForm") {
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;

    alert(
      `Terima kasih ${name}! Pesan Anda telah dikirim ke tim JelaGreen.\n\nEmail: ${email}\nPesan: ${message}`
    );
  }
}

// === SMOOTH SCROLL ===
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId.startsWith("#")) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === DARK MODE TOGGLE ===
const toggleBtn = document.getElementById("darkModeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Mode Terang"
      : "🌙 Mode Gelap";
  });
}

// === SCROLL ANIMATION ===
const fadeElements = document.querySelectorAll(".fade-in");

function handleScrollAnimation() {
  fadeElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);
