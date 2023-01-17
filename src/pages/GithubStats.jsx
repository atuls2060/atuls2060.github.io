import { Box, Flex, Heading, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
const GithubStats = () => {
    const direction = useBreakpointValue({
        base: "column",
        md: "row"
    })
    return (
        <Box >
            <Heading mb="70px">GitHub Calendar</Heading>
            <VStack spacing="30px" justifyContent="center">
                <Box hidden={direction === "column"} flex="1">
                    <img width="100%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=atuls2060&layout=compact" />
                </Box>
                <Flex gap={5} direction={direction}>
                    <Box  hidden={direction === "row"} flex="1">
                        <img width="100%" src="https://github-readme-stats.vercel.app/api/top-langs/?username=atuls2060&layout=compact" />
                    </Box>
                    <Box flex="1">
                        <img width="100%" src="https://github-readme-streak-stats.herokuapp.com/?user=atuls2060&amp;theme=default" alt="atul-singh-github-current-streak-stats" />
                    </Box>
                    <Box flex="1">
                        <img width="100%" src="https://github-readme-stats.vercel.app/api?username=atuls2060&show_icons=true" />
                    </Box>
                </Flex>
                <GitHubCalendar username="atuls2060" />
            </VStack>
        </Box>
    )
}

export default GithubStats