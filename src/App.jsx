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
const CSOD_URL = "https://magsaysaylearn.csod.com/";
const GOOGLE_URL = "https://play.google.com/store/apps/details?id=com.magsaysay.jumpincms&hl=en";
const APPSTORE_URL = "https://apps.apple.com/ph/app/jumpin-crew/id6747400196";
const FB_URL = "https://www.facebook.com/JumpInLearning";
const YT_URL = "https://www.youtube.com/@JumpInLearning";

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
  // { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
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


const infoColumns = [
  {
    title: "Featured Learning Areas",
    icon: "bi-award",
    items: [
      {
        title: "Safety and Compliance",
        icon: "bi-shield-check",
        description:
          "Browse mandatory safety training, company compliance programs, and regulatory learning resources designed to help learners stay aligned with organizational and industry requirements."
      },
      {
        title: "Technical and Functional",
        icon: "bi-tools",
        description:
          "Explore job-specific technical and functional learning materials that support day-to-day responsibilities, operational knowledge, and role-based competency development.",
      },
      {
        title: "Behavioral Skills",
        icon: "bi-people",
        description:
          "Develop practical workplace skills such as communication, teamwork, leadership, customer service, accountability, and professional effectiveness.",
      },
      {
        title: "Industry Focused Learning",
        icon: "bi-compass",
        description:
          "Access learning areas tailored to maritime, corporate, and operational environments so learners can stay updated on industry practices and expectations."
      },
      {
        title: "Reference Materials",
        icon: "bi-folder2-open",
        description:
          "Find manuals, SOPs, quick guides, templates, policies, and other reference materials that learners can revisit whenever they need support."
      },
    ],
  },
  {
    title: "Announcements",
    icon: "bi-megaphone",
    items: [
      {
        title: "New Course — Bridge Maintenance Management",
        icon: "bi-journal-plus",
        description:
          "A new learning course is available to help learners understand bridge maintenance practices, safety reminders, and operational expectations.",
        date: "New course available"
      },
      {
        title: "Learning Campaign — Safety First, Always",
        icon: "bi-broadcast",
        description:
          "A learning campaign focused on safety awareness, safe work behavior, and continuous compliance with safety standards across the organization.",
        date: "Learning campaign"
      },
      {
        title: "Important Bulletin & Communications",
        icon: "bi-file-earmark-text",
        description:
          "Important bulletins and official communications can be published in JumpIn to keep learners informed and aligned with company updates.",
        date: "Important update"
      },
      {
        title: "System Update",
        icon: "bi-cloud-arrow-up",
        description:
          "System updates, maintenance notices, and platform reminders can be posted to inform users of upcoming changes or temporary service windows.",
        date: "Platform notice"
      },
    ],
  },
  {
    title: "Help and Support",
    icon: "bi-headset",
    items: [
      {
        title: "Accessing your courses",
        icon: "bi-book",
        description:
          "Get guidance on where to find assigned courses, learning paths, reference materials, and content available based on your role or group."
      },
      {
        title: "Using offline mode",
        icon: "bi-cloud-arrow-down",
        description:
          "Learn how selected content can be accessed offline so learners can continue their development even with limited or unstable internet connection."
      },
      {
        title: "Tracking your progress",
        icon: "bi-graph-up-arrow",
        description:
          "Understand how to monitor assigned, in-progress, completed, and overdue learning activities using progress screens and dashboards."
      },
      {
        title: "FAQs",
        icon: "bi-question-circle",
        description:
          "Find quick answers to common questions about login access, assigned learning, course completion, certificates, and platform navigation."
      },
      {
        title: "Contact Support",
        icon: "bi-envelope",
        description:
          "Reach out to the support team for assistance with access issues, course concerns, technical problems, or questions about your learning activities."
      },
    ],
  },
];



