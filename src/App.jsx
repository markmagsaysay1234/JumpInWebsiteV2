import React, { useEffect, useState } from "react";
import logo from "./assets/logo-white.png";
import heroVisual from "./assets/hero-visual.webp";
import aboutImg from "./assets/about-img.webp";
import whoCrew from "./assets/who-crew-1.webp";
import whoLand from "./assets/who-crew-2.webp";
import whoCorp from "./assets/who-crew-3.webp";
import whoAdmin from "./assets/who-crew-4.webp";
import learningPerson from "./assets/learning-person.webp";
import talentImg from "./assets/talent-img-1.webp";
import talentImg2 from "./assets/talent-img-2.webp";
import learnImg from "./assets/learn-img.webp";
import progressScreen from "./assets/progress-screen.webp";
import dashboardLaptop from "./assets/dashboard-laptop.webp";
import demoBanner from "./assets/demo-banner.webp";

const GREEN = "#97A961";
const LOGIN_URL = "https://auth.jumplearning.com/Account/Login";

function Logo() {
  return <img src={logo} alt="JumpIn" className="jumpin-logo" />;
}

const featureCards = [
  ["bi-journal-bookmark", "Role-Based Access"],
  ["bi-files", "Multiple Types of Learning Content"],
  ["bi-phone", "Online, Offline and Mobile Access"],
  ["bi-check-circle", "Track Learning Progress"],
  ["bi-clipboard2-pulse", "Supports Training Deployment"],
];

const audiences = [
  [
    whoCrew,
    "bi-people",
    "Crew & Cadets",
    "Access learning relevant to your rank, vessel and role.",
  ],
  [
    whoLand,
    "bi-building",
    "Landbased Employees",
    "Access learning resources designed for landbased roles and functions.",
  ],
  [
    whoCorp,
    "bi-person",
    "Corporate Employees",
    "Complete assigned learning that supports your performance and professional growth.",
  ],
  [
    whoAdmin,
    "bi-briefcase",
    "L&D / Training Administrators",
    "Manage content, assign learning, and track progress across your organization.",
  ],
];

const learning = [
  [
    "bi-laptop",
    "E-Learning Courses",
    "Interactive courses you can learn at your own pace.",
  ],
  [
    "bi-file-text",
    "Articles",
    "Read expert articles on key topics and insights.",
  ],
  [
    "bi-book",
    "Case Studies",
    "Explore real-life examples and practical scenarios.",
  ],
  [
    "bi-bookshelf",
    "Reading Materials",
    "Access e-books, guides and reference reading.",
  ],
  [
    "bi-chat-dots",
    "Scenario-based Roleplays",
    "Practice real-world scenarios in a safe space.",
  ],
  [
    "bi-clipboard-check",
    "Job Aids & Quick Guides",
    "Quick references for on-the-job support.",
  ],
  [
    "bi-play-btn",
    "Videos & Multimedia",
    "Watch videos and multimedia resources.",
  ],
  [
    "bi-ui-checks",
    "Assessments & Quizzes",
    "Reinforce learning with quizzes and assessments.",
  ],
  [
    "bi-folder2-open",
    "Reference Materials",
    "Access manuals, templates, and reference docs.",
  ],
  [
    "bi-shield-check",
    "Policies & Procedures",
    "Stay up to date with company policies.",
  ],
];

const roleBased = [
  ["bi-people", "Job Family"],
  ["bi-building", "Department"],
  ["bi-compass", "Vessel Assignment"],
  ["bi-award", "Rank / Position"],
  ["bi-person-lines-fill", "Learner Group"],
];

const steps = [
  [
    "bi-box-arrow-in-right",
    "Log In",
    "Securely access JumpIn using your company credentials.",
  ],
  [
    "bi-clipboard-check",
    "Assigned Learning",
    "View personalized courses based on your role and requirements.",
  ],
  [
    "bi-play-btn",
    "Learn & Engage",
    "Access courses, readings, case studies or activities at your own pace.",
  ],
  [
    "bi-ui-checks",
    "Complete Tasks",
    "Complete required learning tasks and acknowledgements.",
  ],
  [
    "bi-bar-chart-line",
    "Track Progress",
    "Monitor completion status and learning progress.",
  ],
];

const managerList = [
  "View team learning progress",
  "Monitor completion and overdue items",
  "Identify training gaps",
  "Follow up and support your team",
  "Ensure training compliance",
  "Cert Expiration Monitoring",
];
const adminList = [
  "Upload and organize learning content",
  "Assign content to groups or individuals",
  "Track completion and participation",
  "Generate reports and dashboards",
  "Run learning campaigns and announcements",
  "Monitor fleet-wide training compliance",
];

