import React from 'react'
import { Text, Heading, VStack, Button } from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <VStack gap={2} minH="100vh" justifyContent={"center"} alignItems={"flex-start"} id='home'>
      <Text>Hi, my name is</Text>
      <Heading>Atul Singh</Heading>
      <Heading  color="darkgray">
        <Typewriter
          options={{
            strings:["Full Stack Web Developer","I build web Applications"],
            delay: 100,
            autoStart: true,
            loop: true,
          }}
        />
      </Heading>
      {/* <Heading color="darkgray">I build web Applications</Heading> */}
      <Text align="left">Passionate for learning with an endless supply of optimism and curiosity. A solution driven Full Stack Web Developer skilled in MERN Stack. Highly passionate about building web applications and confident enough to learn new things with a curious mind, an absolute passion for coding and the ability to write clean and efficient code. Always looking to contribute to open-source projects and to better my coding skills</Text>
      <Button bg="#3C6255" color="white">Download Resume</Button>
    </VStack>
  )
}

export default Home