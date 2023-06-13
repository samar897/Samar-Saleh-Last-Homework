import React from "react";
import {
  chakra,
  Box,
  GridItem,
  Button,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  VisuallyHidden,
  Input,
} from "@chakra-ui/react";

import { useLocalStorage } from "../component/useLocalStorage";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Home from "../component/Home"; 

export default function Register(props){


  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("passwordF", "");
  const [checked, setChecked] = useLocalStorage("checked", false);

  return (
<Box>
<Nav register="Register" login="Login" ></Nav>
  <Box px={8} py={24} mx="auto" margin={140}>
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
>
      <GridItem
          colSpan={{ base: "auto", lg: 7 }}
          textAlign={{ base: "center", lg: "left" }}
        >
      <chakra.h1
            mb={4}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight={{ base: "shorter", md: "none" }}
            color="gray.900"
            _dark={{ color:  "white" }}
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            Ready to start your journey with Us?
          </chakra.h1>
          <chakra.p
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="thin"
            color="gray.500"
            letterSpacing="wider"
          >
          Video games are a form of interactive entertainment that involves players controlling characters to accomplish
           goals within a virtual world. They can be played on a variety of devices, including computers, 
           consoles, and mobile phones. Video games come in a wide variety of genres, including action,
           adventure, puzzle, role-playing, and sports. They can be played for entertainment, competition, or education.
          </chakra.p>
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 4 }}>
          <Box as="form" mb={6} rounded="lg" shadow="xl">
            <Center pb={0} color="gray.700" _dark={{ color: "white" }}>
              <chakra.b pt={2}>Start talking now</chakra.b>
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              color="gray.200"
              _dark={{ color: "white" }}
            >
              <Flex>
                <VisuallyHidden>Name</VisuallyHidden>
                <Input mt={3} type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                aria-label="fullname" id="name" />
              </Flex>
              <Flex>
                <VisuallyHidden>Email Address</VisuallyHidden>
                <Input mt={0} type="email" placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                aria-label="Email" id="email" isRequired />
              </Flex>
              <Flex>
                <VisuallyHidden>Password</VisuallyHidden>
                <Input mt={4} type="password" placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
                aria-label="password" id="password" isRequired />
              </Flex>
              <Button 
              variant="solid"
              colorScheme="blackAlpha"
              bg="#006A7B"
              _dark={{ color: "inherit" }}
               w="full" py={2} type="submit">
                Sign up for free
              </Button>
            </SimpleGrid>
            <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />{" "}
        Not a robot?
         </label>
            <Flex px={6} py={4}>
              <Button
                py={2}
                w="full"
                colorScheme="blue"
                leftIcon={
                  <Icon
                    mr={1}
                    aria-hidden="true"
                    boxSize={6}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="transparent"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                  </Icon>
                }
              >
                Continue with Google
              </Button>
            </Flex>
          </Box>
          <chakra.p fontSize="xs" textAlign="center" color="gray.600">
            By signing up you agree to our{" "}
            <chakra.a color="brand.500">Terms of Service</chakra.a>
          </chakra.p>
        </GridItem>
      </SimpleGrid>
    </Box>
    <Footer></Footer>
    </Box>
  );
}

