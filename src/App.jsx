import React from 'react'
import Navbar from'./component/Navbar.jsx'
import './home.css'
import me from './new.PNG'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
const App = () => {
  return (
    <>
    <Navbar />
    <div className='headdiv'></div>
    <div className="container">
      <div className='img-cont'>
      <img src={me} className="bottom-left-image" alt="Bottom Left Image" />
      </div>
      <div className="content">
        {/* Text sections that will scroll on the right side */}
        <div className="scrollable-text">
          <div className="text-section">
            <h2>Why Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa fugiat natus facilis illum minus temporibus corporis exercitationem impedit, doloribus, dolores doloremque, numquam asperiores quasi magni? Est vitae dolor ex aliquam quas adipisci error recusandae delectus? Magnam nulla porro dicta, praesentium accusantium corrupti voluptatum illo sint maiores id iste sunt.</p>
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
            
            <h2>About</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa fugiat natus facilis illum minus temporibus corporis exercitationem impedit, doloribus, dolores doloremque, numquam asperiores quasi magni? Est vitae dolor ex aliquam quas adipisci error recusandae delectus? Magnam nulla porro dicta, praesentium accusantium corrupti voluptatum illo sint maiores id iste sunt.</p>
            <h2>Skills</h2>
            {/* <div className='scripts-flex'>            <FaHtml5 className='scripts' /><FaCss3Alt className='scripts' /><IoLogoJavascript className='scripts' /></div> */}
            <p>As a developer, my expertise lies primarily in front-end development, where I thrive in crafting intuitive and visually appealing user interfaces. Proficient in HTML, CSS, and JavaScript, I bring designs to life with clean, efficient code. My dedication to staying updated with the latest trends and technologies ensures that my projects are not only functional but also cutting-edge in terms of design and user experience. Whether it's creating responsive layouts, implementing animations, or optimizing performance, I am committed to delivering high-quality solutions that exceed expectations.</p><p>Explore my <span>GitHub</span> to see examples of my projects and to gain deeper insights into my skills and coding style.</p>
            <p className='script-tags'><span>JavaScript</span> <span>TypeScript</span> <span>HTML</span> <span>CSS & SCSS</span> <span>Next.js</span> <span>React</span></p>
            
            <h2>Why Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa fugiat natus facilis illum minus temporibus corporis exercitationem impedit, doloribus, dolores doloremque, numquam asperiores quasi magni? Est vitae dolor ex aliquam quas adipisci error recusandae delectus? Magnam nulla porro dicta, praesentium accusantium corrupti voluptatum illo sint maiores id iste sunt.</p>
            <h2>Why Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa fugiat natus facilis illum minus temporibus corporis exercitationem impedit, doloribus, dolores doloremque, numquam asperiores quasi magni? Est vitae dolor ex aliquam quas adipisci error recusandae delectus? Magnam nulla porro dicta, praesentium accusantium corrupti voluptatum illo sint maiores id iste sunt.</p>
          </div>
          
          {/* Add more text sections as needed */}
        </div>
        
      </div>

    </div>
          <div className='below-scroll'></div>
    
    </>
  )
}

export default App