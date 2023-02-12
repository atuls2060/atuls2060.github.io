import React from 'react'
import { Text, Heading, VStack, Button, HStack, Divider, Card } from "@chakra-ui/react"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import Typewriter from 'typewriter-effect';

const Home = () => {

  const handleClick = () => {
    window.open("https://drive.google.com/file/d/10FdVUHI3nLJzKavREff1dayztKlLoWWK/view")
  }

  return (
    <HStack mx={["20px", "0px"]} spacing={2} bg="bgColor">
      <VStack color="textColor" gap={2} minH="100vh" justifyContent={"center"} alignItems={"flex-start"} id='home'>
        <Text>Hi, my name is</Text>
        <Heading >Atul Singh</Heading>
        <Heading color="darkgray" size={["md", "xl"]}>
          <Typewriter
            options={{
              strings: ["Full Stack Web Developer", "I build web Applications"],
              delay: 100,
              autoStart: true,
              loop: true,
            }}
          />
        </Heading>
        {/* <Heading color="darkgray">I build web Applications</Heading> */}
        <Text textColor="textColorSecondary" align="left">Passionate for learning with an endless supply of optimism and curiosity. A solution driven Full Stack Web Developer skilled in MERN Stack. Highly passionate about building web applications and confident enough to learn new things with a curious mind, an absolute passion for coding and the ability to write clean and efficient code. Always looking to contribute to open-source projects and to better my coding skills</Text>
        <a href="https://drive.google.com/uc?export=download&id=10FdVUHI3nLJzKavREff1dayztKlLoWWK">
          <Button onClick={handleClick} _hover={{ backgroundColor: "mainColor" }} bg="mainColorSecondary" color="white">Download Resume</Button>
        </a>
      </VStack>
      <VStack spacing={5}>
        <Divider orientation='vertical' w="2px" borderColor="mainColor" height="200px" bg="mainColor" />
        <a href='https://github.com/atuls2060' target="_blank">
          <Card bg="bgColor" padding="8px" shadow="sm" border="1px solid" borderColor="mainColor" color="textColor" cursor="pointer" _hover={{ shadow: "md" }}>
            <AiOutlineGithub />
          </Card>
        </a>
        <a href='https://www.linkedin.com/in/atul-singh-453464218' target="_blank">
          <Card bg="bgColor" padding="8px" shadow="sm" border="1px solid" borderColor="mainColor" color="textColor" cursor="pointer" _hover={{ shadow: "md" }}>
            <AiFillLinkedin />
          </Card>
        </a>
      </VStack>
    </HStack>
  )
}

export default Home