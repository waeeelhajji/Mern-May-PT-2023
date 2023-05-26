import React, { useState } from 'react'

const Form = (props) => {
    // CREATE STATE FOR THe INPUT
    const [input, setInput] = useState("");
    const [animals, setAnimals] = useState(["🦓", "🦁", "🦅", "🦛"])


    const submitHandler = (e) => {
        e.preventDefault();



        const animalsCopy = [...animals]
        animalsCopy.push(input)
        setAnimals(animalsCopy)
        //OR setAnimals([...animals, input])
    }

    return (
        <fieldset>
            {JSON.stringify(animals)}
            <p>
                state var "input": {JSON.stringify(input)}
            </p>
            <form onSubmit={submitHandler}>
                <input onChange={(e) => setInput(e.target.value)} />
                <button>submit</button>

            </form>
        </fieldset>
    )
}

export default Form