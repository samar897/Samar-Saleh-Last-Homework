import React , {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function Update() {
  const [cookies, setC] = useCookies([]);
  const [userName , setUserName]=useState("")
  const [id , setID]=useState("")
  //const [password , setPassword]=useState("")
  //const [email , setEmail]=useState("")
  

const navigat = useNavigate()

  useEffect(()=>{
console.log(localStorage.getItem("id"));
setID(localStorage.getItem("id"));
  },[])

  const UpdateData = async()=>{
    await axios.put(`https://64874e11beba629727906d25.mockapi.io/api/Login/${id}`,{
        userName
    })
    navigat("/read")
      }

  return (
 <div>user

<h3>Update</h3>

<input placeholder='userName' onChange={(e)=>setUserName(e.target.value)}></input><br></br>
{/*<input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
  <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input><br></br>*/}
<button onClick={UpdateData}>UpdateData</button>
    </div>
  )
}

export default Update