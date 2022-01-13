import { Flex, Stack } from "@chakra-ui/layout";
import { useColorModeValue, FormControl, FormLabel, Input, RadioGroup, Radio, Select } from "@chakra-ui/react";
import Ramki from './ramki'
import { motion } from "framer-motion";
import { CheckIcon } from "@chakra-ui/icons";

const QuizInside = ({ delay = 0 }) => {
    function check() {
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var question5 = document.quiz.question5.value;
        var question6 = document.quiz.question6.value;
        var correct = 0;

        //poprawne odpowiedzi
        if (question1 == "Cebuliony") {
            correct++;
        } else if (question1 == "cebuliony") {
            correct++;
        } else if (question1 == "Cebulion") {
            correct++;
        } else if (question1 == "cebulion") {
            correct++;
        }
        if (question2 == "Nosacze") {
            correct++;
        }
        if (question3 == "1") {
            correct++;
        }
        if (question4 == "Polskiej") {
            correct++;
        }
        if (question5 == "najmiększa na całym świecie") {
            correct++;
        }
        if (question6 == "Tak") {
            correct++;
        }
        document.getElementById("after_submit").style.visibility = "visible";
        //punkty i wyniki
        if (correct == 6) {
            document.getElementById("number_correct").innerHTML = "Brawo! Wygrałeś max Cebulionów :D (" + correct + ")";
        } else if (correct == 5) {
            document.getElementById("number_correct").innerHTML = "Brakuje ci 1 Cebuliona :) ";
        } else if (correct == 4) {
            document.getElementById("number_correct").innerHTML = "Masz ¾ możliwego wyniku";
        } else if (correct == 3) {
            document.getElementById("number_correct").innerHTML = "Jeszcze połowa! Masz " + correct + " Cebuliony";
        } else if (correct == 2) {
            document.getElementById("number_correct").innerHTML = "Dwa tylko? :/";
        } else if (correct == 1) {
            document.getElementById("number_correct").innerHTML = "Ile? " + correct + "? Amator";
        } else if (correct == 0) {
            document.getElementById("number_correct").innerHTML = "Ehmmmm ;-; " + correct + "?";
        } else {
            document.getElementById("number_correct").innerHTML = "cebule: " + correct;
        }
    }
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 20 }
    }
    const bg = useColorModeValue('#ebebeb', '#1f1f1f');
    return (
        <Ramki>
            <motion.div initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.2, delay }}>
                <Flex
                    maxW={'600px'} margin={'auto'} mt={'20px'} mb={'20px'} bg={'transparent'} flexDir={'column'}>
                    <form style={{ width: '100%', padding: '10px' }} id="quiz" name="quiz">
                        {/* /* 1. Jak inaczej nazywają się złotówki */}
                        <FormControl isRequired mb={'20px'} >
                            <FormLabel htmlFor='nazwa'>1. Jak inaczej nazywają się złotówki</FormLabel>
                            <Input autoComplete="off" autoSave="on" bg={bg} _focus={'none'} name="question1" id='nazwa' placeholder='No jak?' />
                        </FormControl>

                        {/* 2. Jak nazywają się polskie zwierzęta */}
                        <FormControl isRequired as='fieldset' mb={'20px'}>
                            <FormLabel as='legend'>2. Jak nazywają się polskie zwierzęta</FormLabel>
                            <RadioGroup>
                                <Stack direction={['column', 'row']} spacing={['8px', '32px']}>
                                    <Radio name="question2" value='Nosacze'>Nosacze</Radio>
                                    <Radio name="question2" value='Barany'>Barany</Radio>
                                    <Radio name="question2" value='Kujony'>Kujony</Radio>
                                    <Radio name="question2" value='Kozły'>Kozły</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>


                        {/* 3. 1 Cebulion to ile pln? */}
                        <FormControl isRequired as='fieldset' mb={'20px'}>
                            <FormLabel as='legend'>3. 1 Cebulion to ile pln?</FormLabel>
                            <RadioGroup>
                                <Stack direction={['column', 'row']} spacing={['8px', '32px']}>
                                    <Radio name="question3" value='1'>1</Radio>
                                    <Radio name="question3" value='10'>10</Radio>
                                    <Radio name="question3" value='100'>100</Radio>
                                    <Radio name="question3" value='1000'>1000</Radio>
                                    <Radio name="question3" value='10000'>10000</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>


                        {/* 4. W jakiej ziemi najlepiej czują się Cebuliony? */}
                        <FormControl isRequired as='fieldset' mb={'20px'}>
                            <FormLabel as='legend'>4. W jakiej ziemi najlepiej czują się Cebuliony?</FormLabel>
                            <RadioGroup>
                                <Stack direction={['column', 'row']} spacing={['8px', '32px']}>
                                    <Radio name="question4" value='Dobrej'>Dobrej</Radio>
                                    <Radio name="question4" value='Amerykańskiej'>Amerykańskiej</Radio>
                                    <Radio name="question4" value='Polskiej'>Polskiej</Radio>
                                    <Radio name="question4" value='Bożej'>Bożej</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>

                        {/* 5. Dlaczgo w tej ziemi Cebulionom spi się najelepiej?  */}
                        <FormControl mb={'20px'} isRequired>
                            <FormLabel>5. Dlaczgo w tej ziemi Cebulionom śpi się najelepiej?</FormLabel>
                            <Select bg={bg} name="question5" placeholder='Bo jest '>
                                <option name="question5" value='najmiększa na całym świecie'>najmiększa na całym świecie</option>
                                <option name="question5" value='najbardziej nawodniona z wszystkich ziem'>najbardziej nawodniona z wszystkich ziem</option>
                            </Select>
                        </FormControl>



                        {/* 6. Czy krązki Cebulionowe są dobre?*/}
                        <FormControl isRequired as='fieldset' mb={'20px'}>
                            <FormLabel as='legend'>6. Czy krązki Cebulionowe są dobre?</FormLabel>
                            <RadioGroup>
                                <Stack direction={['column', 'row']} spacing={['8px', '32px']}>
                                    <Radio name="question6" value='Tak'>Tak</Radio>
                                    <Radio name="question6" value='Nie'>Nie</Radio>
                                    <Radio name="question6" value='Nie wiem'>Nie wiem</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>

                    </form>

                    <Input bg={bg} w={'100%'} value="Sprawdź" onClick={check} type="button" />


                    <Flex background={'green.500'} padding={3} w={'300px'}
                        margin={'auto'} rounded={'md'} opacity={'1'}
                        style={{ visibility: "hidden" }} id="after_submit"
                        textAlign={'center'} justifyContent={'center'}
                        alignItems={'center'} marginTop={'20px'}><CheckIcon marginRight={'10px'} />
                        <p id="number_correct"></p>
                    </Flex>

                </Flex>
            </motion.div>
        </Ramki>
    );
}

export default QuizInside