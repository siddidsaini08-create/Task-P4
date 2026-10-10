import React, { useEffect, useState } from 'react';

const projects = [
  {
    title: 'AI Study Assistant',
    description: `AI Study Assistant is an AI-powered learning companion designed to help students study more effectively. It generates personalized notes and quizzes, answers questions instantly, and breaks down complex topics into simple explanations. The goal is to make studying more efficient and accessible for every student.`,
    image: '/images/ai-study-assistant.svg',
    link: 'https://github.com/siddidsaini08-create/AIStudyAssistant'
  },
  {
    title: 'Expense Tracker',
    description: `Expense Tracker is a personal finance app designed to help users manage their money more effectively. It lets users log daily expenses, categorize spending, and visualize their budget through a simple, interactive dashboard. The goal is to make personal finance tracking more organized and easy to understand.`,
    image: '/images/expense-tracker.svg',
    link: 'https://github.com/siddidsaini08-create/ExpenseTracker'
  },
  {
    title: 'InvestIQ',
    description: `InvestIQ is a smart investment platform designed to help users make informed financial decisions. It provides personalized investment insights, tracks market trends, analyzes stocks, and presents complex financial information through a simple, interactive dashboard. The goal is to make investing more accessible and understandable for beginners and experienced investors alike.`,
    image: '/images/investiq.svg',
    link: 'https://github.com/siddidsaini08-create/INVESTIQ'
  }
];

function Home() {
  useEffect(() => { document.title = 'Siddid Saini | Personal Website'; }, []);
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const [contactMessage, setContactMessage] = useState('');
  const [sendingContact, setSendingContact] = useState(false);
  const [sendingSubscribe, setSendingSubscribe] = useState(false);

  const handleContact = async (e) => {
    e.preventDefault();
    setSendingContact(true);
    setContactMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        })
      });
      const data = await response.json();
      setContactMessage(data.message);
      if (data.success) form.reset();
    } catch (error) {
      setContactMessage('Backend is not running. Start it with: npm run server');
    } finally {
      setSendingContact(false);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSendingSubscribe(true);
    setSubscribeMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();
      setSubscribeMessage(data.message);
      if (data.success) setEmail('');
    } catch (error) {
      setSubscribeMessage('Backend is not running. Start it with: npm run server');
    } finally {
      setSendingSubscribe(false);
    }
  };

  return (
    <>
      <div className="banner">
        <div className="banner-contact">
          <p>📞 +91 91159 11588</p>
          <p>🌐 github.com/siddidsaini08</p>
        </div>

        <div className="banner-name">
          <h1>SIDDID<br />SAINI</h1>
          <p>COMPUTER SCIENCE STUDENT</p>
        </div>

        <div className="banner-greeting">
          Hey, I'm Siddid Saini
        </div>
      </div>

      <section id="about" className="profile">
        <div>
          <h2>About Me</h2>
          <p>
            Hi, I'm Siddid Saini, a second-year student at Chitkara University.
          </p>
          <ul>
            <li><strong>Nursery - 3rd:</strong> St. Xavier School</li>
            <li><strong>4th - 10th:</strong> St. Stephen's School</li>
            <li><strong>11th - 12th:</strong> Guru govind Singh Public School, Sector 35</li>
            <li><strong>Now:</strong> Chitkara University — 2nd Year, CSE (AI/ML), Deakin Pathway Program</li>
          </ul>
        </div>
        <div className="profile-photo">SS</div>
      </section>

      <section id="work">
        <h2>Portfolio</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="gallery-eyebrow">A FEW THINGS I ENJOY</p>
            <h2>Gallery</h2>
          </div>
          <p className="gallery-intro">A visual snapshot of my interests in software, AI, data, and building useful things.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-item">
            <img src="/images/gallery-code.png" alt="A laptop screen representing software development and writing code" loading="lazy" />
            <figcaption>
              <h3>Software Development</h3>
              <p>Turning ideas into clean, working code.</p>
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/images/gallery-ai.png" alt="A connected network representing artificial intelligence and machine learning" loading="lazy" />
            <figcaption>
              <h3>AI &amp; Machine Learning</h3>
              <p>Exploring intelligent systems and new possibilities.</p>
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/images/gallery-ideas.png" alt="A light bulb surrounded by idea nodes, representing creative problem solving" loading="lazy" />
            <figcaption>
              <h3>Design &amp; Ideas</h3>
              <p>Sketching, testing, and refining fresh concepts.</p>
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/images/gallery-data.png" alt="A dashboard with a rising chart and data visualisations" loading="lazy" />
            <figcaption>
              <h3>Data &amp; Analytics</h3>
              <p>Finding patterns and making information clearer.</p>
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/images/gallery-iot.png" alt="A connected circuit board representing sensors, robotics, and the Internet of Things" loading="lazy" />
            <figcaption>
              <h3>Robotics &amp; IoT</h3>
              <p>Connecting software with sensors and smart devices.</p>
            </figcaption>
          </figure>
          <figure className="gallery-item">
            <img src="/images/gallery-collaboration.png" alt="Two people collaborating around a laptop on a shared project" loading="lazy" />
            <figcaption>
              <h3>Learning &amp; Collaboration</h3>
              <p>Learning together and building better solutions.</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className="contact-card">
          <p>
            📧 <a href="mailto:siddidsaini08@gmail.com">siddidsaini08@gmail.com</a>
             | 
            💻 <a href="https://github.com/siddidsaini08" target="_blank" rel="noreferrer">GitHub</a>
             | 
            🔗 <a href="https://www.linkedin.com/in/siddid-saini" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>

          <form className="contact-form" onSubmit={handleContact}>
            <input name="name" type="text" placeholder="Your name" required />
            <input name="email" type="email" placeholder="Your email" required />
            <textarea name="message" rows="6" placeholder="Your message" required></textarea>
            <button type="submit" disabled={sendingContact}>{sendingContact ? 'Sending...' : 'Send Message'}</button>
          </form>
          <p id="contactMessage">{contactMessage}</p>
        </div>
      </section>

      <section id="subscribe">
        <h2>Stay Connected</h2>
        <div className="subscribe-card">
          <p>
            Subscribe to receive the latest updates from DEV@Deakin.
            Get the latest articles, projects, tutorials and developer resources directly in your inbox.
          </p>

          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
            <button type="submit" disabled={sendingSubscribe}>{sendingSubscribe ? 'Sending...' : 'Subscribe'}</button>
          </form>

          <p id="subscribeMessage">{subscribeMessage}</p>
        </div>
      </section>

    </>
  );
}

export default Home;
