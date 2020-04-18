import React from 'react';
import Layout from '../core/Layout';
import { API } from '../config';
// const Signin = () => <div>sign in</div>

const Signin = () => (
    <Layout
        title="Sign in"
        description="sign in to the ecommerce app"
    >
        {API}
    </Layout>
)

export default Signin;