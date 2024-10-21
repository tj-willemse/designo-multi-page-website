import "../styles/modern.css";
import "../styles/style.css";
import "../styles/components/index.css";
import "../styles/components/header.css";
import "../styles/components/about.css";
import "../styles/components/mobile-nav.css";
import "../styles/components/web-design.css";
import "../styles/components/app-design.css";
import "../styles/components/graphic-design.css";
import "../styles/components/location.css";
import "../styles/components/contact.css";
import "../styles/util.css";

// get elements
const mobileActiveButton = document.querySelector(".mobile-menu-icon");
const mobileInactiveButton = document.querySelector(".close-button");

const mobileNavMenu = document.querySelector(".mobile-nav");
const heroSection = document.querySelector(".hero");

const mapOne = document.getElementById("map");
// email section
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// error-icon-list
const nameError = document.getElementById("name-error-icon");
const emailError = document.getElementById("email-error-icon");
const phoneError = document.getElementById("phone-error-icon");
const messageError = document.getElementById("message-error-icon");

// create elements
const validCharacters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._-";

// functions

function checkEmptyFields() {
  let isEmpty = false;

  if (!nameInput.value.trim()) {
    nameError.style.display = "block";
    isEmpty = true;
  } else {
    nameError.style.display = "none";
  }

  if (!emailInput.value.trim()) {
    emailError.style.display = "block";
    isEmpty = true;
  } else {
    emailError.style.display = "none";
  }

  if (!phoneInput.value.trim()) {
    phoneError.style.display = "block";
    isEmpty = true;
  } else {
    phoneError.style.display = "none";
  }

  if (!messageInput.value.trim()) {
    messageError.style.display = "block";
    isEmpty = true;
  } else {
    messageError.style.display = "none";
  }

  return isEmpty;
}

function checkEmail() {
  const userEmail = emailInput.value.trim();
  const [localPart, domainPart] = userEmail.split("@");

  if (!userEmail.includes("@") || !localPart || !domainPart) {
    emailError.style.display = "block";

    return false;
  }

  const atSymbolCount = userEmail.split("@").length - 1;
  if (atSymbolCount !== 1) {
    return false;
  }

  for (let i = 0; i < localPart.length; i++) {
    const char = localPart[i];
    if (!validCharacters.includes(char)) {
      emailError.style.display = "block";

      return false;
    }
  }

  if (!isValidDomain(domainPart)) {
    emailError.style.display = "block";

    return false;
  }

  console.log("Valid email");
  return true;
}

function isValidDomain(domain) {
  if (!domain.includes(".")) {
    return false;
  }
  const domainParts = domain.split(".");

  for (const part of domainParts) {
    if (part.length < 1) {
      return false;
    }

    if (part.startsWith("-") || part.endsWith("-")) {
      return false;
    }
  }

  return true;
}

function mobileNavigation() {
  mobileNavMenu.style.display = " block";
  mobileActiveButton.style.display = "none";
  mobileInactiveButton.style.display = "block";
  heroSection.style.backgroundColor = "  rgba(0, 0, 0, 0.4)";
  mapOne.style.display = "none";
}
function mobileNavigationRemove() {
  mobileNavMenu.style.display = "none";
  mobileActiveButton.style.display = "block";
  mobileInactiveButton.style.display = "none";
  heroSection.style.backgroundColor = "  #e7816b";
}

// event listeners
mobileActiveButton.addEventListener("click", mobileNavigation);
mobileInactiveButton.addEventListener("click", mobileNavigationRemove);
document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.querySelector(
    ".contact-section-one-submit-button"
  );

  if (submitButton) {
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      const emptyFields = checkEmptyFields();
      const validEmail = checkEmail();

      if (!emptyFields && validEmail) {
        console.log("Form submitted successfully!");
      } else {
        console.log("Form submission failed.");
      }
    });
  } else {
    console.log("Submit button not found.");
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth >= 640) {
    mobileActiveButton.style.display = "none";
    mobileNavMenu.style.display = " none";
    heroSection.style.backgroundColor = "  #e7816b";
    mobileInactiveButton.style.display = "none";
  } else if (this.window.innerWidth <= 640) {
    mobileActiveButton.style.display = "block";
  }
});

// Maps
// Map 1
var map = L.map("map").setView([43.6456, -79.5881], 13);
var marker = L.marker([43.6456, -79.5881]).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Map 2
var map = L.map("map-two").setView([-31.641, 152.8319], 13);
var marker = L.marker([-31.641, 152.8319]).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Map 3
var map = L.map("map-three").setView([51.717, -3.8478], 13);
var marker = L.marker([51.717, -3.8478]).addTo(map);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);
