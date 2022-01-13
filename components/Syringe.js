import {
    Heading, Flex, useColorModeValue, Image, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Table,
    Tbody,
    Tr,
    Td, ListItem,
    OrderedList,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useToast
} from "@chakra-ui/react";
import Ramki from "./ramki";
import T from "./T"
import { ArrowRightIcon, DownloadIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Link from './Link'


const Healsyringe = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const color = useColorModeValue('#000', '#fff');
    const res = '64px'
    const border = useColorModeValue('#000', '#fff')
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, delay }}>
            <Tabs colorScheme='green' variant='enclosed' mb={'100px'}>
                <TabList borderBottom={'0px'}>
                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                </TabList>
                <TabPanels bg={bg} borderRadius={'10px'} borderTopLeftRadius={'0px'}>
                    <TabPanel minH={'250px'}>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} h={'100%'}>
                            <Flex w={{ base: '100%', md: '40%' }} textAlign={'left'}
                                flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Healing Syringe</Heading>
                                <Image alt='heal syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/healsyringe.png' />
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Flex w={'100%'} textAlign={'center'} alignItems="center" flexDir={'column'}>
                                    Heal syringe gives for a few seconds very strong regeneration,
                                    so it heals you to full in a few seconds!
                                </Flex>
                                <Flex mt={'10px'}>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr borderTop={'1px'}>
                                                <Td borderColor={border}>Number of uses</Td>
                                                <Td borderColor={border}>4</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>duration</Td>
                                                <Td borderColor={border}>4s</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>amplifier</Td>
                                                <Td borderColor={border}>60</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }}>

                            {/* lewo */}
                            <Flex w={{ base: '100%', md: '50%' }} alignItems={'center'}
                                flexDir={'column'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Healing Syringe</Heading>
                                <Image alt='heal syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/healsyringe.png' />
                            </Flex>

                            {/* Crafting */}
                            <Flex w={{ base: '100%', md: '70%' }} textAlign={'center'} flexDir={{ base: 'column', md: 'row' }}>
                                <Flex textAlign={{ base: 'left', md: 'center' }} ml={{ base: '0%', md: '0px' }} flexDir={'column'} mb={{ base: '20px', md: '0px' }} mr={{ base: '0px', md: '20px' }} m={'auto'}>
                                    <Text>Crafting: shapeless</Text>
                                    <Text>Ingredients:</Text>
                                    <OrderedList margin={{ base: 'left', md: 'auto' }} ml={{ base: '16%', md: '0px' }} textAlign={'left'}>
                                        <ListItem>Syringe</ListItem>
                                        <ListItem>Sugar</ListItem>
                                        <ListItem>Beerot</ListItem>
                                        <ListItem>Poopy</ListItem>
                                    </OrderedList>
                                </Flex>
                                <Flex flexDirection={'row'} alignItems={'center'} justifyContent='center'>
                                    <Table border={'1px'} w={'100px'}><Tbody >
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='beetroot' w={'40px'}
                                                src="/beetroot.png" margin={'auto'} />
                                        </Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080" padding={0}>
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='sugar' w={'40px'}
                                                src="/sugar.png" margin={'auto'} />    </Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='heal syringe' w={'40px'}
                                                    src="/syringe.png" margin={'auto'} /></Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='poppy' w={'40px'}
                                                    src="/poppy.png" margin={'auto'} />
                                            </Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                    </Tbody></Table>
                                    <ArrowRightIcon mr={'20px'} ml={'20px'} />
                                    <Table border={'1px'} w={'50px'} h={'50px'}>
                                        <Tbody>
                                            <Tr>
                                                <Td justifyContent={'center'} alignItems={'center'}
                                                    padding={'0'} borderColor="bg">
                                                    <Image style={{ imageRendering: "pixelated" }}
                                                        alt='heal syringe' w={'40px'}
                                                        src="/healsyringe.png" margin={'auto'} />
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>


                        </Flex>


                    </TabPanel>
                </TabPanels>
            </Tabs>
        </motion.div>
    )
}
const Warriorsyringe = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const color = useColorModeValue('#000', '#fff');
    const res = '64px'
    const border = useColorModeValue('#000', '#fff')
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, delay }}>
            <Tabs colorScheme='green' variant='enclosed' mb={'100px'}>
                <TabList borderBottom={'0px'}>
                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                </TabList>
                <TabPanels bg={bg} borderRadius={'10px'} borderTopLeftRadius={'0px'}>
                    <TabPanel minH={'250px'}>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} h={'100%'}>
                            <Flex w={{ base: '100%', md: '40%' }} textAlign={'left'}
                                flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Warrior Syringe</Heading>
                                <Image alt='Warrior syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/warriorsyringe.png' />
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Flex w={'100%'} textAlign={'center'} alignItems="center" flexDir={'column'}>
                                    Warrior syringe gives you resistance 2, strength 1 and health boost 1 for 1 minute.
                                </Flex>
                                <Flex mt={'10px'}>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr borderTop={'1px'}>
                                                <Td borderColor={border}>Number of uses</Td>
                                                <Td borderColor={border}>2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>duration</Td>
                                                <Td borderColor={border}>60s</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>amplifier</Td>
                                                <Td borderColor={border}>resistance: 2, strength: 1</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }}>

                            {/* lewo */}
                            <Flex w={{ base: '100%', md: '50%' }} alignItems={'center'}
                                flexDir={'column'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Warrior Syringe</Heading>
                                <Image alt='Warrior syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/warriorsyringe.png' />
                            </Flex>

                            {/* Crafting */}
                            <Flex w={{ base: '100%', md: '70%' }} textAlign={'center'} flexDir={{ base: 'column', md: 'row' }}>
                                <Flex textAlign={{ base: 'left', md: 'center' }} ml={{ base: '0%', md: '0px' }} flexDir={'column'} mb={{ base: '20px', md: '0px' }} mr={{ base: '0px', md: '20px' }} m={'auto'}>
                                    <Text>Crafting: shapeless</Text>
                                    <Text>Ingredients:</Text>
                                    <OrderedList margin={{ base: 'left', md: 'auto' }} ml={{ base: '16%', md: '0px' }} textAlign={'left'}>
                                        <ListItem>Blaze powder</ListItem>
                                        <ListItem>Golden carrot</ListItem>
                                    </OrderedList>
                                </Flex>
                                <Flex flexDirection={'row'} alignItems={'center'} justifyContent='center'>
                                    <Table border={'1px'} w={'100px'}><Tbody >
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='Blaze powder' w={'40px'}
                                                src="/blaze_powder.png" margin={'auto'} />
                                        </Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080" padding={0}>    </Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='heal syringe' w={'40px'}
                                                src="/syringe.png" margin={'auto'} /></Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='Golden carrot' w={'40px'}
                                                    src="/golden_carrot.png" margin={'auto'} />
                                            </Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                    </Tbody></Table>
                                    <ArrowRightIcon mr={'20px'} ml={'20px'} />
                                    <Table border={'1px'} w={'50px'} h={'50px'}>
                                        <Tbody>
                                            <Tr>
                                                <Td justifyContent={'center'} alignItems={'center'}
                                                    padding={'0'} borderColor="bg">
                                                    <Image style={{ imageRendering: "pixelated" }}
                                                        alt='Warrior syringe' w={'40px'}
                                                        src="/warriorsyringe.png" margin={'auto'} />
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>


                        </Flex>


                    </TabPanel>
                </TabPanels>
            </Tabs>
        </motion.div>
    )
}
const Ghostsyringe = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const color = useColorModeValue('#000', '#fff');
    const res = '64px'
    const border = useColorModeValue('#000', '#fff')
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, delay }}>
            <Tabs colorScheme='green' variant='enclosed' mb={'100px'}>
                <TabList borderBottom={'0px'}>
                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                </TabList>
                <TabPanels bg={bg} borderRadius={'10px'} borderTopLeftRadius={'0px'}>
                    <TabPanel minH={'250px'}>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} h={'100%'}>
                            <Flex w={{ base: '100%', md: '40%' }} textAlign={'left'}
                                flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Ghost Syringe</Heading>
                                <Image alt='Ghost syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/ghostsyringe.png' />
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Flex w={'100%'} textAlign={'center'} alignItems="center" flexDir={'column'}>
                                    Ghost syringe gives you invisibility 2 and speed 3 for 1 minute. Particels are invisible, so you can troll your friends ;)
                                </Flex>
                                <Flex mt={'10px'}>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr borderTop={'1px'}>
                                                <Td borderColor={border}>Number of uses</Td>
                                                <Td borderColor={border}>1</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>duration</Td>
                                                <Td borderColor={border}>60s</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>amplifier</Td>
                                                <Td borderColor={border}>invisibility: 2, speed: 3</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }}>

                            {/* lewo */}
                            <Flex w={{ base: '100%', md: '50%' }} alignItems={'center'}
                                flexDir={'column'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Ghost Syringe</Heading>
                                <Image alt='Ghost syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/ghostsyringe.png' />
                            </Flex>

                            {/* Crafting */}
                            <Flex w={{ base: '100%', md: '70%' }} textAlign={'center'} flexDir={{ base: 'column', md: 'row' }}>
                                <Flex textAlign={{ base: 'left', md: 'center' }} ml={{ base: '0%', md: '0px' }} flexDir={'column'} mb={{ base: '20px', md: '0px' }} mr={{ base: '0px', md: '20px' }} m={'auto'}>
                                    <Text>Crafting: shapeless</Text>
                                    <Text>Ingredients:</Text>
                                    <OrderedList margin={{ base: 'left', md: 'auto' }} ml={{ base: '16%', md: '0px' }} textAlign={'left'}>
                                        <ListItem>Fermented spider eye</ListItem>
                                        <ListItem>Sugar</ListItem>
                                        <ListItem>Sugar cane</ListItem>
                                    </OrderedList>
                                </Flex>
                                <Flex flexDirection={'row'} alignItems={'center'} justifyContent='center'>
                                    <Table border={'1px'} w={'100px'}><Tbody >
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 2 miejsce */}
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='sugar' w={'40px'}
                                                src="/sugar.png" margin={'auto'} />

                                        </Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 4 miejsce */}
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='Fermented_spider_eye' w={'40px'}
                                                src="/fermented_spider_eye.png" margin={'auto'} />
                                        </Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 5 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='heal syringe' w={'40px'}
                                                    src="/syringe.png" margin={'auto'} /></Td>
                                            <Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 6 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='Sugar cane' w={'40px'}
                                                    src="/sugar_cane.png" margin={'auto'} />
                                            </Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                    </Tbody></Table>
                                    <ArrowRightIcon mr={'20px'} ml={'20px'} />
                                    <Table border={'1px'} w={'50px'} h={'50px'}>
                                        <Tbody>
                                            <Tr>
                                                <Td justifyContent={'center'} alignItems={'center'}
                                                    padding={'0'} borderColor="bg">
                                                    <Image style={{ imageRendering: "pixelated" }}
                                                        alt='Ghost syringe' w={'40px'}
                                                        src="/ghostsyringe.png" margin={'auto'} />
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>


                        </Flex>


                    </TabPanel>
                </TabPanels>
            </Tabs>
        </motion.div>
    )
}
const Miningsyringe = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const color = useColorModeValue('#000', '#fff');
    const res = '64px'
    const border = useColorModeValue('#000', '#fff')
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, delay }}>
            <Tabs colorScheme='green' variant='enclosed' mb={'100px'}>
                <TabList borderBottom={'0px'}>
                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                </TabList>
                <TabPanels bg={bg} borderRadius={'10px'} borderTopLeftRadius={'0px'}>
                    <TabPanel minH={'250px'}>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} h={'100%'}>
                            <Flex w={{ base: '100%', md: '40%' }} textAlign={'left'}
                                flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Mining Syringe</Heading>
                                <Image alt='Mining syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/miningsyringe.png' />
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Flex w={'100%'} textAlign={'center'} alignItems="center" flexDir={'column'}>
                                    Mining syringe gives you haste 2 and night vision for 5 minutes.
                                </Flex>
                                <Flex mt={'10px'}>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr borderTop={'1px'}>
                                                <Td borderColor={border}>Number of uses</Td>
                                                <Td borderColor={border}>1</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>duration</Td>
                                                <Td borderColor={border}>5m</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>amplifier</Td>
                                                <Td borderColor={border}>haste 2, night vision 1</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }}>

                            {/* lewo */}
                            <Flex w={{ base: '100%', md: '50%' }} alignItems={'center'}
                                flexDir={'column'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Mining Syringe</Heading>
                                <Image alt='mining syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/miningsyringe.png' />
                            </Flex>

                            {/* Crafting */}
                            <Flex w={{ base: '100%', md: '70%' }} textAlign={'center'} flexDir={{ base: 'column', md: 'row' }}>
                                <Flex textAlign={{ base: 'left', md: 'center' }} ml={{ base: '0%', md: '0px' }} flexDir={'column'} mb={{ base: '20px', md: '0px' }} mr={{ base: '0px', md: '20px' }} m={'auto'}>
                                    <Text>Crafting: shapeless</Text>
                                    <Text>Ingredients:</Text>
                                    <OrderedList margin={{ base: 'left', md: 'auto' }} ml={{ base: '16%', md: '0px' }} textAlign={'left'}>
                                        <ListItem>Golden carrot</ListItem>
                                        <ListItem>Coal</ListItem>
                                    </OrderedList>
                                </Flex>
                                <Flex flexDirection={'row'} alignItems={'center'} justifyContent='center'>
                                    <Table border={'1px'} w={'100px'}><Tbody >
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 2 miejsce */}
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='Golden carrot' w={'40px'}
                                                src="/golden_carrot.png" margin={'auto'} />

                                        </Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 4 miejsce */}
                                        </Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 5 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='syringe' w={'40px'}
                                                    src="/syringe.png" margin={'auto'} /></Td>
                                            <Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 6 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='Coal' w={'40px'}
                                                    src="/coal.png" margin={'auto'} />
                                            </Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                    </Tbody></Table>
                                    <ArrowRightIcon mr={'20px'} ml={'20px'} />
                                    <Table border={'1px'} w={'50px'} h={'50px'}>
                                        <Tbody>
                                            <Tr>
                                                <Td justifyContent={'center'} alignItems={'center'}
                                                    padding={'0'} borderColor="bg">
                                                    <Image style={{ imageRendering: "pixelated" }}
                                                        alt='Mining syringe' w={'40px'}
                                                        src="/miningsyringe.png" margin={'auto'} />
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>


                        </Flex>


                    </TabPanel>
                </TabPanels>
            </Tabs>
        </motion.div>
    )
}
const Fallingsyringe = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const color = useColorModeValue('#000', '#fff');
    const res = '64px'
    const border = useColorModeValue('#000', '#fff')
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, delay }}>
            <Tabs colorScheme='green' variant='enclosed' mb={'100px'}>
                <TabList borderBottom={'0px'}>
                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                </TabList>
                <TabPanels bg={bg} borderRadius={'10px'} borderTopLeftRadius={'0px'}>
                    <TabPanel minH={'250px'}>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} h={'100%'}>
                            <Flex w={{ base: '100%', md: '40%' }} textAlign={'left'}
                                flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Falling Syringe</Heading>
                                <Image alt='Falling syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/fallingsyringe.png' />
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Flex w={'100%'} textAlign={'center'} alignItems="center" flexDir={'column'}>
                                    Falling syringe gives slow falling 3 for 30 seconds and nausea for 25 seconds.
                                </Flex>
                                <Flex mt={'10px'}>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr borderTop={'1px'}>
                                                <Td borderColor={border}>Number of uses</Td>
                                                <Td borderColor={border}>2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>duration</Td>
                                                <Td borderColor={border}>30s</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>amplifier</Td>
                                                <Td borderColor={border}>slow falling: 3, nausea: 1</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }}>

                            {/* lewo */}
                            <Flex w={{ base: '100%', md: '50%' }} alignItems={'center'}
                                flexDir={'column'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Falling Syringe</Heading>
                                <Image alt='Falling syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/fallingsyringe.png' />
                            </Flex>

                            {/* Crafting */}
                            <Flex w={{ base: '100%', md: '70%' }} textAlign={'center'} flexDir={{ base: 'column', md: 'row' }}>
                                <Flex textAlign={{ base: 'left', md: 'center' }} ml={{ base: '0%', md: '0px' }} flexDir={'column'} mb={{ base: '20px', md: '0px' }} mr={{ base: '0px', md: '20px' }} m={'auto'}>
                                    <Text>Crafting: shapeless</Text>
                                    <Text>Ingredients:</Text>
                                    <OrderedList margin={{ base: 'left', md: 'auto' }} ml={{ base: '16%', md: '0px' }} textAlign={'left'}>
                                        <ListItem>Phantom membrane</ListItem>
                                        <ListItem>cornflower</ListItem>
                                    </OrderedList>
                                </Flex>
                                <Flex flexDirection={'row'} alignItems={'center'} justifyContent='center'>
                                    <Table border={'1px'} w={'100px'}><Tbody >
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 2 miejsce */}
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='Phantom membrane' w={'40px'}
                                                src="/phantom_membrane.png" margin={'auto'} />

                                        </Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 4 miejsce */}
                                            {/* <Image style={{ imageRendering: "pixelated" }}
                                                alt='Fermented_spider_eye' w={'40px'}
                                                src="/Fermented_spider_eye.png" margin={'auto'} /> */}
                                        </Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 5 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='heal syringe' w={'40px'}
                                                    src="/syringe.png" margin={'auto'} /></Td>
                                            <Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 6 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='cornflowe' w={'40px'}
                                                    src="/cornflower.png" margin={'auto'} />
                                            </Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                    </Tbody></Table>
                                    <ArrowRightIcon mr={'20px'} ml={'20px'} />
                                    <Table border={'1px'} w={'50px'} h={'50px'}>
                                        <Tbody>
                                            <Tr>
                                                <Td justifyContent={'center'} alignItems={'center'}
                                                    padding={'0'} borderColor="bg">
                                                    <Image style={{ imageRendering: "pixelated" }}
                                                        alt='Falling syringe' w={'40px'}
                                                        src="/fallingsyringe.png" margin={'auto'} />
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>


                        </Flex>


                    </TabPanel>
                </TabPanels>
            </Tabs>
        </motion.div>
    )
}
const Mushroomsyringe = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const color = useColorModeValue('#000', '#fff');
    const res = '64px'
    const border = useColorModeValue('#000', '#fff')
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, delay }}>
            <Tabs colorScheme='green' variant='enclosed' mb={'100px'}>
                <TabList borderBottom={'0px'}>
                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                </TabList>
                <TabPanels bg={bg} borderRadius={'10px'} borderTopLeftRadius={'0px'}>
                    <TabPanel minH={'250px'}>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} h={'100%'}>
                            <Flex w={{ base: '100%', md: '40%' }} textAlign={'left'}
                                flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Mushroom Syringe</Heading>
                                <Image alt='Mushroom syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/mushroomsyringe.png' />
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Flex w={'100%'} textAlign={'center'} alignItems="center" flexDir={'column'}>
                                    Mushroom syringe gives you nausea 2 for 15 seconds. Effects like mushroom soup and drugs ;)
                                </Flex>
                                <Flex mt={'10px'}>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr borderTop={'1px'}>
                                                <Td borderColor={border}>Number of uses</Td>
                                                <Td borderColor={border}>2</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>duration</Td>
                                                <Td borderColor={border}>15s</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>amplifier</Td>
                                                <Td borderColor={border}>nausea 2</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }}>

                            {/* lewo */}
                            <Flex w={{ base: '100%', md: '50%' }} alignItems={'center'}
                                flexDir={'column'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Mushroom Syringe</Heading>
                                <Image alt='Mushroom syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/mushroomsyringe.png' />
                            </Flex>

                            {/* Crafting */}
                            <Flex w={{ base: '100%', md: '70%' }} textAlign={'center'} flexDir={{ base: 'column', md: 'row' }}>
                                <Flex textAlign={{ base: 'left', md: 'center' }} ml={{ base: '0%', md: '0px' }} flexDir={'column'} mb={{ base: '20px', md: '0px' }} mr={{ base: '0px', md: '20px' }} m={'auto'}>
                                    <Text>Crafting: shapeless</Text>
                                    <Text>Ingredients:</Text>
                                    <OrderedList margin={{ base: 'left', md: 'auto' }} ml={{ base: '16%', md: '0px' }} textAlign={'left'}>
                                        <ListItem>red mushroom</ListItem>
                                        <ListItem>brow mushroom</ListItem>
                                        <ListItem>kelp</ListItem>
                                        <ListItem>spider eye</ListItem>
                                    </OrderedList>
                                </Flex>
                                <Flex flexDirection={'row'} alignItems={'center'} justifyContent='center'>
                                    <Table border={'1px'} w={'100px'}><Tbody >
                                        <Tr><Td border={'1px'} borderColor="#808080"></Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 2 miejsce */}
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='brown mushoroom' w={'40px'}
                                                src="/brown_mushroom.png" margin={'auto'} />

                                        </Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 4 miejsce */}
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='Red mushroom' w={'40px'}
                                                src="/red_mushroom.png" margin={'auto'} />
                                        </Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 5 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='heal syringe' w={'40px'}
                                                    src="/syringe.png" margin={'auto'} /></Td>
                                            <Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 6 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='kelp' w={'40px'}
                                                    src="/kelp.png" margin={'auto'} />
                                            </Td></Tr>
                                        <Tr>
                                            <Td border={'1px'} borderColor="#808080" ></Td>
                                            <Td border={'1px'} borderColor="#808080" p={'0'}>
                                                {/* 8 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='spider eye' w={'40px'}
                                                    src="/spider_eye.png" margin={'auto'} />
                                            </Td>
                                            <Td border={'1px'} borderColor="#808080"></Td></Tr>
                                    </Tbody></Table>
                                    <ArrowRightIcon mr={'20px'} ml={'20px'} />
                                    <Table border={'1px'} w={'50px'} h={'50px'}>
                                        <Tbody>
                                            <Tr>
                                                <Td justifyContent={'center'} alignItems={'center'}
                                                    padding={'0'} borderColor="bg">
                                                    <Image style={{ imageRendering: "pixelated" }}
                                                        alt='Mushroom syringe' w={'40px'}
                                                        src="/mushroomsyringe.png" margin={'auto'} />
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>


                        </Flex>


                    </TabPanel>
                </TabPanels>
            </Tabs>
        </motion.div>
    )
}
const SyringeItem = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const color = useColorModeValue('#000', '#fff');
    const res = '64px'
    const border = useColorModeValue('#000', '#fff')
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5, delay }}>
            <Tabs colorScheme='green' variant='enclosed' mb={'100px'}>
                <TabList borderBottom={'0px'}>
                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                </TabList>
                <TabPanels bg={bg} borderRadius={'10px'} borderTopLeftRadius={'0px'}>
                    <TabPanel minH={'250px'}>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} h={'100%'}>
                            <Flex w={{ base: '100%', md: '40%' }} textAlign={'left'}
                                flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Syringe</Heading>
                                <Image alt='syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/syringe.png' />
                            </Flex>
                            <Flex flexDir={'column'}>
                                <Flex w={'100%'} textAlign={'center'} alignItems="center" flexDir={'column'}>
                                    From syringe item you can make other syringes.
                                </Flex>
                                <Flex mt={'10px'}>
                                    <Table variant='simple'>
                                        <Tbody>
                                            <Tr borderTop={'1px'}>
                                                <Td borderColor={border}>Stack</Td>
                                                <Td borderColor={border}>16</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>duration</Td>
                                                <Td borderColor={border}>---</Td>
                                            </Tr>
                                            <Tr>
                                                <Td borderColor={border}>amplifier</Td>
                                                <Td borderColor={border}>---</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }}>

                            {/* lewo */}
                            <Flex w={{ base: '100%', md: '50%' }} alignItems={'center'}
                                flexDir={'column'} justifyContent={'center'}>
                                <Heading fontSize='25px'>Syringe</Heading>
                                <Image alt='syringe' mt={'10px'}
                                    style={{ imageRendering: "pixelated" }} width={res}
                                    height={res} src='/syringe.png' />
                            </Flex>

                            {/* Crafting */}
                            <Flex w={{ base: '100%', md: '70%' }} textAlign={'center'} flexDir={{ base: 'column', md: 'row' }}>
                                <Flex textAlign={{ base: 'left', md: 'center' }} ml={{ base: '0%', md: '0px' }} flexDir={'column'} mb={{ base: '20px', md: '0px' }} mr={{ base: '0px', md: '20px' }} m={'auto'}>
                                    <Text>Crafting: shapeless</Text>
                                    <Text>Ingredients:</Text>
                                    <OrderedList margin={{ base: 'left', md: 'auto' }} ml={{ base: '16%', md: '0px' }} textAlign={'left'}>
                                        <ListItem>Glass</ListItem>
                                        <ListItem>Iron ingot</ListItem>
                                    </OrderedList>
                                </Flex>
                                <Flex flexDirection={'row'} alignItems={'center'} justifyContent='center'>
                                    <Table border={'1px'} w={'100px'}><Tbody >
                                        <Tr><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 1 miejsce */}
                                            <Image style={{ imageRendering: "pixelated" }}
                                                alt='glass' w={'40px'}
                                                src="/glass.png" margin={'auto'} />

                                        </Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 2 miejsce */}
                                                {/* <Image style={{ imageRendering: "pixelated" }}
                                                    alt='brown mushoroom' w={'40px'}
                                                    src="/brown_mushroom.png" margin={'auto'} /> */}

                                            </Td><Td border={'1px'} borderColor="#808080"></Td></Tr>
                                        <Tr><Td border={'1px'} borderColor="#808080" padding={0}>
                                            {/* 4 miejsce */}
                                            {/* <Image style={{ imageRendering: "pixelated" }}
                                                alt='Red mushroom' w={'40px'}
                                                src="/red_mushroom.png" margin={'auto'} /> */}
                                        </Td><Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 5 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='glass' w={'40px'}
                                                    src="/glass.png" margin={'auto'} /></Td>
                                            <Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 6 miejsce */}
                                                {/* <Image style={{ imageRendering: "pixelated" }}
                                                    alt='kelp' w={'40px'}
                                                    src="/kelp.png" margin={'auto'} /> */}
                                            </Td></Tr>
                                        <Tr>
                                            <Td border={'1px'} borderColor="#808080" ></Td>
                                            <Td border={'1px'} borderColor="#808080" p={'0'}>
                                                {/* 8 miejsce */}
                                                {/* <Image style={{ imageRendering: "pixelated" }}
                                                    alt='spider eye' w={'40px'}
                                                    src="/spider_eye.png" margin={'auto'} /> */}
                                            </Td>
                                            <Td border={'1px'} borderColor="#808080" padding={0}>
                                                {/* 9 miejsce */}
                                                <Image style={{ imageRendering: "pixelated" }}
                                                    alt='iron ingot' w={'40px'}
                                                    src="/iron_ingot.png" margin={'auto'} />
                                            </Td></Tr>
                                    </Tbody></Table>
                                    <ArrowRightIcon mr={'20px'} ml={'20px'} />
                                    <Table border={'1px'} w={'50px'} h={'50px'}>
                                        <Tbody>
                                            <Tr>
                                                <Td justifyContent={'center'} alignItems={'center'}
                                                    padding={'0'} borderColor="bg">
                                                    <Image style={{ imageRendering: "pixelated" }}
                                                        alt='syringe' w={'40px'}
                                                        src="/syringe.png" margin={'auto'} />
                                                </Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Flex>
                            </Flex>


                        </Flex>


                    </TabPanel>
                </TabPanels>
            </Tabs>
        </motion.div>
    )
}
const Links = ({ delay = 0 }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    const toast = useToast()
    const duration = 1250
    return (
        <motion.div initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3, delay }}>
            <Breadcrumb textAlign={'left'} fontWeight='medium' fontSize='sm'>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() =>
                        toast({
                            title: 'Syringes',
                            description: "Navigating to syringes",
                            status: 'success',
                            duration: duration,
                            isClosable: false,
                            variant: 'left-accent',
                            position: 'bottom-right'
                        })} href='#Syringes'>Syringes</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() =>
                        toast({
                            title: 'Items',
                            description: "Navigating to items",
                            status: 'success',
                            duration: duration,
                            isClosable: false,
                            variant: 'left-accent',
                            position: 'bottom-right'
                        })} href='#Items'>Items
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </motion.div>

    )
}
const He = ({ children, delay = 0, ...props }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.h1 initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.4, type: 'easeInOut', delay }}>
            <Heading mt={'10px'} color={'primary'} as="h1" fontSize={'3xl'} {...props}>{children}</Heading>
        </motion.h1>
    );
}



