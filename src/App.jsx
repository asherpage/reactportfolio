import React from 'react'
import Navbar from'./component/Navbar.jsx'
import './home.css'
import me from './Image_20240328_115206_297-removebg-preview 1.png'

const App = () => {
  return (
    <>
    <div className='img'>
      <Navbar />
      <div className="main-content">
        <div className="left-content">
          {/* <h3 className='main-sub'>Hello, nice to meet you i am</h3> */}
          <h1 className="big-title">Asher Page</h1>
          <h3 className='main-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae placeat consectetur adipisci, fugit perspiciatis accusantium.</h3>
          <button className="custom-button">Button</button>
        </div>
        <div className="work-section">
          <div className="work-boxes">
            <div id='one' className="work-box"></div>
            <div id='two' className="work-box"></div>
            <div id='three' className="work-box"></div>
          </div>
          <h3>View All Work</h3>
        </div>
      </div>
      <div className="picture">
        <img src={me} alt="Your Image" />
      </div>
    </div>
    </>
  )
}

export default App