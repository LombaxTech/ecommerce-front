import React, { useState } from 'react';
import Layout from '../core/Layout'

// const Signup = () => <div>signup</div>

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        eror: '',
        sucsess: false
    });

    const handleChange = name => (
        event => {
            setValues({
                ...values,
                error: false,
                [name]: event.target.value
            });
        }
    )

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name: </label>
                <input onChange={handleChange('name')} type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Email: </label>
                <input onChange={handleChange('email')} type="text" className="form-control" />
            </div>

            <div className="form-group">
                <label className="text-muted">Password: </label>
                <input onChange={handleChange('password')} type="password" className="form-control" />
            </div>

            <button className="btn btn-primary">Sign up</button>
        </form>
    )

    return (
        <Layout
            title="Sign up"
            description="sign up for e commerce"
            className="container col-md-8 offset-md-2"
        >
            {signUpForm()}
            {JSON.stringify(values)}
        </Layout>
    );

}

export default Signup;