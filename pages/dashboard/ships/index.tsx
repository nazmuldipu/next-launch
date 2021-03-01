import AppLayout from "../../../components/layouts/appLayout";
import Head from 'next/head';

const Ships = () => {
    return (
        <>
            <Head>
                <title>Ship | Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Ships Page
        </>
    );
}

Ships.getLayout = page => (
    <AppLayout>
        {page}
    </AppLayout>
)
export default Ships;