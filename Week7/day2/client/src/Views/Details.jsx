import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

export const Details = () => {

    const [oneBook, setOneBook] = useState({})

    const { book_id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:5000/api/book/${book_id}`)
            .then(res => {
                console.log(res.data)
                setOneBook(res.data.OneBook)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            {(oneBook) ?
                <div>
                    Book Title : {oneBook.title}

                    book Author : {oneBook.author}
                    <Link to={("/update/" + oneBook._id)}>Update</Link>
                </div> : null}
        </div>
    )
}
