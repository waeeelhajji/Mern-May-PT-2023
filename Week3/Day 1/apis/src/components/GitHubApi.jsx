import Axios from 'axios'
import React, { useEffect, useState } from 'react'

const GitHubApi = () => {
    // anything dynamic needs STATE
    const [Github, setGithub] = useState([])
    //!-------------------------UseEffect

    useEffect(() => {
        Axios.get("https://api.github.com/users/waeeelhajji")
            .then(res => {
                // Axios Wraps everything in .data
                console.log(res.data)
                setGithub(res.data)
            }).catch(err => {
                console.log(err)
            })

    }, [])
    return (
        <>
            <h1>Github</h1>
            <h2>{Github.name}</h2>
            <h2>{Github.location}</h2>
            <h2>{Github.company}</h2>
        </>
    )
}

export default GitHubApi