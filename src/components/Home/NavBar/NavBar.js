import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../hooks/useAuth';
const userIcon = <FontAwesomeIcon icon={faUser} />
const NavBar = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            {/* navbar is here */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fs-5 p-3">
                <div className="container">
                    <a className="navbar-brand" href="/">NaturalHealth</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/home#services">Services</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/home#doctors">Doctors</HashLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center">
                            {user.email ?
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink onClick={logout} className="nav-link" to="/login">Logout</NavLink>
                                    </li>
                                </ul>
                                :
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">Login</NavLink>
                                    </li>
                                </ul>}
                            <span className='text-light'>{userIcon} {user.displayName ? user.displayName : user.email}
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;