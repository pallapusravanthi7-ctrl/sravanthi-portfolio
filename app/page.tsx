import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <main>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold text-blue-700">
            Sravanthi Pallapu
          </h1>

          <div className="flex gap-6 font-medium">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

{/* Hero */}

<section
  id="home"
className="min-h-screen pt-28 pb-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white flex items-center justify-center">
  <div className="text-center max-w-4xl px-6">

    <img
      src="/profile.png"
      alt="Sravanthi Pallapu"
      className="w-52 h-52 rounded-full mx-auto border-4 border-white object-cover mb-8"
    />

    <h1 className="text-6xl font-bold mb-4">
      Hi, I'm Sravanthi Pallapu
    </h1>

    <h2 className="text-3xl mb-6">
      Senior Full Stack UI Developer
    </h2>

<p className="text-xl leading-9 mb-10 max-w-4xl mx-auto">
  Senior Full Stack UI Developer with 12+ years of experience designing,
  developing and delivering scalable enterprise web applications using
  React.js, Next.js, Angular, TypeScript, JavaScript, Node.js, REST APIs,
  AWS and Google Cloud. Passionate about creating high-performance,
  responsive and user-friendly applications.
</p>

<div className="flex justify-center gap-6">

  {/* Contact Button */}
  <a
    href="#contact"
    className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
  >
    Contact Me
  </a>

  {/* Resume Button */}
  <a
    href="/Sravanthi_Pallapu_Resume.pdf"
    download
    className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition"
  >
    Resume
  </a>

  {/* LinkedIn Button */}
  <a
    href="https://www.linkedin.com/in/sravanthi-pallapu"
    target="_blank"
    rel="noopener noreferrer"
    className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-700 transition"
  >
    LinkedIn
  </a>

</div>

  </div>
</section>
      {/* About */}

<section
  id="about"
  className="py-20 bg-white"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-12">
      About Me
    </h2>

    <div className="bg-gray-100 rounded-2xl shadow-lg p-10">

      <p className="text-xl leading-9 text-gray-700">

        Senior Full Stack UI Developer with over
        <strong> 12+ years </strong>
        of experience designing and developing enterprise web applications.

      </p>

      <br />

      <p className="text-lg leading-8 text-gray-600">

        Expertise in React.js, Next.js, Angular, TypeScript,
        JavaScript, Node.js, REST APIs, AWS and Google Cloud.

      </p>

      <br />

      <p className="text-lg leading-8 text-gray-600">

        Experienced in building scalable, responsive,
        cloud-enabled applications with strong focus on
        performance, accessibility and reusable components.

      </p>

    </div>

  </div>
</section>


      <section
id="skills"
className="py-20 bg-gray-100"
>

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-14">
Technical Skills
</h2>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-lg">
<h3 className="text-2xl font-bold mb-6 text-blue-700">
Frontend
</h3>

<ul className="space-y-3 text-lg">
<li>✔ React.js</li>
<li>✔ Next.js</li>
<li>✔ Angular</li>
<li>✔ JavaScript</li>
<li>✔ TypeScript</li>
<li>✔ HTML5</li>
<li>✔ CSS3</li>
<li>✔ Tailwind CSS</li>
</ul>

</div>

<div className="bg-white p-8 rounded-xl shadow-lg">

<h3 className="text-2xl font-bold mb-6 text-green-700">
Backend
</h3>

<ul className="space-y-3 text-lg">
<li>✔ Node.js</li>
<li>✔ Express.js</li>
<li>✔ REST APIs</li>
<li>✔ MongoDB</li>
<li>✔ SQL</li>
</ul>

</div>

<div className="bg-white p-8 rounded-xl shadow-lg">

<h3 className="text-2xl font-bold mb-6 text-purple-700">
Cloud & Tools
</h3>

<ul className="space-y-3 text-lg">
<li>✔ AWS</li>
<li>✔ Google Cloud</li>
<li>✔ Git</li>
<li>✔ GitHub</li>
<li>✔ VS Code</li>
<li>✔ Postman</li>
</ul>

