import { useContext } from "react";
import { UserContext } from "../userContext";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header className="bg-dark text-white p-3 mb-4 shadow-sm">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h3 m-0">{props.title}</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <UserContext.Consumer>
                            {context => (
                                context.user ? (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/publish">Publish</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/profile">Profile</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/logout">Logout</Link>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-white" to="/register">Register</Link>
                                        </li>
                                    </>
                                )
                            )}
                        </UserContext.Consumer>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;