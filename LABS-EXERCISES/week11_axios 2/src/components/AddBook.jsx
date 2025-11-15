import React, { useState } from 'react';
import BookAPI from '../api/BookAPI';

const INITIAL_BOOK_DATA = {
    title: '',
    author: '',
    price: 0,
    rating: 0
};

export default function AddBook() {
    const [bookData, setBookData] = useState(INITIAL_BOOK_DATA);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await BookAPI.addBook(bookData);
            alert('Book added successfully!');
            setBookData(INITIAL_BOOK_DATA);
        } catch (error) {
            console.error('Failed to add book:', error);
            alert('Failed to add book. Please try again.');
        }
    };

    return (
        <div>
            <h2>Add New Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={bookData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Author: </label>
                    <input
                        type="text"
                        name="author"
                        value={bookData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Price: </label>
                    <input
                        type="number"
                        name="price"
                        value={bookData.price}
                        onChange={handleChange}
                        min="0"
                        step="0.01"
                        required
                    />
                </div>
                <div>
                    <label>Rating: </label>
                    <input
                        type="number"
                        name="rating"
                        value={bookData.rating}
                        onChange={handleChange}
                        min="0"
                        max="5"
                        step="0.1"
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
}