import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Nav from './Nav';
import Footer from './Footer';


import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import { PasswordField } from './PasswordField'

function SignUp() {
  const [cookies, setC] = useCookies([]);
  const [name , setUserName]=React.useState("")
  const [password , setPassword]=React.useState("")
  const [email , setEmail]=React.useState("")
  

const navigat = useNavigate()
  const signUp = async()=>{
  
    if(name.length<=3 || email.length<=3 || password.length<=3){
      alert("userName should be more then 3 ")
    }else{
  const url =await axios.post("https://64874e11beba629727906d25.mockapi.io/api/Login",{
    name,
    email,
    password
      }).then(res=>{
        setC("token" , "res.data.token")
        localStorage.setItem("name", res.data.userName)
        localStorage.setItem("id", res.data.id)
      })
   navigat("/profile")
    }
   
  }
  return (
    <div>


<Nav register="Register" login="login"></Nav>
<center>
<Container
        maxW="lg"
        py={{
          base: '12',
          md: '24',
        }}
        px={{
          base: '0',
          sm: '8',
        }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Logo />
            <Stack
              spacing={{
                base: '2',
                md: '3',
              }}
              textAlign="center"
            >
              <Heading
                size={{
                  base: 'xs',
                  md: 'sm',
                }}
              >
                Log in to your account
              </Heading>
          
            </Stack>
          </Stack>
          <Box
            py={{
              base: '0',
              sm: '8',
            }}
            px={{
              base: '4',
              sm: '10',
            }}
            bg={{
              base: 'transparent',
              sm: 'bg.surface',
            }}
            boxShadow={{
              base: 'none',
              sm: 'md',
            }}
            borderRadius={{
              base: 'none',
              sm: 'xl',
            }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
              <FormControl>
                  <FormLabel htmlFor="email">Name</FormLabel>
                  <input placeholder='name' onChange={(e)=>setUserName(e.target.value)} ></input><br></br>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                </FormControl>
                <FormControl>
                <FormLabel htmlFor="Password">Password</FormLabel>
                <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input><br></br>
              </FormControl>
              </Stack>
              <Stack spacing="6">
              <button onClick={signUp}>Regster</button>
                <HStack>
                  <Divider />
                  <Divider />
                </HStack>
                <OAuthButtonGroup />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
      </center>
<Footer></Footer>

    </div>
  )
}

export default SignUp




 

