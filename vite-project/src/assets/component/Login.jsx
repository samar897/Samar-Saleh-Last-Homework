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
  Stack,
  Text,
} from '@chakra-ui/react'
import { Logo } from './Logo'
import { OAuthButtonGroup } from './OAuthButtonGroup'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import { useCookies } from 'react-cookie';
import React,{useState } from 'react'

import Nav from './Nav';
import Footer from './Footer';

export default function Login() {

const [data , setData] = React.useState([])
const [cookies, setC] = useCookies([]);
const [password , setPassword]=React.useState("")
const [email , setEmail]=React.useState("")
const [name , setname]=React.useState("")

const [formData, setFormData] = useState({email:"",password:""});

localStorage.setItem('formData', JSON.stringify(formData));


const navigat = useNavigate()
    const url = "https://64874e11beba629727906d25.mockapi.io/api/Login"
     React. useEffect(() => {
      axios.get(url).then(res=>{
      setData(res.data);
      console.log(res.data);
      setC("token" , "res.data.token")
      localStorage.setItem("name", res.data.name)
      localStorage.setItem("id", res.data.id)
      localStorage.setItem("token", res.data.id)

      })
  
    }, [url])
    
  const login = async()=>{

    data.map((item)=>{
      
    console.log(item.email);
    console.log(item.password);

    console.log(item.name);
    console.log(password);
    console.log(email);

     if(password ==  item.password && email ==item.email ){
   
      navigat(`/profile/${item.name}`)
        }
      else{
      alert("password is not correct")
      }
    })
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
              <HStack spacing="1" justify="center">
                <Text color="fg.muted">Don't have an account?</Text>
                <Button variant="text" size="lg">
               <Link to="/SignUp">SignUp</Link>
                </Button>
              </HStack>
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></input><br></br>
              </FormControl>
              <FormControl>
              <FormLabel htmlFor="Password">Password</FormLabel>
              <input type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input><br></br>
            </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="text" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
              <button onClick={login}>Login</button>
                <HStack>
                  <Divider />
                  <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                    or continue with
                  </Text>
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


