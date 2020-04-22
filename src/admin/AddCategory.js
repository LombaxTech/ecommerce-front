import React, { useState } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth/index';
import { Link } from 'react-router-dom';
import { createCategory, testCreateCategory } from './apiAdmin';

const AddCategory = () => {

    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const { user, token } = isAuthenticated();
    const { name, _id } = user;

    const handleChange = e => {
        setCategoryName(e.target.value);
        setError('');
        setSuccess(false)
    }

    const clickSubmit = e => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        // console.log(_id, token, categoryName)
        createCategory(_id, token, categoryName)
            .then(data => {
                // console.log(data)
                if (data.error) {
                    setError(data.error);
                } else {
                    setError('');
                    setSuccess(true);
                    // setCategoryName('');
                }
            })

        // testCreateCategory()
        //     .then(data => {
        //         if (data.error) {
        //             setError(data.error);
        //         } else {
        //             setError('');
        //             setSuccess(true);
        //             // console.log(data);
        //         }
        //     })

        // testCreateCategory()
        //     .then(data => console.log(data))
    }

    const newCategoryForm = () => (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
                <label className="text-muted"></label>
                <input
                    value={categoryName}
                    type="text"
                    className="form-control"
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="btn btn-primary-outline">
                Add Category
            </button>
        </form>
    )

    const showSuccess = () => {
        if (success) {
            return <h3 className="text-success">{categoryName} has been created successfully!</h3>
        }
    }

    const showError = () => {
        if (error) {
            return <h3 className="text-danger">There has been an error, please try again.</h3>
        }
    }

    const goBack = () => (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning">
                Back to Dashboard
            </Link>
        </div>
    )

    return (
        <Layout
            title="Create a Category"
            description={`Ready to add a new category, ${name}`}

        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showSuccess()}
                    {showError()}
                    {newCategoryForm()}
                    {goBack()}
                </div>
            </div>
        </Layout>
    )

}

export default AddCategory;