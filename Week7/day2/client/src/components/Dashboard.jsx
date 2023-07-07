import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Dashboard = (props) => {


    const [AllBooks, setAllBooks] = useState([])

    const { refreshState, refresh } = props

    useEffect(() => {
        axios.get("http://localhost:5000/api/book/")
            .then(res => {
                console.log(res.data)
                setAllBooks(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [refreshState])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:5000/api/book/${id}`)
            .then(res => { refresh() })
            .catch(err => {
                console.log(err)
            })
    }




    return (
        <div>
            <h3>Dashboard</h3>
            <fieldset>
                Data ..
                {
                    AllBooks.map((book) => {
                        return <div key={book._id}>
                            Book Title : <h5> {book.title}</h5>
                            Book Num Of Pages  : <h5> {book.pages}</h5>
                            Book Author : <h5> {book.author}</h5>
                            <Link to={("/oneBook/" + book._id)} type="submit" value="More Details">More Details</Link>
                            <button onClick={(e) => { deleteHandler(book._id) }}>Delete</button>
                            <hr />
                        </div>
                    })
                }
            </fieldset>
        </div>
    )
}
