import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';

import LoginForm from '../components/Forms/loginForm';
import AuthLayout from '../components/layouts/authLayout';
import auth from '../lib/authServices';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        try {
            setLoading(true);
            await auth.login(event.username, event.password);
            setLoading(false);
            Router.push('/dashboard')
        } catch (ex) {
            console.log(ex);
        }
    }

    return (
        <>
            <Head>
                <title>Ship | Login</title>
            </Head>
            <LoginForm onSubmit={handleSubmit} error={errorMessage} />
        </>
    );
}

// Login.layout = AuthLayout;
Login.getLayout = page => (
    <AuthLayout name={'login'}>
        {page}
    </AuthLayout>
)
export default Login;