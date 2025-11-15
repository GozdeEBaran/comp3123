import axios from 'axios';

const BASE_API_URL = 'https://example.com/api/v1/books';

const AxiosInstance = axios.create({
    baseURL: BASE_API_URL,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

const BookAPI = {
    getBooks: async () => {
        try {
            const response = await AxiosInstance.get('/books');
            return response.data.data;
        } catch (error) {
            console.error('Error fetching books:', error);
            throw error;
        }
    },

    getBookById: async (id) => {
        try {
            const response = await AxiosInstance.get(`/books/${id}`);
            console.log("Fetcjhed book data:", response.data);
            return response.data.data;
        } catch (error) {
            console.error(`Error fetching book with ID ${id}:`, error);
            throw error;
        }
    },

    createBook: async (bookData) => {
        try {
            const response = await AxiosInstance.post('/books', bookData);
            return response.data.data;
        } catch (error) {
            console.error('Error creating book:', error);
            throw error;
        }
    },
    updateBook: async (id, bookData) => {
        try {
            const response = await AxiosInstance.put(`/books/${id}`, bookData);
            return response.data.data;
        }
        catch (error) {
            console.error(`Error updating book with ID ${id}:`, error);
            throw error;
        }
    },
    deleteBook: async (id) => {
        try {
            const response = await AxiosInstance.delete(`/books/${id}`);
            return response.data.data;
        } catch (error) {
            console.error(`Error deleting book with ID ${id}:`, error);
            throw error;
        }
    }
}
export default BookAPI;