const legalPolicies = {
  "privacy": {
    "eyebrow": "Privacy Policy",
    "title": "Privacy Policy",
    "intro": "JumpIn is committed to maintaining the privacy of users who access our Web site (the \"Site\"). This Privacy Policy Statement (the \"Privacy Policy\") explains the types of information we gather and what we do with it. By using the Site, you agree to the terms and policies described in this Privacy Policy.",
    "sections": [
      {
        "heading": "Information Collected on the Site",
        "paragraphs": [
          "JumpIn does not request or require any information from anonymous visitors to the Site. We collect personal information only from those users who have registered on the Site (\"Registered Users\") and who wish to apply for the available jobs on the Site. Personal information means information about an identifiable individual and may include your name, address, telephone, e-mail address, and employment-related information, such as may be found on a resume or job application. Personal information does not include business contact information (e.g. office address, telephone number) in those jurisdictions which do not recognize such information as being personal information. You are responsible for maintaining the confidentiality of any User id which may be assigned to you, as well as any account number, account name, or passwords, if applicable, for the services you utilize through the Site.",
          "JumpIn needs the information Registered Users supply for (a) personal identification, (b) to allow us to contact you for service(s) or opportunities as requested by you, such as customer service or information about a job opportunity if you have submitted a resume on-line, (c) to make improvements to materials or products offered on the Site and to the Site in general, and (d) to enable Registered Users to access the functionalities described on the Site, including without limitation, applying for employment, and obtaining other user-specific information. Your e-mail address is collected to send you an e-mail message confirming your new member registration as well as confirmations for other services you transact with JumpIn. In addition, we may use such information (i) for demographic profiling, ad targeting, statistical analysis, to conduct surveys and similar marketing activities; (ii) to investigate violations of either its Privacy Policy or its \"Terms of Use\"; and (iii) to notify Registered Users about important changes to the Site or promotions or opportunities You may always decline to receive these messages by following the process to opt out as described below or as described within a particular message.",
          "We will deactivate accounts of Registered Users that have been inactive for an extended period of time. Registered Users may access and change their information at any time via the Site as described in Section 7 below."
        ]
      },
      {
        "heading": "Use of Cookies and Log Files",
        "paragraphs": [
          "The Site does not use persistent or stored cookies; however, it does use temporary or per-session cookies. Temporary or per-session cookies act as a randomly generated session ID; they last only while the Registered User is logged onto the Web site, and are cancelled at the end of the session (i.e., the Registered User logs out of the Site or closes their Web browser program). The Site uses temporary cookies for security purposes. Each time a Registered User logs onto the Site, the Site server generates a temporary session ID, which it associates with the user's login name, password and computer during that particular session. This allows the Registered User to move from page to page in the Site during a specific session, without having to re-enter the user login name and/or password. The temporary cookie allows the Site server to continuously verify that the user is a permitted user as the user moves from page to page during a specific session. When the Registered User logs out of the Site, the temporary session ID is cancelled, and is removed from the temporary memory of the user's computer; and the association in the Site server between the temporary session ID and the specific user login name and password is also terminated.",
          "We also use log files for anonymous site usage analysis. A \"log file\" is a data file that records a Registered User's activity while using the Site."
        ]
      },
      {
        "heading": "Personal Information",
        "paragraphs": [
          "Personal information collected through this website shall at all times be considered confidential.",
          "The processing of personal information shall be allowed, subject to compliance with the requirements of this Republic Act No. 10173 and other laws allowing disclosure of information to the public and adherence to the principles of transparency, legitimate purpose and proportionality.",
          "Personal information shall be: (a) Collected for specified and legitimate purposes determined and declared before, or as soon as reasonably practicable after collection, and later processed in a way compatible with such declared, specified and legitimate purposes only; (b) Processed fairly and lawfully; (c) Accurate, relevant and, where necessary for purposes for which it is to be used the processing of personal information, kept up to date; inaccurate or incomplete data must be rectified, supplemented, destroyed or their further processing restricted; (d) Adequate and not excessive in relation to the purposes for which they are collected and processed; (e) Retained only for as long as necessary for the fulfilment of the purposes for which the data was obtained or for the establishment, exercise or defense of legal claims, or for legitimate business purposes, or as provided by law; and (f) Kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the data were collected and processed: Provided, That personal information collected for other purposes may lie processed for historical, statistical or scientific purposes, and in cases laid down in law may be stored for longer periods: Provided, further, That adequate safeguards are guaranteed by said laws authorizing their processing.",
          "The processing of personal information shall be permitted only if not otherwise prohibited by law, and when at least one of the following conditions exists: (a) The data subject has given his or her consent; (b) The processing of personal information is necessary and is related to the fulfilment of a contract with the data subject or in order to take steps at the request of the data subject prior to entering into a contract; (c) The processing is necessary for compliance with a legal obligation to which the personal information controller is subject; (d) The processing is necessary to protect vitally important interests of the data subject, including life and health; (e) The processing is necessary in order to respond to national emergency, to comply with the requirements of public order and safety, or to fulfil functions of public authority which necessarily includes the processing of personal data for the fulfilment of its mandate; or (f) The processing is necessary for the purposes of the legitimate interests pursued by the personal information controller or by a third party or parties to whom the data is disclosed, except where such interests are overridden by fundamental rights and freedoms of the data subject which require protection under the Philippine Constitution. “Data subject” as used herein shall refer to the Registered User as defined above.",
          "The processing of sensitive personal information and privileged information shall be prohibited, except in the following cases: (a) The data subject has given his or her consent, specific to the purpose prior to the processing, or in the case of privileged information, all parties to the exchange have given their consent prior to processing; (b) The processing of the same is provided for by existing laws and regulations: Provided, That such regulatory enactments guarantee the protection of the sensitive personal information and the privileged information: Provided, further, That the consent of the data subjects are not required by law or regulation permitting the processing of the sensitive personal information or the privileged information; (c) The processing is necessary to protect the life and health of the data subject or another person, and the data subject is not legally or physically able to express his or her consent prior to the processing; (d) The processing is necessary to achieve the lawful and noncommercial objectives of public organizations and their associations: Provided, That such processing is only confined and related to the bona fide members of these organizations or their associations: Provided, further, That the sensitive personal information are not transferred to third parties: Provided, finally,That consent of the data subject was obtained prior to processing; (e) The processing is necessary for purposes of medical treatment, is carried out by a medical practitioner or a medical treatment institution, and an adequate level of protection of personal information is ensured; or (f) The processing concerns such personal information as is necessary for the protection of lawful rights and interests of natural or legal persons in court proceedings, or the establishment, exercise or defense of legal claims, or when provided to government or public authority."
        ]
      },
      {
        "heading": "Security",
        "paragraphs": [
          "JumpIn stores information received from Registered Users on secure computers. Only a small number of JumpIn employees and/or contractors of ours have physical access to these computers. We use firewalls and other security technology to prevent our computers from being accessed by unauthorized persons.",
          "While we have taken measures to protect Registered Users' information, please know that (i) no computer system is immune from intrusion; and (ii) information transmitted to the Site may need to pass through many systems in order to process such information. Therefore, JumpIn cannot guarantee the absolute security or confidentiality of information transmitted to the Site."
        ]
      },
      {
        "heading": "Provision of Information to Others",
        "paragraphs": [
          "When you submit personal information through this Site, you understand and agree that this information may be transferred across national boundaries and may be stored and processed in any of the countries in which JumpIn transact business, including, without limitation, the Philippines. You also acknowledge that in certain countries or with respect to certain activities, the collection, transferring, storage, and processing of your information may be undertaken by our trusted vendors. Such vendors are bound by contract not to use your personal information for their own purposes and to treat the information as confidential.",
          "JumpIn has established relationships with various service providers whose services are available to you from this Site or from Web sites that are linked to this Site or who support JumpIn by providing services which are transparent to you. Typically, these providers offer services that JumpIn customers might find useful, such as those that can be used in tandem with our products and services. In order to use those services, you may be required to provide personal information to the providers. Unless expressly provided to the contrary, personal information that you provide while you are visiting a provider's Web site will be subject to the privacy policy posted on such site, and personal information that you provide while on this Site in conjunction with a provider's service will be subject to this Privacy Policy. You should be aware that our agreements with these service providers often provide that they will share with our personal information collected from you. In such instances, we may use this information in a manner consistent with this Privacy Policy.",
          "If JumpIn sells assets (or the assets of a division or subsidiary) to another entity, or JumpIn (or a division or subsidiary) is acquired by, or merged with, another entity, we may provide to such entity customer information that is related to that part of our business that was sold to or merged with the other entity without your consent.",
          "Other than as described in this Privacy Policy or as otherwise specifically communicated to you by JumpIn, JumpIn does not provide information supplied by users to any third parties, except where law, court order, or governmental authority requires or based upon the good faith belief that disclosure is necessary including, without limitation, to protect the rights of JumpIn when we have reason to believe that disclosing the information is necessary to identify, contact or bring legal action against someone who may be causing interference with our rights or causing harm to third parties."
        ]
      },
      {
        "heading": "Links to Other Sites",
        "paragraphs": [
          "The Site may contain links to Web sites other than our own and for which we are not responsible. Such Web Sites may collect personal information from you. These Web sites may send their own cookies to you, and may collect information and use it in a way inconsistent with our Privacy Policy. In such instances, unless expressly provided to the contrary, the collection and use of your personal information will be governed by the privacy policy applicable to that Web site which should identify the entity that is collecting your personal information. Unless JumpIn explicitly states otherwise, such references in no way indicate our endorsement, recommendation or preference of any such products, services or information contained on any other site."
        ]
      },
      {
        "heading": "Additional Information",
        "paragraphs": [
          "JumpIn may alter, update or otherwise change this Privacy Policy at any time to reflect material changes in the way JumpIn uses your information. Any such changes will be posted on this page. You should periodically check this Privacy Policy to review the current terms and guidelines applicable to your use. Your continued use of the Site following the posting of such changes will indicate your full acceptance of those changes."
        ]
      },
      {
        "heading": "Updating Your Personal Information, Opt Out Policy",
        "paragraphs": [
          "At any time, you can access and correct your personal information and privacy preferences, including exercising your right to unsubscribe as a Registered User of the Site by sending an e-mail to learninganddevelopment@magsaysay.com, or by electing to change your preferences at log-in on JumpIn. As a Registered User, you will occasionally receive e-mail messages from us as described in Section 1 above. If you would prefer not to receive these messages you may opt out by following the instructions within the e-mail message, changing your preferences or (for Portside related emails) by contacting us at learninganddevelopment@magsaysay.com. JumpIn reserves the right to limit certain services to Registered Users who will accept e-mail messages.",
          "Not complied with this Privacy Policy with respect to your personal information or you have other related inquiries or concerns, you may write to JumpIn at the following address:",
          "8th Flr. 520 Magsaysay Building,",
          "T.M. Kalaw Street",
          "Ermita, Manila, Philippines 1000",
          "In your letter, please describe in as much detail as possible the nature of your inquiry or the ways in which you believe that the Privacy Policy has not been complied with so that we may investigate your inquiry. You may also send us an email learninganddevelopment@magsaysay.com.",
          "Please note that if you provide JumpIn with inconsistent privacy preferences (for example, by indicating on one occasion that third parties may contact you with marketing offers and indicating on another occasion that they may not), JumpIn cannot guarantee that your most recent privacy preference will be honored."
        ]
      },
      {
        "heading": "Copyright",
        "paragraphs": [
          "This site is protected by the intellectual property laws on copyright and trademarks of the Republic of the Philippines. All rights reserved and any unauthorized use, imitation, appropriations or other acts of infringement, whether directly or indirectly, are strictly prohibited and shall be subject to both civil and criminal prosecution.",
          "Information on this website as provided is shown. JumpIn disclaims any and all warranties, expressed and implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement.",
          "Use of the information and features on this website are at your sole risk. JumpIn will in no event be liable to any person or entity for any direct, indirect, consequential, incidental or other damages under any theory of law for any errors in the information and features on this site, or for the use of any information or features available on this site, including but not limited to, damages for lost profits, business, data, or damage to your computer systems even if you have advised JumpIn of the possibility of such damages.",
          "There are links in this site which allow you to visit the sites of other companies. Neither these sites nor the companies to whom they belong make representations concerning the information provided in these sites nor the quality or acceptability of the products or services offered by the companies referenced in these sites. JumpIn has not tested and makes no representations regarding the correctness, performance or quality of any software found at these sites. It is your responsibility to research and assess the risks, which may be involved in accessing and using any software on the internet before using it.",
          "JumpIn does not accept ideas, concepts, or techniques for new services or products through its web site. If such information is received, it will not be considered confidential and JumpIn will be deemed free to use, communicate and exploit such information in any manner it chooses."
        ]
      }
    ]
  },
  "terms": {
    "eyebrow": "Terms of Use",
    "title": "Terms and Conditions",
    "intro": "Welcome to JumpIn. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern JumpIn relationship with you in relation to this website.",
    "sections": [
      {
        "heading": "Definitions",
        "paragraphs": [
          "The term “JumpIn” or \"us\" or \"we\" refers to the owner of the website whose registered office address is 8th Flr. 520 Magsaysay Building, T.M. Kalaw Street., Ermita (1000), Manila, Philippines. The term \"you\" refers to the user or viewer of our website."
        ]
      },
      {
        "heading": "Terms of Use",
        "paragraphs": [
          "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
          "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
          "Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.",
          "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.",
          "All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.",
          "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.",
          "Your responsible use of this website is highly encouraged for purposes of complying with the provisions of Republic Act No. 10175, otherwise known as the Cybercrime Prevention Act of 2012, and Republic Act No. 10173, otherwise known as the Data Privacy Act of 2012, and other pertinent laws and regulations governing privacy and security of internet users and netizens.",
          "From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).",
          "You may not create an external link to this website or document without JumpIn prior written consent.",
          "Your use of this website and any dispute arising out of such use of the website is subject to the laws of \"the Republic of the Philippines\"."
        ]
      }
    ]
  }
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [activeFeatureModal, setActiveFeatureModal] = useState(0);

  const [showAudienceModal, setShowAudienceModal] = useState(false);
  const [activeAudience, setActiveAudience] = useState(0);
  const [helpModal, setHelpModal] = useState(null);
  const [legalModal, setLegalModal] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
          <a className="navbar-brand" href="#home" onClick={() => setIsNavOpen(false)}>
            <Logo />
          </a>
          <button
            className={`navbar-toggler ${isNavOpen ? "" : "collapsed"}`}
            type="button"
            onClick={() => setIsNavOpen((prev) => !prev)}
            aria-controls="nav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div id="nav" className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto gap-xl-4">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.id}>
                  <a
                    className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                    href={link.href}
                    onClick={() => setIsNavOpen(false)}
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
              onClick={() => setIsNavOpen(false)}
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
                Access the learning you need, anytime you need it. Explore e-learning courses, articles, case studies, reading materials, and scenario-based roleplays—all in one place.
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
                <SectionTitle eyebrow="ABOUT US" title="What is JumpIn?" />
                <p className="lead-text">
                  JumpIn is a digital learning platform that delivers role-based
                  learning to crew and employees. It brings together different
                  types of learning content in one organized space, making it
                  easier to access, learn, and complete training.
                </p>
                <div className="feature-grid five mt-4">
                  {featureCards.map(([icon, title], index) => (
                    <div
                        className="mini-card feature-click-card"
                        onClick={()=>{
                            setActiveFeatureModal(index);
                            setShowFeatureModal(true);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActiveFeatureModal(index);
                            setShowFeatureModal(true);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                    >
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
              eyebrow="ABOUT US"
              title="Who is JumpIn is for?"
            />
            <div className="row g-4 mt-2">
              {audiences.map(([img, icon, title, desc], index) => (
                <div className="col-md-6 col-xl-3" key={title}>
                  <div className="aud-card aud-click-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setActiveAudience(index);
                      setShowAudienceModal(true);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveAudience(index);
                        setShowAudienceModal(true);
                      }
                    }}
                  >
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
                <a className="btn btn-blue mt-4" href={CSOD_URL} target="_blank" rel="noopener noreferrer">
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
              {infoColumns.map((column) => (
                <InfoColumn
                  key={column.title}
                  title={column.title}
                  icon={column.icon}
                  items={column.items}
                  onItemClick={setHelpModal}
                />
              ))}
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
              <a className="store-btn" href={GOOGLE_URL} target="_blank">
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
              <a className="store-btn" href={APPSTORE_URL} target="_blank">
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

      <FeatureDetailsModal
        show={showFeatureModal}
        activeIndex={activeFeatureModal}
        setActiveIndex={setActiveFeatureModal}
        onClose={() => setShowFeatureModal(false)}
      />

      <AudienceDetailsModal
        show={showAudienceModal}
        activeIndex={activeAudience}
        onClose={() => setShowAudienceModal(false)}
      />

      <InfoModal item={helpModal} onClose={() => setHelpModal(null)} />

      <LegalModal
        item={legalModal}
        onClose={() => setLegalModal(null)}
      />

      <Footer onLegalClick={setLegalModal} />
    </>
  );
}

function FeatureDetailsModal({ show, activeIndex, setActiveIndex, onClose }) {
  if (!show) return null;

  const details = [
    {
      icon: "bi-journal-bookmark",
      title: "Role-Based Access",
      desc: "JumpIn provides learning content based on the user's role, job family, department, vessel assignment, rank, or learner group.",
    },
    {
      icon: "bi-files",
      title: "Multiple Types of Learning Content",
      desc: "Users can access e-learning courses, articles, case studies, reading materials, videos, reference materials, and other learning formats.",
    },
    {
      icon: "bi-phone",
      title: "Online, Offline and Mobile Access",
      desc: "Learning can be accessed through desktop or mobile devices, with offline access available for selected content.",
    },
    {
      icon: "bi-check-circle",
      title: "Track Learning Progress",
      desc: "Users and managers can monitor assigned learning, in-progress courses, completed activities, and overdue items.",
    },
    {
      icon: "bi-clipboard2-pulse",
      title: "Supports Training Deployment",
      desc: "Training administrators can assign learning, monitor participation, run campaigns, and support organization-wide training deployment.",
    },
  ];

  return (
    <div className="modal fade show d-block feature-modal-backdrop">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content feature-modal-content border-0">
          <div className="feature-modal-header">
            <div>
              <h4 className="fw-bold mb-1">JumpIn Platform Features</h4>
              <p className="mb-0">
                Learn more about the key capabilities available in JumpIn.
              </p>
            </div>

            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>

          <div className="feature-modal-body">
            {details.map((item, index) => (
              <div
                className={`feature-modal-item ${
                  activeIndex === index ? "active" : ""
                }`}
                key={item.title}
              >
                <button
                  type="button"
                  className="feature-modal-trigger"
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="feature-modal-icon">
                    <i className={`bi ${item.icon}`}></i>
                  </span>

                  <span>{item.title}</span>

                  <i
                    className={`bi ${
                      activeIndex === index
                        ? "bi-chevron-up"
                        : "bi-chevron-down"
                    }`}
                  ></i>
                </button>

                {activeIndex === index && (
                  <div className="feature-modal-description">
                    <p>{item.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AudienceDetailsModal({ show, activeIndex, onClose }) {
  if (!show) return null;

  const details = [
    {
      img: whoCrew,
      icon: "bi-people",
      title: "Crew & Cadets",
      desc: "JumpIn supports crew members and cadets by providing learning content that is relevant to their rank, vessel assignment, and onboard responsibilities. It helps them complete required training, access reference materials, and stay updated with learning activities wherever they are.",
    },
    {
      img: whoLand,
      icon: "bi-building",
      title: "Landbased Employees",
      desc: "For landbased employees, JumpIn provides access to learning resources aligned with business functions, department needs, and career development goals. It supports continuous learning, compliance training, and upskilling for day-to-day work responsibilities.",
    },
    {
      img: whoCorp,
      icon: "bi-person",
      title: "Corporate Employees",
      desc: "Corporate employees can use JumpIn to complete assigned courses, track development progress, and strengthen competencies needed for performance and professional growth. The platform helps make learning more accessible, organized, and role-relevant.",
    },
    {
      img: whoAdmin,
      icon: "bi-briefcase",
      title: "L&D / Training Administrators",
      desc: "L&D and training administrators can manage learning content, assign courses to groups or individuals, monitor completion, publish announcements, and generate reports. JumpIn helps simplify training deployment and provides better visibility across learning activities.",
    },
  ];

  const item = details[activeIndex];

  return (
    <div className="modal fade show d-block audience-modal-backdrop">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content audience-modal-content border-0">
          <button
            type="button"
            className="btn-close audience-close"
            onClick={onClose}
            aria-label="Close"
          ></button>

          <div className="audience-split">
            <div className="audience-split-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="audience-split-content">
              <div className="audience-modal-title">
                <i className={`bi ${item.icon}`}></i>
                <h3>{item.title}</h3>
              </div>

              <p>{item.desc}</p>

              <div className="audience-points">
                <span><i className="bi bi-check-circle-fill"></i> Role-based learning access</span>
                <span><i className="bi bi-check-circle-fill"></i> Assigned training visibility</span>
                <span><i className="bi bi-check-circle-fill"></i> Progress tracking support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
function InfoColumn({ title, icon, items, onItemClick }) {
  return (
    <div className="col-lg-4">
      <div className="info-col">
        <div className="panel-head">
          <i className={`bi ${icon}`}></i>
          <h3>{title}</h3>
        </div>

        <span className="title-line" />

        {items.map((item) => (
          <button
            type="button"
            className="info-link"
            key={item.title}
            onClick={() => onItemClick({ category: title, ...item })}
          >
            <span>{item.title}</span>
            <i className="bi bi-chevron-right"></i>
          </button>
        ))}
      </div>
    </div>
  );
}

function InfoModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal fade show d-block info-modal-backdrop">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content info-modal-content border-0">
          <button
            type="button"
            className="btn-close info-modal-close"
            onClick={onClose}
            aria-label="Close"
          ></button>

          <div className="info-modal-header">
            <div className="info-modal-icon">
              <i className={`bi ${item.icon}`}></i>
            </div>

            <div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              {item.date && <p className="info-modal-date">{item.date}</p>}
            </div>
          </div>

          <div className="info-modal-body">
            <p>{item.description}</p>

            {item.actions && (
              <div className="info-modal-actions-list">
                {item.actions.map((action) => (
                  <div key={action}>
                    <i className="bi bi-check-circle-fill"></i>
                    {action}
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}


function LegalModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal fade show d-block legal-modal-backdrop">
      <div className="modal-dialog modal-xl modal-dialog-centered legal-modal-dialog">
        <div className="modal-content legal-modal-content border-0">
          <div className="legal-modal-header">
            <div>
                <div className="eyebrow">{item.eyebrow}</div>
                <h2>{item.title}</h2>
                <span className="title-line"></span>
            </div>

            <button
                type="button"
                className="btn-close legal-modal-close"
                onClick={onClose}
                aria-label="Close"
            ></button>
        </div>

          <div className="legal-modal-body">

            <p className="legal-intro">{item.intro}</p>

            <div className="legal-section-list">
              {item.sections.map((section) => (
                <section className="legal-section" key={section.heading}>
                  <h5>{section.heading}</h5>
                  {(section.paragraphs || [section.body]).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer({ onLegalClick }) {
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

              <a href={FB_URL} target="_blank">
                <i className="bi bi-facebook"></i>
              </a>

              <a href={YT_URL} target="_blank">
                <i className="bi bi-youtube"></i>
              </a>

            </div>
          </div>
          <div className="col-lg-3">
            <h4>Quick Links</h4>
            {[
              { label: "About Us", href: "#about" },
              { label: "Learning Content", href: "#learning-content" },
              { label: "Role-Based Learning", href: "#role-based-learning" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Dashboards", href: "#dashboards" },
            ].map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="col-lg-3">
            <h4>Support</h4>
            {[
              { label: "Help Center", href: "#help-center" },
              { label: "Contact Support", href: "#help-center" },
              { label: "Submit a Ticket", href: "#help-center" },
              { label: "User Guides & FAQs", href: "#help-center" },
            ].map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="col-lg-3">
            <h4>Contact Us</h4>
            {/* <p>
              <i className="bi bi-telephone"></i> +63 2 8123 4587
            </p> */}
            <p>
              <i className="bi bi-envelope"></i> support@jumplearning.com
            </p>
            <p>
              <i className="bi bi-geo-alt"></i> 8th Flr. 520 Magsaysay Building,
              Kalaw Ave, Manila, Philippines
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
          <span className="footer-legal-links">
            <button type="button" onClick={() => onLegalClick(legalPolicies.privacy)}>
              Privacy Policy
            </button>
            <span>|</span>
            <button type="button" onClick={() => onLegalClick(legalPolicies.terms)}>
              Terms of Use
            </button>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default App;
