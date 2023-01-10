import React from 'react'
import { Box, Heading, VStack, Text, Image, Flex } from "@chakra-ui/react"

const About = () => {
  return (
    <Box id='about'>
      <Heading mb="70px" textAlign="center">About</Heading>
      <Flex alignItems="center" gap="40px" p={2} >
        <Box width="35%" >
          <Image borderRadius="12px" src="https://avatars.githubusercontent.com/u/34827845?v=4" alt="atul singh" />
        </Box>
        <VStack gap="5px" minHeight="40vh" h="full" height="100%" align="flex-start" justifyContent="center" width="65%" >
          <Text>My Intro</Text>
          <Heading size="md">Atul Singh</Heading>
          <Text textAlign="start">Passionate for learning with an endless supply of optimism and curiosity. A solution driven Full Stack Web Developer skilled in MERN Stack. Highly passionate about building web applications and confident enough to learn new things with a curious mind, an absolute passion for coding</Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export default About