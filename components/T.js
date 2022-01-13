import { Text } from "@chakra-ui/layout";


const T = ({children}) => {
    
    return(
        <Text py={{ base: '1', md: '4' }} px={{ base: '0', md: '4' }}>{children}</Text>
    );
}

export default T