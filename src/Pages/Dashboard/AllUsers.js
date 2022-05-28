import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('  https://warm-sea-73005.herokuapp.com/user').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3>This is all Users: {users.length}</h3>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow user={user} index={index} key={user._id} refetch={refetch}></UserRow>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;