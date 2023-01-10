import React from 'react'
import { Card, CardBody, CardFooter, Button, Heading, Stack, Text, Image, Divider, HStack, Spacer, Flex } from '@chakra-ui/react'

const ProjectCard = () => {
    return (
        <Card>
            <CardBody>
                <Image
                    src='https://sgwebpartners.com/wp-content/uploads/2019/04/woocommerce-wholesale-storm-creek-983x553.jpg'
                    alt=''
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Lorem ipsum dolor sit amet.</Heading>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis numquam quibusdam provident dolorem nesciunt!
                    </Text>

                    <Divider />

                    <Flex justifyContent="space-between">
                        <Button variant='outline' colorScheme='brand'>
                            Github
                        </Button>
                        <Button variant='outline' colorScheme='brand'>
                            Live
                        </Button>
                    </Flex>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ProjectCard