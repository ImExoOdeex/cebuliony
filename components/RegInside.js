import Ramki from './ramki'
import { motion } from 'framer-motion'
import { Heading, ListItem, OrderedList } from '@chakra-ui/layout'
import Normal from './normal'
import T from './T'
import { useColorModeValue } from '@chakra-ui/react'
import Link from './Link'

const Hr = ({ delay = 0, children, ...props }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.h1 initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.3, type: 'easeInOut', delay }}>
            <Heading mt={'10px'} color={'primary'} as="h1" fontSize={'3xl'} letterSpacing={'2px'}{...props}>{children}</Heading>
        </motion.h1>
    )
}

const RegInside = ({ delay = 0 }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    const color = useColorModeValue("#000", "#fff")
    return (
        <Ramki>
            <motion.h1 initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.2, type: 'easeInOut', delay }}>
                <Heading mt={'10px'} as="h1" fontSize={'3xl'} letterSpacing={'2px'} color={color}>Regulamin</Heading>
            </motion.h1>
            <Hr as="h2" fontSize="24px" mt="20px">§Ogólne</Hr>
            <Normal maxW="1100px" textAlign="left" pl={{ base: '10px', md: '20px' }}><T>
                <OrderedList lineHeight={'200%'}>
                    <ListItem>Nie zgłaszaj ich na Policje - w przeciwnym razie twój honor spadnie do 0.
                    </ListItem>
                    <ListItem>Używaj określenia &quot;Cebulion&quot; tylko w obszarach do tego wyznaczonych.
                    </ListItem>
                    <ListItem>Wspieraj nie tylko duchowo ale i finansowo Cebuliony.
                    </ListItem>
                    <ListItem>Strona jest zrobiona wyłącznie w celach humorystycznych.
                    </ListItem>
                    <ListItem>Nieznajomość regulaminu nie zwalnia z jego przestrzegania.
                    </ListItem>
                </OrderedList>
            </T></Normal>

            <Hr as="h2" fontSize="24px" mt="20px">§Treść</Hr>
            <Normal maxW="1100px" textAlign="center" pl={{ base: '10px', md: '20px' }}><T>
                <T>Na stronie dostępne są następujące podstrony:</T>
                <OrderedList textAlign="left" lineHeight={'200%'}>
                    <ListItem><b>Strona główna</b> - Są tutaj główne informacje na temat cebulionów.
                    </ListItem>
                    <ListItem><b>Regulamin</b> - Regulamin całej storny.
                    </ListItem>
                    <ListItem><b>Quiz</b> - Zwykły Quiz na temat informacji zawartych na Stronie głównej.
                    </ListItem>
                    <ListItem><b>Gry</b> - Są tutaj gry o Cebulionach, które można pobrać i zagrać :).
                    </ListItem>
                    <ListItem><b>Squirting syringe</b> - mod do gry Minecraft: java edition.
                    </ListItem>
                </OrderedList>
            </T></Normal>

            <Hr as="h2" fontSize="24px" mt="20px">§Pliki cookies</Hr>
            <Normal maxW="1100px" textAlign="center" pl={{ base: '10px', md: '20px' }}><T>
                <OrderedList textAlign="left" lineHeight={'200%'}>
                    <ListItem>Strona korzysta z ciasteczek, które są używane przez strony trzecie.
                    </ListItem>
                    <ListItem>Jeśli nie wyrażasz zgody na ciasteczka poprostu wyjdź z strony.
                    </ListItem>
                    <ListItem>Ciasteczka są używane do statystyk ruchu strony.
                    </ListItem>
                    <ListItem>Pliki cookies pozwalają stronie się rozwijać.
                    </ListItem>
                </OrderedList>
            </T></Normal>

            <Hr as="h2" fontSize="24px" mt="20px">§Prawa autorskie zdjęć</Hr>
            <Normal maxW="1100px" textAlign="center" pl={{ base: '10px', md: '20px' }}><T>
                <OrderedList textAlign="left" lineHeight={'200%'}>
                    <ListItem>Wszystkie zdjęcia na stronie głównej są podjęte darmową <Link color="primary" href={'https://unsplash.com/license'}>licencją</Link>.
                    </ListItem>
                    <ListItem>Wszystkie zdjęcia SVG są z <Link color="primary" href={'https://www.flaticon.com'}>flaticon.com</Link>.
                    </ListItem>
                    <ListItem>Logo strony posiada darmową <Link color="primary" href={'https://pixabay.com/pl/service/license/'}>licencję</Link> i pochodzi od <Link color="primary" href={'https://pixabay.com/pl/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=161611'}>
                        OpenClipart-Vectors</Link>.
                    </ListItem>
                </OrderedList>
            </T></Normal>



        </Ramki>
    )
}
export default RegInside