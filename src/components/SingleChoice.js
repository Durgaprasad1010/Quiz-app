import { React, useState } from 'react'
import "./SingleChoice.css"

function SingleChoice({ question, qNo, options, answer }) {

    // let [optClicked, setOptClicked] = useState("");

    function getUserAns() {
        let answers = document.querySelectorAll('.answer');
        // console.log(answers)
        answers.forEach((currAnsElem) => {
            if (currAnsElem.checked) {
                answer(currAnsElem.value);
                // console.log(typeof (currAnsElem.value))
                // console.log(currAnsElem.value)
                // console.log(answers[1].value)
            }
        })



    }

    return (
        <div>
            <h3 className='questions' style={{ padding: "0.5rem 0.5rem 0.5rem 0" }}>{qNo + ") " + question}</h3>
            <ul style={{ listStyle: "none" }}>
                <li>
                    <input type="radio" name="answer" id="ans1" className="answer" value={options.a} onChange={getUserAns} />
                    <label htmlFor="ans1" className="q-option" id="option1">{options.a}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans2" className="answer" value={options.b} onChange={getUserAns} />
                    <label htmlFor="ans2" className="q-option" id="option2">{options.b}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans3" className="answer" value={options.c} onChange={getUserAns} />
                    <label htmlFor="ans3" className="q-option" id="option3">{options.c}</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="ans4" className="answer" value={options.d} onChange={getUserAns} />
                    <label htmlFor="ans4" className="q-option" id="option4">{options.d}</label>
                </li>
            </ul>
        </div>
    )
}

export default SingleChoice