function SectionTitle({ eyebrow, title, centered = false }) {
  return (
    <div
      className={
        centered ? "text-center section-title mx-auto" : "section-title"
      }
    >
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      <span className="title-line" />
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About JumpIn", href: "#about", id: "about" },
  {
    label: "Learning Content",
    href: "#learning-content",
    id: "learning-content",
  },
  {
    label: "Role-Based Learning",
    href: "#role-based-learning",
    id: "role-based-learning",
  },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Dashboards", href: "#dashboards", id: "dashboards" },
  { label: "Help Center", href: "#help-center", id: "help-center" },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showDemoModal, setShowDemoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.id);
          }
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="section-dots">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? "active" : ""}
            data-label={link.label}
          />
        ))}
      </div>

      <header className="topbar sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark container-xxl">
          <a className="navbar-brand" href="#">
            <Logo />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="nav" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto gap-xl-4">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn-green"
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Login to JumpIn
            </a>
          </div>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="container-xxl hero-inner">
          <div className="row">
            <div className="col-lg-6 hero-copy">
              <h1>
                Your Role-Based
                <br />
                Learning Management System
              </h1>
              <p>
                Access the learning you need, when you need it. E-learning
                courses, articles, case studies, reading materials and
                scenario-based roleplays — all in one place.
              </p>
              <div className="hero-icons">
                {[
                  "Role-Based Learning",
                  "Learn Anytime, Anywhere",
                  "Track Progress and Completion",
                  "Support Your Team’s Learning",
                ].map((x, i) => (
                  <div key={x}>
                    <i
                      className={`bi ${["bi-journal-bookmark", "bi-phone", "bi-graph-up-arrow", "bi-people"][i]}`}
                    ></i>
                    <span>{x}</span>
                  </div>
                ))}
              </div>
              <div className="d-flex gap-3 flex-wrap mb-5">
                <a
                  className="btn btn-green btn-lg"
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login to JumpIn
                </a>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg"
                  onClick={() => setShowDemoModal(true)}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="about" className="section about">
          <div className="container-xxl">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <img
                  className="rounded-img"
                  src={aboutImg}
                  alt="Crew learning on vessel"
                />
              </div>
              <div className="col-lg-7">
                <SectionTitle eyebrow="ABOUT JUMPIN" title="What is JumpIn?" />
                <p className="lead-text">
                  JumpIn is a digital learning platform that delivers role-based
                  learning to crew and employees. It brings together different
                  types of learning content in one organized space, making it
                  easier to access, learn, and complete training.
                </p>
                <div className="feature-grid five mt-4">
                  {featureCards.map(([icon, title]) => (
                    <div className="mini-card" key={title}>
                      <i className={`bi ${icon}`}></i>
                      <h6>{title}</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-xxl">
            <SectionTitle
              eyebrow="ABOUT JUMPIN"
              title="Who is JumpIn is for?"
            />
            <div className="row g-4 mt-2">
              {audiences.map(([img, icon, title, desc]) => (
                <div className="col-md-6 col-xl-3" key={title}>
                  <div className="aud-card">
                    <img src={img} />
                    <div className="aud-body">
                      <i className={`bi ${icon}`}></i>
                      <h5>{title}</h5>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="learning-content" className="section learning">
          <div className="container-xxl">
            <div className="row g-4 align-items-stretch">
              <div className="col-lg-3">
                <SectionTitle title="Learning Content Available" />
                <p>
                  JumpIn offers a variety of learning formats to support
                  different learning needs and preferences.
                </p>
                <a className="btn btn-blue mt-4">
                  <i className="bi bi-book me-2"></i>Explore Content Library
                </a>
              </div>
              {/* <div className="col-lg-2 d-none d-lg-block"><img className="learning-person" src={learningPerson}/></div> */}
              <div className="col-lg-9">
                <div className="content-grid">
                  {learning.map(([icon, title, desc]) => (
                    <div className="content-card" key={title}>
                      <i className={`bi ${icon}`}></i>
                      <h6>{title}</h6>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="role-based-learning" className="section role-section">
          <div className="container-xxl">
            <div className="row g-4 align-items-center">
              <div className="col-lg-9">
                <SectionTitle title="Role-Based Learning" />
                <p>
                  Content is organized and assigned based on your role, so you
                  get learning that is relevant and meaningful.
                </p>
                <div className="role-flow">
                  {roleBased.map(([icon, title], i) => (
                    <React.Fragment key={title}>
                      <div className="role-card">
                        <i className={`bi ${icon}`}></i>
                        <h6>{title}</h6>
                      </div>
                      {i < roleBased.length - 1 && (
                        <span className="arrow">›</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="benefits">
                  <h4>Benefits</h4>
                  {[
                    "Focus on what is important for your current role",
                    "Meet training requirements and company standards",
                    "Improve performance and confidence in your job",
                  ].map((x, i) => (
                    <p key={x}>
                      <i
                        className={`bi ${["bi-bullseye", "bi-clipboard-check", "bi-graph-up-arrow"][i]}`}
                      ></i>
                      {x}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section muted talent">
          <div className="container-xxl">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <SectionTitle title="Talent Decisions" />
                <p className="lead-text">
                  Make informed talent decisions with data-driven insights to
                  support profiling, behavioral assessments, technical
                  evaluations, and readiness for growth opportunities.
                </p>
                {[
                  "Profiling|Build comprehensive profiles to understand talent potential.",
                  "Behavioral Assessments|Gain insights into behaviors and workplace preferences.",
                  "Technical Assessments|Evaluate skills and technical competencies with confidence.",
                  "Readiness for Growth|Identify high-potential talent ready for future opportunities.",
                ].map((x, i) => {
                  const [a, b] = x.split("|");
                  return (
                    <div className="talent-row" key={a}>
                      <i
                        className={`bi ${["bi-person-lines-fill", "bi-heart-pulse", "bi-clipboard-check", "bi-graph-up-arrow"][i]}`}
                      ></i>
                      <h5>{a}</h5>
                      <p>{b}</p>
                    </div>
                  );
                })}
              </div>
              <div className="col-lg-5">
                <div id="talentCarousel" className="carousel slide rounded-img overflow-hidden" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#talentCarousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#talentCarousel" data-bs-slide-to="1"></button>
                  </div>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={talentImg} className="d-block w-100 talent-carousel-img" alt="Talent Decision 1" />
                    </div>

                    <div className="carousel-item">
                      <img src={talentImg2} className="d-block w-100 talent-carousel-img" alt="Talent Decision 2" />
                    </div>
                  </div>

                  <button className="carousel-control-prev" type="button" data-bs-target="#talentCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </button>

                  <button className="carousel-control-next" type="button" data-bs-target="#talentCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section">
          <div className="container-xxl">
            <SectionTitle title="How JumpIn Works" />
            <p className="lead-text w-lg-50">
              A simple learning journey designed to help you access, complete,
              and track your development activities in one platform.
            </p>
            <div className="step-grid">
              {steps.map(([icon, title, desc], i) => (
                <div className="step-card" key={title}>
                  <span>{i + 1}</span>
                  <i className={`bi ${icon}`}></i>
                  <h5>{title}</h5>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-xxl">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <img className="rounded-img" src={learnImg} />
              </div>
              <div className="col-lg-7">
                <SectionTitle title="Learn Anytime, Anywhere" />
                <p className="lead-text">
                  Access learning wherever you are—on desktop, mobile, or even
                  offline. Stay connected to your development anytime, anywhere.
                </p>
                <div className="feature-grid three mt-4">
                  {["Web Access", "Mobile Access", "Offline Learning"].map(
                    (x, i) => (
                      <div className="mini-card" key={x}>
                        <i
                          className={`bi ${["bi-display", "bi-phone", "bi-cloud-arrow-down"][i]}`}
                        ></i>
                        <h6>{x}</h6>
                        <p>
                          {
                            [
                              "Access JumpIn using your computer or laptop.",
                              "Learn on the go using your device.",
                              "Continue learning even without internet.*",
                            ][i]
                          }
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section learning-progress">
          <div className="container-xxl">
            <SectionTitle title="Track Your Learning Progress" />
            <p>
              See your learning status and stay on track. Monitor assignments,
              course completion, and your overall development progress in one
              place.
            </p>
            <div className="metric-grid">
              {[
                ["12", "Assigned", "bi-clipboard"],
                ["6", "In Progress", "bi-stopwatch"],
                ["8", "Completed", "bi-check-circle"],
                ["2", "Overdue", "bi-exclamation-circle"],
              ].map(([n, l, ic], i) => (
                <div
                  className={
                    "metric " +
                    (i === 1 ? "warning" : "") +
                    (i === 2 ? " success" : "") +
                    (i === 3 ? " danger" : "")
                  }
                  key={l}
                >
                  <i className={`bi ${ic}`}></i>
                  <b>{n}</b>
                  <span>{l}</span>
                </div>
              ))}
            </div>
            <img className="screen-img" src={progressScreen} />
          </div>
        </section>

        <section className="section pt-0">
          <div className="container-xxl">
            <div className="row g-4">
              <div className="col-lg-6">
                <FeaturePanel
                  title="For Managers & Supervisors"
                  icon="bi-people"
                  items={managerList}
                />
              </div>
              <div className="col-lg-6">
                <FeaturePanel
                  title="For Training Administrators & Principals"
                  icon="bi-person-gear"
                  items={adminList}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="dashboards" className="section dashboard">
          <div className="container-xxl">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <SectionTitle title="Dashboard and Reports" />
                <p className="lead-text">
                  Real-time data that helps you monitor, analyze, and improve
                  learning.
                </p>
                <div className="dash-metrics">
                  {[
                    "1,256|Total Learners",
                    "78%|Completion Rate",
                    "184|In Progress",
                    "27|Overdue",
                    "95%|Assessment Pass Rate",
                    "Reports|View and export learning reports",
                  ].map((x) => {
                    const [a, b] = x.split("|");
                    return (
                      <div>
                        <b>{a}</b>
                        <span>{b}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-lg-6">
                <img className="laptop-img" src={dashboardLaptop} />
              </div>
            </div>
            <div className="insight">
              <i className="bi bi-graph-up"></i> Make data-driven decisions with
              easy access to key learning insights and reports.
            </div>
          </div>
        </section>

        <section id="help-center" className="section pt-0">
          <div className="container-xxl">
            <div className="row g-4">
              <InfoColumn
                title="Featured Learning Areas"
                icon="bi-award"
                items={[
                  "Safety and Compliance",
                  "Technical and Functional",
                  "Behavioral Skills",
                  "Industry Focused Learning",
                  "Reference Materials",
                ]}
              />
              <InfoColumn
                title="Announcements"
                icon="bi-megaphone"
                items={[
                  "New Course — Bridge Maintenance Management",
                  "Learning Campaign — Safety First, Always",
                  "Important Bulletin & Communications",
                  "System Update",
                ]}
              />
              <InfoColumn
                title="Help and Support"
                icon="bi-headset"
                items={[
                  "How to log in",
                  "Accessing your courses",
                  "Using offline mode",
                  "Tracking your progress",
                  "FAQs",
                  "Contact Support",
                ]}
              />
            </div>
          </div>
        </section>

        <section className="container-xxl">
          <div className="cta cta-app">
            <div className="cta-copy">
              <span className="cta-line"></span>
              <div>
                <h3>Start Your Learning Journey Today</h3>
                <p>
                  Access your assigned training, complete your tasks, and grow every day
                  with JumpIn.
                </p>
              </div>
            </div>

            <div className="cta-actions">
              <button
                type="button"
                className="btn btn-green cta-btn"
                onClick={() => setShowDemoModal(true)}
              >
                Book a Demo
              </button>
              <a className="store-btn">
                <i className="bi bi-google-play"></i>
                <span>
                  GET IT ON
                  <b>Google Play</b>
                </span>
              </a>

              <a
                className="btn btn-green cta-btn"
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Login to JumpIn
                <i className="bi bi-arrow-right ms-2"></i>
              </a>
              <a className="store-btn">
                <i className="bi bi-apple"></i>
                <span>
                  Download on the
                  <b>App Store</b>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <DemoModal
        show={showDemoModal}
        onClose={() => setShowDemoModal(false)}
      />

      <Footer />
    </>
  );
}

function DemoModal({ show, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    companySize: "",
    preferredSchedule: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company or department is required.";
    }

    if (!formData.companySize) {
      newErrors.companySize = "Please select a company size.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    alert("Demo request submitted successfully!");
    onClose();
  };

  return (
    <div
      className="modal fade show d-block demo-modal demo-modal-backdrop"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content demo-modal-content border-0">
          <div className="row g-0">
            <div
              className="col-lg-5 demo-modal-left"
              style={{ backgroundImage: `url(${demoBanner})` }}
            >
              <Logo />
              <h3>Schedule a Demo</h3>
              <p>
                See how JumpIn can help streamline learning, training,
                compliance, and workforce development in one platform.
              </p>

              <div className="demo-modal-benefits">
                <div className="benefit-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Role-based learning access</span>
                </div>

                <div className="benefit-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Training progress monitoring</span>
                </div>

                <div className="benefit-item">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Dashboard and reporting tools</span>
                </div>
              </div>

              <div className="demo-security">
                <i className="bi bi-shield-lock-fill"></i>
                <div>
                  <strong>Your information is safe.</strong>
                  <p>
                    We respect your privacy and will only use your information
                    to contact you regarding your request.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 demo-modal-form">
              <div className="demo-modal-header">
                <div>
                  <h4 className="modal-title fw-bold">Book a Demo</h4>
                  <p>Tell us a few details and our team will get back to you.</p>
                </div>

                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name *</label>
                    <input
                      name="fullName"
                      type="text"
                      className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && (
                      <div className="invalid-feedback">{errors.fullName}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Business Email *</label>
                    <input
                      name="email"
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">
                      Company / Department *
                    </label>
                    <input
                      name="company"
                      type="text"
                      className={`form-control ${errors.company ? "is-invalid" : ""}`}
                      placeholder="Company or department"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    {errors.company && (
                      <div className="invalid-feedback">{errors.company}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      name="phone"
                      type="text"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Company Size *</label>
                    <select
                      name="companySize"
                      className={`form-select ${errors.companySize ? "is-invalid" : ""}`}
                      value={formData.companySize}
                      onChange={handleChange}
                    >
                      <option value="">Select company size</option>
                      <option>1 - 50</option>
                      <option>51 - 200</option>
                      <option>201 - 500</option>
                      <option>501 - 1,000</option>
                      <option>1,000+</option>
                    </select>
                    {errors.companySize && (
                      <div className="invalid-feedback">
                        {errors.companySize}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Preferred Schedule</label>
                    <input
                      name="preferredSchedule"
                      type="date"
                      className="form-control"
                      value={formData.preferredSchedule}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control"
                      placeholder="Tell us what you need or what you want to discuss"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <div className="demo-modal-actions mt-3 d-flex justify-content-end gap-3">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={onClose}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-green">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturePanel({ title, icon, items }) {
  return (
    <div className="feature-panel">
      <div className="panel-head">
        <i className={`bi ${icon}`}></i>
        <h3>{title}</h3>
      </div>
      <span className="title-line" />
      {items.map((x) => (
        <p className="check" key={x}>
          <i className="bi bi-check-circle-fill"></i>
          {x}
        </p>
      ))}
    </div>
  );
}
function InfoColumn({ title, icon, items }) {
  return (
    <div className="col-lg-4">
      <div className="info-col">
        <div className="panel-head">
          <i className={`bi ${icon}`}></i>
          <h3>{title}</h3>
        </div>

        <span className="title-line" />

        {items.map((x) => (
          <a key={x}>
            {x}
            <i className="bi bi-chevron-right"></i>
          </a>
        ))}

        {title === "Announcements" && (
          <a className="btn btn-green mt-4 w-100 d-flex justify-content-center align-items-center text-white">
            View All Announcements
          </a>
        )}
      </div>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <div className="container-xxl">
        <div className="row gy-5">
          <div className="col-lg-3">
            <Logo />
            <p className="mt-3">
              Your all-in-one workforce development platform for learning,
              performance, talent insights, and strategic growth.
            </p>
            <div className="social">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Quick Links</h4>
            {[
              "About JumpIn",
              "Learning Content",
              "Role-Based Learning",
              "How It Works",
              "Dashboards",
            ].map((x) => (
              <a>{x}</a>
            ))}
          </div>
          <div className="col-lg-3">
            <h4>Support</h4>
            {[
              "Help Center",
              "Contact Support",
              "System Status",
              "Submit a Ticket",
              "User Guides & FAQs",
            ].map((x) => (
              <a>{x}</a>
            ))}
          </div>
          <div className="col-lg-3">
            <h4>Contact Us</h4>
            <p>
              <i className="bi bi-telephone"></i> +63 2 8123 4587
            </p>
            <p>
              <i className="bi bi-envelope"></i> support@jumplearning.com
            </p>
            <p>
              <i className="bi bi-geo-alt"></i> 8th Flr. Magsaysay Building,
              Manila, Philippines
            </p>
            <div className="help-box">
              We’re here to help!
              <br />
              Monday - Friday
              <br />
              8:00 AM - 5:00 PM (PHT)
            </div>
          </div>
        </div>
        <div className="trust-row">
          <div>
            <i className="bi bi-shield-check"></i>
            <b>Your Privacy Matters</b>
            <span>Your data privacy and security are our top priorities.</span>
          </div>
          <div>
            <i className="bi bi-lock"></i>
            <b>Secure & Trusted</b>
            <span>We are committed to protecting your information.</span>
          </div>
          <div>
            <i className="bi bi-people"></i>
            <b>Built for Your Growth</b>
            <span>Empowering people and organizations to achieve more.</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JumpIn. All rights reserved.</span>
          <span>
            Privacy Policy&nbsp;&nbsp; | &nbsp;&nbsp;Terms of Use&nbsp;&nbsp; |
            &nbsp;&nbsp;Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
}

export default App;
