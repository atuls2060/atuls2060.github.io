import {Box,Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../Components/ProjectCard'

const Projects = () => {
    return (
        <Box id='projects'>
            <Heading mb="70px" textAlign='center'>Projects</Heading>
            <Grid gap={5} gridTemplateColumns="repeat(2,1fr)">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </Grid>
        </Box>
    )
}

export default Projects