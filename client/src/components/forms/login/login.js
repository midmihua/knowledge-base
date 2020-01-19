import React from 'react';

import './login.css';

const Login = () => {
    return (
        <form>
            <div className="form-row">
                <div className="col">
                    <input type="text" className="form-control" placeholder="email" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="password" />
                </div>
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Login</button>
            </div>
        </form>
    );
}

export default Login;