// Global variables
let currentLang = localStorage.getItem("lang") || "en";
let currentTheme = localStorage.getItem("theme") || "dark";

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initializeTheme();
  initializeLanguage();
  initializeNavbar();
  initializeDigitalBackground();
  initializeSkills();
  initializeProjects();
  initializeStats();
  initializeForms();
  initializeFilters();
  initializeAnimations();
  initializeScrollToTop();
});

const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");
const maxLength = messageInput.getAttribute("maxlength");

messageInput.addEventListener("input", () => {
  const length = messageInput.value.length;
  charCount.textContent = `${length} / ${maxLength}`;

  // لو وصل الحد الأقصى خليه باللون الأحمر
  if (length >= maxLength) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "";
  }
});
// Theme Management
function initializeTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("theme", currentTheme);
  updateThemeIcon();
}

// Utility Functions
function openContactModal() {
  const modal = new bootstrap.Modal(document.getElementById("contactModal"));
  modal.show();
}

function updateThemeIcon() {
  const icon = document.querySelector("#themeToggle i");
  icon.className = currentTheme === "light" ? "fas fa-moon" : "fas fa-sun";
}

document.getElementById("themeToggle").addEventListener("click", toggleTheme);

// Digital Background Management
function initializeDigitalBackground() {
  // Background is now static - no moving elements
  console.log("Static background initialized");
}

// Language Management
function initializeLanguage() {
  updateLanguage();
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function toggleLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update active language button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  updateLanguage();
}

function updateLanguage() {
  // للعناصر النصية العادية
  document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
    const text = currentLang === "ar" ? element.dataset.ar : element.dataset.en;
    element.textContent = text;
  });

  // لعناصر الإدخال (input / textarea)
  document
    .querySelectorAll("[data-en-placeholder][data-ar-placeholder]")
    .forEach((element) => {
      element.placeholder =
        currentLang === "ar"
          ? element.dataset.arPlaceholder
          : element.dataset.enPlaceholder;
    });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => toggleLanguage(btn.dataset.lang));
});

// Navbar Scroll Effect
function initializeNavbar() {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Scroll to Top Button
function initializeScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("visible");
    } else {
      scrollToTopBtn.classList.remove("visible");
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Smooth Scrolling
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth",
  });
}

// Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Animations
function initializeAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  document
    .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
    .forEach((el) => {
      observer.observe(el);
    });
}

// Skills Data and Initialization
const skillsData = [
  {
    name: "HTML5",
    icon: "fab fa-html5",
    category: "frontend",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    category: "frontend",
  },
  {
    name: "SCSS",
    icon: "fab fa-sass",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: "fas fa-code",
    category: "frontend",
  },
  {
    name: "Angular",
    icon: "fab fa-angular",
    category: "frontend",
  },
  {
    name: "Ng-Bootstrap",
    icon: "fas fa-cube",
    category: "frontend",
  },
  {
    name: "Tailwind",
    icon: "fas fa-wind",
    category: "frontend",
  },
  {
    name: "RxJS",
    icon: "fas fa-random",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: "fab fa-bootstrap",
    category: "frontend",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    category: "tools",
  },
  {
    name: "GitHub",
    icon: "fab fa-github",
    category: "tools",
  },
  {
    name: "Azure",
    icon: "fab fa-microsoft",
    category: "cloud",
  },
  {
    name: "Firebase",
    icon: "fas fa-fire",
    category: "cloud",
  },
  {
    name: "Docker",
    icon: "fab fa-docker",
    category: "tools",
  },
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    category: "backend",
  },
  {
    name: "Express",
    icon: "fas fa-server",
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
    category: "database",
  },
  {
    name: "PHP",
    icon: "fab fa-php",
    category: "backend",
  },
  {
    name: "Networking",
    icon: "fas fa-network-wired",
    category: "other",
  },
  {
    name: "Problem Solving",
    icon: "fas fa-puzzle-piece",
    category: "soft",
  },
];

function initializeSkills() {
  const skillsGrid = document.getElementById("skillsGrid");

  if (!skillsGrid) {
    console.error("Skills grid not found");
    return;
  }

  skillsData.forEach((skill, index) => {
    const skillElement = document.createElement("div");
    skillElement.className = "col-lg-3 col-md-4 col-sm-6 fade-in";
    skillElement.style.animationDelay = `${index * 0.1}s`;

    skillElement.innerHTML = `
      <div class="skill-item">
        <div class="skill-icon">
          <i class="${skill.icon}"></i>
        </div>
        <h6>${skill.name}</h6>
      </div>
    `;

    skillsGrid.appendChild(skillElement);
  });
}

