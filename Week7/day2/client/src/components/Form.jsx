import React, { useState } from 'react'
import axios from "axios"

export const Form = (props) => {

    const [title, setTitle] = useState("")
    const [pages, setPages] = useState(0)
    const [author, setAuthor] = useState("")

    const { refresh } = props



    const submitHandler = (e) => {
        e.preventDefault()

        // ----- Create An Object with the Book Info
        const newBook = {
            title: title,
            pages: pages,
            author: author
        }

        axios.post("http://localhost:5000/api/book", newBook)
            .then(res => {
                console.log(res)
                refresh()
                setTitle("")
                setPages(0)
                setAuthor("")
            })
            .catch(err => {
                console.log(err)
            })


    }


    return (

        <div>
            <h3>ADD NEW Book</h3>
            <fieldset>
                Form ..
                <form onSubmit={submitHandler}>
                    <label>Book Title :</label><br />
                    <input onChange={e => { setTitle(e.target.value) }} value={title} /><br /><br />
                    <label>Number of Pages  :</label><br />
                    <input onChange={e => { setPages(e.target.value) }} value={pages} /><br /><br />
                    <label>Created By :</label><br />
                    <input onChange={e => { setAuthor(e.target.value) }} value={author} /><br /><br />
                    <input type="submit" />
                </form>
            </fieldset>
        </div>
    )
}
