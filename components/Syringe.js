import {
  Heading,
  Flex,
  useColorModeValue,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Tbody,
  Tr,
  Td,
  ListItem,
  OrderedList,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useToast,
  Tooltip,
} from "@chakra-ui/react";
import Ramki from "./ramki";
import T from "./T";
import { ArrowForwardIcon, DownloadIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Link from "./Link";
import Syringes from "./jsons/syringes.json";
import React from "react";

const Syringetemplate = ({
  delay = 0,
  title,
  icon,
  uses,
  duration,
  amplifier,
  info,
  crafting = "shapeless",
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  one,
  two,
  four,
  five,
  six,
  eight,
  nine,
  table1 = "Number of uses",
}) => {
  const bg = useColorModeValue("#ebebeb", "#1f1f1f");
  const color = useColorModeValue("#000", "#fff");
  const res = "64px";
  const border = useColorModeValue("#000", "#fff");
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5, delay }}
    >
      <Tabs colorScheme="green" variant="enclosed" mb={"100px"}>
        <TabList borderBottom={"0px"}>
          <Tab _selected={{ color: color, bg: bg }}>Info</Tab>
          <Tab _selected={{ color: color, bg: bg }}>Crafting</Tab>
        </TabList>
        <TabPanels bg={bg} borderRadius={"10px"} borderTopLeftRadius={"0px"}>
          <TabPanel>
            <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} h={"100%"}>
              <Flex
                w={{ base: "100%", md: "40%" }}
                textAlign={"left"}
                flexDir={"column"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Heading fontSize="25px">{title}</Heading>
                <Image
                  alt="heal syringe"
                  mt={"10px"}
                  style={{ imageRendering: "pixelated" }}
                  width={res}
                  height={res}
                  src={icon}
                />
              </Flex>
              <Flex flexDir={"column"}>
                <Flex
                  w={"100%"}
                  textAlign={"center"}
                  alignItems="center"
                  flexDir={"column"}
                >
                  {info}
                </Flex>
                <Flex mt={"10px"}>
                  <Table variant="simple">
                    <Tbody>
                      <Tr borderTop={"1px"}>
                        <Td borderColor={border}>{table1}</Td>
                        <Td borderColor={border}>{uses}</Td>
                      </Tr>
                      <Tr>
                        <Td borderColor={border}>duration</Td>
                        <Td borderColor={border}>{duration}</Td>
                      </Tr>
                      <Tr>
                        <Td borderColor={border}>amplifier</Td>
                        <Td borderColor={border}>{amplifier}</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </Flex>
              </Flex>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex w={"100%"} flexDir={{ base: "column", md: "row" }}>
              {/* lewo */}
              <Flex
                w={{ base: "100%", md: "50%" }}
                alignItems={"center"}
                flexDir={"column"}
                justifyContent={"center"}
              >
                <Heading fontSize="25px">{title}</Heading>
                <Image
                  alt="heal syringe"
                  mt={"10px"}
                  style={{ imageRendering: "pixelated" }}
                  width={res}
                  height={res}
                  src={icon}
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
                  <Text>Crafting: {crafting}</Text>
                  <Text textAlign={"left"}>Ingredients:</Text>
                  <OrderedList
                    margin={{ base: "left", md: "auto" }}
                    ml={{ base: "16%", md: "0px" }}
                    textAlign={"left"}
                  >
                    {ingredient1}
                    {ingredient2}
                    {ingredient3}
                    {ingredient4}
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
                        <Td border={"1px"} borderColor="#808080" padding={0}>
                          {/* 1 miejsce */}
                          {one}
                        </Td>
                        <Td border={"1px"} borderColor="#808080" padding={0}>
                          {/* 2 miejsce */}
                          {two}
                        </Td>
                        <Td border={"1px"} borderColor="#808080"></Td>
                      </Tr>
                      <Tr>
                        <Td border={"1px"} borderColor="#808080" padding={0}>
                          {/* 4 miejsce */}
                          {four}
                        </Td>
                        <Td border={"1px"} borderColor="#808080" padding={0}>
                          {/* 5 miejsce */}
                          {five}
                        </Td>
                        <Td border={"1px"} borderColor="#808080" padding={0}>
                          {/* 6 miejsce */}
                          {six}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td border={"1px"} borderColor="#808080"></Td>
                        <Td border={"1px"} borderColor="#808080" p={"0"}>
                          {/* 8 miejsce */}
                          {eight}
                        </Td>
                        <Td border={"1px"} borderColor="#808080" padding={0}>
                          {/* 9 miejsce */}
                          {nine}
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                  <ArrowForwardIcon fontSize={"25px"} mr={"20px"} ml={"20px"} />
                  <Table border={"1px"} w={"50px"} h={"50px"}>
                    <Tbody>
                      <Tr>
                        <Td
                          justifyContent={"center"}
                          alignItems={"center"}
                          padding={"0"}
                          borderColor="bg"
                        >
                          <Image
                            style={{ imageRendering: "pixelated" }}
                            alt="heal syringe"
                            w={"40px"}
                            src={icon}
                            margin={"auto"}
                          />
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
  );
};
const Links = ({ delay = 0 }) => {
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
      transition={{ duration: 0.3, delay }}
    >
      <Breadcrumb textAlign={"left"} fontWeight="medium" fontSize="sm">
        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() =>
              toast({
                title: "Syringes",
                description: "Navigating to syringes",
                status: "success",
                duration: duration,
                isClosable: false,
                variant: "left-accent",
                position: "bottom-right",
              })
            }
            href="#Syringes"
          >
            Syringes
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink
            onClick={() =>
              toast({
                title: "Items",
                description: "Navigating to items",
                status: "success",
                duration: duration,
                isClosable: false,
                variant: "left-accent",
                position: "bottom-right",
              })
            }
            href="#Items"
          >
            Items
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </motion.div>
  );
};
const He = ({ children, delay = 0, ...props }) => {
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
      transition={{ duration: 0.4, type: "easeInOut", delay }}
    >
      <Heading
        mt={"10px"}
        color={"primary"}
        as="h1"
        fontSize={"3xl"}
        {...props}
      >
        {children}
      </Heading>
    </motion.h1>
  );
};
const Craft = ({ source }) => {
  return (
    <Tooltip label={source} hasArrow>
      <Image
        style={{ imageRendering: "pixelated" }}
        src={source}
        alt={source}
        w={"40px"}
        margin={"auto"}
      />
    </Tooltip>
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

const Syringe = ({ delay = 0 }) => {
  const syringes = "7";
  const items = "1";
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
  return (
    <Ramki>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.2, delay }}
      >
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
              Squirting Syringe
            </Heading>
            <Image
              alt="logo"
              mt={"10px"}
              style={{ imageRendering: "pixelated" }}
              width={res}
              height={res}
              src="/syringeicon.png"
            />
          </Flex>

          <Flex flexDir={"column"} lineHeight={"150%"}>
            <T>
              Squirting syringe is a free Minecraft: Java edition mod! The mod
              adds various types of injections to the game that have many
              different effects. Every syringe crafts in stack of 1.
            </T>
            <Flex
              mt={"10px"}
              mb={"10px"}
              flexDir={{ base: "column", lg: "row" }}
              w={"100%"}
              justifyContent={"center"}
            >
              <Flex w={"100%"} justifyContent={{ base: "center", lg: "right" }}>
                <Flex
                  maxW={"180px"}
                  h={"50px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={"2px"}
                  mr={"10px"}
                >
                  <Image
                    alt="fabric"
                    w={"40px"}
                    src="fabriclogo.png"
                    mr={"10px"}
                  />
                  <Flex flexDir={"column"} fontFamily={"Work Sans"}>
                    <Text textAlign={"left"} fontWeight={"normal"}>
                      Requies
                    </Text>
                    <Text fontSize={"md"} mt={"-3px"} fontWeight={"bold"}>
                      Fabric API
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  maxW={"180px"}
                  h={"50px"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={"2px"}
                  mr={"10px"}
                >
                  <Image
                    alt="fabric"
                    w={"40px"}
                    src="fabriclogo.png"
                    mr={"5px"}
                  />
                  <Flex flexDir={"column"} fontFamily={"Work Sans"}>
                    <Text>Fabric</Text>
                    <Text fontSize={"sm"}>1.16.5 | 1.17.1 | 1.18.1</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex w={"100%"} justifyContent={{ base: "center", lg: "left" }}>
                <script>splitbee.track(&ldquo;Github&ldquo;)</script>
                <Link
                  data-splitbee-event="Github"
                  href="https://github.com/ImExoOdeex/squirting-syringe"
                  mr="10px"
                  _hover="none"
                >
                  <Flex
                    maxW={"180px"}
                    h={"50px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    px={"2px"}
                    mr={"10px"}
                    fontFamily={"Work Sans"}
                  >
                    <Image
                      alt="octocat"
                      w={"40px"}
                      src="octocat.png"
                      mr={"5px"}
                    />
                    <Text fontWeight={"extrabold"} letterSpacing={"2px"}>
                      Github
                    </Text>
                  </Flex>
                </Link>

                <Link
                  _hover={"none"}
                  href="https://www.curseforge.com/minecraft/mc-mods/squirting-syringe"
                  mr="10px"
                >
                  <Flex
                    fontFamily={"Work Sans"}
                    px={"2px"}
                    fontSize={"14px"}
                    h={"50px"}
                    bg={"transparent"}
                    w={"auto"}
                    rounded={"md"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <DownloadIcon color={"color"} mr={"3px"} />
                    Download from curseforge
                  </Flex>
                </Link>
              </Flex>
            </Flex>
            <Heading
              id="Syringes"
              fontWeight={"normal"}
              letterSpacing={"2px"}
              textAlign={"center"}
              as="h3"
              fontSize={"20px"}
            >
              All available syringes ({syringes} + {items})
            </Heading>
            <Heading textAlign={"center"} as="h3" fontSize={"20px"}>
              Docs for all syringes in the mod:
            </Heading>
          </Flex>
        </Flex>
      </motion.div>

      <Links />
      <He
        fontFamily={"Work Sans"}
        color="color"
        textAlign="left"
        m="0"
        ml={{ base: "5px", md: "30px" }}
        mb="20px"
        letterSpacing="2px"
        fontWeight="900"
      >
        Syringes
      </He>

      {Syringes.map((Syringes) => {
        return (
          <>
            <motion.div
              initial="hidden"
              animate="enter"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5, delay }}
            >
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
                        <Heading fontSize="25px">{Syringes.name}</Heading>
                        <Image
                          alt={Syringes.icon}
                          mt={"10px"}
                          style={{ imageRendering: "pixelated" }}
                          width={res}
                          height={res}
                          src={Syringes.icon}
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
                          {Syringes.info}
                        </Flex>
                        <Flex mt={"10px"}>
                          <Table variant="simple">
                            <Tbody>
                              <Tr borderTop={"1px"}>
                                <Td borderColor={border}>Number of uses</Td>
                                <Td textAlign={"right"} borderColor={border}>
                                  {Syringes.uses}
                                </Td>
                              </Tr>
                              <Tr>
                                <Td borderColor={border}>duration</Td>
                                <Td textAlign={"right"} borderColor={border}>
                                  {Syringes.duration}
                                </Td>
                              </Tr>
                              <Tr>
                                <Td borderColor={border}>amplifier</Td>
                                <Td textAlign={"right"} borderColor={border}>
                                  {Syringes.amplifier}
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
                      {Syringes.warning !== "" ? (
                        <Text color="red.300">{Syringes.warning}</Text>
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
                          <Heading fontSize="25px">{Syringes.name}</Heading>
                          <Image
                            alt={Syringes.icon}
                            mt={"10px"}
                            style={{ imageRendering: "pixelated" }}
                            width={res}
                            height={res}
                            src={Syringes.icon}
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
                            <Text>Crafting: {Syringes.crafting}</Text>
                            <Text textAlign={"left"}>Ingredients:</Text>
                            <OrderedList
                              margin={{ base: "left", md: "auto" }}
                              ml={{ base: "16%", md: "0px" }}
                              textAlign={"left"}
                            >
                              {Syringes.ingredients.map((ingredient) => {
                                return (
                                  <>
                                    {/* <Tooltip key={ingredient} label={ingredient}> */}
                                    <li>{ingredient}</li>
                                    {/* </Tooltip>  */}
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
                                    <Tooltip label="Hujfgdfgdf" fontSize="md">
                                      <Craft
                                        source={Syringes.ingredients_texture[0]}
                                      ></Craft>
                                    </Tooltip>
                                  </MotionTd>
                                  <Tooltip label="Hujfgdfgdf" fontSize="md">
                                    <MotionTd
                                      whileHover={{ scale: 2 }}
                                      border={"1px"}
                                      padding={0}
                                    >
                                      {/* 2 miejsce */}
                                      <Craft
                                        source={Syringes.ingredients_texture[1]}
                                      ></Craft>
                                    </MotionTd>
                                  </Tooltip>
                                  <MotionTd border={"1px"} padding={0}>
                                    {/* 3 miejsce */}
                                    <Craft
                                      source={Syringes.ingredients_texture[2]}
                                    ></Craft>
                                  </MotionTd>
                                </Tr>
                                <Tr>
                                  <MotionTd border={"1px"} padding={0}>
                                    {/* 4 miejsce */}
                                    <Craft
                                      source={Syringes.ingredients_texture[3]}
                                    ></Craft>
                                  </MotionTd>
                                  <MotionTd border={"1px"} padding={0}>
                                    {/* 5 miejsce */}
                                    <Craft
                                      source={Syringes.ingredients_texture[4]}
                                    ></Craft>
                                  </MotionTd>
                                  <MotionTd border={"1px"} padding={0}>
                                    {/* 6 miejsce */}
                                    <Craft
                                      source={Syringes.ingredients_texture[5]}
                                    ></Craft>
                                  </MotionTd>
                                </Tr>
                                <Tr>
                                  <MotionTd border={"1px"} padding={0}>
                                    {/* 7 miejsce  */}
                                    <Craft
                                      source={Syringes.ingredients_texture[6]}
                                    ></Craft>
                                  </MotionTd>
                                  <MotionTd border={"1px"} p={"0"}>
                                    {/* 8 miejsce */}
                                    <Craft
                                      source={Syringes.ingredients_texture[7]}
                                    ></Craft>
                                  </MotionTd>
                                  <MotionTd border={"1px"} padding={0}>
                                    {/* 9 miejsce */}
                                    <Craft
                                      source={Syringes.ingredients_texture[8]}
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
                                    <Tooltip label={Syringes.icon} hasArrow>
                                      <Image
                                        style={{ imageRendering: "pixelated" }}
                                        alt={Syringes.icon}
                                        w={"40px"}
                                        src={Syringes.icon}
                                        margin={"auto"}
                                      />
                                    </Tooltip>
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
      })}

      <Links />
      <He
        id="Items"
        fontFamily={"Work Sans"}
        color="color"
        margin="0"
        textAlign="left"
        ml={{ base: "5px", md: "30px" }}
        mb="20px"
        letterSpacing="2px"
        fontWeight="900"
      >
        Items
      </He>
      <Syringetemplate
        title={"Syringe"}
        icon={"/syringe.png"}
        uses={"16"}
        duration={"---"}
        amplifier={"---"}
        table1="Stack"
        crafting="shaped"
        info={"From syringe item you can make other syringes."}
        ingredient1={<ListItem>Glass</ListItem>}
        ingredient2={<ListItem>Iron ingot</ListItem>}
        one={
          <Craft
            source={
              "https://ik.imagekit.io/o532f5vcp38/tr:w-40/glass_RB6V69n6w.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642289567245"
            }
          />
        }
        five={
          <Craft
            source={
              "https://ik.imagekit.io/o532f5vcp38/tr:w-40/glass_RB6V69n6w.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642289567245g"
            }
          />
        }
        nine={<Craft source={"/iron_ingot.png"} />}
      />
    </Ramki>
  );
};
export default Syringe;