</div>

</div>

</div>

</section>

     <section
id="experience"
className="py-20 bg-white"
>

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-12">
Experience
</h2>

<div className="bg-gray-100 rounded-2xl shadow-xl p-10">

<h3 className="text-3xl font-bold">
Senior Full Stack UI Developer
</h3>

<p className="text-blue-700 font-semibold mt-2">
12+ Years Experience
</p>

<ul className="mt-8 space-y-4 text-lg">

<li>✔ Developed enterprise React applications.</li>

<li>✔ Built reusable UI components.</li>

<li>✔ Integrated REST APIs.</li>

<li>✔ Worked with Angular and Next.js.</li>

<li>✔ Implemented responsive UI.</li>

<li>✔ Used Git and GitHub.</li>

<li>✔ Worked in Agile/Scrum teams.</li>

<li>✔ Deployed applications on AWS.</li>

</ul>

</div>

</div>

</section>
{/* Projects */}
<section id="projects" className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-5xl font-bold text-center mb-14">
      Featured Projects
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Project 1 */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800"
          alt="Employee Management"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Employee Management System
          </h3>

          <p className="text-gray-600 mb-5">
            Enterprise HR application for employee onboarding,
            payroll, attendance and leave management.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">React</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">REST API</span>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
            >
              GitHub
            </a>
          </div>

        </div>

      </div>

      {/* Project 2 */}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800"
          alt="Banking Dashboard"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            Banking Dashboard
          </h3>

          <p className="text-gray-600 mb-5">
            Responsive dashboard for customer accounts,
            transactions, cards and analytics.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Angular</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Bootstrap</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
            >
              GitHub
            </a>
          </div>

        </div>

      </div>

      {/* Project 3 */}

      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
          alt="E-Commerce"
          className="w-full h-52 object-cover"
        />

        <div className="p-6">

          <h3 className="text-2xl font-bold mb-3">
            E-Commerce Platform
          </h3>

          <p className="text-gray-600 mb-5">
            Modern shopping platform with authentication,
            payments, product catalog and admin dashboard.
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Node.js</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Live Demo
            </a>

            <a
              href="#"
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50"
            >
              GitHub
            </a>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
<section
id="contact"
className="py-20 bg-gradient-to-r from-blue-700 to-cyan-500 text-white"
>

<div className="max-w-5xl mx-auto text-center px-6">

<h2 className="text-5xl font-bold mb-10">
Contact Me
</h2>

<p className="text-2xl mb-6">
  📧
  <a
    href="mailto:sravanthipallapu1990@gmail.com"
    className="hover:underline"
  >
    sravanthipallapu1990@gmail.com
  </a>
</p>

<p className="text-2xl mb-10">
🔗 linkedin.com/in/sravanthi-pallapu-5b3123232
</p>

<a
href="https://www.linkedin.com/in/sravanthi-pallapu-5b3123232/"
target="_blank"
rel="noopener noreferrer"
className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-semibold hover:bg-gray-100"
>
Visit LinkedIn
</a>

</div>

</section>

{/* Footer */}
<footer className="bg-slate-900 text-white py-8">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h3 className="text-2xl font-bold">
      Sravanthi Pallapu
    </h3>

    <p className="mt-2 text-gray-400">
      Senior Full Stack UI Developer
    </p>

    <div className="flex justify-center gap-6 mt-5">
      <a
        href="https://www.linkedin.com/in/sravanthi-pallapu-5b3123232"
        target="_blank"
        className="hover:text-cyan-400"
      >
      </a>

      <a
        href="https://github.com/YOUR_GITHUB_USERNAME"
        target="_blank"
        className="hover:text-cyan-400"
      >
      </a>
    </div>

    <p className="mt-6 text-sm text-gray-500">
      © 2026 Sravanthi Pallapu. All Rights Reserved.
    </p>

  </div>
</footer>

</main>
  );
}