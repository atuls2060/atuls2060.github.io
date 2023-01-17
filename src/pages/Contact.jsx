import React, { useState } from 'react'
import { Box, FormControl, Heading, HStack, Input, Textarea, VStack, Text, Flex, Card, CardBody, useBreakpointValue, Stack, useToast, Button } from "@chakra-ui/react"
import { IoMdCall, IoMdLocate } from "react-icons/io"
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai"

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

    setTimeout(() => {
      setLoading(false)
    }, 700)
    // try {
    //   const msg = await client.sendAsync({
    //     text: message,
    //     from: 'atuls2060@gmail.com',
    //     to: email,
    //     cc: 'atuls2060@gmail.com',
    //     subject: subject,
    //   });
    //   console.log(msg);
    // } catch (err) {
    //   console.error(err);
    // }
  }

  return (
    <Box minHeight="90vh" id='contact' paddingTop="100px" paddingBottom={["90px", "0px"]}>
      <Heading mb="70px">Contact Me</Heading>
      <Flex width="100%" flexDirection={direction} gap='40px' justifyContent="space-evenly" alignItems="center">
        <Stack direction={direction === 'row' ? 'column' : 'row'} gap={[2, 2]} align="flex-start">

          <a href='https://www.linkedin.com/in/atul-singh-453464218' target="_blank">
            <Stack direction={direction} align="center" spacing={direction === 'row' ? '40px' : '15px'}>
              <Card borderRadius="4px" border="1px solid #f4f4f4">
                <CardBody>
                  <AiFillLinkedin />
                </CardBody>
              </Card>
              <VStack align={direction === 'row' ? 'flex-start' : 'center'}>
                <Heading hidden={direction === 'column'} size="sm">Linked In</Heading>
                <Text fontSize={['10px', "15px"]}>atul-singh-453464218</Text>
              </VStack>
            </Stack>
          </a>
          <a href='https://github.com/atuls2060' target="_blank">
            <Stack direction={direction} align="center" spacing={direction === 'row' ? '40px' : '15px'}>
              <Card borderRadius="4px" border="1px solid #f4f4f4">
                <CardBody>
                  <AiOutlineGithub />
                </CardBody>
              </Card>
              <VStack align={direction === 'row' ? 'flex-start' : 'center'}>
                <Heading hidden={direction === 'column'} size="sm">GitHub</Heading>
                <Text fontSize={['10px', "15px"]}>atuls2060</Text>
              </VStack>
            </Stack>
          </a>

          <Stack direction={direction} align="center" spacing={direction === 'row' ? '40px' : '15px'}>
            <Card borderRadius="4px" border="1px solid #f4f4f4">
              <CardBody>
                <IoMdCall />
              </CardBody>
            </Card>
            <VStack align={direction === 'row' ? 'flex-start' : 'center'}>
              <Heading hidden={direction === 'column'} size="sm">Call Me</Heading>
              <Text fontSize={['10px', "15px"]}>+91 8839652312</Text>
            </VStack>
          </Stack>
          <Stack direction={direction} align="center" spacing={direction === 'row' ? '40px' : '15px'}>
            <Card borderRadius="4px" border="1px solid #f4f4f4">
              <CardBody>
                <IoMdLocate />
              </CardBody>
            </Card>
            <VStack align={direction === 'row' ? 'flex-start' : 'center'}>
              <Heading hidden={direction === 'column'} size="sm">Address</Heading>
              <Text fontSize={['10px', "15px"]}>MadhyaPradesh, India</Text>
            </VStack>
          </Stack>
        </Stack>
        <FormControl maxW={direction === 'row' ? '50%' : '90%'}>
          <HStack mb={5} gap={2}><Input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Your Name' focusBorderColor='brand' />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' focusBorderColor='brand' /></HStack>
          <Textarea value={message} onChange={(e) => setMessage(e.target.value)} mb={5} minHeight={200} placeholder="Message" focusBorderColor='brand' />
          <Button width="100%" isLoading={loading} loadingText='Sending' _hover={{ backgroundColor: "#39a16a" }} cursor="pointer" disabled={subject === "" || email === "" || message === ""} onClick={sendEmail} backgroundColor="brand" color="white" >Send</Button>
        </FormControl>
      </Flex>
    </Box>
  )
}

export default Contact