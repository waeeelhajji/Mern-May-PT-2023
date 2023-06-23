import React, { useState } from 'react'
import Axios from "axios"

const Create = () => {

    const [singer, setSinger] = useState("")
    const [music, setMusic] = useState("")
    const [views, setViews] = useState(0)
    const [errors, setErrors] = useState([])

    const SubmitForm = (e) => {
        e.preventDefault()
        const newMusic = {
            singer,
            music,
            views
        }
        Axios.post("http://localhost:5000/api/music", newMusic)
            .then(res => {
                console.log("Your music is submitted successfully 😻😻😻😻😻")
            })
            .catch(err => {
                // console.log(err.response.data.err.errors.singer.message)
                // console.log(err.response.data.err.errors.singer.message)
                const errorRes = err.response.data.err.errors
                const errArr = []
                console.log(errorRes)
                for (const key of Object.keys(errorRes)) {
                    console.log(errorRes[key].message)
                    errArr.push(errorRes[key].message)
                }
                setErrors(errArr)
            })
    }

    return (
        <div>
            {
                errors.map((err, key) => {
                    return (
                        <p key={key} style={{ color: "red" }}>{err}</p>
                    )
                })
            }

            <form onSubmit={SubmitForm}>
                Name of the Singer :
                <input onChange={(e) => {
                    setSinger(e.target.value)
                }} value={singer} /> <br />
                Name of the Music :
                <input onChange={(e) => { setMusic(e.target.value) }} value={music} /> <br />
                How many views :
                <input onChange={(e) => { setViews(e.target.value) }} value={views} type="number" /> <br />

                <input type="submit" value="Create" />

            </form></div>
    )
}

export default Create