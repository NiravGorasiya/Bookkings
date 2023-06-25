import React from 'react'
import bookData from '../bookdata/Bookdata'
import { Link } from 'react-router-dom'

const SelfHelp = () => {

    return (
        <div style={{ marginBottom: "20px" }}>
            <h1>Self-Help Books</h1>
            <div className="row">
                {bookData?.map((book) => (
                    <div className="col-md-4" key={book?.id}>
                        <div className="card">
                            <img src={book.img} className="card-img-top" alt="Card" style={{ height: "400px" }} />
                            <div className="card-body">
                                <h5 className="card-title">{book?.title}</h5>
                                <p className="card-text">{book?.description}</p>
                                <Link to={`/book/${book?.id}`} className="btn btn-primary">Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelfHelp