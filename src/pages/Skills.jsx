import { Box, Container, Grid, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import SkillCard from '../Components/SkillCard'

const Skills = () => {

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
            label: "Postman",
            url: "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667"
        },
        {
            label: "Github",
            url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        }
    ]

    return (
        <Box id='skills'>
            <Heading mb="70px">Skills</Heading>
            <Grid justifyContent={"center"} alignItems={"center"} gridTemplateColumns="repeat(4,1fr)"  gap={10}>
                {
                    skills.map((item,index) => {
                        return <SkillCard key={index} {...item} />
                    })
                }
            </Grid>
        </Box>
    )
}

export default Skills