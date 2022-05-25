import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <h2 className='text-center mt-5 text-2xl'>This is my profile</h2>
            <h2 className='ml-9'>User Name: <span className='text-green-500'>{user.displayName}</span></h2>
            <h2 className='ml-9'>User Email: <span className='text-green-500'>{user.email}</span></h2>
        </div>
    );
};

export default MyProfile;