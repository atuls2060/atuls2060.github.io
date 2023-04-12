import React from 'react'
import { Box, Heading, VStack, Text, Image, Flex, useBreakpointValue, HStack } from "@chakra-ui/react"
import { MdDesignServices } from "react-icons/md"

const About = () => {
  const direction = useBreakpointValue({
    base: "column",
    sm: "row",
    md: "row"
  })
  return (
    <Box id='about' paddingTop={"100px"}>
      <Heading color="headingColor" mb="70px" textAlign="center">About</Heading>
      <Flex alignItems="center" gap="50px" p={0} direction={direction} >
        <Box width={direction === "column" ? "55%" : "35%"} >
          <Image height={{ base: "240px", md: "340px" }} borderRadius="12px" src="https://avatars.githubusercontent.com/u/34827845?v=4" alt="atul singh" />
          <HStack><Text mx="auto" w="fit-content" mt="30px" color="mainColorSecondary" p="5px" bg="rgba(0,0,0,.1)">{"<I build Stuff />"}</Text> </HStack>
        </Box>
        <VStack color="textColor" gap="5px" minHeight="40vh" h="full" height="100%" align="flex-start" justifyContent="center" width={direction === "column" ? "90%" : "65%"} >
          <Text>My Intro</Text>
          <Heading size="md">Atul Singh</Heading>
          <Text color="mainColorSecondary" p="5px" bg="rgba(0,0,0,.1)">Full Stack Developer</Text>
          <Text color="textColorSecondary" textAlign="start">A fresher web developer with a keen interest in full-stack development. I recently completed my course from Masai School which is a 35 Weeks Full Stack Web Development Course.<br /><br /> I'm proficient in programming languages like Java, JavaScript, and I've developed a solid understanding of various front-end and back-end technologies.
            <br />
            <br />
            My focus as a web developer is to create websites that are both functional and aesthetically pleasing, while ensuring that they provide an excellent user experience. I'm always looking for new challenges to expand my skill set and stay on top of the latest web development trends.
            <br />
            <br />
            In my free time, I enjoy attending web development meetups and  working on personal projects</Text>
        </VStack>
      </Flex>
    </Box>
  )
}

export default About