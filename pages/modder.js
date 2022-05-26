import React from 'react'
import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react'
import Link from '../components/Link'
import CustomHead from '../components/CustomHead'
import { motion } from 'framer-motion'

function modder() {
    return (
        <>
            <CustomHead>
                <title>Cebuliony | Modder</title>
            </CustomHead>
            <Box minH="70vh">
                <Flex as={motion.div} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} flexDir="column" m={'auto'} maxW='1100px' h={'100%'} minH='100%' p={2} mt={['50px', '50px', '100px']}>
                    <Heading fontFamily={'Work sans'} textTransform='uppercase'>See me on:</Heading>
                    <Flex flexDir={'column'} mt={10}>

                        <Link boxShadow={'md'} color='gray.100' rounded={'xl'} _hover="none" m={'auto'} mb={10} w={['100%', '100%', '90%']} href="https://www.curseforge.com/members/imexoodeex/projects">
                            <Flex _hover={{ backgroundSize: '110vh' }} transition={'1s'} backgroundSize='105vh' rounded={'xl'} backgroundImage='curseforge.png'
                                backgroundRepeat='no-repeat' backgroundPosition={['', '', 'top']} >
                                <Flex w={'100%'} h='100%' backdropFilter={'blur(4px)'} rounded={'xl'} bg='rgba(0,0,0,0.2)'>
                                    <Flex ml={[2, 2, 2, 20]} mt={10} mb={10} flexDir='column'>
                                        <Flex flexDir={'row'}>
                                            <Image src="curselogo.svg" w={'40px'} alt="modrinth" mr={2} />
                                            <Heading fontFamily={'Work sans'} textTransform={'uppercase'}>Curseforge</Heading>
                                        </Flex>
                                        <Text>Overwolf is where creators go to bring their ideas to life, share game-changing apps and mods with the world, and be part of the guild for in-game creators.</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Link>

                        <Link boxShadow={'md'} color='gray.100' rounded={'xl'} _hover="none" m={'auto'} w={['100%', '100%', '90%']} href="https://modrinth.com/user/ImExoOdeex">
                            <Flex _hover={{ backgroundSize: '110vh' }} transition={'1s'} backgroundSize='105vh' rounded={'xl'} backgroundImage='modrinthprof.png'
                                backgroundRepeat='no-repeat' backgroundPosition={'inherit'} >
                                <Flex w={'100%'} h='100%' backdropFilter={'blur(4px)'} rounded={'xl'} bg='rgba(0,0,0,0.2)'>
                                    <Flex ml={[2, 2, 2, 20]} mt={10} mb={10} flexDir='column'>
                                        <Flex flexDir={'row'}>
                                            <Image src="modrinth.svg" w={'40px'} alt="modrinth" mr={2} />
                                            <Heading fontFamily={'Work sans'} textTransform={'uppercase'}>Modrinth</Heading>
                                        </Flex>
                                        <Text>Find enjoyable, quality content through our open-source modding platform built for the community.</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Link>

                    </Flex>
                </Flex>
            </Box >
        </>
    )
}

export default modder