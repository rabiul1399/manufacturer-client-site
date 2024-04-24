import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`  http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                toast.success('Successfully make admin')


            })
    }

    const removeAdmin = () => {
        fetch(`  http://localhost:5000/user/${role}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch();
                toast.success('Successfully Delete admin')

            })
    }
    return (
        <tr >
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn text-success btn-xs">Make Admin</button>} </td>
            <td>{role == 'admin' && <button className="btn text-red-500 btn-xs" onClick={removeAdmin} >Remove Admin</button>}</td>
        </tr>
    );
};

export default UserRow;