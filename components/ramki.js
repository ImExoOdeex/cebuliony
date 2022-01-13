import { Box, Flex } from '@chakra-ui/react'


const Boxinside = () => {
    const tr = 'transparent'

    // const bg3 = 'teal.600'
    const bg3 = tr
    return (
        <Box rounded={'lg'} border={'1px'} borderColor={bg3}
            mt={'10px'} w={{ base: '400px', sm: '200x' }} bg={'transparent'}
            minH={'auto'} display={{ base: 'none', lg: 'flex', md: 'none', sm: 'none' }}>
        </Box>
    )
}

const ramki = ({ children, ...props }) => {
    const tr = 'transparent'
    // const bg1 = 'green.500'
    // const bg2 = 'pink.600'
    const bg1 = tr
    const bg2 = tr
    return (
        <Box rounded={'lg'} w={'auto'} h={'100%'} border={'1px'} borderColor={bg1} minH={'100%'} >
            <Flex flexDirection={'row'} >
                <Boxinside />
                <Box rounded={'lg'} border={'1px'} borderColor={bg2}
                    margin={'auto'} mt={'25px'} w={'1100px'} bg={'transparent'}
                    h={'auto'} textAlign={'center'} {...props}>
                    {children}
                </Box>
                <Boxinside />
            </Flex >
        </Box >
    );
}

export default ramki