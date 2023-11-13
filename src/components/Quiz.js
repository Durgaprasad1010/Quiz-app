import React, { useEffect, useState } from 'react'
import './Quiz.css'
import { questionsArray } from '../Data/QuizData';
import SingleChoice from './SingleChoice';
import MultiChoice from './MultiChoice'
import FreeChoice from './FreeChoice';
import Sorting from './Sorting';
import useSound from 'use-sound'
import correctSound from './correct.mp3'
import wrongSound from './wrong.mp3'

function Quiz() {


    let [questionCount, setQuestionCount] = useState(0);
    let [currQuestion, setCurrQuestion] = useState({});
    let [currAns, setCurrAns] = useState("");
    let [score, setScore] = useState(0);
    const [playCorrectSound] = useSound(correctSound)
    const [playWrongSound] = useSound(wrongSound)

    useEffect(() => {
        setCurrQuestion(questionsArray[questionCount]);

    }, [questionCount])

    function getAnswer(childData) {
        setCurrAns(childData);
    }

    function handleSingleChoice() {
        if (currAns === currQuestion.correctAns) {
            // play correct sound

            playCorrectSound()

            setScore(score + 1);
            console.log(score)
            // console.log(currAns)
            // console.log(currQuestion.correctAns)
        } else {
            //play wrong sound

            playWrongSound()
            console.log("error")
        }

        setQuestionCount(questionCount + 1);
        console.log(questionCount)
        // console.log(currQuestion.correctAns)


    }

    function handleMultiChoice() {

        let currAnsArr = currAns
        let correctAnsCounter = 0;

        console.log(currAns)
        console.log(currAnsArr)
        console.log(currQuestion.correctAns)


        if (currAnsArr.length === currQuestion.correctAns.length) {

            for (let i = 0; i < currAnsArr.length; i++) {
                if (currQuestion.correctAns.includes(currAnsArr[i])) {
                    correctAnsCounter++;
                    continue;
                } else {
                    // wrong answer

                    playWrongSound()
                    break;
                }
            }

            if (correctAnsCounter === currQuestion.correctAns.length) {

                playCorrectSound()
                setScore(score + 1)

            }

        } else {
            //wrong answer
            // console.log("here")

            playWrongSound()
        }

        setQuestionCount(questionCount + 1);
        console.log(questionCount)
        // console.log(currQuestion.correctAns)


    }

    function handleFreeChoice() {
        if (currAns === currQuestion.correctAns.toLowerCase()) {
            // play correct sound

            playCorrectSound()

            setScore(score + 1);
            console.log(score)
            // console.log(currAns)
            // console.log(currQuestion.correctAns)
        } else {
            //play wrong sound

            playWrongSound()
            console.log("error")
        }

        setQuestionCount(questionCount + 1);
        console.log(questionCount)
        // console.log(currQuestion.correctAns)

    }

    function handleSorting() {
        if (currAns.toString() === currQuestion.correctAns.toString()) {
            playCorrectSound()

            setScore(score + 1);
        } else {
            playWrongSound()
            console.log("error")
        }
        setQuestionCount(questionCount + 1);
        console.log(questionCount)
    }


    return (
        <div className='container'>
            <div className='sub-container'>
                {/* <button></button>
                <button></button> */}
                {/* <h2 id='question'>Question</h2> */}
                {questionCount <= questionsArray.length - 1 ? <div style={{ display: "flex", justifyContent: "space-between", padding: "2rem 1rem 2rem 0" }}>

                    {
                        currQuestion.qType == "singleChoice" ? <SingleChoice qNo={currQuestion.qNo} question={currQuestion.question} options={currQuestion.options} answer={getAnswer} ></SingleChoice> : currQuestion.qType == "multiChoice" ? <MultiChoice qNo={currQuestion.qNo} question={currQuestion.question} options={currQuestion.options} answer={getAnswer}></MultiChoice> : currQuestion.qType == "freeChoice" ? <FreeChoice qNo={currQuestion.qNo} question={currQuestion.question} answer={getAnswer}></FreeChoice> : currQuestion.qType == "sort" ? <Sorting qNo={currQuestion.qNo} question={currQuestion.question} options={currQuestion.options} answer={getAnswer}></Sorting> : null

                    }



                    <div style={{ display: "flex", alignItems: "end" }}>

                        <button style={{
                            border: "none",
                            backgroundColor: "blue",
                            borderRadius: "0.5rem",
                            width: "10rem",
                            height: "3rem",
                            color: "white"
                        }} onClick={() => {
                            if (currQuestion.qType == "singleChoice") {
                                handleSingleChoice();
                            } else if (currQuestion.qType == "multiChoice") {
                                handleMultiChoice();
                            } else if (currQuestion.qType == "freeChoice") {
                                handleFreeChoice();
                            } else if (currQuestion.qType == "sort") {
                                console.log("not here")
                                handleSorting();
                            }
                        }}>Check</button>
                    </div>
                </div>
                    :
                    <div>

                        <h3 style={{ textAlign: "center", fontSize: "2rem" }}>Your Score: {score}</h3>
                        <h2 style={{ textAlign: "center", fontSize: "3rem" }}>Quiz Completed!</h2>
                    </div>
                }


            </div>
        </div>
    )
}

export default Quiz