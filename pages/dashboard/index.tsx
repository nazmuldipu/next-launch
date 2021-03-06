import Head from 'next/head';

import AppLayout from '../../components/layouts/appLayout';

const Dashboard = () => {
    return (
        <>
            <Head>
                <title>Ship | Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            Dashboard Page
        </>
    );
}

Dashboard.getLayout = page => (
    <AppLayout>
        {page}
    </AppLayout>
)
export default Dashboard