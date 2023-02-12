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
                '--chakra-colors-mainColor': mode(
                    '#86c232',
                    '#86c232',
                )(props),
                '--chakra-colors-mainColorSecondary': mode(
                    '#61892f',
                    '#61892f',
                )(props),
                '--chakra-colors-bgColor': mode(
                    '#222629',
                    '#F4F4F4',
                )(props),
                '--chakra-colors-headingColor': mode(
                    '#86c232',
                    '#86c232',
                )(props),
                '--chakra-colors-textColor': mode(
                    'white',
                    '#37474f',
                )(props),
                '--chakra-colors-textColorSecondary': mode(
                    '#8b939b',
                    '#8b939b',
                )(props),
            },
            "::-webkit-scrollbar":{
                background:mode(
                    '#222629',
                    '#F4F4F4',
                )(props),
            }
        }),
    },
    colors:{
        mainColor:"#86c232",
        mainColorSecondary:"#61892f",
        bgColor:"#222629",
        headingColor:"#86c232",
        textColor:"white",
        textColorSecondary:"#8b939b",
        textColorThird:"#474B4F",
    },
})

export default Theme