import React from 'react'
import Achievements from './Achievements'
import Announcement from './Announcement'
import Navbar from './Navbar'
import Team from './Team'

export default function About() {
  return (
    <div className="cart-cont">
        <Announcement />
        <Navbar />
        <div className="cart-wrapper">
          <Achievements />
        </div>
        <div className="team-cont">
          <div className='team-title-div'>
              <h1 className='team-title'>Our Team</h1>
          </div>
          <Team />
        </div>
    </div>

  )
}
