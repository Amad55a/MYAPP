const careerPaths = [
  {
    title: "DevOps Engineer",
    description: "Connect development and operations with reliable delivery systems.",
    responsibility: "Build CI/CD pipelines and automate application delivery.",
    skills: "Linux · Git · CI/CD · containers",
    icon: "↗",
  },
  {
    title: "Cloud Engineer",
    description: "Design and run secure services on public cloud platforms.",
    responsibility: "Provision cloud networks, compute, storage, and access.",
    skills: "Azure · AWS · networking · IaC",
    icon: "☁",
  },
  {
    title: "Site Reliability Engineer",
    description: "Apply software engineering to the reliability of production systems.",
    responsibility: "Define service objectives and improve incident response.",
    skills: "Observability · automation · systems",
    icon: "⌁",
  },
  {
    title: "Platform Engineer",
    description: "Create a dependable internal platform that helps teams ship.",
    responsibility: "Build reusable developer tools and self-service workflows.",
    skills: "Kubernetes · APIs · developer experience",
    icon: "▦",
  },
  {
    title: "Infrastructure Engineer",
    description: "Design the foundational compute, network, and storage layers.",
    responsibility: "Manage infrastructure lifecycle, capacity, and resilience.",
    skills: "Linux · networking · virtualization",
    icon: "⌂",
  },
  {
    title: "Automation Engineer",
    description: "Replace repetitive manual work with dependable automation.",
    responsibility: "Create scripts and workflows for repeatable operations.",
    skills: "Python · Bash · APIs · testing",
    icon: "⟳",
  },
  {
    title: "DevSecOps Engineer",
    description: "Make security a continuous part of software delivery.",
    responsibility: "Integrate security checks and controls into pipelines.",
    skills: "Threat modeling · scanning · policy",
    icon: "◇",
  },
  {
    title: "Release Engineer",
    description: "Coordinate predictable, traceable releases across environments.",
    responsibility: "Manage versions, release automation, and rollout plans.",
    skills: "Git · CI/CD · artifact management",
    icon: "◉",
  },
];

const technologies = [
  ["Git", "Source control", "Track changes and collaborate on code safely.", "git"],
  ["GitHub", "Source control", "Host repositories and collaborate through pull requests.", "GH"],
  ["Linux", "Operating systems", "Run and administer the systems behind much of the cloud.", "L"],
  ["Ubuntu", "Operating systems", "Use a popular Linux distribution for servers and development.", "U"],
  ["Windows Server", "Operating systems", "Host and manage Microsoft workloads and services.", "W"],
  ["Docker", "Containers", "Package applications and dependencies into portable containers.", "▣"],
  ["Kubernetes", "Containers", "Orchestrate containerized workloads across clusters.", "K8s"],
  ["Ansible", "Configuration management", "Configure systems consistently with automation playbooks.", "A"],
  ["Jenkins", "CI/CD", "Automate build, test, and delivery workflows.", "J"],
  ["GitHub Actions", "CI/CD", "Run automated workflows alongside your GitHub repositories.", "GH"],
  ["Terraform", "Infrastructure as code", "Define and version infrastructure using declarative configuration.", "TF"],
  ["Microsoft Azure", "Cloud platforms", "Build and operate services on Microsoft's cloud platform.", "AZ"],
  ["Amazon Web Services", "Cloud platforms", "Use a broad portfolio of cloud infrastructure services.", "AWS"],
  ["Google Cloud", "Cloud platforms", "Build workloads using Google's cloud services.", "GCP"],
  ["Prometheus", "Observability", "Collect and query time-series metrics from services.", "P"],
  ["Grafana", "Observability", "Visualize metrics and create operational dashboards.", "G"],
  ["ELK Stack", "Observability", "Collect, search, and analyze logs with Elasticsearch, Logstash, and Kibana.", "ELK"],
  ["Nginx", "Web servers & proxies", "Serve web traffic and route requests through a reverse proxy.", "N"],
  ["Apache", "Web servers & proxies", "Host websites with the widely used Apache HTTP Server.", "A"],
];

