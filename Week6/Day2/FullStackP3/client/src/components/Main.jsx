import React, { useEffect, useState } from 'react'
import Axios from "axios"
import Create from './Create'

import { Link } from "react-router-dom"

const Main = () => {
    const [allMusic, setAllMusic] = useState([])



    useEffect(() => {
        Axios.get("http://localhost:5000/api/music")
            .then(res => {
                // console.log(res.data.allMusic)
                setAllMusic(res.data)
                console.log('====================================');
                console.log(res.data);
                console.log('====================================');
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <Create />
            <hr />
            {
                allMusic.map((mu, i) => {
                    return (
                        <div key={mu._id}>
                            <h2>{mu.singer}</h2>
                            <h2>{mu.music}</h2>
                            <Link to={("/music/" + mu._id)}>Details</Link>
                            <hr />
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Main