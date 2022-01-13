import { Flex } from "@chakra-ui/layout"
import Link from "./Link"
import { Text } from "@chakra-ui/layout"
import { Image } from "@chakra-ui/react"



const Modgura = () => {
    const size = '25px'
    return (
        <Link _hover={'none'} href={'/squirting_syringe'}>
            <Flex alignItems={'center'} w={'100%'} bgGradient='linear(to-r, teal.600 20%, blue.600 100%)' h={'35px'} flexDir={'row'} zIndex={'999999999999'}>
                <Flex alignItems={'center'} justifyContent={'center'} margin={'auto'}>
                    <Text color="white" alignItems={'center'} marginRight={'10px'} fontSize={'13px'}>Zobacz nowy mod do Minecraft: Java edition!</Text>
                    <Image alt="heal syringe" style={{ imageRendering: "pixelated" }} width={size} height={size} src='/healsyringe.png'></Image>
                </Flex>
            </Flex>
        </Link>
    )
}

export default Modgura