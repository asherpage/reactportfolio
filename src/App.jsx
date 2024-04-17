import React from 'react'
import Navbar from'./component/Navbar.jsx'
import SmoothScroll from './component/SmoothScroller.jsx'
import './home.css'
import ContactForm from './component/ContactForm.jsx'
import me from './new.PNG'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
const App = () => {
  return (
    <>
    <Navbar />
    <div className='headdiv'></div>
    <div className="container flexy">
      <div className='img-cont'>
      <img src={me} className="bottom-left-image" alt="Bottom Left Image" />
      </div>
      <div className="content">
        <div className="scrollable-text">
          <div className="text-section">
            <h2>Why Me</h2>
            <p>I am a aspiring front end developer seeking an opportunity at an entry-level position to showcase my team oriented and graphic design skills. Motivated and eager to provide my expertise in the world of front end development.
</p>
            <button>Contact Me</button>
          </div>
          <div className="text-section">
            <h2>Latest work</h2>
            <div className='proj-cont'>
              <div className='boxer' id='first-box'></div>
              <div className='boxer' id='second-box'></div>
              <div className='boxer' id='third-box' ></div>
              <div className='boxer' id='third-box' ></div>
              <div className='boxer' id='third-box' ></div>
              </div>
          </div>
          <div className="text-section">
            <h2>Skills</h2>
            <p>As a developer, my expertise lies primarily in front-end development, where I thrive in crafting intuitive and visually appealing user interfaces. Proficient in HTML, CSS, and JavaScript, I bring designs to life with clean, efficient code. My dedication to staying updated with the latest trends and technologies ensures that my projects are not only functional but also cutting-edge in terms of design and user experience. Whether it's creating responsive layouts, implementing animations, or optimizing performance, I am committed to delivering high-quality solutions that exceed expectations.</p><p>Explore my <span>GitHub</span> to see examples of my projects and to gain deeper insights into my skills and coding style.</p>
            <p className='script-tags'><span>JavaScript</span> <span>TypeScript</span> <span>HTML</span> <span>CSS & SCSS</span> <span>Next.js</span> <span>React</span></p>
            
            <h2 className='lil-titles'>Education</h2>
            <p className='p-head'>Sandra Day O’Conner Highschool, Phoenix</p>
              <p className='p-sub'>Expected Grad: 2024</p>

            <p className='p-head'>West-MEC NEC Coding Program, Phoenix</p>
            <p className='filler'>This two-year interactive program prepares students for a career as a software developer. The program teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code.</p>
              <p className='p-sub'>Expected Grad: 2024</p>
            <h2 className='lil-titles'>Extracuricular</h2>
            <p className='filler'>Develop professional and entrepreneurial skills while working as a       team to coordinate and implement volunteer and work-based learning experiences.</p>
          </div>
        </div>

      </div>

    </div>
          <div className='below-scroll'></div>
          <ContactForm />
    </>
  )
}

export default App