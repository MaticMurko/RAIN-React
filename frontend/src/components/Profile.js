import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../userContext';
import { Navigate } from 'react-router-dom';

function Profile(){
    const userContext = useContext(UserContext); 
    const [profile, setProfile] = useState({});

    useEffect(function(){
        const getProfile = async function(){
            const res = await fetch("http://localhost:3001/users/profile", {credentials: "include"});
            const data = await res.json();
            setProfile(data);
        }
        getProfile();
    }, []);

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
                <h2 className="mb-3">👤 User Profile</h2>
                <p className="mb-2"><strong>Username:</strong> {profile.username}</p>
                <p className="mb-0"><strong>Email:</strong> {profile.email}</p>
            </div>
        </div>
    );
}

export default Profile;