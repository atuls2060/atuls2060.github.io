import React from 'react'
import Styles from "../Components/SkillCard.module.css"
import { Box, Flex, Grid, Heading, useBreakpointValue } from '@chakra-ui/react'
import SkillCard from '../Components/SkillCard'

const Tools = () => {
    const colCount = useBreakpointValue({ base: '2', md: '3', xl: '4' })

    const tools = [
        {
            label: "Github",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        {
            label: "Vs Code",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },
        {
            label: "Docker",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        },
        {
            label: "Postman",
            url: "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"
        },
        {
            label: "Adobe xd",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-line.svg"
        }
    ]

    return (
        <Box id='skills' paddingTop={"100px"}>
            <Heading color="headingColor" textAlign="center" mb="70px">Tools</Heading>
            <Flex mt="120px" justifyContent={"center"} columnGap="20px" rowGap="60px" flexWrap="wrap">
                {
                    tools.map((item, index) => {
                        return index < 3 ? <SkillCard key={index} {...item} /> : ""
                    })
                }
            </Flex>
            <Flex mt="60px" justifyContent={"center"} columnGap="20px" rowGap="60px" flexWrap="wrap">
                {
                    tools.map((item, index) => {
                        return index >= 3 & index < 5 ? <SkillCard key={index} {...item} /> : ""
                    })
                }
            </Flex>
            <Flex mt={["100px", "60px"]} justifyContent={"center"} columnGap="20px" rowGap="60px" flexWrap="wrap">
                {
                    tools.map((item, index) => {
                        return index >= 5 & index < 8 ? <SkillCard key={index} {...item} /> : ""
                    })
                }
            </Flex>
            <Flex mt="60px" justifyContent={"center"} columnGap="20px" rowGap="60px" flexWrap="wrap">
                {
                    tools.map((item, index) => {
                        return index >= 8 & index <= 9 ? <SkillCard key={index} {...item} /> : ""
                    })
                }
            </Flex>
        </Box>
    )
}

export default Tools