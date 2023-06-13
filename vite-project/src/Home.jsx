

import Images from '../public/unnamed.jpg'
//import { Route, Routes, Link } from 'react-router-dom';
//import Images2 from '../public/unnamed2.jpg'
//import Images3 from '../public/unnamed3.jpg'
//import About from "./assets/component/About";
//import Notfound from "./assets/component/Notfound";
//import ToggleColorMode from "./assets/component/ToggleColorMode";

import {
  Box,SimpleGrid,Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react'
//import React from "react";
import Footer from "./assets/component/Footer";
import Nav from "./assets/component/Nav";
import Carousels from "./assets/component/Carousels";
//import Display1 from "./assets/component/Display1";
import Card from "./assets/component/Card";

//import Fundrawer from "./assets/component/Fundrawer";
import Register from "./assets/component/Register";
//import React, { useState } from "react";
import Login from "./assets/component/Login";
//<Route path="/*" element={<p> the page not found </p>}></Route>


export default function Home() {
  return (

    <Box>



<Nav></Nav>

<Carousels></Carousels>

<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList _dark={{ color: "white" }}>
    <Tab>Login</Tab>
    <Tab>Register</Tab>
    <Tab>Cars</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p><Login></Login></p>
    </TabPanel>
    <TabPanel>
      <p><Register></Register></p>
    </TabPanel>
    <TabPanel>
    <p>
    <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>
    <Card name=" Tesla Model 3 " Dis="SaTesla Model 3: The Tesla Model 3 " img={Images} price="$46,990"></Card>
    <Card name=" Toyota" Dis="Toyota Camry: The Toyota Camry  " img="https://imgd.aeplcdn.com/664x374/n/cw/ec/110233/2022-camry-exterior-right-front-three-quarter.jpeg?isig=0&q=75" price=" $25,295"></Card>
    <Card name=" Honda " Dis="Honda Civic: The Honda Civic" img="https://imgd.aeplcdn.com/664x374/n/cw/ec/27074/civic-exterior-right-front-three-quarter-148156.jpeg?q=75" price="$21,700 "></Card>
    
    </SimpleGrid>
    </p>
  </TabPanel>
  </TabPanels>
</Tabs>

<Footer></Footer>



<header>

</header>
</Box>

  )
}
