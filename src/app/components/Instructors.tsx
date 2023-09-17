import React from 'react'

import {Box, Container, Center, Heading, SimpleGrid, Image, Text} from '@chakra-ui/react'
import { RevealWrapper } from 'next-reveal'

export default function Instructors() {
  return (
    <Box> 
      <RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
        <Container maxW={1400}>

              <Center>
                   <Heading >Introducing Our Instructors</Heading>
             </Center>
             <SimpleGrid minChildWidth='200px'>
              <Box>
                   <Center> 
                    <Image borderRadius='full' width={100} height={100} src='/ZiaKhan.webp'/>
                   </Center>
                   
                <Heading textAlign='center' size='md'>Zia Khan</Heading> <br />
                <Text px='40px' textAlign='center'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                   
              </Box>

              <Box>
                   <Center> 
                    <Image borderRadius='full' width={100} height={100} src='/zeeshan.webp'/>
                   </Center>
                   
                <Heading textAlign='center' size='md'>Zeeshan Hanif</Heading> <br />
                <Text px='40px' textAlign='center'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                   
              </Box>

              <Box>
                   <Center> 
                    <Image borderRadius='full' width={100} height={100} src='/daniyal.webp'/>
                   </Center>
                   
                <Heading textAlign='center' size='md'>Daniyal Nagori</Heading> <br />
                <Text px='40px' textAlign='center'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                   
              </Box>

              <Box>
                   <Center> 
                    <Image borderRadius='full' width={100} height={100} src='/hira.webp'/>
                   </Center>
                   
                <Heading textAlign='center' size='md'>Hira Khan</Heading> <br />
                <Text px='40px' textAlign='center'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                   
              </Box>

              <Box>
                   <Center> 
                    <Image borderRadius='full' width={100} height={100} src='/adil.webp'/>
                   </Center>
                   
                <Heading textAlign='center' size='md'>Adil Altaf</Heading> <br />
                <Text px='40px' textAlign='center'>Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders</Text>
                   
              </Box>

             </SimpleGrid>
             
        </Container>
        
        </RevealWrapper>
    </Box>
    
  )
}
