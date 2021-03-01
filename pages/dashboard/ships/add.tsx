import AppLayout from "../../../components/layouts/appLayout";
import Head from 'next/head';

const Add = () => {
    return (
        <>
            <Head>
                <title>Ship | Add</title>
            </Head>
            Ships add page
        </>
    );
}

Add.getLayout = page => (
    <AppLayout>
        {page}
    </AppLayout>
)
export default Add;