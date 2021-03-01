import AppLayout from "../../../components/layouts/appLayout";
import Head from 'next/head';

const Map = () => {
    return (
        <>
            <Head>
                <title>Ship | Add</title>
            </Head>
            Ships Map page
        </>
    );
}

Map.getLayout = page => (
    <AppLayout>
        {page}
    </AppLayout>
)
export default Map;