import {
    Box,
    Flex,
    Button,
    useColorModeValue,
    useColorMode,
    Image,
    HStack,
    IconButton,
    MenuButton,
    Menu,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';
import Link from './Link'


export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue('#f7f7f7', '#1f1f1f');
    const color = useColorModeValue('1px 1px 1px #1f1f1f', '1px 1px 1px #858585')

    return (
        <Box bg={useColorModeValue('secondarylight', 'secondarydark')}
            px={4} align="center" position={'sticky'} top={'-0.1'} zIndex={999999}>
            <Flex h={16} as='header'
                alignItems={'center'}
                justifyContent={'space-between'}
                maxW={'1100px'} >
                <Flex flexDir={'row'}
                    verticalAlign={'middle'} >
                    <HStack>
                        <Link href='/'>
                            <Image alt='www.cebuliony.pl' w={50} h={50} src='https://ik.imagekit.io/o532f5vcp38/cebulka144_89RRv6pjX.png?updatedAt=1628272464533' />
                        </Link>
                        <Link letterSpacing={'3px'} fontWeight={'bold'} color='primary' as="a"
                            alignItems={'center'} fontSize={{base: '13px', md: '15px'}} textShadow={color}
                            justifyContent={'center'}
                            verticalAlign={'middle'}
                            href='/'
                            _hover={
                                'none'
                            }
                        >
                            Cebuliony.pl </Link>
                    </HStack>
                </Flex>
                <Flex alignItems={'center'} >
                    <HStack
                        spacing={3}>
                        <HStack spacing={5} display={['none', 'none', 'flex', 'flex']}>
                            <Link href='/' _hover={{
                                opacity: '0.5',
                            }}
                                transition={'0.05s'}>Strona główna</Link >
                            <Link href='/quiz' _hover={{
                                opacity: '0.5',
                            }}
                                transition={'0.05s'}>Quiz</Link >
                            <Link href='/gry' _hover={{
                                opacity: '0.5',
                            }}
                                transition={'0.05s'}>Gry</Link >
                        </HStack>
                        <script>splitbee.track(&ldquo;theme&ldquo;)</script>
                        <Button data-splitbee-event="theme" onClick={toggleColorMode} aria-label="Justify" > {colorMode === 'dark' ? < SunIcon /> : < MoonIcon />}
                        </Button>

                        <Menu zIndex={'99999'}>
                            {({ isOpen }) => (
                                <>
                                    <MenuButton display={['flex', 'flex', 'none', 'none']}
                                        as={IconButton}
                                        aria-label='Options'>
                                        {isOpen ? <SmallCloseIcon fontSize={'20px'} /> : <HamburgerIcon />}
                                    </MenuButton>
                                    <MenuList zIndex={'99999'} bg={bg}>
                                        <Link _hover={'none'} href='/'>
                                            <MenuItem>Strona główna</MenuItem >
                                        </Link>
                                        <Link _hover={'none'} href='/quiz'>
                                            <MenuItem>Quiz</MenuItem>
                                        </Link>
                                        <Link _hover={'none'} href='/gry'>
                                            <MenuItem>Gry</MenuItem>
                                        </Link>
                                    </MenuList>
                                </>
                            )}
                        </Menu>

                    </HStack>
                </Flex>
            </Flex>
        </Box >
    );
}