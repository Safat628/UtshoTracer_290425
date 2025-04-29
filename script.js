// ===== Dark Mode Toggle START =====

const darkModeToggle = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeIcon.classList.replace("fa-moon", "fa-sun");
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("darkMode", "enabled");
  } else {
    darkModeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("darkMode", "disabled");
  }
});

const agtraceHero = document.querySelector(".agtrace-hero");
document.body.classList.toggle("dark-mode");
agtraceHero.classList.toggle("dark-mode");

// ===== Dark Mode Toggle END =====

// ===== Mobile Menu Toggle START =====

const hamburger = document.getElementById("hamburger-menu");
const navContainer = document.querySelector(".nav-container");
const menuOverlay = document.querySelector(".menu-overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navContainer.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

menuOverlay.addEventListener("click", closeMenu);
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  hamburger.classList.remove("active");
  navContainer.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// ===== Mobile Menu Toggle END =====

// ===== Back to Top Button START =====

const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", (e) => {
  e.preventDefault();
  backToTopButton.classList.add("clicked");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setTimeout(() => {
    backToTopButton.classList.remove("clicked");
  }, 1000);
});

// ===== Back to Top Button END =====

// ===== Smooth Scrolling START =====

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// ===== Smooth Scrolling END =====

// ===== Active Nav Link Highlighting START =====

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  document.querySelectorAll("section[id]").forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      const id = section.getAttribute("id");
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ===== Active Nav Link Highlighting END =====

// ===== Particles.js Initialization START =====

document.addEventListener("DOMContentLoaded", function () {
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#c2db22" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1 },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.1 },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#c2db22",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.5 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }
});

// ===== Particles.js Initialization END =====

// ===== Solution START =====

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("solution-modal");
  const modalContent = document.querySelector(".modal-body");
  const closeBtn = document.querySelector(".close-modal");
  const learnMoreBtns = document.querySelectorAll(".learn-more-btn");

  const solutions = {
    blockchain: {
      title: "Blockchain Traceability",
      icon: "fa-qrcode",
      content: `
        <div class="solution-detail">
          <div class="solution-header">
            <div class="solution-icon">
              <i class="fas fa-qrcode"></i>
            </div>
            <h2>Blockchain Traceability</h2>
          </div>
          <div class="solution-body">
            <p>Our blockchain technology provides an immutable record of your product's journey from farm to consumer.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>End-to-end product journey tracking</li>
              <li>Tamper-proof record keeping</li>
              <li>QR code scanning for consumers</li>
            </ul>
          </div>
        </div>
      `,
    },
    iot: {
      title: "IoT Monitoring",
      icon: "fa-satellite-dish",
      content: `
        <div class="solution-detail">
          <div class="solution-header">
            <div class="solution-icon">
              <i class="fas fa-satellite-dish"></i>
            </div>
            <h2>IoT Monitoring System</h2>
          </div>
          <div class="solution-body">
            <p>Our IoT sensors provide real-time monitoring of environmental conditions.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>Real-time temperature monitoring</li>
              <li>Soil moisture tracking</li>
              <li>Automated alerts</li>
            </ul>
          </div>
        </div>
      `,
    },
    ai: {
      title: "AI Analytics",
      icon: "fa-robot",
      content: `
        <div class="solution-detail">
          <div class="solution-header">
            <div class="solution-icon">
              <i class="fas fa-robot"></i>
            </div>
            <h2>AI Predictive Analytics</h2>
          </div>
          <div class="solution-body">
            <p>Our AI-powered analytics platform provides predictive insights.</p>
            <h3>Key Features:</h3>
            <ul>
              <li>Yield prediction models</li>
              <li>Early disease detection</li>
              <li>Market trend analysis</li>
            </ul>
          </div>
        </div>
      `,
    },
  };

  learnMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const card = this.closest(".solution-card");
      const solutionType = card.getAttribute("data-target");

      modalContent.innerHTML = solutions[solutionType].content;
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

// ===== Solution END =====

// ===== Contact Form Handling START =====

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form-2025");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will contact you soon.");
      this.reset();
    });
  }

  function switchToLocation(location) {
    document.querySelectorAll(".map-iframe").forEach((iframe) => {
      iframe.classList.remove("active");
    });
    document
      .querySelector(`.map-iframe[data-location="${location}"]`)
      .classList.add("active");

    document.querySelectorAll(".map-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.location === location);
    });

    document.querySelectorAll(".location-card").forEach((card) => {
      card.classList.toggle("active", card.dataset.location === location);
    });
  }

  document.querySelectorAll(".location-card").forEach((card) => {
    card.addEventListener("click", () => {
      switchToLocation(card.dataset.location);
    });
  });

  document.querySelectorAll(".map-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      switchToLocation(btn.dataset.location);
    });
  });

  switchToLocation("dhaka");
});

// ===== Contact Form Handling END =====

// ===== Header Scroll Effect START =====

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ===== Header Scroll Effect END =====
