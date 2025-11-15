import React, { useState, useEffect } from 'react';
import BookAPI from '../api/BookAPI';
import {useNavigate} from 'react-router-dom';

export default function BooksList() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    // ✅ Move fetchBooks here so it's accessible everywhere
    const fetchBooks = async () => {
        try {
            const data = await BookAPI.getBooks();
            setBooks(data);
        } catch (error) {
            console.error('Failed to fetch books:', error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const updateBook = async (bookData) => {
        try {
            bookData.title ="Updated Title For Test "; // Example update
            await BookAPI.updateBook(bookData._id, bookData);
            fetchBooks(); // ✅ Now this works!
        } catch (error) {
            console.error('Failed to update book:', error);
        }
    };

    const selectBook = (bookData) => {
    alert(`Selected Book: ${bookData._id}`);
    navigate(`/book/${bookData._id}`);
    console.log('Selected book:', bookData._id);
    };

    const deleteBook = async (_id) => {
        try {
            await BookAPI.deleteBook(_id);
            fetchBooks(); // ✅ Now this works!
        } catch (error) {
            console.error('Failed to delete book:', error);
        }
    };
    
    return (
        <div>
            <h2>Books List</h2>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td><button onClick={e => selectBook(book._id)}>Select</button></td>
                            <td>{book._id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>{book.rating}</td>
                            <td><button onClick={e => updateBook(book)}>Update</button></td>
                            <td><button onClick={e => deleteBook(book._id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}