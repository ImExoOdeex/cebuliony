import NavFooter from '../components/NavFooter'
import QuizInside from '../components/QuizInside'
import CustomHead from '../components/CustomHead'

export default function quiz() {
    return (
        <>
            <CustomHead>
                <title>Cebuliony | Quiz</title>
            </CustomHead>
            <QuizInside />
            <NavFooter />
        </ >
    );
}