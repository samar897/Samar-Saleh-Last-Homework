import React,{ useState,useEffect } from "react";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBreadcrumb,
  MDBBreadcrumbItem,

} from 'mdb-react-ui-kit';


import { useCookies } from 'react-cookie';

import { Button, Center,Box } from '@chakra-ui/react'

import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

import Nav from './Nav';
import Footer from './Footer';

export default function ProfilePage() {
  const [data , setData] = React.useState([])

    const navigat = useNavigate()
    const url = `https://64874e11beba629727906d25.mockapi.io/api/Login`
   React. useEffect(() => {
      axios.get(url).then(res=>{
         setData(res.data);
        
      })
    }, [url])

    const handleDelete = (id) => {
      axios.delete(`https://64874e11beba629727906d25.mockapi.io/api/Login/${id}`).then(() => {
        setData(data.filter(item => item.id !== id));
      });
    };

    
const [cookies, setC] = useCookies([]);
const [password , setPassword]=React.useState("")
const [email , setEmail]=React.useState("")
const [name , setname]=React.useState("")


useEffect(() => {
    if (!localStorage.getItem('token')) {
     window.location.href = '/';
    }
 }, []);

 

    
  const check = async()=>{

    data.map((item)=>{
      
    console.log(item.email);
    console.log(item.password);
    
    console.log(password);
    console.log(email);

     if(password ==  item.password && email == item.email ){

      navigat("/profile")
        }
      else{
      alert("password is not correct")
      }
    })
    }

   /* 
    const logoutButton = () => {
     
        localStorage.clear();
        window.location.href = '/';
    
    };*/
  
  return (
    <Box >
    <section style={{ backgroundColor: '#eee' }} >

    {data.map((item,id)=>{
      return ( 
        <li key={id}>
        <Nav home="home Page" name= {item.name} logout1="logout" profile1="Profile"></Nav>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-10 mb-30">
              <MDBBreadcrumbItem>
             
                <p className="text-muted"> {item.name} Welcome to your website  </p>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Home Page</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
              <Center>
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                  <Link to="/UpdateData">
                  <Button onClick={()=>localStorage.setItem("id",item.id)} colorScheme='teal' variant='solid'>Update</Button></Link><br></br>
                 <br></br>
                 
                  <Box key={item.id}>
                  
                  <Button onClick={() => handleDelete(item.id)} colorScheme='teal' variant='solid' gap={10}>Delete</Button>
                 
                  </Box>      </Center>    
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.name}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{item.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText className="text-muted">Password</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">*****</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <hr />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </li>
      )
    })}
 
<Footer></Footer>
    </section>
    </Box>
  );
}


    
