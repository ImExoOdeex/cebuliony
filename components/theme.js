import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            minH: '100%',
            bg: mode('#fffaed', '#131313')(props),
        },
        html: {
            height: '100%',
        },
        Text: {
            lineHeight: '200%',
        },
        td: {
            height: '41px',
            padding: '0px',
            minW: '50px'
        },
        a: {
            color: 'primary'
        }
    })
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}


const theme = extendTheme({
    fonts: {
        heading: 'comfortaa',
        body: 'comfortaa',
    },
    colors: {
        primary: '#FFBC15',
        secondarydark: '#131313',
        secondarylight: '#fffaed',
        tertiarydark: '#1f1f1f',
        tertiarylight: '#f7f7f7',
        roz: '#ff9cc2',
    },
    styles,
    config
})

export default theme