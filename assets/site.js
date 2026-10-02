"use strict";

document.getElementById("year").textContent = new Date().getFullYear();

const cvLinks = document.querySelectorAll('#cv-actions a');
cvLinks.forEach(link => link.addEventListener('click', event => {
  if (link.getAttribute('aria-disabled') === 'true') event.preventDefault();
}));

// Preserve buttons and the preview area while the real PDF is being supplied.
async function loadCV() {
  try {
    const response = await fetch("/Yuzhou_Wu_CV.pdf", { cache: "no-cache" });
    if (!response.ok) return;
    const bytes = new Uint8Array(await response.arrayBuffer());
    if (new TextDecoder().decode(bytes.slice(0, 5)) !== "%PDF-") return;
    cvLinks.forEach(link => link.removeAttribute('aria-disabled'));
    document.getElementById("cv-status").hidden = true;
    document.getElementById("cv-object").data = "/Yuzhou_Wu_CV.pdf#view=FitH";
    document.getElementById("cv-object").hidden = false;
    document.getElementById("cv-placeholder").hidden = true;
  } catch {
    // Keep the email fallback when offline or when the PDF is absent.
  }
}
loadCV();

if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll("nav a")];
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-10% 0px -55% 0px", threshold: 0 });
  document.querySelectorAll("main section").forEach(section => observer.observe(section));
}
