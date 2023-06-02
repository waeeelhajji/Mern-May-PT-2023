import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
const Hero = () => {

    const navigate = useNavigate()

    const { urlVar } = useParams()

    const [hero, setHero] = useState(null)

    useEffect(() => {
        axios.get(`https://akabab.github.io/superhero-api/api/id/${urlVar}.json`)
            .then(res => {
                console.log(res)
                setHero(res.data)
            })
            .catch((err) => {
                console.log(err)
                navigate("/error")

            })

    }, [urlVar])// we need to put our params because 
    // the useEffect if there is new number it will triggered again

    return (
        <>
            <h1>{urlVar}</h1>

            {/* {JSON.stringify(hero)} */}
            {
                hero ? (

                    <div>
                        <h2>{hero.name}</h2>
                        <img src={hero.images.md} height="200" />
                    </div>
                ) : <p>Loading ..</p>
            }


        </>
    )
}

export default Hero