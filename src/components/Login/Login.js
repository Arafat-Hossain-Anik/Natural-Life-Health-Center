import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div>
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-6 input-field-container roundeds">
                        <h2 className="fw-bold">Login</h2>

                        <input className="input-field" type="text" placeholder="E-mail" required />
                        <br />
                        <input className="input-field" type="password" placeholder="Password" required />
                        <br />
                        {/* sign up and cancel button */}
                        <div className="clearfix">
                            <button type="button" className="form-btn signupbtn">Submit</button>
                            <NavLink to='/login'>
                                <button onClick={signInUsingGoogle} type="submit" className="form-btn loginbtn">Login With Google</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;