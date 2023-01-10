import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BiHeart } from 'react-icons/bi'

const Footer = () => {
    return (
        <Flex  bg="brand" color="white" p={5} justifyContent={"center"} alignItems={"center"} gap={2}><Text>Made with</Text><BiHeart /><Text> by Atul Singh</Text></Flex>
    )
}

export default Footer