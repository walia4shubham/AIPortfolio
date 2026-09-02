import './App.css'
import { useState } from 'react'
import { SiCplusplus, SiHtml5, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiGithub } from 'react-icons/si'
import { FaCss3Alt, FaLinkedinIn } from 'react-icons/fa6'
import portrait from './assets/profile-portrait.jpg'
import workImage from './assets/project-preview.png'

const services = ['Web Designing','Web Development','App Development','API Development','NextJS Applications','Cloud Solutions','E-commerce Products','Portfolio Websites']
const timeline = [
  ['2025—Present','Senior Software Developer','Innovative Code Labs Pvt. Ltd.'],
  ['2023—2025','Software Developer','Innovative Code Labs Pvt. Ltd.'],
  ['2021—2023','Software Engineer','Oriental Outsourcing Consultants (P) Ltd.'],
]
const skills = [['C++',SiCplusplus],['HTML5',SiHtml5],['CSS3',FaCss3Alt],['JavaScript',SiJavascript],['React',SiReact],['Next.js',SiNextdotjs],['Node.js',SiNodedotjs],['Tailwind',SiTailwindcss],['MySQL',SiMysql],['MongoDB',SiMongodb],['Firebase',SiFirebase]]
const projects = [
  ['Analytics Control Center','Concept project · React · TypeScript · Node.js'],
  ['Uruck','Next.js · Node.js · PostgreSQL · AI tooling'],
  ['Forteh Marketplace','React · Node.js · MongoDB · Algolia · Stripe'],
  ['VendorTree','React · Node.js · MongoDB'],
]

function SectionTitle({title, subtitle}) { return <div className="section-title"><h2>{title}<span>.</span></h2><p>{subtitle}</p></div> }

