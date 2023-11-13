import React, { useState } from 'react'
import "./FreeChoice.css"



function FreeChoice({ qNo, question, answer }) {

    let [freeChoiceAns, setFreeChoiceAns] = useState("");

    // function getUserAns() {
    // }
    answer(freeChoiceAns.trim().toLowerCase());
    return (
        <div>
            <h3 className='questions' style={{ padding: "0.5rem 0.5rem 0.5rem 0" }}>{qNo + ") " + question}</h3>
            <p>Answer</p>
            <input type="text" id="free-choice-ans" placeholder='Free Choice' value={freeChoiceAns} onChange={(e) => {
                setFreeChoiceAns(e.target.value)
            }} />
        </div>
    )
}

export default FreeChoice