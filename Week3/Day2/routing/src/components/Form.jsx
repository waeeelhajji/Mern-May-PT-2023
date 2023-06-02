import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

    const navigate = useNavigate()
    const [number, setNumber] = useState()


    const submitHeroId = (e) => {
        e.preventDefault()
        navigate("/hero/" + number)
    }
    return (
        <div>
            <h1>Hero ID</h1>
            <form onSubmit={submitHeroId}>
                <input type="number" onChange={e => { setNumber(e.target.value) }} />
            </form>

        </div>
    )

}

export default Form