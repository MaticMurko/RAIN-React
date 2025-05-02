import { useContext, useState } from 'react';
import { UserContext } from '../userContext';
import { Navigate } from 'react-router-dom';

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const userContext = useContext(UserContext); 

    async function Login(e){
        e.preventDefault();
        const res = await fetch("http://localhost:3001/users/login", {
            method: "POST",
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const data = await res.json();
        if(data._id !== undefined){
            userContext.setUserContext(data);
        } else {
            setUsername("");
            setPassword("");
            setError("Invalid username or password");
        }
    }

    return (
        <div className="container mt-5">
            {userContext.user ? <Navigate replace to="/" /> : ""}

            <form className="card shadow-sm p-4 mx-auto" style={{ maxWidth: '400px' }} onSubmit={Login}>
                <h2 className="mb-4 text-center">Login</h2>
                
                <div className="form-group mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mt-3">
                    Log In
                </button>

                {error && <div className="mt-3 text-danger text-center">{error}</div>}

                <div className="text-center mt-4">
                    <small>Don't have an account? <a href="/register">Register here</a></small>
                </div>
            </form>
        </div>
    );
}

export default Login;