import {
    Box,
    Flex,
    HStack,
    Spacer,
    Text,
} from '@chakra-ui/react';
import Link from './Link'
import { motion } from 'framer-motion';

export default function NavFooter({ delay = 0 }) {
    const data = new Date()
    const rok = data.getFullYear()
    const version = '2.1'
    const variants = {
        hidden: { opacity: 0, x: 0, y: -10 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -10 }
    }
    return (
        <Box h={'50px'}>
            <Flex bg={'transparent'} px={4} w={'100%'} h={'50px'}
                borderColor={{ 'black': 'white' }}
                // shadow={'0px 0px 50px -20px #ff0055'}  borderTop={'2px'}
                position={'absolute'} bottom={'0'} alignItems={'center'} justifyContent={'center'}>
                <motion.div initial="hidden"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.3, delay }} style={{ width: '100%', maxWidth: '1100px', margin: 'auto' }}>
                    <Flex w={'100%'}>
                        <HStack flexDir={'row'} >
                            <Text textAlign={'right'} fontSize="10px" color={'gray.400'}>
                                v{version}</Text><Text marginStart={'-10px'} textAlign={'left'} fontSize={'sm'} color={'gray.400'}>Cebuliony.pl © {rok} | All rights reserved.</Text>
                        </HStack>
                        <Spacer />
                        <Box>
                            <HStack>
                                <Text textAlign={'right'} fontSize={'sm'} color={'gray.400'}><Link href='regulamin'>Regulamin </Link>| Autor: ImExoOdeex </Text>
                            </HStack>
                        </Box>
                    </Flex>
                </motion.div>
            </Flex >
        </Box>
    );
}