import React from 'react'
import { Card, CardBody, Button, Heading, Stack, Text, Image, Divider, HStack, Spacer, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ image, title, desc, tech, live, github, }) => {
    return (
        <Card borderTop="1px solid #e0e0e0" _hover={{ boxShadow: "xl" }}>
            <CardBody>
                <Image
                    src={image}
                    alt=''
                    borderRadius='lg'
                    height="270px"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text>
                        {
                            desc
                        }
                    </Text>

                    <Divider />

                    <Flex justifyContent="space-between">
                        <a href={github}  target="_blank">
                            <Button variant='outline' colorScheme='brand'>
                                Github
                            </Button>
                        </a>
                        <a href={live}  target="_blank">
                        <Button variant='outline' colorScheme='brand'>
                            Live
                        </Button>
                        </a>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ProjectCard