import React from 'react';
import { NavLink } from 'react-router-dom';
import './SignUpPage.css';

const SignUpPage = () => {
    return (
        // sign up form
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-6 input-field-container roundeds">
                    <h2 className="fw-bold">Sign Up</h2>

                    <input className="input-field" type="text" placeholder="E-mail" required />
                    <br />
                    <input className="input-field" type="password" placeholder="Password" required />
                    <br />
                    <label>
                        <input type="checkbox" name="remember" style={{ marginBottom: "15px" }} /> By creating an account you agree to our <a href="/home" style={{ color: "dodgerblue" }}>Terms & Privacy</a>
                    </label>
                    {/* sign up and cancel button */}
                    <div className="clearfix">
                        <button type="button" className="form-btn signupbtn">Submit</button>
                        <NavLink to='/login'>
                            <button type="submit" className="form-btn loginbtn">Already Registerd?</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;