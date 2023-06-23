import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {

    const [oneMusic, setMusic] = useState()
    const { mid } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/music/${mid}`)
            .then((res) => {
                console.log(res.data.OneMusic)
                setMusic(res.data.OneMusic)
            })
            .catch((err) => {
                console.log(err)
            })



    }, [])




    return (
        <>
            {
                (oneMusic) ?
                    <div>
                        <p>{oneMusic.singer}</p>
                        <p>{oneMusic.music}</p>
                        <p>{oneMusic.views}</p>
                    </div> : <p>Loading...</p>
            }




















        </>
    )
}