// Projects Data and Initialization
const projectsData = [
  {
    id: 1,
    name: "CareerOfficer",
    nameAr: "مشروع كرير اوفسير",
    type: "Heavy",
    category: "fullstack",
    description: "Comprehensive career management platform",
    descriptionAr: "منصة شاملة لإدارة المسار المهني",
    tags: ["Angular", "Node.js", "MongoDB", "Azure"],
    icon: "fas fa-briefcase",
    features: ["User Management", "Career Tracking", "Analytics Dashboard"],
    tech: ["Angular 15", "Node.js", "Express", "MongoDB", "Azure DevOps"],
  },
  {
    id: 2,
    name: "Tartibat",
    nameAr: "ترتيبات",
    type: "Heavy",
    category: "fullstack",
    description: "Company management system",
    descriptionAr: "نظام إدارة شركات",
    tags: ["Angular", "PHP", "MySQL", "Bootstrap"],
    icon: "fas fa-building",
    features: [
      "Company Registration",
      "Document Management",
      "Workflow Automation",
    ],
    tech: ["Angular 14", "PHP 8", "MySQL", "Bootstrap 5"],
  },
  {
    id: 3,
    name: "Qurani",
    nameAr: "مشروع قرآني",
    type: "Heavy",
    category: "frontend",
    description: "Quranic learning platform",
    descriptionAr: "منصة تعلم القرآن الكريم",
    tags: ["Angular", "TypeScript", "SCSS", "PWA"],
    icon: "fas fa-book-open",
    features: ["Quran Reading", "Audio Recitation", "Progress Tracking"],
    tech: ["Angular 16", "TypeScript", "SCSS", "Service Worker"],
  },
  {
    id: 4,
    name: "Travel Egypt Vacation",
    nameAr: "رحلات مصر",
    type: "Heavy",
    category: "fullstack",
    description: "Tourism booking platform",
    descriptionAr: "منصة حجز سياحي",
    tags: ["Angular", "Node.js", "Stripe", "Maps API"],
    icon: "fas fa-plane",
    features: ["Trip Booking", "Payment Integration", "Interactive Maps"],
    tech: ["Angular 15", "Node.js", "Stripe API", "Google Maps API"],
  },
  {
    id: 5,
    name: "SummaryCamp",
    nameAr: "مخيم الملخصات",
    type: "Small",
    category: "fullstack",
    description: "Educational content summarization",
    descriptionAr: "تلخيص المحتوى التعليمي",
    tags: ["Angular", "AI/ML", "Node.js", "NLP"],
    icon: "fas fa-file-alt",
    features: ["Content Analysis", "AI Summarization", "User Dashboard"],
    tech: [
      "Angular 16",
      "Node.js",
      "OpenAI API",
      "Natural Language Processing",
    ],
  },
  {
    id: 6,
    name: "Dajen ERP",
    nameAr: "داجن",
    type: "Heavy",
    category: "fullstack",
    description: "Complete ERP system",
    descriptionAr: "نظام تخطيط موارد المؤسسة",
    tags: ["Angular", "Node.js", "PostgreSQL", "Docker"],
    icon: "fas fa-chart-pie",
    features: ["HR Management", "Sales", "Inventory", "Financial Reports"],
    tech: ["Angular 17", "Node.js", "PostgreSQL", "Docker", "Redis"],
  },
  {
    id: 7,
    name: "Teacher Portfolio",
    nameAr: "بورتفوليو المعلم",
    type: "Small",
    category: "frontend",
    description: "Educational portfolio website",
    descriptionAr: "موقع بورتفوليو تعليمي",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    icon: "fas fa-chalkboard-teacher",
    features: ["Responsive Design", "Course Showcase", "Contact Form"],
    tech: ["HTML5", "CSS3", "JavaScript ES6", "Bootstrap 5"],
  },
  {
    id: 8,
    name: "StoryStore",
    nameAr: "متجر القصص",
    type: "Small",
    category: "frontend",
    description: "Children stories marketplace",
    descriptionAr: "متجر قصص الأطفال",
    tags: ["Angular", "TypeScript", "SCSS", "Animations"],
    icon: "fas fa-book",
    features: ["Story Catalog", "Interactive Reading", "Purchase System"],
    tech: ["Angular 15", "TypeScript", "SCSS", "Angular Animations"],
  },
  {
    id: 9,
    name: "Clinic Management",
    nameAr: "إدارة العيادة",
    type: "Heavy",
    category: "fullstack",
    description: "Medical clinic management (In Progress)",
    descriptionAr: "إدارة العيادات الطبية (قيد العمل)",
    tags: ["Angular", "Node.js", "MongoDB", "Socket.io"],
    icon: "fas fa-stethoscope",
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "Real-time Updates",
    ],
    tech: ["Angular 17", "Node.js", "MongoDB", "Socket.io"],
  },
];

