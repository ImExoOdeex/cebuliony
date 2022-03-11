import { Flex } from "@chakra-ui/layout";
import Link from "./Link";
import { Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modgura = () => {
  const [isVisible, setVisible] = useState(true);

  const size = "25px";
  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.2}}>
          <Flex
            id="box"
            alignItems={"center"}
            w={"100%"}
            bgGradient="linear(to-r, teal.600 20%, blue.600 100%)"
            h={"35px"}
            flexDir={"row"}
            zIndex={"999999999999"}
          >
            <Link href={"/squirting_syringe"} m={"auto"} _hover={"none"}>
              <Flex
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
                  Zobacz nowy mod do Minecraft: Java edition!
                </Text>
                <Image
                  alt="heal syringe"
                  style={{ imageRendering: "pixelated" }}
                  width={size}
                  height={size}
                  src="/healsyringe.png"
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
  );
};

export default Modgura;
