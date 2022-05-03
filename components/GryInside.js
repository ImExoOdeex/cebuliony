import Ramki from './ramki';
import { Image, Flex, useColorModeValue, Heading, Text, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from './Link'
import Games from './jsons/games.json'

export default function GryInside({ delay = 0 }) {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const res = '64px';
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    const color = useColorModeValue('black', 'white')
    const time = 0.2;
    return (
        <Ramki>
            <Flex flexDir={'column'}>

                {Games.map((Games) => {
                    return <>
                        <Link _hover={'none'} color={color} href={Games.link} mb='60px' _last={{ marginBottom: '20px' }}>
                            <motion.div initial="hidden"
                                animate="enter"
                                exit="exit"
                                variants={variants}
                                transition={{ duration: time, delay }}>
                                <Flex
                                    display={'flex'} flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} textAlign={'center'} margin={'auto'} bg={bg}
                                    w={'100%'} h={'auto'} p={{ base: 2, md: 6 }} rounded="lg" justifyContent='space-beetwen'>

                                    <Flex alignItems={'center'} justifyContent={'center'} flexDirection={'column'}
                                        w={{ base: '100%', md: '200px', lg: '200px' }} h={'auto'} m='auto'  >

                                        <Heading as='h3' fontSize={'lg'}
                                            textAlign={'center'}>{Games.name}</Heading>
                                        <Image alt='logo' mt={'10px'}
                                            style={{ imageRendering: "pixelated" }} width={res}
                                            height={res} src={Games.icon} />

                                    </Flex>

                                    <Flex flexDir={'column'} lineHeight={'150%'}>
                                        <Text>{Games.info}</Text>
                                        <Flex mt={'10px'} mb={'10px'} flexDir={'row'} w={'100%'} justifyContent={'center'}>
                                            <Flex maxW={'180px'} h={'50px'} justifyContent={'space-between'} alignItems={'center'} px={'2px'} mr={'10px'}>
                                                <Image alt='fabric' w={'40px'} src="fabriclogo.png" mr={'10px'} />
                                                <Flex flexDir={'column'} fontFamily={'Work Sans'}>
                                                    <Text textAlign={'left'} fontWeight={'normal'}>Requies</Text>
                                                    <Text fontSize={'md'} mt={'-3px'} fontWeight={'bold'}>Fabric API</Text>
                                                </Flex>
                                            </Flex>

                                            <Flex maxW={'180px'} h={'50px'} justifyContent={'space-between'} alignItems={'center'} px={'2px'} mr={'10px'}>
                                                <Image alt='fabric' w={'40px'} src="fabriclogo.png" mr={'5px'} />
                                                <Flex flexDir={'column'} fontFamily={'Work Sans'}>
                                                    <Text>Fabric</Text>
                                                    <Text fontSize={'sm'}>

                                                        {Games.versions.map((version) => {
                                                            return (
                                                                <>
                                                                    {version}
                                                                    <chakra.span _last={{ display: 'none' }}> | </chakra.span>
                                                                </>
                                                            )
                                                        })}

                                                    </Text>

                                                </Flex>
                                            </Flex>

                                            {Games.dependencies.map((dependent) => {
                                                return (
                                                    <Flex key={dependent.id} maxW={'180px'} h={'50px'} justifyContent={'space-between'} alignItems={'center'} px={'2px'} mr={'10px'}>
                                                        <Image alt='fabric' w={'40px'} src={dependent.icon} mr={'10px'} style={{ imageRendering: 'pixelated' }} />
                                                        <Flex flexDir={'column'} fontFamily={'Work Sans'}>
                                                            <Text textAlign={'left'} fontWeight={'normal'}>Requies</Text>
                                                            <Text fontSize={'md'} mt={'-3px'} fontWeight={'bold'}>{dependent.name}</Text>
                                                        </Flex>
                                                    </Flex>
                                                )
                                            })}


                                        </Flex>
                                        <Text>{Games.infododaje}</Text>
                                        <Text>Kliknij, aby zobaczyć więcej</Text>
                                    </Flex>
                                </Flex>
                            </motion.div>
                        </Link>
                    </>
                })}

            </Flex>

        </Ramki >
    )
}