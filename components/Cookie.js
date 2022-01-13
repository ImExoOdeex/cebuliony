import CookieConsent from "react-cookie-consent";
import { Box, useColorModeValue } from '@chakra-ui/react'


export default function Cookie() {
    const IMAGEa = 'linear-gradient(198deg, rgb(253 117 179), rgb(255 123 123))'
    const IMAGEb = 'linear-gradient(198deg, rgb(17, 209, 119), rgb(196 129 235))'

    const IMAGE = useColorModeValue(IMAGEa, IMAGEb)
    const color = useColorModeValue('#fff', '#fff')

    return (
        <Box
            h={'auto'} bottom={'20px'} position={'fixed'} w={'100%'}
            display={'flex'} justifyContent={'center'}>
            <Box display={'flex'} marginLeft={'5px'} marginRight={'5px'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: '100%',
                    maxW: '700px',
                    justifyContent: 'center',
                    margin: 'auto',
                    alignItems: 'center',
                    h: '100%',
                    pos: 'absolute',
                    top: 2,
                    backgroundImage: IMAGE,
                    filter: 'blur(10px)',
                    zIndex: -1,
                }}>
                <CookieConsent
                    acceptOnScroll={true}
                    acceptOnScrollPercentage={50}
                    cookieName="Ciasteczka"
                    buttonClasses="btn"
                    style={{
                        background: IMAGE,
                        color: color,
                        borderRadius: '15px',
                        position: 'relative',
                        width: '100%',
                        maxWidth: '1000px',
                        minHeight: '75px',
                        padding: 'auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    buttonText="OK"
                    buttonStyle={{
                        color: "black",
                        fontWeight: "bold",
                        width: '110px',
                        borderRadius: '8px',
                    }}
                >
                    Cebuliony.pl używają ciasteczek, aby dostarczyć najlepsze treśći.
                </CookieConsent>
            </Box>
        </Box >
    );
}