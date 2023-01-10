import React from 'react'
import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const Theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#FBFDFE', '#212121')(props),
            },
            ':root': {
                '--chakra-colors-brand': mode(
                    '#3C6255',
                    '#3C6255',
                )(props),
                '--chakra-colors-background': mode(
                    '#FBFDFE',
                    '#212121',
                )(props),
                '--chakra-colors-navbar_links': mode(
                    'black',
                    'white',
                )(props),
            },
        }),
    },
    colors:{
        brand:"#3C6255",
        background:"FBFDFE",
        navbar_links:"black"
    }
})

export default Theme