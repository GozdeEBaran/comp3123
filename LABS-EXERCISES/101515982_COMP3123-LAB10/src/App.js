import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserSignupForm from './components/UserSignupForm';

function App() {
  return (
    <div>
      <h1>Hello React Form Events</h1>
      <UserForm />
      <hr />
      <UserSignupForm />
    </div>
  )
};



export default App;