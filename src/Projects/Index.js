import React from 'react'
import Navbar from './Components/Navbar'
import Slider from './Pages/Slider'
import About from './Pages/About';
import OurClub from './Pages/OurClub';
import Services from './Pages/Services';
import ChooseUS from './Pages/ChooseUS';
import Team from './Pages/Team';
import Testimonial from './Pages/Testimonial';
import News from './Pages/News';


const Index = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <OurClub />
      <Services />
      <ChooseUS />
      <Team />
      <Testimonial />
      <News />

    </div>
  )
}

export default Index