const environments = [
  {
    number: "01",
    title: "Physical servers",
    label: "ON-PREMISES",
    description:
      "Organizations own and manage real hardware in a data center: rack servers with CPUs and RAM, storage, networking, power, and cooling.",
    detail:
      "Teams maintain the full lifecycle, including hardware, virtualization, operating systems, and physical security.",
    icon: "▤",
  },
  {
    number: "02",
    title: "Virtual machines",
    label: "IAAS",
    description:
      "Infrastructure as a Service provides virtual compute, networks, disks, and firewalls on demand. You manage the operating system and application.",
    detail: "Examples: Azure VM · AWS EC2 · Google Compute Engine",
    icon: "▣",
  },
  {
    number: "03",
    title: "Managed platforms",
    label: "PAAS",
    description:
      "Platform as a Service manages much of the runtime and hosting layer, so teams can focus on application code and data.",
    detail: "Examples: Azure App Service · AWS Elastic Beanstalk · Google App Engine",
    icon: "▥",
  },
  {
    number: "04",
    title: "Cloud infrastructure",
    label: "PUBLIC · PRIVATE · HYBRID",
    description:
      "Public cloud uses a provider's shared infrastructure; private cloud is dedicated to one organization; hybrid connects cloud and on-premises environments.",
    detail: "Platforms: Microsoft Azure · AWS · Google Cloud",
    icon: "☁",
  },
];

const lifecycle = [
  ["PLAN", "Shape the work, requirements, and delivery goals.", "Teams · issue tracking"],
  ["CODE", "Track changes and collaborate in version control.", "Git · GitHub"],
  ["BUILD", "Compile and package a repeatable application artifact.", "GitHub Actions · Jenkins"],
  ["TEST", "Check behavior, quality, and security before release.", "Automated tests · CI"],
  ["RELEASE", "Version and approve artifacts for deployment.", "CI/CD · release workflows"],
  ["DEPLOY", "Provision environments and roll out application versions.", "Docker · Kubernetes · Ansible · Terraform"],
  ["OPERATE", "Run services, respond to incidents, and maintain capacity.", "Linux · cloud platforms"],
  ["MONITOR", "Observe service health and feed insights back into planning.", "Prometheus · Grafana"],
];

