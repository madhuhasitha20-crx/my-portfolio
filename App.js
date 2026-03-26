import "./App.css";

function App() {
  return (
    <div className="app">
    
      <nav className="navbar">
        <div className="nav-logo">My Portfolio</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="home" className="hero-section">
        <div className="portfolio-bg-text">
          <span>P</span>
          <span>O</span>
          <span>R</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </div>

        <div className="hero-image-wrapper">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
            alt="profile illustration"
            className="hero-image"
          /> */}

          <img src="https://i.ibb.co/wZRNNy5f/IMG-20260326-WA0008.jpg" alt="IMG-20260326-WA0008" border="0" className="hero-image"></img>
        </div>


        <div className="hero-content">
          <h1>Hi, I’m Madhu Hasitha</h1>
         <p>
  I am a curious and enthusiastic learner who is always eager to explore
  real-world projects, internships, and practical experiences that help me
  grow as a developer. I enjoy learning new technologies, building creative
  solutions, and continuously improving my skills through hands-on work,
  challenges, and new opportunities. My goal is to keep learning, keep
  building, and turn ideas into meaningful digital experiences.
</p>
        </div>
      </section>

    <section id="experience" className="info-section">
  <div className="left-info full-width">
    <h2>EXPERIENCE</h2>

    <div className="experience-grid">
      <div className="exp-card">
        <h3>HTML, CSS, SQL & Bootstrap</h3>
        <p>Built strong fundamentals in web design and databases.</p>
        <span>2025</span>
      </div>

      <div className="exp-card">
        <h3>JavaScript & React JS</h3>
        <p>Worked on frontend logic, interactivity, and component-based UI.</p>
        <span>2026</span>
      </div>

      <div className="exp-card">
        <h3>Internship at IIT Guwahati</h3>
        <p>Completed a 3-month internship under an IIT professor.</p>
        <span>Academic / Internship Experience</span>
      </div>

      <div className="exp-card">
        <h3>Hackathons & Tech Events</h3>
        <p>
          Actively participated in hackathons, tech events, and practical
          learning activities.
        </p>
        <span>Ongoing</span>
      </div>
    </div>
  </div>
</section>

     
      <section id="projects" className="projects-section">
        <h2>PROJECTS</h2>

        <div className="project-cards">
          <div className="project-card">
            <div className="project-number">01</div>
            <h3>Cylinder Info Track Website</h3>
            <p>Completed website project for managing and tracking cylinder information.</p>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>JavaScript Calculator</h3>
            <p>Built using JavaScript with loops and interactive logic.</p>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>
            <h3>Time Table UI</h3>
            <p>Created a timetable layout using HTML and CSS.</p>
          </div>

          <div className="project-card">
            <div className="project-number">04</div>
            <h3>Student Report Generator</h3>
            <p>Generated student reports using programming logic and input handling.</p>
          </div>

          <div className="project-card">
            <div className="project-number">05</div>
            <h3>Bank Account Simulator</h3>
            <p>Simulated account operations like deposit, withdrawal, and balance check.</p>
          </div>

          <div className="project-card">
            <div className="project-number">06</div>
            <h3>Shopping Bill Calculator</h3>
            <p>Calculated bills based on quantity, pricing, and total logic.</p>
          </div>

          <div className="project-card">
            <div className="project-number">07</div>
            <h3>Password Strength Checker</h3>
            <p>Validated password strength based on conditions and security rules.</p>
          </div>

          <div className="project-card">
            <div className="project-number">08</div>
            <h3>Number Analyzer</h3>
            <p>Analyzed number properties using loops and JavaScript conditions.</p>
          </div>

          <div className="project-card">
            <div className="project-number">09</div>
            <h3>Electricity Bill Calculator</h3>
            <p>Computed electricity bills based on unit consumption logic.</p>
          </div>

          <div className="project-card">
            <div className="project-number">10</div>
            <h3>Tic Tac Toe Game</h3>
            <p>Built an interactive game using JavaScript.</p>
          </div>

          <div className="project-card">
            <div className="project-number">11</div>
            <h3>Mini HTML & JS Projects</h3>
            <p>Worked on several small projects for hands-on practice and frontend learning.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="extra-section">
        <h2>SKILLS</h2>
        <div className="tag-container">
          <span>HTML</span>
          <span>CSS</span>
          <span>Bootstrap</span>
          <span>SQL</span>
          <span>JavaScript</span>
          <span>React JS</span>
          <span>Responsive Design</span>
          <span>Frontend Development</span>
          <span>Problem Solving</span>
          <span>UI Layout Design</span>
          <span>Logic Building</span>
          <span>Project Development</span>
          <span>Team Participation</span>
          <span>Hackathon Experience</span>
        </div>
      </section>

      
      <section id="certifications" className="extra-section">
        <h2>CERTIFICATIONS</h2>
        <div className="cert-image-grid">
          <div className="cert-image-card">
            <img
              src="https://i.ibb.co/0VrH6QKT/IMG-20260301-WA0015.jpg"
              alt="Certificate 1"
            />
            <p>Upload your certificate image here</p>
          </div>

          <div className="cert-image-card">
            <img
              src="https://i.ibb.co/jPvPW7Fb/IMG-20260301-WA0014.jpg"
              alt="Certificate 2"
            />
            <p>Upload your certificate image here</p>
          </div>

          <div className="cert-image-card">
            <img
              src="https://i.ibb.co/gMSGV0Tw/IMG-20260301-WA0013.jpg"
              alt="Certificate 3"
            />
            <p>Upload your certificate image here</p>
          </div>
        </div>
      </section>

     
      <section id="contact" className="extra-section contact-section">
        <h2>CONTACT ME</h2>
        <div className="contact-box">
          <p><strong>Email:</strong> madhuhasitha2025@gmail.com</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/tanikella-madhu-hasitha-969780327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              View Profile
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/madhuhasitha20-crx"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;