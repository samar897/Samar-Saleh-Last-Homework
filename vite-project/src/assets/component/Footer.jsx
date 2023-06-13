import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import React  from "react";

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
    bg={'#05D3E7'}
      _dark={{ color: "#2D2B28" }}
      rounded={'full'}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  
  return (
    <Box
      bg={"#3C9C9C"}
      color={useColorModeValue('gray.700', 'gray.200')}
      _dark={{ color: "#1A202C", bg:"#3C9C9C", border:"3px solid #006A7B"}}
       border="3px solid #5CA0AB"
       label="This is a label"
      >
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        _dark={{ color: "#1A202C" }}
        >
        
        <Container

      
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }} _dark={{ color: "#1A202C" }}>
          <Text color={"white"}> © Created By Samar</Text>
          <Stack direction={'row'} spacing={6} _dark={{ color: "#1A202C" }}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/'} >
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/'}>
              <FaInstagram />
            </SocialButton>
        

          </Stack>
        </Container>
      </Box>
    </Box>
  )
}