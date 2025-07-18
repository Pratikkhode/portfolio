import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin, Code, Cloud, Cpu, Database, Monitor, Award, Briefcase, User, Zap, Rocket, Globe, Shield, CpuIcon, Server, FileText } from 'lucide-react';
import photo from './assets/photo.jpg';
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {text}
    </div>
  );
};

const SkillCard = ({ skill, icon }: { skill: string; icon: React.ReactNode }) => (
  <div className="group relative overflow-hidden bg-black border-2 border-red-500 rounded-lg enhanced-card-hover glow-border">
    <div className="bg-black rounded-lg p-6 h-full flex flex-col items-center justify-center space-y-3 group-hover:bg-red-50/10 transition-all duration-500">
      <div className="text-red-500 group-hover:scale-125 group-hover:text-red-400 transition-all duration-500 group-hover:animate-pulse">
        {icon}
      </div>
      <span className="text-white text-sm font-medium text-center group-hover:text-red-100 transition-colors duration-500">{skill}</span>
    </div>
  </div>
);

const ProjectCard = ({ title, description, tech }: { title: string; description: string; tech: string }) => (
  <div className="group bg-black border-l-4 border-red-500 rounded-lg p-6 enhanced-card-hover glow-border">
    <h3 className="text-red-500 text-xl font-bold mb-3 group-hover:text-red-400 transition-colors duration-500">{title}</h3>
    <p className="text-white mb-4 leading-relaxed group-hover:text-red-50 transition-colors duration-500">{description}</p>
    <div className="text-red-500 text-sm group-hover:text-red-400 transition-colors duration-500">
      <strong>Tech:</strong> {tech}
    </div>
  </div>
);

const ExperienceCard = ({ role, company, duration, description }: { role: string; company: string; duration: string; description: string }) => (
  <div className="group bg-black rounded-lg p-6 border-l-4 border-red-500 shadow-lg enhanced-card-hover glow-border">
    <h3 className="text-red-500 text-xl font-bold mb-2 group-hover:text-red-400 transition-colors duration-500">{role}</h3>
    <h4 className="text-white text-lg mb-2 group-hover:text-red-50 transition-colors duration-500">{company}</h4>
    <p className="text-red-500 text-sm mb-3 group-hover:text-red-400 transition-colors duration-500">{duration}</p>
    <p className="text-white leading-relaxed group-hover:text-red-50 transition-colors duration-500">{description}</p>
  </div>
);