const roadmap = [
  ["Linux fundamentals", "Navigate the shell, files, processes, users, and services."],
  ["Networking fundamentals", "Learn IP addressing, DNS, HTTP, routing, and firewalls."],
  ["Git and GitHub", "Track changes, branch, review code, and collaborate."],
  ["Bash scripting", "Automate common tasks with shell scripts."],
  ["Python fundamentals", "Write small programs and integrate with APIs."],
  ["Docker", "Build images and run applications in containers."],
  ["CI/CD", "Automate checks and delivery with GitHub Actions and Jenkins."],
  ["Terraform", "Provision repeatable infrastructure as code."],
  ["Ansible", "Configure servers consistently with automation."],
  ["Kubernetes", "Deploy and manage containerized workloads."],
  ["Cloud engineering", "Practice with Azure, AWS, or Google Cloud."],
  ["Monitoring & observability", "Use metrics, logs, dashboards, and alerts."],
  ["DevSecOps & security", "Apply least privilege and security checks throughout delivery."],
  ["Real-world projects", "Combine the skills in documented, deployable projects."],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HeroGraphic() {
  return (
    <div className="hero-art" aria-label="Illustration of connected cloud infrastructure" role="img">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-glow" />
      <div className="cloud-core">
        <svg viewBox="0 0 180 150" fill="none" aria-hidden="true">
          <path
            d="M48 109h79a28 28 0 0 0 2-56 43 43 0 0 0-82-9 33 33 0 0 0 1 65Z"
            fill="url(#cloudFill)"
            stroke="#85d7ff"
            strokeWidth="1.5"
          />
          <path d="M90 64v37m-16-16 16-16 16 16" stroke="#dcf6ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="cloudFill" x1="52" y1="43" x2="134" y2="116" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2676d9" stopOpacity=".8" />
              <stop offset="1" stopColor="#672ed0" stopOpacity=".8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="art-node node-top"><span>01</span><i>Build pipeline</i></div>
      <div className="art-node node-left"><span className="node-dot cyan" /><i>Source control</i></div>
      <div className="art-node node-right"><span className="node-dot purple" /><i>Cloud deploy</i></div>
      <div className="art-node node-bottom"><span className="node-dot green" /><i>Live · all systems go</i></div>
      <div className="tech-float float-docker">Docker</div>
      <div className="tech-float float-k8s">Kubernetes</div>
      <div className="tech-float float-linux">Linux</div>
      <div className="tech-float float-git">Git</div>
      <div className="tech-float float-cloud">Cloud</div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function Header() {
  const links = [
    ["Careers", "#careers"],
    ["Technology", "#technology"],
    ["Infrastructure", "#infrastructure"],
    ["Lifecycle", "#lifecycle"],
    ["Linux", "#linux"],
    ["Roadmap", "#roadmap"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" aria-label="DevOps World home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>devops<span className="brand-light">world</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#roadmap">Start learning <ArrowIcon /></a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            <a href="#linux">Linux & servers</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="hero-badge"><span /> THE WORLD OF DEVOPS</p>
            <h1>BUILD.<br />AUTOMATE.<br /><span>DEPLOY. SCALE.</span></h1>
            <p className="hero-description">
              Discover the world of DevOps engineering. Learn how developers and operations teams build, automate, deploy, monitor, and scale modern applications across cloud platforms and physical infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#careers">Explore DevOps <ArrowIcon /></a>
              <a className="button button-secondary" href="#infrastructure">Discover infrastructure</a>
            </div>
            <div className="hero-proof"><span className="proof-line" /><span>CAREER PATHS</span><b>·</b><span>CLOUD & INFRASTRUCTURE</span><b>·</b><span>REAL-WORLD SKILLS</span></div>
          </div>
          <HeroGraphic />
          <a className="scroll-cue" href="#careers"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap careers-section" id="careers">
          <SectionHeading eyebrow="CAREERS & OPPORTUNITIES" title="Explore the DevOps Career" description="DevOps brings people, processes, and technology together to deliver software more reliably. Find a role that fits the way you like to build and solve problems." />
          <div className="career-grid">
            {careerPaths.map((role, index) => (
              <article className="career-card" key={role.title}>
                <div className="card-topline"><span className="career-icon">{role.icon}</span><span className="card-index">0{index + 1}</span></div>
                <h3>{role.title}</h3>
                <p className="career-description">{role.description}</p>
                <div className="card-detail"><span>RESPONSIBILITY</span><p>{role.responsibility}</p></div>
                <div className="card-detail"><span>CORE SKILLS</span><p className="skill-line">{role.skills}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-band" id="technology">
          <div className="section-wrap">
            <SectionHeading eyebrow="THE ENGINEERING TOOLKIT" title="The DevOps Technology Ecosystem" description="A practical map of the tools teams use to plan, build, ship, and operate modern software." />
            <div className="technology-grid">
              {technologies.map(([name, category, description, mark], index) => (
                <article className="technology-card" key={name}>
                  <div className={`tech-mark mark-${index % 6}`} aria-hidden="true">{mark}</div>
                  <div className="tech-copy"><p className="tech-category">{category}</p><h3>{name}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap infrastructure-section" id="infrastructure">
          <SectionHeading eyebrow="WHERE APPLICATIONS RUN" title="Understand Modern Infrastructure" description="From owned hardware to managed cloud services, each model changes what your team operates and what the provider manages." centered />
          <div className="environment-grid">
            {environments.map((environment) => (
              <article className="environment-card" key={environment.number}>
                <div className="environment-top"><span>{environment.number}</span><span>{environment.label}</span></div>
                <div className="environment-icon" aria-hidden="true">{environment.icon}</div>
                <h3>{environment.title}</h3>
                <p>{environment.description}</p>
                <div className="environment-detail">{environment.detail}</div>
              </article>
            ))}
          </div>
          <div className="infra-note"><span className="note-icon">i</span><p><strong>Who manages what?</strong> With physical infrastructure, your organization owns and operates the hardware. With IaaS, a provider manages the physical layer while you manage virtual machines and their software. With PaaS, the provider also manages the runtime platform, leaving you to focus primarily on your application.</p></div>
        </section>

        <section className="lifecycle-section" id="lifecycle">
          <div className="section-wrap">
            <SectionHeading eyebrow="A CONTINUOUS FEEDBACK LOOP" title="From Code to Production" description="The DevOps lifecycle connects each step of software delivery. Automation and feedback help teams improve continuously." centered />
            <div className="lifecycle-track" aria-label="DevOps lifecycle: Plan, Code, Build, Test, Release, Deploy, Operate, Monitor">
              {lifecycle.map(([stage], index) => (
                <div className="lifecycle-step" key={stage}><span className="lifecycle-number">0{index + 1}</span><span className="lifecycle-name">{stage}</span>{index < lifecycle.length - 1 && <span className="lifecycle-arrow" aria-hidden="true">→</span>}</div>
              ))}
            </div>
            <div className="lifecycle-grid">
              {lifecycle.map(([stage, description, tools]) => (
                <article className="lifecycle-card" key={stage}>
                  <span className="stage-dot" /><h3>{stage}</h3><p>{description}</p><span className="stage-tools">{tools}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap linux-section" id="linux">
          <div className="linux-copy">
            <SectionHeading eyebrow="THE SERVER FOUNDATION" title="Linux & Server Administration" description="Linux powers a large part of modern cloud infrastructure. DevOps engineers who understand servers can diagnose issues at the source, not just in a dashboard." />
            <p className="linux-intro">Learn how a real server works—from the first SSH connection to a hardened service ready for production.</p>
            <a className="text-link" href="#roadmap">Follow the learning roadmap <ArrowIcon /></a>
          </div>
          <div className="linux-panel">
            <div className="terminal-bar"><div><i /><i /><i /></div><span>ubuntu-server — bash</span><span className="terminal-lock">● SECURE SESSION</span></div>
            <div className="terminal-body">
              <p><span className="terminal-prompt">$</span> <span className="terminal-cmd">ssh</span> engineer@production</p>
              <p className="terminal-muted">Connected · Ubuntu Server LTS</p>
              <p><span className="terminal-prompt">$</span> systemctl status nginx</p>
              <p className="terminal-ok">● nginx.service — active (running)</p>
              <p><span className="terminal-prompt">$</span> <span className="terminal-cmd">sudo ufw status</span></p>
              <p className="terminal-ok">Status: active · SSH / HTTP / HTTPS</p>
              <p><span className="terminal-prompt">$</span> <span className="terminal-cursor">_</span></p>
            </div>
            <div className="server-topics">
              {["Linux distributions", "Ubuntu Server", "SSH access", "Users & permissions", "Package management", "Firewalls", "System monitoring", "Web servers", "Security hardening"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        <section className="roadmap-section" id="roadmap">
          <div className="section-wrap">
            <SectionHeading eyebrow="A PRACTICAL PATH FORWARD" title="Your DevOps Learning Roadmap" description="Build a solid foundation, add automation and cloud skills, then bring everything together in projects you can share." centered />
            <ol className="roadmap-grid">
              {roadmap.map(([title, description], index) => (
                <li className="roadmap-card" key={title}>
                  <span className="roadmap-number">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  {index < roadmap.length - 1 && <span className="roadmap-connector" aria-hidden="true" />}
                </li>
              ))}
            </ol>
            <div className="roadmap-cta"><div><span className="eyebrow">YOUR NEXT STEP</span><h3>Start with the fundamentals. Build from there.</h3></div><a className="button button-primary" href="#linux">Explore Linux <ArrowIcon /></a></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="section-wrap">
          <div className="footer-main">
            <div className="footer-about">
              <a className="brand" href="#home"><span className="brand-mark"><span /><span /><span /></span><span>devops<span className="brand-light">world</span></span></a>
              <p>A practical guide to DevOps careers, tools, infrastructure, and the skills to build what comes next.</p>
            </div>
            <div className="footer-links"><h2>EXPLORE</h2><a href="#careers">Career paths</a><a href="#technology">Technology ecosystem</a><a href="#infrastructure">Infrastructure</a><a href="#lifecycle">DevOps lifecycle</a></div>
            <div className="footer-links"><h2>LEARN</h2><a href="#roadmap">Learning roadmap</a><a href="#linux">Linux & servers</a><a href="#technology">Cloud technologies</a><a href="#home">Back to top ↑</a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} DevOps World. Built for curious engineers.</span><span>BUILD WITH INTENTION. OPERATE WITH CONFIDENCE.</span></div>
        </div>
      </footer>
    </>
  );
}
