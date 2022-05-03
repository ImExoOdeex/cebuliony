import {
    Heading,
    Flex,
    Image,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useColorModeValue,
    Table,
    Tbody,
    Tr,
    Td,
    OrderedList,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    useToast,
    Tooltip,
    chakra,
    Box,
    SimpleGrid
} from "@chakra-ui/react";
import Ramki from "./ramki";
import T from "./T";
import { ArrowForwardIcon, DownloadIcon, InfoIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Link from "./Link";
import Boots from "./jsons/boots.json";
import React from "react";
import Games from "./jsons/games.json";
import Accessories from "./jsons/accessories.json";

const Links = () => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 },
    };
    const toast = useToast();
    const duration = 1250;
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
        >
            <Breadcrumb textAlign={"left"} fontWeight="medium" fontSize="sm">
                <BreadcrumbItem>
                    <BreadcrumbLink
                        onClick={() =>
                            toast({
                                title: "Demostration",
                                description: "Navigating to demostration",
                                status: "success",
                                duration: duration,
                                isClosable: false,
                                variant: "left-accent",
                                position: "bottom-right",
                            })
                        }
                        href="#Demostration"
                    >
                        Demostration
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink
                        onClick={() =>
                            toast({
                                title: "Boots",
                                description: "Navigating to boots",
                                status: "success",
                                duration: duration,
                                isClosable: false,
                                variant: "left-accent",
                                position: "bottom-right",
                            })
                        }
                        href="#Boots"
                    >
                        Boots
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink
                        onClick={() =>
                            toast({
                                title: "Accessories",
                                description: "Navigating to accessories",
                                status: "success",
                                duration: duration,
                                isClosable: false,
                                variant: "left-accent",
                                position: "bottom-right",
                            })
                        }
                        href="#Accessories"
                    >
                        Accessories
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        </motion.div>
    );
};
const He = ({ children, ...props }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 },
    };
    return (
        <motion.h1
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: "easeInOut" }}
        >
            <Heading
                style={{ scrollMarginTop: "100px" }}
                fontFamily={"Work Sans"}
                color="color"
                textAlign="left"
                m="0"
                ml={{ base: "5px", md: "30px" }}
                mb="20px"
                letterSpacing="2px"
                fontWeight="900"
                {...props}
            >
                {children}
            </Heading>
        </motion.h1>
    );
};
const Craft = ({ source }) => {
    return (
        <Image
            style={{ imageRendering: "pixelated" }}
            src={source}
            alt={source}
            w={"40px"}
            margin={"auto"}
        />
    );
};

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

