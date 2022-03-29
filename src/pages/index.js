import React, {useState} from 'react'
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar'; 
import HeroSection from '../component/HeroSection';
import InfoSection from '../component/InfoSection';
import Services from '../component/Services';
import Footer from '../component/Footer';
import { homeObjOne, homeObjThree, homeObjTwo } from '../component/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <Sidebar isOpen = {isOpen} toggle = {toggle}/>
        <Navbar toggle = {toggle}/>
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services/>
        <InfoSection {...homeObjThree}/>
        <Footer/>
    </>
  );
};

export default Home