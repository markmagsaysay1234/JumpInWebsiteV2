import React from 'react';
import heroVisual from './assets/hero-visual.png';
import aboutImg from './assets/about-img.png';
import whoCrew from './assets/who-crew.png';
import whoLand from './assets/who-landbased.png';
import whoCorp from './assets/who-corp.png';
import whoAdmin from './assets/who-admin.png';
import learningPerson from './assets/learning-person.png';
import talentImg from './assets/talent-img.png';
import learnImg from './assets/learn-img.png';
import progressScreen from './assets/progress-screen.png';
import dashboardLaptop from './assets/dashboard-laptop.png';

const GREEN = '#97A961';

function Logo({ dark = false }) {
  return <div className="logo"><span>jump</span><b>in</b><sup>™</sup></div>;
}

const featureCards = [
  ['bi-journal-bookmark', 'Role-Based Access'],
  ['bi-files', 'Multiple Types of Learning Content'],
  ['bi-phone', 'Online, Offline and Mobile Access'],
  ['bi-check-circle', 'Track Learning Progress'],
  ['bi-clipboard2-pulse', 'Supports Training Deployment'],
];

const audiences = [
  [whoCrew, 'bi-people', 'Crew & Cadets', 'Access learning relevant to your rank, vessel and role.'],
  [whoLand, 'bi-building', 'Landbased Employees', 'Access learning resources designed for landbased roles and functions.'],
  [whoCorp, 'bi-person', 'Corporate Employees', 'Complete assigned learning that supports your performance and professional growth.'],
  [whoAdmin, 'bi-briefcase', 'L&D / Training Administrators', 'Manage content, assign learning, and track progress across your organization.'],
];

const learning = [
  ['bi-laptop', 'E-Learning Courses', 'Interactive courses you can learn at your own pace.'],
  ['bi-file-text', 'Articles', 'Read expert articles on key topics and insights.'],
  ['bi-book', 'Case Studies', 'Explore real-life examples and practical scenarios.'],
  ['bi-bookshelf', 'Reading Materials', 'Access e-books, guides and reference reading.'],
  ['bi-chat-dots', 'Scenario-based Roleplays', 'Practice real-world scenarios in a safe space.'],
  ['bi-clipboard-check', 'Job Aids & Quick Guides', 'Quick references for on-the-job support.'],
  ['bi-play-btn', 'Videos & Multimedia', 'Watch videos and multimedia resources.'],
  ['bi-ui-checks', 'Assessments & Quizzes', 'Reinforce learning with quizzes and assessments.'],
  ['bi-folder2-open', 'Reference Materials', 'Access manuals, templates, and reference docs.'],
  ['bi-shield-check', 'Policies & Procedures', 'Stay up to date with company policies.'],
];

const roleBased = [
  ['bi-people', 'Job Family'], ['bi-building', 'Department'], ['bi-ship', 'Vessel Assignment'], ['bi-award', 'Rank / Position'], ['bi-person-lines-fill', 'Learner Group']
];

const steps = [
  ['bi-box-arrow-in-right', 'Log In', 'Securely access JumpIn using your company credentials.'],
  ['bi-clipboard-check', 'Assigned Learning', 'View personalized courses based on your role and requirements.'],
  ['bi-play-btn', 'Learn & Engage', 'Access courses, readings, case studies or activities at your own pace.'],
  ['bi-ui-checks', 'Complete Tasks', 'Complete required learning tasks and acknowledgements.'],
  ['bi-bar-chart-line', 'Track Progress', 'Monitor completion status and learning progress.']
];

const managerList = ['View team learning progress','Monitor completion and overdue items','Identify training gaps','Follow up and support your team','Ensure training compliance','Cert Expiration Monitoring'];
const adminList = ['Upload and organize learning content','Assign content to groups or individuals','Track completion and participation','Generate reports and dashboards','Run learning campaigns and announcements','Monitor fleet-wide training compliance'];

function SectionTitle({eyebrow, title, centered=false}) {
  return <div className={centered ? 'text-center section-title mx-auto' : 'section-title'}>
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <h2>{title}</h2><span className="title-line" />
  </div>
}

