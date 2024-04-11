import React from 'react'
import Navbar from'./component/Navbar.jsx'
import './home.css'
import me from './new.PNG'

const App = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <img src={me} className="bottom-left-image" alt="Bottom Left Image" />
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
              </div>
          </div>
          <div className="text-section">
            <h2>Why Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa fugiat natus facilis illum minus temporibus corporis exercitationem impedit, doloribus, dolores doloremque, numquam asperiores quasi magni? Est vitae dolor ex aliquam quas adipisci error recusandae delectus? Magnam nulla porro dicta, praesentium accusantium corrupti voluptatum illo sint maiores id iste sunt.</p>
            <h2>Why Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa fugiat natus facilis illum minus temporibus corporis exercitationem impedit, doloribus, dolores doloremque, numquam asperiores quasi magni? Est vitae dolor ex aliquam quas adipisci error recusandae delectus? Magnam nulla porro dicta, praesentium accusantium corrupti voluptatum illo sint maiores id iste sunt.</p>
            <h2>Why Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa fugiat natus facilis illum minus temporibus corporis exercitationem impedit, doloribus, dolores doloremque, numquam asperiores quasi magni? Est vitae dolor ex aliquam quas adipisci error recusandae delectus? Magnam nulla porro dicta, praesentium accusantium corrupti voluptatum illo sint maiores id iste sunt.</p>
            <h2>Why Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum culpa fugiat natus facilis illum minus temporibus corporis exercitationem impedit, doloribus, dolores doloremque, numquam asperiores quasi magni? Est vitae dolor ex aliquam quas adipisci error recusandae delectus? Magnam nulla porro dicta, praesentium accusantium corrupti voluptatum illo sint maiores id iste sunt.</p>
          </div>
          
          {/* Add more text sections as needed */}
        </div>
        
      </div>
    </div>
    
    </>
  )
}

export default App