'use client'

import { Box, Container, SimpleGrid, Heading, Text, Grid, Image} from "@chakra-ui/react"
import React from 'react'
// import Image from "next/image"
import png from "../../../public/Logo.png"
import Link from "next/link"

export default function Footer() {
    return (
   <Box bg='black'>
     <Container maxW={1300}>
     <SimpleGrid textAlign={{lg:'start',base:'center'}} spacing='30px' py='60px' templateColumns={{base:'repeat(1, 1fr)', lg:'repeat(4, 1fr)'}}>
      <Box> 
        <Heading pb='20px' color='white'>About Us</Heading>
        <Image m={{base:'auto',lg:'0'}} src='/Logo.png' alt='Panaverse'></Image>
        <Text pt='15px' pr={{lg:'40px',base:'0'}} color='gray'>Currently, Web 3.0, Metaverse and Edge Computing are the futures of the web. Panaverse Dao is a movement that seeks to promote these concepts</Text>
      </Box>
      <Box>
       
       <Heading color='white'>Useful Links</Heading>
       <Grid pt='40px' color='gray'>
       <Link href='/'>Home</Link>
       <Link href='/'>Syllabus</Link>
       <Link href='/'>Explore</Link>
       <Link href='/'>About</Link>
       <Link href='/'>Contact</Link>
       </Grid>
</Box>
      <Box>
        <Heading color='white'>Follow Us</Heading>
      <Grid pt='40px' color='gray'>
       <Link href='/'>Facebook</Link>
       <Link href='/'>Linkedin</Link>
       <Link href='/'>Twitter</Link>
       <Link href='/'>Youtube</Link>
       <Link href='/'>GitHub</Link>
      </Grid>
      </Box>
      <Box> 
        <Heading color='white'>Contact Us</Heading>
        <Grid pt='40px' color='gray'>
       <Link href='/'>+92 123 45678 9</Link>
       <Link href='/'>gullmaimoona853@gmail.com</Link>
       <Link href='/'>Karachi Pakistan</Link>
       </Grid>
      </Box>
      </SimpleGrid>
</Container>
     </Box>     
     )
}
