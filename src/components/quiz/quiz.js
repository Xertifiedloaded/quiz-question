import { useContext } from 'react'
import classes from './quiz.module.css'
import { questions } from '../../constant';
import { userContext } from '../../mainLayout/mainLayout';
const Quiz = () => {
    const { currentQuestion, setCurrentQuestion, showScore, score, setScore, setShowScore } = useContext(userContext)
    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className={classes.main}>
         
            <div className={classes.App}>
                {showScore ? (
                    <div className={classes.scoreSection}>
                        You scored <span>{score} </span> out of {questions.length}
                    </div>
                ) : (
                        <>
                        <div className={classes.questionSection}>
                            <div className={classes.questionCount}>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className={classes.questionText}>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className={classes.answerSection}>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
     </div>
    )
}

export default Quiz