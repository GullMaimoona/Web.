import { Box, Container, Flex, Heading, Text, Button, Image, Center} from '@chakra-ui/react'
import React from 'react'
import png from "../../../public/m.webp"
import jpg from "../../../public/study.webp"
import mng from "../../../public/x.webp"
import { RevealWrapper } from 'next-reveal'
//import Image from "next/image"


export default function Banner() {
  return ( 
  <>
    <Box  bgAttachment='fixed' >
    <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Container maxW={1400}>
         <Flex pt={{ lg: '150px', base: '30px' }} pb='100px' px={{ lg: '40px', base: '5px' }} display={{lg:'flex',base:'grid'}} >
           <Box flexBasis='50%' px='40px'>
           <Heading color='black' size='2xl'>The Next Generation of Internet is here with Panaverse </Heading>
           <Text  pt='15px' pr={{lg:'40px',base:'0'}}>We offer a one year program where you earn while you learn. Our program combines Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT technologies. </Text>
           <Button mt='15px' size='lg' colorScheme='blue'>Further Details</Button>
           </Box>

           <Box flexBasis='50%'>
           <Image src='/m.webp' alt="Panaverse" width= '700'  height='400' />
           </Box>
         </Flex>
        </Container>
        </RevealWrapper>
    </Box>
    <Box >
    <Container maxW={1400}>
   <Flex gap={{lg:'100px',base:'4px'}} display={{lg:'flex',base:'grid'}}>
            <Box flexBasis='50%'>
            <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
             <Image src='/study.webp'  alt="Panaverse" width={{ lg: '1000', base: '750' }} height={{ lg: '400', base: '600px' }}/>
             </RevealWrapper>
             </Box>
             

            
             <Box  flexBasis='50%' pt={{lg:'80px',base:'10px'}} px={{lg:'0',base:'10px'}}>  
             <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
             <Heading pt='20px' color='black' size='2xl'>Study Plan</Heading>
             <Text pr='40px' pt='20px'>Designed for beginners, this course will teach the basics of software development. It will last fifteen months and include both onsite and online classes. Each quarter will last 13 weeks. Students will have the opportunity to produce projects as part of the hands-on learning process.</Text>
             <Button mt='15px' size='lg' colorScheme='blue'>Check out more</Button>
             </RevealWrapper>
             </Box>
       </Flex>
        </Container>





        <Container maxW={1400} mt='60px'  mb='60px'>cd
        <Center flexDir='column' mt='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading>Our Top Courses</Heading>
    </RevealWrapper>
   </Center>

   <Center>
        <Flex mt='30px' gap='20px' >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='300px' bg='blue.100'  > 
          <Heading>Metaverse</Heading>
          <Text pt='5px'> 
          Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.
          </Text>
         </Box>
         </RevealWrapper>
        
         
        <Box textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='300px' bg='blue.100'> 
          <Heading>Blockchain</Heading>
          <Text pt='5px'>
          Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.
         </Text>
         </Box>
        
         
         <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
          <Box textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='300px' bg='blue.100'> 
          <Heading>Typescript</Heading>
          <Text pt='5px'>
          Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.
         </Text>
         </Box>    
         </RevealWrapper>  
         </Flex>
    </Center>
  </Container>
    

     <Box  bgAttachment='fixed' >
    
        <Container maxW={1400}>
         <Flex pt={{ lg: '150px', base: '30px' }} pb='100px' px={{ lg: '40px', base: '5px' }} display={{lg:'flex',base:'grid'}} >
           <Box flexBasis='50%' px='40px'>
           <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
           <Heading color='black' size='2xl'>What Is Panaverse DAO?</Heading>
           <Text  pt='15px' pr={{lg:'40px',base:'0'}}>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet. </Text>
           <Button mt='15px' size='lg' colorScheme='blue'>Read More</Button>
           </RevealWrapper>
           </Box>

           <Box flexBasis='50%'>
           <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
           <Image src='/x.webp' alt="Panaverse" width= '700'  height='400' />
           </RevealWrapper>
           </Box>
         </Flex>
        </Container>

        <Container maxW={1400} mt='40px'>
        <Center flexDir='column' mt='50px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading size='2xl'>The Program in a Nutshell</Heading>
    </RevealWrapper>
   </Center>
        
   <Center flexDir='column' mt='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading color='pink.500'>Make money while you learn</Heading>
    </RevealWrapper>
   </Center>

   <Center flexDir='column' mt='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Text textAlign='center' mb='20px'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom and will begin doing so within six months of the program’s beginning. It resembles a cross between a corporate venture and an educational project.</Text>
    </RevealWrapper>
   </Center>
 </Container>
    </Box>
    </Box>
  </>
  )
}