function initializeProjects() {
  const projectsGrid = document.getElementById("projectsGrid");

  if (!projectsGrid) {
    console.error("Projects grid not found");
    return;
  }

  // Clear existing content
  projectsGrid.innerHTML = "";

  projectsData.forEach((project, index) => {
    const projectElement = document.createElement("div");
    projectElement.className = `col-lg-4 col-md-6 mb-4 project-item fade-in`;
    projectElement.dataset.category = project.category;
    projectElement.dataset.type = project.type.toLowerCase();
    projectElement.style.animationDelay = `${index * 0.1}s`;
    projectElement.style.display = "block"; // Always show initially
    projectElement.style.opacity = "1";
    projectElement.style.transform = "translateY(0)";

    const projectName = currentLang === "ar" ? project.nameAr : project.name;
    const projectDesc =
      currentLang === "ar" ? project.descriptionAr : project.description;

    projectElement.innerHTML = `
                    <div class="project-card">
                        <div class="project-image">
                            <i class="${project.icon}"></i>
                        </div>
                        <div class="project-content">
                            <span class="project-type">${project.type}</span>
                            <h5>${projectName}</h5>
                            <p>${projectDesc}</p>
                            <div class="project-tags">
                                ${project.tags
                                  .map(
                                    (tag) => `<span class="tag">${tag}</span>`
                                  )
                                  .join("")}
                            </div>
                            <button class="btn btn-outline mt-3" onclick="showProjectDetails(${
                              project.id
                            })">
                                ${
                                  currentLang === "ar"
                                    ? "عرض التفاصيل"
                                    : "View Details"
                                }
                            </button>
                        </div>
                    </div>
                `;

    projectsGrid.appendChild(projectElement);
  });

  // Apply current filter after initialization
  const activeFilter = document.querySelector(".filter-btn.active");
  if (activeFilter) {
    filterProjects(activeFilter.dataset.filter);
  }
}

function showProjectDetails(projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  const modal = new bootstrap.Modal(document.getElementById("projectModal"));
  const title = document.getElementById("projectModalTitle");
  const body = document.getElementById("projectModalBody");

  const projectName = currentLang === "ar" ? project.nameAr : project.name;
  const projectDesc =
    currentLang === "ar" ? project.descriptionAr : project.description;

  title.textContent = projectName;
  body.innerHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <div class="project-image mb-3" style="height: 300px; border-radius: 15px;">
                            <i class="${
                              project.icon
                            }" style="font-size: 4rem;"></i>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h4>${projectName}</h4>
                        <p class="lead">${projectDesc}</p>
                        <h6>${
                          currentLang === "ar" ? "الميزات:" : "Features:"
                        }</h6>
                        <ul>
                            ${project.features
                              .map((feature) => `<li>${feature}</li>`)
                              .join("")}
                        </ul>
                        <h6>${
                          currentLang === "ar"
                            ? "التقنيات المستخدمة:"
                            : "Technologies:"
                        }</h6>
                        <div class="project-tags">
                            ${project.tech
                              .map((tech) => `<span class="tag">${tech}</span>`)
                              .join("")}
                        </div>
                        <div class="mt-4">
                            <button class="btn btn-primary me-2" onclick="window.open('#', '_blank')">
                                ${
                                  currentLang === "ar"
                                    ? "عرض مباشر"
                                    : "Live Demo"
                                }
                            </button>
                            <button class="btn btn-outline" onclick="window.open('#', '_blank')">
                                ${
                                  currentLang === "ar"
                                    ? "الكود المصدري"
                                    : "Source Code"
                                }
                            </button>
                        </div>
                    </div>
                </div>
            `;

  modal.show();
}

// Project Filters
function initializeFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active filter
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;
      filterProjects(filter);
    });
  });
}

function filterProjects(filter) {
  const projects = document.querySelectorAll(".project-item");

  projects.forEach((project, index) => {
    const category = project.dataset.category;
    const type = project.dataset.type;

    let show = false;

    if (filter === "all") {
      show = true;
    } else if (filter === "heavy" || filter === "small") {
      show = type === filter;
    } else {
      show = category === filter;
    }

    if (show) {
      project.style.display = "block";
      project.style.opacity = "1";
      project.style.transform = "translateY(0)";
    } else {
      project.style.display = "none";
      project.style.opacity = "0";
      project.style.transform = "translateY(20px)";
    }
  });
}

// Stats Counter Animation
function initializeStats() {
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target.querySelector(".stat-number");
        const target = parseInt(counter.dataset.count);
        animateCounter(counter, target);
      }
    });
  });

  document.querySelectorAll(".stat-item").forEach((item) => {
    statsObserver.observe(item);
  });
}

function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 20);
}

// Forms
function initializeForms() {
  const forms = ["contactForm", "modalContactForm"];

  forms.forEach((formId) => {
    const form = document.getElementById(formId);
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        handleFormSubmission(this);
      });
    }
  });
}

function handleFormSubmission(form) {
  const name = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const message = form.querySelector("#message").value;
  const phone = form.querySelector("#phone").value;
  const subject = form.querySelector("#subject").value;

  const phoneNumber = "201092225678";
  const whatsappMessage = `مرحبا، اسمي ${name}%0Aالبريد: ${email}%0Aالهاتف: ${phone}%0Aالموضوع: ${subject}%0Aالرسالة: ${message}`;

  // زر الإرسال
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent =
    currentLang === "ar" ? "جاري الإرسال..." : "Sending...";
  submitBtn.disabled = true;

  // محاكاة إرسال (زي API call)
  setTimeout(() => {
    // فتح واتساب
    window.open(
      `https://wa.me/${phoneNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    // Alert نجاح
    alert(
      currentLang === "ar"
        ? "تم إرسال الرسالة بنجاح!"
        : "Message sent successfully!"
    );

    // Reset form
    form.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;

    // إغلاق المودال لو هو مودال
    if (form.id === "modalContactForm") {
      bootstrap.Modal.getInstance(
        document.getElementById("contactModal")
      ).hide();
    }
  }, 2000);
}