function SpectreBoots() {
    const span = useColorModeValue("green.300", "green.600");
    const bg = useColorModeValue("#ebebeb", "#1f1f1f");
    const color = useColorModeValue("#000", "#fff");
    const res = "64px";
    const border = useColorModeValue("#000", "#fff");
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 },
    };

    var rarityColor = '';

    const MotionImage = motion(Image);

    return (
        <Ramki>
            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2 }}
            >
                <Flex bg={'red.500'} py={3} rounded={'lg'} margin="auto" justifyContent={'center'} alignItems={'center'} mx={'20px'}>
                    <Heading color={'white'} fontFamily={'Work Sans'} textTransform={'uppercase'} alignItems={'center'}><InfoIcon mr={'10px'} h="100%" />Work in progress</Heading></Flex>
                <Flex />
                <Flex
                    display={"flex"}
                    flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
                    textAlign={"center"}
                    margin={"auto"}
                    bg={"transparent"}
                    w={"100%"}
                    h={"auto"}
                    p={{ base: 2, md: 6 }}
                    rounded="lg"
                    justifyContent="space-beetwen"
                >
                    <Flex
                        alignItems={"center"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        w={{ base: "100%", md: "500px" }}
                        h={"auto"}
                        m="auto"
                    >
                        <Heading
                            fontFamily={"Work Sans"}
                            as={"span"}
                            position={"relative"}
                            fontWeight={"bolder"}
                            letterSpacing={"1px"}
                            _after={{
                                content: "''",
                                width: "full",
                                height: { base: "20%", md: "30%" },
                                position: "absolute",
                                bottom: 1,
                                left: 0,
                                bg: span,
                                zIndex: -1,
                                borderRadius: "10px",
                            }}
                        >
                            Supplementary accessories
                        </Heading>
                        <MotionImage
                            cursor="zoom-in"
                            whileTap={{ scale: 8, cursor: "zoom-out", style: { imageRendering: "auto" } }}
                            alt="logo"
                            mt={"10px"}
                            style={{ imageRendering: "pixelated" }}
                            width={res}
                            height={res}
                            src="/supplementary_accessories.png"
                        />
                    </Flex>

                    <Flex flexDir={"column"} lineHeight={"150%"}>
                        <T>
                            Enchance your game by adding some helpfull accessories to your character.
                        </T>

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
                                                {Game.id == 3 ? <>
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
                                    {Game.id == 2 ? <>
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
                                <Link data-splitbee-event="Github" href="https://github.com/ImExoOdeex/SupplementaryAccessories" mr='10px' _hover="none" alignItems='center'>
                                    <Flex maxW={'180px'} justifyContent={'space-evenly'} alignItems={'center'} px={'2px'} mr={'10px'} fontFamily={'Work Sans'} m={'auto'} >
                                        <Image alt="octocat" w={'40px'} src="octocat.png" mr={'5px'} />
                                        <Text fontWeight={'extrabold'} letterSpacing={'2px'}>Github</Text>
                                    </Flex>
                                </Link>
                            </Box>
                            <Box bg="red.500" rounded='lg' h={'50px'} display={'flex'} justifyContent='center' alignItems={'center'} mr='10px' >
                                <Link color='white' _disabled={true} _hover={'none'} href="https://www.curseforge.com/minecraft/mc-mods/squirting-syringe" alignItems='center'>
                                    <Flex m={'auto'} fontFamily={"Work Sans"} px={'2px'} fontSize={'14px'} bg={'transparent'} w={'auto'}
                                        rounded={'md'} alignItems={'center'} justifyContent={'space-evenly'}>
                                        <DownloadIcon color={'color'} mr={'3px'} /><Text>Download from curseforge</Text>
                                    </Flex>
                                </Link>
                            </Box>
                        </SimpleGrid>

                        <Heading textAlign={"center"} as="h3" fontSize={"20px"}>
                            Docs for all accessories in the mod:
                        </Heading>
                    </Flex>
                </Flex>
            </motion.div >

            <Links />
            <He id="Demostration">
                Demostration
            </He>
            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2 }}
            >
                <Flex flexDir={'column'}>
                    <Box>
                        <Heading as={'h4'} fontSize='28px'>Boots:</Heading>
                        <video width={'800px'} height='400px' controls style={{ margin: 'auto', borderRadius: '7px' }}>
                            <source src="spectredemomuted.mp4" />
                        </video>
                    </Box>
                    <Tooltip label='Work in progress'>
                        <Heading fontFamily={'Work sans'} color='red.600'>WIP</Heading>
                    </Tooltip>
                </Flex>
            </motion.div>
            <Links />
            <He id="Boots">
                Boots
            </He>

            {Boots.map((Boots) => {
                if (Boots.rarity == "common") { rarityColor = 'green.500' }
                else if (Boots.rarity == "uncommon") { rarityColor = 'blue.500' }
                else if (Boots.rarity == "epic") { rarityColor = 'purple.500' }
                else { rarityColor = '' }
                return (
                    <>
                        <motion.div
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.5 }}>
                            <Tabs colorScheme="green" variant="enclosed" mb={"60px"}>
                                <TabList borderBottom={"0px"}>
                                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                                </TabList>
                                <TabPanels
                                    bg={bg}
                                    borderRadius={"10px"}
                                    borderTopLeftRadius={"0px"}
                                >
                                    <TabPanel>
                                        <Flex
                                            w={"100%"}
                                            flexDir={{ base: "column", md: "row" }}
                                            h={"100%"}
                                            justifyContent={"space-evenly"}
                                        >
                                            <Flex
                                                w={{ base: "100%", md: "40%" }}
                                                textAlign={"left"}
                                                flexDir={"column"}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                            >
                                                <Heading fontSize="25px">{Boots.name}</Heading>
                                                <Image
                                                    alt={Boots.icon}
                                                    mt={"10px"}
                                                    style={{ imageRendering: "pixelated" }}
                                                    width={res}
                                                    height={res}
                                                    src={Boots.icon}
                                                />
                                            </Flex>
                                            <Flex
                                                flexDir={"column"}
                                                px={{ base: "0px", md: "100px" }}
                                            >
                                                <Flex
                                                    w={"100%"}
                                                    textAlign={"center"}
                                                    alignItems="center"
                                                    flexDir={"column"}
                                                >
                                                    {Boots.info}
                                                </Flex>
                                                <Flex mt={"10px"}>
                                                    <Table variant="simple">
                                                        <Tbody>
                                                            <Tr borderTop={"1px"}>
                                                                <Td borderColor={border}>duration</Td>
                                                                <Td textAlign={"right"} borderColor={border}>
                                                                    {Boots.duration}
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td borderColor={border}>rarity</Td>
                                                                <Td textAlign={"right"} borderColor={border} color={rarityColor} textShadow='5px'>
                                                                    {Boots.rarity}
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td borderColor={border}>attributes</Td>
                                                                <Td textAlign={"right"} borderColor={border}>
                                                                    {Boots.attributes}
                                                                </Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </TabPanel>
                                    <TabPanel>
                                        <Flex flexDir={"column"}>
                                            {/* display warining */}
                                            {Boots.warning !== "" ? (
                                                <Text color="red.300">{Boots.warning}</Text>
                                            ) : (
                                                <React.Fragment></React.Fragment>
                                            )}

                                            <Flex w={"100%"} flexDir={{ base: "column", md: "row" }}>
                                                {/* lewo */}
                                                <Flex
                                                    w={{ base: "100%", md: "50%" }}
                                                    alignItems={"center"}
                                                    flexDir={"column"}
                                                    justifyContent={"center"}
                                                >
                                                    <Heading fontSize="25px">{Boots.name}</Heading>
                                                    <Image
                                                        alt={Boots.icon}
                                                        mt={"10px"}
                                                        style={{ imageRendering: "pixelated" }}
                                                        width={res}
                                                        height={res}
                                                        src={Boots.icon}
                                                    />
                                                </Flex>

                                                {/* Crafting */}
                                                <Flex
                                                    w={{ base: "100%", md: "70%" }}
                                                    textAlign={"center"}
                                                    flexDir={{ base: "column", md: "row" }}
                                                >
                                                    <Flex
                                                        textAlign={{ base: "left", md: "center" }}
                                                        ml={{ base: "0%", md: "0px" }}
                                                        flexDir={"column"}
                                                        mb={{ base: "20px", md: "0px" }}
                                                        mr={{ base: "0px", md: "20px" }}
                                                    >
                                                        <Text>Crafting: {Boots.crafting}</Text>
                                                        <Text textAlign={"left"}>Ingredients:</Text>
                                                        <OrderedList
                                                            margin={{ base: "left", md: "auto" }}
                                                            ml={{ base: "16%", md: "0px" }}
                                                            textAlign={"left"}
                                                        >
                                                            {Boots.ingredients.map((ingredient) => {
                                                                return (
                                                                    <>
                                                                        <li>{ingredient}</li>
                                                                    </>
                                                                );
                                                            })}
                                                        </OrderedList>
                                                    </Flex>
                                                    <Flex
                                                        flexDirection={"row"}
                                                        alignItems={"center"}
                                                        justifyContent="center"
                                                    >
                                                        <Table border={"1px"} w={"100px"}>
                                                            <Tbody>
                                                                <Tr>
                                                                    <MotionTd
                                                                        whileHover={{ scale: 2 }}
                                                                        border={"1px"}
                                                                        padding={0}
                                                                    >
                                                                        {/* 1 miejsce */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[0]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd
                                                                        whileHover={{ scale: 2 }}
                                                                        border={"1px"}
                                                                        padding={0}
                                                                    >
                                                                        {/* 2 miejsce */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[1]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 3 miejsce */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[2]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                </Tr>
                                                                <Tr>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 4 miejsce */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[3]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 5 miejsce */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[4]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 6 miejsce */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[5]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                </Tr>
                                                                <Tr>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 7 miejsce  */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[6]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} p={"0"}>
                                                                        {/* 8 miejsce */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[7]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 9 miejsce */}
                                                                        <Craft
                                                                            source={Boots.ingredients_texture[8]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                </Tr>
                                                            </Tbody>
                                                        </Table>
                                                        <ArrowForwardIcon
                                                            fontSize={"25px"}
                                                            mr={"20px"}
                                                            ml={"20px"}
                                                        />
                                                        <Table border={"1px"} w={"50px"} h={"50px"}>
                                                            <Tbody>
                                                                <Tr>
                                                                    <MotionTd
                                                                        justifyContent={"center"}
                                                                        alignItems={"center"}
                                                                        padding={"0"}
                                                                        borderColor="bg"
                                                                    >
                                                                        <Image
                                                                            style={{ imageRendering: "pixelated" }}
                                                                            alt={Boots.icon}
                                                                            w={"40px"}
                                                                            src={Boots.icon}
                                                                            margin={"auto"}
                                                                        />
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
                );
            })
            }
            < Links />
            <He id="Accessories">Accessories</He>
            {Accessories.map((Accessories) => {
                if (Accessories.rarity == "common") { rarityColor = 'green.500' }
                else if (Accessories.rarity == "uncommon") { rarityColor = 'blue.500' }
                else if (Accessories.rarity == "epic") { rarityColor = 'purple.500' }
                else { rarityColor = '' }
                return (
                    <>
                        <motion.div
                            initial="hidden"
                            animate="enter"
                            exit="exit"
                            variants={variants}
                            transition={{ duration: 0.5 }}>
                            <Tabs colorScheme="green" variant="enclosed" mb={"60px"}>
                                <TabList borderBottom={"0px"}>
                                    <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
                                    <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
                                </TabList>
                                <TabPanels
                                    bg={bg}
                                    borderRadius={"10px"}
                                    borderTopLeftRadius={"0px"}
                                >
                                    <TabPanel>
                                        <Flex
                                            w={"100%"}
                                            flexDir={{ base: "column", md: "row" }}
                                            h={"100%"}
                                            justifyContent={"space-evenly"}
                                        >
                                            <Flex
                                                w={{ base: "100%", md: "40%" }}
                                                textAlign={"left"}
                                                flexDir={"column"}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                            >
                                                <Heading fontSize="25px">{Accessories.name}</Heading>
                                                <Image
                                                    alt={Accessories.icon}
                                                    mt={"10px"}
                                                    style={{ imageRendering: "pixelated" }}
                                                    width={res}
                                                    height={res}
                                                    src={Accessories.icon}
                                                />
                                            </Flex>
                                            <Flex
                                                flexDir={"column"}
                                                px={{ base: "0px", md: "100px" }}
                                            >
                                                <Flex
                                                    w={"100%"}
                                                    textAlign={"center"}
                                                    alignItems="center"
                                                    flexDir={"column"}
                                                >
                                                    {Accessories.info}
                                                </Flex>
                                                <Flex mt={"10px"}>
                                                    <Table variant="simple">
                                                        <Tbody>
                                                            <Tr borderTop={"1px"}>
                                                                <Td borderColor={border}>duration</Td>
                                                                <Td textAlign={"right"} borderColor={border}>
                                                                    {Accessories.duration}
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td borderColor={border}>rarity</Td>
                                                                <Td textAlign={"right"} borderColor={border} color={rarityColor} textShadow='5px'>
                                                                    {Accessories.rarity}
                                                                </Td>
                                                            </Tr>
                                                            <Tr>
                                                                <Td borderColor={border}>attributes</Td>
                                                                <Td textAlign={"right"} borderColor={border}>
                                                                    {Accessories.attributes}
                                                                </Td>
                                                            </Tr>
                                                        </Tbody>
                                                    </Table>
                                                </Flex>
                                            </Flex>
                                        </Flex>
                                    </TabPanel>
                                    <TabPanel>
                                        <Flex flexDir={"column"}>
                                            {/* display warining */}
                                            {Accessories.warning !== "" ? (
                                                <Text color="red.300">{Accessories.warning}</Text>
                                            ) : (
                                                <React.Fragment></React.Fragment>
                                            )}

                                            <Flex w={"100%"} flexDir={{ base: "column", md: "row" }}>
                                                {/* lewo */}
                                                <Flex
                                                    w={{ base: "100%", md: "50%" }}
                                                    alignItems={"center"}
                                                    flexDir={"column"}
                                                    justifyContent={"center"}
                                                >
                                                    <Heading fontSize="25px">{Accessories.name}</Heading>
                                                    <Image
                                                        alt={Accessories.icon}
                                                        mt={"10px"}
                                                        style={{ imageRendering: "pixelated" }}
                                                        width={res}
                                                        height={res}
                                                        src={Accessories.icon}
                                                    />
                                                </Flex>

                                                {/* Crafting */}
                                                <Flex
                                                    w={{ base: "100%", md: "70%" }}
                                                    textAlign={"center"}
                                                    flexDir={{ base: "column", md: "row" }}
                                                >
                                                    <Flex
                                                        textAlign={{ base: "left", md: "center" }}
                                                        ml={{ base: "0%", md: "0px" }}
                                                        flexDir={"column"}
                                                        mb={{ base: "20px", md: "0px" }}
                                                        mr={{ base: "0px", md: "20px" }}
                                                    >
                                                        <Text>Crafting: {Accessories.crafting}</Text>
                                                        <Text textAlign={"left"}>Ingredients:</Text>
                                                        <OrderedList
                                                            margin={{ base: "left", md: "auto" }}
                                                            ml={{ base: "16%", md: "0px" }}
                                                            textAlign={"left"}
                                                        >
                                                            {Accessories.ingredients.map((ingredient) => {
                                                                return (
                                                                    <>
                                                                        <li>{ingredient}</li>
                                                                    </>
                                                                );
                                                            })}
                                                        </OrderedList>
                                                    </Flex>
                                                    <Flex
                                                        flexDirection={"row"}
                                                        alignItems={"center"}
                                                        justifyContent="center"
                                                    >
                                                        <Table border={"1px"} w={"100px"}>
                                                            <Tbody>
                                                                <Tr>
                                                                    <MotionTd
                                                                        whileHover={{ scale: 2 }}
                                                                        border={"1px"}
                                                                        padding={0}
                                                                    >
                                                                        {/* 1 miejsce */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[0]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd
                                                                        whileHover={{ scale: 2 }}
                                                                        border={"1px"}
                                                                        padding={0}
                                                                    >
                                                                        {/* 2 miejsce */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[1]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 3 miejsce */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[2]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                </Tr>
                                                                <Tr>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 4 miejsce */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[3]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 5 miejsce */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[4]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 6 miejsce */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[5]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                </Tr>
                                                                <Tr>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 7 miejsce  */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[6]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} p={"0"}>
                                                                        {/* 8 miejsce */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[7]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                    <MotionTd border={"1px"} padding={0}>
                                                                        {/* 9 miejsce */}
                                                                        <Craft
                                                                            source={Accessories.ingredients_texture[8]}
                                                                        ></Craft>
                                                                    </MotionTd>
                                                                </Tr>
                                                            </Tbody>
                                                        </Table>
                                                        <ArrowForwardIcon
                                                            fontSize={"25px"}
                                                            mr={"20px"}
                                                            ml={"20px"}
                                                        />
                                                        <Table border={"1px"} w={"50px"} h={"50px"}>
                                                            <Tbody>
                                                                <Tr>
                                                                    <MotionTd
                                                                        justifyContent={"center"}
                                                                        alignItems={"center"}
                                                                        padding={"0"}
                                                                        borderColor="bg"
                                                                    >
                                                                        <Image
                                                                            style={{ imageRendering: "pixelated" }}
                                                                            alt={Accessories.icon}
                                                                            w={"40px"}
                                                                            src={Accessories.icon}
                                                                            margin={"auto"}
                                                                        />
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
                );
            })
            }
            <Text>and much more! <chakra.span color={'red.500'}>WIP</chakra.span></Text>

        </Ramki >
    )
}

export default SpectreBoots