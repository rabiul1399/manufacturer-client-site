import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    const [update, setUpdate] = useState({});
console.log(update)

const {education,location,number,linkdin,github,} = update;

    const profileSubmit = event => {
        event.preventDefault();
        const education = event.target.education.value
        const location = event.target.location.value
        const number = event.target.phone.value
        const linkdin = event.target.linkdin.value
        const github = event.target.github.value

        const updateProfile = {
            education,
            location,
            number,
            linkdin,
            github,

        }
        setUpdate(updateProfile)

    }

    return (
        <div className='h-full bg-base-200 grid grid-cols-2'>
            <div className='ml-16 mt-8 '>
                {user.photoURL ?
                    <div className="avatar online pl-8">
                        <div className="w-32 rounded-full">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div>
                    :
                    <div className="avatar online placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-32">
                            <span className="text-xl">{user.displayName.slice(0, 4)}</span>
                        </div>
                    </div>
                }
                <h2 className='text-3xl font-bold  '>My Profile</h2>
                <div className='font-semibold'>
                    <p className='mt-4 '>Name: {displayName}</p>
                    <p className='mt-4 '>Education: {education} </p>
                    <p className='mt-4 '>Location: {location} </p>
                    <p className='mt-4 '>Phone: {number} </p>
                    <p className='mt-4 '>Linkdin: {linkdin} </p>
                    <p className='mt-4 '>Github:  {github}</p>
                </div>
            </div>

            <div className='  mt-8'>
                <h2 className='text-3xl font-semibold mb-3'>Update your Profile</h2>
                <form onSubmit={profileSubmit} className='form-control'>
                    <input type="text" value={displayName} className="input w-full mb-2 max-w-xs" readOnly />
                    <input type="text" value={email} className="input mb-2 w-full max-w-xs" />
                    <input name='education' type="text" placeholder='Education' className="input mb-2 w-full max-w-xs"  />
                    <input name='location' type="text" placeholder='Location' className="input mb-2 w-full max-w-xs"  />
                    <input type="text" name="phone" placeholder="phone" className="input mb-2 w-full max-w-xs" />
                    <input name='linkdin' type="text" placeholder='Linkdin' className="input mb-2 w-full max-w-xs"  />
                    <input name='github' type="text" placeholder='Github' className="input mb-3 w-full max-w-xs"  />
                    <input type="Submit" value="submit" className="btn w-full max-w-xs" />

                </form>
            </div>



        </div>
    );
};

export default MyProfile;