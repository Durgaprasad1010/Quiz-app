import React, { useState } from 'react'

function MultiChoice({ qNo, question, options, answer }) {

    let [userAnswers, setUserAnswers] = useState([]);
    function getUserAns() {
        let answers = document.querySelectorAll('.multi-answer');
        console.log(answers)
        answers.forEach((currAnsElem) => {
            if (currAnsElem.checked) {
                setUserAnswers([...userAnswers, currAnsElem.value])

                console.log(currAnsElem.value)

            }
        })


    }
    answer(userAnswers);


    return (
        <div>
            <h3 className='questions' style={{ padding: "0.5rem 0.5rem 0.5rem 0" }}>{qNo + ") " + question}</h3>
            <ul style={{ listStyle: "none" }}>
                <li>
                    <input type="checkbox" name="multi-answer" id="multi-ans1" className="multi-answer" value={options.a} onChange={getUserAns} />
                    <label htmlFor="multi-ans1" className="q-option" id="multi-option1">{options.a}</label>
                </li>
                <li>
                    <input type="checkbox" name="multi-answer" id="multi-ans2" className="multi-answer" value={options.b} onChange={getUserAns} />
                    <label htmlFor="multi-ans2" className="q-option" id="multi-option2">{options.b}</label>
                </li>
                <li>
                    <input type="checkbox" name="multi-answer" id="multi-ans3" className="multi-answer" value={options.c} onChange={getUserAns} />
                    <label htmlFor="multi-ans3" className="q-option" id="multi-option3">{options.c}</label>
                </li>
                <li>
                    <input type="checkbox" name="multi-answer" id="multi-ans4" className="multi-answer" value={options.d} onChange={getUserAns} />
                    <label htmlFor="multi-ans4" className="q-option" id="multi-option4">{options.d}</label>
                </li>
            </ul>
        </div>
    )
}

export default MultiChoice