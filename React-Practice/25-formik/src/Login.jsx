import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/* 
setSubmitting(true/false)	- Controls isSubmitting flag (for loading states)
resetForm()	                - Resets the form to initialValues
setErrors()	                - Manually set form errors
setFieldValue()	            - Set a specific field value
setTouched()	            - Mark a field as "touched"
 */

const Login = () => {
    const initialValues = {
        name: '',
        email: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post('https://example.com/api/signup', values);
            console.log('✅Server response:', response.data);
            resetForm(); // reset form after successful submit
        } catch (error) {
            console.error('❌ Error submitting form:', error);
        } finally {
            setSubmitting(false); // stop spinner/loading
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (    
                    <Form>
                        <div>
                            <label>Name:</label>
                            <Field name="name" type="text" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div>
                            <label>Email:</label>
                            <Field name="email" type="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;