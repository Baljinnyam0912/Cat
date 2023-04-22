import Menu from './components/Menu';
import Body from './components/body';
import Spring from './components/Spring';
import Winter from './components/Winter';
import Hallow from './components/Hallow';
import Poster from './components/Poster';
import HighFashion from './components/HighFashion';
import FooterPoster from './components/FooterPoster';
import Footer from './components/Footer';
import React from 'react'





const App = () => {
  return (
    <div className='w-full'>
      <Menu></Menu>
      <Body></Body>
      <Spring></Spring>
      <Winter></Winter>
      <Hallow></Hallow>
      <Poster></Poster>
      <HighFashion></HighFashion>
      <FooterPoster></FooterPoster>
      <Footer></Footer>
      
    
    </div>
  )
}

export default App