const Syringe = ({ delay = 0 }) => {
    const syringes = '7'
    const items = '1'
    const span = useColorModeValue('green.300', 'green.600')
    const res = '64px'
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <Ramki>
            <motion.div initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2, delay }}>
                <Flex
                    display={'flex'} flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }} textAlign={'center'} margin={'auto'} bg={'transparent'}
                    w={'100%'} h={'auto'} p={{ base: 2, md: 6 }} rounded="lg" justifyContent='space-beetwen'>

                    <Flex alignItems={'center'} justifyContent={'center'} flexDirection={'column'}
                        w={{ base: '100%', md: '500px' }} h={'auto'} m='auto'>
                        <Heading fontFamily={"Work Sans"} as={'span'}
                            position={'relative'}
                            fontWeight={'bolder'}
                            letterSpacing={'1px'}
                            _after={{
                                content: "''",
                                width: 'full',
                                height: ({ base: '20%', md: '30%' }),
                                position: 'absolute',
                                bottom: 1,
                                left: 0,
                                bg: span,
                                zIndex: -1,
                                borderRadius: '10px',
                            }}>Squirting Syringe</Heading>
                        <Image alt='logo' mt={'10px'}
                            style={{ imageRendering: "pixelated" }} width={res}
                            height={res} src='/syringeicon.png' />

                    </Flex>

                    <Flex flexDir={'column'} lineHeight={'150%'}>
                        <T>Squirting syringe is a free Minecraft: Java edition mod!
                            The mod adds various types of injections to the game that have many different
                            effects. Every syringe crafts in stack of 1.</T>
                        <Flex mt={'10px'} mb={'10px'} flexDir={{ base: 'column', lg: 'row' }} w={'100%'} justifyContent={'center'}>
                            <Flex w={'100%'} justifyContent={{ base: 'center', lg: 'right' }}>

                                <Flex maxW={'180px'} h={'50px'} justifyContent={'space-between'} alignItems={'center'} px={'2px'} mr={'10px'}>
                                    <Image alt="fabric" w={'40px'} src="fabriclogo.png" mr={'10px'} />
                                    <Flex flexDir={'column'} fontFamily={'Work Sans'}>
                                        <Text textAlign={'left'} fontWeight={'normal'}>Requies</Text>
                                        <Text fontSize={'md'} mt={'-3px'} fontWeight={'bold'}>Fabric API</Text>
                                    </Flex>
                                </Flex>

                                <Flex maxW={'180px'} h={'50px'} justifyContent={'space-between'} alignItems={'center'} px={'2px'} mr={'10px'}>
                                    <Image alt="fabric" w={'40px'} src="fabriclogo.png" mr={'5px'} />
                                    <Flex flexDir={'column'} fontFamily={'Work Sans'}>
                                        <Text>Fabric</Text>
                                        <Text fontSize={'sm'}>1.16.5 | 1.17.1 | 1.18.1</Text>

                                    </Flex>
                                </Flex>

                            </Flex>
                            <Flex w={'100%'} justifyContent={{ base: 'center', lg: 'left' }}>
                                <script>splitbee.track(&ldquo;Github&ldquo;)</script>
                                <Link data-splitbee-event="Github" href="https://github.com/ImExoOdeex/squirting-syringe" mr='10px' _hover="none">
                                    <Flex maxW={'180px'} h={'50px'} justifyContent={'center'} alignItems={'center'} px={'2px'} mr={'10px'} fontFamily={'Work Sans'}>
                                        <Image alt="octocat" w={'40px'} src="octocat.png" mr={'5px'} />
                                        <Text fontWeight={'extrabold'} letterSpacing={'2px'}>Github</Text>
                                    </Flex>
                                </Link>

                                <Link _hover={'none'} href="https://www.curseforge.com/minecraft/mc-mods/squirting-syringe" mr='10px'>
                                    <Flex fontFamily={"Work Sans"} px={'2px'} fontSize={'14px'} h={'50px'} bg={'transparent'} w={'auto'}
                                        rounded={'md'} alignItems={'center'} justifyContent={'center'}>
                                        <DownloadIcon color={'color'} mr={'3px'} />Download from curseforge
                                    </Flex>
                                </Link>
                            </Flex>
                        </Flex>
                        <Heading id="Syringes" fontWeight={'normal'} letterSpacing={'2px'} textAlign={'center'} as='h3' fontSize={'20px'}>
                            All available syringes ({syringes} + {items})</Heading>
                        <Heading textAlign={'center'} as='h3' fontSize={'20px'}>
                            Docs for all syringes in the mod:</Heading>
                    </Flex>
                </Flex>
            </motion.div>

            <Links />
            <He fontFamily={"Work Sans"} color="color" textAlign='left' m="0" ml={{ base: '5px', md: '30px' }} mb="20px" letterSpacing="2px" fontWeight="900">Syringes</He>
            <Healsyringe />
            <Warriorsyringe />
            <Ghostsyringe />
            <Miningsyringe />
            <Fallingsyringe />
            <Mushroomsyringe />
            <Links />
            <He id="Items" fontFamily={"Work Sans"} color="color" margin="0" textAlign='left' ml={{ base: '5px', md: '30px' }} mb="20px" letterSpacing="2px" fontWeight="900">Items</He>
            <SyringeItem />
        </Ramki >
    );
}
export default Syringe