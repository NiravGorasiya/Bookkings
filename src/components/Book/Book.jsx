import React, { useState } from 'react'
import bookData from '../../bookdata/Bookdata'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Book = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})

    const singleBookDetails = () => {
        const book = bookData.find((book) => {
            return parseInt(book.id) === parseInt(id)
        })
        setBook(book)
    }

    useState(() => {
        singleBookDetails()
    }, [id])

    return (
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8" key={book?.id}>
                        <div className="card text-center">
                            <img src={book?.img} className="card-img-top mx-auto d-block mt-5" alt="Book Cover" style={{ width: "600px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{book?.title}</h5>
                                <p className="card-text"><b>Author</b>: {book?.author}</p>
                                <div dangerouslySetInnerHTML={{ __html: book?.metadescription }} />
                                <Link to="https://amzn.to/3qZPnDy" className="btn btn-primary">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" key={book?.id}>
                        <div className="card">
                            <img src={book?.img} className="card-img-top mx-auto mt-5 mb-5" alt="Book Cover" style={{ width: "300px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book