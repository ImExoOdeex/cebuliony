import { Badge, Flex } from "@chakra-ui/layout";
import Link from "./Link";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Modgura = () => {
  const [isVisible, setVisible] = useState(true);

  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/utilities") {
      setVisible(false);
    }
  }, [router.pathname]);

  const size = "25px";
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isVisible && (
          <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <Flex
              alignItems={"center"}
              w={"100%"}
              bgGradient="linear(to-r, purple.500 20%, blue.600 100%)"
              minH={'35px'}
              h={['auto', 'auto', '35px']}
              flexDir={"row"}
              zIndex={"999999999999"}
            >
              <Link href={"/utilities"} m={"auto"} _hover={"none"}>
                <Flex
                  p={["5px", "5px", "auto", "auto"]}
                  alignItems={"center"}
                  justifyContent={"center"}
                  margin={"auto"}
                >
                  <Text
                    color="white"
                    alignItems={"center"}
                    marginRight={"10px"}
                    fontSize={"13px"}
                  >
                    Zobacz nowy mod do Minecraft! <Badge variant={'subtle'} colorScheme='blue' >Supplementary Accessories</Badge>
                  </Text>
                  <Image
                    alt="heal syringe"
                    style={{ imageRendering: "pixelated" }}
                    width={size}
                    height={size}
                    src="utilitieslogo.png"
                    rounded={'sm'}
                  ></Image>
                </Flex>
              </Link>
              <Flex mr={"10px"} cursor={"pointer"}>
                <SmallCloseIcon
                  onClick={() => setVisible(false)}
                  color={"#fff"}
                />
              </Flex>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Modgura;
