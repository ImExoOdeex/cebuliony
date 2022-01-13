import { Flex, Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";
import Ramki from "./ramki";
import Link from './Link'
import { ArrowBackIcon } from "@chakra-ui/icons";

const Error = ({ delay = 0 }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <Ramki minH="80vh" justifyContent={'center'} alignItems={'center'}>
            <motion.div initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2, delay }}>
                <Flex magin="auto" fontFamily={"Work Sans"} justifyContent={'center'} flexDir={'column'} mt={{ base: '100px', md: '200px' }}>
                    <Heading fontFamily={"Work Sans"} textTransform={'uppercase'}>404 | Page not found</Heading>
                    <Text>Ten link po prostu nie istnieje...</Text>
                    <motion.div drag whileHover={{ scale: 1.2 }}>
                        <Link href="/" _hover='none'>
                            <Flex zIndex={'1'} w={'auto'} maxW={'250px'} h={'50px'} bg={'teal.500'} margin={'auto'} mt={'20px'} rounded={'md'} justifyContent={'center'} alignItems={'center'}>
                                <ArrowBackIcon mr={'10px'} />
                                <Text>Powrót do Strony głównej</Text>
                            </Flex>
                        </Link>
                    </motion.div>
                </Flex>
            </motion.div>
        </Ramki>
    );
}

export default Error