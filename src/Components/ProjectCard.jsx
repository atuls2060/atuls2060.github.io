import React from 'react'
import { Card, CardBody, Button, Heading, Stack, Text, Image, Divider, Flex, Tag, Grid, Box } from '@chakra-ui/react'

const ProjectCard = ({ image, title, desc, tech, live, github, }) => {
    return (
        <Box p="20px" boxShadow="0 2px 4px rgba(0, 0, 0, 0.15)" bg="bgColor" color="textColor" _hover={{ boxShadow: "xl" }}>
            <Image
                src={image}
                alt=''
                borderRadius='lg'
                height="270px"
            />
            <Stack align="stretch" mt='6' spacing='3'>
                <Heading size='md'>{title}</Heading>
                <Text minHeight="70px" height="fit-content" textColor="textColorSecondary">
                    {
                        desc
                    }
                </Text>

                <Divider borderColor="mainColor" />
                <Grid >
                    <Flex alignItems="self-start" justifyContent="center" flexWrap="wrap" gap="12px">
                        {
                            tech.map((item, index) => {
                                return <Tag bg="mainColor" color="textColorThird" key={index}>{item}</Tag>
                            })
                        }
                    </Flex>
                </Grid>
                <Flex pt="3" justifyContent="space-between">
                    <a href={github} target="_blank">
                        <Button color="textColor" variant='outline' borderColor="mainColor" _hover={{ backgroundColor: "mainColor" }}>
                            Github
                        </Button>
                    </a>
                    <a href={live} target="_blank">
                        <Button color="textColor" variant='outline' borderColor="mainColor" _hover={{ backgroundColor: "mainColor" }}>
                            Live
                        </Button>
                    </a>
                </Flex>
            </Stack>
        </Box>
    )
}

export default ProjectCard