function App() {
  return <>
    <header className="topbar sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark container-xxl">
        <a className="navbar-brand" href="#"><Logo /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav"><span className="navbar-toggler-icon" /></button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto gap-xl-4">
            {['Home','About JumpIn','Learning Content','Role-Based Learning','How It Works','Dashboards','Help Center'].map((x,i)=><li className="nav-item" key={x}><a className={'nav-link '+(i===0?'active':'')} href="#">{x}</a></li>)}
          </ul>
          <a className="btn btn-green" href="#">Login to JumpIn</a>
        </div>
      </nav>
    </header>

    <section className="hero">
      <div className="container-xxl hero-inner">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 hero-copy">
            <Logo />
            <h1>Your Role-Based<br/>Learning Management System</h1>
            <p>Access the learning you need, when you need it. E-learning courses, articles, case studies, reading materials and scenario-based roleplays — all in one place.</p>
            <div className="hero-icons">
              {['Role-Based Learning','Learn Anytime, Anywhere','Track Progress and Completion','Support Your Team’s Learning'].map((x,i)=><div key={x}><i className={`bi ${['bi-journal-bookmark','bi-phone','bi-graph-up-arrow','bi-people'][i]}`}></i><span>{x}</span></div>)}
            </div>
            <div className="d-flex gap-3 flex-wrap"><a className="btn btn-green btn-lg">Login to JumpIn</a><a className="btn btn-outline-light btn-lg">Book a Demo</a></div>
          </div>
          <div className="col-lg-6"><img className="hero-img" src={heroVisual} alt="JumpIn platform preview" /></div>
        </div>
      </div>
    </section>

    <main>
      <section className="section about">
        <div className="container-xxl">
          <div className="row align-items-center g-5">
            <div className="col-lg-5"><img className="rounded-img" src={aboutImg} alt="Crew learning on vessel" /></div>
            <div className="col-lg-7">
              <SectionTitle eyebrow="ABOUT JUMPIN" title="What is JumpIn?" />
              <p className="lead-text">JumpIn is a digital learning platform that delivers role-based learning to crew and employees. It brings together different types of learning content in one organized space, making it easier to access, learn, and complete training.</p>
              <div className="feature-grid five mt-4">{featureCards.map(([icon,title])=><div className="mini-card" key={title}><i className={`bi ${icon}`}></i><h6>{title}</h6></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-xxl"><SectionTitle eyebrow="ABOUT JUMPIN" title="Who is JumpIn is for?" />
          <div className="row g-4 mt-2">{audiences.map(([img,icon,title,desc])=><div className="col-md-6 col-xl-3" key={title}><div className="aud-card"><img src={img}/><div className="aud-body"><i className={`bi ${icon}`}></i><h5>{title}</h5><p>{desc}</p></div></div></div>)}</div>
        </div>
      </section>

      <section className="section learning">
        <div className="container-xxl"><div className="row g-4 align-items-stretch">
          <div className="col-lg-3"><SectionTitle title="Learning Content Available"/><p>JumpIn offers a variety of learning formats to support different learning needs and preferences.</p><a className="btn btn-blue mt-4"><i className="bi bi-book me-2"></i>Explore Content Library</a></div>
          <div className="col-lg-2 d-none d-lg-block"><img className="learning-person" src={learningPerson}/></div>
          <div className="col-lg-7"><div className="content-grid">{learning.map(([icon,title,desc])=><div className="content-card" key={title}><i className={`bi ${icon}`}></i><h6>{title}</h6><p>{desc}</p></div>)}</div></div>
        </div></div>
      </section>

      <section className="section role-section">
        <div className="container-xxl"><div className="row g-4 align-items-center">
          <div className="col-lg-2"><SectionTitle title="Role-Based Learning"/><p>Content is organized and assigned based on your role, so you get learning that is relevant and meaningful.</p></div>
          <div className="col-lg-7"><div className="role-flow">{roleBased.map(([icon,title],i)=><React.Fragment key={title}><div className="role-card"><i className={`bi ${icon}`}></i><h6>{title}</h6></div>{i<roleBased.length-1 && <span className="arrow">›</span>}</React.Fragment>)}</div></div>
          <div className="col-lg-3"><div className="benefits"><h4>Benefits</h4>{['Focus on what is important for your current role','Meet training requirements and company standards','Improve performance and confidence in your job'].map((x,i)=><p key={x}><i className={`bi ${['bi-bullseye','bi-clipboard-check','bi-graph-up-arrow'][i]}`}></i>{x}</p>)}</div></div>
        </div></div>
      </section>

      <section className="section muted talent"><div className="container-xxl"><div className="row align-items-center g-5">
        <div className="col-lg-6"><SectionTitle title="Talent Decisions"/><p className="lead-text">Make informed talent decisions with data-driven insights to support profiling, behavioral assessments, technical evaluations, and readiness for growth opportunities.</p>
          {['Profiling|Build comprehensive profiles to understand talent potential.','Behavioral Assessments|Gain insights into behaviors and workplace preferences.','Technical Assessments|Evaluate skills and technical competencies with confidence.','Readiness for Growth|Identify high-potential talent ready for future opportunities.'].map((x,i)=>{const [a,b]=x.split('|');return <div className="talent-row" key={a}><i className={`bi ${['bi-person-lines-fill','bi-heart-pulse','bi-clipboard-check','bi-graph-up-arrow'][i]}`}></i><h5>{a}</h5><p>{b}</p></div>})}
        </div><div className="col-lg-6"><img className="rounded-img" src={talentImg}/></div></div></div></section>

      <section className="section"><div className="container-xxl"><SectionTitle title="How JumpIn Works"/><p className="lead-text w-lg-50">A simple learning journey designed to help you access, complete, and track your development activities in one platform.</p><div className="step-grid">{steps.map(([icon,title,desc],i)=><div className="step-card" key={title}><span>{i+1}</span><i className={`bi ${icon}`}></i><h5>{title}</h5><p>{desc}</p></div>)}</div></div></section>

      <section className="section pt-0"><div className="container-xxl"><div className="row align-items-center g-5"><div className="col-lg-5"><img className="rounded-img" src={learnImg}/></div><div className="col-lg-7"><SectionTitle title="Learn Anytime, Anywhere"/><p className="lead-text">Access learning wherever you are—on desktop, mobile, or even offline. Stay connected to your development anytime, anywhere.</p><div className="feature-grid three mt-4">{['Web Access','Mobile Access','Offline Learning'].map((x,i)=><div className="mini-card" key={x}><i className={`bi ${['bi-display','bi-phone','bi-cloud-arrow-down'][i]}`}></i><h6>{x}</h6><p>{['Access JumpIn using your computer or laptop.','Learn on the go using your device.','Continue learning even without internet.*'][i]}</p></div>)}</div><small>*Available for selected content</small></div></div></div></section>

      <section className="section progress"><div className="container-xxl"><SectionTitle title="Track Your Learning Progress"/><p>See your learning status and stay on track. Monitor assignments, course completion, and your overall development progress in one place.</p><div className="metric-grid">{[['12','Assigned','bi-clipboard'],['6','In Progress','bi-stopwatch'],['8','Completed','bi-check-circle'],['2','Overdue','bi-exclamation-circle']].map(([n,l,ic],i)=><div className={'metric '+(i===3?'danger':'')} key={l}><i className={`bi ${ic}`}></i><b>{n}</b><span>{l}</span></div>)}</div><img className="screen-img" src={progressScreen}/></div></section>

      <section className="section pt-0"><div className="container-xxl"><div className="row g-4"><div className="col-lg-6"><FeaturePanel title="For Managers & Supervisors" icon="bi-people" items={managerList}/></div><div className="col-lg-6"><FeaturePanel title="For Training Administrators & Principals" icon="bi-person-gear" items={adminList}/></div></div></div></section>

      <section className="section dashboard"><div className="container-xxl"><div className="row align-items-center g-5"><div className="col-lg-5"><SectionTitle title="Dashboard and Reports"/><p className="lead-text">Real-time data that helps you monitor, analyze, and improve learning.</p><div className="dash-metrics">{['1,256|Total Learners','78%|Completion Rate','184|In Progress','27|Overdue','95%|Assessment Pass Rate','Reports|View and export learning reports'].map(x=>{const [a,b]=x.split('|');return <div><b>{a}</b><span>{b}</span></div>})}</div></div><div className="col-lg-7"><img className="laptop-img" src={dashboardLaptop}/></div></div><div className="insight"><i className="bi bi-graph-up"></i> Make data-driven decisions with easy access to key learning insights and reports.</div></div></section>

      <section className="section pt-0"><div className="container-xxl"><div className="row g-4"><InfoColumn title="Featured Learning Areas" icon="bi-award" items={['Safety and Compliance','Technical and Functional','Behavioral Skills','Industry Focused Learning','Reference Materials']}/><InfoColumn title="Announcements" icon="bi-megaphone" items={['New Course — Bridge Maintenance Management','Learning Campaign — Safety First, Always','Important Bulletin & Communications','System Update']}/><InfoColumn title="Help and Support" icon="bi-headset" items={['How to log in','Accessing your courses','Using offline mode','Tracking your progress','FAQs','Contact Support']}/></div></div></section>

      <section className="container-xxl"><div className="cta"><div><h3>Start Your Learning Journey Today</h3><p>Access your assigned training, complete your tasks, and grow every day with JumpIn.</p></div><div className="d-flex gap-3"><a className="btn btn-green">Login to JumpIn</a><a className="btn btn-outline-light">Book a Demo</a></div></div></section>
    </main>

    <Footer />
  </>
}

function FeaturePanel({title, icon, items}) {return <div className="feature-panel"><div className="panel-head"><i className={`bi ${icon}`}></i><h3>{title}</h3></div><span className="title-line" />{items.map(x=><p className="check" key={x}><i className="bi bi-check-circle-fill"></i>{x}</p>)}</div>}
function InfoColumn({title, icon, items}) {return <div className="col-lg-4"><div className="info-col"><div className="panel-head"><i className={`bi ${icon}`}></i><h3>{title}</h3></div><span className="title-line" />{items.map(x=><a key={x}>{x}<i className="bi bi-chevron-right"></i></a>)}</div></div>}
function Footer(){return <footer><div className="container-xxl"><div className="row gy-5"><div className="col-lg-3"><Logo/><p>Your all-in-one workforce development platform for learning, performance, talent insights, and strategic growth.</p><div className="social"><i className="bi bi-facebook"></i><i className="bi bi-youtube"></i></div></div><div className="col-lg-3"><h4>Quick Links</h4>{['About JumpIn','Learning Content','Role-Based Learning','How It Works','Dashboards'].map(x=><a>{x}</a>)}</div><div className="col-lg-3"><h4>Support</h4>{['Help Center','Contact Support','System Status','Submit a Ticket','User Guides & FAQs'].map(x=><a>{x}</a>)}</div><div className="col-lg-3"><h4>Contact Us</h4><p><i className="bi bi-telephone"></i> +63 2 8123 4587</p><p><i className="bi bi-envelope"></i> support@jumplearning.com</p><p><i className="bi bi-geo-alt"></i> 8th Flr. Magsaysay Building, Manila, Philippines</p><div className="help-box">We’re here to help!<br/>Monday - Friday<br/>8:00 AM - 5:00 PM (PHT)</div></div></div><div className="trust-row"><div><i className="bi bi-shield-check"></i><b>Your Privacy Matters</b><span>Your data privacy and security are our top priorities.</span></div><div><i className="bi bi-lock"></i><b>Secure & Trusted</b><span>We are committed to protecting your information.</span></div><div><i className="bi bi-people"></i><b>Built for Your Growth</b><span>Empowering people and organizations to achieve more.</span></div></div><div className="footer-bottom"><span>© 2026 JumpIn. All rights reserved.</span><span>Privacy Policy&nbsp;&nbsp; | &nbsp;&nbsp;Terms of Use&nbsp;&nbsp; | &nbsp;&nbsp;Cookie Policy</span></div></div></footer>}

export default App;
