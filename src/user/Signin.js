import React, { useState } from 'react';
import Layout from '../core/Layout';
import { Link } from 'react-router-dom';
import { signin } from '../auth/index';

const Signin = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    });

    const { name, email, password, error, success } = values;

    const clickSubmit = e => {
        e.preventDefault();
        setValues({ ...values, error: false });
        signin({ email, password })
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
                    })
                }
            })
    }

}

export default Signin;