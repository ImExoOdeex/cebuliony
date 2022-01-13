import {
    Box,
    useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Normal = ({ children, delay = 0, ...props }) => {
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
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
            transition={{ duration: 0.6, delay }}>
            <Box
                boxShadow={'md'} maxW={'600px'} h="auto" rounded={"md"} bg={bg}
                margin={'auto'} mt="15px" mb={'30px'} {...props}>
                {children}
            </Box>
        </motion.div>
    );
}

export default Normal