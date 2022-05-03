import {
    Heading, Flex, useColorModeValue, Image, Text, Tabs, TabList, TabPanels, Tab, TabPanel, Table,
    Tbody,
    Tr,
    Td,
    OrderedList,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useToast,
    ListItem,
    SimpleGrid,
    chakra,
    Box
} from "@chakra-ui/react";
import Ramki from "./ramki";
import T from "./T"
import { ArrowForwardIcon, DownloadIcon, InfoIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Link from './Link'
import Fuels from './jsons/fuels.json'
import Games from './jsons/games.json'



const Links = ({ delay = 0, ...props }) => {
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
            <Breadcrumb textAlign={'left'} fontWeight='medium' fontSize='sm' mt={'50px'} separator='/' {...props}>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() =>
                        toast({
                            title: 'Fuels',
                            description: "Navigating to fuels",
                            status: 'success',
                            duration: duration,
                            isClosable: false,
                            variant: 'left-accent',
                            position: 'bottom-right'
                        })} href='#Fuels'>Fuels</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() =>
                        toast({
                            title: 'Vanilla items',
                            description: "Navigating to vanilla items",
                            status: 'success',
                            duration: duration,
                            isClosable: false,
                            variant: 'left-accent',
                            position: 'bottom-right'
                        })} href='#Vanilla'>Vanilla items
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() =>
                        toast({
                            title: 'Loot',
                            description: "Navigating to loot",
                            status: 'success',
                            duration: duration,
                            isClosable: false,
                            variant: 'left-accent',
                            position: 'bottom-right'
                        })} href='#Loot'>Loot
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
    const color = useColorModeValue('#000', '#fff');
    return (
        <motion.h1 initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.4, type: 'easeInOut', delay }}>
            <Heading style={{ scrollMarginTop: '200px' }} mt={'10px'} color={color} as="h1" fontSize={'3xl'} {...props} fontFamily={"Work Sans"} textAlign='left' m="0" ml={{ base: '5px', md: '30px' }} mb="20px" letterSpacing="2px" fontWeight="900">{children}</Heading>
        </motion.h1>
    );
}
const Craft = ({ source }) => {
    return (
        <Image style={{ imageRendering: "pixelated" }} src={source}
            alt={source} w={'40px'} margin={'auto'} />
    )
}

const Pixel = ({ src }) => {
    return (
        <Flex w={'100%'} h={'100%'} m={'auto'} justifyContent={'center'}>
            <Image alt={src} rounded={'md'} src={src} style={{ imageRendering: 'pixelated' }} w={'60px'} />
        </Flex>
    )
}

function MotionTd({ children, ...props }) {
    const MotionTd = motion(Td);
    return (
        <MotionTd
            whileHover={{ scale: 2 }}
            whileTap={{ scale: 1.7 }}
            transition={{ duration: 0.1 }}
            {...props}
        >
            {children}
        </MotionTd>
    );
}

