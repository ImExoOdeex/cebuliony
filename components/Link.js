import NextLink from 'next/link';
import {
    Link as ChakraLink,
} from '@chakra-ui/react';

const Link = ({ href, children, ...rest }) => {
    return (
        <NextLink scroll={false} href={href} passHref>
            <ChakraLink {...rest}>
                {children}
            </ChakraLink>
        </NextLink>
    );
};

export default Link;