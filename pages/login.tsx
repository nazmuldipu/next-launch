import AuthLayout from "../components/layouts/authLayout";
import Head from 'next/head'
import { useState } from 'react'
import LoginForm from "../components/Forms/loginForm";

export default function Login({ location }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        console.log(event);
        console.log(location);
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