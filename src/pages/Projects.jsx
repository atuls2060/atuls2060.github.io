import { Box, Grid, Heading, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
    const breakpointValue = useBreakpointValue({
        base: "1",
        md: "2"
    })

    const projectData = [
        {
            image: "https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/project-images%2Fapnamart.png?alt=media&token=826500ec-0c07-4067-b7a2-9ee9519c177a",
            live: "https://apna-mart.vercel.app/",
            github: "https://github.com/atuls2060/ApnaMart",
            title: "Apna Mart",
            tech: ["JavaScript", "Next js","Redux","Chakra ui","Json-server", "Json-Server-Auth", "JWT"],
            desc: "Apna mart is a clone of Amazon website, here your can create account search products and place orders"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/project-images%2Fmyglamn.jpg?alt=media&token=89ad7471-c310-4532-8a9f-9b89da3664fb",
            live: "https://lookyourbest.netlify.app/",
            github: "https://github.com/atuls2060/icky-committee-8700",
            title: "Lookyourbest makeup brand",
            tech: ["React js", "Chakra Ui", "JavaScript", "Firebase", "Html", "Css"],
            desc: "MyGlamm is an e-commerce website that sells cosmetics and personal care products."
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/project-images%2Fhotjar.png?alt=media&token=5d675a1d-b605-4f06-9201-dbf5039cee55",
            live: "https://dazzling-dango-48eee9.netlify.app/",
            github: "https://github.com/atuls2060/tart-pigs-946",
            title: "Hotjar Analytics Tools",
            tech: ["Html", "Css", "JavaScript"],
            desc: "Hotjar is a product experience insights tool that gives you behavior analytics and feedback data"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/project-images%2Fweather-map.jpg?alt=media&token=f74d9409-fc58-4858-a7f8-2add0940bc3e",
            live: "https://atul-weather-map.netlify.app/",
            github: "https://github.com/atuls2060/weather-map",
            title: "Weather Map",
            tech: ["Html", "Css", "JavaScript", "Axios"],
            desc: "Get weather details of world, Search by city name and get temperature, wind speed,clouds, humidity"
        }

    ]

    return (
        <Box id='projects' paddingTop={"100px"}>
            <Heading color="headingColor" mb="70px" textAlign='center'>Projects</Heading>
            <Grid gap={5} gridTemplateColumns={`repeat(${breakpointValue},1fr)`}>
                {
                    projectData.map((item) => {
                        return <ProjectCard {...item} />
                    })
                }
            </Grid>
        </Box>
    )
}

export default Projects