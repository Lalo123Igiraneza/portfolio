/*
  PORTFOLIO CONFIGURATION: edit only this CONFIG block.
  - email / phone: replace with your real details (an empty phone or linkedin is simply hidden).
  - screenshots: put the image files in the "assets" folder with the exact names below.
  - github: repository links. Create each repository with the same name, or edit the link.
*/
const GITHUB_USER = "https://github.com/Lalo123Igiraneza";
const CONFIG = {
  name: "IGIRANEZA Lachaï-Roï",
  email: "lachairoiigiraneza9@gmail.com",
  phone: "+257 62 38 63 48",
  github: GITHUB_USER,
  linkedin: "",                      // <-- optional, hidden while empty
  projects: {
    hallelujah: {
      title: "HALLELUAH",
      subtitle: "Hotel Management System · C# / MySQL",
      description: "A desktop application that helps a hotel manage rooms, reservations and guests in one place, with a separate dashboard for each user role.",
      features: [
        "Room management and reservations",
        "Role-based dashboards",
        "Internal staff messaging",
        "PDF and CSV exports",
        "MySQL database with UML-documented design"
      ],
      technologies: ["C#", "Windows Forms", "MySQL"],
      github: "", // add later: GITHUB_USER + "/halleluah-hotel-management"
      screenshots: [
        { src: "assets/HALLELUAH_dashboard.png", caption: "Dashboard" },
        { src: "assets/HALLELUAH_reservations.png", caption: "Reservations" },
        { src: "assets/HALLELUAH_messaging.png", caption: "Messaging" }
      ]
    },
    kena: {
      title: "Kora Material Hub",
      subtitle: "StockFlow / KENA · React / Redux / MongoDB",
      description: "A web application for tracking raw materials in a warehouse, with stock overview, charts and downloadable reports in Burundian francs (FBU).",
      features: [
        "Admin, Manager and Employee permissions",
        "Materials catalogue and stock tracking",
        "Dashboard charts (Recharts)",
        "PDF and Excel reports",
        "MongoDB Atlas backend"
      ],
      technologies: ["React", "Vite", "Redux Toolkit", "Tailwind CSS", "MongoDB"],
      github: "", // add later: GITHUB_USER + "/kena-app"
      screenshots: [
        { src: "assets/KENA_dashboard.png", caption: "Dashboard" },
        { src: "assets/KENA_products.png", caption: "Products" },
        { src: "assets/KENA_reports.png", caption: "Reports" }
      ]
    },
    hospital: {
      title: "Hospital Management System",
      subtitle: "Healthcare Administration UI · React / TypeScript / gRPC",
      description: "A web interface for hospital staff to follow patient records and daily operations, built with typed React components that talk to the backend over gRPC.",
      features: [
        "Dashboard overview",
        "Patient records",
        "Typed data models with TypeScript",
        "gRPC communication with the backend",
        "Reusable UI components"
      ],
      technologies: ["React", "TypeScript", "gRPC"],
      github: "", // add later: GITHUB_USER + "/hospital-management-system"
      screenshots: [
        { src: "assets/HOSPITAL_dashboard.png", caption: "Dashboard" },
        { src: "assets/HOSPITAL_records.png", caption: "Patient records" }
      ]
    }
  }
};

// Apply the contact configuration in one place.
document.title = `${CONFIG.name} | Full-Stack Developer Portfolio`;
document.querySelectorAll(".brand").forEach(el => {
  // The brand mark stays unchanged; the editable name appears in the hero code illustration.
});
const emailLink = document.getElementById("emailLink");
emailLink.href = `mailto:${CONFIG.email}`;
const copyButton = document.getElementById("copyEmail");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    showToast("Email copied");
  } catch {
    showToast(`Email: ${CONFIG.email}`);
  }
});
document.getElementById("githubLink").href = CONFIG.github;
const linkedinLink = document.getElementById("linkedinLink");
if (CONFIG.linkedin) { linkedinLink.href = CONFIG.linkedin; linkedinLink.hidden = false; }
const phoneLink = document.getElementById("phoneLink");
if (CONFIG.phone) {
  phoneLink.href = "tel:" + CONFIG.phone.replace(/[^+\d]/g, "");
  phoneLink.textContent = CONFIG.phone;
  phoneLink.hidden = false;
}
const heroName = document.getElementById("heroName");
if (heroName) heroName.textContent = CONFIG.name;
document.querySelectorAll("[data-repo]").forEach(a => {
  const project = CONFIG.projects[a.dataset.repo];
  if (project && project.github) a.href = project.github; else a.hidden = true;
});

const modalBackdrop = document.getElementById("projectModal");
const closeModal = () => {
  modalBackdrop.classList.remove("open");
  modalBackdrop.setAttribute("aria-hidden", "true");
};
document.querySelectorAll(".project-details").forEach(button => {
  button.addEventListener("click", () => {
    const project = CONFIG.projects[button.dataset.project];
    if (!project) return;
    document.getElementById("modalEyebrow").textContent = "PROJECT CASE STUDY";
    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalSubtitle").textContent = project.subtitle;
    document.getElementById("modalDescription").textContent = project.description;
    const featureList = document.getElementById("modalFeatures");
    featureList.replaceChildren();
    project.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      featureList.appendChild(li);
    });
    const tags = document.getElementById("modalTags");
    tags.replaceChildren();
    project.technologies.forEach(tech => {
      const span = document.createElement("span");
      span.textContent = tech;
      tags.appendChild(span);
    });
    const gallery = document.getElementById("modalGallery");
    gallery.replaceChildren();
    (project.screenshots || []).forEach(shot => {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
      img.src = shot.src;
      img.alt = `${project.title} - ${shot.caption}`;
      img.loading = "lazy";
      img.addEventListener("error", () => fig.remove());
      const cap = document.createElement("figcaption");
      cap.textContent = shot.caption;
      const link = document.createElement("a");
      link.href = shot.src;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.append(img);
      fig.append(link, cap);
      gallery.appendChild(fig);
    });
    const modalGithub = document.getElementById("modalGithub");
    modalGithub.hidden = !project.github;
    if (project.github) modalGithub.href = project.github;
    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.getElementById("modalClose").focus();
  });
});
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalDone").addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 2400);
}
