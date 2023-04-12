import React from 'react'
import { Text, Heading, VStack, Button, HStack, Divider, Card, useBreakpointValue } from "@chakra-ui/react"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import Typewriter from 'typewriter-effect';

const Home = () => {
  const isMobile = useBreakpointValue({ base: true, sm: false })

  const handleClick = () => {
    window.open("https://drive.google.com/file/d/10FdVUHI3nLJzKavREff1dayztKlLoWWK/view")
  }

  return (
    <HStack mx={["20px", "0px"]} spacing={2} bg="bgColor">
      <VStack color="textColor" gap={2} minH="100vh" justifyContent={"center"} alignItems={isMobile ? "center" : "flex-start"} id='home'>
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
        <Text textColor="textColorSecondary" align={isMobile ? "center" : "left"}>My focus as a web developer is to create websites that are not only visually appealing but also functional and user-friendly, with attention to detail, scalability, and performance.</Text>
        <a href="https://drive.google.com/uc?export=download&id=10FdVUHI3nLJzKavREff1dayztKlLoWWK">
          <Button borderRadius="3px" onClick={handleClick} _hover={{ backgroundColor: "mainColor" }} bg="mainColorSecondary" color="white">Download Resume</Button>
        </a>
        <HStack spacing={5}>
          <a href='https://github.com/atuls2060' target="_blank">
            <Card bg="mainColorSecondary" borderRadius="3px" padding="8px" shadow="sm" color="white" cursor="pointer" _hover={{ shadow: "md", bg: "mainColor" }}>
              <AiOutlineGithub />
            </Card>
          </a>
          <a href='https://www.linkedin.com/in/atul-singh-453464218' target="_blank">
            <Card bg="mainColorSecondary" borderRadius="3px" padding="8px" shadow="sm" color="white" cursor="pointer" _hover={{ shadow: "md", bg: "mainColor" }}>
              <AiFillLinkedin />
            </Card>
          </a>
        </HStack>
      </VStack >
    </HStack >
  )
}

export default Home