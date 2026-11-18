const jasvoUrl = "https://jasvo-ai.onrender.com";
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

// Keep the CTA styles separate from the existing site-wide design system.
const jasvoStylesheet = document.createElement("link");
jasvoStylesheet.rel = "stylesheet";
jasvoStylesheet.href = "/jasvo-cta.css";
document.head.appendChild(jasvoStylesheet);

// Upgrade the existing desktop navigation CTA without changing the contact section.
const navCta = document.querySelector(".nav-contact");
if (navCta) {
  navCta.href = jasvoUrl;
  navCta.target = "_blank";
  navCta.rel = "noopener noreferrer";
  navCta.setAttribute("aria-label", "Try JASVO AI beta (opens in a new tab)");
  navCta.innerHTML = '<span>Try JASVO AI</span><span class="jasvo-beta-label">BETA</span><span aria-hidden="true">↗</span>';
}

// Keep a compact JASVO entry point visible in the mobile header, even when
// the navigation menu is collapsed.
const header = document.querySelector(".site-header");
if (header && !header.querySelector(".jasvo-mobile-cta")) {
  const mobileCta = document.createElement("a");
  mobileCta.className = "jasvo-mobile-cta";
  mobileCta.href = jasvoUrl;
  mobileCta.target = "_blank";
  mobileCta.rel = "noopener noreferrer";
  mobileCta.setAttribute("aria-label", "Try JASVO AI beta (opens in a new tab)");
  mobileCta.innerHTML = '<span>Try JASVO AI</span><span class="jasvo-beta-label">BETA</span>';
  header.insertBefore(mobileCta, menuButton || null);
}

// Mobile navigation: toggle the menu and close it after an in-page selection.
if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !open);
  });

  navigation.querySelectorAll('a[href^="#"]').forEach((link) =>
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("is-open");
    })
  );
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
