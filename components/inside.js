import {
    Box,
    useColorModeValue,
    Image,
    Heading,
    UnorderedList,
    ListItem,
    Skeleton,
    Flex
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Normal from './normal'
import He from './He'
import Ramki from './ramki'
import T from './T'
import Link from './Link'

const Inside = ({ delay = 0 }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    const start = useColorModeValue('#ebebeb', '#1f1f1f');
    const end = useColorModeValue('#1f1f1f', '#ebebeb');
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    const ske = '700px'
    return (
        <Ramki>
            <motion.h1 initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2, delay }}>
                <Heading mt={'10px'} color={'primary'} fontSize={'3xl'} maxW='auto'
                    position={'relative'}>Dlaczego Cebulion?</Heading></motion.h1>
            <motion.div initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.3, delay }}>
                <Box
                    boxShadow={'md'} maxW={'600px'} h="auto" rounded={"md"} bg={bg}
                    margin={'auto'} mt="15px" mb={'30px'}>
                    <T>Cebulion jest symbolem polskiego cebulactwa. &quot;1 cebulion&quot; = 1 złoty.
                        Polskie złoty. Trudno uwierzyć, ale polskie cebuliony są niezniszczalne! Dlaczego? Ponieważ istnieją tylko w internecie.
                        Nie wynaleziono jeszcze wersji fizycznej.</T>
                </Box>
            </motion.div>
            <He>Uprawa</He>
            <Normal>
                <T>Uprawa cebulionów nie jest za bardzo skomplikowana.
                    Najzwyczajniej wystarczy posadzić ich nasiona w ziemi i regularnie je podlewać.</T>
            </Normal>
            <motion.div initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.6, delay }}>
                <Skeleton isLoaded startColor={start} endColor={end} m={'auto'} maxW={ske}>
                    <Image
                        alt='pewien' src='https://ik.imagekit.io/o532f5vcp38/tr:w-500/ceb_oLGwKW5E779?updatedAt=1628017145229'
                        w={'700px'} h={'auto'} margin={'auto'} mt={'50px'} rounded='lg' />
                </Skeleton>
            </motion.div>
            <He marginTop="40px">Polska ziemia dla Cebulionów</He>
            <Normal>
                <T>Z badań wynika, że polska ziemia jest najlepsza dla Cebulionów.
                    Czują się tam one najwygodniej i najszybciej rosną.</T>
                <T>Na ostatnim wywiadzie z Cebulionami dowiedzieliśmy się, że:</T>
                <UnorderedList px={'10px'} textAlign={'left'} lineHeight={'180%'}>
                    <ListItem >W polskiej ziemi czują się najbezpieczniej, ponieważ nieraz zostały zjedzone za granicą.</ListItem>
                    <ListItem>Śpi im się bardzo dobrze. Podobno polska ziemia jest najmiększa na całym świecie!</ListItem>
                </UnorderedList>
            </Normal>
            <motion.div initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.6, delay }}>
                <Skeleton isLoaded startColor={start} endColor={end} m={'auto'} MaxW={ske}>
                    <Image
                        alt='pewien' src='https://ik.imagekit.io/o532f5vcp38/tr:w-400/ceb2_8Lj5QC6GqCc?updatedAt=1628017112766'
                        w={'700px'} h={'auto'} margin={'auto'} mt={'50px'} rounded='lg' loading="lazy" />
                </Skeleton>
            </motion.div>
            <He>Cebuliony jako kryptowaluty</He>
            <Normal><T>Obecnie Cebulionowe kryptowaluty nie istnieją. W internecie istnieją różne zrzutki na powstanie takiej krypto, jednak jest tam 0 wpłacających, a w dodatku założyciele są niezweryfikowani.</T></Normal>




            <He marginTop="40px">Krążki Cebulionowe</He>
            <Normal><T>Nie wiem czy wiedziałeś/aś, ale krążki cebulowe robi się z Cebulionów. Kochają je wszyscy polacy, dlatego regularnie podlewaj swoje cebulki!</T></Normal>
            <motion.div initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.6, delay }}>
                <Skeleton isLoaded startColor={start} endColor={end} m={'auto'} MaxW={ske}>
                    <Image
                        alt='pewien' src='https://ik.imagekit.io/o532f5vcp38/tr:w-500/ceb3_69i2Cmk7ZX-?updatedAt=1631381146765'
                        w={'700px'} h={'auto'} margin={'auto'} mt={'50px'} rounded='lg' loading="lazy" />
                </Skeleton>
            </motion.div>
            <He marginTop="40px">Przygotuj się na inwazję</He>
            <Normal><T>Warto zacząć robić zapasy, ponieważ:</T>
                <UnorderedList px={'10px'} textAlign={'left'} lineHeight={'180%'}>
                    <ListItem>Niedługo cebuliony obejmą cały świat.</ListItem>
                    <ListItem>Sklepy nie będą funkcjonowały, ponieważ cebuliony je obrabują.</ListItem>
                    <ListItem>Jak nie zrobisz zapasów zginiesz, proste.</ListItem>
                </UnorderedList>
            </Normal>

            <Flex alignItems={'center'} justifyContent={'center'} flexDir={'row'}>
                <motion.div initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.6, delay }}>
                    <Image marginRight='7px'
                        alt='pewien'
                        src='https://ik.imagekit.io/o532f5vcp38/tr:w-40/icon_r9AXDu7be.png?updatedAt=1628891729360'
                        w={'40px'} h={'auto'} rounded='lg'
                        VerticalAlign="middle" ></Image>
                </motion.div>
                <He mt='0'>Patreon</He></Flex>

            <Normal><T>Jeśli masz zamiar wesprzeć Cebuliony możesz to zrobić przez{' '}
                <Link color='primary' href={'https://www.patreon.com/cebuliony'}> Patreon</Link>.</T></Normal>

        </Ramki>
    );
}

export default Inside