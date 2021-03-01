import AuthLayout from "../components/layouts/authLayout";
import Head from 'next/head'

export default function Register() {
    return (
        <>
            <Head>
                <title>Ship | Login</title>
            </Head>
            <AuthLayout name={'register'}>
                <p>Register Page</p>
            </AuthLayout>
        </>
    );
}