import Head from 'next/head';
import Router from 'next/router';
import { useState } from 'react';

import LoginForm from '../components/Forms/loginForm';
import AuthLayout from '../components/layouts/authLayout';
import auth from '../lib/authServices';

export default function Login() {
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
            <AuthLayout name={'login'}>
                <LoginForm onSubmit={handleSubmit} error={errorMessage} />
            </AuthLayout>
        </>
    );
}