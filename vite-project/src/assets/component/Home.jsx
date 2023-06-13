import { ChakraProvider, Box, Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Image, Flex,Input } from '@chakra-ui/react' 

import React,{ useState,useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import initialDetails from './initialDetails';
import { Grid } from '@chakra-ui/react'

import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';

export default function Home() {

    const [data , setData] = useState([])
    const [data2 , setData2] = useState([])
    console.log(initialDetails);
    const [search, setSearch] = useState("")
    console.log(search);
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const [name , setname]=useState("")

    const [showMore, setShowMore] = useState(false);

    
    
   
     const navigat = useNavigate();
     const url = "https://64874e11beba629727906d25.mockapi.io/api/image"
     useEffect(() => {
       axios.get(url).then(res=>{
          setData(res.data);
        // console.log(res.data);
         
       })
     }, [url])

  
     console.log(search);
     useEffect(() => {
         if (!localStorage.getItem('token')) {
          window.location.href = '/';
         }
      }, []);

      
      

   
     const url2 = `https://64874e11beba629727906d25.mockapi.io/api/Login`
    useEffect(() => {
       axios.get(url2).then(res=>{
          setData2(res.data);
       })
     }, [url2])



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



    return (
        <>

       

{data2.map((item,id)=>{
  return (

    <li key={id}>

<Nav home="Home Page" logout1="logout" name= {item.name} profile1="Profile"></Nav>

   
    </li>
    
  )
})}

            <ChakraProvider>
                <Flex justifyContent="center" mt="50px">
                    <Box>
                    
                        <Input name='Search' placeholder='Search' id="searchInp" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </Box>
                </Flex>
                <Flex flexDir='column-reverse' id="containerFlex">

                    <Flex justifyContent="center" mt="90px" gap="40px" id="flexCard" >
                        <Grid templateColumns='repeat(3, 1fr)' gap={6} id="mygrid">
                            {
                                data.filter((item) => {
                                    return search.toLowerCase() === '' ? item :
                                        item.name.toLowerCase().includes(search)
                                }).map((item) => (
                                    <div key={item.id}>
                                        <Card maxW='sm' >
                                            <CardBody>
                                                <div id="bor">
                                               

                                                    {showMore ? item.Dis : `${item.Dis.substring(0, 15)}`}
                                                    <button className="btn" onClick={() => setShowMore(!showMore)}>     <Image
                                                    src={item.img}
                                                    height="300"
                                                    width="280px"
                                                    alt='Green double couch with wooden legs'
                                                    borderRadius='lg'
                                                    id="theImg"
                                                /></button>
                                                    {showMore ? "Show less" : "Show more"}


                                                </div>
                                                <Stack mt='6' spacing='3'>
                                                    <Heading size='md' id="name" textAlign='Left'> {item.name}</Heading>
                                                    
                                                    <Box textAlign='right'>
                                                        <Text>
                                                        </Text>
                                                    </Box>
                                                </Stack>
                                            </CardBody>
                                            <Divider />
                                       
                                        </Card>

                                        <br />
                                    </div>

                                ))
                            }

                        </Grid>
                    </Flex>
                </Flex>
            </ChakraProvider>
           <Footer></Footer>
        </>
    )
}