const Fuel = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const color = useColorModeValue('#000', '#fff');
    const res = '64px'
    const border = useColorModeValue('#000', '#fff')
    const span = useColorModeValue('green.300', 'green.600')
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    const warning = useColorModeValue('orange.600', 'orange.300')
    const MotionImage = motion(Image)

    return (
        <Ramki>
            <motion.div initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2, delay }}>
                <Flex bg={'red.500'} py={3} rounded={'lg'} margin="auto" justifyContent={'center'} alignItems={'center'} mx={'20px'}>
                    <Heading color={'white'} fontFamily={'Work Sans'} textTransform={'uppercase'} alignItems={'center'}><InfoIcon mr={'10px'} h="100%" />Work in progress</Heading></Flex>
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
                            }}>Fuelify</Heading>
                        <MotionImage
                            cursor="zoom-in"
                            whileTap={{ scale: 8, cursor: "zoom-out" }} alt='logo' mt={'10px'}
                            style={{ imageRendering: "pixelated" }} width={res}
                            height={res} src='/fuelifyicon.png' />

                    </Flex>

                    <Flex flexDir={'column'} lineHeight={'150%'}>
                        <T>Fuelify is a mod for Minecraft: Java edition mod!
                            The mod adds various types of fuels. Insted of boring wood and coal you can use more fascinating fuels!</T>
                        <SimpleGrid minChildWidth='180px' spacing='1px' spacingY={'10px'} mb={'5px'}>

                            <Box h={'50px'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} px={'2px'} mr={'10px'}>
                                <Image alt="fabric" w={'40px'} src="fabriclogo.png" />
                                <Flex flexDir={'column'} fontFamily={'Work Sans'}>
                                    <Text textAlign={'left'} fontWeight={'normal'}>Requies</Text>
                                    <Text fontSize={'md'} mt={'-3px'} fontWeight={'bold'}>Fabric API</Text>
                                </Flex>
                            </Box>

                            <Box h={'50px'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} px={'2px'} mr={'10px'}>
                                <Image alt="fabric" w={'40px'} src="fabriclogo.png" mr={'5px'} />
                                <Flex flexDir={'column'} fontFamily={'Work Sans'}>
                                    <Text>Fabric</Text>
                                    <Text fontSize={'sm'}>

                                        {Games.map((Game) => {
                                            return <>
                                                {/* <Text>{Game.id}</Text> */}
                                                {Game.id == 2 ? <>
                                                    {Game.versions.map((version) => {
                                                        return <>
                                                            {version}
                                                            <chakra.span _last={{ display: 'none' }}> | </chakra.span>
                                                        </>
                                                    })}
                                                </> : <></>}
                                            </>
                                        })}

                                    </Text>

                                </Flex>
                            </Box>

                            {Games.map((Game) => {
                                return <>
                                    {/* <Text>{Game.id}</Text> */}
                                    {Game.id == 3 ? <>
                                        {Game.dependencies.map((dependent) => {
                                            return (
                                                <Box h={'50px'} key={dependent.id} >
                                                    <Link display={'flex'} href={dependent.link} target="_blank" justifyContent={'space-evenly'} alignItems={'center'} px={'2px'} mr={'10px'}>
                                                        <Image alt='fabric' w={'40px'} src={dependent.icon} mr={'10px'} style={{ imageRendering: 'pixelated' }} />
                                                        <Flex flexDir={'column'} fontFamily={'Work Sans'}>
                                                            <Text textAlign={'left'} fontWeight={'normal'}>Requies</Text>
                                                            <Text fontSize={'md'} mt={'-3px'} fontWeight={'bold'}>{dependent.name}</Text>
                                                        </Flex>
                                                    </Link>
                                                </Box>
                                            )
                                        })}
                                    </> : <></>}
                                </>
                            })}
                            <Box h={'50px'} display={'flex'} justifyContent='center' alignItems={'center'}>
                                <script>splitbee.track(&ldquo;Github&ldquo;)</script>
                                <Link data-splitbee-event="Github" href="https://github.com/ImExoOdeex/Fuelify" mr='10px' _hover="none" alignItems='center'>
                                    <Flex maxW={'180px'} justifyContent={'space-evenly'} alignItems={'center'} px={'2px'} mr={'10px'} fontFamily={'Work Sans'} m={'auto'} >
                                        <Image alt="octocat" w={'40px'} src="octocat.png" mr={'5px'} />
                                        <Text fontWeight={'extrabold'} letterSpacing={'2px'}>Github</Text>
                                    </Flex>
                                </Link>
                            </Box>
                            <Box bg="red.500" rounded='lg' h={'50px'} display={'flex'} justifyContent='center' alignItems={'center'} mr='10px' >
                                <Link _disabled={true} _hover={'none'} href="https://www.curseforge.com/minecraft/mc-mods/squirting-syringe" alignItems='center'>
                                    <Flex m={'auto'} fontFamily={"Work Sans"} px={'2px'} fontSize={'14px'} bg={'transparent'} w={'auto'}
                                        rounded={'md'} alignItems={'center'} justifyContent={'space-evenly'}>
                                        <DownloadIcon color={'color'} mr={'3px'} /><Text>Download from curseforge</Text>
                                    </Flex>
                                </Link>
                            </Box>




                        </SimpleGrid>
                        {/* <Heading id="Syringes" fontWeight={'normal'} letterSpacing={'2px'} textAlign={'center'} as='h3' fontSize={'20px'}>
                            All available fuels: {fuels}</Heading> */}
                        <Heading textAlign={'center'} as='h3' fontSize={'20px'}>
                            Docs for all fuels in the mod:</Heading>
                    </Flex>
                </Flex>
            </motion.div>

            <Links />
            <He style={{ scrollMarginTop: '100px' }} id="Fuels">Fuels</He>










            {/*  */}






            {Fuels.map((Fuels) => {
                return <>
                    <motion.div initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5, delay }}>
                        <Tabs colorScheme='green' variant='enclosed' >
                            <TabList borderBottom={'0px'} >
                                <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                                <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                            </TabList>
                            <TabPanels bg={bg} borderRadius={'10px'} borderTopLeftRadius={'0px'} mb={'100px'}>
                                <TabPanel>



                                    <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }} h={'100%'} justifyContent={'space-evenly'}>
                                        <Flex w={{ base: '100%', md: '40%' }} textAlign={'left'}
                                            flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                                            <Heading fontSize='25px'>{Fuels.name}</Heading>
                                            <Image alt={Fuels.icon} mt={'10px'}
                                                style={{ imageRendering: "pixelated" }} width={res}
                                                height={res} src={Fuels.icon} />
                                        </Flex>
                                        <Flex flexDir={'column'} px={{ base: '0px', md: '100px' }}>
                                            <Flex w={'100%'} textAlign={'center'} alignItems="center" flexDir={'column'}>
                                                {Fuels.info}
                                            </Flex>
                                            <Flex mt={'10px'} minW={{ base: 'auto', md: '450px' }}>
                                                <Table variant='simple'>
                                                    <Tbody>
                                                        <Tr borderTop={'1px'}>
                                                            <Td borderColor={border}>Burned items (furnace)</Td>
                                                            <Td textAlign={'right'} borderColor={border}>{Fuels.seconds / 10}</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td borderColor={border}>Duration</Td>
                                                            <Td textAlign={'right'} borderColor={border}>{Fuels.seconds}{Fuels.unit}</Td>
                                                        </Tr>
                                                        <Tr>
                                                            <Td borderColor={border}>Ticks</Td>
                                                            <Td textAlign={'right'} borderColor={border}>{Fuels.seconds * 20}</Td>
                                                        </Tr>
                                                    </Tbody>
                                                </Table>
                                            </Flex>
                                        </Flex>
                                    </Flex>


                                </TabPanel>
                                <TabPanel>
                                    <Flex flexDir={'column'}>
                                        {Fuels.warning !== "" ? <Flex mb={2} justifyContent={'center'}><Heading fontSize={'14px'} color={warning}>{Fuels.warning}</Heading></Flex> : <></>}

                                        <Flex w={'100%'} flexDir={{ base: 'column', md: 'row' }}>

                                            {/* lewo */}
                                            <Flex w={{ base: '100%', md: '50%' }} alignItems={'center'}
                                                flexDir={'column'} justifyContent={'center'}>
                                                <Heading fontSize='25px'>{Fuels.name}</Heading>
                                                <Image alt={Fuels.icon} mt={'10px'}
                                                    style={{ imageRendering: "pixelated" }} width={res}
                                                    height={res} src={Fuels.icon} />
                                            </Flex>

                                            {/* Crafting */}
                                            <Flex w={{ base: '100%', md: '70%' }} textAlign={'center'} flexDir={{ base: 'column', md: 'row' }}>
                                                <Flex textAlign={{ base: 'left', md: 'center' }} ml={{ base: '0%', md: '0px' }} flexDir={'column'} mb={{ base: '20px', md: '0px' }}
                                                    mr={{ base: '0px', md: '20px' }}>
                                                    <Text>Crafting: <chakra.span color={Fuels.color}>{Fuels.crafting}</chakra.span></Text>
                                                    <Text textAlign={'left'}>Ingredients:</Text>
                                                    <OrderedList margin={{ base: 'left', md: 'auto' }} ml={{ base: '16%', md: '0px' }} textAlign={'left'}>

                                                        {Fuels.ingredients.map((ingredient) => {
                                                            return <ListItem key={ingredient}>{ingredient}</ListItem>
                                                        })}

                                                    </OrderedList>
                                                </Flex>
                                                <Flex flexDirection={'row'} alignItems={'center'} justifyContent='center'>
                                                    <Table border={'1px'} w={'100px'}><Tbody >
                                                        <Tr><MotionTd border={'1px'} borderColor="#808080" padding={0}>
                                                            {/* 1 miejsce */}
                                                            <Craft source={Fuels.ingredients_texture[0]}></Craft>

                                                        </MotionTd><MotionTd border={'1px'} borderColor="#808080" padding={0}>
                                                                {/* 2 miejsce */}
                                                                <Craft source={Fuels.ingredients_texture[1]}></Craft>

                                                            </MotionTd><MotionTd border={'1px'} borderColor="#808080" padding={0}>
                                                                {/* 3 miejsce */}
                                                                <Craft source={Fuels.ingredients_texture[2]}></Craft>
                                                            </MotionTd></Tr>
                                                        <Tr><MotionTd border={'1px'} borderColor="#808080" padding={0}>
                                                            {/* 4 miejsce */}
                                                            <Craft source={Fuels.ingredients_texture[3]}></Craft>
                                                        </MotionTd><MotionTd border={'1px'} borderColor="#808080" padding={0}>
                                                                {/* 5 miejsce */}
                                                                <Craft source={Fuels.ingredients_texture[4]}></Craft>
                                                            </MotionTd>
                                                            <MotionTd border={'1px'} borderColor="#808080" padding={0}>
                                                                {/* 6 miejsce */}
                                                                <Craft source={Fuels.ingredients_texture[5]}></Craft>
                                                            </MotionTd></Tr>
                                                        <Tr>
                                                            <MotionTd border={'1px'} borderColor="#808080" padding={0}>
                                                                {/* 7 miejsce  */}
                                                                <Craft source={Fuels.ingredients_texture[6]}></Craft>
                                                            </MotionTd>
                                                            <MotionTd border={'1px'} borderColor="#808080" p={'0'}>
                                                                {/* 8 miejsce */}
                                                                <Craft source={Fuels.ingredients_texture[7]}></Craft>
                                                            </MotionTd>
                                                            <MotionTd border={'1px'} borderColor="#808080" padding={0}>
                                                                {/* 9 miejsce */}
                                                                <Craft source={Fuels.ingredients_texture[8]}></Craft>
                                                            </MotionTd></Tr>
                                                    </Tbody></Table>
                                                    <ArrowForwardIcon fontSize={'25px'} mr={'20px'} ml={'20px'} />
                                                    <Table border={'1px'} w={'50px'} h={'50px'}>
                                                        <Tbody>
                                                            <Tr>
                                                                <MotionTd justifyContent={'center'} alignItems={'center'}
                                                                    padding={'0'} borderColor="bg">
                                                                    <Image style={{ imageRendering: "pixelated" }}
                                                                        alt={Fuels.icon} w={'40px'}
                                                                        src={Fuels.icon} margin={'auto'} />
                                                                    <Text pos={'absolute'} mt='-4' ml={'9'}>{Fuels.count}</Text>
                                                                </MotionTd>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </motion.div>
                </>
            })}

            <Links mt="-50px" />
            <He style={{ scrollMarginTop: '100px' }} id="Vanilla">Vanilla</He>
            <Flex flexDir={'column'} textAlign={'left'}>

                <motion.div initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.5, delay }}>
                    <Flex w={'100%'} flexDir={'column'} h={'100%'} justifyContent={'space-evenly'} bg={bg} p={5} rounded={'xl'}>
                        <Flex w={'100%'} textAlign={'left'}
                            flexDir={'column'} alignItems={'center'} justifyContent={'center'} >
                            <Heading textAlign={'left'} fontFamily={'Work sans'} mb={'10px'}>This mod modifiers vanilla items.</Heading>
                            <Text fontFamily={'Work sans'} fontWeight={'medium'}>
                                Now you can use vanillia some item as fuel in furnace! For example now you can put wheat, grass, leaves or flowers in fuel place. </Text>
                        </Flex>


                        <Flex flexDir={'column'} px={{ base: '0px', md: '100px' }} justifyContent={'center'} mt={'20px'}>
                            <SimpleGrid minChildWidth='80px' spacing='30px' justifyContent={'center'}>
                                <Pixel src={'wheat.png'} />
                                <Pixel src={'wheat_seeds.png'} />
                                <Pixel src={'string.png'} />
                                <Pixel src={'red_tulip.png'} />
                                <Pixel src={'https://ik.imagekit.io/o532f5vcp38/Tall_Grass_Ihdz3NICl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1643735887964'} />
                                <Pixel src={'flowering_azalea_leaves.png'} />
                            </SimpleGrid>
                        </Flex>
                    </Flex>
                </motion.div>

                <Links />
                <He style={{ scrollMarginTop: '100px' }} id="Loot">Loot</He>
                <motion.div initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.5, delay }}>



                    <Flex w={'100%'} flexDir={'column'} h={'100%'} bg={bg} p={5} rounded={'xl'} textAlign={'left'} style={{ WebkitAlignItems: 'left' }}>
                        You can find fuels in mineshaft or desert pyramid chests.
                        <Flex m={{ base: 0, md: 5 }} flexDir='column'>
                            <Image rounded={'lg'} alt="Fuelify loot tables" src="https://ik.imagekit.io/o532f5vcp38/tr:w-1000/2022-02-05_14.33.52_ouGdaKzA9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644068049121" />
                            <Text fontSize={'10px'}>Shaders: complementary shaders</Text>
                        </Flex>
                        Magic powder has little chance to drop from gravel.
                    </Flex>
                </motion.div>





            </Flex>

        </Ramki >
    );
}
export default Fuel