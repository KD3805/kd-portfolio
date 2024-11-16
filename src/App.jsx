import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components'
import Education from './components/Education'
import BackgroundStars from './components/BackgroundStars'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter future={{ 
      v7_startTransition: true, // Enable startTransition for v7
      v7_relativeSplatPath: true  // Enable relativeSplatPath for v7
    }}>
      <div className='relative z-0 bg-primary'>
        <BackgroundStars />
        
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>

        <div className='relative z-0'>
          <About />
        </div>

        <div className='relative z-0'>
          <Experience />
        </div>

        <div className='relative z-0'>
          <Tech />
        </div>

        <div className='relative z-0'>
          <Works />
        </div>

        <div className='relative z-0'>
          <Education />
        </div>

        <div className='relative z-0'>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App


