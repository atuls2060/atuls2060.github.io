import React from 'react'
import { Box, FormControl, Heading, HStack, Input, Textarea, VStack, Text, Flex, Card, CardBody } from "@chakra-ui/react"
import { IoMdCall } from "react-icons/io"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

const Contact = () => {
  return (
    <Box minHeight="80vh" id='contact'>
      <Heading mb="70px">Contact Me</Heading>
      <Flex justifyContent="space-evenly">
        <VStack gap={5} align="flex-start">
          <HStack align="center" spacing="40px">
            <Card borderRadius="4px" border="1px solid #f4f4f4">
              <CardBody>
                <AiFillLinkedin />
              </CardBody>
            </Card>
            <VStack align="flex-start">
              <Heading size="sm">Linked In</Heading>
              <Text>atuls289549</Text>
            </VStack>
          </HStack>
          <HStack align="center" spacing="40px">
            <Card borderRadius="4px" border="1px solid #f4f4f4">
              <CardBody>
                <AiOutlineGithub />
              </CardBody>
            </Card>
            <VStack align="flex-start">
              <Heading size="sm">GitHub</Heading>
              <Text>atuls2060</Text>
            </VStack>
          </HStack>
          <HStack align="center" spacing="40px">
            <Card borderRadius="4px" border="1px solid #f4f4f4">
              <CardBody>
                <IoMdCall />
              </CardBody>
            </Card>
            <VStack align="flex-start">
              <Heading size="sm">Call Me</Heading>
              <Text>+91 8839652312</Text>
            </VStack>
          </HStack>
        </VStack>
        <FormControl maxW="50%">
          <HStack mb={5} gap={2}><Input type="text" placeholder='Your Name' focusBorderColor='brand' />
            <Input type="email" placeholder='Your Name' focusBorderColor='brand' /></HStack>
          <Textarea mb={5} minHeight={200} placeholder="Message" focusBorderColor='brand' />
          <Input type="submit" value="Send" backgroundColor="brand" color="white" />
        </FormControl>
      </Flex>
    </Box>
  )
}

export default Contact