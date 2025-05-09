import React from 'react'
import Input from './Input';

function Login(props) {
    return (
        <form className="form">
            <Input
                type="text"
                placeholder="Enter userName"
            />
            <Input
                type="password"
                placeholder="Enter password"
            />
            {props.isLoggedIN === false &&
                <Input
                    type="password"
                    placeholder="Confirm password"
                />}
            <button type="submit">{props.isLoggedIN ? "Login" : "Register"}</button>
        </form>
    )
}

export default Login;