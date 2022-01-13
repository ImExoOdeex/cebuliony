import { Heading } from "@chakra-ui/layout";
import { motion } from "framer-motion";

const He = ({ children, delay = 0, ...props }) => {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    return (
        <motion.h1 initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ duration: 0.6, type: 'easeInOut', delay }}>
            <Heading mt={'10px'} color={'primary'} as="h1" fontSize={'3xl'} {...props}>{children}</Heading>
        </motion.h1>
    );
}


export default He