import React, { useState } from 'react';
import Layout from '../core/Layout'
import { Link } from 'react-router-dom';
import { signup } from '../auth/index';

// const Signup = () => <div>signup</div>

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        eror: '',
        success: false
    });

    const { name, email, password, error, success } = values;

    const handleChange = name => (
        event => {
            setValues({
                ...values,
                error: false,
                [name]: event.target.value
            });
        }
    )

    const clickSubmit = e => {
        e.preventDefault();
        signup({ name, email, password })
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error, success: false })
                } else {
                    setValues({
                        ...values,
                        name: '',
                        email: '',
                        password: '',
                        error: '',
                        success: true
                    });
                }
            })
    }

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name: </label>
                <input onChange={handleChange('name')} type="text" className="form-control" value={name} />
            </div>

            <div className="form-group">
                <label className="text-muted">Email: </label>
                <input onChange={handleChange('email')} type="text" className="form-control" value={email} />
            </div>

            <div className="form-group">
                <label className="text-muted">Password: </label>
                <input onChange={handleChange('password')} type="password" className="form-control" value={password} />
            </div>

            <button onClick={clickSubmit} className="btn btn-primary">Sign up</button>
        </form>
    )

    const showError = () => (
        <div
            className="alert alert-danger"
            style={{ display: error ? '' : 'none' }}
        >
            {error}
        </div>
    )

    const showSuccess = () => (
        <div
            className="alert alert-info"
            style={{ display: success ? '' : 'none' }}
        >
            New account has been successfully created. Please <Link to="/signin">Sign in</Link>
        </div>
    )

    return (
        <Layout
            title="Sign up"
            description="sign up for e commerce"
            className="container col-md-8 offset-md-2"
        >
            {showSuccess()}
            {showError()}
            {signUpForm()}
            {name}
        </Layout>
    );

}

export default Signup;