function App(){
  const [formStatus, setFormStatus] = useState('idle')
  const [formMessage, setFormMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setFormStatus('loading')
    setFormMessage('')

    try {
      const response = await fetch('https://formspree.io/f/mzebrbda', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormStatus('success')
      setFormMessage('Thank you! Your message was submitted successfully.')
    } catch {
      setFormStatus('error')
      setFormMessage('Sorry, your message could not be sent. Please try again.')
    }
  }

  return <div className="page-wrap">
    <div className="portfolio-shell">
      <header className="topbar">
        <a className="logo" href="#home"><b>SSW</b></a>
        <nav><a href="#home">Home</a><a href="#services">Services</a><a href="#portfolio">My Portfolio</a><a href="#work">Work</a></nav>
        <a className="talk-btn" href="https://cal.com/shubham-singh-t56s1o/15min" target="_blank" rel="noreferrer">Let&apos;s Talk.</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image"><div className="orbit one"/><div className="orbit two"/><img src={portrait} alt="Shubham Singh Walia"/></div>
          <div className="hero-content">
            <p className="hello">Hi, I&apos;m</p>
            <h1>Shubham<br/><span>Singh Walia</span></h1>
            <div className="role-strip" aria-label="Backend Developer, API Architect, System Designer, Database Expert, Cloud Engineer, DevOps Enthusiast, Security Focused, Problem Solver">
              <div className="role-track"><span>🚀 Backend Developer</span><span>⚡ API Architect</span><span>🔧 System Designer</span><span>💾 Database Expert</span><span>☁️ Cloud Engineer</span><span>🛠️ DevOps Enthusiast</span><span>🔐 Security Focused</span><span>🎯 Problem Solver</span><span aria-hidden="true">🚀 Backend Developer</span><span aria-hidden="true">⚡ API Architect</span><span aria-hidden="true">🔧 System Designer</span><span aria-hidden="true">💾 Database Expert</span><span aria-hidden="true">☁️ Cloud Engineer</span><span aria-hidden="true">🛠️ DevOps Enthusiast</span><span aria-hidden="true">🔐 Security Focused</span><span aria-hidden="true">🎯 Problem Solver</span></div>
            </div>
            <p className="hero-copy">I build modern web products, powerful backend systems and clean user experiences that solve real business problems.</p>
            <div className="hero-actions"><a className="primary" href="#book">Want to discuss?</a><a className="round-link" href="#portfolio">↓</a></div>
          </div>
          <div className="vertical-title">A FULL-STACK DEVELOPER</div>
        </section>

        <section className="section services" id="services">
          <SectionTitle title="Services" subtitle="Here are the services I can provide."/>
          <div className="service-list">{services.map((service,i)=><div key={service}><span>0{i+1}</span><h3>{service}</h3><b>↗</b></div>)}</div>
          <div className="service-contact"><p>Please email me your query!</p><a href="mailto:walia4shubham@gmail.com">walia4shubham@gmail.com</a><span>OR</span><a href="tel:+9199885886633">Call me directly</a></div>
        </section>

        <section className="section portfolio" id="portfolio">
          <SectionTitle title="Portfolio" subtitle="This is my personal portfolio."/>
          <div className="bio"><h3>🙏🏻 I&apos;m a software engineer with 5+ years of experience building and scaling production-grade web applications.</h3><p>I enjoy learning new technologies and turning business ideas into reliable digital products. My work covers frontend, backend, databases, cloud deployment and product delivery.</p></div>
          <div className="timeline">{timeline.map(([year,role,company])=><article key={role}><h4>{year}</h4><div><h3>{role}</h3><p>At {company}</p></div></article>)}</div>
          <div className="exploring"><p>Exploring new opportunities!</p><a href="mailto:walia4shubham@gmail.com">Get my resume ↗</a></div>
          <div className="skill-row">{skills.map(([name,Icon])=><div key={name}><Icon/><span>{name}</span></div>)}</div>
          <div className="profiles"><h3>Check out my profile at:</h3><a href="https://github.com/walia4shubham" target="_blank" rel="noreferrer"><SiGithub/> Github/Shubham</a><a href="https://www.linkedin.com/in/shubham-singh-114473163/" target="_blank" rel="noreferrer"><FaLinkedinIn/> Linkedin/Shubham</a></div>
        </section>

        <section className="section work" id="work">
          <SectionTitle title="Work" subtitle="Selected projects I have helped bring to life."/>
          <div className="work-showcase"><div className="preview-wrap"><span>CONCEPT PREVIEW</span><img src={workImage} alt="Fictional analytics dashboard concept project preview"/></div><div className="project-list">{projects.map(([name,stack],i)=><article key={name}><span>0{i+1}</span><h3>{name}</h3><p>{stack}</p></article>)}</div></div>
        </section>

        <section className="section testimonials">
          <SectionTitle title="Testimonials" subtitle="What teammates and clients value in my work."/>
          <div className="quotes"><article><p>“Shubham combines strong engineering judgment with clear communication. He understands the product need and follows through with a dependable solution.”</p><h3>Engineering Collaborator</h3></article><article><p>“His attention to detail and ownership make complex delivery feel simple. Progress stays transparent and the work remains focused on the end user.”</p><h3>Product Collaborator</h3></article></div>
        </section>

        <section className="section booking-section" id="book">
          <div className="booking-heading"><SectionTitle title="Book a call" subtitle="Choose a time that works for you."/><a href="https://cal.com/shubham-singh-t56s1o/15min" target="_blank" rel="noreferrer">Fix a Meeting with Me ↗</a></div>
          <div className="calendar-frame"><iframe src="https://cal.com/shubham-singh-t56s1o/15min?embed=true&theme=dark" title="Book a 15-minute meeting with Shubham Singh Walia" loading="lazy" /></div>
        </section>

        <section className="section hello-section" id="contact">
          <SectionTitle title="Hello" subtitle="Throw me a challenge."/>
          <div className="contact-layout">
            <div className="contact-intro"><p>Have a role, product idea, or engineering challenge? Send me the details and I’ll get back to you.</p><a className="contact-email" href="mailto:walia4shubham@gmail.com">walia4shubham@gmail.com <span>↗</span></a></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New portfolio enquiry" />
              <input className="form-trap" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
              <div className="form-row"><label><span>Your name</span><input type="text" name="name" placeholder="Enter your name" required /></label><label><span>Email address</span><input type="email" name="email" placeholder="you@company.com" required /></label></div>
              <label><span>Phone number</span><input type="tel" name="phone" placeholder="Enter your phone number" /></label>
              <label><span>Project description</span><textarea name="description" rows="6" placeholder="Tell me about the role, project, timeline, or challenge…" required /></label>
              <button type="submit" disabled={formStatus === 'loading'}>{formStatus === 'loading' ? <><i className="button-loader" /> Sending message…</> : <>Send message <b>↗</b></>}</button>
              {formMessage && <p className={`form-feedback ${formStatus}`} role="status" aria-live="polite">{formMessage}</p>}
              {!formMessage && <p className="form-note">Your details are used only to respond to your enquiry.</p>}
            </form>
          </div>
        </section>
      </main>

      <footer><h2>Follow me on!</h2><div className="footer-links"><a className="instagram" href="https://www.instagram.com/walia4shubham/" target="_blank" rel="noreferrer"><span>◎</span>Instagram/Shubham <b>↗</b></a><a className="linkedin" href="https://www.linkedin.com/in/shubham-singh-114473163/" target="_blank" rel="noreferrer">Linkedin/Shubham <b>↗</b></a><a className="github" href="https://github.com/walia4shubham" target="_blank" rel="noreferrer"><span>◉</span>Github/Shubham <b>↗</b></a><a className="leetcode" href="https://leetcode.com/u/walia4shubham/" target="_blank" rel="noreferrer"><span>⌁</span>Leetcode/Shubham <b>↗</b></a></div><p>Contact Me@ : walia4shubham@gmail.com / +91-9988586633</p><div className="footer-notes"><small>Feel Free to copy 💝</small><small>Made with ❤️ from India</small></div></footer>
    </div>
  </div>
}
export default App
