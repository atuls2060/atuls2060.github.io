import React, { useState } from 'react'
import { Box, FormControl, Heading, HStack, Input, Textarea, VStack, Text, Flex, Card, CardBody, useBreakpointValue, Stack, useToast, Button } from "@chakra-ui/react"
import { IoMdCall, IoMdLocate } from "react-icons/io"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"
import sendMesage from '../Utils/sendMessage'

// email code
// import { SMTPClient } from 'emailjs';
// const client = new SMTPClient({
//   user: 'user',
//   password: 'password',
//   host: 'smtp.your-email.com',
//   ssl: true,
// });

const Contact = () => {
  let direction = useBreakpointValue({ base: 'column', md: 'row', xl: 'row' })
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const toast = useToast()


  const sendEmail = async (e) => {
    setLoading(true)

    try {
      sendMesage({ subject, email, message })
      setLoading(false)
      toast({
        position: "top",
        title: 'Message Sent Successfully.',
        description: "I will get back to you soon.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      setEmail("");
      setSubject("");
      setMessage("")
    } catch (error) {
      setLoading(false)
    }
  
  }

  return (
    <Box minHeight="90vh" id='contact' paddingTop="100px" paddingBottom={["90px", "0px"]}>
      <Heading color="headingColor" textAlign="center" mb="70px">Contact Me</Heading>
      <Flex width="100%" flexDirection={direction} gap='40px' justifyContent="space-evenly" alignItems="center">
        <Stack direction={direction === 'row' ? 'column' : 'row'} gap={[2, 2]} align="flex-start">

          <a href='https://www.linkedin.com/in/atul-singh-453464218' target="_blank">
            <Stack direction={direction} align="center" spacing={direction === 'row' ? '40px' : '15px'}>
              <Card bg="bgColor" borderRadius="4px" border="1px solid" borderColor="mainColor" color="textColor">
                <CardBody>
                  <AiFillLinkedin />
                </CardBody>
              </Card>
              <VStack align={direction === 'row' ? 'flex-start' : 'center'}>
                <Heading hidden={direction === 'column'} color="textColorSecondary" size="sm">Linked In</Heading>
                <Text color="textColor" fontSize={['10px', "15px"]}>atul-singh-453464218</Text>
              </VStack>
            </Stack>
          </a>
          <a href='https://github.com/atuls2060' target="_blank">
            <Stack direction={direction} align="center" spacing={direction === 'row' ? '40px' : '15px'}>
              <Card bg="bgColor" borderRadius="4px" border="1px solid" borderColor="mainColor" color="textColor">
                <CardBody>
                  <AiOutlineGithub />
                </CardBody>
              </Card>
              <VStack align={direction === 'row' ? 'flex-start' : 'center'}>
                <Heading hidden={direction === 'column'} color="textColorSecondary" size="sm">GitHub</Heading>
                <Text color="textColor" fontSize={['10px', "15px"]}>atuls2060</Text>
              </VStack>
            </Stack>
          </a>

          <Stack direction={direction} align="center" spacing={direction === 'row' ? '40px' : '15px'}>
            <Card bg="bgColor" borderRadius="4px" border="1px solid" borderColor="mainColor" color="textColor">
              <CardBody>
                <IoMdCall />
              </CardBody>
            </Card>
            <VStack align={direction === 'row' ? 'flex-start' : 'center'}>
              <Heading hidden={direction === 'column'} color="textColorSecondary" size="sm">Call Me</Heading>
              <Text color="textColor" fontSize={['10px', "15px"]}>+91 8839652312</Text>
            </VStack>
          </Stack>
          <Stack direction={direction} align="center" spacing={direction === 'row' ? '40px' : '15px'}>
            <Card bg="bgColor" borderRadius="4px" border="1px solid" borderColor="mainColor" color="textColor">
              <CardBody>
                <IoMdLocate />
              </CardBody>
            </Card>
            <VStack align={direction === 'row' ? 'flex-start' : 'center'}>
              <Heading hidden={direction === 'column'} color="textColorSecondary" size="sm">Address</Heading>
              <Text color="textColor" fontSize={['10px', "15px"]}>MadhyaPradesh, India</Text>
            </VStack>
          </Stack>
        </Stack>
        <FormControl maxW={direction === 'row' ? '50%' : '90%'}>
          <HStack mb={5} gap={2}><Input _placeholder={{color:"#718096"}} value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Your Name' focusBorderColor='mainColor' borderColor="mainColor" _hover={{borderColor:"mainColorSecondary"}} color="textColor" plaCo/>
            <Input _placeholder={{color:"#718096"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' focusBorderColor='mainColor' borderColor="mainColor" _hover={{borderColor:"mainColorSecondary"}} color="textColor" plaCo /></HStack>
          <Textarea _placeholder={{color:"#718096"}} value={message} onChange={(e) => setMessage(e.target.value)} mb={5} minHeight={200} placeholder="Message" focusBorderColor='mainColor' borderColor="mainColor" _hover={{borderColor:"mainColorSecondary"}} color="textColor" plaCo />
          <Button width="100%" isLoading={loading} loadingText='Sending' _hover={{ backgroundColor: "mainColorSecondary" }} cursor="pointer" disabled={subject === "" || email === "" || message === ""} onClick={sendEmail} backgroundColor="mainColor" color="textColor" plaCo >Send</Button>
        </FormControl>
      </Flex>
    </Box>
  )
}

export default Contact