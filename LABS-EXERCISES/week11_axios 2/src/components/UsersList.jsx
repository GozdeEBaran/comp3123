import axios from 'axios';
import { useEffect, useState } from 'react';

function UserList(){
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log('Response from API:', response);
            setUsers(response.data);
            console.log(response.data);
        })

        .catch(error => {
            console.error('Error fetching users:', error);
        });
    }, []);

    return (
        <div>
        <h2>User List Component</h2>
        <table border="1" cellPadding="5">
            <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {users.length === 0 && <p>Loading users...  </p>}
        </div>
    );
}
export default UserList;