const CertCard = ({ title, issuer }: { title: string; issuer: string }) => (
  <div className="group bg-black border border-red-500 rounded-lg p-4 enhanced-card-hover glow-border">
    <div className="flex items-center space-x-3">
      <Award className="text-red-500 w-6 h-6 group-hover:text-red-400 group-hover:scale-125 transition-all duration-500" />
      <div>
        <h3 className="text-white font-semibold group-hover:text-red-50 transition-colors duration-500">{title}</h3>
        <p className="text-red-500 text-sm group-hover:text-red-400 transition-colors duration-500">{issuer}</p>
      </div>
    </div>
  </div>
);

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState('hero');
  const [error, setError] = useState<string | null>(null);

  // Error boundary for debugging
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('App Error:', event.error);
      setError(event.error?.message || 'An error occurred');
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  if (showIntro) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
        {/* Animated Geometric Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="geometric-line line-1"></div>
          <div className="geometric-line line-2"></div>
          <div className="geometric-line line-3"></div>
          <div className="geometric-line line-4"></div>
          <div className="geometric-line line-5"></div>
        </div>

        {/* Main Content */}
        <div className="text-center relative z-10">
          {/* Geometric Triangle Shape */}
          {/* Loading screen geometric triangle and name centering */}
          <div className="relative flex items-center justify-center">
            <div className="geometric-container-professional" style={{ width: '100%', maxWidth: 500, height: 375, position: 'relative' }}>
              {/* Animated Triangle Lines */}
              <svg width="100%" height="100%" viewBox="0 0 500 375" className="absolute inset-0 w-full h-full">
                <path 
                  d="M250 60 L437 312 L63 312 Z" 
                  fill="none" 
                  stroke="#dc2626" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="triangle-path"
                />
                <path 
                  d="M250 100 L400 275 L100 275 Z" 
                  fill="none" 
                  stroke="#dc2626" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="triangle-path-inner"
                />
              </svg>
              {/* Name Positioning - Centered in Triangle */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="name-emerging-container">
                  <div className="triangle-gateway"></div>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-wide professional-name-emerging">
                    <span className="name-part-emerging name-first-emerging">Pratik</span>
                    <span className="name-separator-emerging"> </span>
                    <span className="name-part-emerging name-last-emerging">Khode</span>
                  </h1>
                  <div className="emerging-glow-effect"></div>
                  <div className="professional-particles"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Professional Tagline */}
          <div className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up font-medium" style={{ animationDelay: '4s' }}>
            I design, automate, and deploy world-class solutions.
          </div>
          
          {/* Professional Subtitle */}
          <div className="text-lg text-red-500 italic animate-fade-in-up" style={{ animationDelay: '4.5s' }}>
            World-Class Cloud & DevOps Engineer
          </div>

          {/* Loading Progress */}
          <div className="mt-12 w-64 mx-auto">
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 rounded-full animate-loading-bar"></div>
            </div>
          </div>
          
          {/* Professional Sound Effect */}
          <div className="sound-effect">
            <div className="sound-bar"></div>
            <div className="sound-bar"></div>
            <div className="sound-bar"></div>
            <div className="sound-bar"></div>
            <div className="sound-bar"></div>
            <div className="sound-bar"></div>
            <div className="sound-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-red-500 mb-4">Error Loading Portfolio</h1>
          <p className="text-gray-300 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white netflix-theme professional-bg">
      {/* Fixed Simple Logo */}
      <div className="fixed top-4 left-4 z-50">
                      <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-lg shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <span className="text-white font-bold text-lg">PK</span>
              </div>
      </div>

      {/* Improved Navigation/Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-red-500 shadow-xl rounded-b-xl px-4 py-3 md:px-8 md:py-4 flex justify-center">
        <div className="flex flex-wrap md:flex-nowrap space-x-2 md:space-x-4 text-xs md:text-sm">
          {['Home', 'projects', 'experience', 'certifications', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`px-2 py-1 md:px-3 md:py-2 rounded transition-all duration-300 hover:scale-110 font-semibold tracking-wide ${
                currentSection === section ? 'bg-red-500 text-white shadow-md' : 'text-white hover:text-red-400 hover:bg-red-50/10'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-2 sm:px-4 md:px-8 mt-20 md:mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Netflix-style Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 border border-red-600 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 border border-red-600 transform rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-600 rounded-full animate-pulse"></div>
        </div>

        <div className="relative text-center z-10 px-2 sm:px-4">
          {/* <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-600 to-red-800 p-1 hover:scale-110 transition-transform duration-500 overflow-hidden">
              <img 
                src={photo} 
                alt="Pratik Khode - Cloud & DevOps Engineer"
                className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div> */}
          
          <AnimatedText 
            text="Hello, I am Pratik Khode" 
            delay={100}
          />
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 netflix-title text-white hover:text-red-400 transition-colors duration-500">
            <AnimatedText 
              text="Building the Future with Cloud & DevOps" 
              delay={200}
            />
          </h1>
          
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-6 mb-8 border border-red-500/30 shadow-lg hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-500">
            <AnimatedText 
              text="Cloud & DevOps Engineer | Automating Real-World Workflows with AI and AWS" 
              delay={300}
            />
          </div>
          
          <p className="text-base sm:text-xl md:text-2xl text-red-400 italic mb-8 border-b-2 border-red-400 inline-block pb-2 font-medium hover:text-red-300 hover:border-red-300 transition-all duration-500">
            <AnimatedText 
              text="Automating ideas into deployable, scalable, and intelligent solutions with Cloud and DevOps." 
              delay={400}
            />
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {[
              { text: 'View My Projects', icon: <Code className="w-5 h-5" /> },
              { text: 'Download Resume', icon: <Download className="w-5 h-5" /> },
              { text: 'Let us Connect', icon: <Mail className="w-5 h-5" /> },
              { text: 'Explore My Certifications', icon: <Award className="w-5 h-5" /> }
            ].map((button, index) => (
              <button
                key={index}
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform flex items-center space-x-2 animate-fade-in netflix-button"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                {button.icon}
                <span>{button.text}</span>
              </button>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 sm:space-x-6">
            {[
              { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn' },
              { icon: <Github className="w-6 h-6" />, label: 'GitHub' },
              { icon: <ExternalLink className="w-6 h-6" />, label: 'DevPost' },
              { icon: <Monitor className="w-6 h-6" />, label: 'Portfolio' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-red-500 transition-all duration-500 transform hover:scale-125 hover:rotate-12 flex flex-col items-center space-y-1"
              >
                {social.icon}
                <span className="text-xs">{social.label}</span>
              </a>
            ))}
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-red-500" />
          </div>
        </div>
      </section>

     

<section id="about" className="py-16 sm:py-24 px-2 sm:px-4 md:px-8 bg-gray-900 section-hover">
  <div className="max-w-6xl mx-auto">
    
    {/* Title */}
    <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-400 netflix-title hover:scale-110 transition-transform duration-500 section-header">
      About Me
    </h2>

    {/* Main Flex Container */}
    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-10">
      
      {/* Left Side: Image + Icons */}
      <div className="w-full md:w-1/2 flex flex-col items-center mb-6 md:mb-0">
        <div className="w-40 h-40 sm:w-64 sm:h-64 bg-gradient-to-br from-red-600 to-red-800 p-1 hover:scale-110 transition-transform duration-500 overflow-hidden rounded-lg shadow-lg">
          <img 
            src={photo} 
            alt="Pratik Khode - Cloud & DevOps Engineer"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-6">
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-white text-2xl transition-colors duration-300">
            <Linkedin />
          </a>
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-white text-2xl transition-colors duration-300">
            <Github />
          </a>
          {/* <a href="https://instagram.com/YOUR_INSTA" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-white text-2xl transition-colors duration-300">
            <Instagram />
          </a> */}
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full md:w-1/2 bg-black rounded-lg p-4 sm:p-8 shadow-xl border border-red-500/20 enhanced-card-hover glow-border">
        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-white hover:text-red-50 transition-colors duration-500">
          I am a final-year B.E. student at Sandip Foundation College of Engineering with a strong interest in DevOps tools, cloud infrastructure, and AI-driven automation. 
          I enjoy building scalable systems that eliminate manual processes and maximize efficiency.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-white hover:text-red-50 transition-colors duration-500">
          I have worked on a variety of projects that showcase my ability to containerize applications, automate deployments, and design smart tools using modern technologies like Docker, Jenkins, AWS, and Python.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-white hover:text-red-50 transition-colors duration-500">
          I thrive in fast-paced environments where I can learn continuously, improve constantly, and deliver smart, functional solutions that make a real-world impact.
        </p>
      </div>

    </div>
  </div>
</section>



      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 px-2 sm:px-4 md:px-8 bg-black section-hover">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-400 netflix-title hover:scale-110 transition-transform duration-500 section-header">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { skill: 'Java', icon: <Code className="w-8 h-8" /> },
              { skill: 'Python', icon: <Code className="w-8 h-8" /> },
              { skill: 'JavaScript', icon: <Code className="w-8 h-8" /> },
              { skill: 'Docker', icon: <Database className="w-8 h-8" /> },
              { skill: 'Kubernetes', icon: <Database className="w-8 h-8" /> },
              { skill: 'Jenkins', icon: <Cpu className="w-8 h-8" /> },
              { skill: 'AWS EC2', icon: <Cloud className="w-8 h-8" /> },
              { skill: 'AWS Lambda', icon: <Cloud className="w-8 h-8" /> },
              { skill: 'AWS S3', icon: <Cloud className="w-8 h-8" /> },
              { skill: 'Linux', icon: <Monitor className="w-8 h-8" /> },
              { skill: 'Shell Scripting', icon: <Code className="w-8 h-8" /> },
              { skill: 'Machine Learning', icon: <Cpu className="w-8 h-8" /> }
            ].map((item, index) => (
              <SkillCard key={index} skill={item.skill} icon={item.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 px-2 sm:px-4 md:px-8 bg-gray-900 section-hover">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-500 netflix-title hover:scale-110 transition-transform duration-500 section-header">Projects</h2>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "AI-Powered MCQ Game using Gemini & Docker",
                description: "Built a Dockerized MCQ quiz app using Gemini AI with login/authentication, contextual learning, and modular expansion. This project demonstrates the integration of AI APIs with containerized applications for scalable deployment.",
                tech: "Python, Docker, Gemini API"
              },
              {
                title: "CI/CD Pipeline with Jenkins",
                description: "Simulated a complete CI/CD pipeline that auto-triggers on Git commits and automates testing + deployment. Implemented automated testing, code quality checks, and deployment strategies for continuous integration.",
                tech: "Jenkins, GitHub, Bash"
              },
              {
                title: "Static Web Hosting via Docker",
                description: "Hosted a static HTML/CSS site inside a container with optimized nginx configuration. Implemented best practices for containerized web hosting with load balancing and security considerations.",
                tech: "Docker, HTML, CSS, Nginx"
              },
              {
                title: "Python Multi-Tool Automation with Gradio UI",
                description: "Built a UI-driven automation app with messaging, image capture, social posting, and Linux command execution. Created a comprehensive automation suite with user-friendly interface for various system tasks.",
                tech: "Python, Gradio, Twilio, OpenCV"
              },
              {
                title: "Docker-in-Docker Setup",
                description: "Created a sandbox environment to run Docker inside Docker (DinD) for advanced containerization scenarios and testing environments.",
                tech: "Docker, Linux"
              }
            ].map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 px-2 sm:px-4 md:px-8 bg-black section-hover">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-500 netflix-title hover:scale-110 transition-transform duration-500 section-header">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                role: "DevOps & Full Stack Intern",
                company: "Linux World",
                duration: "45 days intensive program",
                description: "Worked across Docker, Jenkins, Python, and deployed real-world tools for automation. Gained hands-on experience with containerization, CI/CD pipelines, and infrastructure automation."
              },
              {
                role: "AWS Cloud Intern",
                company: "REGEX Software Services",
                duration: "3 months",
                description: "Built a real-time Helmet Detection System using EC2, S3, Lambda, IAM. Applied AWS services in live deployment with focus on scalability and security best practices."
              },
              {
                role: "AWS Cloud Practitioner Labs",
                company: "AWS Skill Builder",
                duration: "Ongoing",
                description: "Hands-on experience with IAM, EC2, Auto Scaling, Monitoring, and deployment scenarios. Completed practical labs covering various AWS services and cloud architecture patterns."
              },
              {
                role: "Frontend Developer Intern",
                company: "Reboot Cell",
                duration: "2 months",
                description: "Created a multi-page HTML/CSS camera-themed website during early engineering phase. Focused on responsive design and user experience optimization."
              }
            ].map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-24 px-2 sm:px-4 md:px-8 bg-gray-900 section-hover">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-500 netflix-title hover:scale-110 transition-transform duration-500 section-header">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: "AWS Certified Cloud Practitioner", issuer: "Amazon" },
              { title: "Linux World MultiTech Certificate", issuer: "Linux World" },
              { title: "Cloud Computing with AWS", issuer: "REGEX" },
              { title: "Frontend Web Development", issuer: "Reboot Cell" },
              { title: "Java Programming", issuer: "Apna College" }
            ].map((cert, index) => (
              <CertCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-2 sm:px-4 md:px-8 bg-black section-hover">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-red-500 netflix-title hover:scale-110 transition-transform duration-500 section-header">Contact</h2>
          <div className="bg-black rounded-lg p-4 sm:p-8 shadow-xl border border-red-500/20 enhanced-card-hover glow-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 text-center">
              <div className="flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-500">
                <Mail className="w-8 h-8 text-red-500 hover:text-red-400 transition-colors duration-500" />
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-300 hover:text-red-400 transition-colors duration-500">pratikkhode13@gmail.com</p>
              </div>
              <div className="flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-500">
                <Phone className="w-8 h-8 text-red-500 hover:text-red-400 transition-colors duration-500" />
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-gray-300 hover:text-red-400 transition-colors duration-500">+91-9405776681</p>
              </div>
              <div className="flex flex-col items-center space-y-3 hover:scale-110 transition-transform duration-500">
                <MapPin className="w-8 h-8 text-red-500 hover:text-red-400 transition-colors duration-500" />
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-300 hover:text-red-400 transition-colors duration-500">Nashik, Maharashtra, India</p>
              </div>
            </div>
          </div>
          
          {/* Resume Section */}
          <div className="mt-8 sm:mt-12 text-center">
            <div className="bg-black border border-red-500 rounded-lg p-4 sm:p-6 inline-block shadow-lg hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/40 hover:scale-105 transition-all duration-500">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                <span>Resume</span>
              </h3>
              <button className="bg-red-500 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-red-600 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-500 transform flex items-center space-x-2 netflix-button">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download My Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-500 py-4 sm:py-8 px-2 sm:px-4 hover:bg-red-600 transition-colors duration-500">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white hover:scale-105 transition-transform duration-500 text-xs sm:text-base">
            © 2025 Pratik Khode. Building the future with Cloud and DevOps.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;