import { Card, CardBody, CardHeader, Heading,Image } from '@chakra-ui/react'
import React from 'react'

const SkillCard = ({label,url}) => {
  return (
    <Card cursor="pointer" boxShadow="xs" border="1px solid #e0e0e0" _hover={{boxShadow:"xl"}}>
        <CardHeader alignContent={"center"}>
            <Image m="auto" w="50%" src={url} alt="react"/>
        </CardHeader>
        <CardBody>
            <Heading size={"md"}>{label}</Heading>
        </CardBody>
    </Card>
  )
}

export default SkillCard