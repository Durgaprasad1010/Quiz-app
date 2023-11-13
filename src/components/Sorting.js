import React, { useState } from 'react'
import "./Sorting.css"

function Sorting({ qNo, question, options, answer }) {

    const [userAnsArr, setUserAnsArr] = useState([]);
    let sortOrder = document.getElementById("sort-order")

    function handleClick(event) {
        let arr = userAnsArr;
        // console.log(event.target.value)
        if (userAnsArr.includes(event.target.value)) {
            let ind = arr.indexOf(event.target.value)
            arr.splice(ind, 1)
            setUserAnsArr(arr)
        } else {
            arr.push(event.target.value)
            setUserAnsArr(arr)
        }

        sortOrder.innerText = userAnsArr.toString();

        console.log(arr)

    }


    answer(userAnsArr)

    return (
        <div>
            <h3 className='questions' style={{ padding: "0.5rem 0.5rem 0.5rem 0" }}>{qNo + ") " + question}</h3>
            <p id="sort-order"></p>
            <div style={{ display: "flex", flexDirection: "column" }}>

                <button className='sort-optn' value={options.a} onClick={handleClick}>{options.a}</button>
                <button className='sort-optn' value={options.b} onClick={handleClick}>{options.b}</button>
                <button className='sort-optn' value={options.c} onClick={handleClick}>{options.c}</button>
                <button className='sort-optn' value={options.d} onClick={handleClick}>{options.d}</button>
            </div>
        </div>
    )
}

export default Sorting