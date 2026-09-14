// ================= SMOOTH SCROLL =================
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// ================= ON PAGE LOAD =================
window.onload = () => {

  // Hide cookie banner if accepted
  const banner = document.getElementById("cookie-banner");
  if (banner && localStorage.getItem("cookiesAccepted") === "true") {
    banner.style.display = "none";
  }

  // ================= LIGHTBOX =================
  const galleryImages = document.querySelectorAll(".gallery img");
  let currentIndex = 0;

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      openLightbox();
    });
  });

  function openLightbox() {
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    const bigImg = document.createElement("img");
    bigImg.src = galleryImages[currentIndex].src;
    bigImg.className = "lightbox-img";

    const next = createNavButton("right", "&#10095;");
    next.onclick = (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % galleryImages.length;
      bigImg.src = galleryImages[currentIndex].src;
    };

    const prev = createNavButton("left", "&#10094;");
    prev.onclick = (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      bigImg.src = galleryImages[currentIndex].src;
    };

    overlay.append(bigImg, next, prev);

    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
  }

  function createNavButton(side, symbol) {
    const btn = document.createElement("button");
    btn.innerHTML = symbol;
    btn.className = `lightbox-btn ${side}`;
    return btn;
  }

  // Initial reveal
  revealOnScroll();
};

// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
