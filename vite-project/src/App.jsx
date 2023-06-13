//import React, { useEffect } from 'react'

import {Route,Routes} from "react-router-dom"
import SignUp from './assets/component/SignUp';
import Read from './assets/component/Read';
import Home from "./assets/component/Home";

import ProfilePage from "./assets/component/ProfilePage";
import Login from "./assets/component/Login";
import UpdateData from "./assets/component/UpdateData";



function App() {

  return (
<>
<Routes>
  <Route path="/" element={<Login></Login>}></Route>
  <Route path="/read" element={<Read></Read>}></Route>
  <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
  <Route path="/Login" element={<Login></Login>}></Route>
  <Route path="/home" element={<Home></Home>}></Route>
  <Route path="/UpdateData" element={<UpdateData></UpdateData>}></Route>
  <Route path="/profile/:name" element={<ProfilePage/>}></Route>
  <Route path="/profile" element={<ProfilePage/>}></Route>

</Routes>


<ul>

</ul>


</>
  )
}

export default App
