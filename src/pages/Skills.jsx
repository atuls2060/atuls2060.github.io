import React from 'react'
import Styles from "../Components/SkillCard.module.css"
import { Box, Flex, Grid, Heading, useBreakpointValue } from '@chakra-ui/react'
import SkillCard from '../Components/SkillCard'

const Skills = () => {
    const colCount = useBreakpointValue({ base: '2', md: '3', xl: '4' })

    const skills = [
        {
            label: "Css3",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
            label: "JavaScript",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            label: "React",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            label: "TypeScript",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
            label: "Redux",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        }
        ,
        {
            label: "Nodejs",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
        }
        ,
        {
            label: "MongoDB",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
        }
        ,
        {
            label: "Express",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        }
        ,
        {
            label: "Next js",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
        }
        ,
        {
            label: "Firebase",
            url: "https://camo.githubusercontent.com/dd4b2422ed3bfc9da88c43d18550375c66f9584327dff7ecc19315ce50b96f07/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f66697265626173652f66697265626173652d69636f6e2e737667"
        },
        {
            label: "Github",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        }
    ]

    return (
        <Box id='skills' paddingTop={"100px"}>
            <Heading color="headingColor" textAlign="center" mb="70px">Skills</Heading>
            <Flex mt="120px" justifyContent={"center"} columnGap="20px" rowGap="60px" flexWrap="wrap">
                {
                    skills.map((item, index) => {
                        return index < 3 ? <SkillCard key={index} {...item} /> : ""
                    })
                }
            </Flex>
            <Flex mt="60px" justifyContent={"center"} columnGap="20px" rowGap="60px" flexWrap="wrap">
                {
                    skills.map((item, index) => {
                        return index >= 3 & index < 5 ? <SkillCard key={index} {...item} /> : ""
                    })
                }
            </Flex>
            <Flex mt={["100px","60px"]} justifyContent={"center"} columnGap="20px" rowGap="60px" flexWrap="wrap">
                {
                    skills.map((item, index) => {
                        return index >= 5 & index < 8 ? <SkillCard key={index} {...item} /> : ""
                    })
                }
            </Flex>
            <Flex mt="60px" justifyContent={"center"} columnGap="20px" rowGap="60px" flexWrap="wrap">
                {
                    skills.map((item, index) => {
                        return index >= 8 & index <= 9 ? <SkillCard key={index} {...item} /> : ""
                    })
                }
            </Flex>
        </Box>
    )
}

export default Skills