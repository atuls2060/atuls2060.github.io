import React from 'react'
import { Card, CardBody, Button, Heading, Stack, Text, Image, Divider, Flex, Tag, Grid } from '@chakra-ui/react'

const ProjectCard = ({ image, title, desc, tech, live, github, }) => {
    return (
        <Card bg="bgColor" color="textColor" border="1px solid" borderColor="mainColor" _hover={{ boxShadow: "xl" }}>
            <CardBody>
                <Image
                    src={image}
                    alt=''
                    borderRadius='lg'
                    height="270px"
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{title}</Heading>
                    <Text textColor="textColorSecondary">
                        {
                            desc
                        }
                    </Text>

                    <Divider borderColor="mainColor" />
                    <Grid gridTemplateRows="80px auto">
                    <Flex alignItems="self-start" justifyContent="center" flexWrap="wrap" gap="12px">
                        {
                            tech.map((item, index) => {
                                return <Tag bg="mainColor" color="textColorThird" key={index}>{item}</Tag>
                            })
                        }
                    </Flex>
                    <Flex justifyContent="space-between">
                        <a href={github} target="_blank">
                            <Button color="textColor" variant='outline' borderColor="mainColor" _hover={{backgroundColor:"mainColor"}}>
                                Github
                            </Button>
                        </a>
                        <a href={live} target="_blank">
                            <Button color="textColor" variant='outline' borderColor="mainColor" _hover={{backgroundColor:"mainColor"}}>
                                Live
                            </Button>
                        </a>
                    </Flex>
                    </Grid>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ProjectCard