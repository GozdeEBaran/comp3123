import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import UserList from './components/UsersList';
import BooksList from './components/BooksList';
import AddBook from './components/AddBook'; 

function App() {
  return (
    <div>
      <h1>Axios Example</h1>
      {/* <UserList /> */}
      {/* <BooksList /> */}
      {/* <AddBook /> */}
      <BrowserRouter>
      <NavLink to="/books">Books List</NavLink>
      <NavLink to="/add-book">Add Book</NavLink>
        <Routes>
          <Route path="/books" element={<BooksList />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
