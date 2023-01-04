import React from 'react'
import { Text, Heading, VStack, Container, Button } from "@chakra-ui/react"

const Home = () => {
  return (
    <Container minW="60%">
      <VStack gap={2} minH="100vh" justifyContent={"center"} alignItems={"flex-start"}>
        <Text>Hi, my name is</Text>
        <Heading>Atul Singh</Heading>
        <Heading color="darkgray">I build web Applications</Heading>
        <Text align="left">Passionate for learning with an endless supply of optimism and curiosity. A solution driven Full Stack Web Developer skilled in MERN Stack. Highly passionate about building web applications and confident enough to learn new things with a curious mind, an absolute passion for coding and the ability to write clean and efficient code. Always looking to contribute to open-source projects and to better my coding skills</Text>
        <Button bg="#FF597B" color="white">Download Resume</Button>
      </VStack>
    </Container>
  )
}

export default Home