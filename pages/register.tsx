import AuthLayout from "../components/layouts/authLayout";
import Head from 'next/head'

const Register = () => {
    return (
        <>
            <Head>
                <title>Ship | Rgister</title>
            </Head>
            <p>Register Page</p>
        </>
    );
}

Register.getLayout = page => (
    <AuthLayout name={'register'}>
        {page}
    </AuthLayout>
)
export default Register;