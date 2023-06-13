//import About from "../component/About";
import Notfound from "../component/Notfound";
//import Nav from "../component/Nav";
//import Footer from "../component/Footer";
import Home from "../component/Home"; 
import Login from "./Login";
import Register from "./Register"; 

import { Box } from '@chakra-ui/react';

import ProfilePage from "./ProfilePage";




import {Route, Routes,Outlet } from 'react-router-dom';

import ListSearch from "./ListSearch";

export default function RouterOutlet() {


  return (
<Box>

<Routes>
<Route path="/" element={<Login/>}></Route>
<Route path="/register" element={<Register/>}></Route>
<Route path="/login/ListSearch" element={<ListSearch/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/logout" element={<Login/>}></Route>
<Route path="/*" element={<Notfound/>}></Route>
<Route path="*" element={<Notfound/>}></Route>
<Route path="/profile" element={<ProfilePage/>}></Route>





 <Route path="/login/home" element={
      
      <Box>
   
      <Home/>
     
      <Outlet/>
      
      </Box>
    }>
        
      </Route>


</Routes>

</Box>
  )
}
/*
<Route path="/SearchList" element={<SearchList/>}></Route>
<Route path="/Search" element={<Search/>}></Route>*/