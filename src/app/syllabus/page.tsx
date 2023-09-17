'use client'

import React from 'react'
import Home from '../components/Home'
import {Box, Center, Container, Heading, Text, Flex, Image} from '@chakra-ui/react'
import { RevealWrapper } from  'next-reveal'




export default function page() {
  return(
    <>
    <Home  title='Syllabus' bgImage src='/sm.webp'/>
  
    <Box pt='30px'>
     <Container maxW={1400}> 
    <Center flexDir='column' >
      <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
   <Heading size='2xl' color='blue.700'>An Overview of the Course</Heading>
   </RevealWrapper>
   <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
   <Text mt='20px' textAlign='center' px='130px'>
    The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each
   </Text>
   </RevealWrapper>
   </Center>

   <Center flexDir='column' mt='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading  p='30px' size='xl' color='blue.800'>Same in All</Heading>
    </RevealWrapper>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
   <Text textAlign='center' px='130px'>
     Every participant of the program will start by completing the following three core courses:
   </Text>
   </RevealWrapper>
   </Center>

   <Center>
        <Flex mt='30px' gap='20px' >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='300px'  bg='blue.300'> 
          <Heading>Quarter I</Heading>
          <Text pt='5px'> 
          CS-101: Object-Oriented Programming using TypeScript and Typescript for React
          </Text>
         </Box>
         </RevealWrapper>
        
         
        <Box textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='300px'  bg='blue.300'> 
          <Heading>Quarter II</Heading>
          <Text pt='5px'>
          W2-201: Developing Planet-Scale Web 2.0 Apps and APIs using Next.js 13
         </Text>
         </Box>
        
         
         <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
          <Box textAlign='center' p='50px' boxShadow='dark-lg' borderRadius='20px' width='300px'  bg='blue.300'> 
          <Heading>Quarter III</Heading>
          <Text pt='5px'>
          $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
         </Text>
         </Box>    
         </RevealWrapper>    
        </Flex>
    </Center>
</Container>

<Container maxW={1400} mt='40px'>
  
<Center flexDir='column' mt='10px' px='10px'>
  <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading  p='30px'>Specialized Tracks</Heading>
    </RevealWrapper>
    <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
   <Text textAlign='center' px='130px'>
     After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
   </Text>
   </RevealWrapper>
   </Center>
</Container>

 <Container maxW={1400} mt='40px'>
   
   <Center flexDir='column' mt='10px' px='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading  p='30px'>1- Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
    </RevealWrapper>
    
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
   <Text textAlign='center' px='130px'>
     This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
   </Text>
   </RevealWrapper>
   </Center>
   <Center>
        <Flex mt='30px' gap='20px' >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter IV</Heading>
          <Text pt='5px'> 
          W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
          </Text>
         </Box>
        </RevealWrapper>
         <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter V</Heading>
          <Text pt='5px'>
          MV-361: Developing Planet-Scale and Augmented Metaverse Experiences
         </Text>
         </Box>      
         </RevealWrapper>
        
        </Flex>
    </Center>
    </Container>

    <Container maxW={1400} mt='40px'>
   <Center flexDir='column' mt='10px' px='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading  p='30px'>2- Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
    </RevealWrapper>
    
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
   <Text textAlign='center' px='130px'>
     The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
   </Text>
   </RevealWrapper>
   </Center>
   <Center>
        <Flex mt='30px' gap='20px' >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter IV</Heading>
          <Text pt='5px'> 
          AI-351: Developing Planet-Scale APIs and Python Programming
          </Text>
         </Box>
        </RevealWrapper>
         <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter V</Heading>
          <Text pt='5px'>
          AI-361: Deep Learning and MLOps (Machine Learning Operations)
         </Text>
         </Box>      
         </RevealWrapper>
        
        </Flex>
    </Center>
    </Container>

    <Container maxW={1400} mt='40px'>
   <Center flexDir='column' mt='10px' px='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading  p='30px'>3- Cloud-Native Computing Specialization</Heading>
    </RevealWrapper>
    
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
   <Text textAlign='center' px='130px'>
    The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.
   </Text>
   </RevealWrapper>
   </Center>
   <Center>
        <Flex mt='30px' gap='20px' >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter IV</Heading>
          <Text pt='5px'> 
          CN-351: Certified Kubernetes Application Developer (CKAD)
          </Text>
         </Box>
        </RevealWrapper>
         <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter V</Heading>
          <Text pt='5px'>
          CN-361: Developing Multi-Cloud APIs using CDK for Terraform
         </Text>
         </Box>      
         </RevealWrapper>
        
        </Flex>
    </Center>
    </Container>
 

    <Container maxW={1400} mt='40px' >
   <Center flexDir='column' mt='10px' px='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading  p='30px'>4- Ambient Computing and IoT Specialization</Heading>
    </RevealWrapper>
    
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
   <Text textAlign='center' px='130px'>
    The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.
   </Text>
   </RevealWrapper>
   </Center>
   <Center>
        <Flex mt='30px' gap='20px' >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter IV</Heading>
          <Text pt='5px'> 
          AC-351: Ambient Computing with Voice Assistants and Matter Devices
          </Text>
         </Box>
        </RevealWrapper>
         <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter V</Heading>
          <Text pt='5px'>
          AC-361: Embedded Programming using C and Rust
         </Text>
         </Box>      
         </RevealWrapper>
        
        </Flex>
    </Center>
    </Container>

    <Container maxW={1400} mt='40px'>
   <Center flexDir='column' mt='10px' px='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading  p='30px'>5- Genomics and Bioinformatics Specialization</Heading>
    </RevealWrapper>
    
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
   <Text textAlign='center' px='130px'>
    Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focus on performing complex bioinformatics analysis using the most essential Python libraries and applications
   </Text>
   </RevealWrapper>
   </Center>

   <Center>
        <Flex mt='30px' gap='20px' >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter IV</Heading>
          <Text pt='5px'> 
          Bio-351: Python for Biologists
          </Text>
         </Box>
        </RevealWrapper>
         <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter V</Heading>
          <Text pt='5px'>
          Bio-361: Bioinformatics with Python
         </Text>
         </Box>      
         </RevealWrapper>
        
        </Flex>
    </Center>
    </Container>
    
 
 


    <Container maxW={1400} mt='40px'>
   <Center flexDir='column' mt='10px' px='10px'>
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
    <Heading  p='30px'>6- Network Programmability and Automation Specialization</Heading>
    </RevealWrapper>
    
    <RevealWrapper origin='top' delay={200} duration={1000} distance='500px' reset={true}>
   <Text textAlign='center' px='130px'>
   More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.
   </Text>
   </RevealWrapper>
   </Center>
    
   <Center>
        <Flex mt='30px' gap='20px' >
          <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter IV</Heading>
          <Text pt='5px'> 
          NPA-351: CCNA(Cisco Certified Network Ass.) 200-301 Certification
          </Text>
         </Box>
        </RevealWrapper>
         <RevealWrapper origin='right' delay={200} duration={1000} distance='500px' reset={true}>
        <Box textAlign='center' p='60px' boxShadow='dark-lg' borderRadius='20px' width='320px'  bg='blue.300'> 
          <Heading>Quarter V</Heading>
          <Text pt='5px'>
          NPA-361: Network Programmability and Automation
         </Text>
         </Box>      
         </RevealWrapper>
        
        </Flex>
    </Center>
    </Container>
    
 

        
       
  




   




   </Box>
   </>
  )

}