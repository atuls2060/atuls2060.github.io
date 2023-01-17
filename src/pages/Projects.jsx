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
            image: "https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/project-images%2Fmyglamn.jpg?alt=media&token=89ad7471-c310-4532-8a9f-9b89da3664fb",
            live: "https://lookyourbest.netlify.app/",
            github: "https://github.com/atuls2060/icky-committee-8700",
            title: "Lookyourbest makeup brand",
            tech: "",
            desc: "MyGlamm is an e-commerce website that sells cosmetics and personal care products."
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/project-images%2Fhotjar.png?alt=media&token=5d675a1d-b605-4f06-9201-dbf5039cee55",
            live: "https://dazzling-dango-48eee9.netlify.app/",
            github: "https://github.com/atuls2060/tart-pigs-946",
            title: "Hotjar Analytics Tools",
            tech: "",
            desc: "Hotjar is a product experience insights tool that gives you behavior analytics and feedback data"
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/project-images%2Fgeekbuying.jpg?alt=media&token=f13ec751-c968-45a3-b601-83a246241901",
            live: "https://roaring-kitsune-efe065.netlify.app/",
            github: "https://github.com/atuls2060/hanging-teeth-7136",
            title: "Gadget Factory",
            tech: "",
            desc: "Gadget Factory is an e-commerce website that sells Electronics products."
        },
        {
            image: "https://firebasestorage.googleapis.com/v0/b/look-your-best.appspot.com/o/project-images%2Fweather-map.jpg?alt=media&token=f74d9409-fc58-4858-a7f8-2add0940bc3e",
            live: "https://lookyourbest.netlify.app/",
            github: "https://atul-weather-map.netlify.app/",
            title: "Weather Map",
            tech: "",
            desc: "Get weather details of world, Search by city name and get temperature, wind speed,clouds, humidity"
        }

    ]

    return (
        <Box id='projects' paddingTop={"100px"}>
            <Heading mb="70px" textAlign='center'>Projects</Heading>
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