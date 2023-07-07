import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const Update = () => {
    const [title, setTitle] = useState("")
    const [pages, setPages] = useState(0)
    const [author, setAuthor] = useState("")

    const navigate = useNavigate()


    const { book_id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/book/${book_id}`)
            .then(res => {
                console.log(res.data.OneBook)
                const { title, pages, author } = res.data.OneBook

                setTitle(title)
                setPages(pages)
                setAuthor(author)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const UpdateHandler = (e) => {
        e.preventDefault()

        // ----- Create An Object with the Book Info

        const updateBook = {
            title,
            pages,
            author
        }

        axios.put(`http://localhost:5000/api/book/${book_id}`, updateBook)
            .then(res => {
                console.log(res)
                navigate("/")

            })
            .catch(err => {
                console.log(err)
            })

    }


    return (

        <div>
            <h3>Update NEW Book</h3>
            <fieldset>
                Form ..
                <form onSubmit={UpdateHandler}>
                    <label>Book Title :</label><br />
                    <input onChange={e => { setTitle(e.target.value) }} value={title} /><br /><br />
                    <label>Number of Pages  :</label><br />
                    <input onChange={e => { setPages(e.target.value) }} value={pages} /><br /><br />
                    <label>Created By :</label><br />
                    <input onChange={e => { setAuthor(e.target.value) }} value={author} /><br /><br />
                    <input type="submit" value="Update" />
                </form>
            </fieldset>
        </div>
    )
}

export default Update