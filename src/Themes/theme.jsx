import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'


const Theme = extendTheme({
    config: {
        initialColorMode: "dark",
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('#FBFDFE', '#212121')(props),
            },
            ':root': {
                '--chakra-colors-mainColor': mode(
                    '#1b66c9',
                    '#1b66c9',
                )(props),
                '--chakra-colors-mainColorSecondary': mode(
                    '#1a73e8',
                    '#1a73e8',
                )(props),
                '--chakra-colors-bgColor': mode(
                    '#222629',
                    '#fbfdfe',
                )(props),
                '--chakra-colors-headingColor': mode(
                    '#1a73e8',
                    '#1a73e8',
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
            "::-webkit-scrollbar": {
                background: mode(
                    '#222629',
                    '#F4F4F4',
                )(props),
            }
        }),
    },
    colors: {
        mainColor: "#1b66c9",
        mainColorSecondary: "#61892f",
        bgColor: "#222629",
        headingColor: "#86c232",
        textColor: "white",
        textColorSecondary: "#8b939b",
        textColorThird: "white",
    },
})

export default Theme