function startConversation() {
  const modal = new bootstrap.Modal(
    document.getElementById("contactOptionsModal")
  );
  modal.show();
}

function openWhatsApp() {
  const message =
    currentLang === "ar"
      ? "مرحباً أسامة، أود مناقشة مشروع معك. رأيت موقعك الإلكتروني وأعجبت بأعمالك!"
      : "Hello Osama, I would like to discuss a project with you. I saw your website and I'm impressed with your work!";

  window.open(
    `https://wa.me/+201092225678?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );

  // Close the modal
  bootstrap.Modal.getInstance(
    document.getElementById("contactOptionsModal")
  ).hide();
}

function openEmailClient() {
  const subject =
    currentLang === "ar"
      ? "استفسار حول مشروع جديد"
      : "Inquiry about a new project";

  const body =
    currentLang === "ar"
      ? "مرحباً أسامة،\n\nأود مناقشة مشروع جديد معك. رأيت موقعك الإلكتروني وأعجبت بخبرتك ومهاراتك.\n\nتفاصيل المشروع:\n- نوع المشروع: \n- الميزانية المتوقعة: \n- الجدول الزمني: \n- متطلبات خاصة: \n\nأتطلع لسماع ردك.\n\nمع أطيب التحيات"
      : "Hello Osama,\n\nI would like to discuss a new project with you. I saw your website and I'm impressed with your expertise and skills.\n\nProject Details:\n- Project Type: \n- Expected Budget: \n- Timeline: \n- Special Requirements: \n\nLooking forward to hearing from you.\n\nBest regards";

  window.open(
    `mailto:osamaromih2020@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`,
    "_blank",
    "noopener,noreferrer"
  );

  // Close the modal
  bootstrap.Modal.getInstance(
    document.getElementById("contactOptionsModal")
  ).hide();
}

function openContactForm() {
  // Close the contact options modal
  bootstrap.Modal.getInstance(
    document.getElementById("contactOptionsModal")
  ).hide();

  // Wait for the first modal to close, then open the contact form modal
  setTimeout(() => {
    const modal = new bootstrap.Modal(document.getElementById("contactModal"));
    modal.show();
  }, 300);
}

function downloadCV() {
  const cvPath = "assets/Osama_Romih_CV.pdf"; // مسار ملفك داخل assets
  const a = document.createElement("a");
  a.href = cvPath;
  a.download = "Osama_Romih_CV.pdf"; // الاسم اللي هينزل بيه
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Parallax Effect
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero::before");
  if (parallax) {
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
  }
});

// Refresh projects and skills when language changes
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      // Store current active filter
      const activeFilter = document.querySelector(".filter-btn.active");
      const currentFilter = activeFilter ? activeFilter.dataset.filter : "all";

      // Clear and reinitialize projects
      document.getElementById("projectsGrid").innerHTML = "";
      initializeProjects();

      // Reapply the filter
      filterProjects(currentFilter);
    }, 100);
  });
});
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9841db2f725e83cc',t:'MTc1ODcxMjQ0NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
