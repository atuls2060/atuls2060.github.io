import React from 'react'
import { Text, Heading, VStack, Button, HStack, Divider, Card, CardBody } from "@chakra-ui/react"
import { IoMdCall } from "react-icons/io"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <HStack mx={["20px", "0px"]} spacing={2}>
      <VStack gap={2} minH="100vh" justifyContent={"center"} alignItems={"flex-start"} id='home'>
        <Text>Hi, my name is</Text>
        <Heading>Atul Singh</Heading>
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
        <Text align="left">Passionate for learning with an endless supply of optimism and curiosity. A solution driven Full Stack Web Developer skilled in MERN Stack. Highly passionate about building web applications and confident enough to learn new things with a curious mind, an absolute passion for coding and the ability to write clean and efficient code. Always looking to contribute to open-source projects and to better my coding skills</Text>
        <a href='https://drive.google.com/file/d/10FdVUHI3nLJzKavREff1dayztKlLoWWK/view' target="_blank">
          <Button  _hover={{backgroundColor:"#39a16a"}} bg="#3C6255" color="white">Download Resume</Button>
        </a>
      </VStack>
      <VStack spacing={5}>
        <Divider orientation='vertical' w="2px" height="200px" bg="brand" />
        <a href='https://github.com/atuls2060' target="_blank">
          <Card padding="8px" shadow="sm" border="1px solid #e0e0e0" cursor="pointer" _hover={{ shadow: "md" }}>
            <AiOutlineGithub />
          </Card>
        </a>
        <a href='https://www.linkedin.com/in/atul-singh-453464218' target="_blank">
          <Card padding="8px" shadow="sm" border="1px solid #e0e0e0" cursor="pointer" _hover={{ shadow: "md" }}>
            <AiFillLinkedin />
          </Card>
        </a>
      </VStack>
    </HStack>
  )
}

export default Home